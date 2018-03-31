var process = require('child_process');
var cmdGit = {
    lastCommit:function(){
        return new Promise((resolve,reject)=>{
            process.exec('git log -1 --oneline', function(err, stdout) {
                resolve(stdout);
            });
        })
    }
}
module.exports = cmdGit; 