import { AuthenticationContext } from "./AuthenticationContext"
import { useContext } from "react";
import { StyledListItem, StyledNavList, StyledSignoutBtn, StyledLink } from "../styles/StyledNavigation";

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
