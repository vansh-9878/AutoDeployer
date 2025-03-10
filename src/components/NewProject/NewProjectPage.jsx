import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 py-12 px-4">
            <div className="max-w-6xl mx-auto space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl font-bold text-white text-center mb-2">Deploy Your Project</h1>
                    <p className="text-gray-300 text-center mb-8">Get your application up and running in minutes</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <GitRepoInput
                        onConnect={handleConnect}
                        repoUrl={repoUrl}
                        setRepoUrl={setRepoUrl}
                    />
                </motion.div>

                <AnimatePresence>
                    {!showProgress && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className={!showForm ? 'opacity-50 pointer-events-none' : ''}
                        >
                            <ProjectForm onDeploy={handleDeploy} isActive={showForm} />
                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {showProgress && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.5 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
                        >
                            <motion.div
                                initial={{ y: 20 }}
                                animate={{ y: 0 }}
                                className="bg-white rounded-xl p-8 w-full max-w-3xl mx-4"
                            >
                                <DeploymentProgress />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}