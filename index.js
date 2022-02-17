function findMatching(drivers,originalName) {
    const driverNames = drivers.filter(name => name.toLowerCase() === originalName.toLowerCase())
    return driverNames
}
function fuzzyMatch(drivers,letters) {
    const letterLength = letters.length
    const startingLetters = drivers.filter(startLetters => startLetters.slice(0,letterLength) === letters)
    return startingLetters
}
function matchName(drivers,matches) {
    const nameMatch = drivers.filter(drivers => drivers.name === matches)
    return nameMatch
}