export const avatarWord = (str: string): string => {
    if (str && str.trim().length > 0) {
        return str.trim().charAt(0).toUpperCase();
    }
    return '';
};