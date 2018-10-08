# Inline Temp

## Motivation
You have a temporary variable that is assigned the result of a simple expression and nothing more.

## Mechanics
1. Find all places that use the variable. Instead of the variable, use the expression that had been assigned to it.
2. Delete the declaration of the variable and its assignment line.
3. test
