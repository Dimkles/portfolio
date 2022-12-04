import React, { FC } from 'react';
import ProjectsAdminPanel from '../projects/ProjectsAdminPanel';
import TechnologiesAdminPanel from '../technologies/TechnologiesAdminPanel';
import './ContentAdminPanel.scss'


interface ContentAdminPanelProps {
    contentActive: string
}

const ContentAdminPanel: FC<ContentAdminPanelProps> = ({ contentActive }) => {
    return (
        <div className='ContentAdminPanel'>
            {contentActive === 'projects' && <ProjectsAdminPanel />}
            {contentActive === 'technologies' && <TechnologiesAdminPanel />}
        </div>
    );
};

export default ContentAdminPanel;