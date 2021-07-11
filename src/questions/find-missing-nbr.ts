// Given an array of size N-1 such that it can only contain distinct integers in the range of 1 to N. Find the missing element.

// Example 1:

// Input:
// N = 5
// A[] = {1,2,3,5}
// Output: 4
export function missingNbrInArray_worstCaseScenario(seqArr: number[], expectedSize: number) {

    if(seqArr && seqArr.length> 1 && seqArr.length+1 === expectedSize) {
        // first sort the array
        seqArr.sort((a,b) => a-b);
        let missingNbr;
        console.log('sorted seq is:', seqArr);
        seqArr.forEach((val, index) => {
            const temp = val;
            console.log(temp);
            console.log('dq',seqArr[index+1])
            if(seqArr[index+1] && temp+1 !== seqArr[index+1]) {
                console.log('coming in')
                // then number is just the  val+1
                missingNbr = val+1;
                console.log('missing nbr:',missingNbr);
            } 
        });
        return missingNbr;
    } else {
        return null;
    }
}
