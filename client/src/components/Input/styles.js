import styled from 'styled-components';

export const Container = styled.div`
  .form {
    display: flex;
    margin: 10px;
    justify-content: space-between;
  }

  .input {
    border: 1px solid #3e3e3e;
    border-radius: 0;
    padding: 3%;
    width: 83%;
    font-size: 1em;
    border-radius: 20px;

  }

  input:focus, textarea:focus, select:focus{
    outline: none;
  }

  .sendButton {
    color: #fff !important;
    text-transform: uppercase;
    text-decoration: none;
    background: #88D0B4;
    padding: 10px;
    display: inline-block;
    border: none;
    border-radius: 20px;
    width: 15%;
    align-self: center;
  }
`;
