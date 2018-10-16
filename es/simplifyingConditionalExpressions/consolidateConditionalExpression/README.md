# Consolidate Conditional Expression
## Motivation
### Why
Your code contains many alternating operators that perform identical actions. It is not clear why the operators are split up.

The main purpose of consolidation is to extract the conditional to a separate method for greater clarity.

### Benefits

Eliminates duplicate control flow code. Combining multiple conditionals that have the same "destination" helps to show that you are doing only one complicated check leading to one action.

By consolidating all operators, you can now isolate this complex expression in a new method with a name that explains the conditional's purpose.

## Mechanics
Before refactoring, make sure that the conditionals do not have any "side effects" or otherwise modify something, instead of simply returning values. Side effects may be hiding in the code executed inside the operator itself, such as when something is added to a variable based on the results of a conditional.

1. Consolidate the conditionals in a single expression by using and and or. As a general rule when consolidating:

   * Nested conditionals are joined using and.

   * Consecutive conditionals are joined with or.

2. Perform Extract Method on the operator conditions and give the method a name that reflects the expression's purpose.
