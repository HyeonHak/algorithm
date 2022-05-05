/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    const arr = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1,
    };
    
    let answer = 0;
    for (let i = 0; i < s.length; i++) {
        if (i === s.length - 1) {
            answer += arr[s[i]];
        } else {
            const nextIdx = i + 1;
            if (arr[s[i]] < arr[s[nextIdx]]) {
                answer += arr[s[nextIdx]] - arr[s[i]];
                i += 1;
            } else {
                answer += arr[s[i]];
            }
        }
    }
    
    return answer;
};