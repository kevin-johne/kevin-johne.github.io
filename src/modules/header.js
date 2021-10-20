import React from "react";
import Logo from "../patterns/logo";
import {LogoLink, NavItem, NavLink, NavList, SiteHeader, SiteHeaderInner} from "./header.style";

const items = [
  {
    text: 'Work',
    href: '/work'
  }, {
    text: 'About',
    href: '/about'
  }, {
    text: 'Résumé',
    href: '/resume'
  }
]

const Header = () => {
  return (
    <SiteHeader>
      <SiteHeaderInner>
        <LogoLink to="/">
          <Logo/>
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
  )
}

export default Header;
