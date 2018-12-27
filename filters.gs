function kaggleFilter() {
  var threads = GmailApp.search("from: 'noreply@kaggle.com' ");
  return threads;
}
