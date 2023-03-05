// Anagram frequency counter

function validAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }
    const lookup = {};

    for (let i = 0; i < str1.length; i++){
        let char = str1[i];
        // if the character exists increment, otherwise initialize
        lookup[char] ? lookup[char] += 1 : lookup[char] = 1;
        // console.log(lookup)
    }

    for (let i = 0; i < str2.length; i ++){
        let char = str2[i];
        // if this letter doesn't exist not an anagram
        if (!lookup[char]){
            return false;
        }
        else{
            lookup[char] -= 1;
        }
        // console.log(lookup)
    }

    return true;
}

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
