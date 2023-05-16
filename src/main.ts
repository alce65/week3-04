/* eslint-disable no-new */
import './style.css';

import { setupCounter } from './counter.ts';
// OLD import { header } from './header.ts';
// import { footer } from './footer.ts';
import { homeTemplate } from './home.ts';
import { page1Template } from './page1.ts';
import { Header } from './components/header.ts';
import { Footer } from './components/footer.ts';
import { Menu } from './components/menu.ts';
import { MenuOptions } from './types/menu.options.ts';

const rootElement = document.querySelector<HTMLDivElement>('#app')!;

const path = location.pathname;

const menuOptions: MenuOptions = [
  { url: 'index.html', label: 'Home' },
  { url: 'page1.html', label: 'Page1' },
];

// OLD rootElement.innerHTML = header;

new Header('#app');
new Menu('header', menuOptions);

if (path.includes('index')) {
  // TEMP if (path === '/index.html')
  rootElement.innerHTML += homeTemplate;

  setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
} else {
  rootElement.innerHTML += page1Template;
}

// OLD rootElement.innerHTML += footer();

new Footer('#app', 'ISDI Coders');
