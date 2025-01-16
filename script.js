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

    // Basic risk calculation based on Indian context
    let riskScore = 0;

    // Age factor
    if (age > 40 && age <= 50) riskScore += 5; // Moderate risk
    if (age > 50) riskScore += 10; // Higher risk

    // Cholesterol factor
    if (cholesterol > 200 && cholesterol <= 240) riskScore += 5; // Borderline high
    if (cholesterol > 240) riskScore += 10; // High cholesterol

    // Blood Pressure factor
    if (bloodPressure > 130 && bloodPressure <= 140) riskScore += 5; // Elevated BP
    if (bloodPressure > 140) riskScore += 10; // Hypertension

    // Smoker factor
    if (smoker) riskScore += 15; // Smoking significantly increases the risk

    // Diabetes factor
    if (diabetes) riskScore += 15; // Diabetes is a significant risk factor in India

    // Determine risk level
    let riskMessage = 'Low risk';
    if (riskScore >= 20 && riskScore < 40) riskMessage = 'Moderate risk';
    if (riskScore >= 40) riskMessage = 'High risk';

    // Display result
    document.getElementById('result').textContent = `Your heart disease risk is: ${riskMessage}`;
});
