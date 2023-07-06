import React,{useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {scale} from 'react-native-size-matters'; 
import SelectAble from '../../components/SelectAble'; 
import {deliveryTypes} from '../../utils/MockData';

export default function CheckoutDelivery({navigation}) {
    const [selectedAddress, setSelectedAddress] = useState("Standard Delivery") 
    const onSelect = (item) =>{
        console.log('setSelectedAddress',item);
        setSelectedAddress( item.label)
    }
  return (
    <View style={{paddingVertical: scale(2)}}>
      <FlatList
        data={deliveryTypes}
        renderItem={({item, index}) => 
        <SelectAble selected={ selectedAddress === item.label } 
        onSelect={onSelect} navigation={navigation} item={item} key={index} />}
      />
    </View>
  );
}
