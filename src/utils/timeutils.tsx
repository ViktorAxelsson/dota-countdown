export function secondsToString(sec: number): string {
    let minutes = Math.floor(Math.abs(sec)/60);
    let seconds = Math.abs(sec % 60);

    return (sec < 0 ? "-" : "") + minutes + ":" + (seconds.toString().length === 1 ? "0" : "") + seconds;
}