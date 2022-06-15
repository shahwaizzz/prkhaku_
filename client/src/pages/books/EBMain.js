import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import {BiSearchAlt2} from 'react-icons/bi';
import {AiOutlineDownload} from 'react-icons/ai';
import cover1 from '../../img/img1.jpg';
import axios from 'axios';

const EBMain = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
    axios.get("http://localhost:5000/admin/ebooks/").then((response) => {
      setData(response.data.ebooks);
      console.log(data);
    }).catch((error) => {
      console.log(error);
    })    
  },[])

  const downloadFile = (id) =>{
      alert(id)
      axios.get(`http://localhost:5000/admin/download/${id}`).then((response) => {
    //   console.log(data);
    alert("Book Downloaded Successfully");
    }).catch((error) => {
      console.log(error);
    }) 
  }

  return (
    <>  
    <Container className='py-5'>
        <Row>
            <Col>
                <h1 className='text-center eb-heading'>Browse a number e-Books for classes of SNC, Matric,<br /> Intermediate, Entry Tests, and Competitive <br /> Exams</h1>
                <div className='option-list'>
                    <ul>
                        <li>SNC</li>
                        <li>Matric</li>
                        <li>Intermediate</li>
                        <li>Entery Test</li>
                        <li>Competetive Exams</li>
                        <li>Islamic Books</li>
                        <li>Urdu Novels</li>
                        <li>More</li>
                    </ul>
                </div>
                <div className='search-cover'>
                    <div className='search-div'>
                        <Form.Select style={{display: 'inline-block', width: '160px'}} aria-label="Default select example">
                            <option>Select <b>Class</b> </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        <Button variant="warning mx-3"> <b className='px-2'>Search</b> <BiSearchAlt2 size='0.6cm' /> </Button>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
    <Container fluid className='sub-sec px-5'>
        <Row>
            <Col xs={12}>
                <h2 className='sec1-heading'>SNC - Class 1 to 8 <b className='c-fr'>View All &#62;</b></h2>
            </Col>
        </Row>
        <Row>
            {data && data.map((book, index) => (
                <Col lg={2} md={3} sm={6} xs={12} key={index} >
                    <div className='book-card'>
                        <div>
                            <img src={`http://localhost:5000/${book.ebookImage}`} alt="book cover" className='cover-img' />
                        </div>
                        <h2 className='pt-3'>{book.title}</h2>
                        <b>{book.category}</b>
                        <br />
                        <Button className='mt-3' onClick={() => downloadFile(book._id)} variant='dark'><AiOutlineDownload size="0.5cm" /> Download</Button>
                    </div>
                </Col>
            ))}            
        </Row>
    </Container>
    </>
  )
}

export default EBMain