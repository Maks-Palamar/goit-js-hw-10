// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const input = document.querySelector('input[name="delay"]');
const promiseForm = document.querySelector('.form')
input.addEventListener('input', setDelay);

let delay;

function setDelay(event) {
    delay = event.currentTarget.value;
}

promiseForm.addEventListener('submit', event => {
    event.preventDefault();

    function makePromise(delay, value) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (value === 'fulfilled') {
                    resolve(delay);
                } else {
                    reject(delay);
                }
            }, delay);
        })
    }

    makePromise(delay, promiseForm.elements.state.value)
        .then(value => {
            iziToast.show({
                message: `✅ Fulfilled promise in ${delay}ms`,
                messageColor: '#FFF',
                position: 'bottomRight',
            })
            console.log(delay);
        })
        .catch(value => {
            iziToast.show({
                message: `❌ Rejected promise in ${delay}ms`,
                messageColor: '#000000',
                position: 'bottomRight',
            })
            console.log(delay);
        });
    promiseForm.reset();
}
)
