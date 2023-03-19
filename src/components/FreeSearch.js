import {StyleSheet,} from 'react-native';
import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';

const FreeSearch = props => {

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <Searchbar
            style={styles.search}
            placeholder="Example: barber in Holon"
            onChangeText={onChangeSearch}
            value={searchQuery}
            inputStyle = {styles.inputStyle}
            placeholderTextColor="#808080" 
        />
    )
};

export default FreeSearch

const styles = StyleSheet.create({
    search: {
        top: 25,
        width: 330,
        placeholder: 10,
        borderRadius: 10,
        left: 20,
        marginBottom: 50,
        backgroundColor: '#f5fcff',
    },
    inputStyle: {
        fontSize: 18,
    }
});