import styled from 'styled-components';

export const Container = styled.div`
  height: 59px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 285px;
    height: 100%;
  }

`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  height: 100%;

`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  padding: 0 15px;
  position: relative;

  span {
    color: #667580;
    font-size: 12px;
    font-weight: bold;
  }

  strong {
    font-size: 18px;
    color: #667580;
    font-weight: bold;
    margin-top: 7px;
  }

  &&.active::after {
    content: '';
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #3bb9e3;
  } 

  &&.active strong {
    color: #3bb9e3;
  }  
`;

export const Actions = styled.div`
  display: flex;
  button {
    height: 34px;
    width: 90px;
    background: #fff;
    border: 1px solid #3bb9e3;
    font-weight: bold;
    font-size: 14px;
    color: #3bb9e3;
    border-radius:  16px;
    margin-right: 20px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  button:hover {
      background-color: #3bb9e3;
      color: #fff;
  }

  img{
    cursor: pointer;
  }


`;