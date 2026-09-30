const worlds=[...document.querySelectorAll('.world')];
const nodes=[...document.querySelectorAll('.level-node')];
const dock=[...document.querySelectorAll('.game-dock button')];

nodes.forEach(node=>{
  node.addEventListener('click',()=>{
    node.classList.remove('node-pop');
    void node.offsetWidth;
    node.classList.add('node-pop');
    if(navigator.vibrate) navigator.vibrate(18);
  });
});

worlds.forEach(world=>{
  const banner=world.querySelector('.world-banner');
  if(!banner)return;
  banner.addEventListener('click',()=>{
    world.classList.remove('flash');
    void world.offsetWidth;
    world.classList.add('flash');
  });
});

dock.forEach(btn=>btn.addEventListener('click',()=>{
  dock.forEach(x=>x.classList.remove('active'));
  btn.classList.add('active');
  const target=btn.dataset.jump;
  if(target==='top') window.scrollTo({top:0,behavior:'smooth'});
  if(target==='worlds') document.querySelector('.world')?.scrollIntoView({behavior:'smooth',block:'start'});
  if(target==='boss') document.querySelector('.executive-world')?.scrollIntoView({behavior:'smooth',block:'start'});
}));

const observer=new IntersectionObserver(entries=>{
  const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
  if(!visible)return;
  dock.forEach(x=>x.classList.remove('active'));
  const key=visible.target.classList.contains('executive-world')?'boss':'worlds';
  document.querySelector(`.game-dock button[data-jump="${key}"]`)?.classList.add('active');
},{threshold:[.2,.45,.7]});
worlds.forEach(w=>observer.observe(w));
const exec=document.querySelector('.executive-world');if(exec)observer.observe(exec);