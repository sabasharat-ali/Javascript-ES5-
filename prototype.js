function Price(amount,month)
{
    this.amount=amount;
    this.month=month;
    
}
//PROTOTYPE WILL MAKE ONLY ONE COPY OF THE DISCOUNT BUT WHEN IT IS DEFINED AS ELSEWHERE ITS COPY IS MADE EVERYTIME IT IS CALLED
Price.prototype.discount=20;
Price.prototype.total=function()
{
   return this.amount*this.month
};
// var obj = new Price(8,8)

// console.log(obj.discount);

