import React, { useState } from 'react';
import Header from '@Components/header/Header';
import Clothes from '@Components/clothes/Clothes';
import SideMenu from '@Components/sideMenu/SideMenu';
import Footer from '@Components/footer/Footer';

import { StyledMainDiv } from './StyledHomeScreen';

function HomeScreen() {
  const [isLoginMenuOpen, setIsLoginMenuOpen] = useState(false);

  return (
    <StyledMainDiv>
      <Header
        isLoginMenuOpen={isLoginMenuOpen}
        setIsLoginMenuOpen={setIsLoginMenuOpen}
      />

      <div>{isLoginMenuOpen ? <p id="test">login</p> : null}</div>

      <div style={{ display: 'flex' }}>
        <SideMenu />

        <Clothes />
      </div>
      <Footer />
    </StyledMainDiv>
  );
}

export default HomeScreen;
