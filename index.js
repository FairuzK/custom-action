const core= require('actions/core')

try {
    // The line below gets the input named 'who-to-greet' and stores it in the variable nameToGreet
    const nameToGreet=core.getInput('who-to-greet');
    // The line below will output 'Hello, <who-to-greet>!' where <who-to-greet> is the input provided to the action
    // The line below will print the greeting to the console
    console.log(`Hello', ${nameToGreet}!`);
    // The line below sets the output parameter 'time' to the current time
    core.setOutput('time', new Date().toTimeString());
} catch (error) {
    core.setFailed(error.message);
}