import React, { useEffect, useState } from "react"
import { ScrollView, TouchableOpacity,Dimensions, View, TextInput } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useSelector, useDispatch } from "react-redux";
import { RFPercentage } from "react-native-responsive-fontsize";
import { AddNote } from "../Store/Actions";

export const AddNotes = ({ route, navigation }) => {
    const { height, width } = Dimensions.get('window')
    const [Title, setTitle] = useState('')
    const [Body, setBody] = useState('')


    // const state = useSelector((state) => state)
    const dispPatch = useDispatch()

    const AddFun = () => {
        dispPatch(AddNote(
            {
                Address: Title,
                body: Body
            }
        ))
        setBody('')
        setTitle('')
    }
    useEffect(() => {

    }, [])
    return (
        <>
            <View style={{ backgroundColor: '#252525', height, width, justifyContent: 'space-between', paddingHorizontal: RFPercentage(2) }}>


                <View style={{ width: width * .9, alignItems: 'center', height: height * .09, justifyContent: 'space-between', flexDirection: 'row', alignSelf: 'center' }}>
                    <TouchableOpacity
                        disabled={Title == '' && Body == '' ? true : false}
                        onPress={() => {
                            AddFun()
                            navigation.navigate('Main_Page')
                        }}
                        style={{ height: width * .1, width: width * .1, backgroundColor: '#7c7b7b', borderRadius: width, alignItems: 'center', justifyContent: 'center' }}>
                        <Ionicons name="save-outline" size={RFPercentage(3)} color={'#fff'}></Ionicons>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { navigation.goBack() }}
                        style={{ height: width * .1, width: width * .1, backgroundColor: '#7c7b7b', borderRadius: width, alignItems: 'center', justifyContent: 'center' }}>
                        <Ionicons name="chevron-back-sharp" size={RFPercentage(3)} color={'#fff'}></Ionicons>
                    </TouchableOpacity>
                </View>
                <View style={{ height: RFPercentage(2.5) }}></View>



                {/* <View style={{ paddingVertical: RFPercentage(6), backgroundColor: '#aee5e4', alignSelf: 'center', alignItems: 'center', marginTop: 30, borderRadius: RFPercentage(2) }}> */}
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
                        value={Body}
                        multiline={true}
                        onChangeText={(value) => { setBody(value) }}
                        placeholder={'Type Something......'}
                        placeholderTextColor='#afaeae'
                        style={{
                            fontSize: RFPercentage(2.2),
                            marginTop: RFPercentage(3.2),
                            color: '#fff'
                        }}
                    ></TextInput>


                    {/* </View> */}
                </ScrollView>

                <View style={{ width, alignItems: 'center', height: height * .09, justifyContent: 'center' }}>
                </View>

            </View >
        </>
    )
}