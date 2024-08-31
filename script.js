function toCase(str) {
    // Convert the string to lowercase
    const lower = str.toLowerCase();
    
    // Convert the string to uppercase
    const upper = str.toUpperCase();
    
    // Concatenate with a hyphen
    return `${lower}-${upper}`;
}

// Example usage:
console.log(toCase('Mthatha')); // 'mthatha-MTHATHA'
console.log(toCase('HelloWorld')); // 'helloworld-HELLOWORLD'
console.log(toCase('OpenAI')); // 'openai-OPENAI'
