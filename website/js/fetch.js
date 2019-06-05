"use strict";


  fetch("http://mmlstudios.dk/wordpress/wp-json/wp/v2/posts?_embed&categories=4")
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    appendPosts(json);
  });

  function getFeaturedImageUrl(post) {
    let imageUrl = "";
    if (post._embedded['wp:featuredmedia']) {
      imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
    }
    return imageUrl;
  };

function appendPosts(posts) {
  for (let post of posts) {
    console.log(post);
    document.querySelector("#grid-posts-1").innerHTML += `
    <article class = "grid-item-1">
      <img src="${getFeaturedImageUrl(post)}">
      <h3>${post.title.rendered}</h3>
      <p>${post.content.rendered}</p>
    </article>
    `;
  }
};

//-----------------------------------------------------------------------------
fetch("http://mmlstudios.dk/wordpress/wp-json/wp/v2/posts?_embed&categories=5")
.then(function(response) {
  return response.json();
})
.then(function(json) {
  appendWhiskey(json);
});

function getFeaturedImageUrl(post) {
  let imageUrl = "";
  if (post._embedded['wp:featuredmedia']) {
    imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
  }
  return imageUrl;
}


function appendWhiskey(posts) {
for (let post of posts) {
  console.log(post);
  document.querySelector("#grid-posts-whiskey").innerHTML += `
  <article class = "grid-item-whiskey">
    <img src="${getFeaturedImageUrl(post)}">
    <h3>${post.title.rendered}</h3>
    <p>${post.content.rendered}</p>
  </article>
  `;
}
};
//-----------------------------------------------------------------------------
fetch("http://mmlstudios.dk/wordpress/wp-json/wp/v2/posts?_embed&categories=6")
.then(function(response) {
  return response.json();
})
.then(function(json) {
  appendBeer(json);
});

function getFeaturedImageUrl(post) {
  let imageUrl = "";
  if (post._embedded['wp:featuredmedia']) {
    imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
  }
  return imageUrl;
}


function appendBeer(posts) {
for (let post of posts) {
  console.log(post);
  document.querySelector("#grid-posts-beer").innerHTML += `
  <article class = "grid-item-beer">
    <img src="${getFeaturedImageUrl(post)}">
    <h3>${post.title.rendered}</h3>
    <p>${post.content.rendered}</p>
  </article>
  `;
}
};
//-----------------------------------------------------------------------------
fetch("http://mmlstudios.dk/wordpress/wp-json/wp/v2/posts?_embed&categories=7")
.then(function(response) {
  return response.json();
})
.then(function(json) {
  appendLiquer(json);
});

function getFeaturedImageUrl(post) {
  let imageUrl = "";
  if (post._embedded['wp:featuredmedia']) {
    imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
  }
  return imageUrl;
}


function appendLiquer(posts) {
for (let post of posts) {
  console.log(post);
  document.querySelector("#grid-posts-liquer").innerHTML += `
  <article class = "grid-item-liquer">
    <img src="${getFeaturedImageUrl(post)}">
    <h3>${post.title.rendered}</h3>
    <p>${post.content.rendered}</p>
  </article>
  `;
}
};
//-----------------------------------------------------------------------------//
fetch("http://mmlstudios.dk/wordpress/wp-json/wp/v2/posts?_embed&categories=8")
.then(function(response) {
  return response.json();
})
.then(function(json) {
  appendSpirits(json);
});

function getFeaturedImageUrl(post) {
  let imageUrl = "";
  if (post._embedded['wp:featuredmedia']) {
    imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
  }
  return imageUrl;
}


function appendSpirits(posts) {
for (let post of posts) {
  console.log(post);
  document.querySelector("#grid-posts-spirits").innerHTML += `
  <article class = "grid-item-spirits">
    <img src="${getFeaturedImageUrl(post)}">
    <h3>${post.title.rendered}</h3>
    <p>${post.content.rendered}</p>
  </article>
  `;
}
};
