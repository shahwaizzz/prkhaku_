import React,{useEffect, useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {FaDiceSix} from 'react-icons/fa';
import axios from 'axios';


const TSeries = () => {
  const [data, setData] = useState(null);
  const [class9, setClass9] = useState(null)
  const [class10, setClass10] = useState(null)
  const [class11, setClass11] = useState(null)
  const [class12, setClass12] = useState(null)
  const [sub9, setSub9] = useState(null)
  const [sub10, setSub10] = useState(null)
  const [sub11, setSub11] = useState(null)
  const [sub12, setSub12] = useState(null)


  useEffect(() => {
    axios.get("http://localhost:5000/paper/").then((response) => {
      const dataArr = response.data.papers;
      console.log(dataArr)
      const arr9th = dataArr.filter(item => item.class === "Class 9").map(filterdItem => filterdItem)
      console.log(arr9th)
      setClass9(arr9th)
      const arr10th = dataArr.filter(item => item.class === "Class 10").map(filterdItem => filterdItem)
      setClass10(arr10th)
      const arr11th = dataArr.filter(item => item.class === "Class 11").map(filterdItem => filterdItem)
      setClass11(arr11th)
      const arr12th = dataArr.filter(item => item.class === "Class 12").map(filterdItem => filterdItem)
      setClass12(arr12th)
      
      console.log("9th Class Array : ", class9);
      console.log("10th Class Array : ", class10);
      console.log("11th Class Array : ", class11);
      console.log("12th Class Array : ", class12);
      setData(response.data.papers);
      console.log(data);

      const filter9 = [...new Set(class9.map((item) => {return item.subject}))];
      console.log("Filter 9th", filter9)
      const filter10 = [...new Set(class10.map((item) => {return item.subject}))];
      console.log("Filter 10th", filter10)
      const filter11 = [...new Set(class11.map((item) => {return item.subject}))];
      console.log("Filter 11th", filter11)
      const filter12 = [...new Set(class12.map((item) => {return item.subject}))];
      console.log("Filter 12th", filter12)
      setSub9(filter9)
      setSub10(filter10)
      setSub11(filter11)
      setSub12(filter12)
      console.log("Set data")
      console.log("9th class subjects : ", sub9)
      console.log("10th class subjects : ", sub10)
      console.log("11th class subjects : ", sub11)
      console.log("12th class subjects : ", sub12)


    }).catch((error) => {
      console.log(error);
    })     
  },[])

  return (
    <Container fluid className='px-md-5 px-3'>
        <Row>
            <Col md={10}>
                <div className='ts-thead'>
                  <div className='ts-icon-div'>
                    <FaDiceSix style={{padding: '20px 15px',borderRadius: '50%', marginTop:'-8px', border: '1px solid black', backgroundColor: 'white',marginLeft: '-11px'}} size="2.6cm" />
                  </div>
                    <div className='ts-thead-txt bg-warning'> Class Wise Test Series</div>
                </div> 
                <div className='py-4'></div>
                <div className='table-div px-2' style= {{minHeight: '330px'}}>
                        <table className='table1'>
                            <thead>
                            <tr>
                                <th style={{backgroundColor:'#0F9EFF'}}>9th Class</th>
                            </tr>
                            </thead>
                            <tbody style={{backgroundColor: 'lightcyan'}}>
                            {data && data.filter(item => item.class ==="Class 9").map((filteredClass, index) => (
                              <tr key={index}><td>{filteredClass.subject}</td></tr>
                            ))}
                            {/* <tr><td>English Urdu MAth</td></tr>
                            <tr><td>English</td></tr>
                            <tr><td>Urdu</td></tr>
                            <tr><td>Mathematics</td></tr>
                            <tr><td>Physics</td></tr>
                            <tr><td>Physics</td></tr>
                            <tr><td>Physics</td></tr>
                            <tr><td>Biology</td></tr>
                            <tr><td>Pakistan Studies</td></tr>
                            <tr><td>Chemistry</td></tr>
                            <tr><td>Civics</td></tr>
                            <tr><td>Civics</td></tr>
                            <tr><td>Civics</td></tr>
                            <tr><td>English</td></tr> */}
                            </tbody>
                        </table>
                    </div>
                    <div className='table-div px-3' style={{minHeight: '330px'}}>
                        <table className='table1'>
                            <thead>
                            <tr>
                                <th style={{backgroundColor:'#0F9EFF'}}>10th Class</th>
                            </tr>
                            </thead>
                            <tbody style={{backgroundColor: 'lightcyan'}}>
                            {data && data.filter(item => item.class ==="Class 10").map((filteredClass, index) => (
                              <tr key={index}><td>{filteredClass.subject}</td></tr>
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
                    <div className='table-div px-3' style={{minHeight: '330px'}}>
                        <table className='table1'>
                            <thead>
                            <tr>
                                <th style={{backgroundColor:'#0F9EFF'}}>11th Class</th>
                            </tr>
                            </thead>
                            <tbody style={{backgroundColor: 'lightcyan'}}>
                            {data && data.filter(item => item.class ==="Class 11").map((filteredClass, index) => (
                              <tr key={index}><td>{filteredClass.subject}</td></tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='table-div px-2' style={{minHeight: '330px'}}>
                        <table className='table1' >
                            <thead>
                            <tr>
                                <th style={{backgroundColor:'#0F9EFF'}}>12th Class</th>
                            </tr>
                            </thead>
                            <tbody style={{backgroundColor: 'lightcyan'}}>
                            {data && data.filter(item => item.class ==="Class 12").map((filteredClass, index) => (
                              <tr key={index}><td>{filteredClass.subject}</td></tr>
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

export default TSeries