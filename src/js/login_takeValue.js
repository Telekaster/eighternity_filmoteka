export default function takeValue(value, loginAcceptButton) {
                if (value !== '') {
                loginAcceptButton.removeAttribute('disabled');
                return value.toLowerCase();
                };
};