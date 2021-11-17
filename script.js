const copyButton = document.getElementsByClassName('copy-button');

const addressCopy = () => {
    let address = document.querySelector('address');

    address.select();
    address.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(address.value);
}