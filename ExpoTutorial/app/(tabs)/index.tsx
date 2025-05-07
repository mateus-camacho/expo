import { Link } from 'expo-router';
import { Text, View,  StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import ImageViewer from '@/components/ImageView';
import Button from '@/components/button';

//imagem que vai ta quando aparecer inicialmente a tela
const ImagemPadrao = require('@/assets/images/background-image.png')

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageConteiner}>
        <ImageViewer imgSource={ImagemPadrao}/>
      </View>
      <View style={styles.footerContainer}>
        <Button theme='primary' label='Escolha uma foto' />
        <Button label='Use essa foto'/>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },  
  imageConteiner: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
