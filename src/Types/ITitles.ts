import ITitle from "./ITitle"

export default interface ITitles  {
    page: number,
    results: Array<ITitle>,
    total_pages:  number,
    total_results: number,
  };
  
