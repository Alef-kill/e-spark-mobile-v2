import { StyleSheet } from 'react-native';
import { colors, globalStyle } from '../../styles/global-styles';

const style = StyleSheet.create({
    containerLogin: {
        backgroundColor: colors.root.colorhome,
        minHeight: '100%',
        width: '100%',
        display: 'flex',
        alignContent: 'center'
    },
    logo: {
        marginTop: 40,
        width: '100%',
        height: 60,
        resizeMode: 'contain',
    },
    label: {
        width: '90%',
        margin: '5%',
        color: colors.root.textcolor,
        fontFamily: globalStyle.fontFamily.fontFamily,
        fontWeight: 'bold'
    },
    textInput: {
        width: '90%',
        height: 35,
        marginHorizontal: '5%',
        backgroundColor: colors.root.colorsearchbar,
        paddingLeft: 10,
        fontSize: 12,
        borderRadius: 5
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: 35,
        margin: '5%',
        marginTop: 30,
        backgroundColor: colors.root.colormenu,
        display: 'flex',
        color: colors.root.textcolor,
        fontSize: 15,
        fontFamily: globalStyle.fontFamily.fontFamily
    },
    switch: {
        width: '90%',
        margin: '2%',
        marginHorizontal: '5%',
        textAlign: 'center',
        color: colors.root.textcolor,
    },
    buttonCreate: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: 35,
        marginHorizontal: '5%',
        marginVertical: '1%',
        marginTop: 20,
        marginBottom: 20,
        display: 'flex',
        fontSize: 15,
        backgroundColor: colors.root.itemcard,
    },
    textInButton: {
        color: colors.root.textcolor,
        textAlign: 'center'
    }
})

export { style };