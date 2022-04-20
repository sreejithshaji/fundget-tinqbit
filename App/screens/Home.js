import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions,ImageBackground, TextInput } from 'react-native';
import { useFonts } from 'expo-font';


import ParallaxScrollView from 'react-native-parallax-scroll-view';

const screen = Dimensions.get('window');



export default function App({navigation , route={} }) {
  return (
      <ParallaxScrollView
      backgroundColor="#2A6DDB"
      // contentBackgroundColor="pink"
      parallaxHeaderHeight={400}
      renderForeground={() => ( <TopPortion/> )}>
      <BottomPortion/>


    </ParallaxScrollView>
  );
}

function TopPortion()
{


  const [loaded] = useFonts({
    AirbnbCereal: require('../../assets/fonts/AirbnbCereal_W_Bd.otf')
  });

  if (!loaded) {
    return null;
  }

  return(
    <View style={{ flex: 1,}}>

        <View style={styles.row1} >    
            <Image source={require('../assets/Home/avatar.png')} resizeMode="contain" />
            
            <View style={{alignItems: 'center', justifyContent: 'center' }} >
                <View style={{width:171,height:38,backgroundColor:'#96BAE2', position:'absolute',opacity:0.24, borderRadius:10,alignItems: 'center', justifyContent: 'center'  }} />
                <Text style={{fontFamily:'AirbnbCereal', fontSize:14 , color:'#ffffff'}} >Fundget account</Text>
            </View>

            <Image source={require('../assets/Home/Vector.png')} resizeMode="contain" />
        </View>

        

        <View style={styles.row2} >
          <Image style={{ marginTop:-90}} source={require('../assets/Home/Topology-1.png')} resizeMode="contain" />
          <Image style={{ marginTop:-90}} source={require('../assets/Home/Topology-2.png')} resizeMode="contain" />
        </View>


        <CreditSection />

        

    </View>
  )
}


function BottomPortion()
{


  const [loaded] = useFonts({
    AirbnbCereal: require('../../assets/fonts/AirbnbCereal_W_Bd.otf')
  });

  if (!loaded) {
    return null;
  }

  return(

    <View style={{ height: 500 }}>
      
      {/* top radius corner and hook START */}

      <View style={{backgroundColor:"#2A6DDB", height: 50,}} >
        <View style={{backgroundColor:"#ffffff", height: 100, borderRadius:33 }} >
          <View style={{backgroundColor:"#6FB1FC" , width:30, height:5 , alignSelf:"center" , marginTop:20}} />
        </View>
      </View>

      {/* top radius corner and hook END */}


    {/* search section START */}
      <View style={{ flexDirection:'row' , backgroundColor:'#F0F7FF', height:48, width:screen.width*0.90, alignSelf:'center', borderRadius:11  }} >
        <Image style={{ width:85 , height:46, marginLeft:17 }} source={require('../assets/Logo/fundget.png')} resizeMode="contain" />
        
        <Image source={require('../assets/Home/line.png')} style={{alignItems:"center", alignSelf:'center', marginLeft:15 , opacity:.7 }} resizeMode="contain" />

        <TextInput style={{width:screen.width*0.50}} ></TextInput>

        <Image source={require('../assets/Home/search.png')} style={{alignItems:"center", alignSelf:'center' }} resizeMode="contain" />

      </View>

    {/* search section END */}



    {/* row1 START */}

    <View style={{flexDirection:'row',justifyContent: 'space-between' , marginTop:40 , paddingHorizontal:screen.width*0.05}} >
      <Image source={require('../assets/Home/row/qr.png')} style={{alignItems:"center", alignSelf:'center', marginLeft:5 , opacity:.7 }} resizeMode="contain" />
      <Image source={require('../assets/Home/row/pay.png')} style={{alignItems:"center", alignSelf:'center', marginLeft:15 , opacity:.7 }} resizeMode="contain" />
      <Image source={require('../assets/Home/row/loan.png')} style={{alignItems:"center", alignSelf:'center', marginLeft:15 , opacity:.7 }} resizeMode="contain" />
      <Image source={require('../assets/Home/row/reward.png')} style={{alignItems:"center", alignSelf:'center', marginLeft:15 , opacity:.7 }} resizeMode="contain" />
    </View>
    {/* row1 END */}

    {/* row2 START */}
    <View style={{flexDirection:'row',justifyContent: 'space-between' , alignItems:'center' , marginTop:40 , paddingHorizontal : screen.width*0.08}} >
       <Text style={{fontFamily:'AirbnbCereal', fontSize:18 , color:'#595959' }} >Your Transaction</Text>

       <View style={{flexDirection:'row',}}>
          <Text style={{fontFamily:'AirbnbCereal', fontSize:14 , color:'#595959' }} >VIEW ALL</Text>
          <View style={{ backgroundColor:'#F0F7FF', marginLeft:15 }} >
            <Text style={{fontFamily:'AirbnbCereal', fontSize:14 , color:'#595959' }} > > </Text>
          </View>
          
       </View>
       
    </View>
    {/* row2 END */}




    {/* row3 START */}
    <View style={{flexDirection:'row',justifyContent: 'space-between' , marginTop:40 , paddingHorizontal:screen.width*0.05}} >
      <PaymentProfiles circleColor={"#C03CFF"} name={"ABY TRADERS"} shortname={"AT"} money={"300"}/>
      <PaymentProfiles circleColor={"#FFCF49"} name={"BOOSTER CHAI"} shortname={"BA"} money={"120"}/>
      <PaymentProfiles circleColor={"#FC7272"} name={"RD Cinemas"} shortname={"RD"} money={"345"}/>
      <PaymentProfiles circleColor={"#00A861"} name={"PETROLE PUMB"} shortname={"PB"} money={"500"}/>
    </View>
    {/* row3 END */}


    </View>
  )
}


