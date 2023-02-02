const SERVER_URL = 'http://127.0.0.1:8000'

async function updateArticle(article, id) {
    
    let response = await fetch(`${SERVER_URL}/blog/article/${id}`,{
        
      method: 'PUT',
      body: JSON.stringify(article),
      headers: {
        'Content-type': 'application/json', //백엔드한테 내가 지금 보내는 거 json이야 알려주기
      },
    });
    let data = await response.json();
    return data
    // console.log(data);
}
  
async function gettAricle(id){
    let response = await fetch(`${SERVER_URL}/blog/article/${id}`)
    let data = await response.json();
    return data
}

async function insertArticle(id){
    let data = await getArticle(id);
    let title = document.getElementById('title');
    let content = document.getElementById('content');
    title.value = data.title;
    content.value = data.content;
    title.parentElement = id; //div를 말함
}

async function submitArticle(event){
    let id = event.target.previousElementSibling.id; // 특정 태그의 이전 태그를 가져올 수 O

    let article = {
        title: document.getElementById('title').value,
        content: document.getElementById('content').value
    }
    let result = await updateArticle(article, id)
    console.log(result)
    // let result = await updateArticle()
}

