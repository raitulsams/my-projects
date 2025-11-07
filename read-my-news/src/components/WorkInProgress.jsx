import React, { useEffect, useState } from "react";
const WorkInProgress = () => {
    // 🎯 Set your target date here 


    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 5);

        const timer = setInterval(() => {
            const now = new Date();
            const diff = targetDate.getTime() - now.getTime();

            if (diff <= 0) {
                clearInterval(timer);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                setTimeLeft({
                    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((diff / (1000 * 60)) % 60),
                    seconds: Math.floor((diff / 1000) % 60),
                });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center gap-6 bg-base-100">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
                🚧 Work In Progress 🚧
            </h2>

            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ ["--value"]: timeLeft.days }}>
                            {timeLeft.days}
                        </span>
                    </span>
                    days
                </div>

                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ ["--value"]: timeLeft.hours }}>
                            {timeLeft.hours}
                        </span>
                    </span>
                    hours
                </div>

                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ ["--value"]: timeLeft.minutes }}>
                            {timeLeft.minutes}
                        </span>
                    </span>
                    min
                </div>

                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ ["--value"]: timeLeft.seconds }}>
                            {timeLeft.seconds}
                        </span>
                    </span>
                    sec
                </div>
            </div>
        </div>
    );
};

export default WorkInProgress;
