import './App.css';
import styled from 'styled-components';
import Home from './components/Home/Home';

const Container= styled.div`
  background:url("https://raw.githubusercontent.com/safak/youtube23/3d-portfolio/public/img/bg.jpeg");
  height:100vh;
  color:red;
`
function App() {
  return (
    <Container>
      <Home/>
    </Container>
  );
}

export default App;
