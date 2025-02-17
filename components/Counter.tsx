import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { increment, decrement } from '../functions/counterLogic';

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(increment(count));
    };

    const handleDecrement = () => {
        setCount(decrement(count));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Contador: {count}</Text>
            <Button title="Incrementar" onPress={handleIncrement} />
            <Button title="Decrementar" onPress={handleDecrement} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default Counter;