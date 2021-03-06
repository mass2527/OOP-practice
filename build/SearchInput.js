import { BaseComponent } from './component.js';
export class SearchInput extends BaseComponent {
    constructor(onSearch) {
        super(`<input placeholder="Enter movie title" type="text">`);
        this.element.addEventListener('keyup', (e) => {
            e.preventDefault();
            if (e.key !== 'Enter')
                return;
            onSearch(this.element.value);
            this.element.value = '';
        });
    }
}
