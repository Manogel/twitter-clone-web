import React from "react";

import { Container, Content, ListItem } from "./styles";
import avatar from "../../assets/avatar.png";

export default function Widgets() {
  return (
    <Container>
      <Content>
        <div className="title">
          <strong>Who to follow</strong>
          <a href="google.com">Refresh</a>
          <a href="google.com">View all</a>
        </div>
        <ListItem>
          {[1, 2, 3].map(item => (
            <li>
              <div className="profile-info">
                <img src={avatar} alt="Avatar" />
                <div className="info">
                  <strong>
                    Spade <span>@spade_be</span>
                  </strong>
                  <button>Follow</button>
                </div>
              </div>
              <a href="google.com">X</a>
            </li>
          ))}
        </ListItem>
      </Content>
    </Container>
  );
}
