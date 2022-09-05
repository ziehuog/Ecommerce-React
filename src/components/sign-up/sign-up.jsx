import { addDoc, collection, getDocs } from 'firebase/firestore';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import CustomButton from '../../shares/custom-button/custom-button';
import FormInput from '../../shares/form-input/custom-input';
// import "./sign-up.styles.scss";

import './sign-up.styles.scss';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate()

  const changeUsername = (e) => {
    return setUsername(e.target.value);
  };

  const changePassword = (e) => {
    return setPassword(e.target.value);
  };

  const changeConfirmPassword = (e) => {
    return setConfirmPassword(e.target.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    console.log(username, password);

    let flag = true;

    const querySnapshot = await getDocs(collection(db, "Users"));
    querySnapshot.forEach((doc) => {
      const aUser = doc.data();
      if (aUser.username === username && password !== confirmPassword) {
        flag = false;
      }
    });

    // validate unique and push into firebase

    if (flag) {
      addDoc(collection(db, "Users"), {
        username: username,
        password: password,
      });
      navigate('/')
    } else {
      console.log("This username has existed! ");
    }
  };
  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form action="">
        <FormInput value={username} onChange={changeUsername} label={'Username'} type={'text'} />
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
