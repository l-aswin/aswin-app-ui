import { StyleSheet } from "react-native";

export default StyleSheet.create({

  logincontainer: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:15
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    backgroundColor: "white",
    justifyContent: "center"
  },
  box: {
    width: 300,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "darkslategray"
    },
  boxText: {
    color: "darkslategray",
    fontWeight: "bold",
    fontSize:22,
    },
  profilebox: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding:30,
    alignItems: "center",
    width: '100%',
    height: 40,
    backgroundColor: "#F8F8F8",
    marginTop:23,
  },
  infoText: {
    color: "black",
    fontWeight: "bold",
    fontSize:23,
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop:23,

  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 2,
  },
   
   
});
