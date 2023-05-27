import './App.css';
import React, { useEffect, useState, useContext } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { PageNotFound } from './components/PageNotFound';
import { Navigation } from './components/Navigation';
import { AuthenticationContext } from './components/AuthenticationContext';
import styled from 'styled-components';
import { SignIn } from './components/SignIn';
import { Register } from './components/Register';
import Protected from './components/Protected';
import { CreateATicket } from './components/CreateATicket';
import axios from 'axios';
import { CustomerDirectory } from './components/CustomerDirectory';
import { StyledContainer, StyledLeftDiv, StyledRightDiv } from "./styles/styledMain"

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { setIsSignedIn } = useContext(AuthenticationContext);
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
            <Route path='/customerDirectory' element={<CustomerDirectory />} />
          </Route>
        </Routes>
      </StyledRightDiv>
    </StyledContainer>
  );
}

export default App;
