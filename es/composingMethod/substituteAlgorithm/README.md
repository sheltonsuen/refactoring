# Substitute Algorithm

## Motivation
Gradual refactoring is not the only method for improving a program. Sometimes a method is so cluttered with issues that it is easier to tear down the method and start fresh. And perhaps you have found an algorithm that is much simpler and more efficient. If this is the case, you should simply replace the old algorithm with the new one.

As time goes on, your algorithm may be incorporated into a well-known library or framework and you want to get rid of your independent implementation, in order to simplify maintenance.

The requirements for your program may change so heavily that your existing algorithm cannot be salvaged for the task.

## Mechanics
Make sure that you have simplified the existing algorithm as much as possible. Move unimportant code to other methods using Extract Method. The fewer moving parts in your algorithm, the easier it is to replace.

Create your new algorithm in a new method. Replace the old algorithm with the new one and start testing the program.

If the results do not match, return to the old implementation and compare the results. Identify the causes of the discrepancy. While the cause is often an error in the old algorithm, it is more likely due to something not working in the new one.

When all tests are successfully completed, delete the old algorithm for good!