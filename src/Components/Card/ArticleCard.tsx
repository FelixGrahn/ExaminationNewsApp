import * as React from "react";
import styled from "styled-components";
import BodyText from "../Bodytext/BodyText";
import CustomHeader from "../Headers/CustomHeader";
import LinkText from "../Link/LinkText";

const CardContainer = styled.div`
  width: 24%;
  background-color: #e2f2bfe3;
  color: black;
  border: solid 1px;
  display: flex;
  flex-direction: column;
  margin: 0.2rem;
  @media (max-width: 414px) {
    width: 94%;
    
  }
`;

const StyledWrapper = styled.div`
  flex-flow: column;
  display: flex;
  align-items: center;
  @media (max-width: 414px) {
   
    
  }
`;

const CardContainerAlign = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 414px) {
    width: 100%;
    flex-flow: column;
  }
`;

const StyledH2 = styled.h2``;

const StyledCardHeader = styled.div`
  font-size: 18px;
  a:-webkit-any-link {
    color: black;
    cursor: pointer;
    text-decoration: underline;
    font-family: "Lucida Console", "Monaco", monospace;
  }
  a:-webkit-any-link:hover {
    color: blue;
    cursor: pointer;
    text-decoration: underline;
  }
`;

interface props {
  articleData: any;
  children?: React.ReactNode;
  landingPage?: boolean;
}

const ArticleCard = ({ articleData, landingPage }: props) => {
  // {articleData.articels.map((article) => {console.log("articleData mapping", article)})}

  //   {articleData.map((article, ) => {
  //     console.log("articleData mapping", article);
  // })}

  if (landingPage) {
    console.log("articleData.articels", articleData.articels);
    return (
      // <h1>test</h1>
      <StyledWrapper>
        <StyledH2>{articleData.categori}</StyledH2>
        <CardContainerAlign>
          {articleData.articels.map((article, key) => {
            return (
              <CardContainer key={key}>
                <StyledCardHeader>
                  <LinkText
                    label={article.title}
                    urladress={"Article"}
                    searchterm={article.id}
                  />
                </StyledCardHeader>

                {/* <CustomHeader label={article.title}/> */}
                <BodyText body={article.description} />
              </CardContainer>
            );
          })}
        </CardContainerAlign>
      </StyledWrapper>
    );
  }
  console.log("articleData", articleData);
  return (
    // <h1>test</h1>
    <StyledWrapper>
      <h5>{articleData.categori}</h5>
      {articleData.map((article, key) => {
        return (
          <CardContainer key={key}>
            <LinkText
              label={article.title}
              urladress={"Article"}
              searchterm={article.id}
            />
            {/* <CustomHeader label={article.title}/> */}
            <BodyText body={article.description} />
          </CardContainer>
        );
      })}
    </StyledWrapper>
  );
};

export default ArticleCard;
