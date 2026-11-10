'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { HexColorPicker, HexColorInput } from 'react-colorful';
import { useDropzone } from 'react-dropzone';
import {
  ArrowUpRight,
  ImagePlus,
  Monitor,
  Smartphone,
  RotateCcw,
  Maximize2,
  Minimize2,
  SlidersHorizontal,
  Check,
  X,
  ArrowRight,
} from 'lucide-react';
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxEmpty,
} from '@/components/ui/combobox';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  catalog,
  getIndustry,
  resolveRoute,
  routeHref,
  contactHref,
  isHex,
  type BrandPreview,
  type Palette,
  type IndustryMeta,
} from '@/lib/showroom';
import { prepareLogo } from '@/lib/logo';

const industryLabels = catalog.map((item) => item.label);
function IndustryPicker({
  meta,
  id,
  onSelect,
}: {
  meta: IndustryMeta;
  id: string;
  onSelect: (id: string) => void;
}) {
  const input = useRef<HTMLInputElement>(null);
  const restoreFocus = useRef(false);
  useEffect(() => {
    if (restoreFocus.current) {
      input.current?.focus();
      restoreFocus.current = false;
    }
  }, [meta.id]);
  return (
    <Combobox
      key={meta.id}
      items={industryLabels}
      value={meta.label}
      onValueChange={(value) => {
        const selected = catalog.find((item) => item.label === value);
        if (selected && selected.id !== meta.id) {
          restoreFocus.current = true;
          onSelect(selected.id);
        }
      }}
    >
      <ComboboxInput
        ref={input}
        id={id}
        aria-label="Choose your industry"
        placeholder="Search industries…"
      />
      <ComboboxContent>
        <ComboboxEmpty>No matching industry.</ComboboxEmpty>
        <ComboboxList>
          {(item: string) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}

function LogoDrop({
  shape,
  value,
  onChange,
  epoch,
}: {
  shape: 'square' | 'wide';
  value?: string;
  onChange: (s?: string) => void;
  epoch: number;
}) {
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const ticket = useRef(0);
  useEffect(() => {
    ticket.current++;
    setError('');
    setBusy(false);
  }, [epoch]);
  useEffect(
    () => () => {
      ticket.current++;
    },
    [],
  );
  const drop = useCallback(
    async (files: File[]) => {
      if (!files[0]) return;
      const attempt = ++ticket.current;
      setError('');
      setBusy(true);
      try {
        const result = await prepareLogo(files[0]);
        if (attempt === ticket.current) onChange(result);
      } catch (e) {
        if (attempt === ticket.current) setError((e as Error).message);
      } finally {
        if (attempt === ticket.current) setBusy(false);
      }
    },
    [onChange],
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDropAccepted: drop,
    onDropRejected: () =>
      setError('Use one PNG, JPEG, WebP, or SVG, up to 5 MB.'),
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/webp': ['.webp'],
      'image/svg+xml': ['.svg'],
    },
    maxSize: 5 * 1024 * 1024,
    maxFiles: 1,
    multiple: false,
  });
  return (
    <div className="logo-upload">
      <div
        {...getRootProps({
          className: `dropzone ${shape} ${isDragActive ? 'drag-active' : ''}`,
          role: 'button',
          'aria-label': `Upload ${shape === 'wide' ? 'rectangular' : 'square'} logo`,
        })}
      >
        <input
          {...getInputProps({
            'aria-label': `${shape === 'wide' ? 'Rectangular' : 'Square'} logo file`,
          })}
        />
        {value ? (
          <img src={value} alt={`${shape} logo preview`} />
        ) : (
          <>
            <ImagePlus size={19} />
            <span>
              {busy
                ? 'Preparing…'
                : shape === 'wide'
                  ? 'Rectangular logo'
                  : 'Square logo'}
            </span>
            <small>{isDragActive ? 'Drop it here' : 'Drop or browse'}</small>
          </>
        )}
      </div>
      {value && (
        <button
          className="remove-logo"
          onClick={() => {
            ticket.current++;
            onChange(undefined);
          }}
          aria-label={`Remove ${shape} logo`}
        >
          <X size={12} /> Remove
        </button>
      )}
      {error && (
        <p role="alert" className="field-error">
          {error}
        </p>
      )}
    </div>
  );
}
export default function Showroom() {
  const [route, setRoute] = useState({ industry: 'food-trucks', page: 'home' });
  const [brand, setBrand] = useState<BrandPreview>({});
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [drawer, setDrawer] = useState(false);
  const [full, setFull] = useState(false);
  const [epoch, setEpoch] = useState(0);
  const [ready, setReady] = useState(false);
  const [notice, setNotice] = useState('');
  const frame = useRef<HTMLIFrameElement>(null);
  const latest = useRef({ route, brand, epoch });
  const meta = getIndustry(route.industry);
  const palette = { ...meta.palette, ...brand.colors };
  const navigate = useCallback(
    (industry: string, page = 'home', push = true) => {
      const m = getIndustry(industry);
      const next = {
        industry: m.id,
        page: m.pages.some((p) => p.id === page) ? page : 'home',
      };
      setRoute(next);
      if (push)
        window.history.pushState({}, '', routeHref(next.industry, next.page));
    },
    [],
  );
  useEffect(() => {
    setRoute(resolveRoute(window.location.search));
    const pop = () => setRoute(resolveRoute(window.location.search));
    window.addEventListener('popstate', pop);
    return () => window.removeEventListener('popstate', pop);
  }, []);
  const sync = useCallback(() => {
    frame.current?.contentWindow?.postMessage(
      { type: 'showroom:state', ...latest.current },
      window.location.origin,
    );
  }, []);
  useEffect(() => {
    latest.current = { route, brand, epoch };
    sync();
  }, [route, brand, epoch, sync]);
  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (
        e.origin !== window.location.origin ||
        e.source !== frame.current?.contentWindow ||
        !e.data ||
        typeof e.data !== 'object'
      )
        return;
      if (e.data.type === 'preview:ack') setReady(true);
      if (e.data.type === 'preview:escape') setFull(false);
      if (e.data.type === 'preview:ready') {
        setReady(true);
        sync();
      }
      if (
        e.data.type === 'preview:navigate' &&
        typeof e.data.page === 'string'
      ) {
        const { industry } = latest.current.route;
        if (getIndustry(industry).pages.some((p) => p.id === e.data.page))
          navigate(industry, e.data.page);
      }
    };
    window.addEventListener('message', handler);
    sync();
    return () => window.removeEventListener('message', handler);
  }, [navigate, sync]);
  useEffect(() => {
    const esc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setFull(false);
    };
    window.addEventListener('keydown', esc);
    return () => window.removeEventListener('keydown', esc);
  }, []);
  const reset = () => {
    setBrand({});
    setEpoch((x) => x + 1);
    setNotice('Original branding restored.');
  };
  useEffect(() => {
    if (!notice) return;
    const t = setTimeout(() => setNotice(''), 2500);
    return () => clearTimeout(t);
  }, [notice]);
  useEffect(() => {
    const nav = navigator as Navigator & {
      modelContext?: {
        registerTool: (v: unknown) => void;
        unregisterTool: (name: string) => void;
      };
    };
    if (!nav.modelContext) return;
    const names = [
      'showroom_list_industries',
      'showroom_select_industry',
      'showroom_set_brand',
      'showroom_reset_brand',
    ];
    const tools = [
      {
        name: names[0],
        description: 'List the twelve website industries and their pages.',
        inputSchema: { type: 'object', properties: {} },
        execute: async () => ({
          content: [
            {
              type: 'text',
              text: JSON.stringify(
                catalog.map(({ id, label, pages }) => ({ id, label, pages })),
              ),
            },
          ],
        }),
      },
      {
        name: names[1],
        description: 'Show an industry website and one of its pages.',
        inputSchema: {
          type: 'object',
          properties: {
            industry: { type: 'string' },
            page: { type: 'string' },
          },
          required: ['industry'],
        },
        execute: async (args: { industry: string; page?: string }) => {
          if (!catalog.some((c) => c.id === args.industry))
            throw new Error('Unknown industry');
          navigate(args.industry, args.page);
          return { content: [{ type: 'text', text: 'Preview changed.' }] };
        },
      },
      {
        name: names[2],
        description:
          'Temporarily change the displayed business name or colors. No data is saved.',
        inputSchema: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            primary: { type: 'string' },
            surface: { type: 'string' },
            accent: { type: 'string' },
          },
        },
        execute: async (args: {
          name?: string;
          primary?: string;
          surface?: string;
          accent?: string;
        }) => {
          const colors: Partial<Palette> = {};
          for (const k of ['primary', 'surface', 'accent'] as const)
            if (args[k]) {
              if (!isHex(args[k])) throw new Error('Use six-digit hex colors');
              colors[k] = args[k];
            }
          setBrand((b) => ({
            ...b,
            ...(typeof args.name === 'string'
              ? { name: args.name.slice(0, 70) }
              : {}),
            colors: { ...b.colors, ...colors },
          }));
          return {
            content: [{ type: 'text', text: 'Temporary branding applied.' }],
          };
        },
      },
      {
        name: names[3],
        description:
          'Restore original example branding and remove temporary logos.',
        inputSchema: { type: 'object', properties: {} },
        execute: async () => {
          reset();
          return { content: [{ type: 'text', text: 'Branding reset.' }] };
        },
      },
    ];
    for (const t of tools) nav.modelContext.registerTool(t);
    return () => {
      for (const name of names) nav.modelContext?.unregisterTool(name);
    };
  }, [navigate]);
  const controls = (mobile = false) => (
    <>
      <div className="panel-heading">
        <span className="eyebrow">MAKE IT YOURS</span>
        <h2>
          A little imagination.
          <br />
          Your whole business.
        </h2>
        <p>Try your brand on a complete website.</p>
      </div>
      <label
        className="control-label"
        htmlFor={mobile ? 'industry-search-mobile' : 'industry-search'}
      >
        Choose your industry <span>12 examples</span>
      </label>
      <IndustryPicker
        meta={meta}
        id={mobile ? 'industry-search-mobile' : 'industry-search'}
        onSelect={navigate}
      />
      <div className="panel-divider" />
      <label
        className="control-label"
        htmlFor={mobile ? 'business-name-mobile' : 'business-name'}
      >
        Business name
      </label>
      <input
        className="text-input"
        id={mobile ? 'business-name-mobile' : 'business-name'}
        maxLength={70}
        value={brand.name ?? ''}
        placeholder={meta.name}
        onChange={(e) => setBrand((b) => ({ ...b, name: e.target.value }))}
      />
      <div className="control-label palette-label">Your colors</div>
      <div className="palette-controls">
        {(['primary', 'surface', 'accent'] as const).map((key, i) => (
          <div className="color-control" key={key}>
            <Popover>
              <PopoverTrigger
                className="color-swatch"
                aria-label={`Choose ${key} color`}
                style={{ background: palette[key] }}
              />
              <PopoverContent className="color-popover" side="right">
                <strong>{['Primary', 'Background', 'Accent'][i]}</strong>
                <HexColorPicker
                  color={palette[key]}
                  onChange={(c) =>
                    setBrand((b) => ({
                      ...b,
                      colors: { ...b.colors, [key]: c },
                    }))
                  }
                />
              </PopoverContent>
            </Popover>
            <span>{['Primary', 'Background', 'Accent'][i]}</span>
            <HexColorInput
              aria-label={`${key} hex color`}
              color={palette[key]}
              prefixed
              onChange={(c) => {
                if (isHex(c))
                  setBrand((b) => ({
                    ...b,
                    colors: { ...b.colors, [key]: c },
                  }));
              }}
            />
          </div>
        ))}
      </div>
      <div className="control-label logo-label">
        Your logo <span>Optional</span>
      </div>
      <div className="logo-grid">
        <LogoDrop
          shape="wide"
          value={brand.wide}
          epoch={epoch}
          onChange={(v) => setBrand((b) => ({ ...b, wide: v }))}
        />
        <LogoDrop
          shape="square"
          value={brand.square}
          epoch={epoch}
          onChange={(v) => setBrand((b) => ({ ...b, square: v }))}
        />
      </div>
      <p className="upload-note">PNG, JPG, WebP or SVG · Up to 5 MB each</p>
      <div className="privacy-note">
        <Check size={14} />
        <span>Just a preview. Your uploads stay in this tab.</span>
      </div>
      <button className="reset-button" onClick={reset}>
        <RotateCcw size={15} /> Reset branding
      </button>
      <div className="panel-contact">
        <span>See your business in this?</span>
        <a href={contactHref(meta.id)}>
          Let’s build your website <ArrowUpRight size={16} />
        </a>
      </div>
    </>
  );
  return (
    <main className={`showroom ${full ? 'is-fullscreen' : ''}`}>
      <aside className="brand-panel">
        <a
          className="studio-mark"
          href="https://miguel.systems"
          target="_blank"
          rel="noreferrer"
        >
          <span className="studio-icon">m.</span>
          <span>
            MIGUEL SYSTEMS<small>THE INDUSTRY SHOWROOM</small>
          </span>
          <ArrowUpRight size={14} />
        </a>
        <div className="panel-scroll">{controls()}</div>
      </aside>
      <section className="preview-workspace" aria-label="Website showroom">
        <header className="preview-toolbar">
          <div className="preview-title">
            <span className="live-dot" />
            <strong>{meta.label}</strong>
            <span className="premium-tag">PREMIUM EXAMPLE</span>
          </div>
          <div className="view-controls">
            <Select
              value={route.page}
              onValueChange={(p) => p && navigate(meta.id, p)}
            >
              <SelectTrigger className="page-select" aria-label="Preview page">
                <SelectValue>
                  {meta.pages.find((p) => p.id === route.page)?.label}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {meta.pages.map((p) => (
                  <SelectItem key={p.id} value={p.id}>
                    {p.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div
              className="device-switch"
              role="group"
              aria-label="Preview device"
            >
              <button
                aria-label="Desktop preview"
                aria-pressed={device === 'desktop'}
                onClick={() => setDevice('desktop')}
              >
                <Monitor size={17} />
              </button>
              <button
                aria-label="Mobile preview"
                aria-pressed={device === 'mobile'}
                onClick={() => setDevice('mobile')}
              >
                <Smartphone size={16} />
              </button>
            </div>
            <button
              className="icon-button fullscreen-button"
              aria-label={full ? 'Exit fullscreen' : 'Fullscreen preview'}
              onClick={() => setFull(!full)}
            >
              {full ? <Minimize2 size={17} /> : <Maximize2 size={17} />}
            </button>
            <button
              className="mobile-brand-button"
              onClick={() => setDrawer(true)}
            >
              <SlidersHorizontal size={16} /> Brand it
            </button>
          </div>
        </header>
        <div className={`preview-stage ${device}`}>
          <div className="frame-wrap">
            <div className="frame-address">
              <span className="window-dots">
                <i />
                <i />
                <i />
              </span>
              <span>
                {brand.name?.trim() || meta.name}{' '}
                <span className="address-divider">/</span>{' '}
                {meta.pages.find((p) => p.id === route.page)?.label}
              </span>
              <span className="sample-pill">SAMPLE WEBSITE</span>
            </div>
            <iframe
              ref={frame}
              title={`${meta.label} website preview`}
              src="/preview/"
              onLoad={() => {
                setReady(true);
                sync();
              }}
              allow=""
              referrerPolicy="same-origin"
            />
            {!ready && (
              <div className="preview-loading" role="status">
                Opening your example…
              </div>
            )}
          </div>
        </div>
        <footer className="workspace-footer">
          <span>12 industries. A different experience for each.</span>
          <a href={contactHref(meta.id)}>
            Discuss your website <ArrowUpRight size={13} />
          </a>
        </footer>
      </section>
      <Sheet open={drawer} onOpenChange={setDrawer}>
        <SheetContent className="branding-sheet" side="bottom">
          <SheetTitle className="sr-only">Personalize this website</SheetTitle>
          <SheetDescription className="sr-only">
            Choose an industry, your colors, and temporary logos.
          </SheetDescription>
          <div className="mobile-controls">{controls(true)}</div>
          <button className="apply-button" onClick={() => setDrawer(false)}>
            Apply & preview <ArrowRight size={16} />
          </button>
        </SheetContent>
      </Sheet>
      {notice && (
        <div className="toast" role="status">
          {notice}
        </div>
      )}
    </main>
  );
}
