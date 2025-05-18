import { SafeAreaView, Platform, StatusBar } from 'react-native';

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaView
      className={styles.container}
      style={{
        paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 30 : 60, // aumenta o espaço
      }}>
      {children}
    </SafeAreaView>
  );
};

const styles = {
  container: 'flex flex-1 p-6 bg-dark-secundary',
};
