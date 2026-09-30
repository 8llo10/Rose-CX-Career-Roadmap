// WORLD 02 · LEVEL 01 — Contact Center Quality Analyst
// Uses the same game UI system as Team Leader, with role-specific QA gates.

const QA={
  skills:[
    ['Interaction Monitoring','CORE',['Call Monitoring','Email Evaluation','Chat Evaluation','Social / Digital Interaction Review','Recorded Interaction Review']],
    ['Quality Evaluation','CORE',['Objective Evaluation','Quality Criteria','Evaluation Standards','Scoring Accuracy','Pass / Fail Rules']],
    ['QA Scorecards','CORE',['Scorecard Structure','Weighted Scoring','Critical / Fatal Errors','Behavioral Criteria','Compliance Criteria','CX Criteria']],
    ['Sampling','CORE',['Random Sampling','Targeted Sampling','Sample Size Basics','Risk-based Sampling','Bias Avoidance']],
    ['Calibration','CORE',['Internal Calibration','Cross-team Calibration','Client Calibration','Scoring Variance','Consensus','Calibration Accuracy']],
    ['Quality Auditing','CORE',['Interaction Audits','Process Audit Basics','Documentation Audit','Compliance Audit Basics']],
    ['Agent Feedback','CORE',['Constructive Feedback','Behavior-based Feedback','Actionable Feedback','Difficult Feedback']],
    ['Coaching','CORE',['Coaching Basics','Skill-gap Identification','Coaching Recommendations','Follow-up','Measuring Improvement']],
    ['Quality Analytics','CORE',['Trend Analysis','Defect Analysis','Error Frequency','Team / Agent Segmentation','Variance Analysis']],
    ['Root Cause Analysis','CORE',['5 Whys','Fishbone / Ishikawa','Cause vs Symptom','Pareto Analysis']],
    ['Corrective Actions','CORE',['Corrective Action','Preventive Action / CAPA Basics','Owner','Deadline','Verification of Effectiveness']],
    ['Continuous Improvement','CORE',['PDCA','Process Gaps','Before / After Measurement','Improvement Recommendations']],
    ['Contact Center KPIs','CORE',['QA Score','CSAT','FCR','AHT','SLA','ASA / FRT','Repeat Contacts','Escalations','Productivity']],
    ['CX Metrics','WORKING KNOWLEDGE',['CSAT','NPS Basics','CES Basics','Complaint Drivers','Customer Effort']],
    ['Quality Reporting','CORE',['Daily / Weekly / Monthly Quality Reports','Management Summary','Quality Dashboard']],
    ['Microsoft Excel','CORE',['PivotTables','XLOOKUP','IF / IFS','COUNTIFS','SUMIFS','Conditional Formatting','Charts','Data Cleaning']],
    ['Data Visualization','CORE',['Quality Dashboards','Trend Charts','Pareto Charts','Team Comparison']],
    ['Power BI','POWER-UP',['Data Preparation','Filtering','Visualization','Dashboards','Power Query / DAX Later']],
    ['Documentation','CORE',['Evaluation Notes','QA Records','Audit Trail','Version Control','Action Logs']],
    ['Compliance & Privacy','CORE',['Policies','Procedures','Regulatory Requirements','Saudi PDPL Awareness','Authentication / Verification']],
    ['Stakeholder Management','CORE',['Operations','Team Leaders','Training','WFM','Management']],
    ['Presentation','CORE',['Presenting Quality Findings','Recommendations','Calibration Facilitation']],
    ['Communication','CORE',['Professional Arabic','Written English','Spoken English','Evidence-based Feedback']],
    ['QA Systems','WORKING KNOWLEDGE',['Quality Management Systems','Call Recording','CRM','Ticketing']],
    ['Modern QA','FUTURE-PROOF',['Speech Analytics','Interaction Analytics','Auto-scoring Concepts','Sentiment','AI-assisted QA']]
  ],
  learning:[
    {type:'FREE',title:'ICMI — How to Calibrate Your Contact Center Quality Program',desc:'أساس عملي لفهم calibration ولماذا اختلاف المقيمين يضرب دقة برنامج الجودة.',url:'https://www.icmi.com/resources/2020/calibrate-your-contact-center-quality-management-program'},
    {type:'FREE',title:'ICMI — Conducting Effective Quality Calibrations',desc:'خطوات تنفيذ جلسات calibration فعالة وتوحيد تفسير scorecard ومعايير التقييم.',url:'https://www.icmi.com/resources/2017/conducting-effective-quality-calibrations'},
    {type:'FREE',title:'ICMI — Contact Center Quality Management in 10 Steps',desc:'يبني الصورة الكاملة لبرنامج الجودة: forms, monitoring, scoring, feedback والتحسين.',url:'https://www.icmi.com/resources/2020/ten-steps-for-contact-center-quality-management'},
    {type:'FREE',title:'ASQ — Root Cause Analysis Resources',desc:'موارد رسمية لفهم problem definition و5 Whys والتمييز بين symptom وroot cause والإجراءات التصحيحية.',url:'https://asq.org/quality-resources/root-cause-analysis'},
    {type:'FREE',title:'Microsoft — Excel Help & Learning',desc:'المصدر الرسمي لـPivotTables وXLOOKUP وIF/IFS وCOUNTIFS وSUMIFS والتنظيف والرسوم.',url:'https://support.microsoft.com/en-us/excel/'},
    {type:'FREE',title:'Microsoft Learn — Get Started with Data Analytics',desc:'مدخل رسمي مجاني لتحليل البيانات قبل الانتقال إلى Power BI وPL-300.',url:'https://learn.microsoft.com/en-us/training/paths/data-analytics-microsoft/'},
    {type:'FREE',title:'Microsoft Learn — Prepare and Visualize Data with Power BI',desc:'مسار عملي مجاني للاتصال بالبيانات وتنظيفها وتحويلها ونمذجتها وبناء تقارير تفاعلية.',url:'https://learn.microsoft.com/en-us/training/paths/prepare-visualize-data-power-bi/'},
    {type:'FREE',title:'SDAIA — Personal Data Protection Law (PDPL)',desc:'معرفة مطلوبة في السعودية عند التعامل مع تسجيلات المكالمات وبيانات العملاء وCRM. معرفة تنظيمية وليست شهادة إلزامية.',url:'https://dgp.sdaia.gov.sa/wps/portal/pdp/knowledgecenter'},
    {type:'PREMIUM',title:'COPC® Best Practices for Quality Management',desc:'Top Pick لمسار Contact Center QA: form design, critical errors, quality metrics, sampling, statistical sample size, calibration, analysis وaction planning، مع اختبار/designation بحسب العرض.',url:'https://www.copc.com/class-listing/copc-best-practices-for-quality-management/'},
    {type:'PREMIUM',title:'ICMI — Optimizing Contact Center Quality',desc:'تدريب متخصص في quality evaluation forms, criteria, scoring, reporting, calibration, coaching feedback وquality improvement.',url:'https://www.icmi.com/training/courses/optimizing-contact-center-quality'},
    {type:'PAID',title:'ASQ — Root Cause Analysis Specialized Credential',desc:'تدريب وcredential متخصص في problem definition, data collection, causal tools, corrective actions, CAPA والتحقق من الفعالية.',url:'https://asq.org/training/SPSCRCA2026ASQ-root-cause-analysis-specialized-credential'}
  ],
  credentials:[
    {code:'COPC',title:'COPC® Best Practices for Quality Management',tag:'TOP PICK',when:'CONTACT CENTER QA',desc:'الأكثر تخصصًا لهذه الوظيفة: scorecards/forms، critical errors، sampling، calibration، analysis وaction planning. ليس شرط توظيف إلزاميًا لكنه Power-up مباشر للمسار.',url:'https://www.copc.com/class-listing/copc-best-practices-for-quality-management/'},
    {code:'CQPA',title:'ASQ Certified Quality Process Analyst',tag:'CAREER CREDENTIAL',when:'QUALITY TRACK',desc:'Credential قوية لمسار Quality طويل المدى، تركز على تحليل وحل مشاكل الجودة والمشاركة في Quality Improvement Projects.',url:'https://www.asq.org/cert/quality-process-analyst'},
    {code:'CSSGB',title:'ASQ Certified Six Sigma Green Belt',tag:'POWER-UP',when:'PROCESS IMPROVEMENT',desc:'ليست شرطًا للدخول إلى QA. تصبح أقوى عندما تبدأين العمل على RCA وDMAIC وprocess improvement وdefect reduction بمشاريع فعلية.',url:'https://www.asq.org/cert/six-sigma-green-belt'},
    {code:'PL-300',title:'Microsoft Certified: Power BI Data Analyst Associate',tag:'CAREER POWER-UP',when:'QA ANALYTICS / SENIOR QA',desc:'ليست شهادة QA، لكنها قوية للتقارير والتحليل والانتقال إلى Senior QA / CX / Service Excellence.',url:'https://learn.microsoft.com/en-us/credentials/certifications/data-analyst-associate/'},
    {code:'MO-211',title:'Microsoft Office Specialist: Excel Expert',tag:'OPTIONAL',when:'ADVANCED REPORTING',desc:'إثبات رسمي لمستوى Excel المتقدم. المهارة العملية في تحليل بيانات الجودة أهم من الشهادة نفسها.',url:'https://learn.microsoft.com/en-us/credentials/certifications/exams/mo-211/'},
    {code:'CQIA',title:'ASQ Certified Quality Improvement Associate',tag:'ALTERNATIVE',when:'FOUNDATION',desc:'Credential تأسيسية في Quality Improvement. لا تجمعي CQIA + CQPA + CSSGB لمجرد جمع الشهادات؛ CQPA أنسب إذا كان الهدف Quality Analyst جديًا.',url:'https://www.asq.org/cert/quality-improvement-associate'},
    {code:'CQA',title:'ASQ Certified Quality Auditor',tag:'FUTURE',when:'SENIOR QA / QUALITY MANAGER',desc:'شهادة قوية للمراحل الأعلى، وليست هدفًا أوليًا عند الانتقال من Customer Service إلى Quality Analyst.',url:'https://www.asq.org/cert/quality-auditor'},
    {code:'PLATFORM',title:'Genesys / NiCE / Verint Quality Management',tag:'CONDITIONAL',when:'ONLY IF USED',desc:'تعلمي المنصة التي تستخدمها الشركة فقط. لا تجمعي شهادات منصات لا تعملين عليها.',url:'https://beyond.genesys.com/explore/certification/home'}
  ]
};

