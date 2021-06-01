import { StyleSheet } from 'react-native';
import { colors, globalStyle } from '../../styles/global-styles';

const style = StyleSheet.create({
    cardPlan: {
        backgroundColor: colors.root.itemcard,
        width: 250,
        height: "100%",
        marginLeft: 50,
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: colors.root.colorhome,
    },
    scrollView: {
        marginVertical: "20%",
    },
    cardTop: {
        width: 100,
        marginTop: 20,
        marginHorizontal: 75,
        height: 100,
        borderRadius: 100,
        backgroundColor: colors.root.itemcardtitlepremium,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textTitle: {
        fontSize: 25,
        width: '100%',
        color: colors.root.textcolor,
        fontFamily: globalStyle.fontFamily.fontFamily,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    valueCard: {
        width: '100%',
        color: colors.root.textcolor,
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    descriptionCard: {
        width: '100%',
        color: colors.root.textcolor,
        fontSize: 17,
        paddingHorizontal: 5,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    buttonSelect: {
        backgroundColor: colors.root.itemcardtitlepremium,
        width: '50%',
        marginHorizontal: '25%',
        marginTop: 30,
        height: 50,
        borderRadius: 10
    },
    buttonText: {
        color: colors.root.textcolor,
        marginTop: 11,
        textAlign: 'center',
        fontSize: 16,
        fontFamily: globalStyle.fontFamily.fontFamily,
        fontWeight: 'bold'
    }
})

export { style };