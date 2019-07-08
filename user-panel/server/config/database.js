// dbUrl = function(){
//   var _ip = process.env.ipAddr;
//   str_ip = _ip.substring(1,_ip.length-1);
//   console.log(str_ip);

//   return 'mongodb://' + str_ip + ':27017/userpanel'
//   }
// exports.dbUrl = dbUrl;
exports.database = 'mongodb://localhost:27017/userpanel'
exports.secret = 'secret';

