import { colors } from '../../styles/style-global';
import { StyleSheet } from 'react-native';

const styleHome = StyleSheet.create({
    background: {
        backgroundColor: colors.root.colorhome,
    },
    Textcolor: {
        color: colors.root.textcolor,
    },
    fontSize: {
        fontSize: 50
    }
});

export { styleHome }