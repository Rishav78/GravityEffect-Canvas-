(function () {
    let canvas = document.querySelector('canvas');
    let width = window.innerWidth - 3, height = window.innerHeight - 3;
    let balls;
    let gravity = 1;
    let friction = 0.929;
    let velocity = 5;
    let c = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    function randomColorGenerator() {
        return `rgba(${(Math.random()*100)%256},${(Math.random()*100)%256},${(Math.random()*100)%256},1)`;
    }
    function Ball(x, y, radius, speedY, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speedY = speedY;
        this.color = color;
        this.draw = function() {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
            console.log('rishav')
            c.fillStyle = this.color;
            c.fill();
            // c.stroke();
        }
        this.update = function() {
            if(this.radius + this.y > height){
                this.speedY = -this.speedY * friction;
            }else{
                this.speedY += gravity;
            }
            this.y = this.y + this.speedY;
            this.draw();
        }
    }
    function animate(){
        requestAnimationFrame(animate);
        c.clearRect(0, 0, width, height);
        console.log('rs')
        balls.update();
        
    }
    function init() {
        balls = new Ball(width/2, 100, 100, velocity, 'red');
    }
    init();
    animate();
    })()