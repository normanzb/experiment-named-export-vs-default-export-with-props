import { call as callFromC } from "./c"

export const call = (value) => {
    console.log('b.call')
    callFromC(value * 1)
}
