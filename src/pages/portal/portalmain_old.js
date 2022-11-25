import '../App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap';
import Portallist from './portallist';
import Assetchart from '../chart/assetchart';
import Portalchart from '../chart/portalchart';
import Mychart from '../chart/mychart'
import chartdata from '../../data/chart.json';


function Portarmain(){
    return(
        <div>
            <Container>
                    <Row>
                        <Col xxl="5">나의 업무</Col>
                        <Col xxl="7">주간 요청 현황</Col>
                    </Row>
                    <Row>
                        <Col xxl="5"><Portallist /></Col>
                        <Col xxl="7">
                        <Container fluid="xxl">
                            <Row>
                            <Col xxl="6"><Portalchart data={chartdata[0]}/></Col>
                            <Col xxl="6"><Portalchart data={chartdata[1]}/></Col>
                            </Row>
                            <Row>
                            <Col xxl="6"><Portalchart data={chartdata[2]}/></Col>
                            <Col xxl="6"><Portalchart data={chartdata[3]}/></Col>
                            </Row>
                        </Container>
                        </Col>
                    </Row>
                    <Row>
                        <Col xxl="9">월간 장애 등급</Col>
                        <Col xxl="3">최신 자산 현황</Col>
                    </Row>
                    <Row>
                        <Col xxl="9"><Mychart /></Col>
                        <Col xxl="3"><Assetchart /></Col>
                    </Row>
                    </Container>
                </div>
    )
}

export default Portarmain;