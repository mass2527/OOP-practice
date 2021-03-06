import { BaseComponent } from './component.js';
export class ResultInfoComponent extends BaseComponent {
    constructor(title, url) {
        super(`<dialog class="result-info">
            <h3>${title}</h3>
            <div class="image-wrapper">
            <img src="${url}" alt="${title}" />
            </div>
        </dialog>`);
        this.onClick = (e) => {
            if (e.target === this.element) {
                this.removeFrom(document.body);
                document.body.style.overflowY = 'auto';
            }
        };
        window.addEventListener('click', this.onClick);
        document.body.style.overflowY = 'hidden';
    }
}
