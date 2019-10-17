import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Page, Form, Input, Button } from '~/components';

import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';

import { Divider, SignOutButton } from './styles';

function Profile() {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);
  const isLoading = useSelector(state => state.user.isLoading);

  const emailRef = useRef();
  const oldPasswordRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    setOldPassword('');
    setPassword('');
    setConfirmPassword('');

    return () => {};
  }, [profile]);

  function handleSubmit() {
    dispatch(
      updateProfileRequest({
        name,
        email,
        oldPassword,
        password,
        confirmPassword,
      }),
    );
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Page title="Profile">
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
          onSubmitEditing={() => oldPasswordRef.current.focus()}
        />

        <Divider />

        <Input
          ref={oldPasswordRef}
          icon="lock-outline"
          secureTextEntry
          placeholder="Current password"
          returnKeyType="next"
          value={oldPassword}
          onChangeText={setOldPassword}
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <Input
          ref={passwordRef}
          icon="lock-outline"
          secureTextEntry
          placeholder="Enter 6 characters or more"
          returnKeyType="next"
          value={password}
          onChangeText={setPassword}
          onSubmitEditing={() => confirmPasswordRef.current.focus()}
        />
        <Input
          ref={confirmPasswordRef}
          icon="lock-outline"
          secureTextEntry
          placeholder="Type your new password again"
          returnKeyType="send"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          onSubmitEditing={handleSubmit}
        />
        <Button isLoading={isLoading} onPress={handleSubmit}>
          Update Profile
        </Button>
        <SignOutButton onPress={handleSignOut}>Sign Out</SignOutButton>
      </Form>
    </Page>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={24} color={tintColor} />
  ),
};

export default Profile;
