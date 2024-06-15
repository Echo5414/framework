console.log('HelloWorldElement.ts loaded...');
class HelloWorldElement extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const div = document.createElement('div');
        div.textContent = 'Hello, World!';
        shadow.appendChild(div);
    }
}
if (typeof window !== 'undefined' && !customElements.get('hello-world-element')) {
    customElements.define('hello-world-element', HelloWorldElement);
}
export default HelloWorldElement;
