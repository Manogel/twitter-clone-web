import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import TopBar from './components/TopBar';
import Profile from './components/Profile';
import Timeline from './components/Timeline';
import Widgets from './components/Widgets';
import { WrapperContent } from './styles'

function App() {
  return (
    <>
      <Header />
      <Banner />
      <TopBar />
      <WrapperContent>
        <Profile />
        <Timeline />
        <Widgets />
      </WrapperContent>
   </>
  );
}

export default App;
