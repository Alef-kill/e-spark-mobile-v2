import React, { useState } from 'react';
import { Pressable, View, Image, TextInput, Text, ScrollView, Animated, Dimensions } from 'react-native';
import { useHistory } from 'react-router-native';

import { style } from './style';

const CreateAccount = () => {
    const history = useHistory();
    const [largura, setWidth] = useState(new Animated.Value(0));

    function handleLogin() {
        history.push('/login');
    }
    function handleCreateAccount() {
        history.push('/home');
    }

    Animated.sequence([
        Animated.timing(
            largura, {
                toValue: Dimensions.get('window').width,
                duration: 500,
                useNativeDriver: false
            }
        )
    ]).start()


    return (
        <ScrollView style={style.containerLogin}>
            <Animated.View style={{ width: largura, height: '100%' }}>
                <Image
                    style={style.logo}
                    source={require('../../../assets/images/logo.png')} />

                <View>
                    <Text style={style.label}>
                        Primeiro nome:
                </Text>
                    <TextInput
                        editable
                        style={style.textInput}
                        placeholder="Alef"
                    />
                </View>

                <View>
                    <Text style={style.label}>
                        Segundo nome:
                </Text>
                    <TextInput
                        editable
                        style={style.textInput}
                        placeholder="Developer"

                    />
                </View>
                <View>
                    <Text style={style.label}>
                        E-mail:
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

                <Pressable style={style.button} onPress={() => handleCreateAccount()}>
                    <Text style={style.textInButton}>{'Criar Conta'}</Text>
                </Pressable>

                <Text style={style.switch}>
                    ________ou________
            </Text>

                <Pressable style={style.buttonCreate} onPress={() => handleLogin()}>
                    <Text style={style.textInButton}>{'Fazer Login'}</Text>
                </Pressable>
            </Animated.View>
        </ScrollView>
    )
}

export { CreateAccount };