const qaKnowledge=[
  {q:'Evaluator أعطى Interaction درجة 92% رغم وجود Critical Error متعلق بالتحقق من هوية العميل. ما التصرف الصحيح؟',a:['نحتفظ بـ92% لأن المتوسط مرتفع','نطبق قاعدة الـcritical/fatal error حسب الـscorecard ثم نوثق السبب ونراجع اتساق التطبيق','نخصم 5% فقط','نطلب من الـAgent تقييم نفسه'],c:1},
  {q:'ما الهدف الأساسي من Calibration؟',a:['رفع درجات الفريق','التأكد أن المقيمين يفسرون المعايير ويطبقونها باتساق وتقليل scoring variance','زيادة عدد المكالمات المقيمة','استبدال coaching'],c:1},
  {q:'ارتفع CSAT لكن QA Score انخفض. ما أفضل استنتاج أولي؟',a:['QA غير مهم','CSAT دائمًا أدق','لا يمكن الجزم؛ نحلل criteria المتراجعة والعينة وdrivers ونقارنها بالـcustomer outcomes','نرفع وزن CSAT داخل scorecard فورًا'],c:2},
  {q:'ما الفرق بين Random Sampling وTargeted Sampling؟',a:['لا يوجد فرق','Random يقلل تحيز الاختيار للقياس العام، وTargeted يركز على risk/issue/segment محدد','Targeted دائمًا أفضل','Random يستخدم فقط للـchat'],c:1},
  {q:'أي تسلسل أقوى لـRCA؟',a:['حل سريع → سبب لاحقًا','تعريف المشكلة → evidence/data → تحليل الأسباب → root cause → corrective action → owner/measure → verify effectiveness','لوم Agent → coaching','تغيير scorecard'],c:1}
];

