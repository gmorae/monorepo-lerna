import { Text, View } from 'react-native';

type LoadingProps = {
  text: string
}

const Loading = ({ text = 'Carregando...' }: LoadingProps) => {
  return (
    <View style={{
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Text style={{ fontSize: 24 }}>{text}</Text>
    </View>
  )
}

export default Loading
