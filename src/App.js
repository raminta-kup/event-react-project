import './App.css';
import React, { useEffect, useState, useContext } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
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
  const [currentUser, setCurrentUser] = useState(null);
  const { setIsSignedIn } = useContext(AuthenticationContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setIsSignedIn(false);
    setCurrentUser(null);
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
            // console.log(response)
            setCurrentUser(response.data);
          }
          setIsLoading(false);
        })
        .catch((error) => {
          // console.log(error);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (currentUser) {
      navigate("/profile");
    }
  }, []);

  return (
    <StyledContainer>
      <StyledLeftDiv>
        <Navigation onSignOut={handleSignOut} />
      </StyledLeftDiv>
      <StyledRightDiv>
        <Routes>
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/register' element={<Register />} />
          <Route element={<Protected isLoading={isLoading} setIsLoading={setIsLoading} />}>
            <Route path='/profile' element={<Profile currentUser={currentUser} />} />
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
