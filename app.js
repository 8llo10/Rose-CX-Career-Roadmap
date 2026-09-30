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
document.addEventListener('touchend',e=>{if(x0===null||current==='hub'||document.body.classList.contains('level-open'))return;const dx=e.changedTouches[0].clientX-x0,dy=e.changedTouches[0].clientY-y0;x0=y0=null;if(Math.abs(dx)<70||Math.abs(dx)<Math.abs(dy)*1.25)return;const order=['leadership','quality','complaints','wfm','cx','training','executive'];let i=order.indexOf(current);if(dx<0&&i<order.length-1)go(order[i+1]);if(dx>0&&i>0)go(order[i-1]);},{passive:true});

// LEVEL 01 — Contact Center Team Leader
const css=document.createElement('link');css.rel='stylesheet';css.href='level-team-leader.css';document.head.appendChild(css);

const TL={
  skills:[
    ['Contact Center Fundamentals','CORE',['Inbound / Outbound','Voice / Chat / Email','ACD','CRM','Ticketing','Queue','Escalation','SLA','SOP']],
    ['Performance KPIs','CORE',['AHT','ACW','ASA / FRT','Service Level','CSAT','FCR','Quality Score','Productivity']],
    ['WFM Basics','WORKING KNOWLEDGE',['Adherence','Occupancy','Shrinkage','Absenteeism','Attrition','Utilization','Scheduling Basics']],
    ['Queue Operations','CORE',['Queue Monitoring','Work Allocation','Prioritization','Backlog','Skill-based Assignment','Real-time Decisions']],
    ['People Leadership','CORE',['Leadership','Delegation','Accountability','Motivation','Engagement','Team Building']],
    ['Coaching','CORE',['1:1 Coaching','Active Listening','Skill-gap Diagnosis','Coaching Plan','Follow-up','Measuring Improvement']],
    ['Performance Management','CORE',['Target Setting','Performance Review','Underperformance','PIP Basics','High-performer Management']],
    ['Feedback','CORE',['Constructive Feedback','Difficult Conversations','Recognition','Corrective Feedback']],
    ['Conflict Management','CORE',['Agent-Agent Conflict','Agent-Customer Escalation','De-escalation','Negotiation']],
    ['Escalation Management','CORE',['Ownership','Severity / Priority','Escalation Path','Communication','Resolution','Documentation']],
    ['Quality Management Basics','WORKING KNOWLEDGE',['QA Scorecard','Evaluation Criteria','Monitoring Basics','Calibration','Compliance','Quality Gaps']],
    ['Problem Solving','CORE',['Root Cause Analysis (RCA)','5 Whys','Pareto Basics','Cause vs Symptom','Corrective Action']],
    ['Continuous Improvement','CORE',['Bottleneck Identification','Process Gap','Action Plan','Before / After Measurement']],
    ['Reporting','CORE',['Daily Report','Weekly Report','Target vs Actual','Trend Analysis','Executive Summary']],
    ['Microsoft Excel','CORE',['Tables','Filters','PivotTables','XLOOKUP','IF','SUMIFS / COUNTIFS','Charts','Conditional Formatting','Data Cleaning']],
    ['Data Literacy','CORE',['Dashboard Reading','Correlation vs Cause','Outliers','Trends','Segmentation']],
    ['Leadership Communication','CORE',['Daily Huddles','Meetings','Presentations','Written Escalation','Stakeholder Updates']],
    ['Business English','CORE',['Interview','Reports','Meetings','Coaching Conversations','Professional Writing']],
    ['Cross-functional Collaboration','CORE',['Quality (QA)','WFM','Training','Operations','Product','Technology']],
    ['Customer Experience Basics','WORKING KNOWLEDGE',['Customer Effort','Complaint Drivers','CSAT Drivers','Repeat Contacts','Customer Feedback']]
  ],
  learning:[
    {type:'FREE',title:'ICMI — Contact Center Metrics Guide',desc:'مرجع مجاني لفهم واختيار وربط مؤشرات مراكز الاتصال بالنتائج بدل حفظ التعريفات.',url:'https://www.icmi.com/Landings/Campaign/Training/ICMI-Metrics-Guide-eBook'},
    {type:'FREE',title:'Microsoft — Excel Help & Learning',desc:'المسار الرسمي لـ PivotTables وXLOOKUP وIF وSUMIFS وتحليل البيانات والتقارير.',url:'https://support.microsoft.com/en-us/excel/'},
    {type:'FREE',title:'OpenLearn — Managing and Managing People',desc:'8 ساعات في managerial effectiveness وأدوار المدير والانتقال إلى الإدارة. Statement of Participation متاح عند الإكمال.',url:'https://www.open.edu/openlearn/money-business/leadership-management/managing-and-managing-people/content-section-0'},
    {type:'FREE',title:'OpenLearn — Working in Groups and Teams',desc:'إدارة الفرق من التكوين إلى conflict management وتقييم أداء الفريق.',url:'https://www.open.edu/openlearn/money-business/leadership-management/working-groups-and-teams/content-section-0'},
    {type:'FREE',title:'British Council — Business English',desc:'موارد مجانية للمقابلات والإيميلات والتواصل المهني باللغة الإنجليزية.',url:'https://learnenglish.britishcouncil.org/free-resources/business'},
    {type:'PREMIUM',title:'COPC® High-Performance Management Techniques (HPMT)',desc:'أقوى برنامج متخصص لهذه النقلة: metrics, real-time operations, WFM, quality, customer feedback, coaching, action planning وperformance improvement. On-demand معروض حاليًا بـ $899.',url:'https://www.copc.com/class-listing/copc-high-performance-management-techniques-hpmt-training/'},
    {type:'PREMIUM',title:'ICMI — Contact Center Supervisor Training Series',desc:'أربع وحدات: Supporting Operational Excellence, Building an Engaged Workforce, Maximizing Team Performance Metrics, Unlocking Potential Through Coaching. البرنامج الكامل معروض حاليًا بـ $2,299.',url:'https://www.icmi.com/training/courses/icmi-elevate-the-contact-center-supervisor-training-series'},
    {type:'PAID',title:'University of Michigan — Leading People and Teams',desc:'Leadership, motivation, talent, influence, team leadership وperformance. Career Certificate عبر Coursera.',url:'https://www.coursera.org/specializations/leading-teams'},
    {type:'PAID',title:'UC Davis — Coaching Skills for Managers',desc:'Coaching, expectations, accountability, performance assessment وcoaching conversations. Career Certificate عبر Coursera.',url:'https://www.coursera.org/specializations/coaching-skills-manager'}
  ],
  credentials:[
    {code:'COPC',title:'COPC® High-Performance Management Techniques',tag:'TOP PICK',when:'NOW / OPTIONAL',desc:'ليست شرط توظيف، لكنها الأقرب مباشرة لدور frontline manager. COPC تصنف HPMT للـfrontline/operations managers والـaspiring frontline managers؛ النسخة الامتحانية يمكن أن تقود إلى COPC Certified Professional Manager.',url:'https://www.copc.com/class-listing/copc-high-performance-management-techniques-hpmt-training/'},
    {code:'HDI',title:'HDI Support Center Team Lead (HDI-SCTL)',tag:'CONDITIONAL',when:'TECH SUPPORT',desc:'ممتاز إذا البيئة Technical Support / IT Service Desk. يغطي leadership, SLA/OLA, conflict, scheduling, coaching, KPIs وITIL processes. الاختبار 65 سؤالًا والنجاح 80%.',url:'https://www.thinkhdi.com/education/courses/hdi-support-center-team-lead'},
    {code:'CSSGB',title:'ASQ Certified Six Sigma Green Belt',tag:'POWER-UP',when:'QA / IMPROVEMENT',desc:'ليست مطلوبة لـTeam Leader. مفيدة إذا بدأت تقود process improvement. ASQ تطلب 3 سنوات خبرة مدفوعة full-time في مجال أو أكثر من CSSGB Body of Knowledge.',url:'https://www.asq.org/cert/six-sigma-green-belt'},
    {code:'MO-211',title:'Microsoft Office Specialist: Excel Expert',tag:'OPTIONAL',when:'REPORTING',desc:'إثبات رسمي لمستوى Excel المتقدم: workbook management, data, advanced formulas/macros, advanced charts/tables. المهارة العملية أهم من الشهادة لهذه المرحلة.',url:'https://learn.microsoft.com/en-us/credentials/certifications/exams/mo-211/'},
    {code:'PL-300',title:'Microsoft Certified: Power BI Data Analyst Associate',tag:'FUTURE POWER-UP',when:'ANALYTICS / CX',desc:'ليست شرط Team Leader. استثمار قوي للمراحل اللاحقة في Quality/WFM/CX/Reporting: prepare, model, visualize/analyze, manage and secure Power BI.',url:'https://learn.microsoft.com/en-us/credentials/certifications/data-analyst-associate/'}
  ]
};

