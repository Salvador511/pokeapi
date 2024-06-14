import useFetchOneData from '@/hooks/useFechOneData';
import { StyleSheet, Text, TouchableOpacity, Image, ActivityIndicator, View } from 'react-native';
import { useEffect } from 'react';

export function Details({ navigation, route }) {

    function handleClick() {
        navigation.navigate('Home');
    }

    const { pkmn, loading, error } = useFetchOneData(route.params.name);

    useEffect(() => {
        console.log(pkmn, loading, error?.message);
    }, [loading]);

    if (loading) {
        return <ActivityIndicator style={styles.loading} />;
    }

    return (
        <TouchableOpacity onPress={handleClick} style={styles.container}>
            <Image
                source={{ uri: pkmn.sprites.front_default }}
                style={styles.image}
            />
            <Text style={styles.text}># Pokedex: {pkmn.id}</Text>
            <Text style={styles.text}>Name: {pkmn.name}</Text>
            <Text style={styles.text}>Height: {pkmn.height}</Text>
            <Text style={styles.text}>Weight: {pkmn.weight}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
        padding: 20,
    },
    text: {
        fontSize: 18,
        lineHeight: 24,
        marginTop: 10,
        color: '#333',
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
