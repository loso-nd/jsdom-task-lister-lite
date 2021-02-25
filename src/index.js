/**
 * Standard Deliverables
 */

const taskForm = document.querySelector('#create-task-form');

taskForm.addEventListener('submit', handleSubmit);

function handleSubmit(e){
  e.preventDefault(); //prevents auto refresh
  console.log(e.target['new-task-description'].value);

  //Create li element to display input value
  let list = document.createElement('li');
  list.textContent = e.target["new-task-description"].value
  

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = "X"


  let toDoList = document.querySelector('#list');
  list.appendChild(deleteBtn);
  toDoList.appendChild(list);


  //delete a list item 
  //Stretch Deliverable
deleteBtn.addEventListener('click', () => list.remove())
}


/**
 * Stretch Deliverables
 */


 /**
 *  Create and form element, create id attribute, 
 * Set the value of the id attribute, 
 * Add the id attribute to the form
 */

  const taskFormTwo = document.createElement('form');
  const commentForm = document.getElementById('main-content')
  commentForm.appendChild(taskFormTwo)
  let att = taskFormTwo.createAttribute("id");
  att.value = "stretchForm";
  taskFormTwo.setAttributeNode(att);



 /**
 *  An additional input field (e.g. user, duration, date due)
 * 
 */

  const formLabel = document.createElement('label');
  const userForm = document.getElementById('stretchForm')
  userForm.appendChild(formLabel);
  let attTwo = formLabel.createAttribute("for");
  attTwo.value = "username";
  formLabel.setAttributeNode(attTwo);
  label.textContent= "User";


