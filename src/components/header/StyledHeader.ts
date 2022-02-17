import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledMainDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  color: white;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 400px;
`;

export const StyledTitleLink = styled(Link)`
  text-decoration: none;
  color: white;
  position: absolute;
  display: flex;
  flex: 1px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 85px;
  font-size: 27px;
`;

export const StyledMenu = styled.h3`
  position: absolute;
  top: 17px;
  left: 60px;
  letter-spacing: 2px;
`;

export const StyledLogin = styled.button`
  width: 80px;
  height: 40px;
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  background-color: white;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  position: absolute;
  top: 36px;
  right: 30px;
`;
