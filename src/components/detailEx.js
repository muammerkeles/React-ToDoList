import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import axios from "axios";
import jsondata from '../data/data.json'
import { Link, useParams } from 'react-router-dom';
function DetailEx() {
    const {id}=useParams();
    const [detail,setDetail]=useState({});
    useEffect(() => {
      if(jsondata[id]==undefined){
          alert("Not found");
      }else{
          setDetail(jsondata[id]);
      }
    }, [])
    
    return (
        <Card style={{ width: '18rem' }} className="mt-5">
            <Card.Body>
                <Card.Title>Date: {detail.date}</Card.Title>
                <Card.Text>
                {detail.task}
                </Card.Text>
                <Link to={`/`} className='btn btn-primary'>Return back</Link>
            </Card.Body>
        </Card>
    )
}

export default DetailEx;