import { createContext, useState } from 'react';

const CreateChannelContext = new createContext();

export const CreateChannelContextProvider = ({ children }) => {

    const [openCreateWorkspaceModal, setOpenCreateWorkspaceModal] = useState(false);

    return (
        <CreateChannelContext.Provider
           value={{ openCreateWorkspaceModal, setOpenCreateWorkspaceModal }}
        >
          {children}
        </CreateChannelContext.Provider>
    );
};

export default CreateChannelContext;