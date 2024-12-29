const fs = require('fs');

// function mergeLinesToSingleLine(text) {
//     let result = text.replace(/\n/g, '\\n');
//     // console.log(result);
//     // 将结果写入文件
//     fs.writeFile('output.txt', result, (err) => {
//         if (err) {
//             console.error('写入文件时出错:', err);
//         } else {
//             console.log('文件已成功写入');
//         }
//     });
//     return result;
// }

function mergeLinesToSingleLine(text) {
    let result = text.split('\n').join('\\n');

    return result;
}
function removeWhitespace(text) {
    return text.replace(/\\n\s+/g, ' ');
  }
  
  function extractAndReplaceContentInTags(text) {
    let stack = [];
    let result = "";
    let i = 0;
  
    while (i < text.length) {
        if (text[i] === '<') {
            stack.push(i);
        } else if (text[i] === '>') {
            if (stack.length > 0) {
                let start = stack.pop();
                if (stack.length === 0) {
                    let content = text.substring(start + 1, i);
                    console.log("Content为：",content);
                    let newContent = removeWhitespace(content);
                    console.log("newContent为：", newContent);
                    result += "<" + newContent + ">";
                } else {
                    result += text.substring(start, i + 1);
                }
            } else {
                result += text[i];
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
// 示例调用
let inputText = `
<link name="car_base_link">
  <inertial>
    <origin
      xyz="-1.8811 -0.34697 -0.0051065"
      rpy="0 0 0" />
    <mass
      value="1640.3" />
    <inertia
      ixx="117.37"
      ixy="2.4301"
      ixz="-1.1367"
      iyy="152.33"
      iyz="0.70889"
      izz="164.51" />
  </inertial>
  <visual>
    <origin
      xyz="0 0 0"
      rpy="0 0 0" />
    <geometry>
      <mesh
        filename="package://wd581_ros/meshes/car_base_link.STL" />
    </geometry>
    <material
      name="">
      <color
        rgba="0.75294 0.75294 0.75294 1" />
    </material>
  </visual>
  <collision>
    <origin
      xyz="0 0 0"
      rpy="0 0 0" />
    <geometry>
      <mesh
        filename="package://wd581_ros/meshes/car_base_link.STL" />
    </geometry>
  </collision>
</link>
`;
var text = mergeLinesToSingleLine(inputText);
console.log(text);
var result = extractAndReplaceContentInTags(text);
console.log(result);
// 将结果写入文件
fs.writeFile('output2.txt', result, (err) => {
    if (err) {
        console.error('写入文件时出错:', err);
    } else {
        console.log('文件已成功写入');
    }
});