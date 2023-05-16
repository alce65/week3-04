/* eslint-disable no-unused-vars */

import { MenuOptions } from '../types/menu.options';
import { Component } from './component';

export class Menu extends Component {
  constructor(selector: string, public options: MenuOptions) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    const links = this.options
      .map(
        (item) =>
          `<li>
        <a href="${item.url}">${item.label}</a>
      </li>`
      )
      .join('');

    return `
    <nav>
        <ul>
         ${links}
        </ul>
      </nav>
    `;
  }
}
