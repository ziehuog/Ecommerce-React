import React, { useState } from 'react';
import CustomButton from '../../shares/custom-button/custom-button';
import FormInput from '../../shares/form-input/custom-input';
// import "./sign-up.styles.scss";

import './sign-up.styles.scss';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const changeEmail = (e) => {
    return setEmail(e.target.value);
  };

  const changePassword = (e) => {
    return setPassword(e.target.value);
  };

  const changeConfirmPassword = (e) => {
    return setConfirmPassword(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form action="">
        <FormInput value={email} onChange={changeEmail} label={'Email'} type={'text'} />
        <FormInput
          value={password}
          onChange={changePassword}
          label={'Password'}
          type={'password'}
        />
        <FormInput
          value={confirmPassword}
          onChange={changeConfirmPassword}
          label={'Confirm Password'}
          type={'password'}
        />
        <CustomButton name={'Submit'} onClick={submitForm} />
      </form>
    </div>
  );
};

export default SignUp;
