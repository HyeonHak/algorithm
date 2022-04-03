function solution(arr1, arr2) {
    var answer = [[]];
    answer = arr1.map((v,j) => {
        let tmp = [];
        for (let i=0;i<v.length;i++){
            tmp.push(v[i] + arr2[j][i]);
        }
        return tmp;
    })
    return answer;
}