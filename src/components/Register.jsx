import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { RegisteredToast } from "./RegisteredToast";

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
            <RegisteredToast show={!!showToast} onClose={handleCloseToast} />
        </>
    );
};

const RegisterIntroContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
`

const Logo = styled.img`
    height: 88px;
`

const RegisterTitle = styled.h1`
    margin: 0;
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 0.8px;

`
const RegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 60%;
    gap: 16px;
`
const RegisterInput = styled.input`
    border-radius: 40px;
    border: none;
    background-color: #F3F3F3;
    height: 50px;
    font-size: 14px;
    padding-left: 16px;
    letter-spacing: 0.8px;
`
const RegisterButton = styled.button`
    background-color: #D08355;
    border: none;
    border-radius: 40px;
    height: 50px;
    color: #FFFFFF;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0.8px;
    cursor: pointer;
`
const RegisterPar = styled.p`
    color: #979797;
    font-weight: 600;
    margin: 0;
    letter-spacing: 0.8px;
    font-size: 16px;
`

const LoginLink = styled(Link)`
    letter-spacing: 0.8px;
    margin-left: 4px;
    text-decoration: none;
    color: #D08355;
`
const ErrorMessage = styled.span`
    color: #df0e0e;
    text-align: center;
    font-weight: 600;
`