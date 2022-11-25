import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

function Portallist() {
  let [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      axios.get('http://125.188.163.223:5000/service').then((response) => {
        setData(response.data);
      })
        .catch(() => {
          console.log('failed')
        });
    }
    )();
  }, [])
  // API server 125.188.163.223:5000

  return (
    <div>
      <Container>
        <Row className='service_list'>
          <Col md="3">SR번호</Col>
          <Col md="3">요청분류</Col>
          <Col md="6">요청제목</Col>
        </Row>

        {
          data.map(function (a, i) {
            if (i < 12) {
              return (
                <DataMap data={data} i={i} key={i} />
              )
            }
            return null;
          })
        }
      </Container>
    </div>
  )
}

function DataMap(props) {
  let i = props.i;
  let navigate = useNavigate();
  return (
    <Row onClick={() => { navigate('/service') }}>
      <Col md="3">{props.data[i].sr_id}</Col>
      <Col md="3">{props.data[i].type}</Col>
      <Col md="6" className='service_list_td'>{props.data[i].title}</Col>
    </Row>
  )
}

export default Portallist