import { WorkspaceSideBar } from '@/components/organisms/Workspace/WorkspaceSideBar';

export const WorkspaceLayout = ({ children }) => {
    return (
        <div className="h-[100vh]">
          <div className="flex h-full">
            <WorkspaceSideBar />
            {children}
          </div>
        </div>
    );
};