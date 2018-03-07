import React from 'react';
import ResponseGrabber from 'lib/ResponseGrabber';

var responseGrabber = new ResponseGrabber();
responseGrabber.getResponsesToUser('krakenfx');

const Home = () => (
  <div>
    <h1>Hello, Bob Dobbs!</h1>
  </div>
)


export default Home;