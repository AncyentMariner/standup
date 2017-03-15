const fs = require('fs');

console.log(fs);

function adminChanges(e) {
  e.preventDefault();
  console.log(e);
}



const adminForm = document.getElementById('admin-adjustments');
adminForm.addEventListener('submit', adminChanges);
