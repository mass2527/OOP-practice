import { BaseComponent } from './component.js';

type Search = (searchTerm: string) => Promise<void>;

export class SearchComponent extends BaseComponent<HTMLFormElement> {
  constructor(search: Search) {
    super(`<form>
              <input placeholder="Enter keyword" type="text" />
              <button>search</button>
          </form>`);

    const input = this.element.querySelector('input')! as HTMLInputElement;
    const button = this.element.querySelector('button')! as HTMLButtonElement;

    button.onclick = (e) => {
      e.preventDefault();

      search(input.value);
      input.value = '';
    };
  }
}
