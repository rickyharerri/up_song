import React, { Props } from 'react';
import { styles } from '../screens/styles';
import { View, Image, Text, TouchableOpacity } from 'react-native';


interface CardProps {
    item?: string,
    clickHandler: () => void
}
export const Card = ({ item, clickHandler }: CardProps) => {    
    return (
        <TouchableOpacity onPress={()=>clickHandler(item)} style={styles.cellView}>
            <View style={[styles.innerView, { flexDirection: 'row', alignItems: 'center', padding: 10, paddingBottom: 0 }]}>
                <Image
                    resizeMode="contain"
                    style={{ height: 90, width: 100, alignSelf: 'flex-start',aspectRatio:2/2 }}
                    source={{ uri: item.urlToImage !== null ? item.urlToImage : 'https://i.ytimg.com/vi/8fyk4A9GKxA/maxresdefault.jpg' }}
                />
                <View style={styles.titleView}>
                    <Text style={styles.sourceText}>
                        {item.source.name}
                    </Text>
                    <Text numberOfLines={3} style={styles.titleText}>
                        {item.title}            
                    </Text>
                </View>
            </View>
            <Text style={styles.descText}>
                {item.description}
            </Text>
        </TouchableOpacity>
    )
}
    ;