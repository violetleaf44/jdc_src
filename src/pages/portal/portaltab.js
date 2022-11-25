import React from 'react';
import { useEffect, useState} from "react";
import { Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import Portallist from './portallist';
import Portalboard from './portalboard';

function Portaltab(){
    let [tabdata,setTabdata] = useState(0);
    return(
        <div>
            <Nav variant="tabs"  defaultActiveKey="link0">
                <Nav.Item>
                <Nav.Link onClick={()=>{
                        setTabdata(0)
                    }} eventKey="link0"> 최근요청 </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link onClick={()=>{
                        setTabdata(1)
                    }} eventKey="link1"> 공지사항 </Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tabdata={tabdata} />
        </div>
    )
}

function TabContent({tabdata}){
    let [fade, setFade]=useState('')
     
    useEffect(()=>{
        setTimeout(()=>{ setFade('end')} ,100)

        return ()=>{
            setFade('')
        }
    },[tabdata])
    return(<div className={'start ' + fade}>
    {[<div><Portallist /></div>,<div><Portalboard /></div>][tabdata]}
    </div>)
}



export default Portaltab