const formNode = document.querySelector("#eventRegistrationForm");

formNode.addEventListener("submit", (event) => {
    event.preventDefault();

    validateForm();
});

function validateForm() {
    const ticketsNode = document.querySelector("#tickets");
    const errorMessageNode = document.querySelector("#errorMessage");

    errorMessageNode.textContent = "";
    
    let errorMessages = []
    
    let inputTickets = parseFloat(ticketsNode.value);

    if (inputTickets <= 0) {
        errorMessages.push("You must enter a positive number")
        console.log("must enter positive number");
    }

    if (errorMessages.length > 0) {
        errorMessageNode.textContent = errorMessages[0];
    }

    return {
        errorMessages: errorMessages
    };
}