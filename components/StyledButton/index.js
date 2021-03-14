import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'

const StyledButton = (props) => {

    // const type = props.type;
    // const content = props.content;
    // const onPress = props.onPress;
// same thing as the top just set in one line const 
    const {type, content, onPress} = props;

    const backgroundColor = type === 'primary' ? 'blue' : 'white';
    const textColor = type === 'primary' ? 'white' : 'black';


    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, { backgroundColor: backgroundColor }]}
                onPress={() => onPress()
                }
            >
                <Text style={[styles.text, { color: textColor }]}>{content} </Text>
            </Pressable>
        </View>
    );


};

export default StyledButton

