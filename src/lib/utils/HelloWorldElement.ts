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

export default HelloWorldElement;
