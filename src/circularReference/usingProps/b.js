import c from "./c"

export default {
    call: (value) => {
        console.log('b.call')
        c.call(value * 1)
    }  
} 