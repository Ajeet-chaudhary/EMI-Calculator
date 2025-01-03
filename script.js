// Function to calculate EMI
function calculateEMI(principal, rate, tenure) {
    const monthlyRate = rate / (12 * 100); // Convert annual interest rate to monthly
    const totalMonths = tenure * 12; // Convert years to months

    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
                (Math.pow(1 + monthlyRate, totalMonths) - 1);

    return emi;
}

// Function to calculate EMI details
function calculateEMIDetails() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const loanTenure = parseFloat(document.getElementById('loanTenure').value);

    if (!loanAmount || !interestRate || !loanTenure || loanAmount <= 0 || interestRate <= 0 || loanTenure <= 0) {
        alert('Please enter valid inputs for all fields.');
        return;
    }

    const emi = calculateEMI(loanAmount, interestRate, loanTenure).toFixed(2);
    const totalPayment = (emi * loanTenure * 12).toFixed(2);
    const totalInterest = (totalPayment - loanAmount).toFixed(2);

    // Display results
    document.getElementById('emiResult').textContent = emi;
    document.getElementById('totalInterest').textContent = totalInterest;
    document.getElementById('totalPayment').textContent = totalPayment;
}

// Add event listener to the Calculate button
document.getElementById('calculateBtn').addEventListener('click', calculateEMIDetails);
