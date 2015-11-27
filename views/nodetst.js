        function callback(){
            console.log("ok in jsc callback");
        }
        function testorigOpen(){
            var fs=require('fs');
            fs.open('/home/sin/tmp/webjs','r',callback);
        }

testorigOpen();
