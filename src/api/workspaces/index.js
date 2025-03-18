import axios from '@/config/axiosConfig';

export const createWorkspaceRequest = async ({ name, description, token }) => {
    try {
        const response = await axios.post('/workspaces', { name, description },{
            headers: {
                'x-access-token': token
            }
        });
        console.log('Response in create workspace request', response);
        return response?.data?.data;

    } catch (error) {
        console.log('Error in create workspace request', error);
        throw error.response.data;
    }
};

export const fetchworkspaceRequest = async ({ token }) => {
    if(!token) throw new Error('No auth token provided');

    try {
        const response = await axios.get('/workspaces',{
            headers: {
                'x-access-token': token
            }
        });
        console.log('Response in fetching workspace request', response);
        return response?.data?.data;
        
    } catch (error) {
        console.log('Error in fetching workspace request', error);
        throw error.response.data;
    }
};


export const fetchWorkspaceDetailsRequest = async ({ workspaceId, token }) => {
    console.log('Workspace ID before sending request:', workspaceId, typeof workspaceId);

    if (typeof workspaceId === 'object' && workspaceId?._id) {
        workspaceId = workspaceId._id.toString(); // Extract _id if it's an object
    }

    try {
        const response = await axios.get(`/workspaces/${workspaceId}`, {
            headers: {
                'x-access-token': token
            }
        });
        console.log('Response in fetching workspace details request', response);
        return response?.data?.data;
    } catch (error) {
        console.log('Error in fetching workspace details request', error);
        throw error.response.data;
    }
};