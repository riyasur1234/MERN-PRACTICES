let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let val of marks){
    sum = sum + val;
}
console.log(sum);
let avg = sum / marks.length;
console.log(avg);



let item = [250, 645, 300, 900, 50];
let i = 0;
for (let val of item){
    let offer = val /10;
    item[i]= item[i] - offer;
    console.log(item[i]);
    i++

}