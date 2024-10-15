import { StyleSheet, 
        Dimensions 
    } from "react-native"; 

const styles = StyleSheet.create({
    container:{
      width: '100%',
      
      padding: 20,
    },
    tittle:{
      fontSize: 20,
      color: '#6f6f6f',
    },
    texto:{
      fontSize: 16,
      color: '#6f6f6f',
      textDecorationLine: 'line-through',
    },
    textoDone:{
      fontSize: 16,
      color: '#6f6f6f',
    },
    whiteText:{
      fontSize: 16,
      color: '#FFF',
    },
    textInput:{
      borderColor: '#A9A9A9',
      color: '#333', // Color de texto visible en el campo de entrada
      borderWidth: 1,
      width: Dimensions.get('screen').width * 0.6,
      borderRadius: 15,
      paddingLeft: 15,
    },
    inputContainer:{
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      //placeholderTextColor: '#A9A9A9',
    },
    addButton:{
      width: Dimensions.get('screen').width * 0.25,
      backgroundColor: '#5897fb',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
    },
    scrollContainer:{
      marginTop: 20,
    },
    itemContainer: {
      paddingVertical: 20,
      borderBottomColor: "#e4e4e4",
      borderBottomWidth: 1,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    removeButton: {
      backgroundColor: '#F33D3D',
      alignContent: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      paddingHorizontal: 15,
  
    },
  });

  export default styles;