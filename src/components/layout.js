import React from "react"
import styled from "styled-components";
import Header from "../modules/header";
import {GlobalStyle} from "../setting/global-style";
import {breakpoint, breakpointsMap} from "../utils/breakpoints";

const Page = styled.div`
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    min-height: 50vh;

    @media ${breakpoint(breakpointsMap.default, breakpointsMap.medium)} {
      padding-top: 80px;
    }
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyle/>
      <Header/>
      <Page>
        {children}
      </Page>
  </>
)

export default Layout;
