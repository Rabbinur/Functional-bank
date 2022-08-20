console.log("withdraw");
/*
1. add withdraw event handler to buttton
2. get withdraw amount by using getInputFeildValueById
3. get previous withdraw amount by using getTextElementValueById function
4. calculate new withdraw total and set the value
4.5 set new withdraw total by using setTextEelementValueById function
5.  get previous balance total by using getTextElementValueById function
6. calculate new balance Total;
7. set balance total using etTextElementValueById
*/
document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getinputFieldValueById("withdraw-input");
  const previousWithdrawTotal = getTextElementValueById("withdraw-total");
  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  setTextElementValueById("withdraw-total", newWithdrawTotal);
  const previousBalanceTotal = getTextElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
});
