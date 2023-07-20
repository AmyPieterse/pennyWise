const checkAmount = document.getElementById('checkAmount');
const totalAmountButton = document.getElementById('totalAmountButton');
const productTitle = document.getElementById('productTitle');
const errorMessage = document.getElementById('budgetError');
const productTitleError = document.getElementById('productTitleError');
const productCostError =document.getElementById('productCostError');
const amount = document.getElementById('amount');
const expenditureValue = document.getElementById('expenditure');
const balanceValue = document.getElementById('balance');
const list = document.getElementById('list');


let totalAmount = document.getElementById('totalAmount');
let userAmount = document.getElementById('userAmount');
let tempAmount = 0;

// Set budget 
totalAmountButton.addEventListener('click', () => {
    tempAmount=totalAmount.value;

    if (tempAmount===''|| tempAmount<0){
        errorMessage.classList.remove('hide');
    } 
    else{
        errorMessage.classList.add('hide')
    }

    amount.innerHTML=tempAmount;

    balanceValue.innerText =tempAmount - expenditureValue.innerText;
    totalAmount.value = "";
});

const disableButtons = (bool)=>{
    let editButtons = document.getElementsByClassName('edit');
    Array.from('editButtons').forEach(element =>{
        element.disabled = bool;
    });
};

const modifyElement = (element, edit = false) =>{
    let parentDiv = element.parentElement; 
    let currentBalance = balanceValue.innerText;
    let currentExpense = expenditureValue.innerText;
    let parentAmount = parentDiv.querySelector('.amount').innerText;

    if (edit){
        let parentText = parentDiv.querySelector('.product').innerText;
        userAmount.value =parentAmount;
        disableButtons(true);
    }
    balanceValue.innerText = parseInt(currentBalance) + parseInt(parentAmount);
    expenditureValue.innerText = parseInt(currentExpense) - parseInt(parentAmount);
    parentDiv.remove();
}
const listCreator = (expenseName, expenseValue)=>{
    let sublistContent=document.createElement('div');
    sublistContent.classList.add('sublistContent','flexSpace');
    list.appendChild(sublistContent);
    sublistContent.innerHTML = 
    `<p class="product">${expenseName}</p>
    <p class="amount">${expenseValue}</p>`;
    let editButton =document.createElement("button");
    editButton.classList.add("fa-regular fa-pen-to-square","edit");
    editButton.style.fontSize = "24px";
    editButton.addEventListener("click", () =>{
        modifyElement(editButton,true);
    });
    let deleteButton =document.createElement("button");
    deleteButton.classList.add("fa-regular fa-trash-can","delete")
    deleteButton.style.fontSize="24px";
    deleteButton.addEventListener("click",()=>{
        modifyElement(deleteButton);
    });
    sublistContent.appendChild(editButton);
    sublistContent.appendChild(deleteButton);
    document.getElementById("list").appendChild(sublistContent);
};

checkAmountButton.addEventListener("click",()=>{
    if(!userAmount.value||!productTitle.value){
        productTitleError.classList.remove("hide");
        return false;
    }
    disableButtons(false);
    let expenditure =parseInt(userAmount.value);
    let sum = parseInt(expenditureValue.innerText)+expenditure;
    expenditureValue.innerText = sum;
    const totalBalance = tempAmount - sum;
    balanceValue.innerText= totalBalance;
    listCreator(productTitle.value,userAmount.value);
    productTitle.value ="";
    userAmount.value = "";
}); 