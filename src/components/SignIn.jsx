import { useContext, useState } from "react";
import styled from "styled-components"
import { AuthenticationContext } from "./AuthenticationContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";


export const SignIn = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const { setIsSignedIn } = useContext(AuthenticationContext);

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleOnChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:5000/signIn", formData)
            .then((response) => {
                if (response.data.token) {
                    localStorage.setItem("token", response.data.token);
                    setIsSignedIn(true);
                    navigate("/profile");
                } else {
                    setError(response.data.message);
                }
            })
            .catch((err) => console.log(err));

    }

    return (
        <>
            <SignInIntroductionContainer>
                <Logo src="./glasslogo.png"></Logo>
                <SignInHeading>Welcome back</SignInHeading>
                <SignInPar>Enter your credentials to login</SignInPar>
            </SignInIntroductionContainer>
            <SignInForm onSubmit={handleOnSubmit}>
                <SignInInput
                    placeholder="Email"
                    type="email"
                    name="email"
                    onChange={handleOnChange}
                />
                <SignInInput
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={handleOnChange}
                />
                <SignInBtn
                    type="submit"
                >Sign in
                </SignInBtn>
                {error && <SignInError>* {error}</SignInError>}
            </SignInForm>
            <SignInPar>Don't have an account?
                <RegisterLink to="/register">Register</RegisterLink>
            </SignInPar>
        </>
    )
}

const SignInIntroductionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
`

const Logo = styled.img`
    height: 88px;
`

const SignInHeading = styled.h1`
    margin: 0;
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 0.8px;
`

const SignInPar = styled.p`
    color: #979797;
    font-weight: 600;
    margin: 0;
    letter-spacing: 0.8px;
    font-size: 16px;
`

const SignInForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 60%;
    gap: 16px;
`

const SignInInput = styled.input`
    border-radius: 40px;
    border: none;
    background-color: #F3F3F3;
    height: 50px;
    font-size: 14px;
    padding-left: 16px;
    letter-spacing: 0.8px;
`

const SignInBtn = styled.button`
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

const RegisterLink = styled(Link)`
    letter-spacing: 0.8px;
    margin-left: 4px;
    text-decoration: none;
    color: #D08355;
`

const SignInError = styled.div`
    color: red;
    text-align: center;
`

