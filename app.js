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
    { id: "ajson4", parent: "ajson2", text: "Child 2" },
    { id: "ajson5", parent: "#", text: "Root node 3" },
    { id: "ajson6", parent: "ajson5", text: "Child 1" },
    { id: "ajson7", parent: "ajson5", text: "Child 2" },
    { id: "ajson8", parent: "ajson7", text: "Child 1" }
  ];

  createJSTree(jsondata);
});

function createJSTree(jsondata) {
  $("#mytree").jstree({
    core: {
      data: jsondata,
      themes: { stripes: true, responsive: true, variant: "large", "icons": true, "dots": true }
    },
    'types': {
      'root': { 'icon': 'folder' },
      'leaf': { 'icon': 'folder' },
      'project': { 'icon': 'folder' },
      'folder': { 'icon': 'folder' },
      'default': { 'icon': 'folder' },
      'file': { 'valid_children': [], 'icon': 'file' }
    },
    plugins: ["search", "json_data", "ui", "types", "dnd"],
    search: {
      case_sensitive: false,
      show_only_matches: true
    }
  });
}

