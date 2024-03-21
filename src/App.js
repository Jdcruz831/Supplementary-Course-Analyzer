import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import Banner from './Reusables/banner';
import { Divider, Typography, colors } from '@mui/material';


const theme = {
  colors: {
    primary: '#043927',
    secondary: '#c4b581',
  },
};


function App() {
  return (
    <div className="App" style={styles}>
      <header className="App-header">
        <Banner></Banner>
        
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: '50vw', height: '58%', backgroundImage: 'linear-gradient(to bottom, #008453, #043927' }}>
          <div style={{ padding: 20 }}>
            <Typography variant='h5' fontFamily= 'BlinkMacSystemFont'style={{color: 'rgba(255, 255, 255, 1)',textShadow: '#222 2px 2px' }}>About Course Analyzer</Typography>
            <Divider style={{ margin: 10 }} />
            <Typography variant='p' style={{color: '#DDE', textShadow: '#252 2px 2px'}}>Adipisicing duis est nulla et labore proident excepteur. Cillum elit laborum ex sit proident deserunt cupidatat anim mollit eiusmod exercitation elit Lorem. Commodo officia anim quis enim exercitation consequat duis magna anim ea laborum. Non laborum voluptate sint laboris ut laboris aliquip nisi in nisi proident velit. Dolor elit Lorem elit adipisicing deserunt sunt incididunt magna quis occaecat occaecat deserunt ut. Irure irure duis laborum eiusmod consectetur amet nulla deserunt dolore dolore incididunt culpa culpa. Culpa laborum laboris ut Lorem pariatur aliquip veniam occaecat reprehenderit id nisi et duis fugiat.</Typography>
          </div>
        </div>
      </header>
    </div>
  );
}

const styles = {
  fontFamily: 'BlinkMacSystemFont'
};

export default App;
