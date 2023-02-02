const SERVER_URL = 'http://127.0.0.1:8000'

// 카테고리 조회 (get)
async function getCategories() {
    let response = await fetch(`${SERVER_URL}/blog/category`);
    let data = await response.json();
    return data
}

async function insertCategories() {
    let categories = await getCategories();
    categories.forEach(post => {
        document.body.insertAdjacentHTML('beforeend', `
            <div id="${post.id}"> 
                <h1>${post.id}</h1>
                <h1>${post.name}</h1>
            </div>
        `)
    })
}

insertCategories()


// 쿠키
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

