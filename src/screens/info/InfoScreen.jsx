import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import { colors } from '../../global/colors'

const InfoScreen = () => {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📱 Sobre el Proyecto</Text>
        <Text style={styles.description}>
          <Text style={styles.bold}>"La Tienda de Fabri"</Text> es una aplicación móvil de e-commerce especializada en productos electrónicos, 
          desarrollada como proyecto final para la aprobación del curso de Desarrollo de Aplicaciones de <Text style={styles.bold}>CoderHouse</Text>.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🎯 Funcionalidades</Text>
        <View style={styles.featureItem}>
          <Text style={styles.featureBullet}>•</Text>
          <Text style={styles.featureText}>Catálogo completo de productos electrónicos</Text>
        </View>
        <View style={styles.featureItem}>
          <Text style={styles.featureBullet}>•</Text>
          <Text style={styles.featureText}>Navegación por categorías (smartphones, laptops, accesorios, etc.)</Text>
        </View>
        <View style={styles.featureItem}>
          <Text style={styles.featureBullet}>•</Text>
          <Text style={styles.featureText}>Carrito de compras interactivo</Text>
        </View>
        <View style={styles.featureItem}>
          <Text style={styles.featureBullet}>•</Text>
          <Text style={styles.featureText}>Sistema de autenticación con Firebase</Text>
        </View>
        <View style={styles.featureItem}>
          <Text style={styles.featureBullet}>•</Text>
          <Text style={styles.featureText}>Perfil de usuario con foto y ubicación</Text>
        </View>
        <View style={styles.featureItem}>
          <Text style={styles.featureBullet}>•</Text>
          <Text style={styles.featureText}>Integración con mapas para mostrar ubicación</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🛠️ Tecnologías Utilizadas</Text>
        <View style={styles.techGrid}>
          <View style={styles.techItem}>
            <Text style={styles.techName}>React Native</Text>
            <Text style={styles.techDesc}>Framework principal</Text>
          </View>
          <View style={styles.techItem}>
            <Text style={styles.techName}>Expo</Text>
            <Text style={styles.techDesc}>Plataforma de desarrollo</Text>
          </View>
          <View style={styles.techItem}>
            <Text style={styles.techName}>Redux Toolkit</Text>
            <Text style={styles.techDesc}>Gestión de estado</Text>
          </View>
          <View style={styles.techItem}>
            <Text style={styles.techName}>RTK Query</Text>
            <Text style={styles.techDesc}>Manejo de APIs</Text>
          </View>
          <View style={styles.techItem}>
            <Text style={styles.techName}>Firebase Auth</Text>
            <Text style={styles.techDesc}>Autenticación</Text>
          </View>
          <View style={styles.techItem}>
            <Text style={styles.techName}>React Navigation</Text>
            <Text style={styles.techDesc}>Navegación</Text>
          </View>
          <View style={styles.techItem}>
            <Text style={styles.techName}>React Native Maps</Text>
            <Text style={styles.techDesc}>Integración de mapas</Text>
          </View>
          <View style={styles.techItem}>
            <Text style={styles.techName}>OpenStreetMap</Text>
            <Text style={styles.techDesc}>Geocodificación</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🏗️ Arquitectura</Text>
        <Text style={styles.description}>
          La aplicación sigue una arquitectura modular con separación clara de responsabilidades:
        </Text>
        <View style={styles.featureItem}>
          <Text style={styles.featureBullet}>•</Text>
          <Text style={styles.featureText}><Text style={styles.bold}>Componentes reutilizables:</Text> UI consistente</Text>
        </View>
        <View style={styles.featureItem}>
          <Text style={styles.featureBullet}>•</Text>
          <Text style={styles.featureText}><Text style={styles.bold}>Servicios API:</Text> Comunicación con backend</Text>
        </View>
        <View style={styles.featureItem}>
          <Text style={styles.featureBullet}>•</Text>
          <Text style={styles.featureText}><Text style={styles.bold}>Estado global:</Text> Redux para datos compartidos</Text>
        </View>
        <View style={styles.featureItem}>
          <Text style={styles.featureBullet}>•</Text>
          <Text style={styles.featureText}><Text style={styles.bold}>Navegación stack/tab:</Text> UX intuitiva</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>👨‍💻 Desarrollador</Text>
        <Text style={styles.description}>
          Proyecto desarrollado por <Text style={styles.bold}>Fabrizio Donato Guaglianone</Text> como trabajo final 
          para el curso de Desarrollo de Aplicaciones de <Text style={styles.bold}>CoderHouse</Text>.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📅 Duración de cursada</Text>
        <Text style={styles.description}>26 de Mayo del 2025 al 28 de Junio del 2025.</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Este proyecto demuestra las competencias adquiridas en desarrollo móvil 
          con React Native y las mejores prácticas de la industria.
        </Text>
      </View>
    </ScrollView>
  )
}

export default InfoScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white || '#ffffff',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 32,
    backgroundColor: colors.darkRed || '#8B0000',
  },
  logo: {
    width: 120,
    height: 80,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white || '#ffffff',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.white || '#ffffff',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray || '#e0e0e0',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.darkRed || '#8B0000',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.black || '#333333',
    textAlign: 'justify',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  featureBullet: {
    fontSize: 16,
    color: colors.darkRed || '#8B0000',
    marginRight: 8,
    fontWeight: 'bold',
  },
  featureText: {
    fontSize: 16,
    flex: 1,
    lineHeight: 24,
    color: colors.black || '#333333',
  },
  bold: {
    fontWeight: 'bold',
    color: colors.darkRed || '#8B0000',
  },
  techGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  techItem: {
    width: '48%',
    backgroundColor: colors.lightGray || '#f5f5f5',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  techName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.darkRed || '#8B0000',
    marginBottom: 4,
  },
  techDesc: {
    fontSize: 14,
    color: colors.black || '#666666',
  },
  footer: {
    padding: 20,
    backgroundColor: colors.lightGray || '#f9f9f9',
  },
  footerText: {
    fontSize: 16,
    textAlign: 'center',
    fontStyle: 'italic',
    color: colors.black || '#666666',
    lineHeight: 24,
  },
})