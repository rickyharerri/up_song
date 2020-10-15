import React from 'react';
import { View, Image, Text, SafeAreaView } from 'react-native';
import { styles } from './styles';

export default class DetailsScreen extends React.Component<Props, State> {
    constructor(props: any) {
        super(props)
        console.log('sss');
        this.state = {
            item: this.props.navigation.state.params.item
        }
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#2B1A44' }}>
                <SafeAreaView/>
                <View style={styles.posterView}>
                    <Image
                        // resizeMode={'contain'}
                        borderRadius={10}
                        style={styles.posterImg}
                        source={{ uri: this.state.item.urlToImage !== null ? this.state.item.urlToImage : 'https://i.ytimg.com/vi/8fyk4A9GKxA/maxresdefault.jpg'}}
                    />
                </View>
                <View style={{ width:'98%' }}>
                    <Text style={styles.sourceTextDetails}>
                        {this.state.item.source.name}
                    </Text>
                    <Text style={[styles.titleTextDetails,{color:'#b0c4de'}]}>
                        Title :
                    </Text>
                    <Text style={styles.titleTextDetails}>
                        {this.state.item.title}
                    </Text>
                    { this.state.item.author !== null ? 
                    <View>
                    <Text style={[styles.titleTextDetails,{color:'#b0c4de'}]}>
                        Author :
                    </Text>
                    <Text style={styles.descTextDetails}>
                        {this.state.item.author}
                    </Text></View>: <View/>}
                    <Text style={[styles.titleTextDetails,{color:'#b0c4de'}]}>
                        Description :
                    </Text>
                    <Text style={styles.descTextDetails}>
                        {this.state.item.content}
                    </Text>
                </View>
            </View>

        )
    }
}