import * as React from 'react'
import styled from "styled-components";


const Headingtext = styled.h2`
  /* color: grey; */
  color: ${((props) => (props.color ? "grey" : "blue"))};
`;

interface props {
    label: string;
}

const CustomHeader = ({label}: props) => {
  return (
        <Headingtext>{label}</Headingtext>
  )
}

export default CustomHeader
