//1. Think of three properties all people share, set them with the constructor
//2. Think of three methods all people share
//3. Create a PostalWorker class that inherits from person, add some methods
//4. Create a Chef class that inherits from person, add some methods
//5. Create 2 PostalWorkers and 2 Chefs, log them and test all their methods

class person {
    constructor(language, hometown, favFood){
        this.language = language
        this.hometown = hometown
        this.favFood = favFood
    }
}
class PostalWorker extends person{
    constructor(language, hometown, favFood){
        super(language, hometown, favFood)
        this.hometown = ['DC', 'Atlanta']
        this.favFood = ['pizza']
        this.language = ['English', 'Spanish']
        console.log(`${favFood} is my favorite food!}`);
     }
}
class chef extends person{
    constructor(language, hometown, favFood){
    super(language, hometown, favFood)   
    this.hometown = ['Chicago', 'Atlanta']
    this.favFood = ['steak', 'asparagus']
    this.language = ['English', 'Spanish']
    console.log(`The chef\`s hometown are ${hometown}`);
}
}
let postMan = new PostalWorker('English', 'DC', 'Spaghetti')
console.log(postMan.language);
let postMan2 = new PostalWorker('Spanish', 'New York', 'French Fries')
console.log(postMan2.hometown);

let chefWorker = new chef('English', 'DC', 'Spaghetti')
console.log(chefWorker.language);
let chefWorker2 = new chef('Spanish', 'New York', 'French Fries')
console.log(chefWorker2.favFood);







class BankAccount {
    constructor(ownerName, balance, accountNumber){
        this.ownerName = ownerName
        this.balance = balance
        this.accountNumber = accountNumber
    }

    deposit (depositAmount){
        this.balance += depositAmount  
        console.log(`Your new balance is ${this.balance}`)
    
    }

    withdraw(withdrawalAmount){
        this.balance -= withdrawalAmount
        console.log(`Your new balance is ${this.balance}`)
    }
}
// let chase = new BankAccount("Lacho", 100, "345679")
// chase.withdraw(100)
// chase.withdraw(100)

class CheckingAccount extends BankAccount {
    constructor(ownerName, balance, accountNumber, overdraftEnabled = true){
        super(ownerName, balance, accountNumber)
        this.overdraftEnabled = overdraftEnabled
        
    } 
    withdraw(withdrawalAmount){
        console.log(this.balance)
        console.log(this.overdraftEnabled)
        if ((this.balance - withdrawalAmount) < 0 && this.overdraftEnabled == true) {
            console.log('Sorry') 
        }
        else{
            super.withdraw(withdrawalAmount)
        }
       
    }
}
let Lacho = new CheckingAccount ("Lacho", 300, "3345789", true)
Lacho.withdraw(200)


class SavingAccount extends BankAccount {
    constructor(ownerName, balance, accountNumber, overdraftEnabled = true){
        super(ownerName, balance, accountNumber)
        this.overdraftEnabled = overdraftEnabled
        
    } 
    withdraw(withdrawalAmount){
        console.log(this.balance)
        console.log(this.overdraftEnabled)
        if ((this.balance - withdrawalAmount) < 0 && this.overdraftEnabled == true) {
            console.log('Sorry') 
        }
        else{
            super.withdraw(withdrawalAmount)
        }
       
    }
}


let LachoSh = new SavingAccount ("LachoSh", 300, "3345799", true)
Lacho.withdraw(400)