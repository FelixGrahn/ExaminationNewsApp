import * as React from 'react'
import styled from "styled-components";
import BodyText from '../Bodytext/BodyText';
import CustomHeader from '../Headers/CustomHeader';
import LinkText from '../Link/LinkText';


const CardContainer = styled.div`
  width: 50%;
  border: solid 1px;
  display: flex;
  flex-direction: column;
  margin: 0.2rem;
`;

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    border: solid 1px;
`;

interface props {
    articleData: any;
    children?: React.ReactNode;
    landingPage?: boolean;
}


const ArticleCard = ({articleData, landingPage}: props) => {

    

    // {articleData.articels.map((article) => {console.log("articleData mapping", article)})}

  //   {articleData.map((article, ) => {
  //     console.log("articleData mapping", article);
  // })}

  if (landingPage) {
    console.log("articleData.articels", articleData.articels);
    return (
      // <h1>test</h1>
      <StyledWrapper>
        <h5>{articleData.categori}</h5>
          {articleData.articels.map((article, key) => {
              return (
              <CardContainer key={key}>
                
                  <LinkText label={article.title} urladress={"Article"} searchterm={article.id}/>
                  {/* <CustomHeader label={article.title}/> */}
                  <BodyText body={article.description}/> 
              
              </CardContainer>
          )})}
      </StyledWrapper>
    )
    
  }
  console.log("articleData", articleData);
  return (
    // <h1>test</h1>
    <StyledWrapper>
      <h5>{articleData.categori}</h5>
        {articleData.map((article, key) => {
            return (
            <CardContainer key={key}>
              
                <LinkText label={article.title} urladress={"Article"} searchterm={article.id}/>
                {/* <CustomHeader label={article.title}/> */}
                <BodyText body={article.description}/> 
            
            </CardContainer>
        )})}
    </StyledWrapper>
  )
}

export default ArticleCard
