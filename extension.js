const vscode = require('vscode');
var formatting = require('./src/index');


function activate(context) {

    var format = vscode.commands.registerTextEditorCommand('urdfFormatting', function (textEditor) {
        
		if (textEditor.document.languageId!== 'xml') {
			return;
		}
        if (!/(\.xml|\.urdf|\.xacro|\.launch)$/i.test(textEditor.document.fileName)) {
            return;
        }
        // editor text
        var text = textEditor.document.getText();   
        text = text.replace(/\n/g, " ");  //回车替换成空格
        // console.log(text);

        var code = formatting(text);

        textEditor.edit(function (editBuilder) {
            var document = textEditor.document;
            var lastLine = document.lineAt(document.lineCount - 1);
            var start = new vscode.Position(0, 0);
            var end = new vscode.Position(document.lineCount - 1, lastLine.text.length);
            var range = new vscode.Range(start, end);
            // console.log(range);
            editBuilder.replace(range, code);
        });
    });

    context.subscriptions.push(format);
}

exports.activate = activate;

function deactivate() {
}
exports.deactivate = deactivate;