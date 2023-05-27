import './App.css';
import logo from './logo.svg';
import React, { useEffect, useState, createContext, useContext } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { PageNotFound } from './components/PageNotFound';
import { Navigation } from './components/Navigation';
import { AuthenticationContext } from './components/AuthentificationContext';
import styled from 'styled-components';
import { SignIn } from './components/SignIn';
import { Register } from './components/Register';
import Protected from './components/Protected';
import { CreateATicket } from './components/CreateATicket';
import axios from 'axios';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { setIsSignedIn } = useContext(AuthenticationContext)
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setIsSignedIn(false);
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("http://localhost:5000/token/verify", {
      headers: {
        authorization: "Bearer " + token
      }
    })
      .then(response => {
        if (response.data.id) {
          setIsSignedIn(true);
          navigate("/profile");
        } else {

        }
      })
  }, [])

  return (
    <StyledContainer>
      <StyledLeftDiv>
        <Navigation onSignOut={handleSignOut} />
      </StyledLeftDiv>
      <StyledRightDiv>
        <Routes>
          <Route path='*' element={<PageNotFound />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/register' element={<Register />} />
          <Route element={<Protected isLoading={isLoading} setIsLoading={setIsLoading} />}>
            <Route path='/profile' />
            <Route path='/createATicket' element={<CreateATicket />} />
            <Route path='/customerDirectory' />
          </Route>
        </Routes>
      </StyledRightDiv>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex: 1;
  box-sizing: border-box;
  width: 52vw;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
`
const StyledLeftDiv = styled.div`
  background-color: #F3F3F3;
  width: 26%;
`
const StyledRightDiv = styled.div`
  background-color: #FFFFFF;
  width: 74%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  border-radius: 0 8px 8px 0;
`

export default App;
