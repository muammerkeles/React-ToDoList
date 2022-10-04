import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormEx({formData,onformChange,onUpdateList}) {
    return (
        <Form className="border p-3 bg-muted rounded">
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
            <Button variant="primary" type="button" onClick={onUpdateList}>
                Save
            </Button>
        </Form>
    )
}

export default FormEx;