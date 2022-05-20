import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    body:{
        backgroundColor: '#eeecfc',
        margin:0,
        padding: 0
    },
    topBar:{
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    topBarInner:{
        display: "flex",
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems:'center',
    },
    topBarText:{
        fontSize: 25,
        fontWeight: "bold",
        color: "#302797"
    },
    topBarInput:{
        width: 200,
        height: 35,
        backgroundColor: "#e4e0f6",
        borderRadius: 10,
        marginLeft: 20,
        paddingLeft: 15
    },
    topBarImage:{
        width: 35,
        height: 35,
        borderRadius: 10,
        marginLeft: 20,
    },
    topBarTag:{
        position: "absolute",
        right: 27,
        top: 20,
        backgroundColor: '#f37562',
        width: 25,
        alignItems: "center",
        display: 'flex',
        justifyContent: 'center',
        borderWidth: 3,
        margin: 0,
        padding: 0,
        borderRadius: 6,
        borderColor: '#eeecfc',
    },
    tagText:{
        color: 'white',
        fontWeight: 'bold',
    },
    accounts:{
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 210,
        padding: 20,
    },
    accountsCard:{
        height: 180,
        width: 150,
        backgroundColor: '#302797',
        borderRadius: 20,
    },
    accountsCardText:{
        marginTop: 20,
        marginLeft: 20,
        backgroundColor: "#f4ddde",
        width: 40,
        height: 20,
        borderRadius: 5,
        fontSize: 11,
        paddingLeft: 5,
        paddingTop: 2,
        color: '#302797',
    },
    accountsCardTextMiddle:{
        marginTop: 30,
        marginLeft: 20,
        color: '#5542ef',
        fontWeight: 'bold',
    },
    accountsCardTextAmount:{
        marginLeft: 20,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    accountsCardimage:{
        width: 50,
        height: 30,
        marginTop: 20,
        marginLeft: 20,
    },
    accountsCardLeft:{
        height: 180,
        width: 150,
        backgroundColor: '#f6dee0',
        borderRadius: 20,
    },
    accountsCardTextLeft:{
        marginTop: 20,
        marginLeft: 20,
        backgroundColor: "#eed0ca",
        width: 40,
        height: 20,
        borderRadius: 5,
        fontSize: 11,
        paddingLeft: 5,
        paddingTop: 2,
        color: '#302797',
    },
    accountsCardTextMiddleleft:{
        marginTop: 30,
        marginLeft: 20,
        color: '#a69083',
        fontWeight: 'bold',
    },
    accountsCardTextAmountLeft:{
        marginLeft: 20,
        color: '#302797',
        fontWeight: 'bold',
        fontSize: 20
    },
    investment:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 0,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 10,
    },
    investmentText:{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#302797',
    },
    projection:{
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        marginLeft: 30,
        marginRight: 30,
    },
    projectionHead:{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#c6c3da',
    },
    projectionAmount:{
        fontSize: 13,
        fontWeight: 'bold',
        color: 'green',
    },
    projectionDays:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    projectionText:{
        marginRight: 25,
        marginTop: 5,
        fontWeight: "bold",
        color: '#c6c3da',
    },
    projectionTextFirst:{
        marginTop: 5,
        fontWeight: "bold",
        color: '#c6c3da',
    },
    projectionTextActive:{
        marginRight: 15,
        marginTop: 0,
        fontWeight: "bold",
        color: '#302797',
        width: 30,
        height: 30,
        backgroundColor: '#c6c3da',
        paddingLeft: 9,
        paddingTop: 5,
        borderRadius: 5
    },
    bar:{
        marginRight:20,
        marginLeft:20,
        height: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'flex-end'
    },
    bars1:{
        // marginLeft: 6,
        height: 30,
        width: 40,
        backgroundColor: '#c6c3da',
        borderRadius: 5,
    },
    bars2:{
        marginLeft: 6,
        height: 50,
        width: 40,
        backgroundColor: '#c6c3da',
        borderRadius: 5,
    },
    bars3:{
        marginLeft: 6,
        height: 70,
        width: 40,
        backgroundColor: '#c6c3da',
        borderRadius: 5,
    },
    bars4:{
        marginLeft: 6,
        height: 90,
        width: 40,
        backgroundColor: '#c6c3da',
        borderRadius: 5,
    },
    bars5:{
        marginLeft: 6,
        height: 100,
        width: 40,
        backgroundColor: '#302797',
        borderRadius: 5,
    },
    bars6:{
        marginLeft: 6,
        height: 80,
        width: 40,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#c6c3da',
        borderRadius: 5,
    },
    bars7:{
        marginLeft: 6,
        height: 90,
        width: 40,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#c6c3da',
        borderRadius: 5,
    },
    days:{
        display: "flex",
        flexDirection: "row",
    },
    daysText:{
        marginLeft: 26,
        marginRight: 10,
        fontSize: 13,
        fontWeight: "bold",
        color: '#c6c3da'
    },
    daysText1:{
        marginLeft: 10,
        marginRight: 10,
        fontSize: 13,
        fontWeight: "bold",
        color: '#c6c3da'
    },
    daysText2:{
        marginLeft: 10,
        marginRight: 22,
        fontSize: 13,
        fontWeight: "bold",
        color: '#c6c3da'
    },
    daysText3:{
        marginLeft: 0,
        marginRight: 10,
        fontSize: 13,
        fontWeight: "bold",
        color: '#c6c3da'
    },
    daysText4:{
        marginLeft: 10,
        marginRight: 11,
        fontSize: 13,
        fontWeight: "bold",
        color: '#302797'
    },
    daysText5:{
        marginLeft: 14,
        marginRight: 9,
        fontSize: 13,
        fontWeight: "bold",
        color: '#c6c3da'
    },
    daysText6:{
        marginLeft: 14,
        marginRight: 9,
        fontSize: 13,
        fontWeight: "bold",
        color: '#c6c3da'
    },
    bottomtab:{
        height: 120,
        alignContent: "center"
    },
    bottomtabInner:{
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#e4e0f6",
        height: 100,
        borderRadius: 10,
    },
    bottomtabImageCont:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 10
    },
    bottomtabImage:{
        height: 80,
        width: 80,
    },
    bottomtabTextCont:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    bottomText:{
        fontWeight: "bold",
        color: '#302797',
    }
});

export default styles;