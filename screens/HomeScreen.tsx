import { Text, View } from "react-native";
import { HomeScreenProps } from "../types/navigation";
import { ChatSocketProvider } from "../hooks/useChatSocket";

export default function HomeScreen({ navigation, route }: HomeScreenProps) {
  return (
    <ChatSocketProvider>
      <View>
        <Text>Home Screen</Text>
      </View>
    </ChatSocketProvider>
  );
}
