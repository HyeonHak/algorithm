def solution(arr):
    answer = 0
    
    for num in arr:
        answer += num
    
    answer /= len(arr)
    
    return answer
