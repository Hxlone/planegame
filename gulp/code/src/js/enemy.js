

class Enemy{
	constructor(type){
		this.ele = null;
		this.hp = 1;
		this.speed = 5;
		this.score = 0;
		this.dieImgs = [];
		this.type = type;
	}
	init(){
		this.ele = document.createElement("div");
		gameengine.ele.appendChild(this.ele);
		gameengine.enemys.push(this);//添加到数组中；
		switch(this.type){
			case this.ENEMY_TYPE_LARGE:
			   this.ele.className = "enemy-large";
			   this.hp = this.ENEMY_HP_LARGE;
			   this.speed = this.ENEMY_SPEED_LARGE ;
			   this.dieImgs = ["../images/plane3_die1.png", "../images/plane3_die2.png", "../images/plane3_die3.png", "../images/plane3_die4.png", "../images/plane3_die5.png", "../images/plane3_die6.png"];
			   this.score = 30;
			   break;
			case this.ENEMY_TYPE_MIDDLE:
			   this.ele.className = "enemy-middle";
			   this.hp = this.ENEMY_HP_MIDDLE;
			   this.speed = this.ENEMY_SPEED_MIDDLE;
			   this.dieImgs = ["../images/plane2_die1.png", "../images/plane2_die2.png", "../images/plane2_die3.png", "../images/plane2_die4.png"];
			   this.score = 20;
			   break;
			case this.ENEMY_TYPE_SMALL:
			   this.ele.className = "enemy-small";
			   this.hp = this.ENEMY_HP_SMALL;
			   this.speed = this.ENEMY_SPEED_SMALL;
			   this.dieImgs = ["../images/plane1_die1.png", "../images/plane1_die2.png", "../images/plane1_die3.png"];
			   this.score = 10;
			   break;
			default:
			        console.log("输入错误，没有这种飞机");
		}
		
		//敌机位置
		this.ele.style.left = parseInt(Math.random()*(gameengine.ele.offsetWidth-this.ele.offsetWidth))+"px";
		this.ele.style.top = -this.ele.offsetHeight+"px";
		return this;
	};
	//移动
	move(){
		let that = this;
		this.timer = setInterval(()=>{
			if( that.ele.offsetTop>gameengine.ele.offsetHeight ){
				clearInterval(that.timer);
				gameengine.ele.removeChild(that.ele);
				gameengine.enemys.splice(gameengine.enemys.indexOf(that),1);
			}else{
				that.ele.style.top = that.ele.offsetTop+that.speed+"px";
			}
		},30);
	};
	//受到伤害
	hurt(){
		this.hp--;
		if( this.hp==0 ){
			gameengine.totalScore += this.score;
			console.log("当前分数："+gameengine.totalScore);
			this.boom();
		}
	};
	//爆炸
	boom(){
		clearInterval(this.timer);
		//动画
		let that = this;
		let i = 0;
		const dieTimer = setInterval(()=>{
			if( i>=that.dieImgs.length ){
				clearInterval(dieTimer);
				gameengine.ele.removeChild(that.ele);
				gameengine.enemys.splice(gameengine.enemys.indexOf(that),1);
			}else{
				that.ele.style.background = "url("+that.dieImgs[i++]+")no-repeat";
			}
		},50);
	};
}
//原型
//敌机类型
Enemy.prototype.ENEMY_TYPE_LARGE = 1; //表示大型敌机
Enemy.prototype.ENEMY_TYPE_MIDDLE = 2; //表示中型敌机
Enemy.prototype.ENEMY_TYPE_SMALL = 3; //表示小型敌机

//敌机血量
Enemy.prototype.ENEMY_HP_LARGE = 8; //大型敌机的血量
Enemy.prototype.ENEMY_HP_MIDDLE = 3; //中型敌机的血量
Enemy.prototype.ENEMY_HP_SMALL = 1; //小型敌机的血量

//敌机速度
Enemy.prototype.ENEMY_SPEED_LARGE = 2; //大型敌机的速度
Enemy.prototype.ENEMY_SPEED_MIDDLE = 5; //中型敌机的速度
Enemy.prototype.ENEMY_SPEED_SMALL = 8; //小型敌机的速度

























