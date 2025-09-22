const timeFormat = (mintues) => {
    const hours = Math.floor(mintues / 60)
    const minituesRemainder = mintues % 60;
    return `${hours}h ${minituesRemainder}m`
}

export default timeFormat;