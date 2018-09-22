#!/bin/python3
import sys

def sum_three(n):
    # Looping from n-1 (next value) to 3 to find the next multiple of 3
    for i in range(n-1, 2, -1):
        if i % 3 == 0:
            quot = i//3 # Quotient used for equation
            ans = 3 * ((quot*(quot+1))//2) # Summation formula times 3
            return ans

def sum_five(n):
    # Looping from n-1 (next value) to 5 to find the next multiple of 5
    for i in range(n-1, 4, -1):
        if i % 5 == 0:
            quot = i//5 # Quotient used for equation
            ans = 5 * ((quot*(quot+1))//2) # Summation formula times 5
            return ans
        
def sum_fifteen(n):
    # Looping from n-1 (next value) to 15 to find the next multiple of 15
    for i in range(n-1, 14, -1):
        if i % 15 == 0:
            quot = i//15 # Quotient used for equation
            ans = 15 * ((quot*(quot+1))//2) # Summation formula times 15
            return ans		
        
t = int(input().strip())
for a0 in range(t):
    n = int(input().strip())
    three = sum_three(n)
    five = sum_five(n)
    fifteen = sum_fifteen(n)
    if three and not five:
        ans = three
    elif five and not three:
        ans = five
    elif five and three:
        if fifteen:
            ans = five + three - fifteen
        else:
            ans = five + three
    else:
        ans = 0
    print(int(ans))
    
