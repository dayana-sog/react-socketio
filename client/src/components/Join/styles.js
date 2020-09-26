import styled from 'styled-components';

export const Container = styled.div`
  
  .joinOuterContainer {
    display: flex;
    justify-content: center;
    text-align: center;
    height: 100vh;
    align-items: center;
    background-color: #9991D7;
  }

  .joinInnerContainer {
    width: 20%;
  }

  .joinInput {
    border-radius: 0;
    padding: 15px 20px;
    width: 100%;
    border: none;
  }

  .heading {
    color: white;
    font-size: 2.5em;
    padding-bottom: 10px;
    border-bottom: 1px solid white;
  }

  .button {
      color: #fff !important;
      text-transform: uppercase;
      text-decoration: none;
      background: #DD9AB4;
      padding: 20px;
      border-radius: 5px;
      display: inline-block;
      border: none;
      width: 100%;
  }

  .mt-20 {
    margin-top: 20px;
  }

@media (min-width: 320px) and (max-width: 480px) {
  .joinOuterContainer {
    height: 100%;
  }

  .joinInnerContainer {
    width: 90%;
  }
}

  button:focus {
    outline: 0;
  }


`;