const qaAudit=[
  {q:'في مكالمة، الـAgent حل المشكلة وأغلقها بسرعة لكنه لم ينفذ خطوة إلزامية للتحقق من الهوية. كيف تقيمين؟',a:['Full pass لأن العميل راضٍ','أطبق criterion/critical-error rule كما هو موثق؛ الجودة تشمل compliance وليس outcome فقط','أعطيه 90% لأن الحل صحيح','أتجاهلها إذا AHT ممتاز'],c:1},
  {q:'وجدتِ أن 7 من 10 أخطاء في الفريق تقع في نفس خطوة الإجراء. ما أفضل خطوة تالية؟',a:['Coaching فردي للجميع مباشرة','أتحقق من pattern والعينة ثم أعمل RCA: knowledge/training/process/system قبل تحديد corrective action','أخفض score للجميع','أزيد عدد الأسئلة في scorecard'],c:1},
  {q:'Team Leader يطلب منك حذف معيار لأنه يخفض نتائج فريقه. ما التصرف المهني؟',a:['أحذفه لتقليل الخلاف','أراجع purpose/risk/data والحوكمة؛ أي تغيير scorecard يتم بطريقة مضبوطة ومتفق عليها وليس لتحسين الرقم فقط','أرفع درجات فريقه يدويًا','أوقف calibration'],c:1},
  {q:'عينة الشهر كلها من Agents منخفضي الأداء لأنك أردتِ “اكتشاف مشاكل أكثر”. ما الخلل؟',a:['لا يوجد خلل','العينة متحيزة إذا كانت تستخدم لقياس الجودة العامة؛ نفصل targeted monitoring عن representative/random sampling','يجب تقييم أقل عدد ممكن','نقيس CSAT فقط'],c:1}
];

