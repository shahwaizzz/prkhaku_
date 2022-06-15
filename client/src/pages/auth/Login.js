import React,{useState} from 'react'
import './form.css'
import { Container, Row, Col } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const Login = () => {
    const [error,setError] = useState(null);
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => {
        axios
        .post("http://localhost:5000/auth/student/login", {email: data.email, password: data.password})
            .then((response) => {
                // setData(response.data.notes);
                console.log("response : ", response);
                alert('Logged In Successfully.');
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
            <Col lg={{ span: 6, offset: 3 }} className=" mt-5 px-5 py-5   auth-form" style={{backgroundColor: "#e9ecef", boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', height: '363px', borderRadius: '8px'}}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <h3>Parhaaku Login</h3>
                    <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        {...register("email",{required: true})}
                    />
                    {errors.name && <span>Email is Required</span>}
                    </div>
                    <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        {...register("password",{required: true})}
                    />
                    {errors.name && <span>Email is Required</span>}
                    </div>
                    <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                    </div>
                    <p className="forgot-password text-right">
                    Don't have account <a href="/sign-in">sign Up?</a>
                    </p>
                </form>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Login