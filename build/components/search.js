import { BaseComponent } from './component.js';
export class SearchComponent extends BaseComponent {
    constructor(search) {
        super(`<form>
              <input placeholder="Enter keyword" type="text" />
              <button>search</button>
          </form>`);
        const input = this.element.querySelector('input');
        const button = this.element.querySelector('button');
        button.onclick = (e) => {
            e.preventDefault();
            search(input.value);
            input.value = '';
        };
    }
}
