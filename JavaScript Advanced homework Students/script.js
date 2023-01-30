function getPeople() {
    fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json")
        .then(function (response) {
            // console.log(response)
            return response.json()
        }).then(function (data) {
            // console.log(data)
            let studentsWithAverage3 = data.filter(x => x.averageGrade > 3);
            console.log(studentsWithAverage3);

            let femaleStudentWithAverage5 = data.filter(x => x.gender === 'Female' && x.averageGrade === 5)
            console.log(femaleStudentWithAverage5);

            let maleFullNameLivesInSkAndAgeOver18 = data.filter(x => x.firstName + ' ' + x.lastName && x.gender === 'Male' && x.city === 'Skopje' && x.age > 18)
            console.log(maleFullNameLivesInSkAndAgeOver18);

            let allFemaleAverageGradeOver24 = data.filter(x => x.averageGrade && x.gender === 'Female' && x.age > 24);
            console.log(allFemaleAverageGradeOver24);

            let maleStudentsNameStartWithBandAverage2 = data.filter(x => x.gender === 'Male' && x.firstName.startsWith('B') && x.averageGrade > 2);
            console.log(maleStudentsNameStartWithBandAverage2);

        }).catch(function (error) {
            console.log(error)
        })
}

getPeople();