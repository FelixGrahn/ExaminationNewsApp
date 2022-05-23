import React, { useEffect, useState } from 'react'
import ArticleCard from '../Components/Card/ArticleCard'
import CustomHeader from '../Components/Headers/CustomHeader'







function Landingpage() {
  const [data, setData] = useState([]);

  const Apicall = () => {
    console.log("Apicall");
    const apiUrl = 'https://localhost:44337/News/GetLatestNews' ;
    const requestOptions = {
      method: 'POST',
      // headers: { 'Content-Type': 'application/json' },
      // body: JSON.stringify({ title: 'React POST Request Example' })
  };
    fetch(apiUrl, requestOptions)
      .then((response) => response.json())
      .then((data) => setData(data));
  }

  const TestCall = (article) => {
    console.log("article", article);

  }


  useEffect(() => {
    console.log("useEffect");
    
    Apicall()
    
  }, []);

  {data.map((article) => {console.log("LandingPage Article", article);})}

  return (
    
    <div>
      <h1>LandingPage</h1>
      {data.map((article, key) => <ArticleCard key={key} landingPage={true} articleData={article}/>)}
      
      {/* {data.map((article, key) => <h5 onClick={() => TestCall(article)} key={key}>{key}</h5>)} */}
      
      
      {/* <ArticleCard articleData={data}/> */}
    </div>
  )
}

// {articleData.map((article, key) => {
//   return (
//   <CardContainer key={key}>
//       <LinkText label={article.title} urladress={"Article"} searchterm={article.id}/>
//       <BodyText body={article.description}/> 
  
//   </CardContainer>
// )})}

export default Landingpage