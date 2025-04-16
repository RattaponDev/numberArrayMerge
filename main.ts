function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[]{
    const result:number[] = []
    let col1_index = 0
    let col2_index = collection_2.length-1
    let col3_index = 0
    while(true){
        const num1 = col1_index==collection_1.length?Infinity:collection_1[col1_index]
        const num2 = col2_index<0?Infinity:collection_2[col2_index]
        const num3 = col3_index==collection_3.length?Infinity:collection_3[col3_index]
        if(num1==Infinity&&num2==Infinity&&num3==Infinity){
            break
        }
        const min = (Math.min(num1,num2,num3))
        if(min ==num1){
            result.push(num1)
            col1_index++;
        }
        if(min ==num2){
            result.push(num2)
            col2_index--;
        }
        if(min ==num3){
            result.push(num3)
            col3_index++;
        }
    }
    return(result)
}

console.log(merge([1,3,5],[8,7,6],[0,2,4,9,10,11]))
module.exports = merge;