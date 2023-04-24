const editor = ace.editor("editor");

editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");

editor.setOptions({
    fontSize: "14pt",
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true
});

// editor.setValue("console.log('Hello, world!');");

editor.commands.addCommand({
    name: "save",
    bindKey: { win: "Ctrl-S", mac: "Command-S" },
    exec: function (editor) {
        var content = editor.getValue();
        console.log("Saving content:", content);
    }
});


let content = editor.getValue();
console.log(content);
