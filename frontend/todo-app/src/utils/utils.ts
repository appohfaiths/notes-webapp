export const ConvertUnixTimeToDate = (unixTime: number): string => {
    const date = new Date(unixTime * 1000);
    const day = date.toDateString();
    const time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    return `${day} at ${time}`;
}