function PaymentProfiles({circleColor,name,shortname,money} )
{
  return(
    <View style={{flexDirection:'column', alignItems:'center', backgroundColor:"#FFFFFF"}} >
        
        <View style={{borderRadius:100, width:screen.width*0.18, height:screen.width*0.18, backgroundColor:circleColor }}>
          <Text style={{fontFamily:'AirbnbCereal', fontSize:18 , color:'#000000' , alignItems:"center", alignSelf:'center', marginTop:screen.width*0.07 }} >{shortname}</Text>
        </View>

        <Text style={{fontFamily:'AirbnbCereal', fontSize:18 , color:'#000000' , alignItems:'center', marginTop:10 }} >{money}</Text>
        <Text style={{fontFamily:'AirbnbCereal', fontSize:10 , color:'#B9B9B9' , alignItems:'center', marginTop:10 }} >{name}</Text>
    </View>
  );
}


function CreditSection()
{
  
  const [loaded] = useFonts({
    AirbnbCereal: require('../../assets/fonts/AirbnbCereal_W_Bd.otf')
  });
  if (!loaded) {
    return null;
  }
  return(
      <View style={{alignItems:'center', marginTop:20}} >
        <Text style={{fontFamily:'AirbnbCereal', fontSize:12 , color:'#ffffff' }} >Available credit</Text>
        <Text style={{fontFamily:'AirbnbCereal', fontSize:38 , color:'#ffffff' }} >₹3000</Text>

        <View style={{width:200 , height:83, marginTop:19 }} >
          <View style={{ backgroundColor:'#96BAE2', width:200, height:83, borderRadius:10, opacity:0.24, position:'absolute' }}  />
          
          <View style={{flexDirection:'row', padding:30, justifyContent:'space-between' }} >

            <View style={{flexDirection:'column' , alignItems:'center' }}>
              <Text style={{fontFamily:'AirbnbCereal', fontSize:12 , color:'#ffffff' }} >₹2000</Text>
              <Text style={{fontFamily:'AirbnbCereal', fontSize:10 , color:'#ffffff', opacity:0.5 }} >SPENT</Text>
            </View>
            
            <Image source={require('../assets/Home/line.png')} style={{marginTop:8}} resizeMode="contain" />

            <View style={{flexDirection:'column' , alignItems:'center' }}>
              <Text style={{fontFamily:'AirbnbCereal', fontSize:12 , color:'#ffffff' }} >₹2000</Text>
              <Text style={{fontFamily:'AirbnbCereal', fontSize:10 , color:'#ffffff', opacity:0.5 }} >DUE</Text>
            </View>
            

          </View>

          <View style={{alignItems:'center',backgroundColor:'#FFFFFF' , height:32, width:200, marginTop:-16, borderBottomRightRadius:10, borderBottomLeftRadius:10 }} >
            <Text style={{fontFamily:'AirbnbCereal', fontSize:12 , color:'#2A6DDB', marginTop:5  }} >VIEW USAGE</Text>
          </View>
          
        </View>
        
      </View>    
  );
}



const styles = StyleSheet.create({

  /* Top portion styles start */
  TopPortion:{
    backgroundColor:'#2A6DDB',
  },

  row1:{
    flexDirection:'row',alignItems: 'center', justifyContent: 'space-between' ,paddingTop:58,padding:38,  
  },
  row2:{ 
    marginTop:200,
    width:screen.width,
    flexDirection:'row',justifyContent:'space-between', 
    position:'absolute'
  },


  /* Top portion styles end */


});