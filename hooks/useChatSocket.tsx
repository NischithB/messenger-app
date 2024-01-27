import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Platform, ToastAndroid } from "react-native";
import { Socket, io } from "socket.io-client";

const ChatSocketContext = createContext<Socket | null>(null);

export function ChatSocketProvider({ children }: PropsWithChildren) {
  const [socket, setSocket] = useState<Socket>(null);

  useEffect(() => {
    const socket = io("http://192.168.0.103:3000");
    setSocket(socket);

    socket.on("connect", () => {
      console.log("Chat Socket Connected");
      if (Platform.OS === "android") {
        ToastAndroid.show("Connected", ToastAndroid.SHORT);
      }
    });

    socket.on("disconnect", (reason, description) => {
      console.log(`Chat Socket Disconnected\n${reason}: ${description}`);
      if (Platform.OS === "android") {
        ToastAndroid.show("Disconnected", ToastAndroid.SHORT);
      }
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <ChatSocketContext.Provider value={socket}>
      {children}
    </ChatSocketContext.Provider>
  );
}

export default function useChatSocket() {
  return useContext(ChatSocketContext);
}
