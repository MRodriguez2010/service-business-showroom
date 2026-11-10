'use client';
import { useRef, useState, type SubmitEvent } from 'react';
import { ArrowLeft, ArrowRight, Check, RotateCcw } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import type { Field, IndustryContent } from '@/lib/industry-types';
import { useSite } from './SiteParts';
import AppointmentDate from './AppointmentDate';
import { estimatePlan } from '@/lib/demo-pricing';
type Answers = Record<string, string | string[]>;
export function validateField(
  field: Field,
  value: string | string[] | undefined,
) {
  if (field.optional && (!value || (Array.isArray(value) && !value.length)))
    return '';
  if (!value || (Array.isArray(value) ? value.length === 0 : !value.trim()))
    return `Please ${field.type === 'multi' ? 'choose at least one option' : 'complete this field'}.`;
  if (field.type === 'number') {
    const n = Number(value);
    if (
      !Number.isFinite(n) ||
      !Number.isInteger(n) ||
      n < (field.min ?? 1) ||
      n > (field.max ?? 10000)
    )
      return `Enter a whole number from ${field.min ?? 1} to ${field.max ?? 10000}.`;
  }
  if (field.type === 'choice' && !field.options?.includes(value as string))
    return 'Choose an available option.';
  if (
    field.type === 'multi' &&
    (!Array.isArray(value) || value.some((v) => !field.options?.includes(v)))
  )
    return 'Choose from the available options.';
  if (field.type === 'date') {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const end = new Date(today);
    end.setMonth(end.getMonth() + 6);
    end.setHours(23, 59, 59, 999);
    const date = new Date(value + 'T12:00:00');
    const parts = String(value).split('-').map(Number);
    if (
      !/^\d{4}-\d{2}-\d{2}$/.test(value as string) ||
      !Number.isFinite(date.getTime()) ||
      date.getFullYear() !== parts[0] ||
      date.getMonth() + 1 !== parts[1] ||
      date.getDate() !== parts[2] ||
      date < today ||
      date > end
    )
      return 'Choose a valid date within the next six months.';
  }
  return '';
}
export default function DemoFlow({ content }: { content: IndustryContent }) {
  const flow = content.flow;
  const { meta, plan, setPlan } = useSite();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(plan);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const focus = useRef<HTMLHeadingElement>(null);
  const current = flow.steps[Math.min(step, flow.steps.length - 1)];
  const review = step === flow.steps.length;
  const estimate = estimatePlan(meta.id, answers);
  const money = (n: number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(n);
  const estimatePanel = (
    <div className="live-estimate" aria-live="polite">
      <span className="eyebrow">{estimate.unit.toUpperCase()}</span>
      {estimate.ready ? (
        <>
          <strong className="estimate-amount">
            {estimate.total ? money(estimate.total) : 'Let’s assess'}
          </strong>
          {estimate.total > 0 && (
            <span className="estimate-range">
              {meta.id === 'barbershop'
                ? 'Illustrative service price'
                : `Planning range ${money(estimate.low)}–${money(estimate.high)}`}
            </span>
          )}
          <dl className="estimate-lines">
            {estimate.lines.map((line, i) => (
              <div key={i}>
                <dt>{line.label}</dt>
                <dd>{money(line.amount)}</dd>
              </div>
            ))}
          </dl>
          <span className="estimate-duration">
            Sample time allowance ·{' '}
            {estimate.minutes >= 60
              ? `${Math.floor(estimate.minutes / 60)} hr ${estimate.minutes % 60 ? (estimate.minutes % 60) + ' min' : ''}`
              : `${estimate.minutes} min`}
          </span>
        </>
      ) : (
        <>
          <strong className="estimate-prompt">
            Your plan takes
            <br />
            shape here.
          </strong>
          <p>
            Choose the service details to see the sample scope and itemized
            estimate.
          </p>
        </>
      )}
      <p className="estimate-disclaimer">{estimate.note}</p>
    </div>
  );
  const change = (id: string, value: string | string[]) => {
    const next = { ...answers, [id]: value };
    setAnswers(next);
    setPlan(next);
    setErrors((e) => ({ ...e, [id]: '' }));
  };
  const advance = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (review) {
      setDone(true);
      setTimeout(() => focus.current?.focus(), 0);
      return;
    }
    const nextErrors: Record<string, string> = {};
    for (const f of current.fields) {
      const error = validateField(f, answers[f.id]);
      if (error) nextErrors[f.id] = error;
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setTimeout(() => {
        const field = document.getElementById(
          'demo-' + Object.keys(nextErrors)[0],
        );
        const firstControl = field?.querySelector<HTMLElement>(
          'button,[role="radio"],[role="checkbox"],input:not([type="hidden"])',
        );
        (firstControl ?? field)?.focus();
      }, 0);
      return;
    }
    setStep((s) => s + 1);
    setTimeout(() => focus.current?.focus(), 0);
  };
  const summary = (
    <dl className="answer-summary">
      {flow.steps
        .flatMap((s) => s.fields)
        .map((f) => (
          <div key={f.id}>
            <dt>{f.label}</dt>
            <dd>
              {Array.isArray(answers[f.id])
                ? (answers[f.id] as string[]).join(', ') || 'None selected'
                : answers[f.id] || 'Not specified'}
            </dd>
          </div>
        ))}
    </dl>
  );
  return (
    <section className={`demo-page demo-${meta.id}`}>
      <div className="demo-heading">
        <p className="eyebrow">LET’S MAKE A PLAN</p>
        <h1>{flow.title}</h1>
        <p>{flow.intro}</p>
      </div>
      <div className="demo-layout">
        <aside className="demo-aside">
          {estimatePanel}
          <div>
            <span className="demo-badge">INTERACTIVE EXAMPLE</span>
            <h2>
              Your preferences.
              <br />A clearer starting point.
            </h2>
            <p>
              Try the complete journey with sample details. Nothing is
              submitted, reserved, or charged.
            </p>
            <ol>
              {flow.steps.map((s, i) => (
                <li key={s.title} className={step >= i ? 'current' : ''}>
                  <span>{step > i ? <Check size={13} /> : i + 1}</span>
                  {s.title}
                </li>
              ))}
            </ol>
            {Object.keys(answers).length > 0 && (
              <div className="plan-so-far">
                <h3>Your plan so far</h3>
                <dl>
                  {flow.steps
                    .flatMap((s) => s.fields)
                    .filter(
                      (f) =>
                        answers[f.id] &&
                        (!Array.isArray(answers[f.id]) ||
                          (answers[f.id] as string[]).length),
                    )
                    .map((f) => (
                      <div key={f.id}>
                        <dt>{f.label}</dt>
                        <dd>
                          {Array.isArray(answers[f.id])
                            ? (answers[f.id] as string[]).join(', ')
                            : answers[f.id]}
                        </dd>
                      </div>
                    ))}
                </dl>
              </div>
            )}
          </div>
        </aside>
        <form className="demo-form" onSubmit={advance} noValidate>
          {done ? (
            <>
              <span className="success-mark">
                <Check size={30} />
              </span>
              <p className="eyebrow">EXAMPLE COMPLETE</p>
              <h2 ref={focus} tabIndex={-1}>
                Your sample plan is ready.
              </h2>
              <p className="demo-confirmation">
                This is a preview, not a confirmed booking. {flow.next}
              </p>
              {summary}
              <div className="summary-estimate">{estimatePanel}</div>
              <button
                type="button"
                className="site-button secondary"
                onClick={() => window.print()}
              >
                Print / save sample plan
              </button>
              <button
                type="button"
                className="site-button"
                onClick={() => {
                  setDone(false);
                  setStep(0);
                  setAnswers({});
                  setPlan({});
                  setErrors({});
                }}
              >
                <RotateCcw size={16} /> Try another plan
              </button>
            </>
          ) : (
            <>
              <div className="flow-progress">
                <span>
                  {review
                    ? 'YOUR SUMMARY'
                    : `STEP ${step + 1} OF ${flow.steps.length}`}
                </span>
                <span>{review ? 'Review' : current.title}</span>
              </div>
              <h2 ref={focus} tabIndex={-1}>
                {review ? 'Looking good? Review your plan.' : current.title}
              </h2>
              <p>
                {review
                  ? 'These are the details a real business could use to follow up with you.'
                  : current.intro}
              </p>
              {review ? (
                <>
                  {summary}
                  <div className="summary-estimate">{estimatePanel}</div>
                </>
              ) : (
                <div className="flow-fields">
                  {current.fields.map((f) => (
                    <fieldset key={f.id} className="flow-field">
                      <legend>
                        {f.label}
                        {f.optional && <span> Optional</span>}
                      </legend>
                      {f.hint && (
                        <p className="field-hint" id={`hint-${f.id}`}>
                          {f.hint}
                        </p>
                      )}
                      {f.type === 'choice' ? (
                        <RadioGroup
                          id={`demo-${f.id}`}
                          aria-label={f.label}
                          aria-invalid={!!errors[f.id]}
                          aria-describedby={
                            errors[f.id]
                              ? `error-${f.id}`
                              : f.hint
                                ? `hint-${f.id}`
                                : undefined
                          }
                          value={(answers[f.id] as string) || ''}
                          onValueChange={(v) => change(f.id, v)}
                          className="choice-grid"
                        >
                          {f.options!.map((option, i) => (
                            <label
                              className={`choice-card ${answers[f.id] === option ? 'chosen' : ''}`}
                              key={option}
                            >
                              <RadioGroupItem
                                value={option}
                                id={`${f.id}-${i}`}
                              />
                              <span>{option}</span>
                            </label>
                          ))}
                        </RadioGroup>
                      ) : f.type === 'multi' ? (
                        <div
                          id={`demo-${f.id}`}
                          tabIndex={-1}
                          className="choice-grid"
                          role="group"
                          aria-label={f.label}
                          aria-describedby={
                            errors[f.id] ? `error-${f.id}` : undefined
                          }
                        >
                          {f.options!.map((option, i) => {
                            const selected = (answers[f.id] as string[]) || [];
                            return (
                              <label
                                className={`choice-card ${selected.includes(option) ? 'chosen' : ''}`}
                                key={option}
                              >
                                <Checkbox
                                  id={`${f.id}-${i}`}
                                  checked={selected.includes(option)}
                                  onCheckedChange={(checked) =>
                                    change(
                                      f.id,
                                      checked
                                        ? [...selected, option]
                                        : selected.filter((x) => x !== option),
                                    )
                                  }
                                />
                                <span>{option}</span>
                              </label>
                            );
                          })}
                        </div>
                      ) : f.type === 'date' ? (
                        <AppointmentDate
                          field={f}
                          value={(answers[f.id] as string) || ''}
                          onChange={(value) => change(f.id, value)}
                          invalid={!!errors[f.id]}
                        />
                      ) : (
                        <input
                          id={`demo-${f.id}`}
                          aria-label={f.label}
                          aria-invalid={!!errors[f.id]}
                          aria-describedby={
                            errors[f.id] ? `error-${f.id}` : undefined
                          }
                          type={f.type}
                          min={f.min}
                          max={f.max}
                          maxLength={160}
                          inputMode={
                            f.type === 'number' ? 'numeric' : undefined
                          }
                          value={(answers[f.id] as string) || ''}
                          placeholder={
                            f.type === 'number'
                              ? 'Enter a number'
                              : f.type === 'text'
                                ? 'Use sample details'
                                : ''
                          }
                          onChange={(e) => change(f.id, e.target.value)}
                        />
                      )}{' '}
                      {errors[f.id] && (
                        <p
                          id={`error-${f.id}`}
                          className="field-error"
                          role="alert"
                        >
                          {errors[f.id]}
                        </p>
                      )}
                    </fieldset>
                  ))}
                </div>
              )}
              <div className="flow-actions">
                {step > 0 ? (
                  <button
                    type="button"
                    className="back-button"
                    onClick={() => {
                      setStep((s) => s - 1);
                      setErrors({});
                    }}
                  >
                    <ArrowLeft size={16} /> Back
                  </button>
                ) : (
                  <span />
                )}
                <button type="submit" className="site-button">
                  {review ? 'Create sample summary' : 'Continue'}
                  <ArrowRight size={17} />
                </button>
              </div>
              <p className="flow-privacy">
                Demo only · Your entries stay in this preview
              </p>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
