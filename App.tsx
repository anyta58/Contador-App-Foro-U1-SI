import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Counter from './components/Counter';

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Counter />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default App;