import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate as UseN  } from "react-router-dom";

function FormEx({formData,onformChange,onUpdateList}) {
    let navigate = UseN();
    const [welcomeMsj,setWelcome]=useState("");
    const onp=function(){
        setWelcome("saving..");
        return onUpdateList(function(d){
            if(d==1){
                setTimeout(()=>{
                    setWelcome("Saved successfully.");
                    setTimeout(()=>navigate('/', {replace: true}),1000);
                },1000);
            }else{
                setWelcome("Failed");
                setTimeout(()=>setWelcome("Failed"),3000);
            }
        });
    }
    return (
        <Form className="border p-3 bg-muted rounded bg-light">
            <h1 className='text-center'>{welcomeMsj =="" ?  `Todo Form`: welcomeMsj}</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Task</Form.Label>
                <Form.Control name="task" type="text" value={formData.task} placeholder="" onChange={onformChange} required/>
                <Form.Text className="text-muted">
                    Write what you do..
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDate">
                <Form.Label>When?</Form.Label>
                <Form.Control name="date" type="date" placeholder="Date" value={formData.date} onChange={onformChange}/>
            </Form.Group>
            <Button variant="primary" type="button" onClick={onp}>
                Save
            </Button>
        </Form>
    )
}

export default FormEx;