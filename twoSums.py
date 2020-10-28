class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        foundValues = { nums[0]: 0 }
        for i in range(1, len(nums)):
            if (target - nums[i]) in foundValues:
                return [foundValues[target - nums[i]], i]
            foundValues[nums[i]] = i
