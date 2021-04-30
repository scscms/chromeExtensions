chrome.contextMenus.create({
    'type':'normal',
    'title':'获取图片URL',
    'contexts':['image'],
    'id': '123'
});

chrome.contextMenus.onClicked.addListener(function(arg){
    if(arg.srcUrl){
        setTimeout(()=>{
            chrome.notifications.create(null, {
                type: 'basic',
                iconUrl: 'images/get_started48.png',
                title: '图片地址',
                message: arg.srcUrl,
            })
        },5 * 1000)
    }
});
