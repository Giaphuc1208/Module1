const inputElement = document.querySelector('input');
inputElement.addEventListener('input', function()
{console.log('Giá trị mới:', this.value);
});