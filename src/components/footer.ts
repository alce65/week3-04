/* eslint-disable no-unused-vars */
import { Component } from './component';

export class Footer extends Component {
  // Alt brand: string
  constructor(selector: string, public brand: string) {
    super(selector);
    // Alt this.brand = brand
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
    <footer>
      <address>${this.brand}</address>
    </footer>
    `;
  }
}
