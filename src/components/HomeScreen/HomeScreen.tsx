import React, { useState } from 'react';
import Header from '../header/Header';
import { StyledMainDiv } from './StyledHomeScreen';

function HomeScreen() {
  const [isLoginMenuOpen, setIsLoginMenuOpen] = useState(false);
  return (
    <StyledMainDiv>
      <Header setIsLoginMenuOpen={setIsLoginMenuOpen} />
      {isLoginMenuOpen ? <p id="test">login</p> : null}
    </StyledMainDiv>
  );
}

export default HomeScreen;
