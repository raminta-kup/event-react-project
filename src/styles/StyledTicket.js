import styled from "styled-components";

export const Logo = styled.img`
    height: 88px;
`
export const TicketIntroContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
`
export const TicketTitle = styled.h1`
    margin: 0;
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 0.8px;
`
export const CustomerForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 60%;
    gap: 16px;
`
export const CustomerInput = styled.input`
    border-radius: 40px;
    border: none;
    background-color: #F3F3F3;
    height: 50px;
    font-size: 14px;
    padding-left: 16px;
    letter-spacing: 0.8px;
`
export const TicketSubmitBtn = styled.button`
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
export const TicketPar = styled.p`
    color: #979797;
    font-weight: 600;
    margin: 0;
    letter-spacing: 0.8px;
    font-size: 16px;
`
export const ErrorMessage = styled.span`
    color: #df0e0e;
    text-align: center;
    font-weight: 600;
`