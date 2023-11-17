import IActors from "./Types/IActors";
import ITitle from "./Types/ITitle";
import ITitles from "./Types/ITitles";
import useFetch from "./useFetch";

type Props = {
    id?: number,
    type?: string,
    page?: number,
    searchTerm?: string,
}

class ApiData {
    apiKey: string;
    apiBaseUrl: string;
    trendingBaseUrl: string;
    searchBaseUrl: string;

    constructor(apiKey: string, apiBaseUrl: string, trendingBaseUrl: string, searchBaseUrl: string) {
        this.apiKey = apiKey;
        this.apiBaseUrl = apiBaseUrl;
        this.trendingBaseUrl = trendingBaseUrl;
        this.searchBaseUrl = searchBaseUrl;
    }
 
    async getTitles({page, searchTerm}: Props) {
        const resp = await fetch(searchTerm 
            ? `${this.searchBaseUrl}&query=${searchTerm}&page=${page}`
            : `${this.trendingBaseUrl}&page=${page}`);
        
        const titles:ITitles = await resp.json();
        titles.results = titles.results
            .filter(res => res.media_type !== "person")
        	.map(title => ({
                    ...title,
                    title: title.media_type === "movie" ? title.title : title.name 
        		})
            )

        return titles
    }

    async getTitle({id, type }: Props) {
        const url:string = `${this.apiBaseUrl}/${type}/${id}?api_key=${this.apiKey}&language=pt-BR`;
        const data  = await useFetch(url);
        const title = data.data
        return title
    }
 
    async getActors({ id, type }: Props) {
        const url:string = `${this.apiBaseUrl}/${type}/${id}/credits?api_key=${this.apiKey}&language=pt-BR`;
        const resp = await fetch(url);
        const actors:IActors = await resp.json();
    
        return actors
    }

}


const API_KEY:string = import.meta.env.VITE_API_KEY;
const API_BASE_URL:string = "https://api.themoviedb.org/3",
TRENDING_BASE_URL = `${API_BASE_URL}/trending/all/day?api_key=${API_KEY}&language=pt-BR`,
SEARCH_BASE_URL = `${API_BASE_URL}/search/multi?api_key=${API_KEY}&language=pt-BR`;

const apiData = new ApiData(API_KEY, API_BASE_URL, TRENDING_BASE_URL, SEARCH_BASE_URL);

export default apiData;