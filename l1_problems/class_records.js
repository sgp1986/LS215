/*
exams are weighted 65%
exercises are weighted 35%
each term has 4 exams, several exercises
exams have fixed max score of 100
exercises have varied max score and counts
the total max point value for all exercises is 100 regardless of hw many exercises the student has to complete
  one term may have five exercises with possible maximum scores consisting of [30, 20, 10, 20, 20] and another term has exercises with possible scores of [20, 30, 50]
to determine students grade
  find average score from four exams
  sum all the exercises scores
  apply weights to compute students final percent grade
  determine letter equivalent of the percent grade

example
  student exam scores: [90, 80, 95, 71]
  possible exercise scores: [20, 30, 50]
  student exercise scores: [20, 15, 40]

  steps to compute final grade
    compute average exam score: (90 + 80 + 95 + 71) / 4 = 84
    compute total exercise score: 20 + 15 + 40 = 75
    apply weights to find final percentage: 84 * .65 + 75 * .35 = 80.85
    round percent grade to nearest int: 81
    find letter grade from table: C
    combine percent grade and letter grade: "81 (C)"
----------------------
write a function named generateClassRecordSummary
takes one argument
  object of objects containing student id and scores
find final grade percent and letter
return object containing studentGrades and exams average, minimum, maximum
----------------------
--algo
declare results object = { studentGrades: [], exams: [ {average:0, min: 0, max: 0} x4 ]
iterate through each student
within each student object
  find average exam score
  find total exercises score
  compute final grade perecent and letter
    add as string to results.studentGrades
  iterate through exam scores
    add score to average, if score < min or > max, reassign
return results object
*/

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  let summary = {
    studentGrades: [],
    exams: [
      { average: [], minimum: 100, maximum: 0 },
      { average: [], minimum: 100, maximum: 0 },
      { average: [], minimum: 100, maximum: 0 },
      { average: [], minimum: 100, maximum: 0 }
    ],
  }

  Object.values(scores).forEach((student) => {
    let totalExamScore = 0;
    let totalExerciseScore = 0;
    let overallPercent = 0;
    let letterGrade = '';
    let overallGrade = '';
    
    // add exam to summary exams average array and update min max
    student.scores.exams.forEach((exam, index) => {
      summary.exams[index].average.push(exam);
      if (exam <= summary.exams[index].minimum) {
        summary.exams[index].minimum = exam;
      }
      if (exam >= summary.exams[index].maximum) {
        summary.exams[index].maximum = exam;
      }

      totalExamScore += exam;
    });
    // average out students exam scores
    totalExamScore /= 4;

    // sum up students exercise scores
    student.scores.exercises.forEach(exercise => {
      totalExerciseScore += exercise;
    });
    
    // find students overall percentage
    overallPercent = Math.round((totalExamScore * .65) + (totalExerciseScore * .35));

    // find students letter grade
    if (overallPercent >= 93) {
      letterGrade = 'A';
    } else if (overallPercent >= 85) {
      letterGrade = 'B';
    } else if (overallPercent >= 77) {
      letterGrade = 'C';
    } else if (overallPercent >= 69) {
      letterGrade = 'D';
    } else if (overallPercent >= 60) {
      letterGrade = 'E';
    } else {
      letterGrade = 'F';
    }

    // combine percent and letter grade
    overallGrade = String(overallPercent) + ` (${letterGrade})`;
    summary.studentGrades.push(overallGrade);
  });

  // average all scores for each exam
  summary.exams.forEach(examData => {
    examData.average = (examData.average.reduce((accumulator, score) => accumulator + score, 0)) / examData.average.length;
  });
  
  return summary;
}

console.log(generateClassRecordSummary(studentScores));

// LS Solution
// function generateClassRecordSummary(scores) {
//   let scoreData = Object.keys(scores).map(student => scores[student].scores);
//   let examData = scoreData.map(score => score.exams);

//   return {
//     studentGrades: scoreData.map(scoreObj => getStudentScore(scoreObj)),
//     exams: getExamSummary(examData),
//   };
// }

// function getStudentScore(scoreObj) {
//   let lookupLetter = function (percentageGrade) {
//     if (percentageGrade >= 93) {
//       return 'A';
//     } else if (percentageGrade >= 85 && percentageGrade < 93) {
//       return 'B';
//     } else if (percentageGrade >= 77 && percentageGrade < 85) {
//       return 'C';
//     } else if (percentageGrade >= 69 && percentageGrade < 77) {
//       return 'D';
//     } else if (percentageGrade >= 60 && percentageGrade < 69) {
//       return 'E';
//     } else {
//       return 'F';
//     }
//   };

//   let examsAvg = computeExamsAverage(scoreObj.exams);
//   let exercisesSum = computeExercisesScore(scoreObj.exercises);
//   let percentageGrade = Math.round(examsAvg * 0.65 + exercisesSum * 0.35);

//   return String(percentageGrade) + ' (' + lookupLetter(percentageGrade) + ')';
// }

// function computeExamsAverage(exams) {
//   return exams.reduce((total, score) => total + score) / exams.length;
// }

// function computeExercisesScore(exercises) {
//   return exercises.reduce((total, score) => total + score);
// }

// function getExamSummary(examScoresPerStudent) {
//   let scoresPerExam = transpose(examScoresPerStudent);

//   return scoresPerExam.map(examScores => {
//     return {
//       average: parseFloat(getExamAverage(examScores)),
//       minimum: getExamMinimum(examScores),
//       maximum: getExamMaximum(examScores),
//     };
//   });
// }

// function transpose(array) {
//   return array[0].map((col, columnIdx) => {
//     return array.map(row => row[columnIdx]);
//   });
// }

// function getExamAverage(scores) {
//   return (scores.reduce((total, score) => total + score) / scores.length)
//             .toFixed(1);
// }

// function getExamMinimum(scores) {
//   return scores.reduce((min, score) => (min <= score ? min : score));
// }

// function getExamMaximum(scores) {
//   return scores.reduce((max, score) => (max >= score ? max : score));
// }