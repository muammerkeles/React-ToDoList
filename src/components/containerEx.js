import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormEx from './formEx';
import ListEx from './listEx';
import { useEffect, useState } from 'react';

function ContainerEx() {
    const [formData, setFormData] = useState({ task: "", date: "", index: -1 });
    const [list, setList] = useState([]);
    const updateList = function (e) {
        if(formData.task.length < 3){
            alert("Min 3 charachter..");
            return false;
        }
        if (formData.index == -1) {
            setList([...list, { task: formData.task, date: formData.date }]);
        } else {
            list[formData.index].task=formData.task;
            list[formData.index].date=formData.date;
            setList([...list]);
        }
        setFormData({task: "", date: "", index: -1});
        

    }
    const formChange = function (e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const onItemEdit = function (index) {
        setFormData({ ...formData, task: list[index].task, date: list[index].date, index: index });
    }
    return (
        <Container>
            <Row className="pb-4">
                <ListEx todoList={list} onItemEdit={onItemEdit}></ListEx>
            </Row>

            <Row>
                <Col >
                    <FormEx formData={formData} onformChange={formChange} onUpdateList={updateList} />
                </Col>
            </Row>

        </Container>
    );
}

export default ContainerEx;