import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Trash2, Wand2, Package, Terminal, GitBranch, Variable } from 'lucide-react';

export function ProjectForm({ onDeploy, isActive }) {
    const [formData, setFormData] = useState({
        name: '',
        language: 'Python 3',
        branch: 'main',
        buildCommand: '',
        startCommand: '',
    });

    const [envVars, setEnvVars] = useState([]);

    const addEnvVar = () => {
        setEnvVars([...envVars, { name: '', value: '' }]);
    };

    const removeEnvVar = (index) => {
        setEnvVars(envVars.filter((_, i) => i !== index));
    };

    const updateEnvVar = (index, field, value) => {
        const newEnvVars = [...envVars];
        newEnvVars[index] = { ...newEnvVars[index], [field]: value };
        setEnvVars(newEnvVars);
    };

    return (
        <motion.div
            className={`w-full max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 ${!isActive ? 'opacity-50 pointer-events-none' : ''
                }`}
            initial={false}
            animate={isActive ? { y: 0, opacity: 1 } : { y: 20, opacity: 0.5 }}
            transition={{ duration: 0.4 }}
        >
            <motion.h2
                className="text-2xl font-semibold mb-4 text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                Configure Your Web Service
            </motion.h2>
            <motion.p
                className="text-gray-300 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                We've detected Python in your repository. Let's set up your deployment configuration.
            </motion.p>

            <div className="space-y-6">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <label className="block text-sm font-medium text-gray-300 mb-2">Project Name</label>
                    <div className="relative">
                        <Package className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="my-awesome-project"
                            className="w-full pl-12 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="grid grid-cols-2 gap-6"
                >
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Language</label>
                        <div className="relative">
                            <select
                                value={formData.language}
                                onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                                className="w-full pl-4 pr-10 py-3 rounded-xl bg-white/5 border border-white/10 text-white appearance-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            >
                                <option>Python 3</option>
                                <option>Node</option>
                                <option>Rust</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Branch</label>
                        <div className="relative">
                            <GitBranch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
                            <select
                                value={formData.branch}
                                onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                                className="w-full pl-12 pr-10 py-3 rounded-xl bg-white/5 border border-white/10 text-white appearance-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            >
                                <option>main</option>
                                <option>develop</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <label className="block text-sm font-medium text-gray-300 mb-2">Build Command</label>
                    <div className="relative">
                        <Terminal className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
                        <input
                            type="text"
                            value={formData.buildCommand}
                            onChange={(e) => setFormData({ ...formData, buildCommand: e.target.value })}
                            placeholder="$ pip install -r requirements.txt"
                            className="w-full pl-12 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent font-mono text-sm"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                >
                    <label className="block text-sm font-medium text-gray-300 mb-2">Start Command</label>
                    <div className="relative">
                        <Terminal className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
                        <input
                            type="text"
                            value={formData.startCommand}
                            onChange={(e) => setFormData({ ...formData, startCommand: e.target.value })}
                            placeholder="$ gunicorn your_application.wsgi"
                            className="w-full pl-12 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent font-mono text-sm"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="space-y-4"
                >
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2 text-white">
                            <Variable className="w-5 h-5" />
                            <h3 className="text-lg font-medium">Environment Variables</h3>
                        </div>
                        <div className="flex gap-2">
                            <motion.button
                                onClick={addEnvVar}
                                className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Add Variable
                            </motion.button>
                            <motion.button
                                className="px-4 py-2 rounded-lg bg-white/5 text-gray-300 hover:bg-white/10 transition-colors"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Import .env
                            </motion.button>
                        </div>
                    </div>

                    <motion.div className="space-y-4">
                        {envVars.map((envVar, index) => (
                            <motion.div
                                key={index}
                                className="flex gap-4 items-start"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                            >
                                <input
                                    type="text"
                                    value={envVar.name}
                                    onChange={(e) => updateEnvVar(index, 'name', e.target.value)}
                                    placeholder="NAME_OF_VARIABLE"
                                    className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent font-mono text-sm"
                                />
                                <div className="flex-1 relative">
                                    <input
                                        type="text"
                                        value={envVar.value}
                                        onChange={(e) => updateEnvVar(index, 'value', e.target.value)}
                                        placeholder="value"
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent font-mono text-sm"
                                    />
                                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-2">
                                        <motion.button
                                            className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-purple-400"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <Wand2 className="w-4 h-4" />
                                        </motion.button>
                                        <motion.button
                                            onClick={() => removeEnvVar(index)}
                                            className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-red-400"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="pt-6"
                >
                    <motion.button
                        onClick={onDeploy}
                        disabled={!formData.name || !formData.buildCommand || !formData.startCommand}
                        className={`w-full px-6 py-4 rounded-xl ${formData.name && formData.buildCommand && formData.startCommand
                                ? 'bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900'
                                : 'bg-gray-700 cursor-not-allowed'
                            } text-white font-medium transition-all`}
                        whileHover={
                            formData.name && formData.buildCommand && formData.startCommand
                                ? { scale: 1.02 }
                                : {}
                        }
                        whileTap={
                            formData.name && formData.buildCommand && formData.startCommand
                                ? { scale: 0.98 }
                                : {}
                        }
                    >
                        Deploy Web Service
                    </motion.button>
                </motion.div>
            </div>
        </motion.div>
    );
}