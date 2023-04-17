function initializeFancytree() {
    console.log('Fancytree:', $.fn.fancytree);

    const treeData = [
        {title: "Node 1", key: "1"},
        {title: "Folder 2", key: "2", folder: true, children: [
      {title: "Node 2.1", key: "3"},
      {title: "Node 2.2", key: "4"}
    ]}
    ];
    $('#tree').fancytree({
        source: treeData
    });
}

// Check if jQuery and Fancytree are loaded
function checkDependencies() {
    if (typeof jQuery !== 'undefined' && typeof jQuery.fn.fancytree !== 'undefined') {
        initializeFancytree();
    } else {
        setTimeout(checkDependencies, 50);
    }
}

checkDependencies();
