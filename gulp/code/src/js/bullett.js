
class Bullet{
	constructor(){
		this.ele = null;
	}
	init(){
		this.ele = document.createElement("div");
		gameengine.ele.appendChild(this.ele);
		//将子弹节点添加到页面的同时，将子弹对象添加到数组bullets中保存 
		gameengine.bullets.push(this);
		this.ele.className = "bullet";
		this.ele.style.left = myplane.ele.offsetLeft+myplane.ele.offsetWidth/2-this.ele.offsetWidth/2+"px";
		this.ele.style.top = myplane.ele.offsetTop-this.ele.offsetHeight+"px";
		return this;
	}
	
	//移动
	move(){
		let that = this;
		this.timer = setInterval(function(){
			if( that.ele.offsetTop<=-18){
				clearInterval(this.timer);
				gameengine.ele.removeChild(that.ele);
				//当子弹节点从页面上移除的同时， 将当前的子弹对象从bullets中移除;
				gameengine.bullets.splice(gameengine.bullets.indexOf(that),1);
			}
			else{
				that.ele.style.top = that.ele.offsetTop-10+"px";
			}
		},30)
	}
	//爆炸
	boom(){
		clearInterval(this.timer);
		this.ele.className = "bullet-die";
		//动画
		let that = this;
		const dieImgs =  ["../images/die1.png", "../images/die2.png"];
		let i = 0;
		const dieTimer = setInterval(function(){
			if( i>=1 ){
				clearInterval(dieTimer);
				//移除子弹节点
				gameengine.ele.removeChild(that.ele);			
			}
			else{
				that.ele.style.background = "url("+dieImgs[++i]+")no-repeat";
			}
		},100);
	}
}

















