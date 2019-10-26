import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';

const HomeScreen = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>Login Template</Header>

    <Paragraph>
      The easiest way to start with your amazing application.
    </Paragraph>
    <Button title="Login" onPress={() => navigation.navigate('LoginScreen')} />
    <Button
      bordered
      title="Sign Up"
      onPress={() => navigation.navigate('RegisterScreen')}
    />
  </Background>
);

export default memo(HomeScreen);