const qaCalibration=[
  {q:'ثلاثة Evaluators قيّموا نفس التفاعل: 95%، 82%، 68%. ما أول شيء تفعلينه؟',a:['نأخذ المتوسط وننتهي','نراجع البنود ذات variance، evidence لكل criterion، wording/guidance ثم نتفق على interpretation موحد','نختار أعلى درجة','نغيّر الـAgent'],c:1},
  {q:'في calibration، الخلاف سببه عبارة scorecard غامضة تحتمل تفسيرين. ما الحل الأقوى؟',a:['نطلب من كل evaluator الاستمرار بطريقته','نوثق decision rule ونحدّث guidance/examples مع version control ثم نعيد قياس الاتساق','نحذف المعيار فورًا','نرفع وزن المعيار'],c:1},
  {q:'Evaluator يغيّر درجاته دائمًا بعد معرفة اسم الـAgent. ما الخطر؟',a:['لا شيء','Evaluator bias؛ نحتاج objective evidence وتطبيق موحد للcriteria وربما blind review حيث يناسب','هذا يساعد الخبرة','نزيد sample للـAgent فقط'],c:1},
  {q:'متى تكون calibration ناجحة؟',a:['عندما الجميع يعطي 100%','عندما ينخفض scoring variance ويصبح تفسير المعايير متسقًا وقابلًا للتبرير بالأدلة','عندما تنتهي بسرعة','عندما Team Leader يوافق على كل شيء'],c:1}
];

const qaData=[
  {q:'Pareto يظهر أن 64% من defects تأتي من “incorrect verification” و18% من “knowledge gap”. أين تبدأين؟',a:['بأقل defect','بأكبر contributor أولًا مع RCA، ثم تقيسين أثر corrective action','بتغيير ألوان dashboard','بتقييم Agents أكثر فقط'],c:1},
  {q:'بعد تدريب جديد، QA Score ارتفع من 78% إلى 88% لكن نفس critical error لم يتغير. ما الاستنتاج؟',a:['التدريب نجح بالكامل','التحسن العام لا يكفي؛ critical risk ما زال قائمًا ويحتاج RCA/action منفصل وverification','نوقف القياس','نخفض وزن critical error'],c:1},
  {q:'لديك ملف Excel فيه Agent, Team, Error Type, QA Score, Date. أفضل أداة أولية لمقارنة error frequency حسب Team؟',a:['كتابة كل شيء يدويًا','PivotTable ثم filters/slicers أو chart مناسب للتحليل','Word','PowerPoint فقط'],c:1},
  {q:'CAPA جيد يجب أن يحتوي على:',a:['وصف المشكلة فقط','Root cause + corrective/preventive action المناسب + owner + due date + measure + verification of effectiveness','اسم الموظف فقط','درجة QA فقط'],c:1},
  {q:'انخفض QA Score بعد تغيير process جديد. ما التحليل الأقوى؟',a:['نفترض أن Agents مقاومون للتغيير','نقارن قبل/بعد، criteria المتأثرة، teams/segments، training/knowledge readiness وprocess/system issues قبل تحديد السبب','نلغي العملية الجديدة فورًا','نزيد coaching بدون تحليل'],c:1}
];

