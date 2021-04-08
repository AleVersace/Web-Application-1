import logo from './logo.svg';
// import './App.css';
// Use bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import MyButton from './MyButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  // I'm passing props to the component MyButton
  return (
    <Container>
      <Row>
      <Col>
        <MyButton lang='en'/>
        <MyButton lang='it'/>
        <MyButton/>
      </Col>
      </Row>
    </Container>
  );
}

export default App;
