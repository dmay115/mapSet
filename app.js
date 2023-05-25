// set {1,2,3,4}

// "ref"


// map {[1,2,3] => false}

// const hasDuplicate = (arr) => {
//     const testSet = new Set([...arr]);
//     if (testSet.size == arr.length) {
//         return false;
//     }return true;
// }

const vowelCount = (str) => {
    const vowels = "aeiou"
    const vMap = new Map()
    for (let char of str) {
        if (vowels.includes(char)){
            if (!vMap.has(char)){
                vMap.set(char, 1)
            }else (
                vMap.set(char, +1)
            )
        }
    }
    return vMap;
}