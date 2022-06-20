import React,{useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {FaDiceSix, FaMinusCircle, FaPlusCircle} from 'react-icons/fa';

import axios from 'axios';

const PPapers = (props) => {
    const {setNav, setBoard, setPaperClass} = props
    const [data, setData] = useState(null);
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
    const [tog21, setTog21] = useState(null)
    const [tog22, setTog22] = useState(null)
    const [tog23, setTog23] = useState(null)
    const [tog24, setTog24] = useState(null)
    const [tog25, setTog25] = useState(null)
    const [tog26, setTog26] = useState(null)
    const [tog27, setTog27] = useState(null)
    const [tog28, setTog28] = useState(null)
    const [tog29, setTog29] = useState(null)
    const [tog30, setTog30] = useState(null)
    const [tog31, setTog31] = useState(null)
    const [tog32, setTog32] = useState(null)
    const [tog33, setTog33] = useState(null)
    const [tog34, setTog34] = useState(null)
    const [tog35, setTog35] = useState(null)
    const [tog36, setTog36] = useState(null)
    const [tog37, setTog37] = useState(null)
    const [tog38, setTog38] = useState(null)
    const [tog39, setTog39] = useState(null)
    const [tog40, setTog40] = useState(null)

  useEffect(() => {
    axios.get("http://localhost:5000/paper/").then((response) => {
      setData(response.data.papers);
      console.log(data);
    }).catch((error) => {
      console.log(error);
    })     
  },[])
  const getUniqueValues = (arr) => {
    const uni = [...new Set(arr && arr.map((item) => {return item.class}))];
    return uni;
  }

  const unique = (value, index, self) => {
    console.log('self : ',self);
    console.log("index : ", index);
    console.log('value : ', value)
    console.log('index of : ', self.indexOf(value))
    console.log('index of : ', self.indexOf(value.age))
    const ones = [... new Set (self.map(item => item.age))]
    console.log("ones : ", ones)
    return ones 
//   return ones.indexOf(value) === index
}

  const ages = [
        {
            name: 'safi',
            age: 26
        },
        {
            name: 'safi',
            age: 26
        },
        {
            name: 'safi',
            age: 26 
        },
        {
            name: 'safi',
            age: 27
        },
        {
            name: 'safi',
            age: 27
        },
    ]
    const uniqueAges = ages.filter(unique)
    console.log(uniqueAges)

  return (
    <Container fluid className='px-5'>
        <Row>
            <Col md={10}>
                <div className='ts-thead'>
                  <div className='ts-icon-div'>
                    <FaDiceSix style={{padding: '20px 15px',borderRadius: '50%', marginTop:'-8px', border: '1px solid black', backgroundColor: 'white',marginLeft: '-11px'}} size="2.6cm" />
                  </div>
                    <div className='ts-thead-txt bg-warning'> Board Wise Past Paper</div>
                </div> 
                <div className='py-4'></div>
                <div className='table-div px-2'>
                        <table className='table1'>
                            <thead>
                            <tr>
                                <th style={{backgroundColor:'#0F9EFF'}}>Punjab All Boards</th>
                            </tr>
                            </thead>
                            <tbody style={{backgroundColor: 'lightcyan'}}>
                            {/* {data && data.filter(item => item.board ==="Class 9").map(filteredClass => (
                              <tr><td>{filteredClass.subject}</td></tr>
                            ))} */}
                            <tr>
                                <td>
                                    <h6 className='fnt-w900'>BISE Lahore <b>{tog1?<FaMinusCircle onClick={() => setTog1(false)} />:<FaPlusCircle onClick={() => setTog1(true)} />} </b></h6>
                                    {tog1 && (
                                            <>
                                                <ul>  
                                                    {data && data.filter(item => item.board ==="BISE Lahore" && item.type === 'Past Paper').map((filteredClass, index) => (
                                                        <li className="ss-li" key={index} onClick={() => {
                                                            setBoard(filteredClass.board)
                                                            setPaperClass(filteredClass.class)
                                                            setNav(4)
                                                        }}>{filteredClass.class}</li>
                                                        ))}
                                                </ul>
                                            </>
                                        )}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className='fnt-w900'>BISE Multan <b>{tog2?<FaMinusCircle onClick={() => setTog2(false)} />:<FaPlusCircle onClick={() => setTog2(true)} />} </b></h6>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className='fnt-w900'>BISE Sahiwal <b>{tog3?<FaMinusCircle onClick={() => setTog3(false)} />:<FaPlusCircle onClick={() => setTog3(true)} />} </b></h6>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className='fnt-w900'>BISE Rawalpindi <b>{tog4?<FaMinusCircle onClick={() => setTog4(false)} />:<FaPlusCircle onClick={() => setTog4(true)} />} </b></h6>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className='fnt-w900'>BISE DG Khan <b>{tog5?<FaMinusCircle onClick={() => setTog5(false)} />:<FaPlusCircle onClick={() => setTog5(true)} />} </b></h6>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className='fnt-w900'>BISE Gujranwala <b>{tog6?<FaMinusCircle onClick={() => setTog6(false)} />:<FaPlusCircle onClick={() => setTog6(true)} />} </b></h6>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className='fnt-w900'>BISE Faisalabad <b>{tog7?<FaMinusCircle onClick={() => setTog7(false)} />:<FaPlusCircle onClick={() => setTog7(true)} />} </b></h6>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className='fnt-w900'>BISE Sargodha <b>{tog8?<FaMinusCircle onClick={() => setTog8(false)} />:<FaPlusCircle onClick={() => setTog8(true)} />} </b></h6>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className='fnt-w900'>BISE Bahawalpur <b>{tog9?<FaMinusCircle onClick={() => setTog9(false)} />:<FaPlusCircle onClick={() => setTog9(true)} />} </b></h6>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className='fnt-w900'>BISE Federal <b>{tog10?<FaMinusCircle onClick={() => setTog10(false)} />:<FaPlusCircle onClick={() => setTog10(true)} />} </b></h6>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='table-div px-3'>
                        <table className='table1'>
                            <thead>
                            <tr>
                                <th style={{backgroundColor:'#0F9EFF'}}>KPK All Boards</th>
                            </tr>
                            </thead>
                            <tbody style={{backgroundColor: 'lightcyan'}}>
                            <tr>
                                <td>
                                    <h6 className='fnt-w900'>BISE Peshawar <b>{tog11?<FaMinusCircle onClick={() => setTog11(false)} />:<FaPlusCircle onClick={() => setTog11(true)} />} </b></h6>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className='fnt-w900'>BISE Kohat <b>{tog12?<FaMinusCircle onClick={() => setTog12(false)} />:<FaPlusCircle onClick={() => setTog12(true)} />} </b></h6>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className='fnt-w900'>BISE Malakand <b>{tog13?<FaMinusCircle onClick={() => setTog13(false)} />:<FaPlusCircle onClick={() => setTog13(true)} />} </b></h6>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className='fnt-w900'>BISE Bannu <b>{tog14?<FaMinusCircle onClick={() => setTog14(false)} />:<FaPlusCircle onClick={() => setTog14(true)} />} </b></h6>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className='fnt-w900'>BISE DG Khan<b>{tog15?<FaMinusCircle onClick={() => setTog15(false)} />:<FaPlusCircle onClick={() => setTog15(true)} />} </b></h6>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className='fnt-w900'>BISE Sawat <b>{tog16?<FaMinusCircle onClick={() => setTog16(false)} />:<FaPlusCircle onClick={() => setTog16(true)} />} </b></h6>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className='fnt-w900'>BISE Mardan <b>{tog17?<FaMinusCircle onClick={() => setTog17(false)} />:<FaPlusCircle onClick={() => setTog17(true)} />} </b></h6>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className='fnt-w900'>BISE Abbottabad <b>{tog18?<FaMinusCircle onClick={() => setTog18(false)} />:<FaPlusCircle onClick={() => setTog18(true)} />} </b></h6>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className='fnt-w900'>BISE DI Khan <b>{tog19?<FaMinusCircle onClick={() => setTog19(false)} />:<FaPlusCircle onClick={() => setTog19(true)} />} </b></h6>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className='fnt-w900'>BISE Federal <b>{tog20?<FaMinusCircle onClick={() => setTog20(false)} />:<FaPlusCircle onClick={() => setTog20(true)} />} </b></h6>
                                </td>
                            </tr>                            
                            </tbody>
                        </table>
                    </div>
                    <div className='table-div px-3'>
                        <table className='table1'>
                            <thead>
                            <tr>
                                <th style={{backgroundColor:'#0F9EFF'}}>Sindh All Boards</th>
                            </tr>
                            </thead>
                            <tbody style={{backgroundColor: 'lightcyan'}}>
                            <tr>
                                <td>
                                    <h6 className='fnt-w900'>BISE Karachi <b>{tog25?<FaMinusCircle onClick={() => setTog25(false)} />:<FaPlusCircle onClick={() => setTog25(true)} />} </b></h6>
                                </td>
                            </tr>                            
                            <tr>
                                <td>
                                    <h6 className='fnt-w900'>BISE Hyderabad <b>{tog21?<FaMinusCircle onClick={() => setTog21(false)} />:<FaPlusCircle onClick={() => setTog21(true)} />} </b></h6>
                                </td>
                            </tr>                            
                            <tr>
                                <td>
                                    <h6 className='fnt-w900'>BISE Mirpurkhas<b>{tog22?<FaMinusCircle onClick={() => setTog22(false)} />:<FaPlusCircle onClick={() => setTog22(true)} />} </b></h6>
                                </td>
                            </tr>                            
                            <tr>
                                <td>
                                    <h6 className='fnt-w900'>BISE Shukkur<b>{tog23?<FaMinusCircle onClick={() => setTog23(false)} />:<FaPlusCircle onClick={() => setTog23(true)} />} </b></h6>
                                </td>
                            </tr>                            
                            <tr>
                                <td>
                                    <h6 className='fnt-w900'>BISE Larkana<b>{tog24?<FaMinusCircle onClick={() => setTog24(false)} />:<FaPlusCircle onClick={() => setTog24(true)} />} </b></h6>
                                </td>
                            </tr>                            
                            </tbody>
                        </table>
                    </div>
                    <div className='table-div px-2'>
                        <table className='table1'>
                            <thead>
                            <tr>
                                <th style={{backgroundColor:'#0F9EFF'}}>Blochistan All Boards</th>
                            </tr>
                            </thead>
                            <tbody style={{backgroundColor: 'lightcyan'}}>
                            <tr><td><h6 className='fnt-w900'>BISE Quetta<b>{tog26?<FaMinusCircle onClick={() => setTog26(false)} />:<FaPlusCircle onClick={() => setTog26(true)} />} </b></h6></td></tr>                            
                            </tbody>
                        </table>
                        <table className='table1 mt-5'>
                            <thead>
                            <tr>
                                <th style={{backgroundColor:'#0F9EFF'}}>Blochistan All Boards</th>
                            </tr>
                            </thead>
                            <tbody style={{backgroundColor: 'lightcyan'}}>
                            <tr><td><h6 className='fnt-w900'>BISE AJK<b>{tog27?<FaMinusCircle onClick={() => setTog27(false)} />:<FaPlusCircle onClick={() => setTog27(true)} />} </b></h6></td></tr>                            
                            </tbody>
                        </table>
                    </div>

                    <div className='ts-thead'>
                        <div className='ts-thead-txt bg-warning'>University Wise Past Paper </div>
                        <div className='ts-icon-div2'>
                            <FaDiceSix style={{padding: '20px 15px',borderRadius: '50%', marginTop:'-8px', border: '1px solid black', backgroundColor: 'white',marginLeft: '-11px'}} size="2.6cm" />
                        </div>
                    </div> 
                    <div className='two-table-cover'>
                        <div className='table-div3'>
                            <table className='table1'>
                                <thead>
                                <tr>
                                    <th style={{backgroundColor:'#0F9EFF'}}>12th Class</th>
                                </tr>
                                </thead>
                                <tbody style={{backgroundColor: 'lightcyan'}}>
                                <tr><td>English</td></tr>
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
                                <tr><td>Civics</td></tr>
                                </tbody>
                            </table>
                        </div>
                        
                    </div>
                    


                    <div className='ts-thead'>
                        <div className='ts-thead-txt bg-warning'>Category Wise  Past Paper</div>
                        <div className='ts-icon-div2'>
                            <FaDiceSix style={{padding: '20px 15px',borderRadius: '50%', marginTop:'-8px', border: '1px solid black', backgroundColor: 'white',marginLeft: '-11px'}} size="2.6cm" />
                        </div>
                    </div> 
                    <div className='two-table-cover'>
                        <div className='table-div2'>
                            <table className='table1 table2'>
                                <thead>
                                <tr>
                                    <th style={{backgroundColor:'#0F9EFF'}}>Entry Test</th>
                                </tr>
                                </thead>
                                <tbody style={{backgroundColor: 'lightcyan'}}>
                                <tr><td>English</td></tr>
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
                                <tr><td>Civics</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='table-div2'>
                            <table className='table1 table2 tbl2-lft'>
                                <thead>
                                <tr>
                                    <th style={{backgroundColor:'#0F9EFF'}}>Competitive Exams</th>
                                </tr>
                                </thead>
                                <tbody style={{backgroundColor: 'lightcyan'}}>
                                <tr><td>English</td></tr>
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
                                <tr><td>Civics</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
            </Col>
            <Col md={2} className='pt-5'>
              <div className='vertical-advert mt-5'> 
                <h1>Advert</h1>
              </div>
              <div className='vertical-advert mt-5'> 
                <h1>Advert</h1>
              </div>
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

export default PPapers