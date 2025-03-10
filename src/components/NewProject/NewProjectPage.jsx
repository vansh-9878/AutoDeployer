import React, { useState } from 'react';
import { GitRepoInput } from './GitRepoInput';
import { ProjectForm } from './ProjectForm';
import { DeploymentProgress } from './DeploymentProgress';

export function NewProjectPage() {
    const [repoUrl, setRepoUrl] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [showProgress, setShowProgress] = useState(false);

    const handleConnect = () => {
        setShowForm(true);
    };

    const handleDeploy = () => {
        setShowProgress(true);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <GitRepoInput
                onConnect={handleConnect}
                repoUrl={repoUrl}
                setRepoUrl={setRepoUrl}
            />
            {showForm && <ProjectForm onDeploy={handleDeploy} />}
            {showProgress && <DeploymentProgress />}
        </div>
    );
}