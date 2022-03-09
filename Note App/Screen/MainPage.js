import React, { useEffect, useLayoutEffect, useState } from "react"
import { ScrollView, TouchableOpacity, Alert, Modal, StyleSheet, Text, Pressable, View, Dimensions, Linking, FlatList } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { RFPercentage } from "react-native-responsive-fontsize";
import { useSelector, useDispatch } from "react-redux";

export const Main_Page = ({ route, navigation }) => {
    const state = useSelector((state) => (state.Note))
    const dispPatch = useDispatch()

    const { height, width } = Dimensions.get('window')
    const [modalVisible, setModalVisible] = useState(false);
    const [ColorArr, setColorArr] = useState(['#b2e0df', '#fd99ff', '#ff9e9e', '#91f48f', '#fff599', '#9effff', '#b69cff', '#b2e9b0', '#b0e9e8', '#e9b0d6', '#d7e9b0'])

    function random_item(ColorArr) {
        return ColorArr[Math.floor(Math.random() * ColorArr.length)];
    }

  

    useEffect(() => {
    }, [])


    return (
        <>

            <View style={{ backgroundColor: '#252525', height, width }}>
                {/* header */}
                <View style={{ width, alignItems: 'center', height: height * .08, justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: RFPercentage(1.8) }}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            onPress={() => { setModalVisible(true) }}
                            style={{ height: width * .1, width: width * .1, backgroundColor: '#7c7b7b', borderRadius: width, alignItems: 'center', justifyContent: 'center' }}>
                            <AntDesign name="infocirlceo" size={RFPercentage(3)} color={'#fff'}></AntDesign>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('AddNotes')}
                            style={{ height: width * .1, width: width * .1, backgroundColor: '#7c7b7b', borderRadius: width, alignItems: 'center', justifyContent: 'center', marginLeft: RFPercentage(1.8) }}>
                            <AntDesign name="plus" size={RFPercentage(3)} color={'#fff'}></AntDesign>

                        </TouchableOpacity>
                    </View>
                    <Text style={{ fontSize: RFPercentage(4.7), fontFamily: 'MountainsofChristmas-Bold', color: '#fff' }}>Notes</Text>

                </View>
                <View style={{ height: RFPercentage(3) }}></View>


                {/* body */}
                {state.length == 0 ? (
                    <>
                        <View style={{ alignItems: 'center', marginTop: 160 }}>
                            <FontAwesome name="sticky-note" color={random_item(ColorArr)} size={RFPercentage(40)}></FontAwesome>
                            <Text style={{ color: '#FFF', fontSize: RFPercentage(3.2), fontFamily: 'MountainsofChristmas-Bold' }}>Create Your First Note!! </Text>
                        </View>
                    </>

                )
                    :
                    (
                        <>

                            <ScrollView style={{ height: height * .78 }}>
                                <View style={{ width }}>
                                    <FlatList data={state} renderItem={({ item, index }) =>
                                    (
                                        <TouchableOpacity
                                            onPress={() => { navigation.navigate('ViewNotes', { index: index }) }} style={{ paddingVertical: RFPercentage(1.7), width: width * .9, backgroundColor: random_item(ColorArr), margin: 18, borderRadius: 20, padding: 15 }}>
                                            <Text style={{ fontSize: RFPercentage(2.7), fontWeight: 'bold', fontFamily: 'Staatliches-Regular' }}>{item.Address === '' ? 'Title' : item.Address}</Text>
                                            <Text  style={{ fontSize: RFPercentage(2), fontWeight: 'bold', marginTop: RFPercentage(1.8) }}>{item.body === '' ? 'Body' : (item.body)}</Text>
                                        </TouchableOpacity>
                                    )
                                    } />



                                </View>
                            </ScrollView>


                        </>
                    )
                }

                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Developed by </Text><Text style={{ fontSize: RFPercentage(2.7), color: 'blue', fontWeight: 'bold' }}>Ahmed Khalifa</Text>
                                <Text style={{ marginTop: RFPercentage(2) }}>Contacts:</Text>
                                <View style={{ flexDirection: 'row', marginVertical: RFPercentage(3), width: width * .5, justifyContent: 'space-around' }}>
                                    <TouchableOpacity onPress={() => { Linking.openURL(`https://www.linkedin.com/in/ahmed-khalifa-a814a7205/`) }}>
                                        <AntDesign name="linkedin-square" size={RFPercentage(4.2)} ></AntDesign>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => { Linking.openURL(`https://www.facebook.com/5olof/`) }}>
                                        <AntDesign name="facebook-square" size={RFPercentage(4.2)} ></AntDesign>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => { Linking.openURL(`tel:${'01273564321'}`) }}>
                                        <AntDesign name="mobile1" size={RFPercentage(4.2)} ></AntDesign>
                                    </TouchableOpacity>
                                </View>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Text style={styles.textStyle}>Ok</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>

                </View>

            </View>
        </>
    )

}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: RFPercentage(4),
        padding: RFPercentage(5),
        alignItems: "center",
    },
    button: {
        borderRadius: RFPercentage(2),
        paddingHorizontal: RFPercentage(4),
        padding: RFPercentage(1)
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: RFPercentage(2),
        textAlign: "center"
    },

});


