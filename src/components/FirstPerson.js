import React, { useState, useLayoutEffect } from 'react';
import chatStore from '../store/chat';

const FirstPerson = () => {
  const [chatState, setChatState] = useState(chatStore.initialState);

  useLayoutEffect(() => {
    chatStore.subscribe(setChatState);
    chatStore.init();
  }, []);

  const onFormSubmit = e => {
    e.preventDefault();
    const messageObject = {
      person: 'first-person',
      text: e.target.elements.messageInput.value.trim(),
    };
    chatStore.sendMessage(messageObject);
    document.getElementById('messageForm').reset();
  };

  const onClear = e => {
    e.preventDefault();
    chatStore.clearChat();
  };

  return (
    <div className="contaier">
      <h2>Mycroft</h2>
      <div className="chat-box">
        {chatState.data.map(message => (
          <div>
            <p className={message.person}>{message.text}</p>
            <div className="clear"></div>
          </div>
        ))}
      </div>
      <form id="messageForm" onSubmit={onFormSubmit}>
        <input
          type="text"
          id="messageInput"
          name="messageInput"
          placeholder="type here..."
          required
        />
        <button type="submit">Send</button>
        <br />
        <button type="button" onClick={onClear}>
          Clear Chat
        </button>
        <br />
      </form>
    </div>
  );
};

export default FirstPerson;
