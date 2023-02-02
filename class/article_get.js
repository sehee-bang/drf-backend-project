const SERVER_URL = 'http://127.0.0.1:8000'

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }
  
function setCookie(name, value) {
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + "; path=/";
    document.cookie = updatedCookie;
}

async function getPosts() {
    let response = await fetch(`${SERVER_URL}/blog/article`);
    let data = await response.json();
    return data
}

async function deletePost(id) {
    let token = getCookie('access_token')
    let response = await fetch(`${SERVER_URL}/blog/article/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    if (response.status === 204) { // DELETE 요청 성공
        let post = document.getElementById(id);
        post.remove();
    }
}

async function insertPosts() {
    let posts = await getPosts();
    posts.forEach(post => {
        document.body.insertAdjacentHTML('beforeend', `
            <div id="${post.id}">
                <h3>글쓴사람: ${post.author}</h3>
                <h2>제목: ${post.title}</h2>
                <p>내용: ${post.content}</p>
                <button onclick="deletePost(${post.id})">삭제</button>
            </div>
        `)
    })
}
insertPosts()