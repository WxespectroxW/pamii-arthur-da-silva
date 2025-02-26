import { Text, View, StyleSheet, ScrollView } from "react-native";

export default function AulasEFaltas() {
  // Dados simulados de faltas
  const meses = ["Fevereiro", "Março", "Abril", "Maio", "Junho"];
  
  const disciplinas = [
    {
      nome: "Matemática",
      professor: "Carlos Silva",
      faltas: [2, 0, 1, 0, 1],
      totalAulas: [16, 18, 16, 18, 14]
    },
    {
      nome: "Português",
      professor: "Ana Oliveira",
      faltas: [0, 1, 0, 2, 1],
      totalAulas: [16, 16, 16, 16, 12]
    },
    {
      nome: "Desenvolvimento Web",
      professor: "Rafael Torres",
      faltas: [1, 0, 0, 0, 2],
      totalAulas: [20, 20, 20, 20, 16]
    },
    {
      nome: "Banco de Dados",
      professor: "Juliana Mendes",
      faltas: [0, 2, 1, 0, 0],
      totalAulas: [12, 12, 12, 12, 10]
    },
    {
      nome: "Programação Mobile",
      professor: "Pedro Santos",
      faltas: [1, 1, 0, 1, 0],
      totalAulas: [16, 16, 16, 16, 12]
    }
  ];

  // Cálculo de totais
  const calcularTotais = (disciplina) => {
    const totalFaltas = disciplina.faltas.reduce((sum, curr) => sum + curr, 0);
    const totalAulas = disciplina.totalAulas.reduce((sum, curr) => sum + curr, 0);
    const percentual = ((totalFaltas / totalAulas) * 100).toFixed(1);
    return { totalFaltas, totalAulas, percentual };
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AULAS E FALTAS</Text>
      
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
          <Text>Período: </Text>
          <Text style={styles.bold}>1º Semestre/2023</Text>
        </View>
      </View>

      <View style={styles.alertBox}>
        <Text style={styles.alertText}>Limite máximo de faltas permitido: 25%</Text>
      </View>

      <ScrollView style={styles.disciplinasContainer}>
        {disciplinas.map((disciplina, index) => {
          const totais = calcularTotais(disciplina);
          const isAlerta = parseFloat(totais.percentual) > 15;
          const isDanger = parseFloat(totais.percentual) > 20;
          
          return (
            <View key={index} style={styles.disciplinaCard}>
              <View style={styles.disciplinaHeader}>
                <Text style={styles.disciplinaNome}>{disciplina.nome}</Text>
                <Text style={styles.professorNome}>Prof. {disciplina.professor}</Text>
              </View>
              
              <View style={styles.faltasContainer}>
                <View style={styles.faltasHeader}>
                  <Text style={styles.columnTitle}>Mês</Text>
                  <Text style={styles.columnTitle}>Faltas</Text>
                  <Text style={styles.columnTitle}>Total Aulas</Text>
                </View>
                
                {meses.map((mes, idx) => (
                  <View key={idx} style={styles.faltaRow}>
                    <Text style={styles.mesCell}>{mes}</Text>
                    <Text style={styles.faltasCell}>{disciplina.faltas[idx]}</Text>
                    <Text style={styles.totalAulasCell}>{disciplina.totalAulas[idx]}</Text>
                  </View>
                ))}
              </View>
              
              <View style={[
                styles.faltaSummary,
                isAlerta && styles.alertBackground,
                isDanger && styles.dangerBackground
              ]}>
                <Text style={styles.summaryText}>
                  Total: <Text style={styles.bold}>{totais.totalFaltas} faltas</Text> em <Text style={styles.bold}>{totais.totalAulas} aulas</Text> 
                  (<Text style={[styles.bold, isDanger ? styles.dangerText : isAlerta ? styles.alertText : null]}>{totais.percentual}%</Text>)
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>

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
  alertBox: {
    backgroundColor: '#ffe8cc',
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ffc107',
    marginBottom: 16,
    alignItems: 'center',
  },
  alertText: {
    color: '#cc8800',
    fontWeight: 'bold',
  },
  disciplinasContainer: {
    flex: 1,
    marginBottom: 16,
  },
  disciplinaCard: {
    backgroundColor: 'white',
    borderRadius: 6,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    overflow: 'hidden',
  },
  disciplinaHeader: {
    backgroundColor: '#2c2c2c',
    padding: 10,
  },
  disciplinaNome: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  professorNome: {
    color: '#cccccc',
    fontSize: 12,
  },
  faltasContainer: {
    padding: 10,
  },
  faltasHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 8,
    marginBottom: 8,
  },
  columnTitle: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  faltaRow: {
    flexDirection: 'row',
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  mesCell: {
    flex: 1,
  },
  faltasCell: {
    flex: 1,
    textAlign: 'center',
  },
  totalAulasCell: {
    flex: 1,
    textAlign: 'center',
  },
  faltaSummary: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  alertBackground: {
    backgroundColor: '#fff3cd',
  },
  dangerBackground: {
    backgroundColor: '#f8d7da',
  },
  dangerText: {
    color: '#dc3545',
  },
  summaryText: {
    fontSize: 14,
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
