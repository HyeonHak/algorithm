def solution(phone_number):
    answer = ''
    cnt = 0
    max_len = len(phone_number)
    
    for ch in phone_number:
        if(max_len - cnt <= 4):
            answer += ch
        else:
            answer += '*'
            
        cnt += 1
            
    return answer
