// import logo from './logo.svg';
import './App.css';
import { About } from './components/About';
import Navbar from './components/Navbar';
 import Form from './components/Form';
function App() {
  return (
    <>
    <Navbar title="TEXTOR"/>
    { <div className="container"><Form heading="Enter the Text to Analyze" /></div>   }
    <div><About/></div>
   
    </>
  );
}

export default App;
