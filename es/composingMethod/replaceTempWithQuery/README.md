# Replace Temp With Query
## Motivation
 When You place the result of an expression in a local variable for later use in your code. Then you can move the entire expression to a separate method and return the result from it. Query the method instead of using a variable. Incorporate the new method in other methods, if necessary. This is for readable code and the ability to reuse this method in other places in codebase. 

## Mechanics
1. Make sure that a value is assigned to the variable once and only once within the method. If not, use Split Temporary Variable to ensure that the variable will be used only to store the result of your expression.

2. Use Extract Method to place the expression of interest in a new method. Make sure that this method only returns a value and does not change the state of the object. If the method affects the visible state of the object, use Separate Query from Modifier.

3. Replace the variable with a query to your new method.

4. test