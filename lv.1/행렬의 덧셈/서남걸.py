def solution(arr1, arr2):
    answer = []
    cnt = 0
    limit = len(arr1)
    
    while(cnt < limit):
        num1 = arr1[cnt]
        num2 = arr2[cnt]
        limit1 = len(num1)
        cnt1 = 0
        answer_tmp = []
        while(cnt1 < limit1):
            num11 = num1[cnt1]
            num22 = num2[cnt1]
            answer_tmp.insert(cnt1,(num11+num22))
            
            cnt1 += 1
        answer.append(answer_tmp)
        
        cnt += 1
        
    return answer
