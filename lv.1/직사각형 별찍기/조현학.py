a, b = map(int, input().strip().split(' '))

for i in range(1, b + 1):
    for j in range(1, a):
        print('*', end="")
    print('*')
    