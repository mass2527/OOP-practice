import { api } from './api.js';
import { ResultComponent } from './result.js';
import { SearchInput } from './SearchInput.js';
class App {
    constructor(appRoot) {
        this.data = [];
        const resultComponent = new ResultComponent();
        resultComponent.attachTo(appRoot, 'beforeend');
        const searchInput = new SearchInput((keyword) => {
            api.getMovies(keyword).then(({ Search }) => {
                this.data = Search;
                resultComponent.renderMovies(this.data);
            });
        });
        searchInput.attachTo(appRoot);
    }
}
new App(document.querySelector('#root'));
