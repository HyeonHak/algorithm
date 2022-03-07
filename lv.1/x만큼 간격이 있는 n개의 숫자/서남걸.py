def solution(x, n):
    answer = []
    
    for value in range(n):
        answer.insert(value, x*(value+1))
    return answer
