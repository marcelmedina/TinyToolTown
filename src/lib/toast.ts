/**
 * Shows a brief toast notification at the bottom of the page.
 * Uses globally-defined `.ttt-copy-toast` / `.ttt-copy-toast--visible` classes
 * (defined in global.css) because the element is appended to document.body at
 * runtime, outside any Astro component's scoped CSS.
 */
export function showCopyToast(message = '🔗 Link copied!'): void {
  const existing = document.getElementById('ttt-copy-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'ttt-copy-toast';
  toast.className = 'ttt-copy-toast';
  toast.textContent = message;
  document.body.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add('ttt-copy-toast--visible'));
  setTimeout(() => {
    toast.classList.remove('ttt-copy-toast--visible');
    setTimeout(() => toast.remove(), 300);
  }, 2200);
}
