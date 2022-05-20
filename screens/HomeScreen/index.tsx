import React from "react";
import { View, Text, Image } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import styles from "./styles";
const image = require('../../assets/images/profile.jpg')
const master = require('../../assets/images/master.png')
const verify = require('../../assets/images/ver.png')


const HomeScreen = () => {
    return(
        <View style={styles.body}>
            <View style={styles.topBar}>
                <View style={styles.topBarInner}>
                    <Text style={styles.topBarText}>H.</Text>
                    <TextInput style={styles.topBarInput} placeholder="Search for anything"></TextInput>
                    <Image style={styles.topBarImage} source={image} />
                    <View style={styles.topBarTag}>
                        <Text style={styles.tagText}>3</Text>
                    </View>
                </View>
            </View>

            <View style={styles.accounts}>
                <View style={styles.accountsCard}>
                    <Text style={styles.accountsCardText}>+3.2%</Text>
                    <Text style={styles.accountsCardTextMiddle}>DEBIT ACCOUNT</Text>
                    <Text style={styles.accountsCardTextAmount}>$27,910.10</Text>
                    <Image style={styles.accountsCardimage} source={master} />
                </View>
                <View style={styles.accountsCardLeft}>
                    <Text style={styles.accountsCardTextLeft}>$ 63.6</Text>
                    <Text style={styles.accountsCardTextMiddleleft}>HEDGE TOKEN</Text>
                    <Text style={styles.accountsCardTextAmountLeft}>$1,549.10</Text>
                    <Text style={styles.accountsCardTextMiddleleft}>24.2 HGD</Text>
                </View>
            </View>

            <View style={styles.investment}>
                <Text style={styles.investmentText}>My Investments</Text>
                <Text style={styles.investmentText}>$ 10,400.10</Text>
            </View>

            <View style={styles.projection}>
                <View>
                    <Text style={styles.projectionHead}>Projection</Text>
                    <Text style={styles.projectionAmount}>+3.2%</Text>
                </View>
                <View style={styles.projectionDays}>
                    <Text style={styles.projectionText}>D</Text>
                    <Text style={styles.projectionText}>W</Text>
                    <Text style={styles.projectionTextActive}>M</Text>
                    <Text style={styles.projectionTextFirst}>Y</Text>
                </View>
            </View>

            <View style={styles.bar}>
                <View style={styles.bars1}></View>
                <View style={styles.bars2}></View>
                <View style={styles.bars3}></View>
                <View style={styles.bars4}></View>
                <View style={styles.bars5}></View>
                <View style={styles.bars6}></View>
                <View style={styles.bars7}></View>
            </View>

            <View style={styles.days}>
                <Text style={styles.daysText}>SUN</Text>
                <Text style={styles.daysText1}>MON</Text>
                <Text style={styles.daysText2}>TUE</Text>
                <Text style={styles.daysText3}>WED</Text>
                <Text style={styles.daysText4}>THU</Text>
                <Text style={styles.daysText5}>FRI</Text>
                <Text style={styles.daysText6}>SAT</Text>
            </View>

            <View style={styles.bottomtab}>
                <View style={styles.bottomtabInner}>
                    <View style={styles.bottomtabImageCont}>
                        <Image style={styles.bottomtabImage} source={verify}/>
                    </View>
                    <View style={styles.bottomtabTextCont}>
                        <Text style={styles.bottomText}>
                            Verify Account and  
                        </Text>
                        <Text style={styles.bottomText}>
                            get Hedge token and
                        </Text>
                        <Text style={styles.bottomText}>
                            and bonus.
                        </Text>
                    </View>
                    <View></View>
                </View>
            </View>
        </View>
    );
};

export default HomeScreen