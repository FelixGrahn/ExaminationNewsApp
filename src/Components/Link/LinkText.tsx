import * as React from 'react'
import { Link } from "react-router-dom";

import styled from "styled-components";


const StyledLink = styled.h2`
  /* color: grey; */
  color: ${(props) => (props.color ? "grey" : "blue")};
  color: white;
  
`;

interface props {
    label: string;
    urladress: string;
    searchterm?: string;
    
}

const LinkText = ({label, urladress, searchterm}: props) => {
  if (searchterm) {
    return <Link to={`/${urladress}/${searchterm}`}>{label}</Link>;
  }
  return <Link to={`/${urladress}`}>{label}</Link>;
}


export default LinkText
