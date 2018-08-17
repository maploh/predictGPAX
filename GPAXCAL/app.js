var currentGrades_input = document.getElementById("current-grades");
var currentCredits_input = document.getElementById("current-credits");

var grade1_input = document.getElementById("grade-1");
var grade2_input = document.getElementById("grade-2");
var grade3_input = document.getElementById("grade-3");
var grade4_input = document.getElementById("grade-4");
var grade5_input = document.getElementById("grade-5");
var grade6_input = document.getElementById("grade-6");

var credit1_input = document.getElementById("credit-1");
var credit2_input = document.getElementById("credit-2");
var credit3_input = document.getElementById("credit-3");
var credit4_input = document.getElementById("credit-4");
var credit5_input = document.getElementById("credit-5");
var credit6_input = document.getElementById("credit-6");

var calButton = document.getElementById("cal-button");

var arrayGrades = [];
var arrayCredits = [];
var currentGrade = 0;
var currentCredit = 0;
var grades = 0;
var credits = 0;
var predictedGPAX = 0;

const fetchData = () =>{
    arrayGrades[0] = parseFloat(grade1_input.value);
    arrayGrades[1] = parseFloat(grade2_input.value);
    arrayGrades[2] = parseFloat(grade3_input.value);
    arrayGrades[3] = parseFloat(grade4_input.value);
    arrayGrades[4] = parseFloat(grade5_input.value);
    
    arrayCredits[0] = parseFloat(credit1_input.value);
    arrayCredits[1] = parseFloat(credit2_input.value);
    arrayCredits[2] = parseFloat(credit3_input.value);
    arrayCredits[3] = parseFloat(credit4_input.value);
    arrayCredits[4] = parseFloat(credit5_input.value);
    
    
    currentGrade = parseFloat(currentGrades_input.value);
    currentCredit = parseFloat(currentCredits_input.value);
    
    return [arrayCredits, arrayGrades, currentGrade, currentCredit];
    
}

const calculateGrade = (array1,array2)=>{
    for(var i = 0; i<array1.length; i++){
        if(isNaN(array1[i])){
            array1[i] = 0;
        }
        if(isNaN(array2[i])){
            array2[i] = 0;
        }
        grades += array1[i]*array2[i];
    }
    return grades;
}

const calculateCredit = (array)=>{
    for(var i=0; i<array.length; i++){
        credits+= array[i];
    }
    return credits;
}

const calculatePredictedGrade = (currentGrade, currentCredit, predictedGrades, predictedCredits) =>{
    var totalGrades = currentGrade*currentCredit + predictedGrades;
    var totalCredits = currentCredit + predictedCredits;
    predictedGPAX = totalGrades/totalCredits;
    predictedGPAX = (Math.round(predictedGPAX*100))/100;
    return predictedGPAX;
}

const setDefault = () =>{
    arrayCredits = [];
    arrayCredits = [];
    currentGrade=0;
    currentCredit=0;
    grades=0;
    credits=0; 
    predictedGPAX = 0;
    return [arrayCredits, arrayCredits, currentGrade, currentCredit, grades, credits, predictedGPAX];
}

const roundPredictedGrade = () =>{
    predictedGPAX = (Math.round(predictedGPAX*100))/100;
    return predictedGPAX;
}

calButton.addEventListener("click", function(){
    fetchData();
    calculateGrade(arrayCredits, arrayGrades);
    calculateCredit(arrayCredits)
    calculatePredictedGrade(currentGrade, currentCredit, grades, credits);
    alert("Your predicted future GPAX might look something like: " + predictedGPAX);
    setDefault();
});
