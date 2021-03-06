var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { SearchComponent } from './components/search.js';
import { PageComponent } from './components/page.js';
class App {
    constructor(appRoot) {
        this.search = (searchTerm) => __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=457b6ebf`);
            const { Response, Search, Error, } = yield res.json();
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
                    const invalidResponse = Response;
                    console.error(`Invalid Response:${invalidResponse}`);
            }
        });
        const searchComponent = new SearchComponent(this.search);
        searchComponent.attachTo(appRoot);
        this.page = new PageComponent();
        this.page.attachTo(appRoot, 'beforeend');
    }
    renderMovies() {
        const htmlString = this.movies
            .map(({ Poster, Title, Type, Year }) => `
            <section>
                <h3>${Title}</h3>
                <div class="poster-image__container">
                    <img src=${Poster} alt=${Title} />
                </div>
                <ul>
                    <li>${Type}</li>
                    <li>${Year}</li>
                </ul>
            </section>`)
            .join('');
        this.page.addChild(htmlString);
    }
}
new App(document.querySelector('#root'));
