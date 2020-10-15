import { StyleSheet, Dimensions } from 'react-native';
let height = Dimensions.get('window').height
let width = Dimensions.get('window').width

export const styles = StyleSheet.create({
    title: {
        fontFamily: 'Roboto-Bold',
        color: "#FFF",
        fontSize: 22
    },
    innerView: {
        width: '98%',
        alignItems: 'center',
        alignSelf: "center",
    },
    titleText: {
        color: '#FFF',
        textAlign: 'justify',
        fontFamily: 'Roboto-Regular',
        width: '80%',
        fontSize:13,
        paddingRight: 20,
        marginTop: 5
    },
    titleView: {
        paddingLeft: 10,
        paddingRight: 15,
        width: '100%',
    },
    descText: {
        fontFamily: 'Roboto-Light',
        color: '#FFF',
        marginLeft: 5,
        paddingLeft: 10,
        marginBottom: 10,
        paddingRight: 15,
    },
    cellView:{
        borderWidth: 1, 
        width: '95%',
        alignSelf:"center",
        marginTop: 5,
        borderRadius:5,
        borderColor:'#add8e6'
    },
    sourceText: {
        fontFamily: 'Roboto-Bold',
        color: '#d3d3d3',

    },
    // details Screen
    posterView:{
        width:'100%',
    },
    posterImg:{
        // height: height/2,
        aspectRatio:2.2/1.3
        // width:width,
    },
    sourceTextDetails:{
        color: '#FFF',
        textAlign: 'justify',
        fontFamily: 'Roboto-Bold',
        width: '80%',
        fontSize:18,
        marginLeft:10,
        paddingRight: 20,
        marginTop: 5
    },
    titleTextDetails:{
        color: '#FFF',
        textAlign: 'justify',
        fontFamily: 'Roboto-Medium',
        width: '80%',
        fontSize:15,
        marginLeft:10,
        paddingRight: 20,
        marginTop: 5
    },
    descTextDetails:{
        color: '#FFF',
        textAlign: 'justify',
        fontFamily: 'Roboto-Medium',
        fontSize:15,
        marginLeft:10,
        paddingRight: 20,
        marginTop: 5
    },
    // privacy screen
    termsTitle:{
        color: '#FFF',
        fontFamily: 'Roboto-Bold',
        fontSize:25,
        alignSelf:'center'
    },
    termsDescriptin:{
        color: '#FFF',
        fontFamily: 'Roboto-Light',
        fontSize:16,
        textAlign:'justify',
        padding:15, 
        paddingTop:5,
        alignSelf:'center'
    }
});