import styled from 'styled-components';

export const Container = styled.div`
  .outerContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #DD9AB4;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #FFFFFF;
    border-radius: 8px;
    height: 60%;
    width: 35%;

    
  }

  @media (min-width: 320px) and (max-width: 480px) {
    .outerContainer {
      height: 100%;
    }

    .container {
      width: 100%;
      height: 100%;
    }
  }

  @media (min-width: 480px) and (max-width: 1200px) {
    .container {
      width: 60%;
    }
  }
`;
