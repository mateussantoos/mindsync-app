// screens/HomeScreen.tsx
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { BottomNavigation } from 'components/ui/BottomNavigation';
import { Container } from 'components/Container';
import { Ionicons } from '@expo/vector-icons';

export const HomeScreen = () => {
  return (
    <Container>
      {/* Top Bar */}
      <View className="mb-4 flex-row items-center justify-between">
        <View className="h-10 w-10 items-center justify-center rounded-full bg-gray-700">
          <Text className="font-bold text-white">M</Text>
        </View>
        <Text className="text-xl font-bold text-white">
          Mind<Text className="text-blue-500">Sync</Text>
        </Text>
        <Ionicons name="menu" size={24} color="white" />
      </View>

      {/* Search Bar */}
      <View className="mb-4 rounded-xl bg-gray-800 p-3">
        <TextInput placeholder="Buscar..." placeholderTextColor="#ccc" className="text-white" />
      </View>

      {/* Filter Buttons */}
      <View className="mb-4 flex-row justify-around">
        {['Favoritos', 'Compromissos', 'Endereços'].map((filter) => (
          <TouchableOpacity key={filter} className="rounded-xl bg-gray-700 px-4 py-2">
            <Text className="text-white">{filter}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Calendário (mock inicial) */}
      <View className="mb-4 rounded-xl bg-gray-800 p-4">
        <Text className="text-center text-white">Calendário aqui (em breve)</Text>
      </View>

      {/* Cards de lembrete */}
      <ScrollView className="mb-4">
        {[1, 2].map((_, i) => (
          <View key={i} className="mb-3 rounded-xl bg-gray-800 p-4">
            <Text className="font-bold text-white">Aniversário da Júlia</Text>
            <Text className="text-gray-400">12/01/2025</Text>
            <Text className="mb-2 mt-2 text-gray-300">
              Comprar um presente e confirmar presença na festa.
            </Text>
            <TouchableOpacity className="rounded-xl bg-blue-600 px-4 py-2">
              <Text className="text-center text-white">Acessar Lembrança</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </Container>
  );
};
