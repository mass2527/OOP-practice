import { BaseComponent } from './component.js';

export class PageComponent extends BaseComponent<HTMLUListElement> {
  constructor() {
    super(`<ul class="page">this is a page component</ul>`);
  }

  addChild(htmlString: string) {
    this.element.innerHTML = htmlString;
  }
}
