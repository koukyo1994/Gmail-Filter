function kaggleFilter() {
  var threads = GmailApp.search("from: 'noreply@kaggle.com' is:unread");
  return threads;
}
