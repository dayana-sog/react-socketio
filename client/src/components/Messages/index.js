import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message';

import { Container } from './styles';

const Messages = ({ messages, name }) => {
  return (
    <Container>
      <ScrollToBottom>
        {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}
      </ScrollToBottom>
    </Container>
  );
};

export default Messages;