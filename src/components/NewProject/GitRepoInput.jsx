import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Github, GitBranch } from 'lucide-react';
import './styles/GitRepoInput.css';

export function GitRepoInput({ onConnect, repoUrl, setRepoUrl }) {
    return (
        <motion.div
            className="repo-container"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
        >
            <div className="button-group">
                <motion.button
                    className="repo-button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <GitBranch className="w-5 h-5" />
                    Public Git Repository
                </motion.button>
            </div>

            <div className="input-container">
                <Globe className="input-icon" />
                <input
                    type="text"
                    value={repoUrl}
                    onChange={(e) => setRepoUrl(e.target.value)}
                    placeholder="https://github.com/username/repository"
                    className="repo-input"
                />
                <div className="connect-button-container">
                    <motion.div
                        whileHover={repoUrl ? { scale: 1.02 } : {}}
                        whileTap={repoUrl ? { scale: 0.98 } : {}}
                    >
                        <button
                            onClick={() => onConnect(repoUrl)}
                            disabled={!repoUrl}
                            className={`connect-button ${repoUrl ? 'enabled' : 'disabled'}`}
                        >
                            Connect →
                        </button>
                    </motion.div>
                </div>
            </div>

            <motion.button
                className="github-link"
                whileHover={{ x: 4 }}
            >
                <Github className="w-5 h-5" />
                <span>Import from GitHub</span>
            </motion.button>
        </motion.div>
    );
}