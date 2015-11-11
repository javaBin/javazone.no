function pageview(path) {
    console.log(path);
    console.log(window.ga);
    window.ga('send', 'pageview', path);
}

export default pageview;