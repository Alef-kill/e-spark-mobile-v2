import { StyleSheet } from 'react-native';
import { colors, globalStyle } from '../../styles/global-styles';

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        width: '100%',
        height: 60,
        backgroundColor: colors.root.colormenu,
    },
    logo: {
        width: 120,
        height: 70,
        resizeMode: 'contain'
    },
    menu: {
        height: 45,
        width: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: colors.root.colorsearchbar,
    },
    leftBar: {
        position: 'absolute',
        top: 60,
        left: 0,
        zIndex: 10,
        maxWidth: 400,
        width: '70%',
        height: '100%',
        backgroundColor: colors.root.colorhome,
    },
    itemHeaderLeftMenu: {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        height: 60,
        backgroundColor: colors.root.itemcard,
        marginHorizontal: '5%',
        marginTop: '5%',
        borderRadius: 5,
    },
    itemHeaderImage: {
        padding: 0,
        margin: 0,
        color: colors.root.colorsearchbar,
    },
    itemText: {
        color: colors.root.textcolor,
        textAlign: 'left', // <-- the magic
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 0,
        width: 100,
    }
})

export { styles };