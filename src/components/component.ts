export abstract class Component {
  selector: string;
  template!: string;
  element!: Element;

  constructor(selector: string) {
    this.selector = selector;
  }

  // eslint-disable-next-line no-undef
  render(position: InsertPosition = 'beforeend') {
    const element = document.querySelector(this.selector);
    if (!element) throw new Error('Invalid selector');
    this.element = element;
    // PREV this.element.innerHTML = this.template;
    this.element.insertAdjacentHTML(position, this.template);
  }
}

/**
 *
 * Componente -> template -> string `${}`
 *
 * selector
 *
 * string --- (parser) + RENDER ---> HTML
 */
