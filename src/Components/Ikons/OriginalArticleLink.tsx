import * as React from 'react'
import styled from "styled-components";


const LinkContainer = styled.span`

`;

interface props {
    link: string;
}

const OriginalArticleLink = ({link}: props) => {
  return (
    <div>
        <LinkContainer onClick={() => console.log(link)}></LinkContainer>
    </div>
  )
}

export default OriginalArticleLink
