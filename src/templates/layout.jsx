import React from "react"
import styled from "styled-components";
import Header from "../modules/header";
import {GlobalStyle} from "../setting/global-style";
import Footer from "../modules/footer";

const Page = styled.div`
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    min-height: 50vh;
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyle/>
      <Header/>
      <Page>
        {children}
      </Page>
      <Footer/>
  </>
)

export default Layout;
