import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CustomClothes, preOrder } from '../../constants/items';

function Clothes() {
  const [clothes, setClothes] = useState(CustomClothes);

  return (
    <div
      style={{
        display: 'flex',
        marginLeft: 300,
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {clothes &&
          clothes.slice(0, 8).map((item: any) => (
            <Link
              key={item.id}
              to={{ pathname: `/Product/${item.id}` }}
              state={item}
              style={{
                textDecoration: 'none',
                color: '#185936',
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                borderLeft: '1px solid green',
                borderBottom: '1px solid green',
                flexBasis: '20%',
                cursor: 'pointer',
              }}
            >
              <img
                src={item.img}
                alt=""
                style={{ width: 280, marginTop: 20 }}
              />

              <h3>{item.title}</h3>
              <p>{item.price}</p>
            </Link>
          ))}
        <div
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            borderLeft: '1px solid green',
            paddingLeft: 30,
            background: 'linear-gradient(#e66465, #9198e5)',
          }}
        >
          <h2>PRE-ORDER</h2>

          <div style={{ display: 'flex' }}>
            {preOrder.map((item) => (
              <Link
                key={item.id}
                to={{ pathname: `/Product/${item.id}` }}
                state={item}
                style={{
                  textDecoration: 'none',
                  color: '#185936',
                  display: 'flex',
                  flex: 1,
                  flexDirection: 'column',
                  cursor: 'pointer',
                  marginRight: 30,
                }}
              >
                <img src={item.img} alt="" style={{ width: 280 }} />
                <h3>{item.title}</h3>
                <p>{item.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clothes;
