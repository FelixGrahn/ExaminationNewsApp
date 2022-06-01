import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import ArticleCard from '../Components/Card/ArticleCard';
import LinkText from '../Components/Link/LinkText';



const CardContainer = styled.div`
  width: 110%;
  color: black;
  display: flex;
  flex-direction: column;
  margin: 0.2rem;
  @media (max-width: 414px) {
    width: 99.4%;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const StyledCardHeader = styled.div`
  font-color: black;
  font-size: 20px;
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
  @media (max-width: 414px) {
    width: 100%;
  }
`;


export const Searchresults = () => {
  let params = useParams();
  const [data, setData] = useState([]);

  const Apicall = (params2) => {
    console.log('params', params2)
    const apiUrl = 'https://localhost:5001/News/Search/' + params2;
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
      <div onChange={() => Apicall(params.Searchresults)}>
        Searchresults search: {params.Searchresults}
      </div>
      <StyledWrapper>
        <CardContainer>
          <StyledCardHeader>
            <ArticleCard articleData={data} />
          </StyledCardHeader>
        </CardContainer>
      </StyledWrapper>
    </div>
  );
}

export default Searchresults