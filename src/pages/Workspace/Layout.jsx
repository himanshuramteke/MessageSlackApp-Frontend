import { WorkspaceNavbar } from '@/components/organisms/Workspace/WorkspaceNavbar';
import { WorkspaceSideBar } from '@/components/organisms/Workspace/WorkspaceSideBar';

export const WorkspaceLayout = ({ children }) => {
    return (
        <div className="h-[100vh]">
            <WorkspaceNavbar />
          <div className="flex h-[calc(100vh-40px)]">
            <WorkspaceSideBar />
            {children}
          </div>
        </div>
    );
};