function solution(maps) {
    //BFS 문제
    const dirX = [-1, 0, 1, 0];
    const dirY = [0, -1, 0, 1];
    const objectY = maps.length;
    const objectX = maps[0].length;
    
    const arr = [[0, 0]];
    let cnt = 0;
    let checking = new Array(objectY);
    
    for (let i = 0; i < objectY; i++) {
        checking[i] = new Array(objectX).fill(0);
    }
    
    checking[0][0] = 1;
    
    
    while(arr.length !== 0) {
        let len = arr.length;
        cnt += 1;
        
        for (let j = 0; j < len; j++) {
            const y = arr[0][0];
            const x = arr[0][1];
            if (x === objectX - 1 && y === objectY - 1) {
                return cnt;
            }

            arr.shift();

            for (let i = 0; i < 4; i++) {
                const nextX = x + dirX[i];
                const nextY = y + dirY[i];
                if (nextX >= 0 && nextX < objectX && nextY >= 0 && nextY < objectY) {
                    if (maps[nextY][nextX] === 1 && checking[nextY][nextX] === 0) {
                        arr.push([nextY, nextX]);
                        checking[nextY][nextX] = 1;
                    }
                }
            }
        }
    }
    return -1;
}