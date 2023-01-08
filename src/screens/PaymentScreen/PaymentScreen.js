import { View, Text, StyleSheet, Image, TextInput, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput';
import visa from '../../../assets/images/visa.png';
import credit from '../../../assets/images/credit.png'
import CustomButton from '../../components/CustomButton';


export default function PaymentScreen() {


    const [cardNo, setCardNo] = useState('');
    const [cvc, setCvc] = useState('');
    const [date, setDate] = useState('');
    const [year, setYear] = useState('');

    const onPayment = () => {
        console.warn("fuck payment");
    }



    return (

        <ImageBackground
            source={require('../../../assets/images/app.jpg')}
            style={styles.container}>
            <View style={styles.root}>

                <Text style={styles.header}>School Payment</Text>


                <CustomInput
                    value={cardNo}
                    setValues={setCardNo}
                    placeholder='Enter the Card Number' />
                <Text style={styles.label}>CVV</Text>

                <CustomInput
                    value={cvc}
                    setValues={setCvc}
                    placeholder="Enter the cvc Number" />



                <View style={{
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    height: 100
                }}>
                    <View style={styles.inputWrap}>
                        <Text style={styles.label} >Expiration date</Text>
                        <CustomInput style={styles.inputDate}
                            placeholder="Expire Date"
                            onPress={''}
                            value={date}
                            setValues={setDate}
                        />
                    </View>

                    <View style={styles.inputWrap}>
                        <Text style={styles.label}>CVV</Text>
                        <CustomInput style={styles.inputCvv}
                            maxLength={17}
                            placeholder="CVV"
                            onPress={''}
                        />
                    </View>
                </View>




                <View style={styles.payimg}>
                    <Image source={visa} resizeMode="center" style={styles.visa} />
                    <Image source={credit} resizeMode="center" style={styles.credit} />

                </View>

                <CustomButton
                    text="Pay"
                    onPress={onPayment}
                    type="TERTIARY"
                    fontWeight={10}
                    />



            </View>


        </ImageBackground>



    )
}

const styles = StyleSheet.create({

    root: {
        alignItems: 'center',
        padding: 25,
    },

    payimg: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        margin: 50,
        justifyContent: "center",
        flexWrap: "wrap",
        padding: 5,

    },
    overContainer: {
        flex: 1,
    },

    visa: {
        height: 50,
        width: 50,
        flex: 1,
    },
    credit: {
        height: 50,
        width: 50,
        flex: 1,
    },


    row: {
        flex: 1,
        flexDirection: "row"

    },
    label: {
        flex: 1,
        fontWeight: 'bold'

    },
    inputWrap: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'column'
    },
    inputDate: {
        flex: 1,
        borderColor: "black"

    },
    inputCvv: {
        flex: 1,

    },

    header: {
        fontSize: 35,
        color: 'black',
        fontWeight: "bold",
        fontStyle: "Arial",
        borderColor: "black",
        borderRadius: 5,
        padding: 35

    },

    container: {
        flex: 1,
        width: '100%',
        height: '100%'
    },

})