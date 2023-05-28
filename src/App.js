import './App.css';
import React, { useEffect, useState, useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { PageNotFound } from './components/PageNotFound';
import { Navigation } from './components/Navigation';
import { AuthenticationContext } from './components/AuthenticationContext';
import { SignIn } from './components/SignIn';
import { Register } from './components/Register';
import Protected from './components/Protected';
import { CreateATicket } from './components/CreateATicket';
import axios from 'axios';
import { CustomerDirectory } from './components/CustomerDirectory';
import { StyledContainer, StyledLeftDiv, StyledRightDiv } from "./styles/styledMain"
import { Profile } from './components/Profile';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { setIsSignedIn } = useContext(AuthenticationContext);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setIsSignedIn(false);
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:5000/token/verify", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.data.id) {
            setIsSignedIn(true);
          }
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <StyledContainer>
      <StyledLeftDiv>
        <Navigation onSignOut={handleSignOut} />
      </StyledLeftDiv>
      <StyledRightDiv>
        <Routes>
          <Route path="/" element={<Navigate to="/signIn" replace />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/register' element={<Register />} />
          <Route element={<Protected isLoading={isLoading} setIsLoading={setIsLoading} />}>
            <Route path='/profile' element={<Profile />} />
            <Route path='/createATicket' element={<CreateATicket />} />
            <Route path='/customerDirectory' element={<CustomerDirectory />} />
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </StyledRightDiv>
    </StyledContainer>
  );
}

export default App;
