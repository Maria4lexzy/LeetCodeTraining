# def two_sum(nums, target):
#     num_to_index = {}  # Hash map to store numbers and their indices

#     for i, num in enumerate(nums):
#         complement = target - num
#         if complement in num_to_index:
#             return [num_to_index[complement], i]
#         num_to_index[num] = i

#     # If no solution is found, return an empty list or raise an exception
#     return []


# # Example usage
# nums = [2, 7, 11, 15]
# target = 9
# result = two_sum(nums, target)
# print(result)  # Output: [0, 1]

def two_sum(nums, target):
    for i in range(len(nums)):
        for j in range(i+1, len(nums)):
            if nums[j]+nums[i] == target:
                return [i, j]
    return []


nums = [2, 7, 11, 15]
target = 9
result = two_sum(nums, target)
print(result)  # Output: [0, 1]
