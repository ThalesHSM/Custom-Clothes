import React from 'react';

import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { Link } from 'react-router-dom';

import {
  StyledImage,
  StyledLogin,
  StyledMainDiv,
  StyledMenu,
  StyledTitleLink,
} from './StyledHeader';

function Header({ isLoginMenuOpen, setIsLoginMenuOpen }: any) {
  function HandleLogin() {
    setIsLoginMenuOpen(!isLoginMenuOpen);
  }
  return (
    <StyledMainDiv>
      <StyledImage src="https://wallpaperaccess.com/full/1261218.jpg" alt="" />

      <StyledTitleLink to="/">
        <h2>Custom Clothes</h2>
        <h2>We Create. You Choose.</h2>
      </StyledTitleLink>
      <div style={{ cursor: 'pointer' }}>
        <HiOutlineMenuAlt1
          color="white"
          size={24}
          style={{ position: 'absolute', top: 34, left: 30 }}
        />
        <StyledMenu>MENU</StyledMenu>
      </div>
      <StyledLogin onClick={HandleLogin} id="login-button">
        Log in
      </StyledLogin>
    </StyledMainDiv>
  );
}

export default Header;
