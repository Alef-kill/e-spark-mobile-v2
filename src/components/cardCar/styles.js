import { StyleSheet } from 'react-native';
import { globalStyle, colors } from '../../styles/global-styles';

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: '5%',
        width: '90%',
        height: 350,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.root.itemcard,
        marginTop: 30,
        marginBottom: 30,
        borderRadius: 10,
        borderStyle: 'solid',
        borderWidth: 3,
        borderColor: `${colors.root.colormenu}`
    },
    cardCarImg: {
        width: '100%',
        height: '50%',
        resizeMode: 'contain',
    },
    textDecription: {
        color: colors.root.textcolor,
        height: '25%',
        width: '90%',
        textAlign: 'center',
        fontSize: 20,
        overflow: 'hidden',
    },
    containerButton: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '15%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        height: '100%',
        display: 'flex',
        backgroundColor: colors.root.colormenu,
    },
    buttonLeft: {
        borderBottomLeftRadius: 10,
    },
    hover: {
        backgroundColor: colors.root.itemcardtitledefaulthover
    },
    buttonRight: {
        borderBottomRightRadius: 10,
    },
    textTitle: {
        paddingHorizontal: 20,
        height: '10%',
        fontSize: 20,
        display: 'flex',
        alignItems: 'center',
        textAlignVertical: 'center',
        backgroundColor: colors.root.colormenu,
        color: colors.root.textcolor,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
})

export { styles };