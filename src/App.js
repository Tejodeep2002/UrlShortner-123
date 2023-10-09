import './App.css';
import './Main File/UrlShortner.css'
import Textarea from './Main File/UrlShortner';
import 'bootstrap/dist/css/bootstrap.css';
import Background from './Main File/Background';
import LinkResult from './Main File/LinkResult'; 
import Footer from './Main File/Footer';  
import { useState } from 'react';


function App() {
  const [inputValue,setInputValue]=useState("");
  return (
    <div className='Container'>
      <Textarea setInputValue={setInputValue}/>
      <Background/>
      <LinkResult inputValue={inputValue}/>
      <Footer/>
    </div>
  );
}

export default App;
