import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function ListEx({ todoList, onItemEdit }) {
  console.log("tl", todoList.length);
  return (
    <div>
      <ListGroup as="ol" numbered >
      {todoList.map((item, i) => {
        return (
            <ListGroup.Item key={i} as="li"
              className="d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">{item.task}</div>
                {item.date}
              </div>
              <Badge bg="primary" pill >
                <Button onClick={()=>onItemEdit(i)}>Edit</Button>
              </Badge>
            </ListGroup.Item>
        )
      })
      }
          </ListGroup>
    </div>
  );
}

export default ListEx;