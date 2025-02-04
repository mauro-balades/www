import {
  animate,
  stagger,
  hover,
} from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";

var insideBlog = false;

async function animateAndOpenBlog(blogid, blogElem, fromLoad = false) {
  insideBlog = true;
  if (!fromLoad) {
    await animate(
      "#footer",
      {
        opacity: [1, 0],
        y: [0, 20],
        blur: [0, 1],
      },
    );
    await animate(
      "#content > *, #projects > *",
      {
        opacity: [1, 0],
        x: [0, -60],
        blur: [0, 1],
      },
      {
        delay: stagger(0.05),
      },
    );
  }
  document.getElementById("content").classList.add("hidden");
  document.getElementById("projects").classList.add("hidden");
  document.getElementById("blog-space").classList.remove("hidden");
  console.log(blogid);
  const title = blogElem.querySelector("h3").textContent;
  const content = [];
  const blogParent = document.getElementById(`blog-${blogid}`);
  for (const child of blogParent.children) {
    content.push(child.innerHTML);
  }
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
    if (paragraph !== content[content.length - 1]) {
      contentWrapper.appendChild(separator);
    }
  }
  await animate(
    "#back, #blog-content > *",
    {
      opacity: [0, 1],
      x: [-60, 0],
      blur: [1, 0],
    },
    {
      delay: stagger(0.05),
    },
  );
  document.getElementById("footer").removeAttribute("style");
}

for (const blog of document.querySelectorAll("[blog]")) {
  blog.onclick = (event) => {
    event.preventDefault();
    const blogElem = event.target.closest("[blog]");
    const blogid = blogElem.getAttribute("blog");
    animateAndOpenBlog(blogid, blogElem);
    history.pushState({ blogid }, "", `?blog=${blogid}`);
  };
}

const urlParams = new URLSearchParams(window.location.search);
const beforeLoadBlog = urlParams.get("blog");

async function main() {
  await animate(
    "#logo > *, #links > *, #content > h1:first-child > *, #content > p",
    {
      opacity: [0, 1],
      y: [20, 0],
      blur: [1, 0],
    },
    {
      delay: stagger(0.05),
    },
  );
  await animate(
    "#projects > a *, #projects > div",
    {
      opacity: [0, 1],
      blur: [1, 0],
      x: [-20, 0],
    },
    {
      delay: stagger(0.05),
    },
  );

  await animate(
    "footer > *",
    {
      opacity: [0, 1],
      y: [20, 0],
      blur: [1, 0],
    },
    {
      delay: stagger(0.15),
      duration: 0.1,
    },
  );
}

document.getElementById("back").onclick = async () => {
  insideBlog = false;
  const elements = Array.from(document.querySelectorAll("#back, #blog-content > *")).reverse();
  await animate(
    elements,
    {
      opacity: [1, 0],
      x: [0, -50],
      blur: [0, 1],
    },
    {
      delay: stagger(0.05),
    },
  );
  document.getElementById("content").classList.remove("hidden");
  document.getElementById("projects").classList.remove("hidden");
  document.getElementById("blog-space").classList.add("hidden");
  await animate(
    "#content > *, #projects > *",
    {
      opacity: [0, 1],
      x: [-50, 0],
      blur: [1, 0],
    },
    {
      delay: stagger(0.05),
    },
  );
};

if (beforeLoadBlog) {
  const blogElem = document.querySelector(`[blog="${beforeLoadBlog}"]`);
  animateAndOpenBlog(beforeLoadBlog, blogElem, true);
} else {
  main();
}

window.addEventListener("popstate", (event) => {
  if (event.state && event.state.blogid) {
    const blogElem = document.querySelector(`[blog="${event.state.blogid}"]`);
    animateAndOpenBlog(event.state.blogid, blogElem, true);
  } else {
    if (insideBlog) {
      document.getElementById("back").click();
      history.pushState({}, "", "/");
    }
  }
});