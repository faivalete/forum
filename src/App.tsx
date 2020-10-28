import React, { RefObject, useRef } from 'react';
import bannerImg from './components/banner.png';
import contentImg from './components/content.png';
import ScrollHeader from './components/ScrollHeader';
import './App.css';

function App() {
  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <div className="App">
      <ScrollHeader contentRef={contentRef}/>

      <div ref={contentRef} className="App-content">
        {/* TODO: use picture html tag for such things */}
        <img className="content-img" src={bannerImg} alt='banner' />
        <img className="content-img" src={contentImg} alt='content'/>
      </div>
    </div>
  );
}

export default App;
