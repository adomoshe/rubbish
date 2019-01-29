import React from 'react';
import Wall from "components/Wall"
import './App.css';

const wallPosts = [
  {
    id:1,
    name: "Egbert Egg",
    post: "Need help with trash next week",
  }
]

function App() {
  return <Wall wallPosts={wallPosts} />;

}

export default App;
