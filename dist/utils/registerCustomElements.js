export function registerCustomElements(elements) {
    for (const [name, element] of Object.entries(elements)) {
        const customElementName = name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        if (!customElements.get(customElementName)) {
            customElements.define(customElementName, element);
        }
    }
}
