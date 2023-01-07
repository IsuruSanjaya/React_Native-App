import { View, Text, StyleSheet, Image } from 'react-native'
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
    const onPayment=()=>{
        console.warn("fuck payment");
    }



    return (
        <View style={styles.root}>
            <CustomInput
                value={cardNo}
                setValues={setCardNo}
                placeholder='Enter the Card Number'

            />
            <CustomInput
                value={cvc}
                setValues={setCvc}
                placeholder="Enter the cvc Number"

            />
            <CustomInput
                value={date}
                setValues={setDate}
                placeholder="date"
            />
            <CustomInput
                value={year}
                setValues={setYear}
                placeholder="Year"
            />

            

            <View style={styles.payimg}>
                <Image source={visa} resizeMode="center" style={styles.visa}/>
                <Image source={credit} resizeMode="center" style={styles.credit}/>

            </View>

            <CustomButton 
          text="Pay" 
          onPress={onPayment}
          type="TERTIARY"
          />
       
        </View>




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
        flexWrap:"wrap",
        padding:5,
     


        
    },
    overContainer: {
        flex: 1,
    },

    visa:{
        height:50,
        width:50,
        flex:1,
    },
    credit:{
        height:50,
        width:50,
        flex:1,
    },

})