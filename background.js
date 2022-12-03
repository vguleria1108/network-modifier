chrome.declarativeNetRequest.updateDynamicRules({
  removeRuleIds: [1],
  addRules: [
    {
      id: 1,
      priority: 1,
      action: {
        type: "redirect",
        redirect: {
          transform: {
            queryTransform: {
              addOrReplaceParams: [{ key: "test", value: "123" }],
            },
          },
        },
      },
      condition: {
        urlFilter: "https://app.c.nimblebox.ai/",
        resourceTypes: ["xmlhttprequest"],
      },
    },
  ],
});
