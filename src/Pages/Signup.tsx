import React, { useState } from "react";
import { Col, Container, FormGroup, Row } from "react-bootstrap";
import Helmet from "../components/Helmet/Helmet";
import { AuthForm, LoginSection } from "./Styles/Login.style";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";
import { auth, DB, Storage } from "../Firebase.config";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { signIn } from "../redux/slices/userSlice";

const Signup = () => {
  let initial: any;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(initial);

  // const [loading, setLoading] = useState(false)

  const signUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // setLoading(true);
    try {
      const userObj = createUserWithEmailAndPassword(auth, email, password);
      const user = (await userObj).user;

      const storageRef = ref(Storage, `images/${Date.now() + username}`);
      uploadBytesResumable(storageRef, file).then(
        () => {
          getDownloadURL(storageRef).then(async (downloadUrl) => {
            await updateProfile(user, {
              displayName: username,
              photoURL: downloadUrl,
            });
            // store user data in firestore database
            const userObject = {
              uid: user.uid,
              displayName: username,
              email,
              photoUrl: downloadUrl,
            };
            await setDoc(doc(DB, "users", user.uid), userObject);
            toast.success("Welcome in Multimart");
            dispatch(signIn(userObject));
            navigate("/");
          });
        },
        (error) => {
          toast.error(error.message);
        }
      );
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <Helmet title="Signup">
      <LoginSection>
        <Container>
          <Row>
            <Col lg="6" className="m-auto text-center">
              <h3 className="fs-4 fw-bold">Signup</h3>
              <AuthForm onSubmit={(e) => signUp(e)}>
                <FormGroup className="form-group">
                  <input
                    required
                    className="form-control mt-3"
                    type="text"
                    placeholder="Uername"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </FormGroup>
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
                <FormGroup className="form-group">
                  <input
                    required
                    className="form-control mt-3"
                    type="file"
                    onChange={(e) =>
                      setFile(e.target.files ? e.target.files[0] : null)
                    }
                  />
                </FormGroup>
                <motion.button type="submit" className="buy_btn login_btn">
                  Create an Account
                </motion.button>
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </AuthForm>
            </Col>
          </Row>
        </Container>
      </LoginSection>
    </Helmet>
  );
};

export default Signup;
