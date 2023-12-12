/* intiating methods + functions*/
class One{
    acc_Amount=0;
    acc_Name;
    acc_Id;


    open_Account(){
        console.log("Account openesd successfully")
    }
    deposit_Amount(){
        console.log("Amount should deposited successfully")

    }
    withdrawl(){
        console.log("Insufficient to withdrawl")
    }
    get_Balance(amount){
        this.acc_Amount=this.acc_Amount+amount;
        
    }
    close_Account(){
        console.log("Account closed succesfully")
    }
}
let a = new One;
a.open_Account();
a.deposit_Amount();
a.withdrawl();
a.get_Balance(5000);
a.close_Account();

