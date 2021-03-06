import { BaseComponent } from './component.js';
import { ResultInfoComponent } from './resultInfo.js';
export class ResultComponent extends BaseComponent {
    constructor() {
        super(`<ul class="result">this is result component</ul>`);
    }
    renderMovies(movies) {
        const htmlString = movies
            .map(({ Title, Poster, Type, Year }) => `
          <section>
              <h3>${Title}</h3>
              <div class="poster-wrapper">
                  <img src=${Poster} alt=${Title}>

              </div>
              <ul class="movie-info">
                  <li>${Type}</li>
                  <li>${Year}</li>
              </ul>
          </section>
      `)
            .join('');
        this.element.innerHTML = htmlString;
        const sections = this.element.querySelectorAll('section');
        sections.forEach((section) => section.addEventListener('click', () => {
            const h3 = section.querySelector('h3');
            const img = section.querySelector('img');
            const resultInfo = new ResultInfoComponent(h3.textContent, img.src);
            resultInfo.attachTo(document.body);
        }));
    }
}
