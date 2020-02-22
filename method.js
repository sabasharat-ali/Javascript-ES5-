var price =
{
    month: "jan",
    amount: 800,



calculate: function()
{
    if(price.month==="jan")
    {
        var discount = 200;
        var discounted_price=price.amount-discount
        return discounted_price
    }
    else
    {
        return this.amount
    }
}
};
// console.log(price.calculate());

function Price(amount,month)
{
    this.amount=amount
    this.month=month;
    this.discount=200;
    this.total=function()
    {
        return (this.amount*this.month)-this.discount;
    }
}
var objecta= new Price(80,6);
var objectb=new Price(10,6);
var objectc=new Price(30,6);

console.log(objecta.total());
console.log(objectb.total());
console.log(objectc.total());
