function mprint(msg){
    if(typeof(print)!="undefined"){
        print(msg);
    }else{
        console.log(msg);
    }
}

function opredis(){
var redis = require("redis"),
        client = redis.createClient();

client.hmset('sessionid', { username: 'kris', password: 'password' }, function(err) {
      mprint('============redis err====='+err)
})

client.hgetall('sessionid', function(err, object) {
      mprint('===========redis obj==========='+object)
})
}

//opredis();
