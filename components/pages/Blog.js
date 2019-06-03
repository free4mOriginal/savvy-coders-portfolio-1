function buildBlogsHtml(posts){
    return posts.map((post) => `<article style="background: rgba(255, 255, 255, 0.8")><h2>${post.title}</h2><p>${post.body}</p></article>`);
}

export default function(state){
    return `<h1>${state.title}</h1>
        ${buildBlogsHtml(state.posts)};
    `;
}
