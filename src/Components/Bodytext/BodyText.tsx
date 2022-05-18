import * as React from 'react'
import styled from "styled-components";


const Bodytext = styled.span`
  font-size: 1em;
  color: ${(props) => (props.theme)}; //experimental
  

`;

Bodytext.defaultProps = {
    theme: {
      main: "palevioletred"
    }
  }
  
//   const theme = {
//     main: "mediumseagreen"
//   };

interface props {
    body: string;
    theme?: any;
}

const BodyText = ({body, theme}: props) => {
  return (
        <Bodytext theme={theme}>{body}</Bodytext>
        // <Bodytext theme={theme}>{body}</Bodytext> experimental
  )
}

export default BodyText
