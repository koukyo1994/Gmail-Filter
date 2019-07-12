function postMessage(message, channelId, comp) {
  var prop = PropertiesService.getScriptProperties().getProperties();
  var slackApp = '';
  //slackApp インスタンスの取得
  if (comp == "aptos") {
    var slackApp = SlackApp.create(prop.aptosToken);
  } else if (comp == "siim") {
    var slackApp = SlackApp.create(prop.siimToken);
  }

  slackApp.postMessage(
    channelId, 
    message, 
    {
      username: "Gmail Filter",
      icon_url: "https://curio-shiki.com/blog/wp-content/uploads/2018/04/Gmail_Icon.png"
    })
}