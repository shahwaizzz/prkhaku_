import React,{useState} from 'react'
import './form.css'
import { useForm } from 'react-hook-form'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'

const Signup = () => {
    const [role, setRole] = useState(null)

    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (user) => {
        console.log("user : ",user)
        const data = {
            name: user.name,
            email: user.email,
            role: user.role,
            level: user.level,
            subject: user.subject,
            class: user.class,
            institute: user.institute,
            password: user.password
        }
        console.log("Data object : ",data)
        axios
        .post("http://localhost:5000/auth/student/register", data)
            .then((response) => {
                // setData(response.data.notes);
                console.log("response : ", response);
                alert('Signed Up Successfully.');
            })
            .catch((error) => {
                alert("error")
                console.log(error);
            });
    }
    return (
    <>
    <Container>
        <Row>
            <Col lg={{ span: 6, offset: 3 }} className="mt-5 px-5 py-4   auth-form" style={{backgroundColor: "#e9ecef", boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', height: '770px', borderRadius: '8px'}}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <h3>Parhaaku Sign Up</h3>
                    <div className="mb-3">
                    <label>Name*</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Name"
                        {...register("name", {required: true})}
                    />
                    {errors.name && <span className='text-danger'>Name is Required</span> }
                    </div>
                    <div className="mb-3">
                    <label>Email*</label>
                        <input type="email" className="form-control" placeholder="Email" {...register("email", {required: true})} />
                        {errors.email && <span className='text-danger'>Email is Required</span> }
                    </div>
                    <div className="mb-3">
                    <label>Role*</label>
                    <select onChange={(e) => setRole(e.target.value)} className="form-control" {...register("role", {required: true})}>
                        <option value="">Select Role</option>
                        <option value="teacher">Teacher</option>
                        <option value="student">Student</option>
                    </select>
                    {errors.role && <span className='text-danger'>Role is Required</span> }
                    </div>
                    <div className="mb-3">
                        <label>Subject (For Teachers only)*</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Subject"
                            {...register("subject")} 
                        />
                        {errors.subject && <span className='text-danger'>Subject is Required</span> }
                    </div>
                    <div className="mb-3">
                        <label>Level (For Teachers only)*</label>
                        <select className="form-control" {...register("level")}>
                            <option value="">Select Teaching Level</option>
                            <option value="matric">Matric</option>
                            <option value="inter">Inter</option>
                            <option value="university">University</option>
                        </select>
                        {errors.level && <span className='text-danger'>Level is Required</span> }
                    </div>
                    <div className="mb-3">
                    <label>Class (For Students only)*</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Class"
                        {...register("class")}
                    />
                    </div>
                    <div className="mb-3">
                    <label>Institute*</label>
                    <input
                        type="type"
                        className="form-control"
                        placeholder="Enter Institute"
                        {...register("institute",{required: true})}
                    />
                    {errors.institute && <span className='text-danger'>Institute is Required</span> }
                    </div>
                    <div className="mb-3">
                    <label>Password*</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        {...register("password",{required: true})}
                    />
                    {errors.password && <span className='text-danger'>Password is Required</span> }
                    </div>
                    <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Sign Up
                    </button>
                    </div>
                    <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                    </p>
                </form>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Signup