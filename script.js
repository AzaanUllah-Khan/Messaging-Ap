
var ul = document.getElementById('chat');
var input = document.getElementById('input');
var sender = 'Azaan';
var div;
a();
function a() {
    sender = 'Azaan'
    document.getElementById('az').style.opacity = '1';
    document.getElementById('ze').style.opacity = '0.8';
}
function z() {
    sender = 'Zeeshan'
    document.getElementById('ze').style.opacity = '1';
    document.getElementById('az').style.opacity = '0.8';
}
function send() {
    var d = new Date();
    var hrs = d.getHours();
    var min = d.getMinutes();
    if (hrs < 9) {
        hrs = "0" + hrs
    }
    else if (min < 9) {
        min = "0" + min
    }
    if (input.value != '') {
        div = document.createElement('div');
        div.setAttribute('class', sender)
        div.setAttribute('onclick', 'del(this)')
        ul.appendChild(div);
        var userImg = document.createElement('img');
        if (sender == 'Azaan') {
            userImg.setAttribute('src', 'https://media.licdn.com/dms/image/D4D03AQHyJrtE6WbAfw/profile-displayphoto-shrink_200_200/0/1678030659122?e=1692835200&v=beta&t=A2J_btAdVPOv2Y0b-2diheG9LDtC8-tdxEQtFcY0Hd4')
        }
        else {
            userImg.setAttribute('src', 'https://media.licdn.com/dms/image/D4D35AQHyJWN5n0gG5w/profile-framedphoto-shrink_200_200/0/1677020670227?e=1688050800&v=beta&t=Y__kz09U6cTLFzcwTqR6vo3JRU8tVnT4UkU7bcREZ8A')
        }
        div.appendChild(userImg);
        var msg = document.createElement('li')
        div.appendChild(msg)
        var userSpan = document.createElement('h1');
        var spanText = document.createTextNode(sender)
        userSpan.appendChild(spanText)
        msg.appendChild(userSpan)
        var msgText = input.value;
        var pNode = document.createElement('p');
        var nodeMsg = document.createTextNode(msgText)
        pNode.appendChild(nodeMsg)
        msg.appendChild(pNode)
        var time = document.createElement('small');
        var timetime = document.createTextNode(`${hrs}:${min}`)
        time.appendChild(timetime)
        msg.appendChild(time)
        input.value = ''
    }
}
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter" && input.value !== '') {
        event.preventDefault();
        send()
    }
});

function del(messageDel) {
    if (confirm('Are you sure you want to delete this')) {
        var toDel = messageDel
        toDel.parentElement.removeChild(toDel);
    }
}







function sendImg() {
    var image = prompt('Add Image Src')
    var d = new Date();
    var hrs = d.getHours();
    var min = d.getMinutes();
    if (hrs < 9) {
        hrs = "0" + hrs
    }
    else if (min < 9) {
        min = "0" + min
    }
    div = document.createElement('div');
    div.setAttribute('class', sender)
    div.setAttribute('onclick', 'del(this)')
    ul.appendChild(div);
    var userImg = document.createElement('img');
    if (sender == 'Azaan') {
        userImg.setAttribute('src', 'https://media.licdn.com/dms/image/D4D03AQHyJrtE6WbAfw/profile-displayphoto-shrink_200_200/0/1678030659122?e=1692835200&v=beta&t=A2J_btAdVPOv2Y0b-2diheG9LDtC8-tdxEQtFcY0Hd4')
    }
    else {
        userImg.setAttribute('src', 'https://media.licdn.com/dms/image/D4D35AQHyJWN5n0gG5w/profile-framedphoto-shrink_200_200/0/1677020670227?e=1688050800&v=beta&t=Y__kz09U6cTLFzcwTqR6vo3JRU8tVnT4UkU7bcREZ8A')
    }
    div.appendChild(userImg);
    var msg = document.createElement('li')
    div.appendChild(msg)
    var userSpan = document.createElement('h1');
    var spanText = document.createTextNode(sender)
    userSpan.appendChild(spanText)
    msg.appendChild(userSpan)
    var img = document.createElement('img');
    img.setAttribute('src', image)
    msg.appendChild(img)
    var time = document.createElement('small');
    var timetime = document.createTextNode(`${hrs}:${min}`)
    time.appendChild(timetime)
    msg.appendChild(time)
    input.value = ''
}