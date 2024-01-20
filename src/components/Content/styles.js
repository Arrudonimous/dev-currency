import styled, { keyframes } from 'styled-components';

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
  @media(max-width: 550px){
    font-size: 14px;
  }
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
  height: 4rem;

  @media(max-width: 550px){
    grid-template-columns: 160px 150px;
  }
  @media(max-width: 420px){
    grid-template-columns: 120px 120px 80px;
  }

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
    @media(max-width: 550px){
      font-size: 16px;
    }
    @media(max-width: 550px){
      font-size: 14px;
    }

  }
  span{
    margin-left: 4px;
    text-transform: uppercase;
    @media(max-width: 550px){
      font-size: 12px;
    }

  }

  
`;

const shimmer = keyframes`
  0% {
    background-position: -200%;
  }
  100% {
    background-position: 200%;
  }
`;

export const Skeleton = styled.div`
  width: 100px;
  height: 20px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 1000px 100%;
  animation: ${shimmer} 1s infinite linear;
  border-radius: 4px;
`;
