'use client'

import React, { useState, useEffect } from 'react';
import styles from './Timer.module.css';

const Timer: React.FC = () => {
    const [countdown, setCountdown] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const targetTime = new Date(now);
            targetTime.setHours(24, 0, 0, 0);
            let remainingTime = targetTime.getTime() - now.getTime();
            if (remainingTime < 0) {
                // If already past midnight, calculate time until the next day's midnight
                targetTime.setDate(targetTime.getDate() + 1);
                remainingTime = targetTime.getTime() - now.getTime();
            }
            setCountdown(remainingTime);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (time: number): string => {
        const hours = Math.floor(time / (1000 * 60 * 60));
        const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((time % (1000 * 60)) / 1000);
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className={styles.timerCounter}>
            {formatTime(countdown)}
        </div>
    );
};

export default Timer;
