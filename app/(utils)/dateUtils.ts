export function add0IfNeeded(date: number | string) {
    date = String(date);
    if (date.length === 1) {
        return "0" + date;
    }
    return date;
}

export const MONTHS_ARRAY = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const getMonth = (month: number) => MONTHS_ARRAY[month];

export const getSuffix = (date: number) => {
    if (date > 10 && date < 20) return "th";
    const suffices = ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"];
    return suffices[date % 10];
}

export const addSuffix = (date: number) => date + getSuffix(date);

export const getCurrentTimeMaths = () => {
    const time = new Date();
    return Number(`${add0IfNeeded(time.getHours())}${add0IfNeeded(time.getMinutes())}${add0IfNeeded(time.getSeconds())}`);
}

export const getCurrentDayMaths = () => {
    const time = new Date();
    return Number(`${time.getFullYear()}${add0IfNeeded(time.getMonth())}${add0IfNeeded(time.getDate())}`);
}

export const getCurrentFullDateMaths = () => {
    const date = new Date();
    return Number(`${date.getFullYear()}${add0IfNeeded(date.getMonth())}${add0IfNeeded(date.getDate())}${add0IfNeeded(date.getHours())}${add0IfNeeded(date.getMinutes())}${add0IfNeeded(date.getSeconds())}`);
}

export const getCurrentDateFormatted = () => {
    const date = new Date();
    return `${addSuffix(date.getDate())} ${getMonth(date.getMonth())}, ${date.getFullYear()}`;
}