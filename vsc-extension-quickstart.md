# 欢迎来到您的VS Code扩展

## 文件夹里有什么

*此文件夹包含扩展所需的所有文件。
*'pack. json'-这是您在其中声明扩展名和命令的清单文件。
*示例插件注册一个命令并定义其标题和命令名称。有了这些信息，VS Code可以在命令调色板中显示命令。它还不需要加载插件。
*'扩展. js'-这是您将提供命令实现的主文件。
*该文件导出一个函数“激活”，该函数在您的扩展程序第一次被激活时被调用（在这种情况下通过执行命令）。在“激活”函数中，我们称之为“注册表命令”。
*我们将包含命令实现的函数作为第二个参数传递给“Register sterCommand”。

## 起来马上跑

*按“F5”打开一个加载了扩展程序的新窗口。
*通过按（Mac上的“Ctrl+Shift+P”或“Cmd+Shift+P”）并键入“Hello World”从命令面板运行您的命令。
*在“扩展. js”中的代码中设置断点以调试您的扩展。
*在调试控制台中查找扩展的输出。

## 进行更改

*您可以在“扩展. js”中更改代码后从调试工具栏重新启动扩展。
*您也可以重新加载（'Ctrl+R'或'Cmd+R'在Mac）VS Code窗口与您的扩展加载您的更改。

## 探索API

*您可以打开我们的API全套当您打开文件node_modules/@类型/vscode/index. d.ts。

## 运行测试

*安装[扩展测试运行器]（https://marketplace.visualstudio.com/items?itemName=ms-vscode.extension-test-runner）
*从活动栏打开测试视图并单击运行测试”按钮，或使用热键“Ctrl/Cmd+； A'
*在测试结果视图中查看测试结果的输出。
*更改“test/扩展. test.js”或在“test”文件夹中创建新的测试文件。
*提供的测试运行器只会考虑与名称模式“**. test.js”匹配的文件。
*您可以在“test”文件夹中创建文件夹，以任何您想要的方式构建您的测试。

## 走得更远

*[遵循用户体验指南]（https://code.visualstudio.com/api/ux-guidelines/overview）创建与VS Code的原生界面和模式无缝集成的扩展。
*[在VS Code扩展市场上发布您的扩展]（https://code.visualstudio.com/api/working-with-extensions/publishing-extension）。
*通过设置[持续集成]（https://code.visualstudio.com/api/working-with-extensions/continuous-integration）来自动化构建。
*集成到[报告问题]（https://code.visualstudio.com/api/get-started/wrapping-up#issue-reporting）流程以获取用户报告的问题和功能请求。