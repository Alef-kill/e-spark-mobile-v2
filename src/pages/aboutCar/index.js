import React, { useState } from 'react';
import { View, ImageBackground, Text, Pressable, ScrollView} from 'react-native';
import { useHistory } from 'react-router';
import { Header } from '../../components/header/index.js';
import { colors, globalStyle } from '../../styles/global-styles.js';

import { styles } from './style.js';

const AboutCar = () => {
    const [hover, setHover] = useState(false);
    const [hover2, setHover2] = useState(false);

    const history = useHistory()/*  */

    return (
        <ScrollView style={styles.containerAbout}>
            <Header />
                <ImageBackground
                    source={{ uri: "https://2.bp.blogspot.com/-G3yr-uFuiz0/WaBbF6Mfy-I/AAAAAAAA9V4/jk7TyRiVC94iGV6OKprmByhIz90xHW0rQCLcBGAs/s1600/%25285%2B2%2B-25%2529.jpg" }}
                    style={styles.aboutCarImage}
                    imageStyle={{ borderRadius: 20 }}
                >
                    <View style={styles.viewImageContainer}>
                        <View style={styles.viewTextImage}>
                            <Text style={[styles.text, { fontWeight: 'bold' }]}>Nome Carro</Text>
                            <Text style={styles.text}>Modelo</Text>
                        </View>
                    </View>
                </ImageBackground>
                <Text style={{ marginTop: 25, fontFamily: globalStyle.fontFamily.fontFamily, textAlign: 'center', color: colors.root.textcolor, fontSize: 26 }}>
                    Ficha técnica
            </Text>


            <View style={styles.containerDatasheet}>
                <View style={styles.viewAboutDatasheet}>
                    <Text style={styles.textAboutDatasheet}>Categoria</Text>
                    <Text style={styles.textAboutDatasheet}  style={styles.textAboutDatasheet}>{ 'Hatch/Impact' }</Text>
                </View>
                <View style={styles.viewAboutDatasheet}>
                    <Text style={styles.textAboutDatasheet}>Autonomia</Text>
                    <Text style={styles.textAboutDatasheet}> { 'Até 383 km'}</Text>
                </View>
                <View style={styles.viewAboutDatasheet}>
                    <Text style={styles.textAboutDatasheet}>Velocidade Máxima</Text>
                    <Text style={styles.textAboutDatasheet}>{ '145 km/h'}</Text>
                </View>
                <View style={styles.viewAboutDatasheet}>
                    <Text style={styles.textAboutDatasheet}>Aceleração</Text>
                    <Text style={styles.textAboutDatasheet}>{ '0 - 100 km/h em 6.5s'}</Text>
                </View>
                <View style={styles.viewAboutDatasheet}>
                    <Text style={styles.textAboutDatasheet}>Potência</Text>
                    <Text style={styles.textAboutDatasheet}>{ '203 cv'}</Text>
                </View>
                <View style={styles.viewAboutDatasheet}>
                    <Text style={styles.textAboutDatasheet}>Transmissão</Text>
                    <Text style={styles.textAboutDatasheet}>{ 'Automatica d 6 machast'}</Text>
                </View>
                <View style={styles.viewAboutDatasheet}>
                    <Text style={styles.textAboutDatasheet}>Ocupantes</Text>
                    <Text style={styles.textAboutDatasheet}>{ '5'}</Text>
                </View>
                <View style={styles.viewAboutDatasheet}>
                    <Text style={styles.textAboutDatasheet}>Capacidade</Text>
                    <Text style={styles.textAboutDatasheet}>{ '478L'}</Text>
                </View>
            </View>

            <View style={styles.containerButton}>
                    <Pressable
                        style={[styles.button, styles.buttonLeft, hover && styles.hover]}
                        onPressIn={() => setHover(true)}
                        onPressOut={() => setHover(false)}
                        onPress={() => history.push('/home')}
                    // onTouchEnd={() => setHover(false)}
                    >
                        <Text style={styles.text}>{'Voltar'}</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.button, styles.buttonRight, hover2 && styles.hover]}
                        onPressIn={() => setHover2(true)}
                        onPressOut={() => setHover2(false)} >
                        <Text style={styles.text}>{'Alugar'}</Text>
                    </Pressable>
                </View>
        </ScrollView>
    );
}

export { AboutCar };