const qaInterview=[
  {q:'Interview Boss: “How do you ensure your evaluations are fair and consistent?” أقوى جواب:',a:['أعتمد على خبرتي الشخصية','واضح scorecard + objective evidence + calibration + documented guidance + sampling discipline + variance review','أعطي الجميع نفس الدرجة','أترك Team Leader يقرر'],c:1},
  {q:'“Tell me about a recurring quality issue you identified.” ما البنية الأقوى؟',a:['أذكر المشكلة فقط','Pattern/data → sample/evidence → RCA → recommendation/action → owner → measurable result/follow-up','أقول إن Agents لا يهتمون','أشرح تعريف RCA'],c:1},
  {q:'“What would you do if Operations disagrees with your QA finding?”',a:['أتمسك بدرجتي بدون نقاش','أرجع للcriterion/evidence، أشرح rationale، أستخدم calibration/governance عند الحاجة وأوثق القرار','أغير الدرجة لإرضائهم','أصعّد فورًا للإدارة العليا'],c:1},
  {q:'“Which metrics matter to a Quality Analyst?” أفضل جواب:',a:['QA Score فقط','أربط QA/critical errors وdefect trends مع CSAT/FCR/repeat contacts/escalations وأستخدم AHT/SLA كسياق لا كبديل للجودة','AHT فقط','NPS فقط'],c:1}
];

const qaEvidenceNames=['Quality Evaluation / Audit Evidence','Calibration Evidence','Root Cause Analysis Evidence','Quality Reporting / Data Evidence','Feedback / Improvement Evidence'];
const qaStoreKey='rose-cx-quality-analyst-v1';
let qaState=JSON.parse(localStorage.getItem(qaStoreKey)||'{"knowledge":null,"audit":null,"calibration":null,"data":null,"interview":null,"evidence":{}}');
const saveQA=()=>localStorage.setItem(qaStoreKey,JSON.stringify(qaState));

function qaCourseCard(x){return `<article class="quest-card ${x.type==='FREE'?'free':x.type==='PREMIUM'?'premium':''}"><div class="quest-top"><h5>${x.title}</h5><span class="quest-badge">${x.type}</span></div><p>${x.desc}</p><a class="quest-link" href="${x.url}" target="_blank" rel="noopener">OPEN OFFICIAL / COURSE PAGE ↗</a></article>`}
function qaCredCard(x){return `<article class="quest-card"><div class="credential"><div class="cred-icon">${x.code}</div><div><div class="quest-top"><h5>${x.title}</h5><span class="quest-badge">${x.tag}</span></div><p>${x.desc}</p><div class="cred-meta"><span>${x.when}</span></div><a class="quest-link" href="${x.url}" target="_blank" rel="noopener">OFFICIAL SOURCE ↗</a></div></div></article>`}

function createQALevel(){
  const d=document.createElement('div');d.className='level-drawer';d.id='qualityAnalystLevel';
  d.innerHTML=`<div class="level-shell"><header class="level-head"><div class="level-head-row"><button class="tl-close" aria-label="Close">×</button><div class="tl-title"><span class="tl-kicker">WORLD 02 · LEVEL 01</span><h2>Contact Center Quality Analyst</h2></div><div class="tl-score"><div><b id="qaScore">0%</b><small>READINESS</small></div></div></div><div class="tl-status"><span class="tl-status-pill" id="qaStatus">⚔ IN TRAINING</span><div class="tl-progress"><i id="qaBar"></i></div></div></header><nav class="level-tabs"><button class="level-tab active" data-tab="brief">BRIEFING</button><button class="level-tab" data-tab="skills">SKILLS</button><button class="level-tab" data-tab="learn">LEARN</button><button class="level-tab" data-tab="certs">CREDENTIALS</button><button class="level-tab" data-tab="gates">GATES</button></nav><main class="level-content"><section class="tl-panel active" data-panel="brief" id="qaBrief"></section><section class="tl-panel" data-panel="skills" id="qaSkills"></section><section class="tl-panel" data-panel="learn" id="qaLearn"></section><section class="tl-panel" data-panel="certs" id="qaCerts"></section><section class="tl-panel" data-panel="gates" id="qaGates"></section></main></div>`;
  document.body.appendChild(d);
  renderQAStatic();renderQAGates();updateQAReadiness();
  d.querySelector('.tl-close').onclick=closeQALevel;
  d.querySelectorAll('.level-tab').forEach(b=>b.onclick=()=>switchQATab(b.dataset.tab));
}

