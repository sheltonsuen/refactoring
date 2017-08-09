package com.thoughtworks.refactoring.pullUpField;

public class CheckingAccount extends Account {
    private int _minimumCheckingBalance = 5;

    public int getMinimumCheckingBalance() {
        return _minimumCheckingBalance;
    }
}
