// chrome.webRequest.onBeforeRequest.addListener(
//   function (details) {
//     // Add query parameter to URL
//     let newUrl = new URL(details.url);
//     newUrl.searchParams.set("myParam", "myValue");
//     console.log("Redirecting to: " + newUrl.href);
//     // Return modified request details
//     return {
//       requestHeaders: details.requestHeaders,
//       redirectUrl: newUrl.toString(),
//     };
//   },
//   { urls: ["https://app.nimblebox.ai/*"] },
//   ["blocking"]
// );

// // Listen for web request events
// chrome.webRequest.onBeforeSendHeaders.addListener(
//   function (details) {
//     // Add custom header to request headers
//     details.requestHeaders.push({
//       name: "My-Custom-Header",
//       value: "myValue",
//     });

//     // Return modified request details
//     return {
//       requestHeaders: details.requestHeaders,
//     };
//   },
//   {
//     urls: ["https://app.nimblebox.ai/*"],
//   },
//   ["blocking", "requestHeaders"]
// );

chrome.declarativeNetRequest.onRequest.addListener(
  (details) => {
    // Add the query parameter or header to the request body
    let requestBody = new FormData();
    requestBody.append("query_param", "value");
    details.requestBody.raw.push(requestBody);

    return { requestBody: { raw: details.requestBody.raw } };
  },
  {
    urls: ["<all_urls>"],
    types: ["xmlhttprequest"],
  }
);