function renderQAStatic(){
  document.getElementById('qaBrief').innerHTML=`<div class="mission-hero"><span class="rank">TARGET ROLE · QUALITY CONTROL</span><h3>Contact Center Quality Analyst</h3><p>الانتقال من تنفيذ الخدمة إلى تقييم جودة التفاعلات، توحيد معايير القياس، اكتشاف الأنماط، تفسير الأسباب وتحويل النتائج إلى feedback وتحسينات قابلة للقياس.</p><div class="market-chip">● DIRECT MOVE · CONTACT CENTER EXPERIENCE IS RELEVANT</div></div><div class="section-label"><h4>Win condition</h4><span>6 QA GATES · ALL MUST PASS</span></div><div class="gate-grid"><div class="gate-card"><b>80%</b><h5>Knowledge Gate</h5><p>Scorecards, sampling, calibration وRCA.</p></div><div class="gate-card"><b>80%</b><h5>QA Audit</h5><p>تقييم interactions واتخاذ scoring decisions.</p></div><div class="gate-card"><b>80%</b><h5>Calibration</h5><p>حل scoring variance وتوحيد المعايير.</p></div><div class="gate-card"><b>80%</b><h5>RCA + Data</h5><p>Pareto, CAPA, Excel/data reasoning.</p></div><div class="gate-card"><b>4/5</b><h5>Evidence Vault</h5><p>أمثلة حقيقية أو portfolio evidence.</p></div><div class="gate-card"><b>75%</b><h5>Interview Boss</h5><p>QA judgment + communication.</p></div></div><div class="section-label"><h4>Local rule</h4></div><div class="quest-card"><h5>Saudi PDPL Awareness</h5><p>معرفة حماية البيانات أساسية عند التعامل مع recordings وCRM وبيانات العملاء. في البنوك/التمويل/التأمين يضاف SAMA Consumer Protection وregulatory complaint handling كـIndustry Module.</p></div><div class="source-note">Role benchmark: Contact Center QA requirements in Saudi Arabia + Jeddah/Makkah quality roles. Framework references: COPC, ICMI, ASQ and Microsoft.</div>`;
  document.getElementById('qaSkills').innerHTML=`<div class="mission-hero"><span class="rank">SKILL TREE</span><h3>Quality Capability Map</h3><p>المهارات لا تُنجز بالضغط عليها. الـQA Gates تختبر scoring judgment, calibration, RCA, data reasoning والقدرة على الدفاع عن القرار.</p></div><div class="section-label"><h4>Required capabilities</h4><span>${QA.skills.length} DOMAINS</span></div><div class="skill-tree">${QA.skills.map(s=>`<article class="skill-card"><div class="skill-card-top"><h5>${s[0]}</h5><span class="skill-tier">${s[1]}</span></div><div class="skill-items">${s[2].map(x=>`<span>${x}</span>`).join('')}</div></article>`).join('')}</div>`;
  document.getElementById('qaLearn').innerHTML=`<div class="mission-hero"><span class="rank">QUEST LOG</span><h3>Learning Path</h3><p>ابدئي بالـfree missions لبناء QA foundation حقيقية. إذا ستدفعين، اختاري برنامجًا واحدًا متخصصًا بدل شراء كل شيء.</p></div><div class="section-label"><h4>Free missions</h4><span>START HERE</span></div><div class="quest-list">${QA.learning.filter(x=>x.type==='FREE').map(qaCourseCard).join('')}</div><div class="section-label"><h4>Premium missions</h4><span>CHOOSE BY GAP</span></div><div class="quest-list">${QA.learning.filter(x=>x.type!=='FREE').map(qaCourseCard).join('')}</div>`;
  document.getElementById('qaCerts').innerHTML=`<div class="mission-hero"><span class="rank">POWER-UPS</span><h3>Credentials</h3><p>لا توجد شهادة واحدة إلزامية للتقديم. COPC هي الأكثر تخصصًا للـContact Center QA، وCQPA لمسار Quality الأوسع، والبقية حسب اتجاهك.</p></div><div class="section-label"><h4>Credential vault</h4><span>PRIORITIZED</span></div><div class="quest-list">${QA.credentials.map(qaCredCard).join('')}</div>`;
}

