import styled from 'styled-components';

export const Container = styled.div`

  margin-top: 66px;

`;

export const Label = styled.div`
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  letter-spacing: 0.065em;
  padding: 0 37px;
  margin-bottom: 15px;
`;

export const Card = styled.div`
  background-color: #1D1C20;
  border-radius: 11px;
  padding: 15px 37px;
  display: grid;
  flex-direction: row;
  grid-template-columns: 160px 250px 80px;
  align-items: center;
  justify-content: space-between;
  color: #BBBBBB;

  & + &{
    margin-top: 16px;
  }

`;

export const Coin = styled.div`
  
  display: flex;
  flex-direction: row;
  align-items: center;
  h1{
    font-size: 20px;
    color: #ffffff;
  }
  span{
    margin-left: 4px;
    text-transform: uppercase;
  }

  
`;
