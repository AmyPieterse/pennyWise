$(document).ready(function () {
    const accordionContainer = $("#faqAccordion");

    // Sample data for frequently asked questions
    let faqData = [
        {
            question: "Why is it important to save money?",
            answer: "Answer: Saving money is crucial because it provides financial security and helps you achieve your goals. It allows you to handle unexpected expenses, plan for the future, and have the freedom to pursue your dreams without unnecessary financial stress."
        },
        {
            question: " How much of my income should I save?",
            answer: "A good rule of thumb is to save at least 20% of your income. However, the amount you save can vary based on your individual circumstances and financial goals. The more you save, the better off you'll be in the long run."
        },
        {
            question:"What should I save for as a young person?",
            answer:" As a young person, it's wise to save for both short-term and long-term goals. Short-term goals might include building an emergency fund, buying a car, or funding a vacation. Long-term goals could involve saving for higher education, buying a home, or investing for retirement.",
        },
        {
            question:"How do I create a budget?",
            answer:"To create a budget, start by tracking your income and expenses for a few months to understand your spending habits. Categorize your expenses into fixed (e.g., rent, utilities) and variable (e.g., entertainment, dining out). Allocate money to each category, making sure your expenses don't exceed your income. Use budgeting apps or spreadsheets to help you keep track.",
        }
    ]

    // Function to render FAQ cards dynamically
    function renderFAQs() {
        accordionContainer.empty();

        faqData.forEach((faq, index) => {
            const card = `
                <div class="col-md-6 mb-3">
                    <div class="card-container">
                        <div class="card card-flip">
                            <div class="front-card card-body">
                                <div class="card-header">
                                    <span class="question">${faq.question}</span>
                                    <span class="arrow">&#10148;</span>
                                </div>
                            </div>
                            <div class="back-card card-body">
                                ${faq.answer}
                            </div>
                        </div>
                    </div>
                </div>
            `;
            accordionContainer.append(card);
        });
    }

    // Function to add a new FAQ from user input
    function addNewFAQ(question, answer) {
        faqData.push({ question: question, answer: answer });
        renderFAQs();
    }

    // Event listener for form submission
    $("#faqForm").submit(function (event) {
        event.preventDefault();
        const questionInput = $("#questionInput").val().trim();
        const answerInput = $("#answerInput").val().trim();

        if (questionInput !== "" && answerInput !== "") {
            addNewFAQ(questionInput, answerInput);
            $("#faqForm")[0].reset(); // Clear the form fields after submission
        }
    });

    // Handle the flip card interaction
    $(document).on('click', '.card-container', function () {
        $(this).find('.card-flip').toggleClass('flipped');
    });

    // Initial rendering of FAQ cards
    renderFAQs();
});
