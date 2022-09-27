import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ImageBackground, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.main}>
      <View style={styles.view1}>
        <Image style={styles.tinyLogo}
          source={require('./img/book.png')}
        />
        <View>
          <Text style={styles.text}>Nguyên hàm phân tích và ứng dụng </Text> 
          <Text style={styles.text1}>Cung cấp bởi Tiki Tranding</Text>
          <Text style={styles.text2}>141.800đ</Text>
          <Text style={styles.text3}>141.800đ</Text>
          <View style={styles.view2}>
            <Image 
              source={require('./img/btnminus.png')}
            />
            <Text style={styles.text6}>1</Text>
            <Image
            source={require('./img/btnadd.png')}
            />
            <Text style={styles.text4} >Mua sau</Text>
          </View>
        </View>
      </View>
      <View style={styles.view3}>
      <Text style={styles.text5}>Mã giảm giá đã lưu</Text> 
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 350,
  },
  tinyLogo: {
    marginLeft: 20,
    width: 100,
  },
  text: {
    fontSize: 13,
    fontWeight: "bold",
    textAlign: 'left',
  },
  text1: {
    fontSize: 13,
    fontWeight: "bold",
    textAlign: 'left',
    marginTop: 7,
  },
  text2: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'left',
    marginTop: 7,
    color: 'red',
  },
  text3: {
    fontSize: 13,
    fontWeight: "bold",
    textAlign: 'left',
    marginTop: 7,
    color: '#808080',
  },
  text4: {
    fontSize: 13,
    fontWeight: "bold",
    color: 'blue',
  },
  text5: {
    fontSize: 13,
    fontWeight: "bold",
    textAlign: 'left',
    marginBottom: 570,
    marginLeft: 18,
  },
  text6: {
    fontWeight: "bold",
  },
  view2: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  view2: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
