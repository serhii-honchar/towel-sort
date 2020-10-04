// You should implement your task here.

module.exports = function towelSort(matrix) {
    let resultArr = [];
    if (matrix === undefined) {
        return resultArr;
    }
    for (let i = 0; i < matrix.length; i++) {
        let nestedArr = matrix[i];
        for (let j = 0; j < nestedArr.length; j++) {
            if (i % 2 === 0) {
                resultArr.push(nestedArr[j]);
            } else {
                resultArr.push(nestedArr[nestedArr.length - 1 - j]);
            }
        }
    }
    return resultArr;
}
