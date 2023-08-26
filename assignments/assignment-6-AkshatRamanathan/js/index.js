/**
 * global variable declaration
 * 
 */
// link to json file
const remindersURL = 'data/reminders.json';
// colour cycling for reminder cards
// var colors = ['#eed8d8', '#d8deee', '#eee5d8', '#e4d8ee', '#dfeed8', '#d8eeee'];
// empty global data
var remindersData = [];
// form html template for adding reminder modal
var newReminderForm = `
<div class="modal-content">
    <span class="close" onclick="closeModal()">&times;</span>
    <h3>ENTER NEW REMINDER INFORMATION</h3>
    <hr />
    <form id="newReminderForm">
    <label for="name">Enter Name:</label><br />
    <input type="text" name="name" id="name" required/><br />
    <br />
    <label for="description">Enter Description:</label><br />
    <textarea rows="10" cols="90" name="description" id="description" required>Enter description here...</textarea><br />
    <br />
    <label for="time">Enter Time:</label><br />
    <input type="datetime-local" name="time" id="time" required /><br />
    <input  type="submit" id="submit-btn" class="btn" value="Submit" />
    </form>
</div>
`;

// modal html template for viewing selected remainder
var viewRemainder = (remainder) => {
    // checker variable to not allow editing only if completed
    var check = "";
    if (remainder.completed) {
        check = "disabled";
    }
    return `
    <div class="modal-content">
    <span class="close" onclick="closeModal()">&times;</span>
    <h3>VIEW REMAINDER</h3>
    <hr />
    <form id="viewReminderForm">
    <label for="id">ID:</label><br />
    <input type="text" name="id" id="id" value="${remainder.id}" disabled /><br />
    <br />
    <label for="name">Name:</label><br />
    <input type="text" name="name" id="name" value="${remainder.name}" ${check} required/><br />
    <br />
    <label for="description">Description:</label><br />
    <textarea rows="10" cols="90" name="description" id="description" ${check} required>${remainder.description}</textarea><br />
    <br />
    <label for="time">Time:</label><br />
    <input type="datetime-local" name="time" id="time" value=${remainder.time} ${check} required /><br />
    <br />
    <label for="completed">Mark As Complete:</label><br />
    <input type="checkbox" name="completed" id="completed" ${remainder.completed ? 'checked' : ''} ${check} /><br />
    <input  type="submit" id="submit-btn" class="btn" value="Update" ${check} />
    </form>
    </div>`;
}

/**
 * function to fetch the data from existing local storage or from server
 * @param {*} remindersURL 
 * @param {*} renderReminders 
 * @returns 
 */
async function fetchData(remindersURL, renderReminders) {
    // if existing data exists, load into app and process, else fetch from server 
    var existingData = localStorage.getItem("data");
    if (existingData) {
        remindersData = JSON.parse(existingData);
        renderReminders(remindersData);
        return;
    }
    // const xhr = new XMLHttpRequest();
    // xhr.open('GET', remindersURL);
    // xhr.onload = (event) => {
    //     const reminders = JSON.parse(event.target.responseText);
    //     remindersData = reminders;
    //     localStorage.setItem("data", JSON.stringify(remindersData));
    //     renderReminders(reminders);
    // }
    // xhr.send();
    const response = await fetch(remindersURL, { method: 'GET' });
    const reminders = await response.json();
    remindersData = reminders;
    localStorage.setItem("data", JSON.stringify(remindersData));
    renderReminders(remindersData);
}

/**
 * function to process the reminders and add each as card
 * @param {*} reminders 
 */
const renderReminders = (reminders) => {
    document.querySelector('.flex-container').innerHTML = '';
    // add reminder card for each reminder in array to the main container
    reminders.forEach(element => addReminder(element, document.querySelector('.flex-container')));
}

/**
 * function to create a card div and add content for each reminder
 * @param {*} reminder 
 * @param {*} parent 
 */
const addReminder = (reminder, parent) => {
    //create card div
    const reminderElement = document.createElement('div');
    // set data attributes and properties
    reminderElement.id = reminder.id;
    reminderElement.classList.add("card");
    reminderElement.setAttribute("data-name", reminder.name);
    // set card text with format
    reminderElement.innerHTML = `<h4>${reminder.name}</h4><hr/><h5>Time : ${new Date(reminder.time).toLocaleString()}</h5><hr/><p>${reminder.description}</p>`;
    // status based randomized colouring
    if (reminder.completed) {
        reminderElement.style.backgroundColor = '#ddd';
        reminderElement.style.opacity = 0.8;
    }
    else {
        // reminderElement.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        // reminderElement.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16) + 'a2';
        reminderElement.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16) + '73';
        // reminderElement.style.opacity=0.7;
    }
    // register expanding view event
    reminderElement.addEventListener('click', () => openModal('SELECTED', reminderElement.id));
    parent.appendChild(reminderElement); //add card to main container

}

/**
 * function to open modal overlay based on type of view (adding or viewing a reminder)
 * @param {*} type 
 * @param {*} id 
 */
function openModal(type, id) {
    document.getElementById('modal').style.display = 'block';
    if (type === 'SELECTED') {
        // set selected reminder form content
        var selectedRemainder = remindersData.filter(remainder => remainder.id == id)[0];
        // set selected reminder form content 
        document.getElementById('modal').innerHTML = viewRemainder(selectedRemainder);
        // register form submission event
        document.getElementById('viewReminderForm').addEventListener('submit', updateReminder);


    }
    else {
        // set new reminder form content 
        document.getElementById('modal').innerHTML = newReminderForm;
        // register form submission event
        document.getElementById('newReminderForm').addEventListener('submit', addNewReminder);

    }
}

/**
 * function to add a new reminder on form submission event
 * @param {*} event 
 */
function addNewReminder(event) {
    event.preventDefault();
    // create new reminder object and set data attributes
    var newReminder = {};
    newReminder.id = remindersData.length + 1;
    newReminder.name = event.target.name.value;
    newReminder.description = event.target.description.value;
    newReminder.time = event.target.time.value;
    newReminder.completed = false;
    // add reminder to the global data
    remindersData.push(newReminder);
    // persist the data 
    localStorage.setItem("data", JSON.stringify(remindersData));
    // trigger rerender
    renderReminders(remindersData);
    //close the modal
    closeModal();
}

/**
 * function to update the reminder on form submission event
 * @param {*} event 
 */
function updateReminder(event) {
    event.preventDefault();
    //new remainder creation
    var newReminder = {};
    newReminder.id = event.target.id.value;
    newReminder.name = event.target.name.value;
    newReminder.description = event.target.description.value;
    newReminder.time = event.target.time.value;
    newReminder.completed = event.target.completed.checked;
    //replace old reminder logic
    remindersData.forEach((element, index) => {
        if (element.id == newReminder.id) {
            remindersData[index] = newReminder;
        }
    })
    //persist the changes
    localStorage.setItem("data", JSON.stringify(remindersData));
    //trigger rerender
    renderReminders(remindersData);
    //close the modal
    closeModal();

}

/**
 * function to close  modal overlay
 */
function closeModal() {
    document.getElementById('modal').innerHTML = '';
    document.getElementById('modal').style.display = 'none';
}

// main function calls
fetchData(remindersURL, renderReminders);
document.addEventListener('keydown', e => e.key === 'Escape' ? closeModal() : null);
