import { SearchComponent } from './components/search.js';
import { PageComponent } from './components/page.js';

type ResponseType = 'True' | 'False';
type MovieType = {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
  Type: string;
};

class App {
  private error?: string;
  private movies: MovieType[];
  private page: PageComponent;

  constructor(appRoot: HTMLElement) {
    const searchComponent = new SearchComponent(this.search);
    searchComponent.attachTo(appRoot);

    this.page = new PageComponent();
    this.page.attachTo(appRoot, 'beforeend');
  }

  search = async (searchTerm: string) => {
    const res = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=457b6ebf`);
    const {
      Response,
      Search,
      Error,
    }: { Response: ResponseType; Search: MovieType[]; Error?: string } = await res.json();

    switch (Response) {
      case 'True':
        this.movies = Search;

        this.renderMovies();
        break;

      case 'False':
        this.error = Error;
        const errorString = `<strong>${this.error}</strong>`;

        this.page.addChild(errorString);
        break;

      default:
        const invalidResponse: never = Response;
        console.error(`Invalid Response:${invalidResponse}`);
    }
  };

  renderMovies() {
    const htmlString = this.movies
      .map(
        ({ Poster, Title, Type, Year }) => `
            <section>
                <h3>${Title}</h3>
                <div class="poster-image__container">
                    <img src=${Poster} alt=${Title} />
                </div>
                <ul>
                    <li>${Type}</li>
                    <li>${Year}</li>
                </ul>
            </section>`
      )
      .join('');

    this.page.addChild(htmlString);
  }
}

new App(document.querySelector('#root')! as HTMLElement);
