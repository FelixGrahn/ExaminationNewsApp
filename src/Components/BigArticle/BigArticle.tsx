import * as React from 'react'
import styled from "styled-components";

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
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
        <div> <h2>{articleData.title}</h2> <h5>{articleData.author} </h5> <h5>{articleData.sourceName} </h5></div>
        <h4>{articleData.content}</h4>
        <h6>{articleData.publishedAt}</h6>

        
    </StyledWrapper>
  )
}

export default BigArticle
