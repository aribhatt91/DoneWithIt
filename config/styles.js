import { Platform } from "react-native";

export default {
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    textSize: 14,
    subtextSize: 12,
    subheaderSize: 18,
    headerSize: 22
}