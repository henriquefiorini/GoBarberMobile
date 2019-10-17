import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Api } from '~/services';
import { Page } from '~/components';

import { ProvidersList, Provider, Avatar, Name } from './styles';

function SelectProvider({ navigation }) {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    async function loadProviders() {
      const response = await Api.get('providers');
      setProviders(response.data);
    }
    loadProviders();
  }, []);

  return (
    <Page>
      <ProvidersList
        data={providers}
        keyExtractor={provider => String(provider.id)}
        renderItem={({ item: provider }) => (
          <Provider
            onPress={() => navigation.navigate('SelectDateTime', { provider })}
          >
            <Avatar
              source={{
                uri: provider.avatar
                  ? provider.avatar.url
                  : `https://api.adorable.io/avatar/96/${provider.name}.png`,
              }}
            />
            <Name>{provider.name}</Name>
          </Provider>
        )}
      />
    </Page>
  );
}

SelectProvider.navigationOptions = ({ navigation }) => ({
  title: 'Select a provider',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
      <Icon name="chevron-left" size={32} color="white" />
    </TouchableOpacity>
  ),
});

SelectProvider.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default SelectProvider;
