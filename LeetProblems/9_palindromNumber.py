def isPalindrome(x):
    """
    :type x: int
    :rtype: bool
    """
    # Convert the number to a string
    num_str = str(x)
    reversed_str = num_str[::-1]
    return num_str == reversed_str


# Call the isPalindrome method with a number as an argument
result = isPalindrome(121)

# Print the result
print(result)
