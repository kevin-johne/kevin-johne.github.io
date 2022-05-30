import React from "react";
import Logo from "../patterns/logo";
import styled from "styled-components";
import {
  colorBrand,
  colorGray20,
  colorGray75,
  colorWhite,
} from "../setting/theme";
import { breakpoint, breakpointsMap } from "../utils/breakpoints";
import { Link } from "gatsby";

const items = [
  {
    text: "Work",
    href: "/work",
  },
  {
    text: "Service",
    href: "/service",
  },
  {
    text: "Résumé",
    href: "/resume",
  },
];

const SiteHeader = styled.header`
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  background: linear-gradient(
      180deg,
      ${colorBrand} 0,
      ${colorBrand} 6px,
      transparent 0
    ),
    ${colorWhite};

  @media ${breakpoint(breakpointsMap.default, breakpointsMap.medium)} {
    svg {
      width: 50px;
    }
  }
`;

const SiteHeaderInner = styled.div`
  display: flex;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 6px;
  border-bottom: 1px solid ${colorGray75};

  @media ${breakpoint(breakpointsMap.default)} {
    width: 100%;
    padding-left: 5%;
    padding-right: 5%;
  }
`;

const LogoLink = styled(Link)`
  width: 80px;
`;

const NavList = styled.ul`
  display: flex;
  margin-left: auto;
  margin-right: 0;
  list-style: none;
  margin-top: 40px;

  @media ${breakpoint(breakpointsMap.default, false)} {
    margin-right: 10px;
  }

  @media ${breakpoint(breakpointsMap.default, breakpointsMap.medium)} {
    margin-top: 20px;
  }
`;

const NavItem = styled.li`
  &:not(:first-child) {
    padding-left: 20px;
  }

  @media ${breakpoint(breakpointsMap.default, false)} {
    &:not(:first-child) {
      padding-left: 10px;
    }
  }
`;

const NavLink = styled(Link)`
  position: relative;
  display: inline-block;
  color: ${colorGray20};
  font-size: 2rem;
  text-decoration: none;

  &:before {
    position: absolute;
    content: "";
    width: 0;
    height: 2px;
    left: 50%;
    top: 60%;
    background-color: ${colorBrand};
    transition: all 0.3s cubic-bezier(0.68, 0.23, 0.92, 0.48);
  }

  &:hover:before {
    width: 100%;
    left: 0;
    background-color: ${colorGray20};
  }

  &.current:before {
    top: 120%;
    width: 70%;
    left: 0;
    background-color: ${colorBrand};
    transition: all 0.3s linear 0.2s;
  }

  @media ${breakpoint(breakpointsMap.default, false)} {
    font-size: 1.6rem;
  }

  @media ${breakpoint(breakpointsMap.default, breakpointsMap.medium)} {
    &.current:before {
      top: 110%;
    }
  }
`;

const Header = () => {
  return (
    <SiteHeader>
      <SiteHeaderInner>
        <LogoLink to="/">
          <Logo />
        </LogoLink>
        <NavList>
          {items.map((item, index) => (
            <NavItem key={index}>
              <NavLink activeClassName="current" to={item.href}>
                {item.text}
              </NavLink>
            </NavItem>
          ))}
        </NavList>
      </SiteHeaderInner>
    </SiteHeader>
  );
};

export default Header;
