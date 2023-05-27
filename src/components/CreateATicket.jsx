import { useState } from "react";
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import axios from "axios";


export const CreateATicket = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        email: "",
        password: ""
    });

    const handleOnChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        navigate("/customerDirectory");
    }

    return (
        <>
            <TicketIntroContainer>
                <Logo src="./glasslogo.png"></Logo>
                <TicketTitle>Create a Ticket</TicketTitle>
                <TicketPar>Enter Customer Details</TicketPar>
            </TicketIntroContainer>
            <CustomerForm onSubmit={handleOnSubmit}>
                <CustomerInput
                    placeholder="First Name"
                    type="text"
                    name="name"
                    onChange={handleOnChange}
                />
                <CustomerInput
                    placeholder="Last Name"
                    type="text"
                    name="lastName"
                    onChange={handleOnChange}
                />
                <CustomerInput
                    placeholder="Email Address"
                    type="email"
                    name="email"
                    onChange={handleOnChange}
                />
                <CustomerInput
                    placeholder="Phone Number"
                    type="tel"
                    name="phone"
                    onChange={handleOnChange}
                />
                <TicketSubmitBtn type="submit">Add Customer</TicketSubmitBtn>
            </CustomerForm>
        </>
    )
}

const Logo = styled.img`
    height: 88px;
`

const TicketIntroContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
`
const TicketTitle = styled.h1`
    margin: 0;
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 0.8px;
`

const CustomerForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 60%;
    gap: 16px;
`

const CustomerInput = styled.input`
    border-radius: 40px;
    border: none;
    background-color: #F3F3F3;
    height: 50px;
    font-size: 14px;
    padding-left: 16px;
    letter-spacing: 0.8px;
`

const TicketSubmitBtn = styled.button`
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

const TicketPar = styled.p`
    color: #979797;
    font-weight: 600;
    margin: 0;
    letter-spacing: 0.8px;
    font-size: 16px;
`