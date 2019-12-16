import styled from "styled-components";

export const Container = styled.div`
  width: 290px;
  margin-top: 10px;
`;

export const Content = styled.div`
  background: #fff;
  padding: 15px;
  border-radius: 2px;

  div.title {
    display: flex;
    align-items: baseline;

    strong {
      font-size: 18px;
      color: #1f2226;
    }

    a {
      color: #3bb9e3;
      font-size: 12px;
      text-decoration: none;
      position: relative;
      padding-left: 15px;
    }

    a::before {
      content: "";
      width: 2px;
      height: 2px;
      border-radius: 50%;
      background: #222;
      margin: 0 5px;
      left: 4px;
      top: 6px;
      position: absolute;
    }
  }
`;

export const ListItem = styled.ul`
  list-style: none;
  margin-top: 10px;

  li {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccd6dd;
    margin-bottom: 10px;
    padding-bottom: 10px;

    &&:last-child {
      margin-bottom: 0;
      padding-bottom: 0;
    }

    a {
      color: #ccd6dd;
      text-decoration: none;
      font-size: 14px;
    }

    div.profile-info {
      display: flex;
      align-items: center;

      img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
      }

      .info {
        margin-left: 10px;
        display: flex;
        flex-direction: column;

        strong {
          font-size: 14px;
          color: #1f2326;

          span {
            font-weight: normal;
            color: #9a9a9a;
          }
        }

        button {
          margin-top: 4px;
          height: 27px;
          width: 90px;
          background: #fff;
          border: 1px solid #3bb9e3;
          font-weight: bold;
          font-size: 14px;
          color: #3bb9e3;
          border-radius: 16px;
          cursor: pointer;

          display: flex;
          align-items: center;
          justify-content: center;
        }
        button:hover {
          background-color: #3bb9e3;
          color: #fff;
        }
      }
    }
  }
`;
