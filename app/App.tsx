import { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const API_URL = 'http://10.214.160.126:8000';

export default function App() {
  const [status, setStatus] = useState('Not checked yet');

  async function checkBackend() {
    setStatus('Checking...');
    try {
      const res = await fetch(`${API_URL}/health`);
      const data = await res.json();
      setStatus(`Backend OK – ${data.service} v${data.version}`);
    } catch (e) {
      setStatus(`Failed: ${String(e)}`);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SignalScope</Text>
      <Text style={styles.subtitle}>Bluetooth & hotspot signal analyzer</Text>
      <Pressable style={styles.button} onPress={checkBackend}>
        <Text style={styles.buttonText}>Check backend</Text>
      </Pressable>
      <Text style={styles.status}>{status}</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a', alignItems: 'center', justifyContent: 'center', padding: 24 },
  title: { color: '#f8fafc', fontSize: 32, fontWeight: '700' },
  subtitle: { color: '#94a3b8', fontSize: 16, marginTop: 6, marginBottom: 32 },
  button: { backgroundColor: '#3b82f6', paddingVertical: 14, paddingHorizontal: 28, borderRadius: 12 },
  buttonText: { color: 'white', fontSize: 16, fontWeight: '600' },
  status: { color: '#e2e8f0', marginTop: 24, textAlign: 'center' },
}); 