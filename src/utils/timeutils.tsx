export function secondsToString(sec: number): string {
    let minutes = Math.floor(Math.abs(sec)/60);
    let seconds = Math.abs(sec % 60);

    return (sec < 0 ? "-" : "") + minutes + ":" + (seconds.toString().length === 1 ? "0" : "") + seconds;
}

export function milliSecondsToString(msec: number): string {
    let sec = Math.round(msec / 1000);
    let minutes = Math.floor(Math.abs(sec)/60);
    let seconds = Math.abs(sec % 60);

    return (sec < 0 ? "-" : "") + minutes + ":" + (seconds.toString().length === 1 ? "0" : "") + seconds;
}