// js with server/09_async_await
function webServerConnect() {
  return fetch('https://jsonplaceholder.typicode.com/posts/1', {
      headers: {
        'Cache-Control': 'no-cache'
      }
    })
    .then(response => response.json())
    .catch(err => console.log(err));
}

async function getJSONData(){ // async : 비동기작업
  const result = await webServerConnect();
  console.log(1, result);

  webServerConnect()
  .then(result => console.log(2,result));
}

getJSONData();
console.log('End!');