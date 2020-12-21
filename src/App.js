import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Banner from './components/Banner';


const App = () => (
  <div>
  <Banner/>
  <Button variant="outline-secondary" className="Button-first">Star Wars App in progress 🔧</Button>{' '}
  </div>
)

export default App;
