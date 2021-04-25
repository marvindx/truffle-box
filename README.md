# truffle-box
BSC链智能合约开发的项目模板
* 采用openzeppelin合约库
* 支持env环境变量配置
* 支持 truffle-flattener(or [flattener](https://github.com/marvindx/flattener))
## 目录
* contracts: 合约目录
* envs: 环境变量目录（test、example、production）
    * 切换环境: `export NODE_ENV=test`
* full: flat之后的合约文件夹
* migrations: 迁移脚本文件夹
* scripts: 脚本文件
* truffle-config.js: truffle项目配置
## Usage
1. `git clone https://github.com/marvindx/truffle-box.git`
2. `npm i`
3. 使用 [flattener](https://github.com/marvindx/flattener)[可选]
4. 更新.gitignore
```
.idea/
build/
bin/
envs/.env.test
envs/.env.production
.DS_Store
node_modules/
package-lock.json
full/
```

