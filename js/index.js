const loadPost=()=>{
    const url="https://jsonplaceholder.typicode.com/posts"
    fetch(url)
    .then((resp)=> resp.json())
    .then((posts)=> {
        postsData=posts
        displayData(postsData)
}
)

}
 const container=document.getElementById('post-container')
 
const displayData=(posts)=>{
    container.innerHTML=""
    posts.forEach((post)=>{
        const card=`
            <div class="post-card">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </div>
        
        `


    container.innerHTML+=card

    })
     
}