def solution(x):
    answer = True
    
    str_x = str(x)
    sum_x = 0
    
    for num_x in str_x:
        sum_x += int(num_x)
        
    if(x % sum_x != 0):
        answer = False
    
    return answer
