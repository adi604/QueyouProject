import React, { useState } from 'react';
  import { StyleSheet } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import AntDesign from '@expo/vector-icons/AntDesign';

  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];

  const CategoriesList = () => {
    const [value, setValue] = useState(null);

    return (
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        containerStyle={{ bottom: 20, borderRadius: 5, }}
        itemTextStyle={{ fontSize: 16, color: "#333", bottom: 10, fontWeight: "500", letterSpacing: -0.2 }}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
        renderLeftIcon={() => (
          <AntDesign style={styles.icon} color="black" name="Safety" size={19} />
        )}
      />
    );
  };

  export default CategoriesList;

  const styles = StyleSheet.create({
    dropdown: {
        backgroundColor: "#FFF",
        width: "80%",
        alignSelf: "center",
        borderRadius: 10,
        height: 45,
        shadowColor: "#000",
        elevation: 10,
        color: "#333",
        padding: 10,
        fontSize: 16,
    },
    icon: {
      marginRight: 5,
      color: "#AAA",
    },
    placeholderStyle: {
      fontSize: 15,
      color: "#AAA",
    },
    selectedTextStyle: {
      fontSize: 15,
      color: "#333",
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });