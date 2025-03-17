import { useEffect } from 'react';

import { UserButton } from '@/components/atoms/UserButton/UserButton';
import { useFetchWorkspace } from '@/hooks/apis/workspaces/useFetchWorkspace';

export const Home = () => {

    const { isFetching, workspaces } = useFetchWorkspace();

    useEffect(() => {
      
       if(isFetching) return;

       console.log('Workspace downloaded is', workspaces);

       if(workspaces.length === 0 || !workspaces) {
        console.log('No workspaces found, please create one');       
       }
       
    }, [isFetching, workspaces]);

    return (
        <>
         <h1>Home</h1>
         <UserButton /> 
        </>
    );
};