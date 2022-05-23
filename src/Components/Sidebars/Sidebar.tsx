import { useState } from 'react'
import styled from "styled-components";
import LinkText from '../Link/LinkText';
import { useNavigate } from 'react-router-dom';


const NavbarStyling = styled.div`
    background-color: lightgreen;
    display: flex;
    right: 0%;
    top: 0;
    position: fixed;
    height: 100%;
    padding-top: 5rem;
`;

const LinkStyling = styled.div`
    flex-direction: column;
    display: flex;
`;

interface props {
    
}

const Sidebar = ({}: props) => {
    let navigate = useNavigate();
    const [searchterm, setSearchterm] = useState("");
    // console.log("searchterm", searchterm);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log("searchterm2", searchterm);
        navigate(`/Searchresults/${searchterm}`)
      }
        
  return (
    <NavbarStyling>
      <LinkStyling>
      <form onSubmit={handleSubmit}>
      <label>Search:
        <input
          type="text" 
          value={searchterm}
          onChange={(e) => setSearchterm(e.target.value)}
        />
      </label>
    </form>
      <LinkText label={"Business"} urladress={"Searchresults"} searchterm={"business"}/>
      <LinkText label={"Entertainment"} urladress={"Searchresults"} searchterm={"entertainment"}/>
      <LinkText label={"General"} urladress={"Searchresults"} searchterm={"general"}/>
      <LinkText label={"Health"} urladress={"Searchresults"} searchterm={"health"}/>
      <LinkText label={"Science"} urladress={"Searchresults"} searchterm={"science"}/>
      <LinkText label={"Sports"} urladress={"Searchresults"} searchterm={"sports"}/>
      <LinkText label={"Technology"} urladress={"Searchresults"} searchterm={"technology"}/>
      </LinkStyling>
    </NavbarStyling>
  )
}

export default Sidebar
