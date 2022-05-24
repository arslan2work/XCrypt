import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    body:{
        backgroundColor: '#eeecfc',
        margin:0,
        padding: 0
    },
    portfolio:{
        height: 100,
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
        backgroundColor: '#e6e0fe',
        borderRadius: 5,
    },
    topbariconImage:{
        width: 25,
        height: 25,
        color: '#302797',
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
        marginRight:20,
        marginTop: 20,
        backgroundColor: '#e6e0fe',
        borderRadius: 5,
        paddingVertical: 1,
        paddingHorizontal: 1
    },
    topbariconImageLeft:{
        width: 23,
        height: 23,
        color: '#302797',
        
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
        fontSize: 18,
        paddingVertical: 5,
        color: '#fff',
        fontWeight: "bold",
        marginTop: 20
    },
    walletbalcont:{
        display: "flex",
        flexDirection: "row",
        marginHorizontal: 20
    },
    walletbalcontinner:{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        width: 225
    },
    currencies:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 20
    },
    currenciesInner1:{
        width: '30%',
        height: 30,
        color:'#7bbcd7',
        fontSize: 12,
        fontWeight: "bold",
        borderTopWidth: 4,
        borderTopColor: '#7bbcd7',
        paddingTop: 9
    },
    currenciesInner2:{
        width: '20%',
        height: 30,
        color:'#cdbabf',
        fontSize: 12,
        fontWeight: "bold",
        borderTopWidth: 4,
        borderTopColor: '#cdbabf',
        paddingTop: 9,
        marginLeft: 5
    },
    currenciesInner3:{
        width: '15%',
        height: 30,
        color:'#d99a9a',
        fontSize: 12,
        fontWeight: "bold",
        borderTopWidth: 4,
        borderTopColor: '#d99a9a',
        paddingTop: 9,
        marginLeft: 5
    },
    currenciesInner4:{
        width: '10%',
        height: 30,
        color:'#aeb8cc',
        fontSize: 8,
        fontWeight: "bold",
        borderTopWidth: 4,
        borderTopColor: '#aeb8cc',
        paddingTop: 9,
        marginLeft: 5
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
    },
    invest:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
        marginTop: 30,
        paddingLeft: 20
    },
    invHead:{
        fontWeight: "bold",
        fontSize: 12,
        color: '#575c7f',
    },
    amount:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop:10
    },
    symb:{
        fontWeight: "bold",
        fontSize: 12,
        color: '#b6b6ca',
        marginTop:5,
        marginRight: 5
    },
    cur:{
        fontSize: 25,
        color: '#b6b6ca',
        letterSpacing: -3
    },
    perc:{
        fontWeight: "bold",
        fontSize: 10,
        color: '#92def9',
        marginTop:5,
        marginLeft: 5
    },
    play:{
        width: 70,
        height: 70,
        marginTop: 40,
        backgroundColor: '#eeecfc',
        borderWidth: 7,
        borderRadius:50,
        borderColor: '#242b57',
        justifyContent: "center",
        alignItems: "center",
    },
    iconc:{
        width: 15,
        height: 15
    },
    card1:{
        backgroundColor: '#92def9',
        width: 100,
        height: 170,
        borderRadius: 10
    },
    card1head:{
        display: "flex",
        flexDirection: "row",
        marginTop:10
    },
    ethIM:{
        height: 15,
        width: 15,
        marginLeft: 10,
        marginTop: 3,
        marginRight: 5
    },
    ethTE:{
        color: '#302797',
        fontSize: 15,
        textAlign: "center",
    },
    chart1:{
        height: 40,
        width: 80,
        marginLeft:10,
        marginTop: 30
    },
    chart1bal:{
        color:'#302797',
        fontSize: 20,
        fontWeight: "bold",
        letterSpacing: -1,
        marginLeft: 10

    },
    card2:{
        backgroundColor: '#eba5a5',
        width: 100,
        height: 170,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    chart1balperc:{
        color:'#302797',
        fontSize: 10,
        marginLeft: 10,
        marginTop:10,
    },
    tab:{
        display: "flex",
        flexDirection: "row",
        marginTop: 30,
        alignItems: "center",
        justifyContent: "space-around"
    },
    tabtn:{
        fontSize: 15,
        fontWeight: "bold",
        color: '#302797'
    },
    coll:{
        width: '100%',
        display: "flex",
        flexDirection: "row",
        marginHorizontal:20,
        marginVertical: 10,
        alignItems:"center"
    },
    collim:{
        height: 30,
        width: 30,
        backgroundColor: '#b6b6ca',
    },
    collimcont:{
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderRadius: 10,
        backgroundColor: '#b6b6ca',
    },
    colhead:{
        fontSize: 12,
        fontWeight: "bold",
        marginLeft: 20,
        color: '#b6b6ca'
    },
    colinner:{
        display: "flex",
        flexDirection: "row",
        alignItems:"center",
        marginLeft: 20
    },
    colinneram:{
        fontWeight: "bold",
        fontSize: 20,
        letterSpacing: -1,
        color: '#302797'
    },
    colinnerper:{
        fontSize: 10,
        fontWeight: "bold",
        marginLeft: 10,
        color: '#92def9',
    },
    chart1img:{
        height: 40,
        width: 80,
        marginLeft: 30,
        marginTop: 10
    }

});

export default styles;