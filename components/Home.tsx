import useFetch from '@/hooks/useFetch';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { Card } from './Card';

export function Home({ navigation }) {

    const pageLimit = 10;
    const [limit, setLimit] = useState(pageLimit);
    const [offset, setOffset] = useState(0);

    const { list, loading, error } = useFetch(limit, offset);

    useEffect(() => {
        console.log(list, loading, error?.message);
    }, [loading]);

    function handleClick() {
        setLimit(limit + pageLimit);
    }

    return (
        <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.buttonContainer}>
                {list.map((element, index) => (
                    <Card key={index} data={element} navigation={navigation} />
                ))}
            </View>
        </ScrollView>
        <TouchableOpacity style={styles.loadButton} onPress={handleClick}>
            <Text style={styles.buttonText}>Load More</Text>
        </TouchableOpacity>
    </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f5f5f5',
    },
    scrollContainer: {
        paddingBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    loadButton: {
        backgroundColor: '#007bff',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});