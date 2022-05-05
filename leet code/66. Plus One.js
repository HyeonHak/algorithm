/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    let value = digits[digits.length - 1] + 1;
    let answer = [value === 10 ? 0 : value];
    let plus = value === 10 ? 1 : 0;

    for (let i = digits.length - 2; i >= 0; i--) {
        const current = digits[i] + plus;
        answer.unshift(current === 10 ? 0 : current);
        plus = current === 10 ? 1 : 0;
    }
    if (plus) answer.unshift(plus);
    return answer;
};