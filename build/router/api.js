var express=require('express');
var router=express.Router();
var axios=require('axios');
var http=require('http');
var cheerio=require('cheerio');

// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
	console.log('Time: ', Date.now());
	next();
});


// 获取喜马拉雅的数据
router.post("/",function(req,res){
    var header={headers:{host:"www.ximalaya.com",referer:"http://www.ximalaya.com/explore/"}};
    axios.get("http://www.ximalaya.com/tracks/"+req.body.id+".json",header).then(function(response){
		console.log(req.body.id)
		res.send(response.data)
    },function(err){
        res.send(err)
    })
})


//获取喜马拉雅首页的有关数据
router.get("/indexpage", function (req, res) {
	// 请求的页面

	var url = "http://www.ximalaya.com/explore/";
	var dataArr = [];
	http.get(url, function (response) {
		var html = '';        //用来存储请求网页的整个html内容
		response.setEncoding('utf-8'); //防止中文乱码
		response.on('data', function (chunk) {
			html += chunk;
		});
		response.on('end', function () {
			var $ = cheerio.load(html); //采用cheerio模块解析html
			// console.log(html);
			$("li.item").each(function (index, item) {
				if ($(item).attr("sound_id") != undefined) {
					var obj = {};
					obj.id = $(item).attr("sound_id");
					obj.img = $(item).find(".pic-img img").attr("src");
					obj.title = $(item).find("span.masker-name").text().trim();
					obj.info = $(item).find("a.title").text().trim();
					obj.buy = $(item).find("a.user-name").text().trim();
					dataArr.push(obj)
				}
			})
			res.send(dataArr)
		});
	})
})
//搜索框请求



module.exports = router;
