import '../App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap';
import Portallist from './portal/portallist';
import Mychart from './chart/mychart'
import Mylistcount from './count/mylistcount';
import Napgichart from './chart/napgichart';


function Boardservice() {
    return(
        <div>
            <Container>
                <Row>
                    <Col md="7" className='th_ser'><span className='ser_bar'>|</span> 최신 서비스 요청</Col>
                    <Col md="5" className='th_ser'><span className='ser_bar'>|</span> 요청 현황</Col>
                </Row>
                <Row>              
                    <Col md="7"><Portallist/> </Col>
                    <Col md="5"><Mylistcount /></Col>      
                </Row>
                <Row>              
                    <Col md="12"></Col>     
                </Row>
                <Row className='chart_margin_top'>
                    <Col md="7" className='th_ser'><span className='ser_bar'>|</span> 등급별 처리</Col>
                    <Col md="5" className='th_ser'><span className='ser_bar'>|</span> 월별 SLA 준수 현황</Col>
                </Row>
                <Row>
                    <Col md="7"><Mychart /></Col>
                    <Col md="5"><Napgichart /></Col>
                </Row>
            </Container>
        </div>
    )
};

export default Boardservice;
