import { StyleSheet } from 'react-native';
import { colors } from '../../styles/global-styles';

const styles = StyleSheet.create({
    scroll: {
        minWidth: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    textScroll: {
        borderColor: colors.root.colormenu, 
        borderWidth: 2, 
        borderRadius: 30, 
        padding: 0,
        height: 50,
        textAlignVertical: 'center',
        minWidth: 100,
        textAlign: 'center',
        fontSize: 15,
        marginLeft: 13,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.root.colormenu,
        fontFamily: 'Cabin_700Bold'
    },
})

export { styles };