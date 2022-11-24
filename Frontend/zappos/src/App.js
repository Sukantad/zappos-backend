import { Box } from '@chakra-ui/react';
import Allroute from './Allroutes/Allroute';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
function App() {
  return (<>
  
    <Box>
      <Navbar/>

      <Allroute/>

      {/* <Footer/>  */}

      <Footer/>

    </Box>
    </>
  );
}

export default App;