const knowledge=[
  {q:'انخفض AHT من 6:20 إلى 5:10، لكن CSAT هبط من 91% إلى 78% وRepeat Contacts ارتفعت. ما أول تصرف قيادي صحيح؟',a:['نضغط أكثر لتخفيض AHT','نراجع FCR/Repeat Contacts وQA ونحدد هل السرعة أثرت على resolution قبل أي target جديد','نرفع Target الـAHT إلى 4:30','نوقف قياس CSAT مؤقتًا'],c:1},
  {q:'أي مجموعة مؤشرات تعطي صورة أفضل عن كفاءة الفريق وجودة الحل معًا؟',a:['AHT فقط','CSAT فقط','AHT + FCR + Quality + CSAT + Service Level','عدد المكالمات فقط'],c:2},
  {q:'Agent ملتزم بالجدول لكن Service Level للفريق منخفض. أي استنتاج هو الأدق؟',a:['المشكلة حتمًا Adherence','لا يمكن الجزم؛ افحص volume مقابل forecast وstaffing وAHT وshrinkage والـqueue','يجب معاقبة أبطأ Agent','نخفض وقت الـACW للجميع فورًا'],c:1},
  {q:'في Performance Coaching، ما الترتيب الأقوى؟',a:['لوم → إنذار → متابعة','KPI gap → evidence/sample → root cause → coaching action → follow-up measure','Target → رسالة جماعية → إغلاق','مقارنة الموظف بزملائه → ضغط → قياس'],c:1},
  {q:'ما الفرق الأهم بين Symptom وRoot Cause؟',a:['لا يوجد فرق','Symptom هو النتيجة الظاهرة؛ Root Cause هو السبب القابل للمعالجة الذي يولد المشكلة','Root Cause دائمًا موظف','Symptom دائمًا KPI'],c:1}
];
const simulation=[
  {q:'11:20 AM: Service Level انهار، 4 Agents غايبين، الـQueue يرتفع، Agent لديه escalation، وWFM يقول لا توجد coverage إضافية. ما أفضل أول حركة؟',a:['أترك الـqueue وأحل escalation بنفسي حتى النهاية','أعمل triage فوري: أتحقق من staffing/skills/breaks والـqueue، أطلب adjustments ممكنة مع WFM، أفوض escalation لمورد مناسب وأحمي service recovery','ألغي كل breaks لبقية اليوم','أرسل تقرير للإدارة وأنتظر'],c:1},
  {q:'Top performer يحقق الأرقام لكنه يخلق توترًا داخل الفريق. ماذا تفعل؟',a:['أتجاهل السلوك لأن أرقامه ممتازة','أواجهه أمام الفريق','1:1 مبني على أمثلة سلوكية واضحة، أوضح expectation وتأثير السلوك، أتفق على action/follow-up وأطبق accountability نفسها على الجميع','أنقله فورًا'],c:2},
  {q:'Agent منخفض الأداء في FCR. ما أول تشخيص مهني؟',a:['PIP مباشرة','أراجع عينات interactions والـQA/knowledge/process data لأحدد هل gap معرفة أو مهارة أو process/system قبل اختيار coaching action','أخفض AHT target','أطلب منه تقليد أفضل Agent'],c:1},
  {q:'SLA تحت الهدف 3 أيام متتالية. ما التسلسل الأقوى للتحقيق؟',a:['لوم WFM → زيادة overtime','Demand/forecast → staffing & shrinkage → adherence → AHT/handle drivers → skill routing/process incidents → corrective actions with owners','CSAT → survey comments فقط','تغيير SLA target'],c:1}
];
const interview=[
  {q:'Interview Boss: “Tell me about a time you improved an underperforming agent.” أي بنية جواب هي الأقوى؟',a:['أقول إني شجعتها كثيرًا','Situation + KPI gap + diagnosis/evidence + coaching action + follow-up + measurable result','أشرح أن الموظفة كانت سيئة','أذكر نظريتي عن القيادة بدون مثال'],c:1},
  {q:'“Which contact center KPIs do you monitor and why?” أفضل إجابة:',a:['AHT لأنه أهم KPI','أذكر قائمة مؤشرات فقط','أربط service/access metrics مثل SLA/ASA مع efficiency مثل AHT/occupancy ومع quality/outcome مثل FCR/QA/CSAT وأشرح trade-offs','CSAT فقط لأنه صوت العميل'],c:2},
  {q:'“How do you handle a difficult escalation?” ما الذي يبحث عنه المحاور؟',a:['أن أعد العميل بأي شيء','Ownership + de-escalation + facts + policy/SLA + coordination + clear next step + documentation + closure','تحويل الحالة للمدير فورًا','الدفاع عن الموظف فقط'],c:1},
  {q:'“Your SLA is falling because of unexpected absenteeism. What do you do?” أفضل جواب:',a:['إلغاء الإجازات دائمًا','Real-time assessment + WFM coordination + re-prioritization/skill moves where allowed + escalation plan + customer impact protection + post-incident RCA','خفض quality monitoring','رفع AHT target'],c:1}
];
const evidenceNames=['Coaching Evidence','Leadership Evidence','Escalation Evidence','Performance Analysis Evidence','Continuous Improvement Evidence'];
const storeKey='rose-cx-team-leader-v1';
let state=JSON.parse(localStorage.getItem(storeKey)||'{"knowledge":null,"simulation":null,"interview":null,"evidence":{}}');
const saveState=()=>localStorage.setItem(storeKey,JSON.stringify(state));

