import { useState, useEffect } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import Detail from './detail';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Pagination from "react-js-pagination";


function Incident() {

  let navigate = useNavigate();
  let [data, setData] = useState([]);
  let [itemcount, setItemcount] = useState(120);
  let [id, setId] = useState("");
  let [type, setType] = useState("");
  let [name, setName] = useState("");
  let [state, setState] = useState("");
  let [title, setTitle] = useState("");
  let [startday, setStartday] = useState("");
  let [endday, setEndday] = useState("2023-12-31");
  const [page, setPage] = useState(1);
  const [items] = useState(10);

  const idChange = (e) => { setId(e.target.value); }
  const typeChange = (e) => { setType(e.target.value); }
  const nameChange = (e) => { setName(e.target.value); }
  const titleChange = (e) => { setTitle(e.target.value); }
  const stateChange = (e) => { setState(e.target.value); }
  const startdayChange = (e) => { setStartday(e.target.value); }
  const enddayChange = (e) => { setEndday(e.target.value); }
  const handlePageChange = (page) => { setPage(page); };
  console.log(items * (page - 1), items * (page - 1) + items);

  useEffect(() => {
    (async () => {
      axios.get('http://125.188.163.223:5000/incident').then((response) => {
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
      <Container className='sr_table'>
        {/* 검색 시작*/}
        <Row>
          <Col className='th_ser'><span className='ser_bar'>|</span> 검색</Col>
        </Row>
        <Row className='sr_text'>
          <Col md="1">요청번호</Col>
          <Col md="3">
            <Form.Group className="mb-3">
              <Form.Control onInput={idChange} />
            </Form.Group>
          </Col>
          <Col md="1">요청유형</Col>
          <Col md="3">
            <Form.Group className="mb-3">
              <Form.Select id="srType" onChange={typeChange}>
                <option value="서버">서버</option>
                <option value="네트워크">네트워크</option>
                <option value="APP">APP</option>
                <option value="OA">OA</option>
                <option value="" selected="selected">-- 초기화 --</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md="1">요청자</Col>
          <Col md="3">
            <Form.Group className="mb-3">
              <Form.Control onInput={nameChange} />
            </Form.Group>
          </Col>
        </Row>
        <Row className='sr_text'>
          <Col md="1">요청제목</Col>
          <Col md="11">
            <Form.Group className="mb-3">
              <Form.Control onInput={titleChange} />
            </Form.Group>
          </Col>
        </Row>
        <Row className='sr_text'>
          <Col md="1">요청상태</Col>
          <Col md="3">
            <Form.Group className="mb-3">
              <Form.Select id="srState" onChange={stateChange}>
                <option value="요청접수">요청접수</option>
                <option value="승인대기">승인대기</option>
                <option value="개발진행">개발진행</option>
                <option value="개발완료">개발완료</option>
                <option value="배포진행">배포진행</option>
                <option value="배포완료">배포완료</option>
                <option value="최종확인">최종확인</option>
                <option value="" selected="selected">-- 초기화 --</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md="1">요청일</Col>
          <Col md="3">
            <Form.Group className="mb-3">
              <Form.Control type='date' data-placeholder='FROM' required aria-required="true" onChange={startdayChange} />
            </Form.Group>
          </Col>
          <Col className="paging_text_center" md="1">~</Col>
          <Col md="3">
            <Form.Group className="mb-3">
              <Form.Control type='date' data-placeholder='TO' required aria-required="true" onChange={enddayChange} />
            </Form.Group>
          </Col>
          <Col md="4"></Col>
        </Row>
        <Row>
          <Col md="4"></Col>
          <Col md="2" className='btn_inbox'><Button variant="primary" onClick={() => {
            setPage(1);
            if (startday > endday) {
              alert('[요청일 오류] : 요청일(FROM)이 요청일(TO) 보다 큽니다.');
              window.location.href = '/incident';
            }

            else {

              if (id !== null) {
                var searchid = '&sr_id=' + id;
              };
              if (type !== null) {
                var searchtype = '&type=' + type;
              };
              if (name !== null) {
                var searchname = '&name=' + name;
              };
              if (title !== null) {
                var searchtitle = '&title=' + title;
              };
              if (state != null) {
                var searchstate = '&state=' + state;
              };
              if (startday != null) {
                var searchstartday = '&startday=' + startday;
              };
              if (endday != null) {
                var searchendday = '&endday=' + endday;
              };
              var search = searchid + searchtype + searchname + searchtitle + searchstate + searchstartday + searchendday;
              console.log(search);
              console.log(startday);
              axios.get('http://125.188.163.223:5000/incidentsearch?value=dummy' + search).then((response) => {
                setData(response.data);
                setItemcount(response.data.length);
              })
                .catch(() => {
                  console.log('failed')
                });

              console.log(itemcount)
            }
          }}>검색</Button></Col>
          <Col md="2" className='btn_inbox'><Button variant="primary" onClick={() => {
            setPage(1);
            axios.get('http://125.188.163.223:5000/incident').then((response) => {
              setData(response.data);
              setItemcount(response.data.length);
            })
              .catch(() => {
                console.log('failed')
              });

            console.log(itemcount);
            window.location.href = '/incident'
          }}>초기화</Button></Col>
          <Col md="4"></Col>
        </Row>
        <Row className='row_line'>
          <Col className='th_ser'><span className='ser_bar'>|</span> 검색결과</Col>
        </Row>
      </Container>
      {/* 검색 끝 */}

      {/* 라우트 시작 */}
      <Routes>
        <Route path="/*" element={
          <div>

            <Container>

              <Row className="paging_box">
                <Col className="paging_text_right" md="1">요청번호</Col>
                <Col className="paging_text_right" md="1">요청유형</Col>
                <Col className="paging_text_right" md="1">요청자</Col>
                <Col md="4">요청제목</Col>
                <Col className="paging_text_right" md="1">요청상태</Col>
                <Col className="paging_text_center" md="2">요청일시</Col>
                <Col className="paging_text_center" md="2">종료일시</Col>
              </Row>

              {data.slice(10 * (page - 1), 10 * (page - 1) + 10
              ).map((v, i) => {
                return (
                  <Row className="paging_text" onClick={() => { navigate('/incident/detail/' + v.id) }}>
                    <Col md="1">{v.sr_id}</Col>
                    <Col md="1">{v.type}</Col>
                    <Col md="1">{v.name}</Col>
                    <Col className="paging_text_left" md="4">{v.title}</Col>
                    <Col md="1">{v.state}</Col>
                    <Col className="paging_text_center" md="2">{v.startday}</Col>
                    <Col className="paging_text_center" md="2">{v.endday}</Col>
                  </Row>
                )
              })}
            </Container>

            <Pagination
              activePage={page}
              itemsCountPerPage={10}
              totalItemsCount={itemcount}
              pageRangeDisplayed={5}
              prevPageText={"‹"}
              nextPageText={"›"}
              onChange={handlePageChange}
            />
          </div>
        } />;
        <Route path="/detail/:id" element={<Detail data={data} />} />;
        <Route path="*" element={<div>404 없는 페이지입니다.</div>} />
      </Routes>
      {/* 라우트 끝 */}

    </div>
  );
}


export default Incident