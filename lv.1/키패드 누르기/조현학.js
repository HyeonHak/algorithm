function solution(numbers, hand) {
    let result = '';
    const numPosition = [[3, 1], 
                         [0, 0], [0, 1], [0, 2],
                         [1, 0], [1, 1], [1, 2],
                         [2, 0], [2, 1], [2, 2],
                         [3, 0], [3, 2]];
    let currentLeft = numPosition[10];
    let currentRight = numPosition[11];
    
    for (let i = 0; i < numbers.length; i++) {
        if ([1, 4, 7].includes(numbers[i])) {
            result += 'L';
            currentLeft = numPosition[numbers[i]];
        } else if ([3, 6, 9].includes(numbers[i])) {
            result += 'R';
            currentRight = numPosition[numbers[i]];
        } else {
            const numP = numPosition[numbers[i]];
            const l = Math.abs(numP[0] - currentLeft[0]) + Math.abs(currentLeft[1] - numP[1]);
            const r = Math.abs(numP[0] - currentRight[0]) + Math.abs(currentRight[1] - numP[1]);
            
            if (l < r) {
                currentLeft = numP;
                result += 'L';
            } else if (l > r) {
                currentRight = numP;
                result += 'R';
            } else {
                if (hand === 'right') {
                    result += 'R';
                    currentRight = numP;
                } else {
                    result += 'L';
                    currentLeft = numP;
                }
            }
        }
    }
    return result;
}