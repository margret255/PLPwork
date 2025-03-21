num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))
operation = input("Enter an operation (+, -): ")

if operation == '+' or operation == '-':
    result = num1 + num2 if operation == '+' else num1 - num2
    print(f"{num1} {operation} {num2} = {result}")
else:
    print("Invalid operation!")
