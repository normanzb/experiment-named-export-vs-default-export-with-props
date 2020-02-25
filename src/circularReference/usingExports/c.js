import { call as callFromA } from "./a"

export const call = (value) => {
    console.log('c.call')
    callFromA(value + 1)
}
