import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Github, GitBranch } from 'lucide-react';

export function GitRepoInput({ onConnect, repoUrl, setRepoUrl }) {
    return (
        <motion.div
            className="w-full max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
        >
            <div className="flex gap-4 mb-6">
                <motion.button
                    className="px-6 py-3 rounded-xl bg-purple-600 text-white font-medium flex items-center gap-2 transition-colors"
                    whileHover={{
                        backgroundColor: "rgb(126 34 206)",
                        scale: 1.02,
                        transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.98 }}
                >
                    <GitBranch className="w-5 h-5" />
                    Public Git Repository
                </motion.button>
            </div>

            <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <Globe className="w-5 h-5 text-purple-400" />
                </div>
                <input
                    type="text"
                    value={repoUrl}
                    onChange={(e) => setRepoUrl(e.target.value)}
                    placeholder="https://github.com/username/repository"
                    className="w-full pl-12 pr-32 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2">
                    <motion.div
                        whileHover={repoUrl ? {
                            scale: 1.02,
                            transition: { duration: 0.2 }
                        } : {}}
                        whileTap={repoUrl ? { scale: 0.98 } : {}}
                        className="inline-block"
                    >
                        <button
                            onClick={() => onConnect(repoUrl)}
                            disabled={!repoUrl}
                            className={`px-6 py-2 rounded-lg ${repoUrl ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-700 cursor-not-allowed'} text-white font-medium transition-colors`}
                        >
                            Connect →
                        </button>
                    </motion.div>
                </div>


            </div>

            <div className="mt-6">
                <motion.button
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    whileHover={{ x: 4 }}
                >
                    <Github className="w-5 h-5" />
                    <span>Import from GitHub</span>
                </motion.button>
            </div>
        </motion.div>
    );
}