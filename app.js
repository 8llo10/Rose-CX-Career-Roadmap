const app=document.querySelector('.app');
const screens=[...document.querySelectorAll('.screen')];
const dots=[...document.querySelectorAll('.world-dots button')];
const transition=document.getElementById('transition');
const backBtn=document.getElementById('backBtn');
const finalBtn=document.getElementById('finalBtn');
let current='hub';
function go(id){
  if(id===current)return;
  transition.classList.remove('show');void transition.offsetWidth;transition.classList.add('show');
  if(navigator.vibrate)navigator.vibrate(18);
  setTimeout(()=>{
    screens.forEach(s=>s.classList.toggle('active',s.id===id));
    dots.forEach(d=>d.classList.toggle('active',d.dataset.go===id));
    current=id;app.classList.toggle('in-world',id!=='hub');window.scrollTo({top:0,behavior:'instant'});
  },220);
  setTimeout(()=>transition.classList.remove('show'),560);
}
document.querySelectorAll('[data-world]').forEach(b=>b.addEventListener('click',()=>go(b.dataset.world)));
dots.forEach(b=>b.addEventListener('click',()=>go(b.dataset.go)));
backBtn.addEventListener('click',()=>go('hub'));
finalBtn.addEventListener('click',()=>go('executive'));
document.querySelectorAll('.level button,.exec-node button,.final-boss button').forEach(btn=>btn.addEventListener('click',()=>{if(navigator.vibrate)navigator.vibrate(12);btn.animate([{filter:'brightness(1)'},{filter:'brightness(1.45)',offset:.45},{filter:'brightness(1)'}],{duration:260,easing:'ease-out'});}));
let x0=null,y0=null;
document.addEventListener('touchstart',e=>{x0=e.touches[0].clientX;y0=e.touches[0].clientY},{passive:true});
document.addEventListener('touchend',e=>{if(x0===null||current==='hub')return;const dx=e.changedTouches[0].clientX-x0,dy=e.changedTouches[0].clientY-y0;x0=y0=null;if(Math.abs(dx)<70||Math.abs(dx)<Math.abs(dy)*1.25)return;const order=['leadership','quality','complaints','wfm','cx','training','executive'];let i=order.indexOf(current);if(dx<0&&i<order.length-1)go(order[i+1]);if(dx>0&&i>0)go(order[i-1]);},{passive:true});