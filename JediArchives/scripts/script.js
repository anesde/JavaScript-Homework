let navigationService = {
    peopleBtn: document.getElementById('btnPeople'),
    shipBtn: document.getElementById('btnShip'),
    nextBtn: document.getElementById('next'),
    prevBtn: document.getElementById('prev'),
    currentPage: 1,
    btnPressed: '',
    registerEventListener: function () {
        this.peopleBtn.addEventListener('click', function () {
            // console.log('abc2');
            navigationService.btnPressed = 'people';
            apiService.getPeople(navigationService.currentPage);

        })
        this.shipBtn.addEventListener('click', function () {
            // console.log('abc3');
            navigationService.btnPressed = 'ships';
            apiService.getShips(navigationService.currentPage);
        })
        this.nextBtn.addEventListener('click', function () {
            navigationService.currentPage++;
            if (navigationService.btnPressed === 'people') {
                apiService.getPeople(navigationService.currentPage);
            }

            if (navigationService.btnPressed === 'ships') {
                apiService.getShips(navigationService.currentPage)
            }
            // console.log(navigationService.currentPage)
        })
        this.prevBtn.addEventListener('click', function () {
            navigationService.currentPage--;
            if (navigationService.btnPressed === 'people') {
                apiService.getPeople(navigationService.currentPage);
            }
            if (navigationService.btnPressed === 'ships') {
                apiService.getShips(navigationService.currentPage);
            }
            // console.log(navigationService.currentPage)
        })
    }
}

let apiService = {
    baseUrl: "https://swapi.dev/api/",
    getPeople: function (page) {
        let peopleUrl = `${this.baseUrl}people/?page=${page}`;
        fetch(peopleUrl)
            .then(function (response) {
                return response.json();
            }).then(function (data) {
                // check for next page
                // loader
                // show result
                uiService.showPeople(data.results)
                console.log(data);
            }).catch(function (error) {
                console.log(error);
            })
    },
    getShips: function (page) {
        let shipUrl = `${this.baseUrl}starships/?page=${page}`
        fetch(shipUrl)
            .then(function (response) {
                return response.json();
            }).then(function (data) {
                uiService.showShips(data.results);
            })
    }
}

// apiService.getPeople(3);
let uiService = {
    showPeople: function (people) {
        let table = document.getElementById('table');
        let html = "";
        for (let person of people) {
            html += `<tr><th>Name</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Gender</th>
            <th>Birth Year</th>
            <th>Appearences</th>
            <tr><td>${person.name}</td>
            <td>${person.height}</td>
            <td>${person.mass}</td>
            <td>${person.gender}</td>
            <td>${person.birth_year}</td>
            <td>${person.films.length}</td></tr></tr>`
        }
        table.innerHTML = html;
    },
    showShips: function (ships) {
        let table = document.getElementById('table');
        let html = "";
        for (let ship of ships) {
            html += `<tr><th>Name</th>
            <th>Mode;</th>
            <th>Manufaturer</th>
            <th>Cost</th>
            <th>People Capacity</th>
            <th>Class</th>
            <tr><td>${ship.name}</td>
            <td>${ship.model}</td>
            <td>${ship.manufacturer}</td>
            <td>${ship.cost_in_credits}</td>
            <td>${ship.passengers}</td>
            <td>${ship.starship_class}</td></tr></tr>`
        }
        table.innerHTML = html;
    },
    checkForPage: function (page) {
        return page === null;
    },
    toggleBtn: function (toggle, btn) {
        if (toggle) {

        }
    }

}

navigationService.registerEventListener();