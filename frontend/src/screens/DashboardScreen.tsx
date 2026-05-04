import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function DashboardScreen() {
  const stats = {
    pesoAtual: 78.5,
    metaMinima: 80.0,
    metaMaxima: 82.0,
    ultimoTreino: 'Hipertrofia - Membros Superiores',
    ultimoPace: '5:20 min/km'
  };

  const progresso = (stats.pesoAtual / stats.metaMaxima) * 100;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>FitForge Dashboard</Text>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Meta de Hipertrofia (Bulking)</Text>
        <Text style={styles.statsText}>{stats.pesoAtual}kg → Alvo: 80-82kg</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${progresso}%` }]} />
        </View>
        <Text style={styles.labelSub}>Faltam {(stats.metaMinima - stats.pesoAtual).toFixed(1)}kg para a meta mínima.</Text>
      </View>
      {/* Resto do código anterior... */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  card: { backgroundColor: '#fff', padding: 20, borderRadius: 15, marginBottom: 15, elevation: 3 },
  cardTitle: { fontSize: 14, color: '#666', marginBottom: 5 },
  statsText: { fontSize: 22, fontWeight: 'bold', color: '#007AFF' },
  
  labelSub: { fontSize: 12, color: '#888', marginTop: 8, fontStyle: 'italic' },
  
  detailText: { fontSize: 16, fontWeight: '600', marginTop: 5 },
  progressBar: { height: 10, backgroundColor: '#eee', borderRadius: 5, marginTop: 10 },
  progressFill: { height: 10, backgroundColor: '#007AFF', borderRadius: 5 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  halfCard: { width: '48%' }
});