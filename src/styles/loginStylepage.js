import { StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: '#110897'
     
    },
    containerLogo:{
      flex:1,
      backgroundColor:'#000083',
      justifyContent:'center',
      alignItems:'center',
      borderBottomRightRadius: 65,
      borderBottomLeftRadius: 65
      
  
    },
    containerForm:{
      flex:5,
      paddingStart: '5%',
      paddingEnd: '5%',
      borderBottomRightRadius: 65,
      borderBottomLeftRadius: 65,
      backgroundColor: '#110897'
    },
    frase:{
      fontSize: 85,
      fontWeight: 'bold',
      marginTop: 30,
      marginBottom: 15,
      color:'#ffff'
  
    },
    frase2:{
      fontSize: 50,
      fontWeight: 'bold',
      color:'#ffff'
    },
    buttonLogar:{
      position: 'absolute',
      backgroundColor: '#ffff',
      borderRadius: 5,
      paddingVertical: 8,
      width: '94%',
      alignSelf: 'center',
      bottom: '10%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonLogarText:{
      fontSize: 20,
      color: '#000083',
      fontWeight: 'bold'
    },
    cadastrarForm:{
      flex:2,
      backgroundColor:'#FFFF',
      justifyContent:'center',
      alignItems:'center'
  
    },
    buttonCadastrarText:{
      fontSize: 20,
      color: '#ffff',
      fontWeight: 'bold'
    },
    buttonCadastrar:{
      backgroundColor: '#000083',
      position: 'absolute',
      borderRadius: 5,
      paddingVertical: 8,
      width: '94%',
      alignSelf: 'center',
      bottom: '35%',
      alignItems: 'center',
      justifyContent: 'center'
  
    },
    inputEmail:{
      backgroundColor: '#ffff',
      height: 40,
      borderRadius: 20,
      fontSize: 21,
      padding: 5,
      marginBottom: 22,
      marginTop: 35,
      width: '94%',
      fontWeight: 'bold',
  
      
    },
    inputPassword:{
      backgroundColor: '#ffff',
      height: 40,
      borderRadius: 20,
      fontSize: 21,
      padding: 5,
      marginBottom: 22,
      width: '94%',
      fontWeight: 'bold',
    }
  })

  