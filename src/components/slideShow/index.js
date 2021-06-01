import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';

const SlideShow = () => {

    const arrayImages = [
        'https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2Fyc3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1518987048-93e29699e79a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        'https://images.unsplash.com/photo-1517672651691-24622a91b550?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhcnN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    ]

    const [number, setNumber] = useState(0);

    function updateImage() {
        if (number + 1 >= 3) {
            setNumber(0)
        } else {
            setNumber(prevState => prevState + 1);
        }
    }

    useEffect(() => {
        const timeout = setTimeout(updateImage, 20000);
        return () =>  clearInterval(timeout);
    }, [])

    return (
        <View style={''}>
            <Image
                source={{ uri: arrayImages[number] }}
                style={{ resizeMode: 'cover', width: '100%', height: 200 }}
            ></Image>
        </View>
    )
}

export { SlideShow };