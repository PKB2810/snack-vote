import React from "react";
import { View } from "react-native";
import TextBox from "../TextBox";
import TextContent from "../TextContent";
import NotifyBtn from "../NotifyBtn";

const adminPageStyle = StyleSheet.create({
  adminParent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }
});
class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      snackName: "",
      noOfVotes: 0
    };
  }

  setSnack = text => {
    this.setState({
      snackName: text
    });
  };

  onNotify = () => {
    //post snack name
  };

  render() {
    return <View />;
  }
}

export default AdminPage;
