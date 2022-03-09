import React, { useEffect, useState } from "react"
import { ScrollView, TouchableOpacity, Dimensions, View, TextInput, Alert } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useSelector, useDispatch } from "react-redux";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Update, Delete_Item } from "../Store/Actions";

export const ViewNotes = ({ route, navigation }) => {
    const state = useSelector((state) => state.Note)
    const disPatch = useDispatch()
    let index = route.params.index


    const { height, width } = Dimensions.get('window')
    const [Title, setTitle] = useState('')
    const [Body, setBody] = useState('')

    const Updated = () => {
        disPatch(Update(
            {
                index: index,
                Address: Title,
                body: Body
            }
        ))

    }

    const Delete_Alert = () =>
        Alert.alert(
            "Delete Note",
            "Are You Sure Delete This Note",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: () => { disPatch(Delete_Item(index)),navigation.goBack() },
                }
            ]
        );


    useEffect(() => {
        // console.log(state)
        setTitle(state[index].Address)
        setBody(state[index].body)
    }, [])
    return (
        <>
            <View style={{ backgroundColor: '#252525', height, width, justifyContent: 'space-between', paddingHorizontal: RFPercentage(2) }}>

                <View style={{ width: width * .9, alignItems: 'center', height: height * .09, justifyContent: 'space-between', flexDirection: 'row', alignSelf: 'center' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            disabled={Title == '' && Body == '' ? true : false}
                            onPress={() => {
                                Updated()
                                // props.navigation.navigate('Main_Page')
                            }}
                            style={{ height: width * .1, width: width * .1, backgroundColor: '#7c7b7b', borderRadius: width, alignItems: 'center', justifyContent: 'center' }}>
                            <Ionicons name="save-outline" size={RFPercentage(3)} color={'#fff'}></Ionicons>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                Delete_Alert()
                            }}
                            style={{ height: width * .1, width: width * .1, backgroundColor: '#7c7b7b', borderRadius: width, alignItems: 'center', justifyContent: 'center', marginLeft: RFPercentage(1.8) }}>
                            <AntDesign name="delete" size={RFPercentage(3)} color={'red'}></AntDesign>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={() => { navigation.goBack() }}
                        style={{ height: width * .1, width: width * .1, backgroundColor: '#7c7b7b', borderRadius: width, alignItems: 'center', justifyContent: 'center' }}>
                        <Ionicons name="chevron-back-sharp" size={RFPercentage(3)} color={'#fff'}></Ionicons>
                    </TouchableOpacity>

                </View>



                {/* Body */}
                <View style={{ height: RFPercentage(2.5) }}></View>

                <TextInput
                    value={Title}
                    multiline={true}
                    onChangeText={(value) => { setTitle(value) }}
                    placeholder={'Tiltle'}
                    placeholderTextColor='#afaeae'
                    style={{
                        fontSize: RFPercentage(4),
                        color: '#fff'
                    }}
                ></TextInput>


                <ScrollView>

                    <TextInput
                        multiline={true}
                        onChangeText={(value) => { setBody(value) }}
                        value={Body}
                        style={{
                            fontSize: RFPercentage(2.2),
                            marginTop: RFPercentage(3.2),
                            color: '#fff'
                        }}>
                    </TextInput>


                </ScrollView>

                <View style={{ width, alignItems: 'center', height: height * .09, justifyContent: 'center' }}></View>


            </View >
        </>
    )
}