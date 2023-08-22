const date = new Date();
const options = {day: 'numeric', month: 'long', year: 'numeric'};
// @ts-ignore
export const formattedDate: string = date.toLocaleDateString('en-GB', options);


export const getCurrentFormattedDate = (): string => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear().toString();

    return `${hours}:${minutes} ${month}/${day}/${year}`;
}
