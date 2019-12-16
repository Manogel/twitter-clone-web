import React from 'react';
import more from '../../assets/icons/more.svg'

import { Container, List, ListItem, Actions } from './styles';

export default function TopBar() {
  return (
    <Container  >
      <div className="content-margin" > 
        <List>
          <ListItem className="active" >
            <span>Tweets</span>
            <strong>12345</strong>
          </ListItem>
          <ListItem>
            <span>Followings</span>
            <strong>654</strong>
          </ListItem>
          <ListItem>
            <span>Followers</span>
            <strong>84</strong>
          </ListItem>
          <ListItem>
            <span>Favorites</span>
            <strong>97</strong>
          </ListItem>
        </List>
        <Actions>
          <button>
            Follow
          </button>
          <img src={more} alt="More"/>
        </Actions>
      </div>
    </Container>
  );
}
