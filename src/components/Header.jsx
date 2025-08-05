import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import { colors } from '../global/colors'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather'
import { clearSession } from '../db'
import { clearUser } from '../features/user/userSlice'
import { useSelector, useDispatch } from 'react-redux'

const Header = ({ title, subtitle, imageSource }) => {
  const navigation = useNavigation()
  const canGoBack = navigation.canGoBack()
  const user = useSelector(state => state.userReducer.userEmail)

  const dispatch = useDispatch()

  const handleClearSession = async () => {
    try {
      await clearSession()
      dispatch(clearUser())
    } catch {
      //console.log("error al limpiar la sesión")
    }
  }

  return (
    <View style={styles.container}>
      {imageSource ? (
        <Image source={imageSource} style={styles.logo} resizeMode="contain" />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
      <Text style={styles.subtitle}>{subtitle}</Text>
      {
        canGoBack &&
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>Volver</Text>
        </Pressable>
      }
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.darkRed
  },
  title: {
    fontSize: 24,
    color: colors.white,
    fontFamily: 'PressStart2P'
  },
  logo: {
    height: 120,
    width: 240, 
    marginBottom: 10,  
  },
  subtitle: {
    fontSize: 16,
    color: colors.white,
  },
  backButton: {
    color: colors.white,
    fontSize: 16,
    marginTop: 10,
  }
})