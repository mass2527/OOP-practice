import { api } from './api.js';
import { ResultComponent } from './result.js';
import { SearchInput } from './SearchInput.js';

export type MovieType = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

class App {
  private data: MovieType[] = [];

  constructor(appRoot: HTMLElement) {
    const resultComponent = new ResultComponent();
    resultComponent.attachTo(appRoot, 'beforeend');

    const searchInput = new SearchInput((keyword: string) => {
      api.getMovies(keyword).then(({ Search }) => {
        this.data = Search;
        resultComponent.renderMovies(this.data);
      });
    });
    searchInput.attachTo(appRoot);
  }
}

new App(document.querySelector('#root')! as HTMLElement);
