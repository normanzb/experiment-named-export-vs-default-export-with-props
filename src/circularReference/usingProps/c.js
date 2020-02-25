import a from "./a"

export default {
    call: (value) => {
        console.log('c.call')
        a.call(value + 1)
    }
}
