import React, { useState } from 'react';
import { ChevronDown, Trash2, Wand2 } from 'lucide-react';

export function ProjectForm({ onDeploy }) {
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
        <div className="w-full max-w-3xl mx-auto mt-8 space-y-6">
            <h2 className="text-2xl font-semibold mb-4">You are deploying a Web Service</h2>
            <p className="text-gray-600">
                You seem to be using Python, so we've autofilled some fields accordingly. Make sure the values look right to you!
            </p>

            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="A unique name for your web service"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
                    <div className="relative">
                        <select
                            value={formData.language}
                            onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none"
                        >
                            <option>Python 3</option>
                            <option>Node</option>
                            <option>Rust</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Branch</label>
                    <div className="relative">
                        <select
                            value={formData.branch}
                            onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none"
                        >
                            <option>main</option>
                            <option>develop</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Build Command</label>
                    <input
                        type="text"
                        value={formData.buildCommand}
                        onChange={(e) => setFormData({ ...formData, buildCommand: e.target.value })}
                        placeholder="$ pip install -r requirements.txt"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent font-mono text-sm"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Start Command</label>
                    <input
                        type="text"
                        value={formData.startCommand}
                        onChange={(e) => setFormData({ ...formData, startCommand: e.target.value })}
                        placeholder="$ gunicorn your_application.wsgi"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent font-mono text-sm"
                    />
                </div>

                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium">Environment Variables</h3>
                        <div className="flex gap-2">
                            <button
                                onClick={addEnvVar}
                                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
                            >
                                Add Environment Variable
                            </button>
                            <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">
                                Add from .env
                            </button>
                        </div>
                    </div>

                    {envVars.map((envVar, index) => (
                        <div key={index} className="flex gap-4 items-start">
                            <input
                                type="text"
                                value={envVar.name}
                                onChange={(e) => updateEnvVar(index, 'name', e.target.value)}
                                placeholder="NAME_OF_VARIABLE"
                                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent font-mono text-sm"
                            />
                            <div className="flex-1 relative">
                                <input
                                    type="text"
                                    value={envVar.value}
                                    onChange={(e) => updateEnvVar(index, 'value', e.target.value)}
                                    placeholder="value"
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent font-mono text-sm"
                                />
                                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-2">
                                    <button className="p-1 text-gray-400 hover:text-purple-600">
                                        <Wand2 className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => removeEnvVar(index)}
                                        className="p-1 text-gray-400 hover:text-red-600"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="pt-4">
                    <button
                        onClick={onDeploy}
                        disabled={!formData.name || !formData.buildCommand || !formData.startCommand}
                        className={`w-full px-6 py-3 rounded-lg ${formData.name && formData.buildCommand && formData.startCommand
                            ? 'bg-purple-600 hover:bg-purple-700'
                            : 'bg-gray-200'
                            } text-white font-medium transition-colors`}
                    >
                        Deploy Web Service
                    </button>
                </div>
            </div>
        </div>
    );
}