import React, { useState } from 'react';
import { Pressable, View, Image, TextInput, Text, Animated, Dimensions } from 'react-native';
import { useHistory } from 'react-router-native';

import { style } from './style';

const Login = () => {
    const history = useHistory();
    const [largura, setWidth] = useState(new Animated.Value(0));

    Animated.sequence([
        Animated.timing(
            largura, {
                toValue: Dimensions.get('window').width,
                duration: 500,
                useNativeDriver: false
            }
        )
    ]).start()

    function handleLogin() {
        history.push('/home');
    }

    return (
        <View style={style.containerLogin}>

            <Animated.View style={{width: largura, height: '100%'}}>
                <Image
                    style={style.logo}
                    source={require('../../../assets/images/logo.png')} />

                <View>
                    <Text style={style.label}>
                        Usuário:
                </Text>
                    <TextInput
                        editable
                        style={style.textInput}
                        placeholder="Alefmastertutor@gmail.com"
                    />
                </View>

                <View>
                    <Text style={style.label}>
                        Senha:
                </Text>
                    <TextInput
                        editable
                        style={style.textInput}
                        placeholder="Digite a sua senha"

                    />
                </View>

                <Pressable style={style.button} onPress={() => handleLogin()}>
                    <Text style={style.textInButton}>{'Fazer Login'}</Text>
                </Pressable>

                <Text style={style.switch}>
                    ________ou________
            </Text>

                <Pressable style={style.buttonCreate} onPress={() => history.push('/crateaccount')}>
                    <Text style={style.textInButton}>{'Criar conta'}</Text>
                </Pressable>
            </Animated.View>
        </View>
    )
}

export { Login };