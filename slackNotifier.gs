function postMessage(message, channelId) {
  var prop = PropertiesService.getScriptProperties().getProperties();
  //slackApp インスタンスの取得
  var slackApp = SlackApp.create(prop.token);

  slackApp.postMessage(
    channelId, 
    message, 
    {
      username: "Gmail Filter",
      icon_url: "https://curio-shiki.com/blog/wp-content/uploads/2018/04/Gmail_Icon.png"
    })
}

