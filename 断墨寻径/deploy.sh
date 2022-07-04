#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 如果是发布博客
# 1.生成静态文件
npm run docs:build

# 2.进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

# 3.提交到本地
git add .
git commit -m 'update'

# 4.推送到远程仓库
git push -f git@github.com:yydswanghai/yydswanghai.github.io.git master

####################################################################

# 如果是推送博客源代码
# 1.进入到根目录
# 2.提交到本地
git add .
git commit -m 'update'
# 3.推送到远程仓库
git push -f git@github.com:yydswanghai/Blog-source-code.git master

cd -