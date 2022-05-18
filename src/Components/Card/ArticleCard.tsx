import * as React from 'react'
import styled from "styled-components";
import BodyText from '../Bodytext/BodyText';
import CustomHeader from '../Headers/CustomHeader';


const CardContainer = styled.div`
  width: 20%;
  border: solid 1px;
`;

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const theme = { //experimental
    main: "mediumseagreen"
  };

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
                <CustomHeader label={article.title}/>
                {/* <BodyText theme={theme} body={article.description}/>  experimental*/}
                <BodyText body={article.description}/> 
            
            </CardContainer>
        )})}
    </StyledWrapper>
  )
}

export default ArticleCard
