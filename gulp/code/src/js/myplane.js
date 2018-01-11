


let myplane = {
	ele:null,
	fireInterval:300,
	init(){
		this.ele = document.createElement('div');
		gameengine.ele.appendChild(this.ele);
		this.ele.className = "myplane";
		this.ele.style.left = (gameengine.ele.offsetWidth-this.ele.offsetWidth)/2+"px";
		this.ele.style.top = gameengine.ele.offsetHeight-this.ele.offsetHeight+"px";
		return this;
	},
	
	//开火， 发射子弹
	fire(){
		setInterval(()=>{
			//创建子弹对象并发射
			let bullet = new Bullet();
			bullet.init().move();
		},this.fireInterval);
	},
	
	//拖拽移动
	move(){
		myplane.ele.onmousedown = (e)=>{
			e = e||event;
			let disx = e.offsetX;
			let disy = e.offsetY;
			document.onmousemove = (e)=>{
				e = e||event;
				let x = e.pageX-disx-gameengine.ele.offsetLeft;
				if( x<=0 ){
					x = 0;
				}
				else if( x>gameengine.ele.offsetWidth-myplane.ele.offsetWidth ){
					x = gameengine.ele.offsetWidth-myplane.ele.offsetWidth;
				}
				myplane.ele.style.left = x+"px";
				myplane.ele.style.top = e.pageY-disy+"px";
			}
			document.onmouseup = ()=>{
				document.onmousemove = document.onmouseup = null;
			}
		}
	}
}

















