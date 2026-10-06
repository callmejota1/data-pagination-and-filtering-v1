/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
const itemsPerPage = 9;

const showPage = (list, page) => {
   // Calculate the start and end index for the current page
  const startIndex = (page * itemsPerPage) - itemsPerPage;
  const endIndex = page * itemsPerPage;
  const studentList = document.querySelector('.student-list');
  // Clear the student list before adding new items
  studentList.innerHTML = '';

  // Loop through the list and add the students for the current page
  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      // Create the HTML for each student item
      const studentItem = `
        <li class="student-item cf">
          <div class="student-details">
            <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
            <h3>${list[i].name.first} ${list[i].name.last}</h3>
            <span class="email">${list[i].email}</span>
          </div>
          <div class="joined-details">
            <span class="date">Joined ${list[i].registered.date}</span>
          </div>
        </li>
      `;
      studentList.insertAdjacentHTML('beforeend', studentItem);
    }
  }
};


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

const addPagination = (list) => {
  const numOfPages = Math.ceil(list.length / itemsPerPage);
  const linkList = document.querySelector('.link-list');
  linkList.innerHTML = '';
// Create buttons for each page
  for (let i = 1; i <= numOfPages; i++) {
    const button = `<li><button type="button">${i}</button></li>`;
    linkList.insertAdjacentHTML('beforeend', button);
  }
// Set the first button as active
  document.querySelector('button').className = 'active';
// Add event listener to the buttons
  linkList.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      document.querySelector('.active').className = '';
      e.target.className = 'active';
      showPage(list, e.target.textContent);
    }
  });
};


// Call functions
showPage(data, 1);
addPagination(data);