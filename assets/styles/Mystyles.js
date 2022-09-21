import { StyleSheet } from "react-native";

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  texts:{
    fontSize:18,
    fontWeight:'bold',
    color:'red'
  },
  alignViews:{
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const viewsChilds = StyleSheet.create({
  views:{
    width:'80%',
    marginLeft:'5%',
    marginTop:10,
    borderRadius:10,
  }
})

export {styles1, viewsChilds}