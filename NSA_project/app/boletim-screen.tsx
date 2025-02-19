import { Text, View, StyleSheet, ScrollView } from "react-native";

export default function Boletim() {
  // Dados simulados de boletim
  const boletimData = [
    { disciplina: "Matemática", nota1: "8.5", nota2: "9.0", media: "8.8", situacao: "APROVADO" },
    { disciplina: "Português", nota1: "7.5", nota2: "8.0", media: "7.8", situacao: "APROVADO" },
    { disciplina: "Desenvolvimento Web", nota1: "9.5", nota2: "10.0", media: "9.8", situacao: "APROVADO" },
    { disciplina: "Banco de Dados", nota1: "8.0", nota2: "7.5", media: "7.8", situacao: "APROVADO" },
    { disciplina: "Programação Mobile", nota1: "7.0", nota2: "8.5", media: "7.8", situacao: "APROVADO" },
    { disciplina: "Inglês Técnico", nota1: "6.5", nota2: "7.5", media: "7.0", situacao: "APROVADO" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BOLETIM ESCOLAR</Text>
      
      <View style={styles.infoBox}>
        <View style={styles.row}>
          <Text>Aluno: </Text>
          <Text style={styles.bold}>João Silva</Text>
        </View>
        <View style={styles.row}>
          <Text>RM: </Text>
          <Text style={styles.bold}>1234567</Text>
        </View>
        <View style={styles.row}>
          <Text>Turma: </Text>
          <Text style={styles.bold}>TURMA A - 3 SERIE</Text>
        </View>
        <View style={styles.row}>
          <Text>Ano Letivo: </Text>
          <Text style={styles.bold}>2023</Text>
        </View>
      </View>

      <ScrollView style={styles.tableContainer}>
        <View style={styles.headerRow}>
          <Text style={[styles.headerCell, styles.disciplinaCell]}>Disciplina</Text>
          <Text style={styles.headerCell}>1º Sem</Text>
          <Text style={styles.headerCell}>2º Sem</Text>
          <Text style={styles.headerCell}>Média</Text>
          <Text style={styles.headerCell}>Situação</Text>
        </View>

        {boletimData.map((item, index) => (
          <View key={index} style={[styles.dataRow, index % 2 === 0 ? styles.evenRow : null]}>
            <Text style={[styles.dataCell, styles.disciplinaCell]}>{item.disciplina}</Text>
            <Text style={styles.dataCell}>{item.nota1}</Text>
            <Text style={styles.dataCell}>{item.nota2}</Text>
            <Text style={[styles.dataCell, styles.bold]}>{item.media}</Text>
            <Text style={[styles.dataCell, styles.situacao]}>{item.situacao}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.legendBox}>
        <Text style={styles.legendTitle}>Legenda</Text>
        <View style={styles.row}>
          <View style={styles.legendDot}></View>
          <Text>Aprovado: Média final igual ou superior a 7,0</Text>
        </View>
        <View style={styles.row}>
          <View style={[styles.legendDot, {backgroundColor: '#ffcc00'}]}></View>
          <Text>Recuperação: Média final entre 5,0 e 6,9</Text>
        </View>
        <View style={styles.row}>
          <View style={[styles.legendDot, {backgroundColor: '#ff6666'}]}></View>
          <Text>Reprovado: Média final inferior a 5,0</Text>
        </View>
      </View>

      <View style={styles.backButton}>
        <Text style={{color: 'white', textAlign: 'center'}}>Voltar ao Menu</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  infoBox: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 16,
  },
  tableContainer: {
    maxHeight: 400,
    marginBottom: 16,
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#2c2c2c',
    padding: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  headerCell: {
    color: 'white',
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  disciplinaCell: {
    flex: 2,
    textAlign: 'left',
  },
  dataRow: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  evenRow: {
    backgroundColor: '#f0f0f0',
  },
  dataCell: {
    flex: 1,
    textAlign: 'center',
  },
  situacao: {
    color: 'green',
    fontWeight: 'bold',
  },
  legendBox: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 16,
  },
  legendTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'green',
    marginRight: 8,
  },
  backButton: {
    backgroundColor: '#2c2c2c',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  bold: {
    fontWeight: 'bold',
  },
});
