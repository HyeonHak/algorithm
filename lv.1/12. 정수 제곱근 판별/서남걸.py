def solution(n):
    answer = 0
    
    jump = n // 10
    if(jump == 0):
        jump = 2
        
    i=1
    while (i*i <= n):
        i += jump
    i -= jump
    
    if(i*i == n):
        return (i+1) * (i+1)
    
    while(i <= n):
        i += 1
        if(i*i >= n):
            answer = -1
            if(i*i == n):
                answer = (i+1) * (i+1)   
            return answer   
    return answer
