# Decompose conditional
## Motivation
The longer a piece of code is, the harder it is to understand. Things become even more hard to understand when the code is filled with conditions.

## Mechanics
1. Extract the conditional to a separate method via Extract Method.

2. Repeat the process for the then and else blocks.