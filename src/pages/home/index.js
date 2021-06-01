import React from 'react';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useHistory } from 'react-router-native';

import { Header } from '../../components/header/index';
import { SlideShow } from '../../components/slideShow/index';
import { ScrollCategory } from '../../components/scrollCategory/index';
import { CardCar } from '../../components/cardCar/index';
import { globalStyle } from '../../styles/global-styles';

const Home = ({ navigation }) => {
    const { background, textcolor, fontSizeTitle, textAlignCenter, marginTop, fontFamily } = globalStyle;

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={background}
        >
            <Header navigation={navigation} />
            <SlideShow />

            <Text style={[
                textcolor,
                fontSizeTitle,
                textAlignCenter,
                marginTop,
                fontFamily
            ]}>Selecione uma categoria</Text>

            <ScrollCategory />
            <Text style={[
                textcolor,
                fontSizeTitle,
                textAlignCenter,
                marginTop,
                fontFamily
            ]}>
                Todos
            </Text>
            <CardCar />
        </ScrollView>
    )
}

export { Home };