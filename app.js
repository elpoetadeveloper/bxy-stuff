const btnPage = document.querySelector('#btn-page');
const main = document.querySelector('#main-template');
const template = '<h2>New Content</h2>';
btnPage.addEventListener('click', e => {
  main.innerHTML = template;
});

$(function () {
  var jsondata = [
    { id: "ajson1", parent: "#", text: "Simple root node" },
    { id: "ajson2", parent: "#", text: "Root node 2" },
    { id: "ajson3", parent: "ajson2", text: "Child 1" },
    { id: "ajson4", parent: "ajson2", text: "Child 2" }
  ];

  createJSTree(jsondata);
});

function createJSTree(jsondata) {
  $("#mytree").jstree({
    core: {
      data: jsondata,
      themes: { stripes: true, responsive: true, variant: "large" }
    },
    plugins: ["search", "themes", "json_data", "ui", "dnd"],
    search: {
      case_sensitive: false,
      show_only_matches: true
    }
  });
}