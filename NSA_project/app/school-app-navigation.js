// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity, Text } from 'react-native';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




// Importar as telas
import LoginScreen from './_layout.jsx';
import Boletim from './boletim-screen.jsx';
import AulasEFaltas from './faltas-screen';
import DashboardScreen from './index';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2c2c2c',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Dashboard" 
          component={DashboardScreen} 
          options={{ 
            title: 'Menu Principal',
            headerLeft: null // Remove botão voltar na tela principal após login
          }}
        />
        <Stack.Screen 
          name="Boletim" 
          component={Boletim} 
          options={{ title: 'Boletim Escolar' }}
        />
        <Stack.Screen 
          name="AulasEFaltas" 
          component={AulasEFaltas} 
          options={{ title: 'Aulas e Faltas' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