function createLevel(){
  const d=document.createElement('div');d.className='level-drawer';d.id='teamLeaderLevel';
  d.innerHTML=`<div class="level-shell"><header class="level-head"><div class="level-head-row"><button class="tl-close" aria-label="Close">×</button><div class="tl-title"><span class="tl-kicker">WORLD 01 · LEVEL 01</span><h2>Contact Center Team Leader</h2></div><div class="tl-score"><div><b id="tlScore">0%</b><small>READINESS</small></div></div></div><div class="tl-status"><span class="tl-status-pill" id="tlStatus">⚔ IN TRAINING</span><div class="tl-progress"><i id="tlBar"></i></div></div></header><nav class="level-tabs"><button class="level-tab active" data-tab="brief">BRIEFING</button><button class="level-tab" data-tab="skills">SKILLS</button><button class="level-tab" data-tab="learn">LEARN</button><button class="level-tab" data-tab="certs">CREDENTIALS</button><button class="level-tab" data-tab="gates">GATES</button></nav><main class="level-content"><section class="tl-panel active" data-panel="brief" id="tlBrief"></section><section class="tl-panel" data-panel="skills" id="tlSkills"></section><section class="tl-panel" data-panel="learn" id="tlLearn"></section><section class="tl-panel" data-panel="certs" id="tlCerts"></section><section class="tl-panel" data-panel="gates" id="tlGates"></section></main></div>`;
  document.body.appendChild(d);
  renderStatic();renderGates();updateReadiness();
  d.querySelector('.tl-close').onclick=closeLevel;
  d.querySelectorAll('.level-tab').forEach(b=>b.onclick=()=>switchTab(b.dataset.tab));
}
function renderStatic(){
  document.getElementById('tlBrief').innerHTML=`<div class="mission-hero"><span class="rank">TARGET ROLE · FRONTLINE LEADERSHIP</span><h3>Contact Center Team Leader</h3><p>الانتقال من تنفيذ الخدمة إلى قيادة أداء فريق كامل. السوق في جدة/مكة يطلب KPIs، coaching، performance evaluation، reporting/analytics، escalations، problem solving والعربي والإنجليزي. وجود leadership/supervisory responsibilities مفضّل في إعلان محلي حديث، وليس شرطًا مطلقًا.</p><div class="market-chip">● LOCAL MARKET FIT · 4 YEARS EXPERIENCE CAN BE COMPETITIVE</div></div><div class="section-label"><h4>Win condition</h4><span>READY TO APPLY ≠ JOB GUARANTEE</span></div><div class="gate-grid"><div class="gate-card"><b>80%</b><h5>Knowledge Gate</h5><p>فهم KPIs والعلاقات والقرارات.</p></div><div class="gate-card"><b>80%</b><h5>Simulation Gate</h5><p>قرارات تشغيلية تحت الضغط.</p></div><div class="gate-card"><b>4/5</b><h5>Evidence Gate</h5><p>أمثلة حقيقية موثقة بصيغة موقف/فعل/نتيجة.</p></div><div class="gate-card"><b>75%</b><h5>Interview Boss</h5><p>Judgment + structure + leadership reasoning.</p></div></div><div class="section-label"><h4>What is NOT required</h4></div><div class="quest-card"><h5>No mandatory professional certification</h5><p>لهذه المرحلة، الخبرة والقدرة على القيادة والتحليل أهم من تجميع الشهادات. الشهادات أدناه Power-ups وليست بوابة توظيف إلزامية.</p></div><div class="source-note">Market benchmark: 2P Perfect Presentation — Customer Service Team Leader (Jeddah–Makkah). المحتوى داخل هذا المستوى مبني أيضًا على أطر COPC وICMI الرسمية.</div>`;
  document.getElementById('tlSkills').innerHTML=`<div class="mission-hero"><span class="rank">SKILL TREE</span><h3>Role Capability Map</h3><p>هذه ليست checkboxes. الـGates هي التي تختبر هل تعرفين تستخدمين المهارات فعليًا.</p></div><div class="section-label"><h4>Required capabilities</h4><span>${TL.skills.length} DOMAINS</span></div><div class="skill-tree">${TL.skills.map(s=>`<article class="skill-card"><div class="skill-card-top"><h5>${s[0]}</h5><span class="skill-tier">${s[1]}</span></div><div class="skill-items">${s[2].map(x=>`<span>${x}</span>`).join('')}</div></article>`).join('')}</div>`;
  document.getElementById('tlLearn').innerHTML=`<div class="mission-hero"><span class="rank">QUEST LOG</span><h3>Learning Path</h3><p>ابدئي بالمجاني لسد الفجوات، ثم اختاري برنامجًا مدفوعًا واحدًا قويًا إذا احتجتِ credential أو تدريبًا منظّمًا.</p></div><div class="section-label"><h4>Free missions</h4><span>START HERE</span></div><div class="quest-list">${TL.learning.filter(x=>x.type==='FREE').map(courseCard).join('')}</div><div class="section-label"><h4>Premium missions</h4><span>DO NOT BUY ALL</span></div><div class="quest-list">${TL.learning.filter(x=>x.type!=='FREE').map(courseCard).join('')}</div>`;
  document.getElementById('tlCerts').innerHTML=`<div class="mission-hero"><span class="rank">POWER-UPS</span><h3>Credentials</h3><p>لا توجد شهادة إلزامية لـTeam Leader. اختاري الـcredential حسب نوع المركز والمسار الذي تريدينه بعده.</p></div><div class="section-label"><h4>Credential vault</h4><span>PRIORITIZED</span></div><div class="quest-list">${TL.credentials.map(credCard).join('')}</div>`;
}
function courseCard(x){return `<article class="quest-card ${x.type==='FREE'?'free':x.type==='PREMIUM'?'premium':''}"><div class="quest-top"><h5>${x.title}</h5><span class="quest-badge">${x.type}</span></div><p>${x.desc}</p><a class="quest-link" href="${x.url}" target="_blank" rel="noopener">OPEN OFFICIAL / COURSE PAGE ↗</a></article>`}
function credCard(x){return `<article class="quest-card"><div class="credential"><div class="cred-icon">${x.code}</div><div><div class="quest-top"><h5>${x.title}</h5><span class="quest-badge">${x.tag}</span></div><p>${x.desc}</p><div class="cred-meta"><span>${x.when}</span></div><a class="quest-link" href="${x.url}" target="_blank" rel="noopener">OFFICIAL SOURCE ↗</a></div></div></article>`}
function switchTab(tab){
  const d=document.getElementById('teamLeaderLevel');d.querySelectorAll('.level-tab').forEach(x=>x.classList.toggle('active',x.dataset.tab===tab));d.querySelectorAll('.tl-panel').forEach(x=>x.classList.toggle('active',x.dataset.panel===tab));d.querySelector('.level-content').scrollTop=0;
}
function openLevel(){document.getElementById('teamLeaderLevel').classList.add('open');document.body.classList.add('level-open');document.body.style.overflow='hidden';if(navigator.vibrate)navigator.vibrate([20,30,20]);}
function closeLevel(){document.getElementById('teamLeaderLevel').classList.remove('open');document.body.classList.remove('level-open');document.body.style.overflow='';}

