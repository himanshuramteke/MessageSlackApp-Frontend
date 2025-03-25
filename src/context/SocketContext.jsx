import { createContext, useState } from 'react';
import { io } from 'socket.io-client';

import { useGetChannelMessages } from '@/hooks/apis/channels/useGetChannelMessages';

const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {

  const [currentChannel, setCurrentChannel] = useState(null);
  const { messageList, setMessageList } = useGetChannelMessages();

    const socket = io(import.meta.env.VITE_BACKEND_SOCKET_URL);

    socket.on('NewMessageReceived', (data) => {
      console.log('New message received',data);
      setMessageList([...messageList, data]);
    });

    async function joinChannel(channelId) {
      socket.emit('JoinChannel', { channelId }, (data) => {
          console.log('Successfully joined the channel', data);
          setCurrentChannel(data?.data);
      });
    }

    return (
        <SocketContext.Provider value={{socket, joinChannel, currentChannel}}>
          {children}
        </SocketContext.Provider>
    );
};

export default SocketContext;