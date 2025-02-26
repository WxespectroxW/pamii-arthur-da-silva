import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationType } from 'react-router-dom';

const LoginScreen = () => {
  const [codEtec, setCodEtec] = useState('');
  const [rm, setRm] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {

    if (!codEtec.trim()) {
      Alert.alert('Erro', 'Por favor, informe o código da ETEC');
      return;
    }
    if (!rm.trim()) {
      Alert.alert('Erro', 'Por favor, informe seu RM');
      return;
    }
    if (!senha.trim()) {
      Alert.alert('Erro', 'Por favor, informe sua senha');
      return;
    }


    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert('Sucesso', 'Login realizado com sucesso!');

    }, 1500);
  };

  const handleForgotPassword = () => {
    Alert.alert('Recuperação de Senha', 'Entre em contato com a secretaria da sua ETEC para recuperar sua senha.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.contentContainer}>
            <View style={styles.logoContainer}>
              <Image
                source={{ uri: 'https://via.placeholder.com/150' }}
                style={styles.logo}
                resizeMode="contain"
              />
              <Text style={styles.appTitle}>NSA</Text>
              <Text style={styles.appSubtitle}>Aluno</Text>
            </View>

            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Código da ETEC</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Ex: 123"
                  value={codEtec}
                  onChangeText={setCodEtec}
                  keyboardType="numeric"
                  maxLength={3}
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>RM (Registro de Matrícula)</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Ex: 12345"
                  value={rm}
                  onChangeText={setRm}
                  keyboardType="numeric"
                  maxLength={5}
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Senha</Text>
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={styles.passwordInput}
                    placeholder="Sua senha"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry={!showPassword}
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    style={styles.eyeButton}
                  >
                    <Text style={styles.eyeButtonText}>
                      {showPassword ? '🙈' : '👁️'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity
                onPress={handleForgotPassword}
                style={styles.forgotPasswordButton}
              >
                <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.loginButton, loading && styles.loginButtonDisabled]}
                onPress={handleLogin}
                disabled={loading}
                onPress={() => navigation.navigate("index.jsx")}
              >
                <Text style={styles.loginButtonText}>
                  {loading ? 'Entrando...' : 'Entrar'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>
              Centro Paula Souza - Governo do Estado de São Paulo
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9fc',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
    justifyContent: 'center', 
  },
  contentContainer: {
    alignItems: 'center', 
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 25,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  appTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000', 
    marginBottom: 6,
  },
  appSubtitle: {
    fontSize: 16,
    color: '#666',
  },
  formContainer: {
    width: '90%', 
    maxWidth: 350, 
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 12, 
  },
  inputLabel: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4, 
    fontWeight: '500',
    textAlign: 'center', 
  },
  input: {
    backgroundColor: '#fff',
    height: 48,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    textAlign: 'center', 
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  passwordInput: {
    flex: 1,
    height: 48,
    paddingHorizontal: 15,
    fontSize: 16,
    textAlign: 'center', 
  },
  eyeButton: {
    padding: 12,
  },
  eyeButtonText: {
    fontSize: 18,
  },
  forgotPasswordButton: {
    alignSelf: 'center', 
    marginBottom: 20,
    marginTop: 5,
  },
  forgotPasswordText: {
    color: '#d51317', 
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#000', 
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  loginButtonDisabled: {
    backgroundColor: '#e88688',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerContainer: {
    marginTop: 'auto',
    alignItems: 'center',
    paddingHorizontal: 25,
    marginBottom: 10,
  },
  footerText: {
    textAlign: 'center',
    color: '#888',
    fontSize: 12,
  },
});

export default LoginScreen;