import React from 'react';

const formatName = user => `${user.firstName} ${user.lastName}`;

const user = {
  firstName: 'Bob',
  lastName: 'Dobbs'
};

const Home = () => (
  <div>
    <h1>Hello, {formatName(user)}!</h1>
  </div>
)


export default Home;