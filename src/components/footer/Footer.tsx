import React from 'react';

import { HiOutlineMenuAlt1 } from 'react-icons/hi';

import { StyledMainDiv, StyledTitle } from './StyledFooter';

function Header({ isLoginMenuOpen, setIsLoginMenuOpen }: any) {
  function HandleLogin() {
    setIsLoginMenuOpen(!isLoginMenuOpen);
  }
  return (
    <StyledMainDiv>
      <StyledTitle>Our History</StyledTitle>
      <StyledTitle>Help</StyledTitle>

      <StyledTitle>Become an Affiliate</StyledTitle>
    </StyledMainDiv>
  );
}

export default Header;
