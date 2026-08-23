// Builds the two frames of the "computer bleeping" favicon as inline SVG data
// URIs. Shared between the static server-rendered fallback (app/layout.tsx)
// and the client-side animator (components/favicon-animator.tsx) so both
// draw the exact same icon.
export function faviconSvgDataUri(bg: string, fg: string, on: boolean): string {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
<rect x='2' y='4' width='28' height='18' rx='2' fill='${bg}' stroke='${fg}' stroke-width='2'/>
<rect x='6' y='8' width='20' height='10' fill='${fg}' opacity='${on ? 0.9 : 0.15}'/>
<rect x='14' y='22' width='4' height='3' fill='${fg}'/>
<rect x='11' y='25' width='10' height='2' fill='${fg}'/>
<circle cx='27' cy='7' r='2.2' fill='${on ? fg : bg}' stroke='${fg}' stroke-width='1'/>
</svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
