	/////////////////////////////////////////////////
	var ctrlItem = document.getElementsByClassName("ctrl-item");
	var arr = ['./images/shouye/lunbo.jpg','./images/shouye/lunbo1.jpg','./images/shouye/lunbo2.jpg','./images/shouye/lunbo3.gif']
	var index = 0;
	var slideImg = document.getElementById("slideImg");
	
	//轮播图片
	function slide(){
		if (index==arr.length-1) {
			index=0;
		}else{
			index++;
		}
		slideImg.src= arr[index];
		// ctrlItem[index].style.background = "#cea6ac";
	}
	setInterval(slide,2000)
	/////////////////////////////////////////////
	///单击圆点，对应相应的图片
	ctrlItem[0].onclick = function(){
		slideImg.src= arr[0]
		ctrlItem[0].style.background = "#cea6ac";
		ctrlItem[1].style.background = "#185";
		ctrlItem[2].style.background = "#185";
		ctrlItem[3].style.background = "#185";
	}
	ctrlItem[1].onclick = function(){
		slideImg.src= arr[1]
		ctrlItem[1].style.background = "#cea6ac";
		ctrlItem[0].style.background = "#185";
		ctrlItem[2].style.background = "#185";
		ctrlItem[3].style.background = "#185";
	}
	ctrlItem[2].onclick = function(){
		slideImg.src= arr[2]
		ctrlItem[2].style.background = "#cea6ac";
		ctrlItem[0].style.background = "#185";
		ctrlItem[1].style.background = "#185";
		ctrlItem[3].style.background = "#185";
	}
	ctrlItem[3].onclick = function(){
		slideImg.src= arr[3]
		ctrlItem[3].style.background = "#cea6ac";
		ctrlItem[2].style.background = "#185";
		ctrlItem[1].style.background = "#185";
		ctrlItem[0].style.background = "#185";
	}
	///////////////////////////////////////////
	///获取一、二级菜单，添加事件，显示二级菜单
	var pngfix = document.getElementsByClassName("pngfix")[0];
	var pngfix1 = document.getElementsByClassName("pngfix")[1];
	var pngfix2 = document.getElementsByClassName("pngfix")[2];
	var pngfix3 = document.getElementsByClassName("pngfix")[3];
	var subItemXsj = document.getElementById("sub-item-xsj");
	var subItemXdn = document.getElementById("sub-item-xdn");
	var subItemMsj = document.getElementById("sub-item-msj");
	var subItemMes = document.getElementById("sub-item-mes");
	//给一级菜单添加事件，显示二级菜单
	pngfix.onmouseover = function(){
		subItemXsj.style.display = "block";
	}
	pngfix.onmouseout = function(){
		subItemXsj.style.display = "none";
	}
	pngfix1.onmouseover = function(){
		subItemXdn.style.display = "block";
	}
	pngfix1.onmouseout = function(){
		subItemXdn.style.display = "none";
	}
	pngfix2.onmouseover = function(){
		subItemMsj.style.display = "block";
	}
	pngfix2.onmouseout = function(){
		subItemMsj.style.display = "none";
	}
	pngfix3.onmouseover = function(){
		subItemMes.style.display = "block";
	}
	pngfix3.onmouseout = function(){
		subItemMes.style.display = "none";
	}
	//给二级菜单添加事件，当鼠标移到二级菜单时，也显示
	subItemXsj.onmouseover = function(){
		subItemXsj.style.display = "block";
	}
	subItemXsj.onmouseout = function(){
		subItemXsj.style.display = "none";
	}
	subItemXdn.onmouseover = function(){
		subItemXdn.style.display = "block";
	}
	subItemXdn.onmouseout = function(){
		subItemXdn.style.display = "none";
	}
	subItemMsj.onmouseover = function(){
		subItemMsj.style.display = "block";
	}
	subItemMsj.onmouseout = function(){
		subItemMsj.style.display = "none";
	}
	subItemMes.onmouseover = function(){
		subItemMes.style.display = "block";
	}
	subItemMes.onmouseout = function(){
		subItemMes.style.display = "none";
	}
	////获取服务器的数据
	var shopList = document.getElementsByClassName("shopList")[0];
	function addScript(src){
		var script = document.createElement("script");
		script.setAttribute("type","text/javascript");
		script.src = src;
		document.body.appendChild(script);
	}
	window.onload=function(){
		addScript("http://localhost:8080/data/1.json?callback=callbackData");
	}
	//定义一个数组存放经纬度
	var points=[];
	var names = []
	//回调函数
	var obj;
	function callbackData(data){
		// var obj = JSON.parse(data)
		// console.log(data.shop_data[1].addr)
		obj = data.shop_data;
		// console.log(obj);
		for(var i = 0;i<obj.length;i++){
			//创建商铺列表的div
			var listItemDiv = document.createElement("div");
			listItemDiv.className = "listItem";
			shopList.appendChild(listItemDiv);
			//创建放商铺图片的div
			var shopPicDiv = document.createElement("div");
			shopPicDiv.className = "shopPic";
			listItemDiv.appendChild(shopPicDiv);

			var a = document.createElement("a");
			shopPicDiv.appendChild(a);
			//创建存放商铺图片的img
			var img = document.createElement("img");
			img.className = "store_pic"
			a.appendChild(img);

			//创建商铺信息的div
			var contDiv = document.createElement("div");
			contDiv.className = "cont";
			listItemDiv.appendChild(contDiv);
			//创建商铺名称的h3
			var h3 = document.createElement("h3");
			contDiv.appendChild(h3);
			//创建a标签放商铺名，
			var shopnameA = document.createElement("a");
			h3.appendChild(shopnameA);
			shopnameA.className = "shopname";
			var shopGradeDiv = document.createElement("div");
			shopGradeDiv.className = "shop-grade";
			h3.appendChild(shopGradeDiv);
			//创建主营的div
			var descDiv = document.createElement("div");
			descDiv.className = "desc";
			contDiv.appendChild(descDiv);
			//创建店铺地址的div
			var addrDiv = document.createElement("div");
			addrDiv.className = "addr";
			contDiv.appendChild(addrDiv);
			//创建shop-score,放认证信息
			var shopScoreDiv = document.createElement("div");
			shopScoreDiv.className = "shop-score"
			//创建赔付的div
			var score1Div = document.createElement("div");
			score1Div.className = "score1";
			score1Div.innerHTML = "先行赔付";
			//创建放赔付图片的i
			var peifu = document.createElement("i");
			peifu.className = "ion";
			score1Div.appendChild(peifu);
			shopScoreDiv.appendChild(score1Div);
			//创建认证的div
			var score2Div = document.createElement("div");
			score2Div.className = "score2";
			score2Div.innerHTML = "同城帮认证";
			//创建放认证图片的i
			var renzheng = document.createElement("i");
			renzheng.className = "ion1";
			score2Div.appendChild(renzheng);
			shopScoreDiv.appendChild(score2Div);
			//创建人气div
			var renqiDiv = document.createElement("div");
			renqiDiv.className = "renqi";
			shopScoreDiv.appendChild(renqiDiv);
			contDiv.appendChild(shopScoreDiv);
			//创建进入店铺的a标签
			var goShopA = document.createElement("a");
			goShopA.className = "goShop";
			contDiv.appendChild(goShopA);
			//获取所需的元素
			var shopname = document.getElementsByClassName("shopname");
			var store_pic = document.getElementsByClassName("store_pic");
			var desc = document.getElementsByClassName("desc");
			var addr = document.getElementsByClassName("addr");
			var renqi = document.getElementsByClassName("renqi");
			var shopGrade = document.getElementsByClassName("shop-grade");
			var goShop = document.getElementsByClassName("goShop");
			var pages = document.getElementsByClassName("pages")[0];
			shopname[i].innerHTML = obj[i].shop_name;
			store_pic[i].src = obj[i].shop_ico;
			shopGrade[i].innerHTML = "店铺等级：" + obj[i].shop_score;
			desc[i].innerHTML = "主营:"+obj[i].shop_desc;
			addr[i].innerHTML = "地址:"+obj[i].addr;
			renqi[i].innerHTML = "人气:"+obj[i].shop_visit+"人浏览";
			goShop[i].href =obj[i].shop_addr;
			goShop[i].innerHTML = "进入店铺";
			var tmp = [];
			tmp.push(obj[i].map_longitude);
			tmp.push(obj[i].map_latitude);
			names.push(obj[i].shop_name)
			points.push(tmp);
			
		}
		//判断多少数据创建多少分页按扭
		var page1=Math.ceil(obj.length / 5);
		for(var j= 0;j<page1;j++){
			var pageA = document.createElement("a");
			pageA.href = "###";
			pageA.className = "close_page";
			pageA.innerHTML = j+1;
			pages.appendChild(pageA);
		}
		var a = document.createElement("a");
		a.innerHTML = "下一页>>";
		a.className = "nextPage";
		pages.appendChild(a);
		
	}

	// console.log(points)
	//单击地图显示地图
	var modesMap = document.getElementById("modesMap");
	var modelMap = document.getElementById("model-map");
	var container = document.getElementById("container");
	modesMap.onclick = function(e){
		e.preventDefault();
		init();
		modelMap.style.display = "block";
		console.log(obj);
	}
	//单击地图关闭按钮，关闭地图
	var map_close = document.getElementById("map_close");
	map_close.onclick = function(){
		modelMap.style.display = "none";
	}
	//地图定位
	var map =new AMap.Map("container",{
		center:[116.397428, 39.90923],
		zoom:10
	});
	function init(){
		map.plugin(["AMap.ToolBar"], function() {
            map.addControl(new AMap.ToolBar());
        });
        
		// for(var i =0;i<points.length;i++){
		// 	var marker = new AMap.Marker({
		// 		position:points[i],
		// 		title:obj[i].shop_name,
		// 		map:map
		// 	})
		// 	var infoWindow = new AMap.InfoWindow({
		// 	// isCustom:true,
		// 	content:'<h3>'+i+'</h3>',
		// 	offset:new AMap.Pixel(16,-45)
		// 	})
		// 	var aaa=AMap.event.addListener(marker, 'click', function(){
	    //    	infoWindow.open(map, marker.getPosition());
	    //     	console.log("111")
	    //  });
		// }
		points.forEach(function(elem,index){
			 var marker = new AMap.Marker({
		 		position:elem,
		 		title:obj[index].shop_name,
		 		map:map
		 	})
			 var infoWindow = new AMap.InfoWindow({
			// isCustom:true,
				content:'<h3>'+obj[index].shop_name+'</h3>'+"<div>" + obj[index].addr+"</div>",
				offset:new AMap.Pixel(16,-45)
			})
			AMap.event.addListener(marker, 'click', function(){
	       		infoWindow.open(map, marker.getPosition());
	        	console.log("111")
	        });
		})	
	}
