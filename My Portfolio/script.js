
// Simple typing loop for the hero text
const txts = ['Engineering Student ',' Learner','Creative thinker'];
let i = 0;
let pos = 0;
let forward = true;
const typed = document.getElementById('typed');
function tick(){
    if(!typed) return;
    const full = txts[i];
    if(forward){
        pos++;
        if(pos>full.length){ forward=false; setTimeout(tick,700); return; }
    } else {
        pos--;
        if(pos===0){ forward=true; i=(i+1)%txts.length; setTimeout(tick,300); return; }
    }
    typed.textContent = full.substring(0,pos);
    setTimeout(tick,120);
}
tick();
