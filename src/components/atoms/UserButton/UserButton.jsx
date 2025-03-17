import {  LogOutIcon, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useAuth } from '@/hooks/context/useAuth';

export const UserButton = () => {

    const navigate = useNavigate();

    const { auth, logout } = useAuth();

    async function handleLogout() {
      await logout();
      toast.success('Successfully Logout',{
      });
      navigate('/auth/signin');
    }

    return (
       <DropdownMenu>
          <DropdownMenuTrigger className='outline-none relative'>
             <Avatar className='size-10 hover:opacity-65 transition'>
               <AvatarImage src={auth?.user?.avatar} />
               <AvatarFallback>{auth?.user?.username[0].toUpperCase()}</AvatarFallback>
             </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
                <Settings className='size-4 mr-2 h-10' />
                Settings
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogout}>
                <LogOutIcon className='size-4 mr-2 h-10'/>
                Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
       </DropdownMenu>
    );
};  