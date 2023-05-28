import { useState } from "react";
import axios from "axios";
import { RegisteredToast } from "./RegisteredToast";
import {
    Logo,
    TicketIntroContainer,
    TicketTitle,
    CustomerForm,
    CustomerInput,
    TicketSubmitBtn,
    TicketPar,
    ErrorMessage
} from "../styles/StyledTicket";


export const CreateATicket = () => {
    const [showToast, setShowToast] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: ""
    });
    const [error, setError] = useState("");

    const handleOnChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (!formData.firstName || !formData.lastName || !formData.email || !formData.phoneNumber) {
            setError("Something went wrong. Please try again");
            return;
        }

        axios
            .post("http://localhost:5000/customers", formData)
            .then((response) => {
                setShowToast(true);
                setError("");

            })
            .catch((err) => console.log(err));
    }

    const handleCloseToast = () => {
        setShowToast(false);
    };

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
                    name="firstName"
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
                    name="phoneNumber"
                    onChange={handleOnChange}
                />
                <TicketSubmitBtn type="submit">Add Customer</TicketSubmitBtn>
            </CustomerForm>
            {<ErrorMessage>{error}</ErrorMessage>}
            <RegisteredToast show={!!showToast} onClose={handleCloseToast} successMessage="Successfully Added Customer!" />
        </>
    )
}