import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Login: undefined;
  Main: { username: string };
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<LoginScreenNavigationProp>();

  // Autenticación de usuarios
  const handleLogin = () => {
    if ((username === 'user' && password === 'pass') || (username === 'user2' && password === 'pass2')) {
      navigation.navigate('Main', { username });
    } else {
      Alert.alert('Usuario inválido');
    }
  };

  return (
    <View style={styles.container}>
      {/* Imagen de cabecera */}
      <View style={styles.header}>
        <Image style={styles.logo} source={{ uri: 'https://example.com/your-image.png' }} />
      </View>
      {/* Contenido del Login */}
      <View style={styles.content}>
        <Text style={styles.title}>Bienvenido!</Text>
        <TextInput
          placeholder="Usuario"
          value={username}
          onChangeText={setUsername}
          placeholderTextColor="#A9A9A9"
          style={styles.input} // Asignamos el estilo aquí
        />
        <TextInput
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#A9A9A9"
          secureTextEntry
          style={styles.input} // Asignamos el estilo aquí
        />
        <TouchableOpacity onPress={() => Alert.alert('Recuperación de contraseña')}>
          <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.footer}>
          <Text>¿No tienes cuenta? </Text>
          <TouchableOpacity onPress={() => Alert.alert('Registro de usuario')}>
            <Text style={styles.register}>Regístrate ahora</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', backgroundColor: '#F5F6FA' },
  header: { alignItems: 'center', marginBottom: 20 },
  logo: { width: 100, height: 100, resizeMode: 'contain', marginTop: 40 },
  content: { alignItems: 'center', paddingHorizontal: 20 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#333', marginBottom: 20 },
  input: {
    width: '90%',
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#FFF',
    color: '#333', // Aseguramos que el texto dentro del campo sea gris oscuro
    borderWidth: 1,
    borderColor: '#DDD',
    marginBottom: 15,
  },
  forgotPassword: { color: '#3498DB', marginBottom: 20, textDecorationLine: 'underline' },
  button: {
    width: '90%',
    paddingVertical: 15,
    backgroundColor: '#3498DB',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  footer: { flexDirection: 'row', alignItems: 'center' },
  register: { color: '#3498DB', textDecorationLine: 'underline' },
});
