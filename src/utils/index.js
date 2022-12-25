export const checkPasswordStrength = (password) => {
    // Check password length
    if (password.length < 8) {
        return "weak";
    }

    // Check for mix of upper and lower case letters, numbers, and special characters
    let hasUppercase = /[A-Z]/.test(password);
    let hasLowercase = /[a-z]/.test(password);
    let hasNumbers = /\d/.test(password);
    let hasSpecialCharacters = /[^A-Za-z0-9]/.test(password);

    if (hasUppercase + hasLowercase + hasNumbers + hasSpecialCharacters < 3) {
        return "medium";
    } else if (hasUppercase + hasLowercase + hasNumbers + hasSpecialCharacters === 3) {
        return "strong";
    }

    return "very-strong";
}