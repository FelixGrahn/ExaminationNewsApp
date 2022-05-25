import { useState } from 'react';
import styled from "styled-components";
import LinkText from '../Link/LinkText';
import { useNavigate } from 'react-router-dom';

const NavbarStyling = styled.div`
  background-color: #12aae3;
  display: flex;
  right: 0.6%;
  width: 13%;
  top: 5.5rem;
  position: fixed;
  height: 100%;
  padding-top: 5rem;
  .searchfield {
    position: relative;
    width: 110%;
    height: 1.875rem;
    bottom: 190%;
    left: 6%;
  }
`;
const LinkStyling = styled.div`
  flex-direction: column;
  display: flex;

`;
const LinkStylingCategories = styled.div`
  position: absolute;
  flex-direction: column;
  display: flex;
  top: 9%;
  left: 16%
  margin: 0.125rem;
  font-family: Arial, Helvetica, sans-serif;
`;
const LinkStylingCategory = styled.div`
  flex-direction: column;
  display: flex;
  margin: 0.625rem;
  a:link {
    color:black;
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
    color:black;
  }

  a:hover {
    color: white;
  }
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
          <label>
              
              <input
                type="text"
                value={searchterm}
                onChange={(e) => setSearchterm(e.target.value)}
                placeholder="Search..."
              className="searchfield"/>
                
            </label>
          </form>
      

        <LinkStylingCategories>
          <LinkStylingCategory>
            <LinkText
              label={"Business"}
              urladress={"Searchresults"}
              searchterm={"business"}
            />
          </LinkStylingCategory>
          <LinkStylingCategory>
            <LinkText
              label={"Entertainment"}
              urladress={"Searchresults"}
              searchterm={"entertainment"}
            />
          </LinkStylingCategory>

          <LinkStylingCategory>
            <LinkText
              label={"General"}
              urladress={"Searchresults"}
              searchterm={"general"}
            />
          </LinkStylingCategory>

          <LinkStylingCategory>
            <LinkText
              label={"Health"}
              urladress={"Searchresults"}
              searchterm={"health"}
            />
          </LinkStylingCategory>

          <LinkStylingCategory>
            <LinkText
              label={"Science"}
              urladress={"Searchresults"}
              searchterm={"science"}
            />
          </LinkStylingCategory>

          <LinkStylingCategory>
            <LinkText
              label={"Sports"}
              urladress={"Searchresults"}
              searchterm={"sports"}
            />
          </LinkStylingCategory>

          <LinkStylingCategory>
            <LinkText
              label={"Technology"}
              urladress={"Searchresults"}
              searchterm={"technology"}
            />
          </LinkStylingCategory>
        </LinkStylingCategories>
      </LinkStyling>
    </NavbarStyling>
  );
}

export default Sidebar
