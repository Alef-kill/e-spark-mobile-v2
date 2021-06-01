import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { Cabin_400Regular, Cabin_500Medium, Cabin_700Bold } from '@expo-google-fonts/cabin';

function loadFonts() {
    const [loaded, error] = useFonts({
        Cabin_400Regular,
        Cabin_500Medium,
        Cabin_700Bold
    });

    if (!loaded) {
        return false;
    } else {
        return true;
    }
}

const colors = {
    root: {
        colormenu: '#6F48C9',
        colormenuhover: '#00393f',
        colorhome: '#2f3136',
        texttitleheader: '#fff',
        colorsearchbar: '#ffffff',
        textcolor: '#FFF',
        login: '#E6E8EB',
        itemcard: '#494D4B',
        colorvalidationinput: '#a01919',
        colorvalidationinput2: '#e22525',
        itemcardtitlepremium: '#6F48C9',
        itemcardtitlepremiumhover: '#1e1e1e',
        itemcardtitledefaulthover: '#1e1e1e',
        itemcardtitledefault: '#9164FA',
        textlinkcolor: '#cab7f6',
    }
}

const globalStyle = StyleSheet.create({
    background: {
        backgroundColor: colors.root.colorhome,
    },
    textcolor: {
        color: colors.root.textcolor,
    },
    textAlignCenter: {
        textAlign: 'center',
    },
    marginTop: {
        marginTop: 20,
    },
    fontSizeTitle: {
        fontSize: 25
    },
    fontFamily: {
        fontFamily: 'Cabin_500Medium',
    }
});

export { colors, globalStyle, loadFonts }