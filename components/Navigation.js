function buildNavHTML(stateLinks){
    let linksHTML = '';

    stateLinks.forEach((link) => {
        linksHTML += `<li><a href="">${link}</li>`;
    });

    return linksHTML;
}

export default (state) => `<nav>
      <ul class="flex">
        ${buildNavHTML(state.links)}
        <li>
          Portfolio
          <ul id="dropdown">
            <li><a href="class.html">Class</a></li>
            <li><a href="web-store.html">Web Store</a></li>
            <li><a href="demo.html">Demo Day</a></li>
          </ul>
        </li>
      </ul>
    </nav>`;

