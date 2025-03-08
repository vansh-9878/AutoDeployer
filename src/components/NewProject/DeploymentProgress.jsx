import React from 'react';
import { CheckCircle, Loader2 } from 'lucide-react';

export function DeploymentProgress() {
    const [steps] = React.useState([
        { name: 'Import', status: 'completed' },
        { name: 'Test', status: 'loading' },
        { name: 'Deploy', status: 'pending' },
    ]);

    return (
        <div className="w-full max-w-3xl mx-auto mt-8">
            <div className="flex justify-between items-center">
                {steps.map((step, index) => (
                    <React.Fragment key={step.name}>
                        <div className="flex flex-col items-center">
                            {step.status === 'completed' && (
                                <CheckCircle className="w-8 h-8 text-green-500 animate-appear" />
                            )}
                            {step.status === 'loading' && (
                                <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
                            )}
                            {step.status === 'pending' && (
                                <div className="w-8 h-8 rounded-full border-2 border-gray-200" />
                            )}
                            <span className="mt-2 font-medium text-sm">
                                {step.name}
                            </span>
                        </div>
                        {index < steps.length - 1 && (
                            <div className="flex-1 h-0.5 mx-4 bg-gray-200">
                                <div
                                    className="h-full bg-green-500 transition-all duration-500"
                                    style={{
                                        width: step.status === 'completed' ? '100%' : '0%',
                                    }}
                                />
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}