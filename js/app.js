// ============================================
// JS-CALCULATOR APPLICATION
// A simple calculator application with basic arithmetic operations
// ============================================

// Get reference to the display input element from the HTML document
const display = document.getElementById('display');

/**
 * Appends a value (number or operator) to the display
 * @param {string} value - The value to append (e.g., '1', '+', '.')
 */
function appendToDisplay(value) {
    // Add the value to the end of the current display value
    display.value += value;
}

/**
 * Clears the entire display
 * Resets the display to an empty string
 */
function clearDisplay() {
    // Reset the display value to empty
    display.value = '';
}

/**
 * Deletes the last character from the display
 * Used for correcting input errors
 */
function deleteLast() {
    // Remove the last character by slicing from start to one position before the end
    display.value = display.value.slice(0, -1);
}

/**
 * Calculates the mathematical expression in the display
 * Uses eval() to evaluate the expression and displays the result
 * Handles errors gracefully by displaying 'Error' message
 */
function calculate() {
    // Try to evaluate the expression in the display
    try {
        // Evaluate the mathematical expression and update display with result
        display.value = eval(display.value);
    } catch (error) {
        // If there's an error (invalid expression), display 'Error' message
        display.value = 'Error';
    }
}

