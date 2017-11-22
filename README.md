# stressing-node-app

This was made for stress testing node v8.9.1

```
docker-compose build --no-cache
docker-compose up
```

And on your Mac
```
brew install siege
```
> test node directly: 
```
siege -c50 -d10 -b -t3m http://localhost:3001/ping
```

> test node via nginx:
```
siege -c50 -d10 -b -t3m http://localhost:80/ping
```
