import DOMPurify from 'dompurify';
export async function prepareLogo(file: File): Promise<string> {
  if (file.size > 5 * 1024 * 1024)
    throw new Error('Choose an image smaller than 5 MB.');
  if (
    !['image/png', 'image/jpeg', 'image/webp', 'image/svg+xml'].includes(
      file.type,
    )
  )
    throw new Error('Use a PNG, JPEG, WebP, or SVG image.');
  let source: Blob = file;
  if (file.type === 'image/svg+xml') {
    const raw = await file.text();
    const doc = new DOMParser().parseFromString(raw, 'image/svg+xml');
    if (
      doc.querySelector('parsererror') ||
      doc.documentElement.localName !== 'svg'
    )
      throw new Error('This SVG could not be read. Try a PNG instead.');
    if (/<!DOCTYPE|<!ENTITY/i.test(raw))
      throw new Error(
        'This SVG contains unsupported content. Try a PNG instead.',
      );
    const clean = DOMPurify.sanitize(raw, {
      USE_PROFILES: { svg: true },
      FORBID_TAGS: [
        'script',
        'foreignObject',
        'image',
        'use',
        'style',
        'animate',
        'animateMotion',
        'animateTransform',
        'set',
        'a',
      ],
      FORBID_ATTR: ['href', 'xlink:href', 'style'],
    });
    const safe = new DOMParser().parseFromString(clean, 'image/svg+xml');
    for (const el of safe.querySelectorAll('*'))
      // Snapshot the live attribute collection before removing unsafe entries.
      for (const attr of Array.from(el.attributes))
        if (
          /url\(|https?:|data:|javascript:/i.test(attr.value) ||
          /^on/i.test(attr.name)
        )
          el.removeAttribute(attr.name);
    safe.documentElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    const viewBox = (safe.documentElement.getAttribute('viewBox') || '')
      .trim()
      .split(/[ ,]+/)
      .map(Number);
    const aspect =
      viewBox.length === 4 && viewBox[2] > 0 && viewBox[3] > 0
        ? viewBox[2] / viewBox[3]
        : 1;
    if (!safe.documentElement.getAttribute('width'))
      safe.documentElement.setAttribute(
        'width',
        String(Math.round(1000 * Math.min(1, aspect))),
      );
    if (!safe.documentElement.getAttribute('height'))
      safe.documentElement.setAttribute(
        'height',
        String(Math.round(1000 / Math.max(1, aspect))),
      );
    source = new Blob([new XMLSerializer().serializeToString(safe)], {
      type: 'image/svg+xml',
    });
  }
  const url = URL.createObjectURL(source);
  try {
    const img = new Image();
    img.src = url;
    await img.decode().catch(() => {
      throw new Error(
        'This image could not be read. Please choose another file.',
      );
    });
    if (
      !img.naturalWidth ||
      !img.naturalHeight ||
      img.naturalWidth * img.naturalHeight > 25000000
    )
      throw new Error('Choose an image under 25 megapixels.');
    const ratio = Math.min(
      1,
      1600 / Math.max(img.naturalWidth, img.naturalHeight),
    );
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(img.naturalWidth * ratio));
    canvas.height = Math.max(1, Math.round(img.naturalHeight * ratio));
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Image preview is unavailable in this browser.');
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL('image/png');
  } finally {
    URL.revokeObjectURL(url);
  }
}
