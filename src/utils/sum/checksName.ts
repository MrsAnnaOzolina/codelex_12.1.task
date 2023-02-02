

export default function checksName(name: any) {
    if (name.length > 1 && name.length < 51) {
        var regex = /^[a-zA-Zāēūīļķģšžčņ]+$/
        return regex.test(name)
    } else {
        false
    }
}


