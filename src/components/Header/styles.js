import styled from 'styled-components';
import search from '../../assets/icons/search.svg'

export const Container = styled.div`
  height: 46px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0,0, 0.25);
  position: relative;
  z-index: 1;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

`;

export const Buttons = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 13px;
  color: #667580;
  font-weight: bold;

  margin-left: 30px;

  &&:first-child{
    margin-left: 0;
  }

  img{
    margin-right: 7px;
  }
`;

export const Content = styled.div`
  display:flex;

  img {
    height: 34px;
    width: 34px;
    border-radius: 50%;
    margin: 0 15px;
  }

  button {
    height: 34px;
    width: 90px;
    background: #3bb9e3;
    font-weight: bold;
    font-size: 14px;
    color: #fff;
    border-radius:  16px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    width: 220px;
    border: 1px solid #e6ecf0;
    height: 34px;
    padding: 0 30px 0 12px;
    border-radius: 16px;
    color: #667581;
    font-size: 12px;
    background: #f5f8fa url(${search}) no-repeat 195px center;
  }

`;