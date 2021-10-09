export default function takeValue(value, loginAcceptButton) {
                if (value !== '') {
                loginAcceptButton.classList.remove('visually-hidden');
                return value.toLowerCase();
                };
};