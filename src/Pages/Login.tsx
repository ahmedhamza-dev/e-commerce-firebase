import React, { useState } from "react";
import { Col, Container, FormGroup, Row } from "react-bootstrap";
import Helmet from "../components/Helmet/Helmet";
import { AuthForm, LoginSection } from "./Styles/Login.style";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from "react-toastify";
import { auth } from "../Firebase.config";
import { useDispatch } from "react-redux";
import { signIn } from "../redux/slices/userSlice";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signInFn = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      signInWithEmailAndPassword(auth, email, password).then(res => {
        toast.success("Welcome");
        navigate('/');
        console.log(res);
        // dispatch(signIn())
      });
    } catch (error: any) {
      toast.error(error.message)
    }
  };
  return (
    <Helmet title="Login">
      <LoginSection>
        <Container>
          <Row>
            <Col lg="6" className="m-auto text-center">
              <h3 className="fs-4 fw-bold">Login</h3>
              <AuthForm>
                <FormGroup className="form-group">
                  <input
                    required
                    className="form-control mt-3"
                    type="text"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="form-group">
                  <input
                    required
                    className="form-control mt-3"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>
                <motion.button type="submit" className="buy_btn login_btn" onClick={e => signInFn(e)}>
                  Login
                </motion.button>
                <p>
                  Don't have an account?{" "}
                  <Link to="/signup">Create an account.</Link>
                </p>
              </AuthForm>
            </Col>
          </Row>
        </Container>
      </LoginSection>
    </Helmet>
  );
};

export default Login;
