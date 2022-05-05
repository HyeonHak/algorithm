/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (i + 1 === nums.length) return false;
        const current = nums[i];
        const next = nums[i + 1];
        if (current === next) return true;
    }
};