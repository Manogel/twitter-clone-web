import styled from "styled-components";

export const Container = styled.aside`
  width: 260px;
  margin-top: -130px;
  img.photo-profile {
    width: 200px;
    border-radius: 50%;
    border: 5px solid #fff;
  }

  h1 {
    font-size: 18px;
    color: #1f2226;
    margin-top: 10px;
  }

  span {
    margin-top: 5px;
    font-size: 14px;
    color: #53626c;
  }

  p {
    font-size: 14px;
    margin-top: 15px;
    color: #1f2226;
  }
`;

export const List = styled.ul`
  margin-top: 20px;
  list-style: none;
`;

export const ListItem = styled.li`
  font-size: 14px;
  color: #657786;
  margin-top: 8px;

  display: flex;
  align-items: center;

  img {
    margin-right: 10px;
  }

  &&:first-child {
    margin-top: 0;
  }
`;

export const Content = styled.div`
  margin-top: 20px;

  span {
    font-weight: normal;
    color: #3bb9e3;
    font-size: 14px;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }

  img {
    margin-right: 5px;
    color: #3bb9e3;
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  }

  ul.followers li {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    flex: 1 0 auto;
    background: #d0d5d9;
    margin: 0 5px 5px 0;
  }

  ul.medias li {
    width: 80px;
    height: 80px;
    flex: 1 0 auto;
    border-radius: 8px;
    background: #d0d5d9;
    margin: 0 5px 5px 0;
  }
`;
