import React from 'react';
import red_ball from "./image/red-ball.svg";
import purple_ball from "./image/purple-ball.svg";

const Background = () => {
  return (
    <div>
      <div className="red-light"></div>
      <div className="purple-ball">
        <img src={purple_ball} alt=""></img>
      </div>
      <div className="red-ball">
        <img src={red_ball} alt=""></img>
      </div>
      <div className="small-red-ball">
        <img src={red_ball} alt=""></img>
      </div>
    </div>
  );
}

export default Background