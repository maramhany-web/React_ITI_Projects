

var person = {
    firstName:`Maram`,
    lastName :`Hany`,
    age: 21,
    city :`cairo`,
    isStudent: true,

    university:{
        universityName: "Capital University",
        faculty : "Faculty of Science",
        major : "CS and Statistics",
        graduationYear : 2027,
        },

    training:{
        training1 :{
            trainingName: "Web Development",
            technology : "React",
            organization : "ITI",
            hours : 144,
            type : "online",
        },
        training2 :{
            trainingName: "Big data",
            technology : "Hadoop",
            organization : "NTI",
            hours : 78,
            type : "offline",
        },
        training3 :{
            trainingName: "Statistics",
            organization : "CAPMAS",
            hours : 20,
            type : "offline",
        }
    }
};
console.log(person);
console.log(person.city);

function totalHoursOfTraining(training){
    var totalHours =0;

    for (var i=1 ; i<=3 ; i++ ){
        var totalTraining = training["training"+i].hours;
        totalHours += totalTraining;
    }
    return totalHours;

};
console.log("Total Hours Of Trainings:" ,totalHoursOfTraining(person.training));