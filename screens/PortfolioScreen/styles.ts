import { collectManifestSchemes } from "expo-linking";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    body:{
        backgroundColor: '#eeecfc',
        margin:0,
        padding: 0
    },
    portfolio:{
        height: 400,
        backgroundColor: '#302797',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    topbar:{
        height: 60,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    topbaricon:{
        marginLeft:20,
        marginTop: 20,
        backgroundColor: '#0a1845',
        borderRadius: 5,
    },
    icon:{
        color: '#e6e0fe',
        paddingLeft:4,
        paddingRight: 4,
        paddingTop: 4,
        paddingBottom: 4
    },
    heading:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 35,
    },
    upper:{
        fontSize: 10,
        fontWeight: "bold",
        color: '#c6c3da'
    },
    lower:{
        fontSize: 17,
        fontWeight: "bold",
        color: '#c6c3da'
    },
    topbariconleft:{
        marginRight: 20,
        marginTop: 20,
        backgroundColor: '#0a1845',
        borderRadius: 5,
    },
    iconleft:{
        paddingLeft:5,
        paddingRight: 5,
        paddingTop: 5,
        paddingBottom: 5
    },
    wallets:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,
        marginHorizontal: 30,
    },
    eth:{
        fontSize: 10,
        backgroundColor: '#95e6fc',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    btc:{
        fontSize: 10,
        paddingVertical: 5,
        color: '#e6e0fe',
    },
    balance:{
        fontSize: 10,
        paddingVertical: 5,
        color: '#6c7493',
        fontWeight: "bold",
        marginLeft: 20,
    },
    walletbalcont:{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
    },
    walletbalcontinner:{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 3,
        borderBottomColor: '#95e6fc',
        width: 225
    },
    big:{
        fontSize: 20,
        fontWeight: "bold",
        color: '#e6e0fe',
        paddingBottom: 20
    },
    small:{
        fontSize: 10,
        fontWeight: "bold",
        color: '#e6e0fe',
        paddingBottom: 20,
        paddingLeft: 10
    },
    walletbalcontinnerleft:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 3,
        borderBottomColor: '#e2949f',
        marginLeft: 7,
        width: 80
    },
    smallleft:{
        fontSize: 10,
        fontWeight: "bold",
        color: '#e6e0fe',
        paddingBottom: 33,
    },
    time:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 5,
        justifyContent:"center",
    },
    time1:{
        marginLeft:20,
        fontSize: 10,
        fontWeight: "bold",
        color: '#6c7493',
    },
    time2:{
        marginLeft:20,
        fontSize: 10,
        fontWeight: "bold",
        color: '#302797',
        backgroundColor: 'white',
        paddingVertical: 3,
        paddingHorizontal: 5,
        borderRadius: 10,
    },
    time3:{
        marginLeft:20,
        fontSize: 10,
        fontWeight: "bold",
        color: '#6c7493',
    },
    time4:{
        marginLeft:20,
        fontSize: 10,
        fontWeight: "bold",
        color: '#6c7493',
    },
    time5:{
        marginLeft:20,
        fontSize: 10,
        fontWeight: "bold",
        color: '#6c7493',
    },
    time6:{
        marginLeft:20,
        fontSize: 10,
        fontWeight: "bold",
        color: '#6c7493',
    },
    graph:{
        height: 100,
    },
    trade:{
        display:"flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginVertical:20
    },
    tradeBtn:{
        color: '#302797',
        backgroundColor: '#eeecfc',
        fontSize: 15,
        fontWeight: "bold",
        paddingVertical: 5,
        width: 80,
        textAlign: "center",
        borderRadius: 7
    },
    stylebtn:{
        height: 20,
        width: 30,
        backgroundColor: '#302797',
        position: "absolute",
        top: 390,
        left: 167,
        borderColor:'#eeecfc',
        borderWidth: 4,
        borderRadius: 10
    },
    scrolCont:{
        marginTop: 20,
        height: 200,
    },
    scollcard:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10,
    },
    imgCOnt:{
        backgroundColor:'#dddcf8',
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginTop: 20,
        marginLeft: 20
    },
    scrollImg:{
        backgroundColor:'#dddcf8',
        marginVertical: 10,
        marginHorizontal: 10,
    },
    center:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems:"center",
        marginTop: 20
    },
    centerupper:{
        fontWeight: "bold",
        color:'#302797',
    },
    centerlower:{
        fontWeight: "bold",
        fontSize: 18,
        color:'#302797',
    },
    days:{
        fontWeight: "bold",
        fontSize: 10,
        color:'#302797',
        marginTop: 25
    },
    scroll:{
        width: "100%"
    }

});

export default styles;