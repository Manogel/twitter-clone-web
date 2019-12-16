import React from 'react';

import { Container, Buttons, ButtonItem, Content } from './styles';
import avatar from '../../assets/avatar.png';
import home from '../../assets/icons/home.svg';
import message from '../../assets/icons/message.svg';
import notification from '../../assets/icons/notification.svg';
import logo from '../../assets/icons/logo.svg';

export default function Header() {
  return (
    <Container>
      <div className="content-margin" > 
        <Buttons>
          <ButtonItem>
            <img src={home} alt="Home"/>
            Home
          </ButtonItem>
          <ButtonItem>
            <img src={message} alt="Message"/>
            Message
          </ButtonItem>
          <ButtonItem>
            <img src={notification} alt="Notification"/>
            Notification
          </ButtonItem>
        </Buttons>
        <img src={logo} alt="Twitter"/>
        <Content>
          <input type="text" placeholder="Search on Twitter" />
          <img src={avatar} alt="Profile"/>
          <button>Tweet</button>
        </Content>
      </div>
    </Container>
  );
}
