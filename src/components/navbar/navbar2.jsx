import React, { useState } from 'react';
import navLinksData from '../../config/navbar2Data';
import './navbar2.css';

import Theory from './../theory/theory';
import Video from './../video/video';
import Procedure from '../procedure/procedure';
import Experiment from '../experiment/experiment';
import Quiz from '../quiz/quiz';

function Navbar2() {
  const [currentpage, setCurrentpage] = useState(navLinksData[0].name);

  const pageComponents = {
    Theory: <Theory />,
    Procedure: <Procedure />,
    Quiz: <Quiz />,
    Video: <Video />,
    Experiment: <Experiment />,
  };

  return (
    <div>
      <nav className="navbar2">
        {navLinksData.map((item, index) => (
          <h1
            key={index}
            onClick={() => {
              console.log("Setting current page to:", item.name); // Debugging log
              setCurrentpage(item.name);
            }}
            className={currentpage === item.name ? 'active' : ''}
          >
            {item.name}
          </h1>
        ))}
      </nav>

      <div className="page-content">
        {pageComponents[currentpage]}
      </div>
    </div>
  );
}

export default Navbar2;