function switchQATab(tab){const d=document.getElementById('qualityAnalystLevel');d.querySelectorAll('.level-tab').forEach(x=>x.classList.toggle('active',x.dataset.tab===tab));d.querySelectorAll('.tl-panel').forEach(x=>x.classList.toggle('active',x.dataset.panel===tab));d.querySelector('.level-content').scrollTop=0;}
function openQALevel(){document.getElementById('qualityAnalystLevel').classList.add('open');document.body.classList.add('level-open');document.body.style.overflow='hidden';if(navigator.vibrate)navigator.vibrate([20,30,20]);}
function closeQALevel(){document.getElementById('qualityAnalystLevel').classList.remove('open');document.body.classList.remove('level-open');document.body.style.overflow='';}
function qaEvidenceComplete(i){const x=qaState.evidence[i];return x&&['s','a','r'].every(k=>(x[k]||'').trim().length>=20)}
function qaEvidenceCount(){return qaEvidenceNames.filter((_,i)=>qaEvidenceComplete(i)).length}
function qaReadiness(){const ev=qaEvidenceCount()/5*100;return Math.round(Math.min(qaState.knowledge||0,100)*.15+Math.min(qaState.audit||0,100)*.20+Math.min(qaState.calibration||0,100)*.15+Math.min(qaState.data||0,100)*.20+ev*.15+Math.min(qaState.interview||0,100)*.15)}
function qaAllPassed(){return (qaState.knowledge||0)>=80&&(qaState.audit||0)>=80&&(qaState.calibration||0)>=80&&(qaState.data||0)>=80&&qaEvidenceCount()>=4&&(qaState.interview||0)>=75}
function qaReadyBanner(){const pass=qaAllPassed();return `<div class="ready-banner ${pass?'':'locked'}"><div class="boss-crown">${pass?'♛':'◇'}</div><h4>${pass?'LEVEL PASSED · READY TO APPLY':'BOSS LOCKED'}</h4><p>${pass?'اجتزت معيار الجاهزية الداخلي لـQuality Analyst. هذا لا يضمن التوظيف؛ متطلبات الشركة والمقابلة النهائية تبقى مستقلة.':'اجتز كل QA Gate بالحد الأدنى المطلوب لفتح READY TO APPLY.'}</p></div>`}
function updateQAReadiness(){const score=qaReadiness();document.getElementById('qaScore').textContent=score+'%';document.getElementById('qaBar').style.width=score+'%';const s=document.getElementById('qaStatus');if(qaAllPassed())s.textContent='🏆 READY TO APPLY';else if(score>=70)s.textContent='◐ ALMOST READY';else s.textContent='⚔ IN TRAINING';saveQA();}

