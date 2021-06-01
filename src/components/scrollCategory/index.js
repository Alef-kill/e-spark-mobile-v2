import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { globalStyle } from '../../styles/global-styles';
import { styles } from './style'

const ScrollCategory = (props) => {

    const [modelCars, setModelCars] = useState([
        'Flex',
        'Economico',
        'Esportivo',
        'Flex',
        'Economico',
        'Esportivo',
        'Luxo',
        'Mini van',
        'Prêmio',
        'SUV']);

    const { textcolor, marginTop } = globalStyle;

    return <View style={styles.scroll} >
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {modelCars.map((item, index) => {
                return <Text style={[styles.textScroll, textcolor]} key={index}>{item}</Text>
            })}
        </ScrollView>
    </View>
}


export { ScrollCategory }