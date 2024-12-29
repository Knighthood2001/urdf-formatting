# 更改日志

对 “urdf 格式” 扩展名的所有显着更改都将记录在此文件中。

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## v0.0.1

- 初始发布版本（2024.12.29）

1. 目前是将每行末尾行转换成空格。
2. 针对urdf中存在的注释，如果该注释是对代码的注释，则会将这个注释内容复制一份出注释，从而导致格式化不对。
3. 有时候右键->urdfFormatting，导致将所有内容都格式化到第一行中。
