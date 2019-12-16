import React from "react";
import { Container, Tweets, Menu } from "./styles";
import avatar from "../../assets/avatar.png";
import comments from "../../assets/icons/comments.svg";
import retweet from "../../assets/icons/retweet.svg";
import like from "../../assets/icons/like.svg";

export default function Timeline() {
  return (
    <Container>
      <Menu>
        <a href="google.com" className="active">
          Tweets
        </a>
        <a href="google.com">Tweets and replies</a>
        <a href="google.com">Medias</a>
      </Menu>
      <Tweets>
        <li>
          <img src={avatar} alt="Avatar" />
          <div className="info">
            <strong>
              Benoît Vrins <span>@Exibit</span>
            </strong>
            <p>
              sadsadsa djhashasgfas fghafghafgsfagfds ghkfdgjksfgddddd jlgj
              lfgsa dasdsasdaad dsd sa dasda dadasdsda sdd
            </p>
            <div className="actions">
              <a href="google.com">
                <img src={comments} alt="Comments" /> 3
              </a>
              <a href="google.com">
                <img src={retweet} alt="Retweet" /> 4
              </a>
              <a href="google.com">
                <img src={like} alt="Like" /> 5
              </a>
            </div>
          </div>
        </li>
      </Tweets>
    </Container>
  );
}
