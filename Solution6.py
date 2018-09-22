#!/bin/python3

import sys


t = int(input().strip())
for a0 in range(t):
    n = int(input().strip())
    
    square_sum = (n*(n+1)//2)**2
    ind_sq_sum = n*(n+1)*(2*n+1)//6
    print(square_sum - ind_sq_sum)
  
