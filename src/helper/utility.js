export var perPage = 10;

/* Function returns the amazon credentails for the API
*  Usually we would keep credentails in a secrets.js file
*/
export function amazonCredentials(){
  var aws = {
   awsId: "AKIAIQWF3LJI2GGVSVMQ",
   awsSecret: "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",
   assocId: "unibui-20"
  }
  return aws;
}

/* Creates search parameters */
export function amazonSearch(page){
  var searchParams = {
    SearchIndex: "Books",
    Keywords: "Harry Potter",
    ResponseGroup: "ItemAttributes,Offers,Images,ItemIds",
    ItemPage: page
  }
  return createParameters( Object.assign(amazonCredentials(), searchParams) );
}

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

export function getAmazonProduct(asin){
  var queryHash = {
    'ResponseGroup': "ItemAttributes,Offers,Images",
    'IdType': "ASIN",
    'ItemId': asin,
  };
  return createParameters( Object.assign(amazonCredentials(), queryHash) );
}

export function getGalleryProductImages( imageSets ){
  var temp = [];
  var i = 0;
  for (var key in imageSets) {
    if (imageSets.hasOwnProperty(key)) {
      for(i = 0; i < imageSets[key].length; i++)
      {
        temp.push({
            original: imageSets[key][i].LargeImage.URL,
            thumbnail: imageSets[key][i].ThumbnailImage.URL
          });
      }
    }
  }
  return temp;
}
