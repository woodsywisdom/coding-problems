# integer will always be positive
# base case to be num > 10



def digitalRoot(num): #12
  if num < 10: #false
    return num

  total = 0 #3

  while num > 0: #
    num, remainder = divmod(num, 10) # 0,1
    total += remainder

  return digitalRoot(total) #12

print(digitalRoot(417))#3
print(digitalRoot(111111))#6
print(digitalRoot(99999))#9
