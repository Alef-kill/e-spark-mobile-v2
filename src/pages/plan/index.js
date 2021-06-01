import React from 'react';
import { View, Text, Pressable, SafeAreaView, ScrollView } from 'react-native';
import { useHistory } from 'react-router-native';
import { Header } from '../../components/header';

import { style } from './style.js';

const Plan = () => {
    const history = useHistory();

    const arrayPlan = [
        {
            title: "Diário",
            price: "R$ 300,00",
            description: "Vai fazer uma visitinha? esse plano é ideal para você"
        },
        {
            title: "Semanal",
            price: "R$ 1.200,00",
            description: "Vai viajar e precisa passar mais tempo com o carro? esse plano é ideal para você"
        },
        {
            title: "Mensal",
            price: "R$ 2.900,00",
            description: "Está resolvendo algo mais demorado? esse plano é ideal para você"
        },
        {
            title: "Anual",
            price: "R$ 10.000,00",
            description: "Aproveite sua viagem, esse plano é ideal para você"
        },
    ]

    function handleClickPlan() {
        history.push('/checkout');
    }


    return (
        <>
            <SafeAreaView style={style.container}>
                <Header />
                <ScrollView style={style.scrollView} horizontal={true} showsHorizontalScrollIndicator={false}>

                    {arrayPlan.map((item, index) => {
                        return <View style={style.cardPlan} key={index}>
                            <View style={style.cardTop}>
                                <Text style={style.textTitle}>{item.title}</Text>
                            </View>
                            <Text style={style.valueCard}> {item.price} </Text>
                            <Text style={style.descriptionCard}>{item.description}</Text>
                            <Pressable style={style.buttonSelect}
                                onPress={handleClickPlan}>
                                <Text style={style.buttonText}>Selecionar</Text>
                            </Pressable>
                        </View>
                    })}
                </ScrollView>
            </SafeAreaView>
        </>

    );
}

export { Plan };