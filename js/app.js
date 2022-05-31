/*

steps:

Functions:---->
    1. Check input validation for nagative number and string
    2. Balance Calculation function
    3. Expenses Balance Calculation function
    4. Saving amount Calculation function

Event ----->
    1. Get total expenses and balance
    2. get saving and remaining amount

*/

// form validation check function

function validation(inputClass){
    const inputValue =  document.getElementsByClassName(inputClass)
    // console.log(inputClass)
    
    for(let eachInput of inputValue){
        if(eachInput.value < 0){
            window.alert('Please insert possitive number')
            eachInput.value = ''
            break
        }else if(isNaN(eachInput.value) == true){
            window.alert("Don't insert any text")
            eachInput.value = ''
        }else if(eachInput.value.length == 0){
            window.alert('Please fill up each option')
            break
        }
    }
    
    return inputValue
}

// Balance calculate function

function balance(){
    const income = document.getElementById('income').value
    const totalExpense = expenses()
    

    const totalBalance = income - totalExpense
    return totalBalance

}

// Expenses calculate function

function expenses(){
    const food = document.getElementById('food').value
    const rent = document.getElementById('rent').value
    const cloth = document.getElementById('cloth').value

    const totalExpense = parseFloat(food) + parseFloat(rent) + parseFloat(cloth)
    return totalExpense
}

// saving calculate function

function getSavingAmount(incomeAmount, saveAmout){
    return incomeAmount * (saveAmout / 100)
}

// Get total expenses and balance

document.getElementById('calculate').addEventListener('click', function(){

    // validation check
    validation('ie-input')

    const getBalance = balance()
    const getExpenses = expenses()
    
    // total expenses
    const setTotalExpense = document.getElementById('total-exp')
    const income = document.getElementById('income').value
    if(getExpenses > income){
    window.alert('ALERT! Your Expenses Balance is more than Your Income')
    setTotalExpense.innerText = Math.round(getExpenses * 100) / 100
    document.querySelector('.balance').style.color = 'red'
    }else{
        setTotalExpense.innerText = Math.round(getExpenses * 100) / 100
        document.querySelector('.balance').style.color = 'white'
    }


    // Balance
    const setBalance = document.getElementById('balance')
    setBalance.innerText = Math.round(getBalance * 100) / 100

    

})

// get saving and remaining amount

document.getElementById('saveing-check').addEventListener('click', function(){
    // validation check
    validation('sv-input')

    const savingAmount = document.getElementById('save-amount').value
    const income = document.getElementById('income').value
    const setSavingAmount = getSavingAmount(income, savingAmount)

    // set balance to saving amount
    const totalSaving = document.getElementById('total-saving')
    const getBalance = balance()
    if(setSavingAmount > getBalance){
        window.alert("ALERT! You don't have enough balance for saving amount")
        totalSaving.innerText = Math.round(setSavingAmount * 100) / 100
        document.querySelector('.remaining-balance').style.color = 'red'
    }else{
        totalSaving.innerText = Math.round(setSavingAmount * 100) / 100
        document.querySelector('.remaining-balance').style.color = 'white'
    }

    // set remaining balance 
    const remainingBalance = document.getElementById('remaining-bal')
    // const getBalance = balance()
    const setRemainingBalance = getBalance - setSavingAmount
    remainingBalance.innerText = Math.round(setRemainingBalance * 100) / 100
})