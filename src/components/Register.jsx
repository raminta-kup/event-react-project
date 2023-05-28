import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { RegisteredToast } from "./RegisteredToast";
import {
    RegisterIntroContainer,
    Logo,
    RegisterTitle,
    RegisterForm,
    RegisterInput,
    RegisterButton,
    RegisterPar,
    ErrorMessage,
    LoginLink
  } from "../styles/StyledRegister";

export const Register = () => {
    const navigate = useNavigate();
    const [showToast, setShowToast] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });
    const [error, setError] = useState("");

    const handleOnChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
            setError("Please fill in all the fields");
            return;
        }

        axios
            .post("http://localhost:5000/register", formData)
            .then((response) => {
                setShowToast(true);
                setTimeout(() => {
                    setShowToast(false);
                    navigate("/signIn");
                }, 3000);
            })
            .catch((err) => console.log(err));
    };

    const handleCloseToast = () => {
        setShowToast(false);
    };

    return (
        <>
            <RegisterIntroContainer>
                <Logo src="./glasslogo.png" />
                <RegisterTitle>Register Here</RegisterTitle>
            </RegisterIntroContainer>
            <RegisterForm onSubmit={handleOnSubmit}>
                <RegisterInput
                    placeholder="First Name"
                    type="text"
                    name="firstName"
                    onChange={handleOnChange}
                />
                <RegisterInput
                    placeholder="Last Name"
                    type="text"
                    name="lastName"
                    onChange={handleOnChange}
                />
                <RegisterInput
                    placeholder="Email Address"
                    type="email"
                    name="email"
                    onChange={handleOnChange}
                />
                <RegisterInput
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={handleOnChange}
                />
                <RegisterButton type="submit">Create Account</RegisterButton>
            </RegisterForm>
            <RegisterPar>
                Already have an account? <LoginLink to="/signin">Sign In</LoginLink>
            </RegisterPar>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <RegisteredToast show={!!showToast} onClose={handleCloseToast} successMessage="Successfully Registered!" />
        </>
    );
};