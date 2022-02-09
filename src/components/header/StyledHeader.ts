import styled from 'styled-components';

export const StyledMainDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  color: white;
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap');
  font-family: 'Lato', sans-serif;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 400px;
`;

export const StyledTitle = styled.h2`
  font-size: 40px;

  position: absolute;
  top: 50px;
`;

export const StyledSubTitle = styled.h2`
  font-size: 40px;

  position: absolute;
  bottom: 80px;
`;

export const StyledLogin = styled.button`
  width: 100px;
  height: 40px;
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  backgroundcolor: white;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  position: absolute;
  top: 12px;
  right: 30px;
`;
