import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
const DashboardScreen = ({ navigation, route }) => {

  const menuItems = [
    {
      id: 'boletim',
      title: 'Boletim Escolar',
      icon: '📊',
      screen: 'Boletim'
    },
    {
      id: 'faltas',
      title: 'Aulas e Faltas',
      icon: '📅',
      screen: 'AulasEFaltas'
    },
    {
      id: 'calendario',
      title: 'Calendário Escolar',
      icon: '📆',
      screen: 'Calendario'
    },
    {
      id: 'horarios',
      title: 'Horários de Aula',
      icon: '⏰',
      screen: 'Horarios'
    },
    {
      id: 'materiais',
      title: 'Materiais de Estudo',
      icon: '📚',
      screen: 'Materiais'
    },
    {
      id: 'mensagens',
      title: 'Mensagens',
      icon: '✉️',
      screen: 'Mensagens'
    }
  ];

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            source={{ uri: 'https://via.placeholder.com/50' }}
            style={styles.userAvatar}
          />
          <View>
            <Text style={styles.userName}>{nome}</Text>
            <Text style={styles.userRM}>RM: {rm}</Text>
            <Link href="/boletim">About</Link>
          </View>
        </View>
      </View>

      <ScrollView style={styles.menuContainer}>
        <View style={styles.menuGrid}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.menuItem}
              onPress={() => {
                if (item.screen === 'Boletim' || item.screen === 'AulasEFaltas') {
                  navigation.navigate(item.screen);
                } else {
                  // Para telas não implementadas
                  alert(`Funcionalidade "${item.title}" em desenvolvimento.`);
                }
              }}
            >
              <Text style={styles.menuIcon}>{item.icon}</Text>
              <Text style={styles.menuTitle}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Sair</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        gap: 20,
      }}
    >

      <View style={{ alignItems: "center", width: "100%"}}>
        <Text style={{fontWeight: 'bold'}}>SELECIONE A HABILITAÇÃO</Text>
        <View style={{ backgroundColor: "white", padding: 10, borderColor: 'black', borderWidth: 2, borderRadius: 6 }}>
          <Text>ENSINO MÉDIO COM DESENVOLVIMENTO DE SISTEMAS</Text>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={{fontWeight: 'bold'}}>DADOS DA CLASSE SELECIONADA</Text>
        <View style={{ flexDirection: "column", backgroundColor: "white", padding: 10, borderColor: 'black', borderWidth: 2, borderRadius: 6 }}>
          <View style={styles.row}>
            <Text>RM: </Text>
            <Text style={styles.bold}>1234567</Text>
          </View>
          <View style={styles.rowGap}>
            <Text>Semestre OC: </Text>
            <View style={{ flexDirection: "row" }}>
              <Text>Ano OC: </Text>
              <Text style={styles.bold}>2023</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text>Módulo/Série Atual: </Text>
            <Text style={styles.bold}>3 SERIE</Text>
          </View>
          <View style={styles.row}>
            <Text>Turma: </Text>
            <Text style={styles.bold}>TURMA A</Text>
          </View>
          <View style={styles.row}>
            <Text>Grupo do Componente: </Text>
            <Text style={styles.bold}>GRUPO A</Text>
          </View>
          <View style={styles.row}>
            <Text>Situação da Mátricula: </Text>
            <Text style={styles.bold}>CURSANDO</Text>
          </View>
          <View style={styles.row}>
            <Text>Data da situação: </Text>
            <Text style={styles.bold}>12/12/1212</Text>
          </View>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={{fontWeight: 'bold'}}>MENU DE NAVEGAÇÃO</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', padding: 10}}>
          <View>
            <View style={styles.button}>
              {/* <Image source={require('../assets/images/analytics.svg')} style={{ width: 25, height: 25 }} /> */}
              <Text style={{color: 'white', textAlign: 'center'}}>Aulas e Faltas</Text>
            </View>
            <View style={styles.button}>
              {/* <Image source={require('../assets/images/msg.svg')} style={{ width: 25, height: 25 }} /> */}
              <Text style={{color: 'white', textAlign: 'center'}}>Mensagens</Text>
            </View>
            <View style={styles.button}>
              {/* <Image source={require('../assets/images/calendar.svg')} style={{ width: 25, height: 25 }} /> */}
              <Text style={{color: 'white', textAlign: 'center'}}>Horários das Aulas</Text>
            </View>
            <View style={styles.button}>
              {/* <Image source={require('../assets/images/boletim.svg')} style={{ width: 25, height: 25 }} /> */}
              <Text style={{color: 'white', textAlign: 'center'}}>Boletim</Text>
            </View>
          </View>
          <View>
            <View style={styles.button}>
              {/* <Image source={require('../assets/images/entry.svg')} style={{ width: 25, height: 25 }} /> */}
              <Text style={{color: 'white', textAlign: 'center'}}>Código de Entrada</Text>
            </View>
            <View style={styles.button}>
              {/* <Image source={require('../assets/images/declaracao.svg')} style={{ width: 25, height: 25 }} /> */}
              <Text style={{color: 'white', textAlign: 'center'}}>Declarações</Text>
            </View>
            <View style={styles.button}>
              {/* <Image source={require('../assets/images/photo.svg')} style={{ width: 25, height: 25 }} /> */}
              <Text style={{color: 'white', textAlign: 'center'}}>Foto</Text>
            </View>
          </View>
        </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowGap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  bold: {
    fontWeight: "bold",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    margin: 5,
    padding: 10,
    width: 120,
    backgroundColor: "#2c2c2c",
    borderRadius: 6,
    justifyContent: "center",
    height: 60
  }
});
