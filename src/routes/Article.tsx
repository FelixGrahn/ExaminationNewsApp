import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import BigArticle from '../Components/BigArticle/BigArticle';
import ArticleCard from '../Components/Card/ArticleCard';





// const fetchData = (params3) => {
//   Apicall(params3)
// }

export const Article = () => {
  let params = useParams();
  const [data, setData] = useState([]);

  const Apicall = (params2) => {
    console.log('params', params2)
    const apiUrl = 'https://localhost:5001/News/GetArticle/' + params2;
    console.log('apiUrl', apiUrl)
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => setData(data));
  }

  useEffect(() => {
    console.log("hello world");

    Apicall(params.Article);

    
  }, []);
  console.log("data", data);
  

  return (
  <div>
   

    <div>
      <BigArticle articleData={data}/>

    </div>
    </div>
    
  )
}


export default Article