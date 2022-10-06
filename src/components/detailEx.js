import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import axios from "axios";

function DetailEx(index) {
    const [detail,setDetail]=useState({});

    useEffect(() => {
        axios("./data/data.json").then((res) => {
            console.log("dd",res);
            //setDetail=res.data;
        })

        return () => {

        }
    }, [])

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default DetailEx;