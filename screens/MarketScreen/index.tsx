import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import styles from "./styles";
const arrow = require("../../assets/images/arrow.png")
const menu = require("../../assets/images/menus.png")
const bell = require("../../assets/images/bell.png")
const play = require("../../assets/images/play.png")
const eth = require("../../assets/images/eth.png")
const xrp = require("../../assets/images/xrp.png")
const chart1 = require("../../assets/images/chart1.png")



const MarketScreen = () => {
    return (
        <View style={styles.body}>
            <View style={styles.portfolio}>
                <View style={styles.topbar}>
                    <View style={styles.topbaricon}>
                        <Image style={styles.topbariconImage} source={menu} />
                    </View>
                    <View style={styles.topbariconleft}>
                        <Image style={styles.topbariconImageLeft} source={bell} />
                    </View>
                </View>


                <Text style={styles.balance}>WALLET BALANCE</Text>

                <View style={styles.walletbalcont}>
                    <View style={styles.walletbalcontinner}>
                        <Text style={styles.big}>$ 13,554.32</Text>
                    </View>
                </View>
                <View style={styles.currencies}>
                    <Text style={styles.currenciesInner1}>ETH</Text>
                    <Text style={styles.currenciesInner2}>BTC</Text>
                    <Text style={styles.currenciesInner3}>XRP</Text>
                    <Text style={styles.currenciesInner4}>OTHERS</Text>
                </View>

                <View style={styles.invest}>
                    <View>
                        <Text style={styles.invHead}>My</Text>
                        <Text style={styles.invHead}>INVESTMENT</Text>
                        <View style={styles.amount}>
                            <Text style={styles.symb}>$</Text>
                            <Text style={styles.cur}>10.112</Text>
                            <Text style={styles.perc}>+3.2%</Text>
                        </View>
                        <View style={styles.play}>
                            <Image style={styles.iconc} source={play}/>
                        </View>

                    </View>
                    <View style={styles.card1}>
                        <View style={styles.card1head}>
                            <Image style={styles.ethIM} source={eth}/>
                            <Text style={styles.ethTE}>Eth</Text>
                        </View>
                        <Image style={styles.chart1} source={chart1}/>
                        <Text style={styles.chart1bal}>$ 3,554</Text>
                        <Text style={styles.chart1balperc}>4.1%</Text>
                    </View>
                    <View style={styles.card2}>
                    <View style={styles.card1head}>
                            <Image style={styles.ethIM} source={xrp}/>
                            <Text style={styles.ethTE}>XRP</Text>
                        </View>
                        <Image style={styles.chart1} source={chart1}/>
                        <Text style={styles.chart1bal}>$ 2,989</Text>
                        <Text style={styles.chart1balperc}>1.5%</Text>
                    </View>
                </View>


                <View style={styles.stylebtn}>
                </View>

                <View style={styles.tab}>
                    <Text style={styles.tabtn}>Watchlist</Text>
                    <Text style={styles.tabtn}>Movers</Text>
                    <Text style={styles.tabtn}>Rewards</Text>
                    <Text style={styles.tabtn}>News</Text>
                </View>

                <View>
                    <View style={styles.coll}>
                        <View style={styles.collimcont}>
                        <Image style={styles.collim} source={eth}/>
                        </View>
                        <View>
                            <Text style={styles.colhead}>Ethereum</Text>
                            <View style={styles.colinner}>
                                <Text style={styles.colinneram}>$1792.44</Text>
                                <Text style={styles.colinnerper}>+ 3.2%</Text>
                            </View>
                        </View>
                        <Image style={styles.chart1img} source={chart1} />
                    </View>
                    <View style={styles.coll}>
                        <View style={styles.collimcont}>
                        <Image style={styles.collim} source={xrp}/>
                        </View>
                        <View>
                            <Text style={styles.colhead}>Ripple XRP</Text>
                            <View style={styles.colinner}>
                                <Text style={styles.colinneram}>$1792.44</Text>
                                <Text style={styles.colinnerper}>+ 3.2%</Text>
                            </View>
                        </View>
                        <Image style={styles.chart1img} source={chart1} />
                    </View>
                </View>

            </View>
        </View>
    );
};

export default MarketScreen