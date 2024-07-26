function checkName(name) {
    let validName = name.trim().toLowerCase().replace(/\b\p{L}/gu, (char) => char.toUpperCase());//не работает с Кириллицей!
    // replace(/\b\w/g, (char) => char.toUpperCase()); не работает с Кириллицей!

    return validName;
};

function checkSpam(string) {
    return string.replace(/viagra|xxx/gi, '***');
};

function addComment() {
    let nameInput = document.getElementById('name');
    let userName = checkName(nameInput.value);

    let avatarLinkInput = document.getElementById('avatar');
    let avatarLink = avatarLinkInput.value.trim();

    let messageInput = document.getElementById('message');
    let message = checkSpam(messageInput.value);

    let commentList = document.getElementById('commentList');

    let newComment = document.createElement('div');
    newComment.innerHTML = `
    <h2>${userName}</h2>
    <img src="${avatarLink}" alt="Аватар">
    <p>${message}</p>
    `;

    commentList.appendChild(newComment);

    nameInput.value = "";
    avatarLinkInput.value = "";
    messageInput.value = "";
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxx'));
console.log(checkSpam("innocent rabbit"));