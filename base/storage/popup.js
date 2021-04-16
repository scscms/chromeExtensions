document.querySelector('#btn1').onclick = () => {
    chrome.storage.sync.set({key: 'newKey'}, () => {
        console.log('set successed!');
    });
}

document.querySelector('#btn2').onclick = () => {
    chrome.storage.sync.get('key', (res) => {
        alert(JSON.stringify(res));
    });
}

document.querySelector('#btn3').onclick = () => {
    chrome.storage.local.set({key: "value local"}, function() {
        chrome.storage.local.get(['key'], function(res) {
            alert(JSON.stringify(res));
        });
    });
}

document.querySelector('#btn4').onclick = () => {
    const text = document.querySelector('#textarea').value;
    chrome.storage.local.set({'textValue': text}, function() {
        console.log('Value is ' + text);
    });
}

document.querySelector('#btn4').onclick = () => {
    chrome.storage.local.remove('textValue', function() {
        console.log('remove ');
    });
}


document.querySelector('#btn7').onclick = () => {
    chrome.storage.local.clear(function() {
        console.log('remove all');
    });
}
