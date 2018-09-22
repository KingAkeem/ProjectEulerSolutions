#!/bin/python3

import sys

def evenFib():
    a, b = 1, 2
    while 1:
        yield a
        a, b = b, a + b
    
t = int(input().strip())
for a0 in range(t):
    sum = 0
    n = int(input().strip())
    seq = evenFib()
    for value in seq:
        if value < n:
            if value % 2 == 0:
                sum += value
        else:
            break
    print(sum)

