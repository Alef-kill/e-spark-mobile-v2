import { StyleSheet } from 'react-native';
import { colors, globalStyle } from '../../styles/global-styles';

const styles = StyleSheet.create({
    containerAbout: {
        width: '100%',
        backgroundColor: colors.root.colorhome,
    },
    aboutCarImage: {
        width: '98%',
        height: 220,
        marginHorizontal: '2%',
        resizeMode: 'cover',
        marginTop: 50,
        borderRadius: 80,
    },
    viewImageContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    viewTextImage:{
        backgroundColor: colors.root.colormenu,
        padding: 10,
        borderBottomEndRadius: 10,
        borderBottomLeftRadius: 10
    },
    text: {
        textAlign: 'center',
        color: colors.root.textcolor,
        fontFamily: globalStyle.fontFamily.fontFamily,
        fontSize: 12,
        lineHeight: 20
    },
    containerDatasheet: {
        backgroundColor: colors.root.itemcardtitledefaulthover,
        width: '90%',
        margin: '5%',
        borderRadius: 12,
        padding: 20    
    },
    viewAboutDatasheet: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    textAboutDatasheet: {
        color: colors.root.textcolor,
        lineHeight: 22
    },
    containerButton: {
        display: 'flex',
        width:  '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '5%'
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
    hover: {
        backgroundColor: colors.root.itemcardtitledefaulthover
    }
})

export { styles }