import React,{useState} from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import Comments from '../../components/Comments';
import pdfFile from './test.pdf'

const PdfView = (props) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const {file, notesClass, subject, chap, title, paperClass, paperType, ssClass} = props;
  alert(file)
  alert(paperType) 
  return (
    <>
      <div style={{width: '74%', marginLeft: '13%'}}>
          {chap && (
            <h2 style={{fontWeight: '700', textTransform: 'capitalize'}} className='py-4 my-3'>Notes &#62; {notesClass} &#62; {subject} &#62; Chapter {chap} &#62; {title} </h2>
          )}
          {paperClass && (
            <h2 style={{fontWeight: '700', textTransform: 'capitalize'}} className='py-4 my-3'>Papers &#62; {paperType} &#62; {paperClass} &#62; {subject} </h2>
          )}
          {ssClass && (
            <h2 style={{fontWeight: '700', textTransform: 'capitalize'}} className='py-4 my-3'>Study Schemes &#62; {ssClass} &#62; {subject}</h2>
          )}  
          {/* <a href={pdfFile}>Link file</a> */}
          <h6 className='mt-0 mb-4 pt-0'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsum molestiae quae odit qui, illum aspernatur! Dolorem assumenda corrupti similique amet neque earum quia sapiente in voluptates alias qui voluptatibus, velit optio pariatur sequi ipsa minima architecto commodi nihil a delectus provident dolores atque soluta. Dolores, perferendis ea. Saepe, voluptatibus.
          </h6>
          <center>
              <iframe src={`http://localhost:5000/${file}`} style={{border: '3px solid black'}} frameborder="10px solid black" width="100%" height="800px"></iframe>
          </center>
      </div>
      <Comments />
    </>
  )
}

export default PdfView