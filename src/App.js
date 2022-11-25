
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Service from './pages/service';
import Incident from './pages/incident';
import Boardservice from './pages/boardservice';
import Boardincident from './pages/boardincident';
import Mainportal from './pages/portal/mainportal';

function App() {
  let navigate = useNavigate();
  return (
    <div className="App cf">

      <Navbar bg="light" expand="lg" className='header' >
        <Container fluid className='header_nav'>
          <Navbar.Brand className='jdc-logo'></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link onClick={() => { navigate('/') }}>HOME</Nav.Link>

              <NavDropdown title="My page" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action4">나의 할일(작업중)</NavDropdown.Item>
                <NavDropdown.Item href="#action4">나의 요청(작업중)</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="서비스요청" id="navbarScrollingDropdown">
                <NavDropdown.Item onClick={()=>{navigate('/Boardservice')}}>서비스 통계</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{navigate('/service')}}>서비스 요청 현황</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/1.3">서비스 요청(작업중)</NavDropdown.Item>
                <NavDropdown.Item href="#action/1.4">Reporting(작업중)</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="장애요청" id="navbarScrollingDropdown">
                <NavDropdown.Item onClick={()=>{navigate('/Boardincident')}}>장애 통계</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{navigate('/incident')}}>장애 요청 현황</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/2.3">장애 요청(작업중)</NavDropdown.Item>
                <NavDropdown.Item href="#action/2.4">Reporting(작업중)</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="http://125.188.163.223:5000/" target="_blank">
                API 서버
              </Nav.Link>
            </Nav>

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="(작업중)"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<div><Mainportal /></div>} />
        <Route path="/jdc/" element={<div> <Mainportal/></div>} />
        <Route path="/service/*" element={<div> <Service /> </div>} />
        <Route path="/boardservice/" element={<div> <Boardservice /> </div>} />
        <Route path="/incident/*" element={<div> <Incident /> </div>} />
        <Route path="/boardincident/" element={<div> <Boardincident  /> </div>} />
        <Route path="*" element={<div>없는페이지</div>} /> 
      </Routes>

    </div>
  );
}

export default App;
