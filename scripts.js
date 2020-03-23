let cube_m = document.getElementById('cube');
let enemy_m = document.getElementById('enemy');
let en_pox = getRandomInt(screen.width);
let en_poy = getRandomInt(screen.height);
enemy_m.style.cssText = 'background-color:red;width:50px;height:50px;position:absolute;margin-top:'+Math.floor(en_pox/5)+'px;'+'margin-left:'+Math.floor(en_poy)+'px;';
let right_left = 0;
let up_down = 0;
let playRight;
let playLeft;
let playUp;
let playDown;
let play;
let stop;
let go_r = 0;
let go_l = 0;
let go_u = 0;
let go_d = 0;
let speed = 3;
let speed_interval = 0;
let cube = window.getComputedStyle(document.getElementById('cube'));
let enemy =  window.getComputedStyle(document.getElementById('enemy'));
let cube_data = {x:parseInt(cube.getPropertyValue('margin-left')),y:parseInt(cube.getPropertyValue('margin-top')),width:parseInt(cube.getPropertyValue('width')),height:parseInt(cube.getPropertyValue('height'))};
let enemy_data = {x:parseInt(enemy.getPropertyValue('margin-left')),y:parseInt(enemy.getPropertyValue('margin-top')),width:parseInt(enemy.getPropertyValue('width')),height:parseInt(cube.getPropertyValue('height'))};
let score_l = document.getElementById('score');
let score = 0;
score_l.innerText = score;
let screen_width = screen.width;
let screen_height = screen.height-170;
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
document.onkeydown = function(e){
  e = e || window.event;
  switch(e.which || e.keyCode){
    //bind enter
    //submit();
    case 13: //to enter
      submit();
    break;
    //right
    case 39:
      document.getElementById('game_').style.cssText = 'display:block;';
      document.getElementById('welcome_cont').style.cssText = 'animation:welcome_close 1s;opacity:0;';
      if(go_r==0){
        go_l=0;
        go_d=0;
        go_u=0;
        clearInterval(playLeft);
        clearInterval(playUp);
        clearInterval(playDown);
        function moveRight(){
          go_l=0;
          right_left++;
          document.getElementById('cube').style.marginLeft = right_left*speed+'px';
          go_r++;
          cube_data = {x:parseInt(cube.getPropertyValue('margin-left')),y:parseInt(cube.getPropertyValue('margin-top')),width:parseInt(cube.getPropertyValue('width')),height:parseInt(cube.getPropertyValue('height'))};
          enemy_data = {x:parseInt(enemy.getPropertyValue('margin-left')),y:parseInt(enemy.getPropertyValue('margin-top')),width:parseInt(enemy.getPropertyValue('width')),height:parseInt(cube.getPropertyValue('height'))};
          if (cube_data.x < enemy_data.x + enemy_data.width &&
             cube_data.x + cube_data.width > enemy_data.x &&
             cube_data.y < enemy_data.y + enemy_data.height &&
             cube_data.y + cube_data.height > enemy_data.y) {
               console.log('collision detected!');
               let enemy = document.getElementById('enemy');
               let en_pox = getRandomInt(screen_width)-50;
               let en_poy = getRandomInt(screen_height)-50;
               enemy.style.cssText = 'background-color:red;width:50px;height:50px;position:absolute;margin-top:'+en_poy+'px;'+'margin-left:'+en_pox+'px;';
               score++;
               score_l.innerText = score;
          };
          if(cube_data.x > screen_width || cube_data.x < 0 || cube_data.y > screen_height || cube_data.y < 0 ){
            document.location.reload(true);
          };
        };
        playRight = setInterval(() => moveRight(),speed_interval);
      }else{}
      break;
    //left
    case 37:
      document.getElementById('game_').style.cssText = 'display:block;';
      document.getElementById('welcome_cont').style.cssText = 'animation:welcome_close 1s;opacity:0;';
      if(go_l==0){
        go_r=0;
        go_u=0;
        go_d=0; 
        clearInterval(playRight);
        clearInterval(playUp);
        clearInterval(playDown);
        function moveLeft(){
          right_left--;
          document.getElementById('cube').style.marginLeft = right_left*speed+'px';
          go_l++;
          cube_data = {x:parseInt(cube.getPropertyValue('margin-left')),y:parseInt(cube.getPropertyValue('margin-top')),width:parseInt(cube.getPropertyValue('width')),height:parseInt(cube.getPropertyValue('height'))};
          enemy_data = {x:parseInt(enemy.getPropertyValue('margin-left')),y:parseInt(enemy.getPropertyValue('margin-top')),width:parseInt(enemy.getPropertyValue('width')),height:parseInt(cube.getPropertyValue('height'))};
          if (cube_data.x < enemy_data.x + enemy_data.width &&
             cube_data.x + cube_data.width > enemy_data.x &&
             cube_data.y < enemy_data.y + enemy_data.height &&
             cube_data.y + cube_data.height > enemy_data.y) {
               console.log('collision detected!');
               let enemy = document.getElementById('enemy');
               let en_pox = getRandomInt(screen.width)-50;
               let en_poy = getRandomInt(screen.height)-50;
               enemy.style.cssText = 'background-color:red;width:50px;height:50px;position:absolute;margin-top:'+en_poy+'px;'+'margin-left:'+en_pox+'px;';
               score++;
               score_l.innerText = score;
          };
          if(cube_data.x > screen_width || cube_data.x < 0 || cube_data.y > screen_height || cube_data.y < 0 ){
            document.location.reload(true);
          };
        };
        playLeft = setInterval(() => moveLeft(),speed_interval);
      }else{};
    break;
    //up
    case 38:
      document.getElementById('game_').style.cssText = 'display:block;';
      document.getElementById('welcome_cont').style.cssText = 'animation:welcome_close 1s;opacity:0;';
      if(go_u==0){
        go_r=0;
        go_l=0;
        go_d=0;
        clearInterval(playLeft);
        clearInterval(playRight);
        clearInterval(playDown);
        function moveUp(){
          up_down--;
          document.getElementById('cube').style.marginTop = up_down*speed+'px';
          go_u++;
          cube_data = {x:parseInt(cube.getPropertyValue('margin-left')),y:parseInt(cube.getPropertyValue('margin-top')),width:parseInt(cube.getPropertyValue('width')),height:parseInt(cube.getPropertyValue('height'))};
          enemy_data = {x:parseInt(enemy.getPropertyValue('margin-left')),y:parseInt(enemy.getPropertyValue('margin-top')),width:parseInt(enemy.getPropertyValue('width')),height:parseInt(cube.getPropertyValue('height'))};
          if (cube_data.x < enemy_data.x + enemy_data.width &&
             cube_data.x + cube_data.width > enemy_data.x &&
             cube_data.y < enemy_data.y + enemy_data.height &&
             cube_data.y + cube_data.height > enemy_data.y) {
               console.log('collision detected!');
               let enemy = document.getElementById('enemy');
               let en_pox = getRandomInt(screen.width)-50;
               let en_poy = getRandomInt(screen.height)-50;
               enemy.style.cssText = 'background-color:red;width:50px;height:50px;position:absolute;margin-top:'+en_poy+'px;'+'margin-left:'+en_pox+'px;';
               score++;
               score_l.innerText = score;
          };
          if(cube_data.x > screen_width || cube_data.x < 0 || cube_data.y > screen_height || cube_data.y < 0 ){
            document.location.reload(true);
          };
        };
        playUp = setInterval(() => moveUp(),speed_interval);
      }else{};
    break;
    //down
    case 40:
      document.getElementById('game_').style.cssText = 'display:block;';
      document.getElementById('welcome_cont').style.cssText = 'animation:welcome_close 1s;opacity:0;';
      if(go_d==0){
        go_r=0;
        go_l=0;
        go_u=0;
        clearInterval(playLeft);
        clearInterval(playRight);
        clearInterval(playUp);
        function moveDown(){
          up_down++;
          document.getElementById('cube').style.marginTop = up_down*speed+'px';
          go_d++;
          cube_data = {x:parseInt(cube.getPropertyValue('margin-left')),y:parseInt(cube.getPropertyValue('margin-top')),width:parseInt(cube.getPropertyValue('width')),height:parseInt(cube.getPropertyValue('height'))};
          enemy_data = {x:parseInt(enemy.getPropertyValue('margin-left')),y:parseInt(enemy.getPropertyValue('margin-top')),width:parseInt(enemy.getPropertyValue('width')),height:parseInt(cube.getPropertyValue('height'))};
          if (cube_data.x < enemy_data.x + enemy_data.width &&
             cube_data.x + cube_data.width > enemy_data.x &&
             cube_data.y < enemy_data.y + enemy_data.height &&
             cube_data.y + cube_data.height > enemy_data.y) {
               console.log('collision detected!');
               let enemy = document.getElementById('enemy');
               let en_pox = getRandomInt(screen.width)-50;
               let en_poy = getRandomInt(screen.height)-50;
               enemy.style.cssText = 'background-color:red;width:50px;height:50px;position:absolute;margin-top:'+en_poy+'px;'+'margin-left:'+en_pox+'px;';
               score++;
               score_l.innerText = score;
          };
          if(cube_data.x > screen_width || cube_data.x < 0 || cube_data.y > screen_height || cube_data.y < 0 ){
            document.location.reload(true);
          };
        };
        playDown = setInterval(() => moveDown(),speed_interval);
      }else{};
    break;
    //esc for exit from game(reload page)
    case 27:
      document.location.reload(true);
    break;
  };
};
