import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type StackParamList = {
  Home: undefined;
  Chat: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<StackParamList, "Home">;
export type ChatScreenProps = NativeStackScreenProps<StackParamList, "Chat">;
