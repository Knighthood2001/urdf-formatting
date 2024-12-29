const fs = require('fs');

//TODO:这里面的替换，我将\n替换成了空格
module.exports = function (text) {
    return extractAndReplaceContentInTags(text);
}

/**
 * 移除文本中的多余空白字符
 *
 * @param {string} text 需要处理的文本
 * @returns {string} 将连在一起多个空白字符替换成一个空格
 */
function removeEnterAndWhitespace(text) {
    return text.replace(/\s+/g, ' ');
}

function extractAndReplaceContentInTags(text) {
    let stack = [];
    let result = "";
    let i = 0;

    while (i < text.length) {
        if (text[i] === '<') {
            stack.push(i);
        } 
        else if (text[i] === '>') {
            if (stack.length > 0) {
                let start = stack.pop();
                if (stack.length === 0) {
                    let content = text.substring(start + 1, i);

                    let newContent = removeEnterAndWhitespace(content);

                    result += "<" + newContent + ">";
                } else {
                    result += text.substring(start, i + 1);
                }
            } else {
                result += text[i];
            }
        } 
        else {
            if (stack.length === 0) {
                result += text[i];
            }
        }
        i++;
    }
    // console.log("result为：", result);
    return result;
}


