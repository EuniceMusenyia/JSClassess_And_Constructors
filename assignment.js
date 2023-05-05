// You are working on a web application for a car rental company. They want to keep track
// of their car inventory and rental information. Your task is to create a JavaScript class or
// function constructor for representing cars in their inventory and another one for
// representing rental information.
// Requirements:
// 1) Create a Car class or function constructor that has the following properties:
// a. make (string): The make of the car, e.g., "Toyota".
// b. model (string): The model of the car, e.g., "Camry".
// c. year (number): The year the car was manufactured, e.g., 2020.
// d. isAvailable (boolean): Indicates if the car is currently available for rent.
// The Car class or function constructor should also have a method called
// toggleAvailability that changes the isAvailable property to its opposite value (true to
// false, false to true)
function Car (make, model, year,isAvailable) {
    this.make = make;
    this. model = model;
    this.year = year;
    this.isAvailable = true;

    this.toggleAvailability= function(){
        this.isAvailable = !this.isAvailable;
        }
    }

const car = new Car('Toyota', 'Camry', 2020);
console.log(car.isAvailable);
car.toggleAvailability();
console.log(car.isAvailable);

// 2) Create a Rental class or function constructor that has the following properties:
// ● car (Car object): The car that has been rented.
// ● renterName (string): The name of the person who rented the car.
// ● rentalStartDate (Date object): The start date of the rental period.
// ● rentalEndDate (Date object): The end date of the rental period.
// The Rental class or function constructor should also have a method called
// calculateRentalDuration that returns the rental duration in days.
function Rentalinformation(car, renterName, rentalStartDate, rentalEndDate) {
this.car = car;
this.renterName = renterName;
this.rentalStartDate = rentalStartDate;
this.rentalEndDate = rentalEndDate;   


this.calculateRentalDuration = function(){
    let aDay = 24*60*60*1000;
    let startDate = new Date(this.rentalStartDate);
    let endDate = new Date(this.rentalEndDate);
    let timeDifference = Math.abs(endDate - startDate);
    return Math.round(timeDifference/aDay);
}
}
let rentCar = new Rentalinformation(car, 'Robinson Jones', '2023-05-04', '2023-05, 010');
console.log(rentCar.calculateRentalDuration());

// 3) Create an instance of the Car class or function constructor for a car in the
// inventory. Then, create an instance of the Rental class or function constructor for
// a rental involving the car you created. Finally, calculate the rental duration using
// the calculateRentalDuration method.
let car2 = new Car ('Toyota', 'Camry', 2021);
let rentCar2 = new Rentalinformation(car2, 'Gabby Williams', '2023-05-06', '2023-05-08');
const car2RentalDuration =  rentCar2.calculateRentalDuration();
console.log(car2RentalDuration);

       
        // Question 2
// You are building a simple quiz app that contains multiple-choice questions. Your task is
// to create two JavaScript classes: Question and Quiz. The Question class will represent
// individual questions, and the Quiz class will manage a collection of questions and the
// user's progress.
// 1. Create a Question class with the following properties:
// ● text(string): The text of the question.
// ● options(array): An array containing the multiple-choice options.
// ● correctAnswer(string): The correct answer to the question.
// The Question class should also have a method called checkAnswer that takes a
// user's answer as a parameter and returns true if the answer is correct and false
// otherwise.
function Question(text, options,correctAnswer){
    this.text = text;
    this.options = options;
    this.correctAnswer = correctAnswer;

    this.checkAnswer= function(usersAns){
       return usersAns ===this.correctAnswer

    }

}
let question = new Question("Which language are you not conversant with?", ['JavaScript', 'Python','Java','Kotlin'],'Java');
console.log(question.checkAnswer('Javascript'));
Question()

// 2. Create a Quiz class with the following properties:
// ● questions(array):An array of Question objects.
// ● currentQuestionIndex(number): The index of the current question in the
// questions array.
// ● score(number): The user’s current score.
// The Quiz class should have the following methods:
// ● addQuestion: Takes a Question object as a parameter and adds it to the
// questions array.
// ● nextQuestion: Advances to the next question in the quiz by incrementing the
// currentQuestionIndex.
// ● submitAnswer: Takes a user's answer as a parameter, checks if the answer is
// correct using the checkAnswer method of the Question class, and updates the
// score if the answer is correct.
function Quiz(questions, currentQuestionIndex,score, addQuestion,nextQuestion,submitAnswer){
this.questions = [];
this.currentQuestionIndex = 0;
this.score = 0;

this.addQuestion=function(question){
    this.questions.push(question);

}

this.nextQuestion = function(){
    this.currentQuestionIndex++;
}
this.submitAnswer = function(usersAns){
    let newQuestion = this.questions[this.currentQuestionIndex];
    if(newQuestion.checkAnswer(usersAns)){
        this.score++;
    }
}
 
}

const question1 = new Question('How many students are there in AkiraChix', [33, 4, 100], 100);
const question2 = new Question('What is the capital city of Kenya?', ['Mombasa', 'Nairobi', 'Nakuru'],'Nairobi')
let quiz = new Quiz();
quiz.addQuestion(question1);
quiz.addQuestion(question2);

quiz.submitAnswer(100);
quiz.nextQuestion();
quiz.submitAnswer('Mombasa');

console.log(quiz.score);
