"use strict";var gameengine={ele:null,bullets:[],enemys:[],totalScore:0,init:function(){return this.ele=document.getElementById("main"),this},start:function(){console.log("开始游戏"),this.loadding(function(){console.log("加载游戏结束"),myplane.init().move(),myplane.fire(),gameengine.createEnemy(),gameengine.crashListening()})},loadding:function(e){var n=document.createElement("div");gameengine.ele.appendChild(n),n.className="logo";var a=document.createElement("div");gameengine.ele.appendChild(a),a.className="load";var t=["../images/loading1.png","../images/loading2.png","../images/loading3.png"],i=0,l=setInterval(function(){i>=5?(clearInterval(l),gameengine.ele.removeChild(n),gameengine.ele.removeChild(a),e&&e()):a.style.background="url("+t[++i%3]+")no-repeat"},500)},createEnemy:function(){setInterval(function(){Math.random()>.5&&new Enemy(Enemy.prototype.ENEMY_TYPE_LARGE).init().move()},6e3),setInterval(function(){Math.random()>.4&&new Enemy(Enemy.prototype.ENEMY_TYPE_MIDDLE).init().move()},3e3),setInterval(function(){Math.random()>.5&&new Enemy(Enemy.prototype.ENEMY_TYPE_SMALL).init().move()},2e3)},crashListening:function(){var e=setInterval(function(){for(var n=0;n<gameengine.enemys.length;n++){for(var a=0;a<gameengine.bullets.length;a++)isCrash(gameengine.enemys[n].ele,gameengine.bullets[a].ele)&&(console.log("碰撞了"),gameengine.bullets[a].boom(),gameengine.bullets.splice(a--,1),gameengine.enemys[n].hurt());if(isCrash(gameengine.enemys[n].ele,myplane.ele)){clearInterval(e),alert("两机相撞   Game Over!");break}}},30)}};