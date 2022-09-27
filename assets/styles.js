import { StyleSheet, StatusBar} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    items: {
      flexGrow: 1,
      backgroundColor: '#fcfcfc',
      padding: 20,
      margin: 5,
    },
    itemName: {
      fontWeight: 'bold',
      fontSize: 16,
      color: '#444054',
      paddingTop: 5
    },
    itemCategory:{
      fontSize: 12,
      color: '#92909A'
    },
    itemPrice: {
      padding: 5,
      fontWeight: 'small',
      fontSize: 14,
      color: '#24AE92'
    },
    image:{
      borderRadius: 5,
      padding: 10,
      wdth: 200,
      height: 200
    }
  });

  export default styles