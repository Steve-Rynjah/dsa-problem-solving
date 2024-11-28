function main(){

    function encode(str){
        return str.map((element)=> `${element.length}${element}#`).join('')
    }

    function decode(str){
        let result = []
        let i = 0;

        while(i < str.length){
            let j = i;
            while(str[j] !== '#'){
                j++;
            }
            let length = parseInt(str.substring(i,j))
            i = j + 1;
            j = i + length;
            result.push(str.substring(i,j))
            i = j;
        }
        return result;
    }

    const input = ["steve", ":", "austin", ":", "rynjah"]
    const en = encode(input)
    const de = decode(en)
    console.log(JSON.stringify(input) === JSON.stringify(de) ? true : false)
}

main()