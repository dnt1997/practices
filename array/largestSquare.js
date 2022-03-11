/* 
Input: rectangles = [[5,8],[3,9],[5,12],[16,5]]
Output: 3
Explanation: The largest squares you can get from each rectangle are of lengths [5,3,5,5].
The largest possible square is of length 5, and you can get it out of 3 rectangles.

*/
let larget = 0;
let count = 0;
let minArr = [];
let rectangles = [[2,3],[3,7],[4,3],[3,7]];
rectangles.forEach(function(val,i){
    let min = Math.min( ...val );
    minArr.push(min)
    if(min >larget){
        larget = min;
    }
});
minArr.forEach(element => {
    if(larget == element){
        count++;
    }
    
});
console.log(count)