/* eslint-disable no-new */
import './style.css';

import { setupCounter } from './counter';
import { homeTemplate } from './home';
import { page1Template } from './page1';
import { header } from './header';
import { footer } from './footer';

const rootElement = document.querySelector<HTMLDivElement>('#app')!;

const path = location.pathname;

rootElement.innerHTML = header;

if (path.includes('index')) {
  // TEMP if (path === '/index.html')
  rootElement.innerHTML += homeTemplate;

  setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
} else {
  rootElement.innerHTML += page1Template;
}

rootElement.innerHTML += footer();
