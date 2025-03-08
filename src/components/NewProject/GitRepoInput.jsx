import React, { useState } from 'react';
import { Globe, Github } from 'lucide-react';

export function GitRepoInput({ onConnect, repoUrl, setRepoUrl }) {
    return (
        <div className="w-full max-w-3xl mx-auto bg-black/5 backdrop-blur-lg rounded-lg p-6">
            <div className="flex gap-4 mb-4">
                <button className="px-4 py-2 rounded-lg bg-purple-600 text-white font-medium">
                    Public Git Repository
                </button>
                <button className="px-4 py-2 rounded-lg bg-black/10 text-gray-700 font-medium">
                    Existing Image
                </button>
            </div>

            <p className="text-gray-500 text-sm mb-4">
                PR Previews and Auto-Deploy are available only for repositories configured with render.yaml!
            </p>

            <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <Globe className="w-5 h-5 text-gray-400" />
                </div>
                <input
                    type="text"
                    value={repoUrl}
                    onChange={(e) => setRepoUrl(e.target.value)}
                    placeholder="https://github.com/username/repository"
                    className="w-full pl-12 pr-32 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button
                    onClick={() => onConnect(repoUrl)}
                    disabled={!repoUrl}
                    className={`absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 rounded-lg ${repoUrl ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-400'
                        } font-medium transition-colors`}
                >
                    Connect →
                </button>
            </div>

            <div className="mt-4">
                <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
                    <Github className="w-5 h-5" />
                    <span>Import from GitHub</span>
                </button>
            </div>
        </div>
    );
}