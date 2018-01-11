

let gameengine = {
	ele:null,
	bullets:[],
	enemys:[],
	totalScore:0,
	init(){
		this.ele = document.getElementById("main");
		return this;
	},
	//开始游戏
	start(){
		console.log("开始游戏");
		this.loadding(()=>{
			console.log("加载游戏结束");
			//创建我的飞机
			myplane.init().move();
			//让我的飞机发射子弹
			myplane.fire();
			//创建敌机
			gameengine.createEnemy();
			//碰撞检测
			gameengine.crashListening();
		});
	},
	//加载游戏
	loadding(cb){
		let logo = document.createElement("div");
		gameengine.ele.appendChild(logo);
		logo.className = "logo";
		
		let load = document.createElement("div");
		gameengine.ele.appendChild(load);
		load.className = "load";
		//动画
		const imgs = ["../images/loading1.png", "../images/loading2.png", "../images/loading3.png"];
		let i = 0;
		const timer = setInterval(()=>{
			if( i>=5 ){
				clearInterval(timer);
				gameengine.ele.removeChild(logo);
				gameengine.ele.removeChild(load);	
				if(cb) cb();
//				cb && cb();
			}
			else{
				load.style.background = "url("+imgs[++i%3]+")no-repeat";
			}
		},500);
	},
	//创建敌机
	createEnemy(){
		//随机创建敌机
		//创建大型敌机
		setInterval(()=>{
			let b =Math.random()>0.5 ? true:false;
			if( b ){
				let enemy = new Enemy(Enemy.prototype.ENEMY_TYPE_LARGE);
				enemy.init().move();
			}
		},6000);
		//创建中型敌机
		setInterval(()=>{
			let b = Math.random()>0.4 ? true : false;
			if( b ){
				let enemy = new Enemy(Enemy.prototype.ENEMY_TYPE_MIDDLE);
				enemy.init().move();
			}
		},3000);
		//创建小型敌机
		setInterval(()=>{
			let b = Math.random()>0.5 ? true : false;
			if( b ){
				let enemy = new Enemy(Enemy.prototype.ENEMY_TYPE_SMALL);
				enemy.init().move();
			}
		},2000);
	},
	// 碰撞检测
	crashListening(){
		let timer = setInterval(()=>{
			//遍历所有敌机
			for( let i=0; i<gameengine.enemys.length; i++ ){
				//遍历所有子弹
				for( let j=0; j<gameengine.bullets.length; j++ ){
					//判断每个敌机节点 和 每个子弹节点是否有碰撞
					if(isCrash(gameengine.enemys[i].ele,gameengine.bullets[j].ele)){
						console.log("碰撞了");
						//让子弹爆炸并消失
						gameengine.bullets[j].boom();
                        gameengine.bullets.splice(j--,1);						
						//让敌机收到一点伤害
						gameengine.enemys[i].hurt();
					}
				}
				//判断敌机和我的飞机是否有碰撞
				if( isCrash(gameengine.enemys[i].ele,myplane.ele)){
					clearInterval(timer);
				    alert('两机相撞   Game Over!');
					break;
				}
			}
		},30);
	}
}




















