import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import styles from "./styles";
const arrow = require("../../assets/images/arrow.png")


const PortfolioScreen = () => {
    return(
        <View style={styles.body}>
            <View style={styles.portfolio}>
                <View style={styles.topbar}>
                    <View style={styles.topbaricon}>
                    </View>
                    <View style={styles.heading}>
                        <Text style={styles.upper}>MY PORTFOLIO</Text>
                        <Text style={styles.lower}>4 WALLETS</Text>
                    </View>
                    <View style={styles.topbariconleft}> 
                    </View>
                </View>

                <View style={styles.wallets}>
                    <View >
                        <Text style={styles.eth}>ETH WALLET</Text>
                    </View>
                    <View>
                        <Text style={styles.btc}>BTC WALLET</Text>
                    </View>
                    <View>                        
                        <Text style={styles.btc}>DOG WALLET</Text>
                    </View>
                </View>

                <Text style={styles.balance}>WALLET BALANCE</Text>

                <View style={styles.walletbalcont}>
                    <View style={styles.walletbalcontinner}>
                        <Text style={styles.big}>$ 13,554.32</Text>
                        <Text style={styles.small}>0.27931</Text>
                    </View>
                    <View style={styles.walletbalcontinnerleft}>
                        <Text style={styles.smallleft}>BTC</Text>
                    </View>
                </View>

                <View style={styles.time}>
                    <Text style={styles.time1}>24h</Text>
                    <Text style={styles.time2}>1w</Text>
                    <Text style={styles.time3}>1m</Text>
                    <Text style={styles.time4}>3m</Text>
                    <Text style={styles.time5}>1y</Text>
                    <Text style={styles.time6}>All</Text>
                </View>

                <View style={styles.graph}></View>

                <View style={styles.trade}>
                    <Text style={styles.tradeBtn}>Trade</Text>
                    <Text style={styles.tradeBtn}>Send</Text>
                    <Text style={styles.tradeBtn}>Recieve</Text>
                </View>

                <View style={styles.stylebtn}>
                </View>

                <View style={styles.scrolCont}>
                    <ScrollView style={styles.scroll}>
                        <View style={styles.scollcard}>
                            <View style={styles.imgCOnt}>
                            <Image style={styles.scrollImg} source={arrow} />
                            </View>
                            <View style={styles.center}>
                                <Text style={styles.centerupper}>Binance</Text>
                                <Text style={styles.centerlower}>- $ 1504.23</Text>
                            </View>
                            <View><Text style={styles.days}>2 Days Ago</Text></View>
                        </View>
                        <View style={styles.scollcard}>
                            <View style={styles.imgCOnt}>
                            <Image style={styles.scrollImg} source={arrow} />
                            </View>
                            <View style={styles.center}>
                                <Text style={styles.centerupper}>Binance</Text>
                                <Text style={styles.centerlower}>- $ 1504.23</Text>
                            </View>
                            <View><Text style={styles.days}>2 Days Ago</Text></View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    );
};

export default PortfolioScreen