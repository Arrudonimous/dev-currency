import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;

  @media(max-width: 550px){
    max-width: 500px;
    background-color: red;
  }
`;
