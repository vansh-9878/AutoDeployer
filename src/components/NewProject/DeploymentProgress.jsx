import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Loader2, XCircle } from 'lucide-react';
import './styles/DeploymentProgress.css';

export function DeploymentProgress() {
    const [steps] = React.useState([
        { name: 'Import', status: 'completed' },
        { name: 'Test', status: 'loading' },
        { name: 'Deploy', status: 'pending' },
    ]);

    return (
        <div className="deployment-container">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="deployment-title"
            >
                Deploying Your Project
            </motion.h2>

            <div className="steps-container">
                <div className="progress-line">
                    <div className="progress-line-bg">
                        <motion.div
                            className="progress-line-fill"
                            initial={{ width: '0%' }}
                            animate={{ width: '33%' }}
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                        />
                    </div>
                </div>

                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="step"
                    >
                        <motion.div
                            className={`step-circle ${step.status}`}
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
                                    <CheckCircle className="step-icon completed" />
                                </motion.div>
                            )}
                            {step.status === 'loading' && (
                                <div className="loading-spinner" />
                            )}
                            {step.status === 'pending' && (
                                <div className="pending-dot" />
                            )}
                        </motion.div>
                        <motion.div
                            className="step-text"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.2 + 0.2 }}
                        >
                            <span className="step-name">{step.name}</span>
                            <span className="step-status">
                                {step.status === 'completed' && 'Completed'}
                                {step.status === 'loading' && 'In Progress'}
                                {step.status === 'pending' && 'Waiting'}
                            </span>
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="progress-info"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                <p className="progress-message">Building and testing your application...</p>
                <p className="progress-submessage">This might take a few minutes</p>
                <motion.div
                    className="progress-bar"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <div className="progress-bar-fill" />
                </motion.div>
            </motion.div>
        </div>
    );
}