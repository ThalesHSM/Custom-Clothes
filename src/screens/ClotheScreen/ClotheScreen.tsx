import React from 'react';
import Header from '@Components/header/Header';
import { useLocation } from 'react-router-dom';
import {
  StyledAddToCartDiv,
  StyledCartDiv,
  StyledMainDiv,
  StyledPriceH2,
  StyledSizeDiv,
  StyledSizeHr,
} from './StyledClotheScreen';

interface CustomizedState {
  id: string;
  img: string;
  description: string;
  price: string;
  title: string;
  type: string;
  size: any;
}

function ClotheScreen() {
  const location = useLocation();
  const state = location.state as CustomizedState;

  return (
    <StyledMainDiv>
      <Header />
      {state ? (
        <div
          style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              flex: 1,
              flexDirection: 'column',
            }}
          >
            <p>aaa</p>
          </div>
          <img
            src={state.img}
            alt=""
            style={{
              width: 500,
              marginTop: 20,
              marginRight: 40,
              marginBottom: 20,
              borderRadius: 20,
            }}
          />
          <div
            style={{
              display: 'flex',
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <h2>{state.title}</h2>
            <h3>{state.description}</h3>
            <div
              style={{
                display: 'flex',
                marginTop: 40,
              }}
            >
              {state.size.unique ? (
                <StyledSizeDiv size={state.size.unique}>
                  {state.size.unique === 0 ? <StyledSizeHr /> : null}
                  <h3>U</h3>
                </StyledSizeDiv>
              ) : (
                <>
                  <StyledSizeDiv size={state.size.p}>
                    {state.size.p === 0 ? <StyledSizeHr /> : null}
                    <h3>P</h3>
                  </StyledSizeDiv>

                  <StyledSizeDiv size={state.size.pp}>
                    {state.size.pp === 0 ? <StyledSizeHr /> : null}

                    <h3>PP</h3>
                  </StyledSizeDiv>

                  <StyledSizeDiv size={state.size.m}>
                    {state.size.m === 0 ? <StyledSizeHr /> : null}
                    <h3>M</h3>
                  </StyledSizeDiv>

                  <StyledSizeDiv size={state.size.g}>
                    {state.size.g === 0 ? <StyledSizeHr /> : null}
                    <h3>G</h3>
                  </StyledSizeDiv>

                  <StyledSizeDiv size={state.size.gg}>
                    {state.size.gg === 0 ? <StyledSizeHr /> : null}
                    <h3>GG</h3>
                  </StyledSizeDiv>
                </>
              )}
            </div>

            <StyledCartDiv>
              <StyledPriceH2> {state.price} </StyledPriceH2>

              <StyledAddToCartDiv>
                <h2>ADD TO CART</h2>
              </StyledAddToCartDiv>
            </StyledCartDiv>
          </div>
        </div>
      ) : null}
    </StyledMainDiv>
  );
}

export default ClotheScreen;
