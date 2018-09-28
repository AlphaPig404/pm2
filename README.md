
# PM2使用

## PM2常用命令

启动应用
```
    pm2 start
```
进程管理
```
    pm2 list
```
停止应用
```
    pm2 stop
```
重启应用
```
    pm2 restart
```
删除应用
```
    pm2 delete
```
## PM2自动部署

### 命令 
> pm2 deploy [env] [mode]

### 实例

启用正式环境
```
    pm2 deploy production setup
```

部署测试环境

```
    pm2 deploy devleopment
```

