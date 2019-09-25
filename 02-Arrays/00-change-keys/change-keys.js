const changeKeys = (notes, steps) => {
    const keys = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']

    return notes.map((val) => {
        let newNote = keys.indexOf(val) + steps

        if (newNote > 12) {
            return keys[newNote % 12]
        }

        return keys[newNote]
    })
}