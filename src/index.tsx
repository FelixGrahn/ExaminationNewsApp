import * as React from 'react'
import ReactDOM from 'react-dom/client';
import { 
    BrowserRouter,
    Routes,
    Route, 
} from "react-router-dom";
import App from './App';
import Searchresults from './routes/Searchresults';
import Article from './routes/Article';
import Pagenotfound from './routes/Pagenotfound';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebars/Sidebar';
import styled from "styled-components";


const SidebarDevider = styled.div`
    background-color: hotpink;
    /* width: 100%;
    height: 5rem;
    
    align-items: center; */
    display: flex;
`;

const ContentDiv = styled.div`
    background-color: grey;
    /* width: 100%;
    height: 5rem;
    
    align-items: center; */
    /* display: flex; */
`;


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement);
root.render(
    <BrowserRouter>
        <Navbar/>

    <SidebarDevider>

    <ContentDiv>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Searchresults" element={<Searchresults />}>
        <Route path=":Searchresults" element={<Searchresults />} />
        </Route>
      <Route path="Article" element={<Article />}>
        <Route path=":Article" element={<Article />} />
        </Route>
      <Route path="*"element={<Pagenotfound />}/>
    </Routes>
    </ContentDiv>

    <Sidebar/>

    </SidebarDevider>
    </BrowserRouter>
);
