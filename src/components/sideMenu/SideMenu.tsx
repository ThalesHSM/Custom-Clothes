import React from 'react';

import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { StyledMainDiv } from './StyledSideMenu';

function SideMenu() {
  return (
    <StyledMainDiv>
      <div>
        <h2>About</h2>

        <p>
          Thank you for your support! <br /> Check out our new products
          <br />
          and updates on our social media!
        </p>

        <FaFacebookF
          color="green"
          size={24}
          style={{ marginRight: 10, marginBottom: 2, cursor: 'pointer' }}
        />
        <AiOutlineInstagram
          color="green"
          size={28}
          style={{ marginRight: 10, cursor: 'pointer' }}
        />
        <AiOutlineTwitter
          color="green"
          size={30}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </StyledMainDiv>
  );
}

export default SideMenu;
