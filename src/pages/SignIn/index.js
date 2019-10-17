import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Page, Form, Input, Button, Link } from '~/components';
import { signInRequest } from '~/store/modules/auth/actions';

import { Container } from './styles';

function SignIn({ navigation }) {
  const dispatch = useDispatch();

  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isLoading = useSelector(state => state.auth.isLoading);

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  return (
    <Page>
      <Container>
        <Form>
          <Input
            icon="mail-outline"
            placeholder="you@example.com"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            value={email}
            onChangeText={setEmail}
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <Input
            ref={passwordRef}
            icon="lock-outline"
            placeholder="Enter 6 characters or more"
            secureTextEntry
            returnKeyType="send"
            value={password}
            onChangeText={setPassword}
            onSubmitEditing={handleSubmit}
          />
          <Button isLoading={isLoading} onPress={handleSubmit}>
            Sign In
          </Button>
        </Form>
        <Link onPress={() => navigation.navigate('SignUp')}>
          Don&apos;t have an account? Sign Up
        </Link>
      </Container>
    </Page>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default SignIn;
