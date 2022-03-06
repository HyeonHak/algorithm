def solution(lottos, win_nums):
    answer = []
    cnt = 0
    answer_cnt = 0

    for num in lottos:
        if(num == 0):
            cnt += 1
        
        if(num in win_nums):
            answer_cnt += 1
    
    if((answer_cnt + cnt) < 2):
        answer.insert(0,6)
    else:
        answer.insert(0,7- (answer_cnt + cnt))
        
    if(answer_cnt < 2):
        answer.insert(1,6)    
    else:
        answer.insert(1,7- answer_cnt)
    
    
    return answer
