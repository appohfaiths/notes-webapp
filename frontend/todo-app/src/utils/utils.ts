export const ConvertUnixTimeToDate = (unixTime: number): string => {
    const date = new Date(unixTime * 1000);
    return date.toLocaleString();
}