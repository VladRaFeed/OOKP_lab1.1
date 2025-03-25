import $ from "jquery";

const formWrapper = document.querySelector('.form-wrapper');
// asdasdasdasd
class physikTask {
    constructor(v, t) {
        this.speed = Number(v);
        this.time = Number(t);
    }

    solvePhysicTask() {
        console.log('The path is ' + this.speed + ' and the time is ' + this.time);
    }
}

class waySearchTask extends physikTask {
    constructor(v, t) {
        super(v, t);
    }

    solveWaySearchTask() {
        if(typeof this.speed === "number" && typeof this.time === "number" && this.speed > 0 && this.time > 0) {
            const ress = this.speed / this.time;
            return ress;

        } else {
            Notiflix.Notify.warning('Please enter a number larger than 0');
            return 0;
        }
    }
}

class waySearchTask2 extends physikTask {
    constructor(v, t, a) {
        super(v, t);
        this.acceleration = Number(a);
    }

    solveWaySearchTask() {
        if(typeof this.speed === "number" && typeof this.time === "number" && typeof this.acceleration === "number" && this.speed > 0 && this.time > 0 && this.acceleration > 0) {
            const ress = this.speed * this.time + (0.5 * this.acceleration * (this.time * this.time));
            return ress;

        } else {
            Notiflix.Notify.warning('Please enter a number larger than 0');
            return 0;
        }
    }
}

class densitySearch extends physikTask {
    constructor(m, v) {
        super(m, v);
        this.mass = Number(m);
        this.volume = Number(v);
    }

    solveDensitySearch() {
        if(typeof this.mass === "number" && typeof this.volume === "number" && this.mass > 0 && this.volume > 0) {
            const ress = this.mass / this.volume;
            return ress;

        } else {
            Notiflix.Notify.warning('Please enter a number larger than 0');
            return 0;
        }
    }
}

const task1Solve = () => {
    const form = document.querySelector('.taskForm');
    const resultText = document.querySelector('.taskResult');
    const speed = document.getElementById('speed').value;
    const time = document.getElementById('time').value;
    
    const task1 = new waySearchTask(speed, time);
    const ress = task1.solveWaySearchTask();
    if(ress !== 0) {
        resultText.innerHTML = ``;
        resultText.innerHTML = `Result is ${ress}`;
    }
}

const task1Markup = () => {
    formWrapper.innerHTML = `
    <p class="taskLabel">Розрахунок рівномірного прямолінійного руху</p>
        <form class="taskForm">
            <div class="input-wrapper">
                <label for="speed" class="form-label">Enter speed:</label>
                <input type="number" class="form-input" id="speed" required>
            </div>
            <div class="input-wrapper">
                <label for="time" class="form-label">Enter time:</label>
                <input type="number" class="form-input" id="time" required>
            </div>
            <button type="button" class="taskBtn task1Btn">Calculate</button>
            <p class="taskResult"></p>
        </form>
    `;
    const acceptBtn = document.querySelector('.task1Btn');
    acceptBtn.addEventListener('click', task1Solve);
}

const task2Solve = () => {
    const form = document.querySelector('.taskForm');
    const resultText = document.querySelector('.taskResult');
    const speed = document.getElementById('speed').value;
    const time = document.getElementById('time').value;
    const acceleration = document.getElementById('acceleration').value;
    
    const task2 = new waySearchTask2(speed, time, acceleration);
    const ress = task2.solveWaySearchTask();
    if(ress !== 0) {
        resultText.innerHTML = ``;
        resultText.innerHTML = `Result is ${ress}`;
    }
}

const task2Markup = () => {
    formWrapper.innerHTML = `
    <p class="taskLabel">Розрахунок рівнозмінного прямолінійного руху</p>
        <form class="taskForm">
            <div class="input-wrapper">
                <label for="speed" class="form-label">Enter speed:</label>
                <input type="number" class="form-input" id="speed" required>
            </div>
            <div class="input-wrapper">
                <label for="time" class="form-label">Enter time:</label>
                <input type="number" class="form-input" id="time" required>
            </div>
            <div class="input-wrapper">
                <label for="acceleration" class="form-label">Enter acceleration:</label>
                <input type="number" class="form-input" id="acceleration" required>
            </div>
            <button class="taskBtn task2Btn" type="button">Calculate</button>
            <p class="taskResult"></p>
        </form>
    `;
    

    const acceptBtn = document.querySelector('.task2Btn');
    acceptBtn.addEventListener('click', task2Solve);
}

const task3Solve = () => {
    const form = document.querySelector('.taskForm');
    const resultText = document.querySelector('.taskResult');
    const mass = document.getElementById('mass').value;
    const volume = document.getElementById('volume').value;
    
    const task3 = new densitySearch(mass, volume);
    const ress = task3.solveDensitySearch();
    if(ress !== 0) {
        resultText.innerHTML = ``;
        resultText.innerHTML = `Result is ${ress}`;
    }
}

const task3Markup = () => {
    formWrapper.innerHTML = `
    <p class="taskLabel">Розрахунок щільності</p>
        <form class="taskForm">
            <div class="input-wrapper">
                <label for="mass" class="form-label">Enter mass:</label>
                <input type="number" class="form-input" id="mass" required>
            </div>
            <div class="input-wrapper">
                <label for="volume" class="form-label">Enter volume:</label>
                <input type="number" class="form-input" id="volume" required>
            </div>
            <button class="taskBtn task3Btn" type="button">Calculate</button>
            <p class="taskResult"></p>
        </form>
    `;

    const acceptBtn = document.querySelector('.task3Btn');
    acceptBtn.addEventListener('click', task3Solve);
}

/*Dropdown Menu*/
$('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
    const selectedText = $(this).text();
    const selectedId = $(this).attr('id');
    $(this).parents('.dropdown').find('span').text(selectedText);
    $(this).parents('.dropdown').find('input').attr('value', selectedId);
    const result = selectedId;
    switch (result) {
        case "Task1":
            formWrapper.innerHTML= '';
            task1Markup();
            break;
        case "Task2":
            formWrapper.innerHTML= '';
            task2Markup();
            break;
        case "Task3":
            formWrapper.innerHTML= '';
            task3Markup();
            break;
        default:
            console.log("No task selected");
    }
});