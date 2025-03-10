import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Loader2, XCircle } from 'lucide-react';

export function DeploymentProgress() {
    const [steps] = React.useState([
        { name: 'Import', status: 'completed' },
        { name: 'Test', status: 'loading' },
        { name: 'Deploy', status: 'pending' },
    ]);

    return (
        <div className="w-full">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-bold text-gray-900 text-center mb-8"
            >
                Deploying Your Project
            </motion.h2>

            <div className="flex justify-between items-center relative">
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
                    <div className="h-1 w-full bg-gray-200 rounded">
                        <motion.div
                            className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded"
                            initial={{ width: '0%' }}
                            animate={{ width: '33%' }}
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                        />
                    </div>
                </div>

                {steps.map((step, index) => (
                    <motion.div
                        key={step.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="flex flex-col items-center relative z-10"
                    >
                        <motion.div
                            className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${step.status === 'completed' ? 'bg-green-500' :
                                step.status === 'loading' ? 'bg-white' :
                                    'bg-white'
                                }`}
                            whileHover={{ scale: 1.1 }}
                            initial={step.status === 'completed' ? { scale: 0.5 } : { scale: 1 }}
                            animate={step.status === 'completed' ? { scale: 1 } : { scale: 1 }}
                            transition={{ type: 'spring', stiffness: 200 }}
                        >
                            {step.status === 'completed' && (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: 'spring', stiffness: 200 }}
                                >
                                    <CheckCircle className="w-6 h-6 text-white" />
                                </motion.div>
                            )}
                            {step.status === 'loading' && (
                                <motion.div
                                    animate={{
                                        rotate: 360,
                                        borderColor: ['rgba(147, 51, 234, 0.2)', 'rgba(147, 51, 234, 1)', 'rgba(147, 51, 234, 0.2)']
                                    }}
                                    transition={{
                                        rotate: { duration: 1.5, repeat: Infinity, ease: 'linear' },
                                        borderColor: { duration: 1.5, repeat: Infinity }
                                    }}
                                    className="w-8 h-8 border-4 border-purple-600/20 border-t-purple-600 rounded-full"
                                />
                            )}
                            {step.status === 'pending' && (
                                <div className="w-3 h-3 rounded-full bg-gray-300" />
                            )}
                        </motion.div>
                        <motion.div
                            className="mt-4 flex flex-col items-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.2 + 0.2 }}
                        >
                            <span className="font-medium text-gray-900">{step.name}</span>
                            <span className="text-sm text-gray-500">
                                {step.status === 'completed' && 'Completed'}
                                {step.status === 'loading' && 'In Progress'}
                                {step.status === 'pending' && 'Waiting'}
                            </span>
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="mt-12 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                <p className="text-gray-700 font-medium">Building and testing your application...</p>
                <p className="text-sm text-gray-500 mt-2">This might take a few minutes</p>
                <motion.div
                    className="w-full max-w-xs mx-auto h-1 bg-gray-100 rounded-full mt-6 overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <motion.div
                        className="h-full bg-gradient-to-r from-purple-600 to-purple-400"
                        animate={{
                            x: ['0%', '100%'],
                            width: ['10%', '30%']
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut'
                        }}
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}