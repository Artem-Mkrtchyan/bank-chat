import { io } from "socket.io-client";


type TData = {
  wss: string
  jwtToken: string
}

const soketAPI = {
  openSoket(data: TData) {
    const socket = io(data.wss, {
      auth: {
        'Authorization': `Bearer ${data.jwtToken}`,
      }
    });
  }
}
