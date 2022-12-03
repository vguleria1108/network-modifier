(async function () {
  let urlFilterObj = await chrome.storage.local.get("urlFilter");
  let keyObj = await chrome.storage.local.get("key");
  let valueObj = await chrome.storage.local.get("value");

  let urlFilter = urlFilterObj.urlFilter ?? "";
  let key = keyObj.key ?? "";
  let value = valueObj.value ?? "";
  chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName === "local") {
      if (changes.urlFilter) {
        urlFilter = changes.urlFilter.newValue ?? urlFilter;
      }
      if (changes.key) {
        key = changes.key.newValue ?? key;
      }
      if (changes.value) {
        value = changes.value.newValue ?? value;
      }
    }
    updateDynamicRules({
      urlFilter: urlFilter ?? "",
      key: key ?? "",
      value: value ?? "",
    });
  });
  updateDynamicRules({
    urlFilter: urlFilter ?? "",
    key: key ?? "",
    value: value ?? "",
  });
})();

const updateDynamicRules = ({ urlFilter, key, value }) => {
  console.log("updateDynamicRules" + urlFilter + "key=" + key + "val=" + value);
  if (urlFilter && key && value)
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
                  addOrReplaceParams: [{ key: key, value: value }],
                },
              },
            },
          },
          condition: {
            urlFilter: urlFilter,
            resourceTypes: ["xmlhttprequest"],
          },
        },
      ],
    });
};
