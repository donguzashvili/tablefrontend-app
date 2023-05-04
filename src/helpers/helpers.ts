export const capitalizeWords = (data: string) => {
    const words = data.split(" ")

    const capitalizedWords = words.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    })

    return capitalizedWords.join(" ")
}