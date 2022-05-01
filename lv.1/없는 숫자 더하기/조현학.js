function solution(numbers) {
    let answer = 0;
    let i = 0;
    const arr = numbers.sort((a, b) => a - b);
    const serials = [0,1,2,3,4,5,6,7,8,9];
    
    for (let point = 0; point < 10;) {
        if (serials[point] === arr[i]) {
            i += 1;
            point += 1;
        } else if (serials[point] > arr[i]) {
            i += 1;
        } else {
            answer += serials[point];
            point += 1;
        }
    }
    
    
    return answer;
}