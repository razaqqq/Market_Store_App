import { StyleSheet, Platform, StatusBar } from "react-native";

export const colors = {
  color1: "#c70049",
  color1_light1: "rgba(227,25,99,1)",
  color1_light2: "rgba(199,0,73,0.8)",
  color2: "white",
  color3: "rgb(45,45,45)",
  color4: "transparent",
  color5: "#f2f2f2",
  color6: "#f7f7f7",
  color7: "#DC6B19",
  color8: "#FFA62F",
  greenLight: "#9DDE8B",
  greenMedium: "#40A578",
  lightMedium: "#EEEEEE",

  transparentCustom: "rgba(255, 255, 255, 0)",
  modalTransparentBackground: "rgba(52, 52, 52, 0.6)",
};

export const defaultStyle = StyleSheet.create({
  padding: 35,
  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  flex: 1,
  backgroundColor: colors.color2,
});

export const inputStyle = StyleSheet.create({
  height: 50,
  backgroundColor: colors.color2,
  marginVertical: 10,
  marginHorizontal: 20,
});

export const formHeading = {
  fontSize: 25,
  fontWeight: "500",
  textAlign: "center",
  backgroundColor: colors.color3,
  color: colors.color2,
  padding: 5,
  borderRadius: 5,
};

export const inputOptions = {
  style: inputStyle,
  mode: "outlined",
  activeOutlineColor: colors.color1,
};

export const formStyles = StyleSheet.create({
  heading: {
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
    backgroundColor: colors.color3,
    color: colors.color2,
    padding: 5,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    padding: 20,
    borderRadius: 10,
    backgroundColor: colors.color3,
    borderRadius: 10,
    justifyContent: "center",
    elevation: 10,
  },
  forget: {
    color: colors.color2,
    marginHorizontal: 20,
    marginVertical: 10,
    alignSelf: "flex-end",
    fontWeight: "100",
  },
  button: {
    backgroundColor: colors.color1,
    marginTop: 20,
    padding: 6,
    marginHorizontal: 50,
    marginBottom: 10,
  },
  or: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "100",
    color: colors.color2,
  },
  link: {
    color: colors.color2,
    fontSize: 18,
    textTransform: "uppercase",
    marginVertical: 10,
    marginHorizontal: 20,
  },
});

export const defaultImage =
  "https://www.thewall360.com/uploadImages/ExtImages/images1/def-638240706028967470.jpg";
