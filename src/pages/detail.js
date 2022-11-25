import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect, useState} from "react";
import { Nav, Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function Detail(props){
    let {id} = useParams();
    let 찾은데이터 = props.data.find(function(x){
        return x.id == id
    });
    let [tabdata,setTabdata] = useState(0);
    return(
        <div>
            <Container>
                <Row className='service_list'>
                    <Col>요청ID</Col>
                    <Col>요청유형</Col>
                    <Col>요청상태</Col>
                    <Col>요청자</Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control placeholder={찾은데이터.sr_id} disabled />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control placeholder={찾은데이터.type} disabled />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control placeholder={찾은데이터.state} disabled />
                        </Form.Group>
                    </Col>
                    
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control placeholder={찾은데이터.name} disabled />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className='service_list'>
                    <Col>접수자</Col>
                    <Col>담당자</Col>
                    <Col>요청일</Col>
                    <Col>완료일</Col>
                </Row>
                <Row>
                    <Col>
                    <Form.Group className="mb-3">
                        <Form.Control placeholder={찾은데이터.admin} disabled />
                        </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group className="mb-3">
                        <Form.Control placeholder={찾은데이터.worker} disabled />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control placeholder={찾은데이터.startday} disabled />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control placeholder={찾은데이터.endday} disabled />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className='service_list'>
                    <Col md="1">요청제목</Col>
                    <Col md="11"></Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control placeholder={찾은데이터.title} disabled />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className='service_list'>
                    <Col md="1">요청내용</Col>
                    <Col md="11"></Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control placeholder={찾은데이터.contents} disabled />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Nav variant="tabs"  defaultActiveKey="link0">
                        <Nav.Item>
                        <Nav.Link onClick={()=>{
                                setTabdata(0)
                            }} eventKey="link0"> 연관 서비스 </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link onClick={()=>{
                                setTabdata(1)
                            }} eventKey="link1"> 연관 자산 </Nav.Link>
                        </Nav.Item> <Nav.Item>
                        <Nav.Link onClick={()=>{
                                setTabdata(2)
                            }} eventKey="link2"> 연관 장애 </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <TabContent tabdata={tabdata} data={찾은데이터} />
                    </Col>
                </Row>
            </Container>    
        </div>
    )
}

function TabContent(props){
    let [fade, setFade]=useState('');
    useEffect(()=>{
        setTimeout(()=>{ setFade('end')} ,100)

        return ()=>{
            setFade('')
        }
    },[props.tabdata])
    return(<div className={'start ' + fade}>
    {
        [
            <div>{props.data.ci_service}</div>,
            <div>
                <p>{props.data.ci_asset01}</p>
                <p>{props.data.ci_asset02}</p>
            </div>,
            <div>
                <Container>
                    <Row>
                        <Col xl="4">장애 ID</Col>
                        <Col xl="4">{props.data.rel_event}</Col>
                    </Row>
                    <Row>
                        <Col xl="4">장애 내용</Col>
                        <Col xl="4">{props.data.rel_contents}</Col>
                    </Row>
                    <Row>
                        <Col xl="4">장애 상태</Col>
                        <Col xl="4">{props.data.rel_state}</Col>
                    </Row>
                </Container>
            </div>
        ][props.tabdata]}
    </div>)
}



export default Detail