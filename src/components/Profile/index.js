import React from "react";
import { Container, List, ListItem, Content } from "./styles";
import avatar from "../../assets/avatar.png";
import place from "../../assets/icons/place.svg";
import url from "../../assets/icons/url.svg";
import joined from "../../assets/icons/joined.svg";
import born from "../../assets/icons/born.svg";
import followers from "../../assets/icons/followers.svg";
import images from "../../assets/icons/images.svg";

export default function Profile() {
  return (
    <Container>
      <img className="photo-profile" src={avatar} alt="Profile" />
      <h1>Manoel Gomes</h1>
      <span>@_manogel_</span>
      <p>Let's a code!</p>
      <List>
        <ListItem>
          <img src={place} alt="Place" />
          Santana, Macapá
        </ListItem>
        <ListItem>
          <img src={url} alt="manogel.codes" />
          manogel.codes
        </ListItem>
        <ListItem>
          <img src={joined} alt="Joined" />
          Joined June 2018
        </ListItem>
        <ListItem>
          <img src={born} alt="Born" />
          10/10/1999
        </ListItem>
      </List>

      <Content>
        <span>
          <img src={followers} alt="Followers" />
          75 followers that you know
        </span>

        <ul className="followers">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </Content>

      <Content>
        <span>
          <img src={images} alt="Medias" />
          256 photos and videos
        </span>
        <ul className="medias">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </Content>
    </Container>
  );
}
