import * as React from 'react'
import { Link } from "react-router-dom";

import styled from "styled-components";


const StyledLink = styled(Link)`
  /* color: grey; */
  /*color: ${(props) => (props.color ? "grey" : "blue")};*/
  color: white;
`;



interface props {
    label: string;
    urladress: string;
    searchterm?: string;
    
}

const LinkText = ({label, urladress, searchterm}: props) => {
  if (searchterm) {
    return <StyledLink to={`/${urladress}/${searchterm}`}>{label}</StyledLink>;
  }
  return <StyledLink to={`/${urladress}`}>{label}</StyledLink>;
}


export default LinkText
