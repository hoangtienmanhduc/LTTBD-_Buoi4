import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet,ImageBackground, Text, View, Image, TextInput,TouchableOpacity,Alert } from 'react-native';

export default function App() {
  const [count, setCount] = useState(1);
  // const onPresstru = () => setCount(prevCount=>prevCount-1);
  const[dongia] = useState(141800);
  const[thanhtien,settt] = useState(dongia)
  
  const [Tamtinh,setTamtinh] = useState(dongia);
  const onPress = () => {setCount(count+1);setTamtinh(tach((count+1)*dongia));settt(tach((count+1)*dongia))};
  const onPresstru = () => {
    if(count>0)
    {
      setCount(count-1);
      setTamtinh(tach((count-1)*dongia));
      settt(tach((count-1)*dongia))
    }
    
  };
  return (
    <View style={styles.main}>
      <View style={styles.view1}>
        <Image
          source={require('./img/book.png')}
        />
        <View style={[{height:140,marginLeft:15}]}>
          <Text style={styles.text}>Nguyên hàm phân tích và ứng dụng </Text> 
          <Text style={[styles.text,{marginTop: 9}]}>Cung cấp bởi Tiki Tranding</Text>
          <Text style={[styles.text,{marginTop: 9,color: 'red'}]}>{dongia}đ</Text>
          <Text style={[styles.text,{marginTop: 9,color: '#808080'}]}>141.800đ</Text>
          <View style={styles.view2}>
            <TouchableOpacity onPress={onPresstru}>
            <Image source={require('./img/btnminus.png')}></Image>
            </TouchableOpacity>
            <Text>{count}</Text>
            
            <TouchableOpacity onPress={onPress}>
            <Image source={require('./img/btnadd.png')}></Image>
            </TouchableOpacity>
              <Text style={{fontWeight:'bold',color:'blue'}}>Mua sau</Text>
          </View>
        </View>
      </View>
      <View style={styles.view3}>
      <Text style={[{fontSize:13,fontWeight:'bold'}]}>Mã giảm giá đã lưu</Text> 
      <Text style={[{marginLeft:18,fontSize:13,fontWeight:'bold',color:'blue'}]}>Xem  tại đây</Text>
      </View>
      <View style={{paddingLeft:15,flexDirection:'row',marginTop:30,height:60}}>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <View style={styles.sectionStyle}>
          <Image style={styles.imageStyle} source={require('./img/yellow_block.png')}></Image>
          <TextInput
            style={{flex: 1, fontSize:20}}
            placeholder="Mã giảm giá"
            underlineColorAndroid="transparent"
          />
        </View>
          <TouchableOpacity style={styles.button} >
            <Text style={{fontSize:18,color:'white',fontWeight:'bold'}}>Áp dụng</Text>
          </TouchableOpacity>
          </View>
        </View>
        <View style={{backgroundColor:'#808080',height:20,marginTop:20}}>
        </View>
        <View style={[styles.view3,{marginTop:20}]}>
      <Text style={[{fontSize:13,fontWeight:'bold'}]}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text> 
      <Text style={[{marginLeft:18,fontSize:13,fontWeight:'bold',color:'blue'}]}>Nhập tại đây?</Text>
      </View>
      <View style={{backgroundColor:'#808080',height:20,marginTop:20}}>
        </View>
        <View style={[styles.view4,{marginTop:20}]}>
      <Text style={[{fontSize:18,fontWeight:'bold'}]}>Tạm tính</Text> 
      <Text style={[{marginLeft:18,fontSize:18,fontWeight:'bold',color:'red'}]}>{Tamtinh} đ</Text>
      </View>
      <View style={{backgroundColor:'#808080',height:140,marginTop:20}}>
        </View>
        <View style={[styles.view4,{marginTop:20}]}>
      <Text style={[{fontSize:18,fontWeight:'bold',color:'#808080'}]}>Thành tiền</Text> 
      <Text style={[{marginLeft:18,fontSize:18,fontWeight:'bold',color:'red'}]}>{thanhtien} đ</Text>
      </View>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <TouchableOpacity style={styles.btnmua}>
            <Text style={{fontSize:22,color:'white',fontWeight:'bold'}}>Tiến hành đặt hàng</Text>
            </TouchableOpacity>
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  view1: {
    marginTop:30,
    flexDirection: 'row',
    height: 150,
    marginLeft:15
  },
  text: {
    fontSize: 13,
    fontWeight: "bold",
    textAlign: 'left',
  },
  view2: {
    marginTop: 13,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  view3: {
    flexDirection: 'row',
    marginLeft:15
  },
  view4: {
    flexDirection: 'row',
    marginLeft:15,
    marginRight:40,
    justifyContent: 'space-between'
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    height: 50,
    borderRadius: 5,
    
    width:220
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 50,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  button:{
    alignItems: "center",
    justifyContent:'center',
    height:50,
    width:120,
    backgroundColor: "#0A5EB7",
    borderRadius:3,
    marginLeft: 20

  },
  btnmua:{
    alignItems: "center",
    justifyContent:'center',
    height:60,
    width:400,
    backgroundColor: "#E53935",
    borderRadius:5
  },
});

const tach=(input)=>{

  if(input<1000)
  {
    return input;
  }
  else if(input>=1000&&input<1000000){
    ;
    var a = parseInt(input/1000);
    var b = input%1000;
    if(b==0)return a+".000"
    return a+"."+b;
  }
  else{
    return input;
  }
};
