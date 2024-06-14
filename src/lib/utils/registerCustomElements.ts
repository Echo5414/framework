export function registerCustomElements(elements: Record<string, any>) {
  Object.entries(elements).forEach(([name, element]) => {
    const tagName = name.replace(/([A-Z])/g, '-$1').toLowerCase().slice(1);
    if (!customElements.get(tagName)) {
      customElements.define(tagName, element);
    }
  });
}
