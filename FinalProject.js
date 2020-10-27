function createUser(name, age, gender, height, weight, BMI, BMR) {
    this.name = prompt(`What's your name?`),
        this.age = prompt(`How old are you?`),
        this.gender = prompt(`What is your gender?`),
        this.height = prompt(`How tall are you (in inches)?`),
        this.weight = prompt(`How much do you weigh (in lbs)?`),
        this.BMI = bmiCalc(this.height, this.weight),
        this.BMR = bmrCalc(this.height, this.weight, this.age)
}

let BMI = 0;
let BMR = 0;

function bmrCalc(height, weight, age) {
    BMR = 66 + (6.23 * this.weight) + (12.7 * this.height) - (6.8 * this.age);
    return alert(`Your BMR is ${Math.floor(BMR)}`);
}


function bmiCalc(height, weight) {
    BMI = (703 * this.weight) / (this.height ** 2)
    alert(`Your BMI is ${Math.round(BMI * 100) / 100}.`)
    if (BMI >= 30) {
        return alert(`BMI >= 30: You're obese.`);
    } else if (BMI >= 25) {
        return alert(`BMI >= 25: You're overweight.`);
    } else if (BMI >= 18.5) {
        return alert(`BMI >= 18.5: You're weight is normal.`);
    } else {
        return alert(`BMI < 18.5: You're underweight.`);
    }
}

createUser();
// const user1 = new createUser('Kyle', age = 24, 'Male', height = 66, weight = 145);




// const activity = {
//     1: 'sedentary',
//     2: 'moderatelyActive',
//     3: 'veryActive'
// }

// function activityBMR() {
//     if (1) {
//         return console.log((`You need ${Math.round(BMR * 1.2) * 100 / 100}kcal/day.`));
//     } else if (2) {
//         return console.log((`You need ${Math.round(BMR * 1.55) * 100 / 100}kcal/day.`));
//     } else {
//         return console.log((`You need ${Math.round(BMR * 1.9) * 100 / 100}kcal/day.`));
//     }
// }
// activityBMR();

// Choose one of the options
// need to declare goal in user1
// create object to hold goal choices
let goal = {
    1: `Your recommended calories(per day) is ${Math.floor(BMR)}kcal.`,
    2: `Your recommended calories(per day) is ${Math.floor(BMR + 250)}kcal.`,
    3: `Your recommended calories(per day) is ${Math.floor(BMR + 500)}kcal.`,
    4: `Your recommended calories(per day) is ${Math.floor(BMR - 500)}kcal.`,
    5: `Your recommended calories(per day) is ${Math.floor(BMR - 1500)}kcal.`
}

let goalChoice = prompt(`What's your goal?`);

// 1. Normal (maintain weights) = BMR
if (goalChoice === '1') console.log(goal['1'])
// 2. Bulk up (increasing muscle mass by 0.5lb/week) + 250kcal/day
if (goalChoice === '2') console.log(goal['2'])
// 3. Bulk up 1 (increasing muscle mass by 1lb/week) + 500kcal/day
if (goalChoice === '3') console.log(goal['3'])
// 4. Easy weightloss (lose 1/lb a week) -500kcal/day
if (goalChoice === '4') console.log(goal['4']);
// 5. Extreme weightloss (lose 3/lb a week) - 1500kcal/day
if (goalChoice === '5') console.log(goal['5']);

// declare function for meal choices
// alert that greets the user
// presents the food choices 

// creates calorie counter to track calories from each choice
// If it exceeds our recommended calories per day, return warning message
// if it does not, return congratulatory message saying you're on track

let foodObj = {
    Breakfast: {
        Omelet: 200,
        Eggs: 600,
    },
    Lunch: {
        Cheeseburger: 1500,
        Salad: 100,
        Chipotle: 1200,

    },
    Dinner: {
        RamenNoodle: 550,
        Pho: 770,
        DuckCurry: 895,
        HawaiianPizza: 1434,
        ProteinShake: 180,
        Fasting: 0
    },
}

alert(`Hi, ${this.name}.  What would you like to eat today?  Here are your choices for 1) Breakfast: ${Object.keys(foodObj.Breakfast)} 2) Lunch: ${Object.keys(foodObj.Lunch)} and 3) Dinner: ${Object.keys(foodObj.Dinner)}.`)

let totalCalories = foodChoices();

function foodChoices() {
    let breakfast = prompt(`Breakfast?`)
    if (!Object.keys(foodObj.Breakfast).includes(breakfast)) {
        alert(`That's not one of the choices. Try again.`);
        breakfast = prompt(`Breakfast?`)
    }

    let lunch = prompt(`Lunch?`)
    if (!Object.keys(foodObj.Lunch).includes(lunch)) {
        alert(`That's not one of the choices. Try again.`);
        lunch = prompt(`Lunch?`)
    }

    let dinner = prompt(`Dinner?`)
    if (!Object.keys(foodObj.Dinner).includes(dinner)) {
        alert(`That's not one of the choices. Try again.`);
        dinner = prompt(`Dinner?`)
    }

    return (foodObj.Breakfast[breakfast] + foodObj.Lunch[lunch] + foodObj.Dinner[dinner])
}

if (totalCalories > BMR) {
    console.log(`You eat too much.`)
} else if (totalCalories === BMR) {
    console.log(`Great job!`)
} else {
    console.log(`Time for snack :)`)
}