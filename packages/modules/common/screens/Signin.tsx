import { useEffect, useState } from 'react';
import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { useSelector } from 'react-redux';

import { signin } from '@orbitall-core/services';
import { maskCPF, maskOnlyNumbers } from '@orbitall-core/utils';
import { RootState } from '@orbitall-core/store';

const Signin = () => {
  const { colors } = useSelector((state: RootState) => state.configurations)

  const [document, setDocument] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async () => {
    const { data } = await signin(maskOnlyNumbers(document), password)

    Alert.alert(data.message)
  }

  return (
    <View style={{
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.primary
    }}>
      <View style={{ marginTop: 16, width: '80%' }}>
        <Text style={{ color: colors.secondary, fontSize: 16, textAlign: 'center' }}>Entre com os dados abaixo</Text>
        <TextInput
          placeholder="CPF"
          style={{
            marginTop: 16,
            borderRadius: 8,
            color: '#000',
            backgroundColor: '#eee',
            borderWidth: 0,
            paddingHorizontal: 16,
            paddingVertical: 8,
          }}
          maxLength={14}
          value={maskCPF(document)}
          onChangeText={text => setDocument(text)}
        />
        <TextInput
          placeholder="Senha"
          secureTextEntry
          style={{
            marginTop: 8,
            borderRadius: 8,
            color: '#000',
            backgroundColor: '#eee',
            borderWidth: 0,
            paddingHorizontal: 16,
            paddingVertical: 8,
          }}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity
          style={{
            marginTop: 16,
            backgroundColor: colors.secondary,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
            paddingVertical: 16,
          }}
          onPress={handleSubmit}
        >
          <Text style={{ color: '#FFF' }}>Buscar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Signin
