import '../App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap';
import Assetchart from './chart/assetchart';
import Portalchart from './chart/portalchart';
import Infrachart from './chart/infrachart'
import chartdata from '../data/chart.json';



function Boardincident() {
    return(
        <div>
            <Container>
                <Row>               
                    <Col md="4" className='th_ser'><span className='ser_bar'>|</span> 장애 비율</Col>
                    <Col md="8" className='th_ser'><span className='ser_bar'>|</span> 장애 현황</Col>
                </Row>
                <Row>
                    <Col md="4"><Assetchart /></Col>
                    <Col md="8">
                        <Container fluid="md">
                        <Row>
                            <Col md="6"><Portalchart data={chartdata[0]}/></Col>
                            <Col md="6"><Portalchart data={chartdata[1]}/></Col>
                        </Row>
                        <Row>
                            <Col md="6"><Portalchart data={chartdata[2]}/></Col>
                            <Col md="6"><Portalchart data={chartdata[3]}/></Col>
                        </Row>
                        </Container>
                    </Col>
                </Row>
                <Row>               
                    <Col md="4" className='th_ser'><span className='ser_bar'>|</span> CPU / 메모리 평균 사용율</Col>
                </Row>
                <Row>
                    <Col md="4"><Infrachart i="0" /></Col>
                    <Col md="4"><Infrachart i="1" /></Col>
                    <Col md="4"><Infrachart i="2" /></Col>
                </Row>
                <Row>
                    <Col md="4"><Infrachart i="3" /></Col>
                    <Col md="4"><Infrachart i="4" /></Col>
                    <Col md="4"><Infrachart i="5" /></Col>
                </Row>
            </Container>

        </div>
    )
};

export default Boardincident;
