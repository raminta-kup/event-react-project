import { Link, NavLink } from "react-router-dom";
import { AuthenticationContext } from "./AuthenticationContext"
import { useContext } from "react"
import styled from "styled-components";

export const Navigation = ({ onSignOut }) => {
    const { isSignedIn } = useContext(AuthenticationContext);

    return (
        <nav>
            <StyledNavList>
                {isSignedIn ? (
                    <>
                        <StyledListItem><StyledLink to="/profile">PROFILE</StyledLink></StyledListItem>
                        <StyledListItem><StyledLink to="/createATicket">CREATE A TICKET</StyledLink></StyledListItem>
                        <StyledListItem><StyledLink to="/customerDirectory">CUSTOMER DIRECTORY</StyledLink></StyledListItem>
                        <StyledListItem><StyledSignoutBtn onClick={onSignOut}>SIGNOUT</StyledSignoutBtn></StyledListItem>
                    </>
                ) : (
                    <>
                        <StyledListItem>
                            <StyledLink to="/register">REGISTER</StyledLink>
                        </StyledListItem>
                        <StyledListItem>
                            <StyledLink to="/signIn">SIGN IN</StyledLink>
                        </StyledListItem>
                        <StyledListItem></StyledListItem>
                        <StyledListItem></StyledListItem>
                    </>
                )}
            </StyledNavList>
        </nav>
    )
}

const StyledNavList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`
const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: #979797;
    letter-spacing: 0.8px;
    font-size: 16px;
    font-weight: 600;
    padding: 0 40px;
    &:focus,
    &.active {
        background-color: #FFFFFF;
        height: 160px;   
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        border-left: 6px solid #D08355;
        transition: all 0.3s ease-in-out;
    }

`

const StyledListItem = styled.li`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #F3F3F3;
    height: 160px;
`

const StyledSignoutBtn = styled.button`
    background-color: #F3F3F3;
    color: #979797;
    font-size: 16px;
    border: none;
    letter-spacing: 2px;
    font-weight: 600;
    cursor: pointer;
`
