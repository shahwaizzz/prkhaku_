import React,{useState, useEffect} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {AiOutlineArrowRight} from 'react-icons/ai';
import {Link} from 'react-router-dom'
import axios from 'axios';

const MainSection = (props) => {
    const {setNav, setNotesClass} = props;
    const [data, setData] = useState(null);
    const [uniClass, setUniClass] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/notes/").then((response) => {
            // setData(response.data.notes);
            const res = response.data.notes;
            // console.log("Response : ", response.data);
            // console.log("Response data : ", res);
            // console.log("data : ", data);
            const uni = [...new Set(res.map((item) => {return item.class}))];
            console.log(uni);
            console.log("uni data uni : ", uni );
            console.log("uniClass uni class : ", uniClass)
            setUniClass(uni);
            console.log("uniClass : ", uniClass);
        }).catch((error) => {
            console.log(error);
        })
    },[])
    
    return (
    <Container className='py-5 px-5'>
        <Row>
            <Col><h1 className='notes-font-style1 pb-3 section-heading' >Parhaaku Notes</h1></Col>
        </Row>
        <Row>
            {uniClass && uniClass.map((notes, index) => (
                <Col md={4} key={index} className='pb-5'>
                    <div className='notes-cls-div1 shadow'>
                        <div className='text-center notes-cls-inr-div py-3'>
                            <div className='py-1'></div>
                            <h1 className='pt-5 section-heading'>{notes}</h1>
                            {/* <Link className="bg-dark text-white px-3 py-2 mt-3" to={""}>View notes <AiOutlineArrowRight className='mx-2' /></Link> */}
                            <Button variant="dark my-5" onClick={() => {
                                setNav(9);
                                setNotesClass(notes);
                            }}>View notes <AiOutlineArrowRight className='mx-2' /> </Button>
                        </div>
                    </div>
                </Col>                
            ))}
        </Row>
    </Container>
  )
}

export default MainSection