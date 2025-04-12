import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import './styles/DeploymentProgress.css';

export function DeploymentProgress() {
    const navigate = useNavigate();

    const [steps, setSteps] = useState([
        { name: 'Import', status: 'completed' },
        { name: 'Deploy', status: 'loading' },
    ]);

    useEffect(() => {
        let timeout;

        if (steps[1].status === 'loading') {
            timeout = setTimeout(() => {
                setSteps(prevSteps => [
                    { ...prevSteps[0] },
                    { ...prevSteps[1], status: 'completed' },
                ]);
            }, 3000);
        }

        if (steps.every(step => step.status === 'completed')) {
            timeout = setTimeout(() => {
                navigate("/");
            }, 1000);
        }

        return () => clearTimeout(timeout);
    }, [steps, navigate]);

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
                            animate={{ width: `${(steps.filter(s => s.status !== 'pending').length / steps.length) * 100}%` }}
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
                <p className="progress-message">Deploying your application...</p>
                <p className="progress-submessage">This might take a few seconds</p>
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
