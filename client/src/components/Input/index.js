import React from 'react';
import { FiSend } from 'react-icons/fi'

import { Container } from './styles';

const Input = ({ setMessage, sendMessage, message }) => (
  <Container>
    <form className="form">
      <input
        className="input"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
      />
      <button className="sendButton" onClick={e => sendMessage(e)}>
        <FiSend size={18} color="#fff" />
      </button>
    </form>
  </Container>
)

export default Input;