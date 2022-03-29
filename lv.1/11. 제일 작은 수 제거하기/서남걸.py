def solution(arr):
    answer = arr
    
    if(len(arr) == 1):
        return [-1]
    
    small = arr[0]
    for num in arr:
        if(small > num):
            small = num
            
    answer.remove(small)
    
    return answer
