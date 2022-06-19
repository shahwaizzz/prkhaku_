import React,{useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import light from '../../img/light.svg';
import TSeries from '../papers/TSeries';
import {FaDiceSix, FaMinusCircle, FaPlusCircle} from 'react-icons/fa';
import Comments from '../../components/Comments';
import axios from 'axios';


const SScheme = (props) => {
    const [data, setData] = useState(null);
    const {setSubject, setNav, setFile, setSSClass} = props;
    const [tog1, setTog1] = useState(null)
    const [tog2, setTog2] = useState(null)
    const [tog3, setTog3] = useState(null)
    const [tog4, setTog4] = useState(null)
    const [tog5, setTog5] = useState(null)
    const [tog6, setTog6] = useState(null)
    const [tog7, setTog7] = useState(null)
    const [tog8, setTog8] = useState(null)
    const [tog9, setTog9] = useState(null)
    const [tog10, setTog10] = useState(null)
    const [tog11, setTog11] = useState(null)
    const [tog12, setTog12] = useState(null)
    const [tog13, setTog13] = useState(null)
    const [tog14, setTog14] = useState(null)
    const [tog15, setTog15] = useState(null)
    const [tog16, setTog16] = useState(null)
    const [tog17, setTog17] = useState(null)
    const [tog18, setTog18] = useState(null)
    const [tog19, setTog19] = useState(null)
    const [tog20, setTog20] = useState(null)
  useEffect(() => {
    axios.get("http://localhost:5000/studyscheme/").then((response) => {
    setData(response.data.studySchemes);
      console.log(" console data data data : ", data);
      console.log("Response data", response.data);
    }).catch((error) => {
      console.log(error);
    })     
  },[])

  return (
      <>
        <div className='ss-slid'>
            <h1 style={{display: 'inline-block'}}>Study Scheme </h1>
            <img src={light} alt="light" width='400px' />
        </div>
        <Container fluid className='px-5'>
            <Row>
                <Col md={10}>
                    <div className='ts-thead'>
                        <div className='ts-icon-div'>
                            <FaDiceSix style={{padding: '20px 15px',borderRadius: '50%', marginTop:'-8px', border: '1px solid black', backgroundColor: 'white',marginLeft: '-11px'}} size="2.6cm" />
                        </div>
                        <div className='ts-thead-txt bg-warning'>Board Wise Past Paper</div>
                    </div> 
                    <div className='py-3'></div>
                    <div className='table-div px-2'>
                        <table className='table1'>
                            <thead>
                            <tr> 
                                <th style={{backgroundColor:'#0F9EFF'}}>9th Class</th>
                            </tr>
                            </thead>
                            <tbody style={{backgroundColor: 'lightcyan'}}>
                            {data && data.filter(item => item.class ==="Class 9" && item.category === 'Class Wise').map((filteredClass, index) => (
                              <tr key={index}><td className="tab-ss-td" onClick={() => {
                                setSubject(filteredClass.subject)
                                setSSClass(filteredClass.class)
                                setFile(filteredClass.studySchemeDoc)
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
                            {data && data.filter(item => item.class ==="Class 10" && item.category === 'Class Wise').map((filteredClass, index) => (
                              <tr key={index}><td className="tab-ss-td" onClick={() => {
                                setSubject(filteredClass.subject)
                                setSSClass(filteredClass.class)
                                setFile(filteredClass.studySchemeDoc)
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
                                <th style={{backgroundColor:'#0F9EFF'}}>11th Class</th>
                            </tr>
                            </thead>
                            <tbody style={{backgroundColor: 'lightcyan'}}>
                            {data && data.filter(item => item.class ==="Class 11" && item.category === 'Class Wise').map((filteredClass, index) => (
                              <tr key={index}><td className="tab-ss-td" onClick={() => {
                                setSubject(filteredClass.subject)
                                setSSClass(filteredClass.class)
                                setFile(filteredClass.studySchemeDoc)
                                setNav(14)
                              }}>{filteredClass.subject}</td></tr>
                            ))}
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
                            {data && data.filter(item => item.class ==="Class 12" && item.category === 'Class Wise').map((filteredClass, index) => (
                              <tr key={index}><td className="tab-ss-td" onClick={() => {
                                setSubject(filteredClass.subject)
                                setSSClass(filteredClass.class)
                                setFile(filteredClass.studySchemeDoc)
                                setNav(14)
                              }}>{filteredClass.subject}</td></tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='ts-thead'>
                        <div className='ts-thead-txt bg-warning'>Category Wise Paring Scheme</div>
                        <div className='ts-icon-div2'>
                            <FaDiceSix style={{padding: '20px 15px',borderRadius: '50%', marginTop:'-8px', border: '1px solid black', backgroundColor: 'white',marginLeft: '-11px'}} size="2.6cm" />
                        </div>
                    </div> 
                    <div className='two-table-cover'>
                        <div className='table-div2'>
                            <table className='table1 table2'>
                                <thead>
                                <tr>
                                    <th style={{backgroundColor:'#0F9EFF'}}>Entery Test</th>
                                </tr>
                                </thead>
                                <tbody style={{backgroundColor: 'lightcyan'}}>
                                <tr>
                                    <td>
                                        <h6 className='fnt-w900'>MDCAT <b>{tog1?<FaMinusCircle onClick={() => setTog1(false)} />:<FaPlusCircle onClick={() => setTog1(true)} />} </b></h6>
                                        {tog1 && (
                                            <>
                                                <ul>  
                                                    {data && data.filter(item => item.class ==="MDCAT" && item.category === 'Entry Test').map((filteredClass, index) => (
                                                        <li className="ss-li" key={index} onClick={() => {
                                                            setSubject(filteredClass.subject)
                                                            setSSClass(filteredClass.class)
                                                            setFile(filteredClass.studySchemeDoc)
                                                            setNav(14)
                                                        }}>{filteredClass.subject}</li>
                                                        ))}
                                                </ul>
                                            </>
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h6 className='fnt-w900'>ECAT <b>{tog2?<FaMinusCircle onClick={() => setTog2(false)} /> : <FaPlusCircle onClick={() => setTog2(true)} />} </b></h6>
                                        {tog2 && (
                                            <>
                                                <ul>  
                                                    {data && data.filter(item => item.class ==="ECAT" && item.category === 'Entry Test').map((filteredClass, index) => (
                                                        <li className="ss-li" key={index} onClick={() => {
                                                            setSubject(filteredClass.subject)
                                                            setSSClass(filteredClass.class)
                                                            setFile(filteredClass.studySchemeDoc)
                                                            setNav(14)
                                                        }}>{filteredClass.subject}</li>
                                                        ))}
                                                </ul>
                                            </>
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h6 className='fnt-w900'>NET(NUST) <b>{tog3?<FaMinusCircle onClick={() => setTog3(false)} /> : <FaPlusCircle onClick={() => setTog3(true)} />} </b></h6>
                                        {tog3 && (
                                            <>
                                                <ul>  
                                                    {data && data.filter(item => item.class ==="NET" && item.category === 'Entry Test').map((filteredClass, index) => (
                                                        <li className="ss-li" key={index} onClick={() => {
                                                            setSubject(filteredClass.subject)
                                                            setSSClass(filteredClass.class)
                                                            setFile(filteredClass.studySchemeDoc)
                                                            setNav(14)
                                                        }}>{filteredClass.subject}</li>
                                                        ))}
                                                </ul>
                                            </>
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h6 className='fnt-w900'>LAT <b>{ tog4?<FaMinusCircle onClick={() => setTog4(false)} /> : <FaPlusCircle onClick={() => setTog4(true)} />} </b></h6>
                                        {tog4 && (
                                            <>
                                                <ul>  
                                                    {data && data.filter(item => item.class ==="LAT" && item.category === 'Entry Test').map((filteredClass, index) => (
                                                        <li className="ss-li" key={index} onClick={() => {
                                                            setSubject(filteredClass.subject)
                                                            setSSClass(filteredClass.class)
                                                            setFile(filteredClass.studySchemeDoc)
                                                            setNav(14)
                                                        }}>{filteredClass.subject}</li>
                                                        ))}
                                                </ul>
                                            </>
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h6 className='fnt-w900'>HAT <b>{tog5?<FaMinusCircle onClick={() => setTog5(false)} /> : <FaPlusCircle onClick={() => setTog5(true)} />} </b></h6>
                                        {tog5 && (
                                            <>
                                                <ul>  
                                                    {data && data.filter(item => item.class ==="HAT" && item.category === 'Entry Test').map((filteredClass, index) => (
                                                        <li className="ss-li" key={index} onClick={() => {
                                                            setSubject(filteredClass.subject)
                                                            setSSClass(filteredClass.class)
                                                            setFile(filteredClass.studySchemeDoc)
                                                            setNav(14)
                                                        }}>{filteredClass.subject}</li>
                                                        ))}
                                                </ul>
                                            </>
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h6 className='fnt-w900'>GAT <b>{tog6?<FaMinusCircle onClick={() => setTog6(false)} /> : <FaPlusCircle onClick={() => setTog6(true)} />} </b></h6>
                                        {tog6 && (
                                            <>
                                                <ul>  
                                                    {data && data.filter(item => item.class ==="GAT" && item.category === 'Entry Test').map((filteredClass, index) => (
                                                        <li className="ss-li" key={index} onClick={() => {
                                                            setSubject(filteredClass.subject)
                                                            setSSClass(filteredClass.class)
                                                            setFile(filteredClass.studySchemeDoc)
                                                            setNav(14)
                                                        }}>{filteredClass.subject}</li>
                                                        ))}
                                                </ul>
                                            </>
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h6 className='fnt-w900'>NAT <b>{tog7?<FaMinusCircle onClick={() => setTog7(false)} /> : <FaPlusCircle onClick={() => setTog7(true)} />} </b></h6>
                                        {tog7 && (
                                            <>
                                                <ul>  
                                                    {data && data.filter(item => item.class ==="NAT" && item.category === 'Entry Test').map((filteredClass, index) => (
                                                        <li className="ss-li" key={index} onClick={() => {
                                                            setSubject(filteredClass.subject)
                                                            setSSClass(filteredClass.class)
                                                            setFile(filteredClass.studySchemeDoc)
                                                            setNav(14)
                                                        }}>{filteredClass.subject}</li>
                                                        ))}
                                                </ul>
                                            </>
                                        )}
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='table-div2'>
                            <table className='table1 table2 tbl2-lft'>
                                <thead>
                                <tr>
                                    <th style={{backgroundColor:'#0F9EFF'}}>Competative Exams</th>
                                </tr>
                                </thead>
                                <tbody style={{backgroundColor: 'lightcyan'}}>
                                <tr>
                                    <td>
                                        <h6 className='fnt-w900'>CSS <b>{tog8 ? <FaMinusCircle onClick={() => setTog8(false)} /> : <FaPlusCircle onClick={() => setTog8(true)} />} </b></h6>
                                        {tog8 && (
                                            <>
                                                <ul>  
                                                    {data && data.filter(item => item.class ==="CSS" && item.category === 'Competitive Exams').map((filteredClass, index) => (
                                                        <li className="ss-li" key={index} onClick={() => {
                                                            setSubject(filteredClass.subject)
                                                            setSSClass(filteredClass.class)
                                                            setFile(filteredClass.studySchemeDoc)
                                                            setNav(14)
                                                        }}>{filteredClass.subject}</li>
                                                        ))}
                                                </ul>
                                            </>
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h6 className='fnt-w900'>FPSC <b>{tog9 ? <FaMinusCircle onClick={() => setTog9(false)} /> : <FaPlusCircle onClick={() => setTog9(true)} />} </b></h6>
                                        {tog9 && (
                                            <>
                                                <ul>  
                                                    {data && data.filter(item => item.class ==="FPSC" && item.category === 'Competitive Exams').map((filteredClass, index) => (
                                                        <li className="ss-li" key={index} onClick={() => {
                                                            setSubject(filteredClass.subject)
                                                            setSSClass(filteredClass.class)
                                                            setFile(filteredClass.studySchemeDoc)
                                                            setNav(14)
                                                        }}>{filteredClass.subject}</li>
                                                        ))}
                                                </ul>
                                            </>
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h6 className='fnt-w900'>PPSC <b>{tog10 ? <FaMinusCircle onClick={() => setTog10(false)} /> : <FaPlusCircle onClick={() => setTog10(true)} />} </b></h6>
                                        {tog10 && (
                                            <>
                                                <ul>  
                                                    {data && data.filter(item => item.class ==="PPSC" && item.category === 'Competitive Exams').map((filteredClass, index) => (
                                                        <li className="ss-li" key={index} onClick={() => {
                                                            setSubject(filteredClass.subject)
                                                            setSSClass(filteredClass.class)
                                                            setFile(filteredClass.studySchemeDoc)
                                                            setNav(14)
                                                        }}>{filteredClass.subject}</li>
                                                        ))}
                                                </ul>
                                            </>
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h6 className='fnt-w900'>BPSC <b>{tog11 ? <FaMinusCircle onClick={() => setTog11(false)} /> : <FaPlusCircle onClick={() => setTog11(true)} />} </b></h6>
                                        {tog11 && (
                                            <>
                                                <ul>  
                                                    {data && data.filter(item => item.class ==="BPSC" && item.category === 'Competitive Exams').map((filteredClass, index) => (
                                                        <li className="ss-li" key={index} onClick={() => {
                                                            setSubject(filteredClass.subject)
                                                            setSSClass(filteredClass.class)
                                                            setFile(filteredClass.studySchemeDoc)
                                                            setNav(14)
                                                        }}>{filteredClass.subject}</li>
                                                        ))}
                                                </ul>
                                            </>
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h6 className='fnt-w900'>SPPSC <b>{tog12 ? <FaMinusCircle onClick={() => setTog12(false)} /> : <FaPlusCircle onClick={() => setTog12(true)} />} </b></h6>
                                        {tog12 && (
                                            <>
                                                <ul>  
                                                    {data && data.filter(item => item.class ==="SPPSC" && item.category === 'Competitive Exams').map((filteredClass, index) => (
                                                        <li className="ss-li" key={index} onClick={() => {
                                                            setSubject(filteredClass.subject)
                                                            setSSClass(filteredClass.class)
                                                            setFile(filteredClass.studySchemeDoc)
                                                            setNav(14)
                                                        }}>{filteredClass.subject}</li>
                                                        ))}
                                                </ul>
                                            </>
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h6 className='fnt-w900'>SPSC <b>{tog13 ? <FaMinusCircle onClick={() => setTog13(false)} /> : <FaPlusCircle onClick={() => setTog13(true)} />} </b></h6>
                                        {tog13 && (
                                            <>
                                                <ul>  
                                                    {data && data.filter(item => item.class ==="SPSC" && item.category === 'Competitive Exams').map((filteredClass, index) => (
                                                        <li className="ss-li" key={index} onClick={() => {
                                                            setSubject(filteredClass.subject)
                                                            setSSClass(filteredClass.class)
                                                            setFile(filteredClass.studySchemeDoc)
                                                            setNav(14)
                                                        }}>{filteredClass.subject}</li>
                                                        ))}
                                                </ul>
                                            </>
                                        )}
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Col>
                <Col md={2}>
                    <div className='vertical-advert'>
                        <h1>Advert</h1>
                    </div>
                    <div className='vertical-advert'>
                        <h1>Advert</h1>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className='advert11'>
                        <h1>Advert</h1>
                    </div>
                </Col>
            </Row>
        </Container>
        <Comments />
    </>
  )
}

export default SScheme