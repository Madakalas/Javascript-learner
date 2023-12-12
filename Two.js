/* Accesing object values*/
class One{
    constructor(Name,Id,Amount){
        this.acc_Amount=Amount;
        this.acc_Id=Id;
        this.acc_Name=Name;

    }
    acc_Name;
    acc_Id;
    acc_Amount=0;

    get_Balance(amount){
        this.acc_Amount=this.acc_Amount+amount;   
    }
}
let a = new One("rocky",101,40000);
console.log(a);

a.get_Balance(5000);


