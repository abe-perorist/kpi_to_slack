// 共通部分
var slack = {
  postUrl: 'https://slack.com/api/chat.postMessage',
  token: '①', // Slackのtoken
  channelId: "②", // SlakckのチャネルのID
  userName: "お好きな名前で！！", // botの名前
}

var postMessage = function(text) {
  UrlFetchApp.fetch(slack["postUrl"], {
    "method" : "post",
    "payload" : {
      token: slack["token"],
      channel: slack["channelId"],
      username: slack["userName"],
      text: text
    }
  });
}

// 数値元によって変更する箇所
function myFunction() {
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[③];

 var dauvalues = sheet.getSheetValues(④)*100;
 var daybeforevalues = sheet.getSheetValues(④)*100;

 var dau = dauvalues.toFixed(⑤)
 var daybefore = daybeforevalues.toFixed(⑤)

 if (  daybefore > 0 ){
 postMessage("本日のDAUは" + dau + "%で、前日比" + daybefore + "%なんですわ(:thumbsup: ՞ਊ ՞):thumbsup:");
 }else{
 postMessage("本日のDAUは" + dau + "%で、前日比" + daybefore + "%なんですわ(:thumbsdown: ՞ਊ ՞):thumbsdown:");
 }
}
