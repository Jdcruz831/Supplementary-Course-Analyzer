import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import Banner from './Reusables/banner';


const theme = {
  colors: {
    primary: '#043927',
    secondary: '#c4b581',
  },
};


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner></Banner>
        
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: '50vw', height: '58%', backgroundImage: 'linear-gradient(to bottom, #008453, #043927' }}></div>
      </header>
    </div>
  
  )
}

const styles = {
  fontFamily: 'BlinkMacSystemFont'
};

export default App;
