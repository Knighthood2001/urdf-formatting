const fs = require('fs');

//TODO:这里面的替换，我将\n替换成了空格
module.exports = function (text) {
    return xmlFormatting(text);
}


function removeWhitespace(text) {
    // return text.replace(/\r?\n|\r|\s+/g, ' ');
    return text.replace(/(\r?\n|\r|\s)+/g, ' ');
}

// 格式化文本内容，处理HTML标签
function formatting(text) {
    let stack = [];
    let result = '';
    let i = 0;
    while (i < text.length) {
        if (text[i] === '<') {
            stack.push(i);
        } else if (text[i] === '>') {
            if (stack.length > 0) {
                let start = stack.pop();
                if (stack.length === 0) {
                    let content = text.substring(start + 1, i);
                    let newContent = removeWhitespace(content);
                    result += '<' + newContent + '>';
                } else {
                    result += text.substring(start, i + 1);
                }
            } else {
                result += '>';
            }
        } else {
            if (stack.length === 0) {
                result += text[i];
            }
        }
        i++;
    }
    return result;
}

// 处理注释内容，格式化注释部分的内容
/**
 * 处理XML注释的函数
 *
 * @param text 输入的文本内容
 * @returns 处理后的文本内容
 */
function commentHandle(text) {
    let result = '';
    let i = 0;
    while (i < text.length) {
        if (text.substring(i, i + 4) === '<!--') {
            i += 4;
            let start = i;
            while (i < text.length && text.substring(i, i + 3) !== '-->') {
                i++;
            }
            if (i < text.length && text.substring(i, i + 3) === '-->') {
                let content = text.substring(start, i).trim();
                let formattedContent = formatting(content);
                result += '<!-- ' + formattedContent + ' -->';
                i += 3;
            } else {
                result += text.substring(start);
                break;
            }
        } else {
            result += text[i];
            i++;
        }
    }
    return result;
}

// 处理整个文本内容，包括注释和HTML标签
function textHandle(text) {
    let stack = [];
    let result = '';
    let i = 0;
    while (i < text.length) {
        if (text.substring(i, i + 4) === '<!--') {
            result += '<!--';
            i += 4;
            let start = i;
            while (i < text.length && text.substring(i, i + 3) !== '-->') {
                result += text[i];
                i++;
            }
            if (i < text.length && text.substring(i, i + 3) === '-->') {
                result += '-->\n';
                i += 3;
            } else {
                result += text.substring(i);
                break;
            }
        } else if (text[i] === '<') {
            stack.push(i);
        } else if (text[i] === '>') {
            if (stack.length > 0) {
                let start = stack.pop();
                if (stack.length === 0) {
                    let content = text.substring(start + 1, i);
                    let newContent = removeWhitespace(content);
                    result += '<' + newContent + '>';
                } else {
                    result += text.substring(start, i + 1);
                }
            } else {
                result += '>';
            }
        } else {
            if (stack.length === 0) {
                result += text[i];
            }
        }
        i++;
    }
    return result;
}

// XML格式化函数
/**
 * 对 XML 文件进行格式化处理，并将结果保存到指定路径。
 *
 * @param inputPath 输入的 XML 文件路径。
 * @param outputPath 输出的格式化后的 XML 文件路径。
 * @throws 如果在读取或写入文件时发生错误，将抛出异常。
 */
function xmlFormatting_file(inputPath, outputPath) {
    const fs = require('fs');
    fs.readFile(inputPath, 'utf8', (err, data) => {
        if (err) throw err;
        let text = data;
        
        // 处理注释
        let textWithFormattedComments = commentHandle(text);
        
        // 处理整个文本内容
        let formattedText = textHandle(textWithFormattedComments);
        
        console.log(formattedText);
        fs.writeFile(outputPath, formattedText, 'utf8', (err) => {
            if (err) throw err;
            console.log('File has been saved!');
        });
    });
}

/**
 * 对给定的XML文本进行格式化处理。
 *
 * @param {string} text - 待格式化的XML文本。
 * @returns {string} 格式化后的XML文本。
 */
function xmlFormatting(text) {
    // 处理注释
    let textWithFormattedComments = commentHandle(text);
    
    // 处理整个文本内容
    let formattedText = textHandle(textWithFormattedComments);
    
    return formattedText;
}
