import React, { useState } from 'react';
import { View, Image, Text, Button, Pressable } from 'react-native';
import { useHistory } from 'react-router-native';

import { styles } from './styles.js';

function CardCar({ navigation }) {
    const [hover, setHover] = useState(false);
    const [hover2, setHover2] = useState(false);

    const history = useHistory();

    function handleClickAlugar(){
        history.push('/plan');
    }

    return (
        <>
            <View style={styles.cardContainer} >
                <Text style={styles.textTitle}>Titulo</Text>
                <Image
                    source={require('../../../assets/images/carro-eletrico.png')}
                    fadeDuration={0}
                    style={styles.cardCarImg}
                />
                <Text style={styles.textDecription}>Breve descrição sobre o carro sobre as suas carateristicas mais inusitadas</Text>
                <View style={styles.containerButton}>
                    <Pressable
                        style={[styles.button, styles.buttonLeft, hover && styles.hover]}
                        onPressIn={() => setHover(true)}
                        onPressOut={() => setHover(false)}
                        onPress={() => history.push('/aboutCar')}
                    >
                        <Text style={styles.text}>{'Sobre'}</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.button, styles.buttonRight, hover2 && styles.hover]}
                        onPressIn={() => setHover2(true)}
                        onPressOut={() => setHover2(false)}
                        onPress={handleClickAlugar} >
                        <Text style={styles.text}>{'Alugar'}</Text>
                    </Pressable>
                </View>
            </View>
        </>
    )
}


export { CardCar };