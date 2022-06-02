import * as React from 'react'
import styled from "styled-components";

const StyledWrapper = styled.div`
  background-color: #e2f2bfe3;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Lucida Console", "Monaco", monospace;
  .article-container {
    width: 70%;
  }
  .article-content {
    width: 70%;
  }
  .article-header {
    font-size: 20px;
  }

  @media (max-width: 414px) {
    width: 100%;
    height: 50rem;
  }
`;


interface props {
    articleData: any;
}


const BigArticle = ({articleData}: props) => {
    console.log("articleData", articleData);

    // {articleData.articels.map((article) => {console.log("articleData mapping", article)})}

  //   {articleData.map((article, ) => {
  //     console.log("articleData mapping", article);
  // })}

    
  return (
    // <h1>test</h1>
    <StyledWrapper>
      <div className="article-container">
        {" "}
        <h2 className="article-header">{articleData.title}</h2> <h5>{articleData.author} </h5>{" "}
        <h5>{articleData.sourceName} </h5>
      </div>
   
        <h4 className="article-content">{articleData.content}</h4>
     
      <h6>{articleData.publishedAt}</h6>
    </StyledWrapper>
  );
}

export default BigArticle
