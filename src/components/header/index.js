import React, { useState } from 'react';
import { View, Image, Text, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useHistory } from 'react-router-native';

import { styles } from './styles';

function Header() {
    const [activeBar, setActiveBar] = useState(false);
    const history = useHistory();

    function handleExit(){
        history.push('/login');
    }

    return (
        <>
            <View style={[styles.header]} >
                <Image
                    source={require('../../../assets/images/logo.png')}
                    fadeDuration={0}
                    style={styles.logo}
                />

                <FontAwesome
                    name="bars"
                    backgroundColor="#fff"
                    size={40}
                    style={styles.menu}
                    onPress={() => !activeBar ? setActiveBar(true) : setActiveBar(false)} />
            </View>
            {activeBar &&
                <View style={styles.leftBar} >
                    <View style={styles.itemHeaderLeftMenu}>
                        <FontAwesome
                            name="address-card"
                            size={30}
                            style={styles.itemHeaderImage}
                        />
                        <Text style={styles.itemText}>{'Alef Master'}</Text>
                    </View>
                    <View style={styles.itemHeaderLeftMenu}>
                        <FontAwesome
                            name="newspaper-o"
                            size={30}
                            style={styles.itemHeaderImage}
                        />
                        <Text style={styles.itemText}>{'Histórico'}</Text>
                    </View>
                    <View style={styles.itemHeaderLeftMenu}>
                        <FontAwesome
                            name="info"
                            size={30}
                            style={styles.itemHeaderImage}
                        />
                        <Text style={styles.itemText}>{'Sobre'}</Text>
                    </View>
                    <Pressable
                        style={styles.itemHeaderLeftMenu}
                        onPress={handleExit}
                        >
                        <FontAwesome
                            name="sign-out"
                            size={30}
                            style={styles.itemHeaderImage}
                        />
                        <Text style={styles.itemText}>{'Sair'}</Text>
                    </Pressable>
                </View>
            }
        </>
    )
}


export { Header };