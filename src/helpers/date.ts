const date = new Date();
const options = {day: 'numeric', month: 'long', year: 'numeric'};
// @ts-ignore
export const formattedDate: string = date.toLocaleDateString('en-GB', options);