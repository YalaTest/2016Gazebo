var gzjs = require("gazebojs")
var gz = new gzjs.Gazebo()
var fs = require("fs")

gz.publish('gazebo.msgs.WorldControl', '~/world_control', { pause: false})
gz.subscribe('gazebo.msgs.WorldStatistics',  '~/world_stats', write_msg)

var ws = fs.createWriteStream("./test")


function write_msg(err, msg) {
    if (err)
    	console.log("Error: " + err)
    else
    	ws.write(JSON.stringify(msg)+"\n")
}

// gz.subscribe('gazebo.msgs.WorldStatistics',  '~/world_stats', function(msg) {
// 	console.log(msg)
// })
