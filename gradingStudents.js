let grades = [73, 67, 38, 33];

console.log(gradingStudents(grades));

function gradingStudents(grades) {
    let finalGrades = [];
    if (!isInRange(grades.length)) {
        return 0;
    }
    grades.forEach(grade => {
        if (!isGradeInRange(grade)) {
            return 0;
        }
        grade = isRoundable(grade) ? roundUp(grade) : grade;
        finalGrades.push(grade);

    });
    return finalGrades;
}

function isInRange(n) {
    return (n >= 1 && n <= 60);
}

function isGradeInRange(grade) {
    return grade >= 0 && grade <= 100;
}

function nextMultipleOf5(grade) {
    return Math.ceil(grade / 5) * 5;
}

function isRoundable(grade) {
    const diff = nextMultipleOf5(grade) - grade;
    return diff < 3 && grade >= 38;
}

function roundUp(grade) {
    return nextMultipleOf5(grade);
}