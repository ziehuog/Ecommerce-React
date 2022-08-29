import React, { useState } from 'react';
import CustomButton from '../../shares/custom-button/custom-button.';
import FormInput from '../../shares/form-input/custom-input';

import './sign-in.styles.scss';
import { auth } from '../../firebase/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const provider = new GoogleAuthProvider();

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeEmail = (e) => {
    return setEmail(e.target.value);
  };

  const changePassword = (e) => {
    return setPassword(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(email, password);
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
        <FormInput value={email} onChange={changeEmail} label={'Email'} type={'text'} />
        <FormInput
          value={password}
          onChange={changePassword}
          label={'Password'}
          type={'password'}
        />
        <CustomButton name={'Submit'} onClick={submitForm} />
        <CustomButton name={'Login with Google'} onClick={LoginWithGoogle} />
      </form>
    </div>
  );
};

export default SignIn;
