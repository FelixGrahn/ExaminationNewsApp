import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import ArticleCard from '../Components/Card/ArticleCard';




export const Searchresults = () => {
  let params = useParams();
  const [data, setData] = useState([]);

  const Apicall = (params2) => {
    console.log('params', params2)
    const apiUrl = 'https://localhost:44337/News/Search/' + params2;
    console.log('apiUrl', apiUrl)
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => setData(data));
  }

  useEffect(() => {
    console.log("hello world");

    Apicall(params.Searchresults);

    
  }, [params]);
  console.log("data", data);

  return (
    <div>
    <div onChange={() => Apicall(params.Searchresults)}>Searchresults search: {params.Searchresults}</div>
    <ArticleCard articleData={data}/>
    </div>
  )
}

export default Searchresults