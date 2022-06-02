import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ArticleCard from "../Components/Card/ArticleCard";
import CustomHeader from "../Components/Headers/CustomHeader";

function Landingpage() {
  const [data, setData] = useState([]);

  const Apicall = () => {
    console.log("Apicall");
    const apiUrl = "https://localhost:5001/News/GetLatestNews";
    const requestOptions = {
      method: "POST",
      // headers: { 'Content-Type': 'application/json' },
      // body: JSON.stringify({ title: 'React POST Request Example' })
    };
    fetch(apiUrl, requestOptions)
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  const StyledH1 = styled.h1`
    font-family: "Times New Roman", Times, serif;
    font-weight: 0.625;
    font-size: 2.75rem;
    margin-left: 60px;
    color: #318748;
  `;

  useEffect(() => {
    console.log("useEffect");

    Apicall();
  }, []);

  {
    data.map((article) => {
      console.log("LandingPage Article", article);
    });
  }

  return (
    <div>
      <StyledH1>NewsAccess</StyledH1>
      {data.map((article, key) => (
        <ArticleCard key={key} landingPage={true} articleData={article} />
      ))}

      {/* {data.map((article, key) => <h5 onClick={() => TestCall(article)} key={key}>{key}</h5>)} */}

      {/* <ArticleCard articleData={data}/> */}
    </div>
  );
}

// {articleData.map((article, key) => {
//   return (
//   <CardContainer key={key}>
//       <LinkText label={article.title} urladress={"Article"} searchterm={article.id}/>
//       <BodyText body={article.description}/>

//   </CardContainer>
// )})}

export default Landingpage;
