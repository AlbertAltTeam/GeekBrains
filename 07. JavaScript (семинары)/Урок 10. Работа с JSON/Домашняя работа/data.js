export function loadData(rangeStart, rangeEnd, apiKey, clientId, listName, onSuccess, onError) {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      `https://sheets.googleapis.com/v4/spreadsheets/${clientId}/values/${listName}!A${rangeStart}:C${rangeEnd}?key=${apiKey}`
    );
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          const values = data.values;
          onSuccess(values);
        } else {
          onError(xhr.status);
        }
      }
    };
    xhr.send();
  }
  