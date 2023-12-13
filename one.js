class Account{
    acc_Name;
    acc_Email;
    constructor(name,email){
        this.acc_Email=email;
        this.acc_Name=name;

    }


}
class SA extends Account{
    acc_Id;
    acc_amount;
    constructor(id,name,email,amount){
        super(name,email)

        this.acc_Id=id;
        this.acc_amount=amount;
    }

}
let s=new SA(101,'Rajan','Rajan@gmail.com', 56000)
console.log(s)