import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import HomeScreen from './screens/HomeScreen.js';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <main className='py-3'>
        <Container>
          <Row>
            <Col>
              <HomeScreen />
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default App;
