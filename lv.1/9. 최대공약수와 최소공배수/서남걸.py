def solution(n, m):
    answer = []
    
    if(n < m):
        a = n
        b = m
    else:
        a = m
        b = n
    
    for i in range(a,0,-1):
        if((a % i == 0) & (b % i == 0)):
            answer.append(i)
            break
    
    for i in range(b, a*b+1):
        if((i % a == 0) & (i % b == 0)):
            answer.append(i)
            break
            
    return answer
