import styled from 'styled-components';

export const Container = styled.header`

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 15vh;
  @media(max-width: 550px){
    flex-direction: column;
  }

  h1{
    font-size: 46px;
    color: #ffffff;
  }

  .second{
    background: linear-gradient(180deg, #30DAFF 0%, #3083FF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  button{
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    background-color: #ffffff;
    border-radius: 40px;
    padding: 3px 4px 1px 4px;
    border: none;
    color: #D26CFE;
    transition: transform 0.2s ease-in;
    transition-duration: 0.6s;

    &:hover{
      transform: rotate(360deg);
    }
  }

`;
