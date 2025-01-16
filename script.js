document.getElementById('heartForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get user inputs
    const age = parseInt(document.getElementById('age').value);
    const cholesterol = parseInt(document.getElementById('cholesterol').value);
    const bloodPressure = parseInt(document.getElementById('bloodPressure').value);
    const smoker = document.getElementById('smoker').value === 'yes';
    const diabetes = document.getElementById('diabetes').value === 'yes';

    // Validate inputs
    if (isNaN(age) || isNaN(cholesterol) || isNaN(bloodPressure)) {
        document.getElementById('result').textContent = 'Please fill in all fields correctly.';
        return;
    }

    // Risk calculation
    let riskScore = 0;

    // Age factor
    if (age > 40 && age <= 50) riskScore += 5;
    if (age > 50) riskScore += 10;

    // Cholesterol factor
    if (cholesterol > 200 && cholesterol <= 240) riskScore += 5;
    if (cholesterol > 240 && cholesterol <= 300) riskScore += 10;
    if (cholesterol > 300) riskScore += 20; // Critical level

    // Blood Pressure factor
    if (bloodPressure > 130 && bloodPressure <= 140) riskScore += 5;
    if (bloodPressure > 140 && bloodPressure <= 180) riskScore += 10;
    if (bloodPressure > 180) riskScore += 20; // Critical level

    // Smoker factor
    if (smoker) riskScore += 15;

    // Diabetes factor
    if (diabetes) riskScore += 15;

    // Ensure high-risk triggers for critical conditions
    let riskMessage = 'Low risk';
    if (cholesterol > 300 || bloodPressure > 180) {
        riskMessage = 'High risk';
    } else if (riskScore >= 20 && riskScore < 40) {
        riskMessage = 'Moderate risk';
    } else if (riskScore >= 40) {
        riskMessage = 'High risk';
    }

    // Display result
    document.getElementById('result').textContent = `Your heart disease risk is: ${riskMessage}`;
});
