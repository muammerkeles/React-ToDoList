import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FormEx from './formEx';
import ListEx from './listEx';
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { useEffect, useState } from 'react';

function ContainerEx() {
    const [formData, setFormData] = useState({ task: "", date: "", index: -1 });
    const [list, setList] = useState([]);

    const updateList = function (callback) {
        if (formData.task.length < 3) {
            alert("Min 3 charachter..");
            return false;
        }
        if (formData.index == -1) {
            setList([...list, { task: formData.task, date: formData.date }]);
        } else {
            list[formData.index].task = formData.task;
            list[formData.index].date = formData.date;
            setList([...list]);
        }
        setFormData({ task: "", date: "", index: -1 });
        if(callback != undefined)
            return callback(1);
    }
    const formChange = function (e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const onItemEdit = function (index) {
        setFormData({ ...formData, task: list[index].task, date: list[index].date, index: index });
    }
    return (
        <Container>
            <Row>
                <Router>
                    <div>
                        <Navbar bg="light" variant="light">
                            <Container>
                                <Navbar.Brand href="#home">RJS-ToDoList</Navbar.Brand>
                                <Nav className="me-auto">
                                    <Link to="/list" className='nav-link active'>
                                        List
                                    </Link>
                                    <Link to="/add" className='nav-link active'>
                                        Add
                                    </Link>
                                </Nav>
                            </Container>
                        </Navbar>
                        <Routes>
                            <Route path="/list" element={<ListEx todoList={list} onItemEdit={onItemEdit}></ListEx>}></Route>
                            <Route path="/add" element={<FormEx formData={formData} onformChange={formChange} onUpdateList={updateList} />}></Route>
                        </Routes>
                    </div>
                </Router>
            </Row>
        </Container>
    );
}

export default ContainerEx;