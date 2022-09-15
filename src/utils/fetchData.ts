import axios from "axios";
export interface Options {
  method?: string  | undefined;
  
  headers: {
    "X-RapidAPI-Key": "f63405bff3msh7d3e187add752c9p10ab33jsn63bd228c12c3";
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com";
  };
}
export const fetchData = async ( url: string,options: Options) => {
    
    const response = await axios.get(url, options) ;
    return response.data
};

export const youTubeOptions = {
  headers: {
    'X-RapidAPI-Key': 'f63405bff3msh7d3e187add752c9p10ab33jsn63bd228c12c3',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};
export const exerciseOptions:Options = {
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': "f63405bff3msh7d3e187add752c9p10ab33jsn63bd228c12c3",
  },
};