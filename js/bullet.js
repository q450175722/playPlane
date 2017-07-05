

/**
//子弹Bullet
function Bullet(){
	//属性ele
	this.ele = document.createElement("div");
	this.id = parseInt(Math.random()*100000000);
	
	//方法init
	this.init = function(){
		
		//添加
		gameEngine.allBullet[this.id] = this;
		//console.log( gameEngine.allBullet );
		
		gameEngine.ele.appendChild(this.ele);
		this.ele.className = "bullet";
		/!*this.ele.style.left = myPlane.ele.offsetLeft + myPlane.ele.offsetWidth/2 - this.ele.offsetWidth/2 + "px";*!/

        this.ele.style.top = myPlane.ele.offsetTop - this.ele.offsetHeight + "px";
		return this;
	}

    this.left1= function (){
        this.ele.style.left = myPlane.ele.offsetLeft + myPlane.ele.offsetWidth*(4/5)- this.ele.offsetWidth/2+"px";
    };
    this.left2= function (){
        this.ele.style.left = myPlane.ele.offsetLeft + myPlane.ele.offsetWidth/2- this.ele.offsetWidth/2+"px";
    };
    this.left3= function (){
        this.ele.style.left = myPlane.ele.offsetLeft + myPlane.ele.offsetWidth*(1/5)- this.ele.offsetWidth/2+"px";
    };
    this.left4= function (){
        this.ele.style.left = myPlane.ele.offsetLeft + myPlane.ele.offsetWidth*(6/5)- this.ele.offsetWidth/2+"px";
    };
    this.left5= function (){
        this.ele.style.left = myPlane.ele.offsetLeft + myPlane.ele.offsetWidth*(-(1/5))- this.ele.offsetWidth/2+"px";
    };


	
	//方法move
	this.move = function(){
		var that = this;
		this.timer = setInterval(function(){
			var y = that.ele.offsetTop - 10;
			if (y < -18) {
				clearInterval(that.timer); //停止移动
				gameEngine.ele.removeChild(that.ele); //移除子弹
				
				//删除
				delete gameEngine.allBullet[that.id];
			}
			else {
				that.ele.style.top = y + "px"; //移动
			}
		}, 50);
        return this;
	}
	
	//爆炸
	this.boom = function(){
		clearInterval(this.timer); //停止移动
		
		this.ele.className = "bullet-die";
		
		var that = this;
		var dieImgs = ["images2/die1.png", "images2/die2.png"]; 
		var i = 0;
		var dieTimer = setInterval(function(){
			if (i >= 1){
				clearInterval(dieTimer); //停止爆炸
				gameEngine.ele.removeChild(that.ele); //移除子弹
			}else {
				that.ele.style.background = "url("+ dieImgs[++i] +") no-repeat";
			}
		}, 100);
	}
	
}
*/


//子弹Bullet
class Bullet{
    //属性ele
    constructor(ele,id){
        this.ele = document.createElement("div");
        this.id = parseInt(Math.random()*100000000);
    }

    //方法init
    init (){

        //添加
        gameEngine.allBullet[this.id] = this;
        //console.log( gameEngine.allBullet );

        gameEngine.ele.appendChild(this.ele);
        this.ele.className = "bullet";
        /*this.ele.style.left = myPlane.ele.offsetLeft + myPlane.ele.offsetWidth/2 - this.ele.offsetWidth/2 + "px";*/

        this.ele.style.top = myPlane.ele.offsetTop - this.ele.offsetHeight + "px";
        return this;
    }

    left1(){
        this.ele.style.left = myPlane.ele.offsetLeft + myPlane.ele.offsetWidth*(4/5)- this.ele.offsetWidth/2+"px";
    };
    left2(){
        this.ele.style.left = myPlane.ele.offsetLeft + myPlane.ele.offsetWidth/2- this.ele.offsetWidth/2+"px";
    };
    left3(){
        this.ele.style.left = myPlane.ele.offsetLeft + myPlane.ele.offsetWidth*(1/5)- this.ele.offsetWidth/2+"px";
    };
    left4(){
        this.ele.style.left = myPlane.ele.offsetLeft + myPlane.ele.offsetWidth*(6/5)- this.ele.offsetWidth/2+"px";
    };
    left5(){
        this.ele.style.left = myPlane.ele.offsetLeft + myPlane.ele.offsetWidth*(-(1/5))- this.ele.offsetWidth/2+"px";
    };



    //方法move
    move(){
        var that = this;
        this.timer = setInterval(function(){
            var y = that.ele.offsetTop - 10;
            if (y < -18) {
                clearInterval(that.timer); //停止移动
                gameEngine.ele.removeChild(that.ele); //移除子弹

                //删除
                delete gameEngine.allBullet[that.id];
            }
            else {
                that.ele.style.top = y + "px"; //移动
            }
        }, 50);
        return this;
    }

    //爆炸
    boom (){
        clearInterval(this.timer); //停止移动

        this.ele.className = "bullet-die";

        var that = this;
        var dieImgs = ["images2/die1.png", "images2/die2.png"];
        var i = 0;
        var dieTimer = setInterval(function(){
            if (i >= 1){
                clearInterval(dieTimer); //停止爆炸
                gameEngine.ele.removeChild(that.ele); //移除子弹
            }else {
                that.ele.style.background = "url("+ dieImgs[++i] +") no-repeat";
            }
        }, 100);
    }

}
