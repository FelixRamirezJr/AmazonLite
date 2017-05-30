/* Since Node.js does not support BODY parameters we need to build a string */
export function createParameters( aws ){
  var queryParameters = "";
  var counter = 0;
  Object.keys(aws).forEach(function (key) {
      if(counter == 0 ){
        queryParameters += "?";
      } else {
        queryParameters += "&";
      }
      queryParameters += key + "=" + encodeURIComponent(aws[key]);
      counter++;
  });
  return queryParameters;
}
