chrome.contextMenus.create({
    'type':'normal',
    'title':'使用百度翻译……',
    'contexts':['selection'],
    'id':'cn',
    'onclick':translate
});

function translate(info, tab){
    fetch("https://fanyi.baidu.com/sug", {
        "credentials": "include",
        "body": "kw="+info.selectionText,
        "method": "POST",
        "mode": "cors"
    }).then(response => response.json()).then(json => {
        if(Array.isArray(json.data)){
            alert(json.data[0].v)
        } else {
            alert('翻译失败11')
        }
    }).catch(()=>{
        alert('翻译失败00')
    })
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    console.log('kkk',message)
    chrome.contextMenus.update('cn',{
        "title":`使用百度翻译"${message}"`
    });
});