function renderGates(){
  const eCount=evidenceNames.filter((_,i)=>evidenceComplete(i)).length;
  const gate=(name,key,weight,pass,desc)=>`<article class="gate-card ${pass?'pass':''}"><b>${state[key]===null||state[key]===undefined?'—':key==='evidence'?eCount+'/5':state[key]+'%'}</b><h5>${name}</h5><p>${desc}</p><button class="gate-start" data-gate="${key}">${key==='evidence'?'BUILD EVIDENCE':'START / RETRY'}</button></article>`;
  document.getElementById('tlGates').innerHTML=`<div class="mission-hero"><span class="rank">BOSS RUN</span><h3>Readiness Gates</h3><p>الـLevel لا ينجح بضغط “أعرف”. الاختبارات تقيس المعرفة والقرار، والـEvidence يوثّق خبرتك الحقيقية.</p></div><div class="section-label"><h4>4 gates</h4><span>ALL MUST PASS</span></div><div class="gate-grid">${gate('Knowledge Gate','knowledge',20,(state.knowledge||0)>=80,'5 أسئلة مترابطة في KPIs وcoaching وRCA.')}${gate('Simulation Gate','simulation',30,(state.simulation||0)>=80,'4 سيناريوهات تشغيلية وقيادية تحت الضغط.')}${gate('Evidence Gate','evidence',25,eCount>=4,'Coaching, Leadership, Escalation, Analysis, Improvement.')}${gate('Interview Boss','interview',25,(state.interview||0)>=75,'4 أسئلة judgment مبنية على مقابلات Team Lead.')}</div><div id="gateStage"></div>${readyBanner()}`;
  document.querySelectorAll('[data-gate]').forEach(b=>b.onclick=()=>startGate(b.dataset.gate));
}
function evidenceComplete(i){const x=state.evidence[i];return x&&['s','a','r'].every(k=>(x[k]||'').trim().length>=20)}
function readiness(){const e=evidenceNames.filter((_,i)=>evidenceComplete(i)).length;const k=Math.min(state.knowledge||0,100),s=Math.min(state.simulation||0,100),iv=Math.min(state.interview||0,100),ev=e/5*100;return Math.round(k*.20+s*.30+ev*.25+iv*.25)}
function allPassed(){const e=evidenceNames.filter((_,i)=>evidenceComplete(i)).length;return (state.knowledge||0)>=80&&(state.simulation||0)>=80&&e>=4&&(state.interview||0)>=75}
function readyBanner(){const pass=allPassed();return `<div class="ready-banner ${pass?'':'locked'}"><div class="boss-crown">${pass?'♛':'◇'}</div><h4>${pass?'LEVEL PASSED · READY TO APPLY':'BOSS LOCKED'}</h4><p>${pass?'اجتزت معيار الجاهزية الداخلي لهذه المرحلة. هذا لا يضمن التوظيف؛ متطلبات الشركة والمقابلة النهائية تبقى مستقلة.':'اجتز كل Gate بالحد الأدنى المطلوب لفتح READY TO APPLY.'}</p></div>`}
function updateReadiness(){const score=readiness();const e=evidenceNames.filter((_,i)=>evidenceComplete(i)).length;document.getElementById('tlScore').textContent=score+'%';document.getElementById('tlBar').style.width=score+'%';const status=document.getElementById('tlStatus');if(allPassed()){status.textContent='🏆 READY TO APPLY'}else if(score>=70){status.textContent='◐ ALMOST READY'}else{status.textContent='⚔ IN TRAINING'};saveState();}
function startGate(key){if(key==='evidence')return renderEvidence();const bank=key==='knowledge'?knowledge:key==='simulation'?simulation:interview;runQuiz(key,bank)}
function runQuiz(key,bank){let i=0,score=0,locked=false;const stage=document.getElementById('gateStage');stage.scrollIntoView({behavior:'smooth',block:'start'});function draw(){const q=bank[i];stage.innerHTML=`<div class="section-label"><h4>${key==='knowledge'?'Knowledge Gate':key==='simulation'?'Live Simulation':'Interview Boss'}</h4><span>${i+1} / ${bank.length}</span></div><div class="quiz-box"><div class="quiz-progress">${key.toUpperCase()} · QUESTION ${i+1}</div><h4>${q.q}</h4><div class="answers">${q.a.map((a,n)=>`<button class="answer" data-a="${n}">${a}</button>`).join('')}</div><button class="quiz-next" disabled>NEXT</button></div>`;locked=false;stage.querySelectorAll('.answer').forEach(btn=>btn.onclick=()=>{if(locked)return;locked=true;const n=+btn.dataset.a;if(n===q.c)score++;stage.querySelectorAll('.answer').forEach((x,j)=>{x.disabled=true;if(j===q.c)x.classList.add('correct');if(j===n&&n!==q.c)x.classList.add('wrong')});stage.querySelector('.quiz-next').disabled=false});stage.querySelector('.quiz-next').onclick=()=>{i++;if(i<bank.length)draw();else finish()}}
  function finish(){const pct=Math.round(score/bank.length*100);state[key]=pct;saveState();const threshold=key==='interview'?75:80;stage.innerHTML=`<div class="section-label"><h4>Gate result</h4><span>${pct>=threshold?'PASS':'RETRY'}</span></div><div class="quiz-box"><div class="quiz-result"><strong>${pct}%</strong><h4>${pct>=threshold?'GATE CLEARED':'NOT CLEARED YET'}</h4><p>${pct>=threshold?'تم اجتياز الحد المطلوب.':'الحد المطلوب '+threshold+'%. راجعي الفجوات ثم أعيدي المحاولة.'}</p><button class="quiz-next" id="gateDone">RETURN TO GATES</button></div></div>`;document.getElementById('gateDone').onclick=()=>{renderGates();updateReadiness()};updateReadiness()}
  draw();
}
function renderEvidence(){const stage=document.getElementById('gateStage');stage.innerHTML=`<div class="section-label"><h4>Evidence Vault</h4><span>PASS 4 / 5</span></div><div class="gate-note">اكتبي أمثلة حقيقية فقط، بدون بيانات عملاء أو معلومات سرية. كل Evidence يحتاج Situation/Problem + Action + Result. النظام يتحقق من اكتمال الهيكل، وليس من صحة ادعاء جهة العمل.</div>${evidenceNames.map((name,i)=>{const x=state.evidence[i]||{};return `<article class="evidence-case" data-e="${i}"><h5>${i+1}. ${name}</h5><label>Situation / Problem</label><textarea data-f="s" placeholder="ما الموقف أو المشكلة؟">${x.s||''}</textarea><label>Your Action</label><textarea data-f="a" placeholder="ماذا فعلت أنت تحديدًا؟">${x.a||''}</textarea><label>Result / Impact</label><textarea data-f="r" placeholder="ما النتيجة؟ أضيفي KPI أو أثرًا قابلًا للشرح إن وجد.">${x.r||''}</textarea><div class="evidence-state ${evidenceComplete(i)?'ok':''}">${evidenceComplete(i)?'✓ DOCUMENTED':'Needs a complete Situation + Action + Result'}</div></article>`}).join('')}<button class="evidence-save" id="saveEvidence">SAVE EVIDENCE</button>`;stage.scrollIntoView({behavior:'smooth',block:'start'});document.getElementById('saveEvidence').onclick=()=>{stage.querySelectorAll('.evidence-case').forEach(card=>{const i=card.dataset.e;state.evidence[i]={};card.querySelectorAll('textarea').forEach(t=>state.evidence[i][t.dataset.f]=t.value.trim())});saveState();renderGates();updateReadiness()}}

createLevel();
const teamLeaderBtn=document.querySelector('#leadership .level.l1 button');if(teamLeaderBtn)teamLeaderBtn.addEventListener('click',openLevel);
