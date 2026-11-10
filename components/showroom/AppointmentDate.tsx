'use client';
import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { DayButton, Root, type DayButtonProps } from 'react-day-picker';
import type { Field } from '@/lib/industry-types';
export function localDate(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}
function parseDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return undefined;
  const date = new Date(value + 'T12:00:00');
  return Number.isFinite(date.getTime()) && localDate(date) === value
    ? date
    : undefined;
}
// Stable component identities preserve the grid and its roving keyboard focus.
function AppointmentDay(props: DayButtonProps) {
  return (
    <DayButton
      {...props}
      data-day={localDate(props.day.date)}
      data-selected-single={props.modifiers.selected || undefined}
      className="appointment-day"
    />
  );
}
const calendarComponents = { Root, DayButton: AppointmentDay };
export default function AppointmentDate({
  field,
  value,
  onChange,
  invalid,
}: {
  field: Field;
  value: string;
  onChange: (value: string) => void;
  invalid: boolean;
}) {
  const [today] = useState(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  });
  const end = new Date(today);
  end.setMonth(end.getMonth() + 6);
  const selected = parseDate(value);
  const [month, setMonth] = useState(() => selected || today);
  return (
    <div className="appointment-picker">
      <Calendar
        mode="single"
        selected={selected}
        onSelect={(d) => onChange(d ? localDate(d) : '')}
        disabled={[{ before: today }, { after: end }]}
        startMonth={today}
        endMonth={end}
        month={month}
        onMonthChange={setMonth}
        components={calendarComponents}
        className="showroom-calendar"
      />
      <div className="calendar-guidance">
        <span className="eyebrow">DEMONSTRATION CALENDAR</span>
        <h3>
          A little room
          <br />
          in the schedule.
        </h3>
        <p>
          Choose a sample date within the next six months. Times and visit
          windows are illustrative.
        </p>
        <label htmlFor={`demo-${field.id}`}>Or enter a date</label>
        <input
          id={`demo-${field.id}`}
          type="date"
          aria-label={field.label}
          aria-invalid={invalid}
          aria-describedby={invalid ? `error-${field.id}` : undefined}
          value={value}
          min={localDate(today)}
          max={localDate(end)}
          onChange={(e) => {
            onChange(e.target.value);
            const date = parseDate(e.target.value);
            if (date && date >= today && localDate(date) <= localDate(end)) {
              setMonth(date);
            }
          }}
        />
        {value && (
          <span className="chosen-date" aria-live="polite">
            {selected?.toLocaleDateString('en-US', {
              weekday: 'long',
              month: 'short',
              day: 'numeric',
            })}
          </span>
        )}
      </div>
    </div>
  );
}
