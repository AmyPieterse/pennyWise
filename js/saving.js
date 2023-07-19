var salaryInput = document.querySelector('input#salary');
var goalInput = document.querySelector('input#exampleDataList');
var costInput = document.querySelector('input#totalCost');
var contributionInput = document.querySelector('input#contribution');
var resultSpan = document.getElementById('resultSpan');
var selectedOptionText = document.getElementById('selectedOptionText');

// to goal input
goalInput.addEventListener('input', function() {
    selectedOptionText.textContent = goalInput.value;
});


// calculate button
document.querySelector('button#calculateBtn').addEventListener('click', function() {
    var salary = parseFloat(salaryInput.value);
    var goal = parseFloat(goalInput.value);
    var cost = parseFloat(costInput.value);
    var contribution = parseFloat(contributionInput.value);


    
    if (isNaN(salary) || isNaN(contribution)) {
       showPopupMessage('Please enter valid numbers.')
       return;
    }

    // Calculate number of months to reach the goal
    var months = Math.ceil(cost / contribution);

    // Display the result
    showPopupMessage(`It will take you ${months} months to reach this goal`, "bold red");
});






document.getElementById('commitment').addEventListener('change', function() {
    var commitmentValue = this.value.toUpperCase();

    if (commitmentValue === 'YES') {
        showPopupMessage("😊Thank you for trusting us, we will email you the detailed contract. We are happy to help you reach your financial goal 😊", "bold red.");
    } else if (commitmentValue === 'NO') {
        showPopupMessage("😢We understand your hesitation, but don't miss out on this amazing opportunity to reach your financial goals. Take a leap of faith and let us guide you!😊", "bold red");
    }
});

function showPopupMessage(message, style) {
    var popup = document.createElement('div');
    popup.textContent = message;
    popup.style.fontWeight = 'bold';
    popup.style.color = 'red';
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.padding = '20px';
    popup.style.border = '2px solid red';
    popup.style.backgroundColor = 'white';
    popup.style.zIndex = '9999';

    document.body.appendChild(popup);

    setTimeout(function() {
        popup.remove();
    }, 7500);
}

