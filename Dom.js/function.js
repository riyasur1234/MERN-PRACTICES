//string as an argument & returns the number of vawels in this string.

function vowalCounts(str){
    let count = 0;
    for(const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ){
            count = count + 1;
        }
        

        
    }
    console.log(count);

}
vowalCounts("riyasur");


//same task in arrow function
const countVow = (str) => {
    let count = 0;
    for(const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ){
            count = count + 1;
        }
        

        
    }
    console.log(count);

}
countVow("how are you");


//print square of each value using forEach loop.
let arr = [1,2,3,4,5,6,7];
arr.forEach((val) =>{
    console.log(val * val);
});