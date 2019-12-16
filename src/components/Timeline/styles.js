import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  background: #fff;
  margin: 10px 20px 0;
`;

export const Menu = styled.nav`
  border-bottom: 1px solid #efecf0;
  padding: 10px 15px;

  a {
    text-decoration: none;
    color: #3bb9e3;
    font-size: 18px;
    font-weight: bold;
    margin-left: 20px;
  }

  a:first-child {
    margin-left: 0;
  }

  a.active {
    color: #1f2226;
  }
`;

export const Tweets = styled.ul`
  list-style: none;

  li {
    border-bottom: 1px solid #e6ecf0;
    padding: 10px 15px;
    display: flex;

    > img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }

    div.info {
      margin-left: 10px;
      display: flex;
      flex-direction: column;

      strong {
        font-size: 14px;
        color: #1f2223;

        span {
          font-weight: normal;
          font-size: 13px;
          color: #7b8b9a;
        }
      }

      p {
        font-size: 14px;
        color: #1f2223;
        margin-top: 5px;
        text-align: justify;
      }
    }

    div.actions {
      display: flex;
      margin-top: 10px;

      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #667580;
        font-weight: bold;
        font-size: 12px;
        margin-left: 30px;

        img {
          margin-right: 5px;
        }
      }

      a:first-child {
        margin-left: 0px;
      }
    }
  }
`;
