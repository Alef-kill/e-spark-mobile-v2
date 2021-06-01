import { StyleSheet } from 'react-native';
import { colors, globalStyle } from '../../styles/global-styles';

const style = StyleSheet.create({
    container: {
        backgroundColor: colors.root.colorhome,
        minHeight: '100%',

    },
    containerCheckout: {
        width: '90%',
        minHeight: 550,
        backgroundColor: colors.root.colormenu,
        marginHorizontal: '5%',
        marginTop: 30,
        borderRadius: 10,
        paddingBottom: 30
    },
    text: {
        textAlignVertical: 'center',
        fontSize: 14,
        color: colors.root.textcolor,
        fontFamily: globalStyle.fontFamily.fontFamily,
    },
    textTitle: {
        textAlign: 'center',
        paddingVertical: 30,
        fontSize: 25,
        color: colors.root.textcolor,
        fontFamily: globalStyle.fontFamily.fontFamily,
        fontWeight: 'bold',
    },
    containerDate: {
        width: '90%',
        marginHorizontal: '5%',
        marginVertical: 20,
        justifyContent: 'center',
        alignContent: 'center'
    },
    titledateAlter: {
        flexDirection: 'row',
    },
    subtitle: {
        fontSize: 20,
        color: colors.root.textcolor,
        fontFamily: globalStyle.fontFamily.fontFamily,
    },
    textAlter: {
        color: colors.root.login,
        marginLeft: 25,
        marginTop: 6,
        textDecorationLine: 'underline',
    },
    containerDates: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
    },
    fontawesome: {
        color: 'white',
    },
    textDate: {
        color: colors.root.textcolor,
        marginLeft: 20,
        width: '70%'
    },
    checkbox: {
        marginLeft: "5%"
    },
    containerButton: {
        display: 'flex',
        width:  '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '5%',
        marginTop: 40
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '40%',
        height: 35,
        display: 'flex',
        backgroundColor: 'transparent',
        borderRadius: 7,
        // border: '1px solid '+ colors.root.colorsearchbar
        borderColor: colors.root.colorsearchbar,
        borderStyle: 'solid',
        borderWidth: 2
    },
})

export { style };