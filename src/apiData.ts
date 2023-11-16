import ITitles from "./Types/ITitles";

type Props = {
    page: number,
    searchTerm: string,
}
// API_KEY, API_BASE_URL, TRENDING_BASE_URL, SEARCH_BASE_URL
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

		
	// 	titles.results = titles.results
	// 		.filter(res => res.media_type !== "person")
	// 		.map(title => ({
	// 			...title,
	// 			backdrop_path: title.backdrop_path ? IMAGE_BASE_URL + "/w1280" + title.backdrop_path : null,
	// 			poster_path: title.poster_path ? IMAGE_BASE_URL + "/w342" + title.poster_path : null,
	// 			title: title.media_type === "movie" ? title.title : title.name 
	// 		}))


   
}


const API_KEY:string = import.meta.env.VITE_API_KEY;
const API_BASE_URL:string = "https://api.themoviedb.org/3",
TRENDING_BASE_URL = `${API_BASE_URL}/trending/all/day?api_key=${API_KEY}&language=pt-BR`,
SEARCH_BASE_URL = `${API_BASE_URL}/search/multi?api_key=${API_KEY}&language=pt-BR`;

const apiData = new ApiData(API_KEY, API_BASE_URL, TRENDING_BASE_URL, SEARCH_BASE_URL);

export default apiData;