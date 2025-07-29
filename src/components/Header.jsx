import { StyleSheet, Image, View } from 'react-native';
import { colors } from '../global/colors';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./logoheader.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.darkRed,
  },
  logo: {
    width: 300,
    height: 160,
  },
});
