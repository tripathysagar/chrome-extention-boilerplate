console.log("hello from the background");
chrome.runtime.onMessage.addListener((msg, sender, sendResponse)=>{
    console.log(msg);
    console.log(sender);
    sendResponse('from backgrounf script!!!!')
  })