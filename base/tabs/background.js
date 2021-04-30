// 截图
function capture(){
    chrome.tabs.query({active: true}, function(tabArray){
        const wId = tabArray[0].windowId
        const id = tabArray[0].id
        chrome.tabs.captureVisibleTab(wId, {
            format: 'jpeg',
            quality: 80
        }, function(dataUrl){
            console.log(dataUrl)
            window.open(dataUrl, '_blank');
        });
    });
}
