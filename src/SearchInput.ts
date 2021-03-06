import { BaseComponent } from './component.js';

type OnSearch = (keyword: string) => void;

export class SearchInput extends BaseComponent<HTMLInputElement> {
  constructor(onSearch: OnSearch) {
    super(`<input placeholder="Enter movie title" type="text">`);

    this.element.addEventListener('keyup', (e) => {
      e.preventDefault();

      if (e.key !== 'Enter') return;
      onSearch(this.element.value);

      this.element.value = '';
    });
  }
}
