function solution(s) {
    var answer = 0;
    //1. z, o, e, n은 문자열의 길이만큼 카운트를 올린다.
    //2. t, f, s의 경우 맞는 단어를 찾고, 그 길이만큼 카운트를 올린다.
    //3. 숫자의 경우는 바로 넘어간다.
    //4. 반환값은 숫자이다.
    
    let cnt = 0;
    let ans = [];
    for (let i = 0; i < s.length; ) {
        if (s[i] >= '0' && s[i] <= '9') {
            ans.push(s[i]);
            i += 1;
        } else if (s[i] === 'o') {
            ans.push('1');
            i += 3;
        } else if (s[i] === 'z') {
            ans.push('0');
            i += 4;
        } else if (s[i] === 'e') {
            ans.push('8');
            i += 5;
        } else if (s[i] === 'n') {
            ans.push('9');
            i += 4;
        } else if (s[i] === 't') {
            // two, three
            const char = s.slice(i, i + 3);
            ans.push(char === 'two' ? '2' : '3');
            i = char === 'two' ? i + 3 : i + 5;
        } else if (s[i] === 'f') {
            // four, five
            const char = s.slice(i, i + 4);
            ans.push(char === 'four' ? '4' : '5');
            i += 4;
        } else if (s[i] === 's') {
            // six, seven
            const char = s.slice(i, i + 3);
            ans.push(char === 'six' ? '6' : '7');
            i = char === 'six' ? i + 3 : i + 5;
        }
    }
    return Number(ans.join(''));
}