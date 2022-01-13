let scriptResults = document.querySelector('#scriptResults');

// textContent
let item2 = document.querySelector('#two');
let item2Text = item2.textContent;

console.log(item2Text);

item2.textContent = `bananas`;

scriptResults.innerHTML = `
    <p>Ola mundo ${item2Text}</p>
`;
