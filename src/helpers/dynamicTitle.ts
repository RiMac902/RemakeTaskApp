const getGreeting = (): string => {
    const currentTime = new Date();
    const hours = currentTime.getHours();

    if (hours >= 5 && hours < 12) {
        return 'Good Morning';
    } else if (hours >= 12 && hours < 17) {
        return 'Good Afternoon';
    } else {
        return 'Good Evening';
    }
};

export const greeting = getGreeting();
