import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity as T,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../routes/ContainerStack";
import { ChatType } from "../store/api/apiSlice";


type Props = {
  chatData: ChatType;
  navigation: StackNavigationProp<RootStackParamList, any, any>;
};


const SingleChat = ({ chatData, navigation }: Props) => {
  const goToChatDetails = () => {
    navigation.navigate("ChatDetails", { chat: chatData});
  };

  return (
    <View style={styles.chat}>
      <Image style={styles.chatImage} source={require("../assets/images/profile.jpg")} />
      <T onPress={goToChatDetails} style={styles.content}>
        <View>
          <Text style={styles.chatName}>{chatData.chat_name}</Text>
          <Text>
            {chatData.messages[0].sender}: {chatData.messages[0].text}
          </Text>
        </View>
        <Text style={styles.sendTime}>{chatData.messages[0].created_at}</Text>
      </T>
    </View>
  );
};



const styles = StyleSheet.create({
  chat: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  content: {
    width: "78%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  chatName: {
    fontWeight: "bold",
    fontSize: 14,
  },
  chatImage: {
    width: 50,
    height: 50,
    borderRadius: 998,
  },
  sendTime: {
    textAlignVertical: "top",
    fontSize: 10,
  },
});

export default SingleChat;
