export class CartItem{

  constructor(
    public id: string,
    public name: string,
    public price: string,
    public image: string,
    public amount: number
    ){}

    set newAmount(amount: number){
      this.amount = amount;
    }
}
