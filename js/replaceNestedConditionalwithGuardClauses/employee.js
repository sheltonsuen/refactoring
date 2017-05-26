'use strict';

class Employee {
  constructor(status) {
    this.status = status;
  }

  isDead() {
    return this.status === 'DEAD';
  }

  isSeparated() {
    return this.status === 'SEPARATED';
  }

  isRetired() {
    return this.status === 'RETIRED';
  }

  getPaymentAmount() {
    let result = '';
    if (this.isDead()) return deadAmount();
    if (this.isSeparated()) return separatedAmount();
    if (this.isRetired()) {
      result = retiredAmount()
    } else {
      result = normalPayAmount()
    }
    return result
  }
}

function deadAmount() {
  return 'deadAmount';
}
function separatedAmount() {
  return 'separatedAmount';
}
function retiredAmount() {
  return 'retiredAmount';
}
function normalPayAmount() {
  return 'normalPayAmount';
}

module.exports = Employee;