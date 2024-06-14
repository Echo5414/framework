console.log('IconElement.ts loaded...');

const icons = {
  'icon-user': {
    id: 'icon-user',
    viewBox: '0 0 16 16',
    alt: 'User Icon',
    pathData: 'M6.233.371a4.388 4.388 0 0 1 5.002 1.052c.421.459.713.992.904 1.554.143.421.263 1.173.22 1.894-.078 1.322-.638 2.408-1.399 3.316l-.127.152a.75.75 0 0 0 .201 1.13l2.209 1.275a4.75 4.75 0 0 1 2.375 4.114V16H.382v-1.143a4.75 4.75 0 0 1 2.375-4.113l2.209-1.275a.75.75 0 0 0 .201-1.13l-.126-.152c-.761-.908-1.322-1.994-1.4-3.316-.043-.721.077-1.473.22-1.894a4.346 4.346 0 0 1 .904-1.554c.411-.448.91-.807 1.468-1.052zM8 1.5a2.888 2.888 0 0 0-2.13.937 2.85 2.85 0 0 0-.588 1.022c-.077.226-.175.783-.143 1.323.054.921.44 1.712 1.051 2.442l.002.001.127.153a2.25 2.25 0 0 1-.603 3.39l-2.209 1.275A3.25 3.25 0 0 0 1.902 14.5h12.196a3.25 3.25 0 0 0-1.605-2.457l-2.209-1.275a.75.75 0 0 0 .201-1.13l-.126-.152c-.761-.908-1.322-1.994-1.4-3.316-.043-.721.077-1.473.22-1.894a4.346 4.346 0 0 1 .904-1.554c.411-.448.91-.807 1.468-1.052z'
  },
  // Add other icons here...
};

class IconElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  private generateContent(): void {
    const type = this.textContent?.trim() as keyof typeof icons || 'icon-user';
    const icon = icons[type];
    const width: string = this.getAttribute('width') || '64';
    const height: string = this.getAttribute('height') || '64';
    const fill: string = this.getAttribute('fill') || 'black';

    const iconContent = `<svg viewBox="${icon.viewBox}" width="${width}" height="${height}" fill="${fill}">
      <path d="${icon.pathData}"></path>
    </svg>`;
    this.shadowRoot!.innerHTML = iconContent;
  }

  connectedCallback(): void {
    this.generateContent();
  }
}

if (typeof window !== 'undefined' && !customElements.get('app-icon')) {
  customElements.define('app-icon', IconElement);
}

export default IconElement;
