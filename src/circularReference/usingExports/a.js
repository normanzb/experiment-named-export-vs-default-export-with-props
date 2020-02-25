import { call as callFromB } from "./b"

export const call = (value) => {
    console.log('a.call', value)
    if (value > 99) {
        return
    }
    callFromB(value)
}
