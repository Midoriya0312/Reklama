const modal = document.querySelector('.modal');
const close = document.getElementById('close');

setTimeout(openModal,5000)

setTimeout(btnActive,10000)


function openModal() {
    // console.log('hello');
    modal.classList.add('modal-active')
}

function btnActive() {
    close.classList.add('btn-active')

}
function closeModal() {
    modal.classList.add('modal-close')
    close.classList.add('btn-close')
}
