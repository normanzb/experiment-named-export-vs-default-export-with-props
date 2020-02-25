import b from "./b"

export default {
    call: (value) => {
        console.log('a.call', value)
        if (value > 99) {
            return
        }
        b.call(value)
    }
}