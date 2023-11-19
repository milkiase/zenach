var countVowelPermutation = function(n) {
    let hash  = { 
            a : ['e'],
            e : ['a','i'],
            i : ['a', 'e', 'o', 'u'],
            o : ['i', 'u'],
            u : ['a']
        }
        let count  = 0
    function appendLetters(letter, counter=1, recursive=false){
        for(let i = 0; i < hash[letter].length; i++){
            // console.log(counter, count, letter, hash[letter][i],recursive)
            console.log(counter, letter, count)
            if(counter  >= n){
                continue
            }
            if(i>0) {count++}
            appendLetters(hash[letter][i], counter + 1, true)
        }
    }
    for(let vowel of Object.keys(hash)){
        count++
        appendLetters(vowel)
    }
    return count
};

console.log(countVowelPermutation(14))