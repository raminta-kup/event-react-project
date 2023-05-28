import { useContext, useState } from "react";
import { AuthenticationContext } from "./AuthenticationContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SignInIntroductionContainer, Logo, SignInHeading, SignInPar, SignInForm, SignInInput, SignInBtn, SignInError, RegisterLink } from "../styles/StyledSignIn";


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

