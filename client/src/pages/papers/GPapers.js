import React,{useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {FaDiceSix} from 'react-icons/fa';
import axios from 'axios'


const GPapers = (props) => {
  const [data, setData] = useState(null);
  const {setPaperClass, setSubject, setNav, setFile, setPaperType} = props;
  useEffect(() => {
    axios.get("http://localhost:5000/paper/").then((response) => {
      setData(response.data.papers);
      console.log(data);
      console.log("Response data", response.data);
    }).catch((error) => {
      console.log(error);
    })     
  },[])


  return (
    <Container fluid className='px-5'>
        <Row>
            <Col md={10}>
                <div className='ts-thead'>
                  <div className='ts-icon-div'>
                    <FaDiceSix style={{padding: '20px 15px',borderRadius: '50%', marginTop:'-8px', border: '1px solid black', backgroundColor: 'white',marginLeft: '-11px'}} size="2.6cm" />
                  </div>
                    <div className='ts-thead-txt bg-warning'>Class Wise Guess Papers</div>
                </div> 
                <div className='py-4'></div>
                <div className='table-div px-2'>
                        <table className='table1'>
                            <thead>
                            <tr>
                                <th style={{backgroundColor:'#0F9EFF'}}>9th Class</th>
                            </tr>
                            </thead>
                            <tbody style={{backgroundColor: 'lightcyan'}}>
                            {data && data.filter(item => item.class ==="Class 9").map(filteredClass => (
                              <tr><td onClick={() => {
                                setSubject(filteredClass.subject)
                                setPaperClass(filteredClass.class)
                                setFile(filteredClass.paperDoc)
                                setPaperType("Guess Papers")
                                setNav(14)
                              }}>{filteredClass.subject}</td></tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='table-div px-3'>
                        <table className='table1'>
                            <thead>
                            <tr>
                                <th style={{backgroundColor:'#0F9EFF'}}>10th Class</th>
                            </tr>
                            </thead>
                            <tbody style={{backgroundColor: 'lightcyan'}}>
                            {data && data.filter(item => item.class ==="Class 10").map(filteredClass => (
                              <tr><td onClick={() => {
                                setSubject(filteredClass.subject)
                                setPaperClass(filteredClass.class)
                                setFile(filteredClass.paperDoc)
                                setPaperType("Guess Papers")
                                setNav(14)
                              }}>{filteredClass.subject}</td></tr>
                            ))}
                            {/* <tr><td>English</td></tr>
                            <tr><td>English</td></tr>
                            <tr><td>Urdu</td></tr>
                            <tr><td>Mathematics</td></tr>
                            <tr><td>Physics</td></tr>
                            <tr><td>Biology</td></tr>
                            <tr><td>Pakistan Studies</td></tr>
                            <tr><td>Chemistry</td></tr>
                            <tr><td>Chemistry</td></tr>
                            <tr><td>Chemistry</td></tr>
                            <tr><td>Civics</td></tr>
                            <tr><td>English</td></tr> */}
                            </tbody>
                        </table>
                    </div>
                    <div className='table-div px-3'>
                        <table className='table1'>
                            <thead>
                            <tr>
                                <th style={{backgroundColor:'#0F9EFF'}}>11th Class</th>
                            </tr>
                            </thead>
                            <tbody style={{backgroundColor: 'lightcyan'}}>
                            {data && data.filter(item => item.class ==="Class 11").map(filteredClass => (
                              <tr><td onClick={() => {
                                setSubject(filteredClass.subject)
                                setPaperClass(filteredClass.class)
                                setFile(filteredClass.paperDoc)
                                setPaperType("Guess Papers")
                                setNav(14)
                              }}>{filteredClass.subject}</td></tr>
                            ))}
                            {/* <tr><td>English</td></tr>
                            <tr><td>English</td></tr>
                            <tr><td>Urdu</td></tr>
                            <tr><td>Mathematics</td></tr>
                            <tr><td>Mathematics</td></tr>
                            <tr><td>Mathematics</td></tr>
                            <tr><td>Physics</td></tr>
                            <tr><td>Biology</td></tr>
                            <tr><td>Pakistan Studies</td></tr>
                            <tr><td>Chemistry</td></tr>
                            <tr><td>Civics</td></tr>
                            <tr><td>English</td></tr> */}
                            </tbody>
                        </table>
                    </div>
                    <div className='table-div px-2'>
                        <table className='table1'>
                            <thead>
                            <tr>
                                <th style={{backgroundColor:'#0F9EFF'}}>12th Class</th>
                            </tr>
                            </thead>
                            <tbody style={{backgroundColor: 'lightcyan'}}>
                            {data && data.filter(item => item.class ==="Class 9").map(filteredClass => (
                              <tr><td onClick={() => {
                                setSubject(filteredClass.subject)
                                setPaperClass(filteredClass.class)
                                setFile(filteredClass.paperDoc)
                                setPaperType("Guess Papers")
                                setNav(14)
                              }}>{filteredClass.subject}</td></tr>
                            ))}
                            {/* <tr><td>English</td></tr>
                            <tr><td>Urdu</td></tr>
                            <tr><td>Mathematics</td></tr>
                            <tr><td>Physics</td></tr>
                            <tr><td>Biology</td></tr>
                            <tr><td>Biology</td></tr>
                            <tr><td>Biology</td></tr>
                            <tr><td>Biology</td></tr>
                            <tr><td>Pakistan Studies</td></tr>
                            <tr><td>Pakistan Studies</td></tr>
                            <tr><td>Chemistry</td></tr>
                            <tr><td>Civics</td></tr> */}
                            </tbody>
                        </table>
                    </div>
            </Col>
            <Col md={2} className='pt-4'>
              <div className='vertical-advert mt-5'> 
                <h1>Advert</h1>
              </div>
            </Col>
        </Row>
        <Row>
          <div className='advert11 mt-4'>
            <h1>Advert</h1>
          </div>
        </Row>
    </Container>
  )
}

export default GPapers