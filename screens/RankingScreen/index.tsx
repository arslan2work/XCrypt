import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
const menu = require("../../assets/images/menus.png");
const bell = require("../../assets/images/bell.png");
const eth = require("../../assets/images/eth.png")
const xrp = require("../../assets/images/xrp.png")
const chart1 = require("../../assets/images/chart1.png")


const RankingScreen = () => {
    return(
        <View style={styles.body}>
            <View style={styles.portfolio}>
                <View style={styles.topbar}>
                    <View style={styles.topbaricon}>
                        <Image style={styles.topbariconImage} source={menu} />
                    </View>
                    <Text style={styles.balance}>Rankings</Text>
                    <View style={styles.topbariconleft}>
                        <Image style={styles.topbariconImageLeft} source={bell} />
                    </View>
                </View>
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
    );
};

export default RankingScreen