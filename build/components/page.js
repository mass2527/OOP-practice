import { BaseComponent } from './component.js';
export class PageComponent extends BaseComponent {
    constructor() {
        super(`<ul class="page">this is a page component</ul>`);
    }
    addChild(htmlString) {
        this.element.innerHTML = htmlString;
    }
}
