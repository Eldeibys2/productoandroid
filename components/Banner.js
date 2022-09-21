import { StyleSheet, Text, View } from "react-native";
import {styles1,viewsChilds} from '../assets/styles/Mystyles';
//export default function Banner(){
const Banner = () =>{
    return(
        <View style={[viewsChilds.views,styles1.alignViews,{flex:1, backgroundColor:'yellow'}]}>
            <Text>Banner</Text>
        </View>
    );
}

export default Banner;