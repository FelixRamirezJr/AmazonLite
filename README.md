# Amazon Lite

Amazon Lite is a simple application that utilizes React.js and the Amazon Product Advertising API. The application will pull a "SearchIndex" from Harry Potter books and display the products in a masonry grid. Users can then click on the product picture or title to be redirected to the details page. All styling is intended to resemble [Offerup](https://offerup.com/) and [Pinterest](https://www.pinterest.com/). Amazon Product API does block requests if too many are made, Such an API should not be used to QUERY many products.

## Libraries & Dependencies Used

1. React-Router-Dom [https://github.com/ReactTraining/react-router](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)

2. Materialize Front End Framework [http://materializecss.com/](http://materializecss.com/)

3. Create React App [No Config](https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html)


## How is Amazon Product Advertising API being used?

The library [node-apac](https://github.com/dmcquay/node-apac) is being used through a CORS API wrapper that was developed by me. This way you can make the API request in the client side code rather then having to built a back end server to handle that request. Here is a link to the [node-apac-get-wrapper](https://github.com/FelixRamirezJr/node-apac-get-wrapper). You can find more information about the node-apac library directly from the amazon website here. [Server Side Only](https://aws.amazon.com/code/Product-Advertising-API/4086)

## Problems and issues I found with the Amazon Product API.

1. Too many requests made in a short interval of time will cause the Amazon API to return a failed response message. So implementing an Infinite Scroll feature would not be a good solution. A traditional pagination system would work well.
Also, Clicking around really fast. Such as forcing many requests per second will cause FAILED responses.

2. Amazon API is inconsistent as it returns empty values for certain products. Such as Price, Dimensions, EAN and etc. If you notice that some values say Not Available or are blank. This is because this value does not exist in the Amazon Database or API.
