import React, { useState } from 'react';
import { ScrollView, View, Text, CheckBox, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useHistory } from 'react-router-native';

import { Header } from '../../components/header/index';

import { style } from './style.js';

const Checkout = () => {
  const [isSelected, setSelection] = useState(false);
  const [isSelected1, setSelection1] = useState(false);
  const [isSelected2, setSelection2] = useState(false);

  const history = useHistory();

  return (
    <ScrollView style={style.container}>
      <Header />
      <View style={style.containerCheckout}>
        <Text style={style.textTitle}>Checkout</Text>

        <View style={style.containerDate}>
          <View style={style.titledateAlter}>
            <Text style={style.subtitle}>Veículo selecionado</Text>
            <Text style={style.textAlter}>Alterar</Text>
          </View>
          <View style={style.containerDates}>
            <FontAwesome
              name="car"
              backgroundColor="#fff"
              size={22}
              style={style.fontawesome}
              onPress={() => !activeBar ? setActiveBar(true) : setActiveBar(false)} />
            <Text style={style.textDate}>Chevrolet Bolt</Text>
          </View>
        </View>

        <View style={style.containerDate}>
          <View style={style.titledateAlter}>
            <Text style={style.subtitle}>Plano Escolhido</Text>
            <Text style={style.textAlter}>Alterar</Text>
          </View>
          <View>

            <View style={style.containerDates}>
              <FontAwesome
                name="calendar"
                backgroundColor="#fff"
                size={22}
                style={style.fontawesome}
                onPress={() => !activeBar ? setActiveBar(true) : setActiveBar(false)} />
              <Text style={style.textDate}>Diário</Text>
            </View>
            <View style={style.containerDates}>
              <FontAwesome
                name="money"
                backgroundColor="#fff"
                size={22}
                style={style.fontawesome}
                onPress={() => !activeBar ? setActiveBar(true) : setActiveBar(false)} />
              <Text style={style.textDate}>Valor: R$ 300,00</Text>
            </View>
          </View>
        </View>

        <View style={style.containerDate}>
          <View style={style.titledateAlter}>
            <Text style={style.subtitle}>Método de pagamaento</Text>
            <Text style={style.textAlter}>Alterar</Text>
          </View>

          <View style={style.containerDates}>
            <FontAwesome
              name="credit-card"
              backgroundColor="#fff"
              size={22}
              style={style.fontawesome}
              onPress={() => !activeBar ? setActiveBar(true) : setActiveBar(false)} />
            <Text style={style.textDate}>{"Cartão de crédito:"+ "\n"+"4521 0235 5012 8745"}</Text>
          </View>
        </View>

        <Text style={style.textTitle}>Opções de retirada</Text>

        <View style={style.containerDates}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={style.checkbox}
          />
          <Text style={style.textDate}>Av. Sebastião Antonio Ribeiro, 570,Maria José, Vespasiano - MG</Text>
        </View>
        <View style={style.containerDates}>
          <CheckBox
            value={isSelected1}
            onValueChange={setSelection1}
            style={style.checkbox}
          />
          <Text style={style.textDate}>Av. Não conheço, 550,Maria José, Santa Luzia - MG</Text>
        </View>
        <View style={style.containerDates}>
          <CheckBox
            value={isSelected2}
            onValueChange={setSelection2}
            style={style.checkbox}
          />
          <Text style={style.textDate}>Av. Nunca vi, 470, aonde, Vespasiano - MG</Text>
        </View>

        <View style={style.containerButton}>
                    <Pressable
                        style={[style.button, style.buttonLeft]}
                        onPress={() => history.push('/home')}
                    // onTouchEnd={() => setHover(false)}
                    >
                        <Text style={style.text}>{'Cancelar'}</Text>
                    </Pressable>
                    <Pressable
                        style={[style.button, style.buttonRight]}>
                        <Text style={style.text}>{'Confirmar'}</Text>
                    </Pressable>
                </View>
      </View>
    </ScrollView>
  )
}

export { Checkout };