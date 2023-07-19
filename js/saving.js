// Get input elements
var salaryInput = document.querySelector('input#salary');
var goalInput = document.querySelector('input#exampleDataList');
var costInput = document.querySelector('input#totalCost');
var contributionInput = document.querySelector('input#contribution');
var resultSpan = document.querySelector('h2 span');

// Add event listener to calculate button
document.querySelector('button#calculateBtn').addEventListener('click', function() {
    // Get user inputs
    var salary = parseFloat(salaryInput.value);
    var goal = goalInput.value;
    var cost = parseFloat(costInput.value);
    var contribution = parseFloat(contributionInput.value);

    // Calculate number of months to reach the goal
    var months = Math.ceil(cost / contribution);

    // Display the result
    resultSpan.textContent = months + " months";
    

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

