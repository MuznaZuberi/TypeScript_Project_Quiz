#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let ans1 = "A. A superset of JavaScript that adds static typing";
let ans2 = "B. A special type that defines a set of named constants";
let ans3 = "C. export function myFunction() { }";
let ans4 = "A. A type that can hold one of several types";
let ans5 = "A. function identity<T>(arg: T): T { return arg; }";
let ans6 = "A. class MyClass implements MyInterface { }";
let ans7 = "A. let num: number = 5;";
let ans8 = "A. To define a blueprint for classes";
let ans9 = `"A. let someValue: any = "this is a string"; let strength: number = (<string>someValue).length;"`;
let ans10 = "A. tsc";
let Quiz = await inquirer.prompt([
    {
        name: "q1",
        type: "list",
        message: "Q1: What is TypeScript ? ",
        choices: ["A. A superset of JavaScript that adds static typing", "B. A framework for building web applications", "C. A new programming language unrelated to JavaScript",
            "D. A library for handling asynchronous operations"],
    },
    {
        name: "q2",
        type: "list",
        message: "Q2: What is an enum in TypeScript?",
        choices: ["A. A way to declare private variables", "B. A special type that defines a set of named constants", "C. A variable that holds multiple values", "D. A function that performs asynchronous operations"],
    },
    {
        name: "q3",
        type: "list",
        message: "Q3: How do you export a function from a module in TypeScript?",
        choices: ["A. module. exports = myFunction;", "B. public function myFunction() { }", "C. export function myFunction() { }", "D. exports.myFunction = function() { }"],
    },
    {
        name: "q4",
        type: "list",
        message: "Q4 : What is a union type in TypeScript?",
        choices: ["A. A type that can hold one of several types", "B. A type that combines multiple interfaces", "C. A type used for asynchronous operations", "D. A type that provides runtime type checking"],
    },
    {
        name: "q5",
        type: "list",
        message: "Q5: Which of the following is a correct use of generics in TypeScript?",
        choices: ["A. function identity<T>(arg: T): T { return arg; }", "B. function identity(arg: any): any { return arg; }", "C. function identity<T>(arg): T { return arg; }", "D. function identity(arg: T): T { return arg; }"],
    },
    {
        name: "q6",
        type: "list",
        message: "Q6: How do you declare a class in TypeScript that implements an interface?",
        choices: ["A. class MyClass implements MyInterface { }", "B. class MyClass extends MyInterface { }", "C. class MyClass implementsClass MyInterface { }", "D. class MyClass implementsInterface MyInterface { }"],
    },
    {
        name: "q7",
        type: "list",
        message: "Q7: Which of the following is the correct way to declare a variable with a number type in TypeScript?",
        choices: ["A. let num: number = 5;", `"B. let num = "5;"`, "C. var num: 5 = number;", "D. num: let number = 5;"],
    },
    {
        name: "q8",
        type: "list",
        message: "Q8: What is the purpose of an interface in TypeScript?",
        choices: ["A. To define a blueprint for classes", "B. To provide runtime type checking", "C. To enforce security policies", "D. To enhance the performance of applications"],
    },
    {
        name: "q9",
        type: "list",
        message: "Q9 : Which syntax is used for type assertions in TypeScript?",
        choices: [`"A. let someValue: any = "this is a string"; let strLength: number = (<string>someValue).length;"`, `"B. let someValue: any = "this is a string"; let strLength: number = (string)someValue.length;"`, `"C. let someValue: any = "this is a string"; let strLength: number = (someValue<string>).length;"`, `"D. let someValue: any = "this is a string"; let strLength: number = (someValue).length<string>;"`],
    },
    {
        name: "q10",
        type: "list",
        message: "Q10: Which command is used to compile a TypeScript file?",
        choices: ["A. tsc", "B. node", "C. npm run", "D. ts-node"],
    },
]);
if (Quiz.q1 == "A. A superset of JavaScript that adds static typing" || Quiz.q2 == "B. A special type that defines a set of named constants" || Quiz.q3 == "C. export function myFunction() { }" || Quiz.q4 == "A. A type that can hold one of several types" || Quiz.q5 == "A. function identity<T>(arg: T): T { return arg; }" || Quiz.q6 == "A. class MyClass implements MyInterface { }" || Quiz.q7 == "A. let num: number = 5;" || Quiz.q8 == "A. To define a blueprint for classes" || Quiz.q9 == `"A. let someValue: any = "this is a string"; let strLength: number = (<string>someValue).length;"` || Quiz.q10 == "A. tsc") {
    console.log("\n");
    console.log(chalk.yellow bright("Check your correct answer!"));
    console.log(chalk.greenlight("Q1 : Correct answer is = ", ans1 + "\n" + "Q2 : Correct answer is = ", ans2 + "\n" + "Q3 : Correct answer is = ", ans3 + "Q4 : Correct answer is = ", ans4 + "\n" + "Q5 : Correct answer is = ", ans5 + "\n" + "Q6 : Correct answer is = ", ans6 + "\n" + "Q7 : Correct answer is = ", ans7 + "\n" + "Q8 : Correct answer is = ", ans8 + "\n" + "Q9 : Correct answer is = ", ans9 + "\n" + "Q10 : Correct answer is = ", ans10));
}
else {
    console.log("Try again later!");
}

