function kaggleFilterTest() {
  var threads = GmailApp.search("from: 'noreply@kaggle.com' is:unread");
  Logger.log(threads);
}

