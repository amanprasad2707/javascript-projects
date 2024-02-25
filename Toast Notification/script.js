const toastBox = document.getElementById('toast-box');
const successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully submitted';
const invalidMsg = '<i class="fa-solid fa-triangle-exclamation"></i> Invalid input, check again';
const errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error';
const showToast = ((msg) => {
  const toast = document.createElement('div');
  toast.classList.add('toast');
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if (msg.includes('error')) {
    toast.classList.add('error');
  }
  if (msg.includes('Invalid')) {
    toast.classList.add('invalid');
  }
  setTimeout(() => {
    toast.remove();
  }, 5000);

})