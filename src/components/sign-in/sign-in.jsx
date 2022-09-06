import React, { useState } from 'react';
import FormInput from '../../shares/form-input/custom-input';

import './sign-in.styles.scss';
import { auth, db } from '../../firebase/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import CustomButton from '../../shares/custom-button/custom-button';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userActions } from '../../redux/reducer';

const provider = new GoogleAuthProvider();

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeUsername = (e) => {
    return setUsername(e.target.value);
  };

  const changePassword = (e) => {
    return setPassword(e.target.value);
  };

  const submitForm = async (e) => {
    let isMatched = false;
    e.preventDefault();
    console.log(username, password);

    const querySnapshot = await getDocs(collection(db, "Users"));
    querySnapshot.forEach((doc) => {
      const Users = doc.data();
      if (
        Users.username === username &&
        Users.password === password
      ) {
        //save username in local storage
        localStorage.setItem("username", JSON.stringify(doc.data().username));
        dispatch(userActions.Login(true))
        isMatched = false;
      } else {
        isMatched = true;
      }
      navigate('/')
    });

    isMatched
      ? console.log("Oh no! username or password have some mistake.")
      : console.log("Login successfully!");
  };

  const LoginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form action="">
        <FormInput value={username} onChange={changeUsername} label={'Username'} type={'text'} />
        <FormInput
          value={password}
          onChange={changePassword}
          label={'Password'}
          type={'password'}
        />
        <CustomButton name={'Submit'} onClick={submitForm} />
        {/* <CustomButton name={'Login with Google'} onClick={LoginWithGoogle} /> */}
      </form>
    </div>
  );
};

export default SignIn;
