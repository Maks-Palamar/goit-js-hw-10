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

    const delay = parseInt(promiseForm.elements.delay.value, 10);

    if (isNaN(delay) || delay < 0) {
        console.error('Invalid delay value');
        return iziToast.show({
                message: `❌ Invalid delay value`,
                messageColor: '#000000',
                position: 'topRight',
            })
    }

    const stateValue = promiseForm.elements.state.value;

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

    makePromise(delay, stateValue)
        .then(value => {
            iziToast.show({
                message: `✅ Fulfilled promise in ${delay}ms`,
                messageColor: '#000000',
                position: 'topRight',
            })
            console.log(delay);
        })
        .catch(value => {
            iziToast.show({
                message: `❌ Rejected promise in ${delay}ms`,
                messageColor: '#000000',
                position: 'topRight',
            })
            console.log(delay);
        });
    promiseForm.reset();
}
)
