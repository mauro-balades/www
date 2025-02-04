import { animate, stagger, hover } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";

async function animateAndOpenBlog(blogid) {
  await animate("#content > *, #projects > *", {
    opacity: [1, 0],
    x: [0, -50],
    blur: [0, 1],
  }, {
    delay: stagger(0.05)
  });
  document.getElementById("content").classList.add("hidden");
  document.getElementById("projects").classList.add("hidden");
  document.getElementById("blog-space").classList.remove("hidden");
  console.log(blogid);
  const blogContent = window[`blog-${blogid}`];
  const {title, content} = blogContent;
  const contentWrapper = document.getElementById("blog-content");
  contentWrapper.innerHTML = "";
  const titleElement = document.createElement("h1");
  titleElement.textContent = title;
  contentWrapper.appendChild(titleElement);
  for (const paragraph of content) {
    const paragraphElement = document.createElement("p");
    paragraphElement.innerHTML = paragraph;
    contentWrapper.appendChild(paragraphElement);
    const separator = document.createElement("div");
    separator.innerHTML = `
    <div class="line-holder">
      <div class="smallLine smallLine1"></div>
      <div class="smallLine smallLine2"></div>
    </div>`;
    contentWrapper.appendChild(separator);
  }
  await animate("#blog-content > *", {
    opacity: [0, 1],
    x: [-50, 0],
    blur: [1, 0],
  }, {
    delay: stagger(0.05)
  });
}

for (const blog of document.querySelectorAll("[blog]")) {
  blog.onclick = (event) => {
    event.preventDefault();
    const blogid = event.target.closest("[blog]").getAttribute("blog");
    animateAndOpenBlog(blogid);
  };
}

await animate("#logo > *, #links > *, #content > h1:first-child > *, #content > p", {
  opacity: [0, 1],
  y: [20, 0],
  blur: [1, 0],
}, {
  delay: stagger(0.15)
});

await animate("#projects > a *, #projects > div", {
  opacity: [0, 1],
  blur: [1, 0],
  x: [-20, 0]
}, {
  delay: stagger(0.15)
});

await animate("footer > *", {
  opacity: [0, 1],
  y: [20, 0],
  blur: [1, 0],
}, {
  delay: stagger(0.15)
});