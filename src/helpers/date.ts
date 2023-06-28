const date = new Date();
const options = { day: 'numeric', month: 'long', year: 'numeric' };
// @ts-ignore
export const formattedDate = date.toLocaleDateString('en-GB', options);