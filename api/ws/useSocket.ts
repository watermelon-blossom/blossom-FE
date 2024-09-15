import { useEffect, useRef, useState } from "react";
import { TOKEN } from "../axiosInstance";
import { Socket, io } from "socket.io-client";
import { SOCKET_EVENTS } from "@/constants/socketEvents";

export default function useSocket(roomId: string) {
  const socket = useRef<Socket | null>(
    io(`${process.env.EXPO_PUBLIC_WS_BASE_URL}`, {
      autoConnect: false,
      forceNew: false,
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 2000,
      requestTimeout: 5000,
      reconnectionAttempts: 3,
      transports: ["websocket"],
      protocols: ["websocket"],
      auth: {
        token: `Bearer ${TOKEN}`,
      },
    })
  ).current;

  useEffect(() => {
    if (!socket) return;

    // basic handler
    socket.on(SOCKET_EVENTS.CONNECT, () => {
      console.log("connect", "소켓에 연결되었습니다!", socket.id);

      console.log(`try to join ${roomId}`);

      socket.emit("join", { roomId }, (res: any) => {
        console.log("join", res);
      });
    });

    socket.on(SOCKET_EVENTS.CONNECT_ERROR, (error: unknown) => {
      console.log("connect_error", "소켓 연결에 실패했습니다.");
      console.log(JSON.stringify(error));
    });

    socket.on(SOCKET_EVENTS.DISCONNECT, () => {
      console.log("disconnect", "소켓 연결이 끊겼습니다.");
      socket.removeAllListeners();
    });

    // socket.on("error", (error: unknown) => {
    //   console.log("error", "소켓에러 발생했습니다.");
    // });

    // service handler

    socket.on(SOCKET_EVENTS.BROADCAST, (data: any) => {
      console.log("broadcast", data);
    });

    // connect
    console.log("소켓 연결을 시도합니다.");

    socket.connect();

    return () => {
      console.log("소켓 연결을 끊습니다.");
      socket.disconnect();
    };
  }, []);

  return socket;
}
