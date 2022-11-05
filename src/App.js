import { useState } from 'react';
import './App.css';
import AllGuns from './component/AllGuns/AllGuns';
import Navbar from './component/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0);
  const countAdd = () => {
    setCount(count +1)
  }
  return (
    <div className="App">
      <Navbar count={count}></Navbar>
      <AllGuns countAdd={countAdd} />
    </div>
  );
}

export default App;
