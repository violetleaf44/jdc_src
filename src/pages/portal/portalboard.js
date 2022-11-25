
import { useState, useEffect } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

function Portalboard() {
    let [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      axios.get('http://125.188.163.223:5000/portalboard').then((response) => {
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
            <Col md="3">번호</Col>
            <Col md="9">공지 제목</Col>
        </Row>
          
         {
              data.map(function(a,i)
              {
                if(i<10){
                  return(
                    <DataMap data={data} i={i} key={i}/>
                  )
                } 
                return null;
              })
          }
      </Container>
    </div>
  )
}

function DataMap(props){
  let i = props.i;
  return(
          <Row>
            <Col md="3">{props.data[i].id}</Col>
            <Col md="9">{props.data[i].title}</Col>
          </Row>
          )
}

export default Portalboard;