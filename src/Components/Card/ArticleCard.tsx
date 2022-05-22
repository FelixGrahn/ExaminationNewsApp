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
`;

interface props {
    articleData: any;
    children?: React.ReactNode;
}


const ArticleCard = ({articleData}: props) => {
    console.log("articleData", articleData);
    
  return (
    <StyledWrapper>
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
