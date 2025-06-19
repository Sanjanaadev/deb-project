const greetingsList =[
    'Hello world!',
    'Bonjour monde!',
    'Hallo Welt!',
    'नमस्ते दुनिया!',
];

function changegreeting() {
    const randomIndex = Math.floor(Math.random() * greetingsList.
    length);
    const randomGreeting = greetingsList[randomIndex];
    document.getElementById('greetingTxt').textContent =
    randomGreeting.toString();
}

function getcount() {
    const randomIndex = Math.floor(Math.random() * 1000);
    document.getElementById('visitorCountTxt').
    textContent="visitor Count:" +randomIndex.toString();
    console.log(randomIndex);
}