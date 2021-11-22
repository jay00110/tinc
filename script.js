let copyButton = document.getElementsByClassName('copy-button');
let address = document.querySelector('address');

const addressCopy = () => {
    address.select();

    navigator.clipboard.writeText(address.value);
}

copyButton.onclick = addressCopy;