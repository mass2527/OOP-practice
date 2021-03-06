var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const API_ENDPOINT = 'https://www.omdbapi.com/';
const API_KEY = '457b6ebf';
export const api = {
    getMovies: (keyword) => __awaiter(void 0, void 0, void 0, function* () { return fetch(`${API_ENDPOINT}?s=${keyword}&apikey=${API_KEY}`).then((res) => res.json()); }),
};
