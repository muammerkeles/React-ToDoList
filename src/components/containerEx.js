import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormEx from './formEx';
import ListEx from './listEx';
import { useEffect, useState } from 'react';

function ContainerEx() {
    const [formData,setFormData]=useState({task:"",date:""});
    const [list,setList]=useState([]);
    const updateList= function(e){
        setList([...list,{task:formData.task,date:formData.date}]);
    }
    /*useEffect(()=>{},[list])*/
    const formChange= function(e){
        setFormData({...formData,[e.target.name]:e.target.value});
    }
    const onItemEdit= function(index){
        console.log("index",list[index]);
        setFormData({...formData,task:list[index].task,date:list[index].date});
        console.log("formData",formData);
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