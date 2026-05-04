import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function DashboardScreen() {
  // Simulando dados que viriam da sua API
  const stats = {
    pesoAtual: 80.5,
    metaPeso: 82.0,
    ultimoTreino: 'Peito e Tríceps',
    ultimoPace: '5:20 min/km'
  };

  const progresso = (stats.pesoAtual / stats.metaPeso) * 100;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>FitForge Dashboard</Text>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Progresso de Peso</Text>
        <Text style={styles.statsText}>{stats.pesoAtual}kg / {stats.metaPeso}kg</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${progresso}%` }]} />
        </View>
      </View>

      <View style={styles.row}>
        <View style={[styles.card, styles.halfCard]}>
          <Text style={styles.cardTitle}>Último Treino</Text>
          <Text style={styles.detailText}>{stats.ultimoTreino}</Text>
        </View>
        <View style={[styles.card, styles.halfCard]}>
          <Text style={styles.cardTitle}>Pace Corrida</Text>
          <Text style={styles.detailText}>{stats.ultimoPace}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  card: { backgroundColor: '#fff', padding: 20, borderRadius: 15, marginBottom: 15, elevation: 3 },
  cardTitle: { fontSize: 14, color: '#666', marginBottom: 5 },
  statsText: { fontSize: 22, fontWeight: 'bold', color: '#007AFF' },
  detailText: { fontSize: 16, fontWeight: '600', marginTop: 5 },
  progressBar: { height: 10, backgroundColor: '#eee', borderRadius: 5, marginTop: 10 },
  progressFill: { height: 10, backgroundColor: '#007AFF', borderRadius: 5 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  halfCard: { width: '48%' }
});