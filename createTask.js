const button = document.getElementById('addBtn').addEventListener("click", displayTask);
const inputField = document.getElementById('mainInput').addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    displayTask();
   event.preventDefault(); 
  }
});

let container = [];
let selectAll = document.getElementById("selectAll-btn").addEventListener("click", summonSelection);
let checkboxAtTop = document.getElementById("checkBOX-main");
checkboxAtTop.classList.toggle('checkBOX-isHidden');
checkboxAtTop.addEventListener("click", checkAll);
checkboxAtTop.addEventListener("change", function () {
  if (checkboxAtTop.checked == false) {
    const allCheckboxes = document.querySelectorAll('.checkBOX-item');

    for (const chkBox of allCheckboxes) {
      chkBox.checked = false;
    }
  }
});

let trashButtonAtTop = document.getElementById("trashBtnDesign-main");
trashButtonAtTop.classList.toggle('trashBtnDesign-main-isHidden');
trashButtonAtTop.addEventListener("click", deleteAllTask);

function displayTask() {
  const inputField = document.getElementById('mainInput');
  const containerForTasks = document.getElementById('tasks');

  let wrapper = document.createElement('div');
  let checkboxTask = document.createElement('input');
  let newTask = document.createElement('p');
  let trashImage = document.createElement('img');
  let trashButton = document.createElement('button');
  


  //eto ininput ni user sa input field
  let inp = inputField.value; 
  
  // if may laman, do this
  if (inp) {
    container.push(inp);
    newTask.textContent = inp;
    
    wrapper.classList.add('wrapperDesign');
    newTask.classList.add('taskDesign');
    trashImage.classList.add('trashImgDesign');
    trashButton.classList.add('trashBtnDesign');
    checkboxTask.classList.add('checkBOX-item');
    checkboxTask.type = "checkbox";
    checkboxTask.classList.toggle('checkBOX-isHidden');
    if (checkboxAtTop.classList.contains('checkBOX-isVisible')) {
      checkboxTask.classList.add('checkBOX-isVisible');
    }
    

    containerForTasks.appendChild(wrapper);
    wrapper.appendChild(newTask);
    wrapper.appendChild(trashButton);
    trashButton.appendChild(trashImage);
    wrapper.appendChild(checkboxTask);
    
    inputField.value = "";
  }

  trashButton.addEventListener("click", () => {

    // let popUp;
    // if (confirm("Are you sure you want to delete this?")) {
    //   newTask.remove();
    //   trashButton.remove();
    //   trashImage.remove();
    // }
    
    
    // library used: https://sweetalert2.github.io
    Swal.fire({
      title: 'Are you sure you want to delete this?',
      showCancelButton: true,
      confirmButtonText: 'OK',
      draggable: true,
      confirmButtonColor: '#412D15',
      cancelButtonColor: '#898989',
      heightAuto: false
    }).then((result) => {
      if (result.isConfirmed) {
        wrapper.remove();
        newTask.remove();
        trashButton.remove();
        trashImage.remove();
      }
    });
  });
  return {wrapper, newTask, trashImage, trashButton, checkboxTask};
}

function deleteAllTask() {
  
  const allCheckboxes = document.querySelectorAll('.checkBOX-item');
  
    for (const loopThrough of allCheckboxes) {
      if (loopThrough.checked) {
        const wrapper = loopThrough.parentElement;
        wrapper.remove();
      }
    }
  
}

function checkAll() {
  // const { wrapper, newTask, trashImage, trashButton } = displayTask();

  // if (item.checked == true) {
  //   checkboxTask.forEach(function (chkBox) {
  //     chkBox.checked = true;
  //   });
  // }
  // else {
  //   checkboxTask.forEach(function (chkBox) {
  //     chkBox.checked = false;
  //   });
  // }

  const allCheckboxes = document.querySelectorAll('.checkBOX-item');
  
    for (const chkBox of allCheckboxes) {
      chkBox.checked = true;
    }
}

function summonSelection() {
  checkboxAtTop.checked = false;
  
  checkboxAtTop.classList.toggle('checkBOX-isVisible');
  trashButtonAtTop.classList.toggle('trashBtnDesign-main-isVisible');
  
  const allCheckboxes = document.querySelectorAll('.checkBOX-item');
  
    for (const chkBox of allCheckboxes) {
      chkBox.classList.toggle('checkBOX-isVisible');
    }
}