num1, num2 = input().split(' ')
n = int(num1)
m = int(num2)

cnt = 0
while(cnt < n * m):
    print('*',end='')
    cnt += 1
    if((cnt%n) == 0):
        print()