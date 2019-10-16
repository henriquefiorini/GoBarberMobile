import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Form, Input, Button, Link } from '~/components';
import { signUpRequest } from '~/store/modules/auth/actions';

import { Container } from './styles';

function SignUp({ navigation }) {
  const dispatch = useDispatch();

  const emailRef = useRef();
  const passwordRef = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isLoading = useSelector(state => state.auth.isLoading);

  function handleSubmit() {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <Container>
      <Form>
        <Input
          icon="person-outline"
          autoCapitalize="none"
          placeholder="Full name"
          returnKeyType="next"
          value={name}
          onChangeText={setName}
          onSubmitEditing={() => emailRef.current.focus()}
        />
        <Input
          ref={emailRef}
          icon="mail-outline"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="you@example.com"
          returnKeyType="next"
          value={email}
          onChangeText={setEmail}
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <Input
          ref={passwordRef}
          icon="lock-outline"
          secureTextEntry
          placeholder="Enter 6 characters or more"
          returnKeyType="send"
          value={password}
          onChangeText={setPassword}
          onSubmitEditing={handleSubmit}
        />
        <Button isLoading={isLoading} onPress={handleSubmit}>
          Create an Account
        </Button>
      </Form>
      <Link onPress={() => navigation.navigate('SignIn')}>
        Return to Sign In
      </Link>
    </Container>
  );
}

SignUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default SignUp;
