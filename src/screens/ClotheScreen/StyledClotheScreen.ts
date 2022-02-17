import styled, { css } from 'styled-components';

export const StyledMainDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap');
  font-family: 'Lato', sans-serif;
`;

interface IButton {
  size: number;
}

export const StyledSizeDiv = styled.div<IButton>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 50px;

  border-radius: 20px;
  margin-right: 20px;
  border: 2px solid black;

  cursor: pointer;

  ${(props) =>
    props.size > 0
      ? css`
          :hover {
            background-color: black;
            color: white;
            transition: 0.3s;
          }
        `
      : css`
          color: #c8c8c8;
          cursor: default;
          border-color: #c8c8c8;
        `}
`;

export const StyledSizeHr = styled.hr`
  width: 55px;
  position: absolute;
  transform: rotate(135deg);
  border: none;
  height: 1px;
  background-color: #c8c8c8;
`;

export const StyledCartDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 250px;
  border: none;
  border-radius: 8px;
  box-shadow: 10px 10px 8px 15px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

export const StyledPriceH2 = styled.h2`
  margin-top: 40px;
  margin-left: 40px;
`;

export const StyledAddToCartDiv = styled.div`
  display: flex;
  align-self: center;
  width: 250px;
  letter-spacing: 3px;
  align-items: center;
  border-radius: 20px;
  background-color: #185936;
  color: white;
  flex-direction: column;
  cursor: pointer;
  :hover {
    opacity: 0.9;
    transition: 0.3s;
  }
`;
