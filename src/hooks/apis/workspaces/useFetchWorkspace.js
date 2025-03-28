import { useQuery } from '@tanstack/react-query';

import { fetchworkspaceRequest } from '@/apis/workspaces';
import { useAuth } from '@/hooks/context/useAuth';

export const useFetchWorkspace = () => {
    const { auth } = useAuth();

    const { isFetching, isSuccess, error, data: workspaces } =  useQuery({
        queryFn: () => fetchworkspaceRequest({ token: auth?.token }),
        queryKey: ['fetchWorkspaces'],
        staleTime: 30000
    });

    return {
        isFetching,
        isSuccess,
        error,
        workspaces
    };
};