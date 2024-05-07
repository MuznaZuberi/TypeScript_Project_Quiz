import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.greenBright("*********", "TypeScript Quiz - MCQ - Multiple Choice Questions", "**********"));
let Quiz = await inquirer.prompt([
    {
        name: "q1",
        type: "list",
        message: "1. What is TypeScript primarily used for?",
        choices: ["A. Asynchronous operations", "B. Static Typing", "C. Memory Management", "D. Dynamic Typing"],
    },
    {
        name: "q2",
        type: "list",
        message: "2. Which of the following is NOT a valid TypeScript data type?",
        choices: ["A. tuple", "B. any", "C. void", "D. dynamic"],
    },
    {
        name: "q3",
        type: "list",
        message: "3. How do you specify that a function does not return anything in TypeScript?",
        choices: ["A. function myFunc(): None", "B. function myFunc(): undefined", "C. function myFunc(): null", "D. function myFunc(): void"],
    },
    {
        name: "q4",
        type: "list",
        message: "4. How do you define a custom type in TypeScript?",
        choices: ["A. interface", "B. type", "C. Both A and B", "D. typedef"],
    },
    {
        name: "q5",
        type: "list",
        message: "5. What is the primary purpose of TypeScript interfaces?",
        choices: ["A. To manage asynchronous code", "B. To generate HTML templates", "C. To create new classes", "D. To describe the shape of an object"],
    },
    {
        name: "q6",
        type: "list",
        message: "6. How do you define an optional parameter in the TypeScript function?",
        choices: ["A. function foo(param string?)", "B. function foo(param?: string)", "C. function foo(param string=)", "D. function foo(param: string?)"],
    },
    {
        name: "q7",
        type: "list",
        message: "7. Which of the following TypeScript types can the unknown type be assigned to without type assertion?",
        choices: ["A. any", "B. number", "C. string", "D. void"],
    },
    {
        name: "q8",
        type: "list",
        message: "8. Which TypeScript feature allows for declaring new names for existing types?",
        choices: ["A. Interfaces", "B. Decorators", "C. Aliases", "D. Enums"],
    },
    {
        name: "q9",
        type: "list",
        message: "9. How do you declare a class in TypeScript?",
        choices: ["A. class ClassName {}", "B. new Class ClassName {}", "C. def ClassName:", "D. object ClassName {}"],
    },
    {
        name: "q10",
        type: "list",
        message: "10. How do you define an array of strings in TypeScript?",
        choices: ["A. Array<string>", "B. List<string>", "C. Both A and D", "D. string[]"],
    },
]);
if (Quiz.q1 == "B. Static Typing" || Quiz.q2 == "D. dynamic" || Quiz.q3 == "D. function myFunc(): void" || Quiz.q4 == "C. Both A and B" || Quiz.q5 == "D. To describe the shape of an object" || Quiz.q6 == "B. function foo(param?: string)" || Quiz.q7 == "A. any" || Quiz.q8 == "C. Aliases" || Quiz.q9 == "A. class ClassName {}" || Quiz.q10 == "C. Both A and D") {
    console.log("\n");
    console.log(chalk.yellowBright("**********", "The result of the quiz:", "************"));
    console.log(chalk.green(`1)${"B. Static Typing"} ${"\n"}2)${"D. dynamic"} ${"\n"}3)${"D. function myFunc(): void"}  ${"\n"}4)4{"C. Both A and B"}  ${"\n"}5)${"D. To describe the shape of an object"}  ${"\n"}6){"B. function foo(param?: string)"}  ${"\n"}7)${"A. any"}   ${"\n"}8)${"C. Aliases"}  ${"\n"}9)${"A. class ClassName {}"}  ${"\n"}10)${"C. Both A and D"}`));
}
else {
    console.log("Try again later!");
}
