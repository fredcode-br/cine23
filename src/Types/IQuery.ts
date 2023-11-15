import IMovie from "./IMovie"

export default interface IQuery  {
    page: number,
    results: Array<IMovie>,
    total_pages:  number,
    total_results: number,
  };
  