function renderQAGates(){
  const eCount=qaEvidenceCount();
  const gate=(name,key,weight,pass,desc)=>`<article class="gate-card ${pass?'pass':''}"><b>${key==='evidence'?eCount+'/5':qaState[key]===null||qaState[key]===undefined?'—':qaState[key]+'%'}</b><h5>${name}</h5><p>${desc}</p><button class="gate-start" data-qa-gate="${key}">${key==='evidence'?'BUILD EVIDENCE':'START / RETRY'}</button></article>`;
  document.getElementById('qaGates').innerHTML=`<div class="mission-hero"><span class="rank">QUALITY DUNGEON</span><h3>Readiness Gates</h3><p>لا يوجد “أعرف QA”. هنا لازم تقيمين، تعايرين، تحللين، تثبتين evidence وتدافعين عن قرارك أمام الـBoss.</p></div><div class="section-label"><h4>6 gates</h4><span>ALL MUST PASS</span></div><div class="gate-grid">${gate('Knowledge Gate','knowledge',15,(qaState.knowledge||0)>=80,'Scorecards, sampling, calibration, compliance وRCA.')}${gate('QA Audit Simulation','audit',20,(qaState.audit||0)>=80,'قرارات تقييم حقيقية: critical errors, bias, sampling وscorecard governance.')}${gate('Calibration Challenge','calibration',15,(qaState.calibration||0)>=80,'حل اختلاف المقيمين وتثبيت interpretation موحد.')}${gate('RCA + Data Challenge','data',20,(qaState.data||0)>=80,'Pareto, CAPA, Excel/data reasoning وbefore/after analysis.')}${gate('Evidence Vault','evidence',15,eCount>=4,'Audit, Calibration, RCA, Reporting, Feedback/Improvement.')}${gate('Interview Boss','interview',15,(qaState.interview||0)>=75,'QA judgment, evidence, stakeholder handling وmetrics.')}</div><div id="qaGateStage"></div>${qaReadyBanner()}`;
  document.querySelectorAll('[data-qa-gate]').forEach(b=>b.onclick=()=>startQAGate(b.dataset.qaGate));
}
function startQAGate(key){if(key==='evidence')return renderQAEvidence();const bank=key==='knowledge'?qaKnowledge:key==='audit'?qaAudit:key==='calibration'?qaCalibration:key==='data'?qaData:qaInterview;runQAQuiz(key,bank)}
function runQAQuiz(key,bank){let i=0,score=0,locked=false;const stage=document.getElementById('qaGateStage');stage.scrollIntoView({behavior:'smooth',block:'start'});const names={knowledge:'Knowledge Gate',audit:'QA Audit Simulation',calibration:'Calibration Challenge',data:'RCA + Data Challenge',interview:'Interview Boss'};function draw(){const q=bank[i];stage.innerHTML=`<div class="section-label"><h4>${names[key]}</h4><span>${i+1} / ${bank.length}</span></div><div class="quiz-box"><div class="quiz-progress">${key.toUpperCase()} · MISSION ${i+1}</div><h4>${q.q}</h4><div class="answers">${q.a.map((a,n)=>`<button class="answer" data-a="${n}">${a}</button>`).join('')}</div><button class="quiz-next" disabled>NEXT</button></div>`;locked=false;stage.querySelectorAll('.answer').forEach(btn=>btn.onclick=()=>{if(locked)return;locked=true;const n=+btn.dataset.a;if(n===q.c)score++;stage.querySelectorAll('.answer').forEach((x,j)=>{x.disabled=true;if(j===q.c)x.classList.add('correct');if(j===n&&n!==q.c)x.classList.add('wrong')});stage.querySelector('.quiz-next').disabled=false});stage.querySelector('.quiz-next').onclick=()=>{i++;if(i<bank.length)draw();else finish()}}
  function finish(){const pct=Math.round(score/bank.length*100);qaState[key]=pct;saveQA();const threshold=key==='interview'?75:80;stage.innerHTML=`<div class="section-label"><h4>Gate result</h4><span>${pct>=threshold?'PASS':'RETRY'}</span></div><div class="quiz-box"><div class="quiz-result"><strong>${pct}%</strong><h4>${pct>=threshold?'GATE CLEARED':'NOT CLEARED YET'}</h4><p>${pct>=threshold?'تم فتح هذه البوابة.':'الحد المطلوب '+threshold+'%. راجعي الـSkill Tree والـQuest Log ثم أعيدي المهمة.'}</p><button class="quiz-next" id="qaGateDone">RETURN TO GATES</button></div></div>`;document.getElementById('qaGateDone').onclick=()=>{renderQAGates();updateQAReadiness()};updateQAReadiness()}
  draw();
}
function renderQAEvidence(){const stage=document.getElementById('qaGateStage');stage.innerHTML=`<div class="section-label"><h4>Evidence Vault</h4><span>PASS 4 / 5</span></div><div class="gate-note">استخدمي أمثلة حقيقية من العمل أو Portfolio QA تجريبي. لا تضعي أسماء عملاء أو تسجيلات أو بيانات سرية. كل Evidence يحتاج Situation/Problem + Action + Result.</div>${qaEvidenceNames.map((name,i)=>{const x=qaState.evidence[i]||{};return `<article class="evidence-case" data-qae="${i}"><h5>${i+1}. ${name}</h5><label>Situation / Problem</label><textarea data-f="s" placeholder="ما الحالة أو مشكلة الجودة؟">${x.s||''}</textarea><label>Your Analysis / Action</label><textarea data-f="a" placeholder="كيف قيّمتِ أو حللتِ أو عالجتِ الحالة؟">${x.a||''}</textarea><label>Result / Impact</label><textarea data-f="r" placeholder="ما النتيجة أو التوصية أو الأثر القابل للقياس؟">${x.r||''}</textarea><div class="evidence-state ${qaEvidenceComplete(i)?'ok':''}">${qaEvidenceComplete(i)?'✓ DOCUMENTED':'Needs a complete Situation + Action + Result'}</div></article>`}).join('')}<button class="evidence-save" id="saveQAEvidence">SAVE EVIDENCE</button>`;stage.scrollIntoView({behavior:'smooth',block:'start'});document.getElementById('saveQAEvidence').onclick=()=>{stage.querySelectorAll('.evidence-case').forEach(card=>{const i=card.dataset.qae;qaState.evidence[i]={};card.querySelectorAll('textarea').forEach(t=>qaState.evidence[i][t.dataset.f]=t.value.trim())});saveQA();renderQAGates();updateQAReadiness()}}

createQALevel();
const qualityAnalystBtn=document.querySelector('#quality .level.l1 button');if(qualityAnalystBtn)qualityAnalystBtn.addEventListener('click',openQALevel);
