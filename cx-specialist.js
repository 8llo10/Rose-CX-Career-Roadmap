// WORLD 05 · LEVEL 01 — Customer Experience Specialist
// Research-backed CX game level: journey design, VoC, metrics, analytics, service design, Saudi PDPL, evidence and interview boss.

const CXDATA={
  skills:[
    ['CX Fundamentals','CORE',['Customer Experience vs Customer Service','Customer-centricity','Experience Management','Customer Lifecycle','Touchpoints','Moments of Truth']],
    ['Customer Journey Mapping','CORE',['Current-State Journey','Future-State Journey','Journey Stages','Touchpoints','Channels','Emotions','Expectations','Pain Points','Opportunities','Moments that Matter']],
    ['Service Blueprinting','CORE',['Frontstage','Backstage','Support Processes','Systems','Handoffs','Dependencies','Failure Points']],
    ['Personas','CORE',['Customer Personas','Segments','Needs','Goals','Behaviors','Jobs-to-be-Done basics']],
    ['Voice of Customer','CORE',['VoC Program','Listening Posts','Feedback Channels','Structured / Unstructured Feedback','Closed-loop VoC']],
    ['CX Metrics','CORE',['NPS','CSAT','CES','Retention','Churn','Loyalty','Complaint Rate','Repeat Contact','FCR']],
    ['Survey Design','CORE',['Objectives','Question Design','Scales','Bias','Sampling basics','Response Rate','Transactional vs Relationship']],
    ['Customer Research','CORE',['Interviews','Focus Groups','Observation','Surveys','Qualitative vs Quantitative']],
    ['Feedback Analytics','CORE',['Categorization','Themes','Drivers','Trends','Cross-tabs','Segmentation']],
    ['Text & Sentiment Analysis','POWER-UP',['Open-text Feedback','Topic Detection','Sentiment','Theme Extraction','AI-assisted Analysis']],
    ['Complaints Analytics','CORE',['Complaint Drivers','Recurrence','Severity','SLA','Escalation Patterns']],
    ['Root Cause Analysis','CORE',['5 Whys','Fishbone / Ishikawa','Pareto','Cause vs Symptom']],
    ['CAPA','CORE',['Corrective Action','Preventive Action','Owner','Deadline','Evidence','Effectiveness Verification']],
    ['Process Improvement','CORE',['Current Process','Waste / Friction','Simplification','Standardization','Continuous Improvement']],
    ['Lean / Kaizen','WORKING KNOWLEDGE',['Waste','Kaizen','Value','Flow','Continuous Improvement']],
    ['Design Thinking','CORE',['Empathize','Define','Ideate','Prototype','Test']],
    ['Human-Centered Design','CORE',['Customer Needs','Empathy Research','Ideation','Prototyping']],
    ['Digital CX','CORE',['Web / App Journeys','Digital Touchpoints','Self-Service','Onboarding','Checkout','Drop-off','Conversion']],
    ['Omnichannel CX','CORE',['Call Center','Branch','App','Web','Chat','Social','Email','Cross-channel Handoffs']],
    ['CRM','CORE',['Customer Records','Cases','Interactions','Activities','Segmentation','Case History']],
    ['CRM Platforms','WORKING KNOWLEDGE',['Salesforce','HubSpot','Dynamics','Odoo — حسب الشركة']],
    ['CX Platforms','HIGH VALUE',['Qualtrics','Medallia','InMoment']],
    ['Excel','CORE',['PivotTables','XLOOKUP','IF / IFS','COUNTIFS','SUMIFS','Charts','Cleaning','Filters','Tables']],
    ['Power BI','CORE / POWER-UP',['Power Query','Data Cleaning','Modeling','DAX basics','Dashboards','KPI Visualization']],
    ['SQL','POWER-UP',['SELECT','WHERE','GROUP BY','JOIN','Aggregations']],
    ['Tableau','OPTIONAL',['Dashboards','Filters','Data Visualization']],
    ['Digital Analytics','POWER-UP',['GA4','Hotjar','Contentsquare','Clarity','Mixpanel concepts']],
    ['Customer Segmentation','CORE',['Behavioral','Demographic','Value-based','Experience-based']],
    ['Retention & Churn','CORE',['Retention Rate','Churn Drivers','Loyalty','Repeat Behavior']],
    ['Customer Lifetime Value','WORKING KNOWLEDGE',['CLV / LTV concepts','Linking Experience to Value']],
    ['CX ROI','CAREER POWER-UP',['Business Case','Benefit Measurement','Cost Reduction','Revenue / Retention Impact']],
    ['Data Storytelling','CORE',['Insight','Why it matters','Recommendation','Expected Impact']],
    ['Dashboard Design','CORE',['KPI Hierarchy','Executive Dashboard','Trends','Targets','Variance']],
    ['Executive Reporting','CORE',['Management Summary','Recommendations','Decision-ready Reporting']],
    ['Presentation','CORE',['Presenting Insights','Influencing','Workshop Facilitation']],
    ['Stakeholder Management','CORE',['Operations','IT','Product','Marketing','Sales','Finance','Contact Center','Management']],
    ['Cross-functional Collaboration','CORE',['Ownership','Action Tracking','Dependencies','Escalation']],
    ['Project Coordination','CORE',['Action Plans','Owners','Deadlines','Status','Risk','Follow-up']],
    ['Agile','WORKING KNOWLEDGE',['Backlog','User Stories','Iterations','Jira / Confluence concepts']],
    ['Change Management','POWER-UP',['Adoption','Resistance','Communication','Rollout']],
    ['Service Quality','CORE',['Service Standards','Audits','Consistency','Procedures']],
    ['SLA Management','CORE',['Response / Resolution Targets','Breaches','Escalation']],
    ['Customer Communications','CORE',['FAQs','Notifications','Service Messages','Clarity']],
    ['Arabic Communication','CORE',['Professional Writing','Insight Presentation']],
    ['English','CORE',['Professional Writing','Presentations','Reports']],
    ['Emotional Intelligence','CORE',['Empathy','Difficult Stakeholders','Listening']],
    ['Problem Solving','CORE',['Structured Analysis','Prioritization','Decisions']],
    ['Facilitation','POWER-UP',['Journey Workshops','Brainstorming','Alignment Sessions']],
    ['Miro / FigJam / Figma','POWER-UP',['Journey Maps','Personas','Service Blueprints','Workshops']],
    ['AI for CX','FUTURE-PROOF',['Feedback Summarization','Sentiment','Classification','Prediction','Personalization','Customer Insights']],
    ['Saudi PDPL','KSA CORE',['Lawfulness / Transparency','Purpose Limitation','Data Minimization','Storage Limitation','Accuracy','Confidentiality','Accountability']]
  ],
  learning:[
    {type:'FREE',title:'Qualtrics — XM for Customer Experience Learning Journey',desc:'مسار شامل في CX وQualtrics وsurveys وanalytics وبرامج Experience Management.',url:'https://basecamp.qualtrics.com/page/customerxm-learning-journey'},
    {type:'FREE',title:'Qualtrics — Customer Journey Management & Improvement',desc:'Journey Mapping, Journey Management, personalization and measurement.',url:'https://www.qualtrics.com/en-gb/customer-journey-course/'},
    {type:'FREE',title:'Qualtrics — Learn Customer Experience Platform',desc:'Survey building, CX projects, feedback programs and reporting داخل منصة Qualtrics.',url:'https://basecamp.qualtrics.com/series/learn-to-use-qualtrics-customer-experience'},
    {type:'FREE',title:'Microsoft Learn — Power BI',desc:'Power Query, data cleaning, modeling, dashboards and KPI visualization.',url:'https://learn.microsoft.com/ar-sa/training/powerplatform/power-bi'},
    {type:'FREE',title:'Microsoft Learn — Data Analytics',desc:'أساس تحويل البيانات إلى insights وقرارات أعمال.',url:'https://learn.microsoft.com/en-us/training/paths/data-analytics-microsoft/'},
    {type:'FREE',title:'Salesforce Trailhead',desc:'تدريب CRM عملي مجاني لبناء فهم customer records, cases, dashboards and customer data.',url:'https://trailhead.salesforce.com/'},
    {type:'FREE',title:'Salesforce — CRM Fundamentals',desc:'CRM essentials, records, reporting and customer information workflows.',url:'https://trailhead.salesforce.com/content/learn/trails/crm-essentials-lightning-experience'},
    {type:'FREE',title:'HubSpot Academy',desc:'دورات وشهادات مجانية في CRM, service and customer-facing business skills.',url:'https://academy.hubspot.com/certification-overview'},
    {type:'FREE',title:'HubSpot — Delivering Exceptional Customer Support',desc:'Support cases, service fundamentals and SLA-oriented customer operations.',url:'https://academy.hubspot.com/courses/delivering-exceptional-customer-support'},
    {type:'FREE',title:'Google Skillshop',desc:'Digital measurement and Google Analytics learning for Digital CX.',url:'https://skillshop.withgoogle.com/'},
    {type:'FREE',title:'SDAIA — Personal Data Protection',desc:'المصدر السعودي لفهم PDPL ومبادئ معالجة بيانات العملاء.',url:'https://sdaia.gov.sa/ar/Research/Pages/DataProtection.aspx'},
    {type:'PREMIUM',title:'COPC® — Best Practices for CX Operations',desc:'CX operations, customer satisfaction, performance management, service journeys, digital channels and metrics.',url:'https://www.copc.com/classes/best-practices-for-cx-operations-031527aus/'},
    {type:'PREMIUM',title:'Forrester — Customer Experience Certification',desc:'CX transformation, VoC, experience design, measurement and cross-functional CX.',url:'https://www.forrester.com/certification/cx/'},
    {type:'PREMIUM',title:'IDEO U — Foundations in Design Thinking',desc:'Customer insights, interviewing, ideation and prototyping through human-centered design.',url:'https://www.ideou.com/products/design-thinking-certificate'},
    {type:'PREMIUM',title:'Nielsen Norman Group — UX Certification',desc:'Premium specialization for journey mapping, service blueprinting and digital experience.',url:'https://www.nngroup.com/ux-certification/'},
    {type:'PAID',title:'Service Design Network',desc:'Service Design Foundations, advanced programs and professional accreditation for a service-design-heavy CX path.',url:'https://service-design-network.org/'}
  ],
  credentials:[
    {code:'QUAL',title:'Qualtrics Fundamentals / Platform Essentials',tag:'BEST EARLY CREDENTIAL',when:'START EARLY',desc:'عملية جدًا للـCX Specialist، خصوصًا مع ظهور Qualtrics/Medallia في أدوار جدة والغربية.',url:'https://www.qualtrics.com/training/certification/'},
    {code:'PL-300',title:'Microsoft Certified: Power BI Data Analyst Associate',tag:'HIGH-VALUE POWER-UP',when:'EARLY / ANALYTICS',desc:'ليست شهادة CX لكنها تثبت القدرة على prepare, model, visualize and analyze data — ميزة قوية جدًا في أدوار CX التحليلية.',url:'https://learn.microsoft.com/en-us/credentials/certifications/data-analyst-associate/'},
    {code:'MO-211',title:'Microsoft Office Specialist: Excel Expert',tag:'OPTIONAL PROOF',when:'REPORTING',desc:'Excel skill نفسها أهم، لكن MO-211 دليل رسمي إذا احتجت إثبات مستوى متقدم.',url:'https://learn.microsoft.com/en-us/credentials/certifications/mos-excel-expert-m365-apps/'},
    {code:'COPC',title:'COPC® CX Operations',tag:'TOP PICK · OPERATIONS',when:'EMPLOYER-SPONSORED / PREMIUM',desc:'قوي لمسار CX + Contact Center / Service Operations ويربط التجربة بالأداء التشغيلي.',url:'https://www.copc.com/copc-standards/cx-standard/'},
    {code:'FORR',title:'Forrester Customer Experience Certification',tag:'PREMIUM',when:'EMPLOYER-SPONSORED',desc:'قوية معرفيًا في CX transformation, VoC, experience design and measurement؛ لا نجعلها شرطًا للمبتدئ.',url:'https://www.forrester.com/certification/cx/'},
    {code:'IDEO',title:'IDEO Foundations in Design Thinking',tag:'SPECIALIZATION',when:'JOURNEY / DESIGN',desc:'ممتازة للـcustomer insights, interviewing, ideation and prototyping لكنها ليست شرط توظيف.',url:'https://www.ideou.com/products/design-thinking-certificate'},
    {code:'NNG',title:'NN/g UX Certification',tag:'PREMIUM SPECIALIZATION',when:'DIGITAL CX / SERVICE DESIGN',desc:'لمن يميل إلى Journey, Digital Experience and Service Design. استثمار كبير وليس prerequisite.',url:'https://www.nngroup.com/ux-certification/'},
    {code:'CCXP',title:'Certified Customer Experience Professional — CCXP',tag:'FUTURE BOSS CREDENTIAL',when:'AFTER ELIGIBLE CX EXPERIENCE',desc:'Credential عالمي مستقل عن vendor يغطي customer insights, strategy, culture, design/innovation and metrics/ROI. لا نجعله شرط Level 01.',url:'https://cxpaglobal.org/get-certified'},
    {code:'XMP',title:'XM Professional Certification — XMP',tag:'FUTURE',when:'AFTER XM EXPERIENCE',desc:'Qualtrics credential متقدمة؛ تأتي بعد foundation وخبرة أوسع في Experience Management.',url:'https://www.qualtrics.com/training/certification/'},
    {code:'CSSGB',title:'ASQ Certified Six Sigma Green Belt',tag:'FUTURE POWER-UP',when:'PROCESS IMPROVEMENT',desc:'قوية لـRCA, DMAIC and data-driven improvement بعد استيفاء متطلبات الخبرة.',url:'https://www.asq.org/cert/six-sigma-green-belt'}
  ]
};

const CX_GATES=[
  {id:'knowledge',title:'CX Knowledge Gate',pass:80,questions:[
    {q:'أي عبارة تفرق بدقة بين Customer Service وCustomer Experience؟',a:['هما نفس الشيء','Customer Service نقطة/تفاعل خدمي؛ CX هي الإدراك المتكوّن عبر الرحلة والتفاعلات كاملة','CX تعني التسويق فقط','Customer Service أوسع من CX دائمًا'],c:1},
    {q:'أي تسلسل أقوى لتحسين تجربة متعثرة؟',a:['حل سريع → إعلان نجاح','Insight → root cause → prioritized action → owner → measure impact','Survey → dashboard فقط','شكوى → تعويض لكل العملاء'],c:1},
    {q:'Moment of Truth هو:',a:['أي مكالمة طويلة','نقطة في الرحلة تؤثر بشكل كبير في إدراك العميل وقراره','كل KPI داخلي','آخر خطوة فقط في الرحلة'],c:1}
  ]},
  {id:'journey',title:'Journey Mapping Lab',pass:80,questions:[
    {q:'تبنين Current-State Journey لعميل يحجز خدمة رقمية. ما البيانات الأقوى؟',a:['افتراضات الفريق فقط','Research + behavior/analytics + feedback + operational evidence عبر مراحل الرحلة','تصميم التطبيق فقط','NPS السنوي وحده'],c:1},
    {q:'Journey Map احترافية يجب أن تربط:',a:['المراحل فقط','Stages + touchpoints + goals + emotions + pain points + evidence + opportunities','الألوان والأيقونات','قائمة الموظفين'],c:1},
    {q:'وجدتِ pain point في handoff بين التطبيق والكول سنتر. ما الخطوة التالية؟',a:['نغيّر لون الزر','نثبت المشكلة بالبيانات ثم نحدد ownership/dependency ونصمم future-state قابل للقياس','نلوم الكول سنتر','نحذف touchpoint'],c:1}
  ]},
  {id:'voc',title:'VoC + Survey Lab',pass:80,questions:[
    {q:'أي تصميم أقوى لبرنامج Voice of Customer؟',a:['Survey واحد سنوي','Listening posts متعددة + structured/unstructured feedback + segmentation + closed-loop actions','قراءة الشكاوى فقط','NPS بدون comments'],c:1},
    {q:'سؤال survey يقول: “كم كانت الخدمة السريعة والممتازة مفيدة لك؟” المشكلة الأساسية؟',a:['قصير جدًا','Leading / double-barreled wording يوجّه العميل ويجمع أكثر من مفهوم','لا توجد مشكلة','يجب أن يكون أطول'],c:1},
    {q:'Closed-loop VoC يعني:',a:['إغلاق الاستبيان بعد أسبوع','تحويل feedback إلى ownership/action ومتابعة العميل أو النظام ثم قياس الإغلاق والأثر','حذف التعليقات السلبية','عرض dashboard للإدارة فقط'],c:1}
  ]},
  {id:'metrics',title:'CX Metrics Lab — NPS / CSAT / CES',pass:80,questions:[
    {q:'100 رد NPS: 55 Promoters و25 Passives و20 Detractors. NPS؟',a:['35','55','75','20'],c:0},
    {q:'CSAT مرتفع لكن CES سيئ في onboarding. ما الاستنتاج الأدق؟',a:['لا توجد مشكلة','العملاء قد يكونون راضين عن النتيجة لكن الوصول لها يتطلب effort مرتفعًا؛ افحص friction في الرحلة','نلغي CES','نخفض CSAT target'],c:1},
    {q:'انخفض NPS بعد تغيير checkout. أفضل تحليل أولي؟',a:['نرجع التغيير فورًا بلا تحليل','نقسم النتائج حسب journey step/channel/segment ونربطها بالbehavior والfeedback قبل تحديد driver','نرسل survey أطول','نقارن AHT فقط'],c:1}
  ]},
  {id:'rca',title:'Insights & RCA Lab',pass:80,questions:[
    {q:'40% من الشكاوى عن “تأخر التفعيل”. ما أقوى خطوة بعد Pareto؟',a:['نكتب FAQ فقط','نفصل الحالات ونبني 5 Whys/Fishbone باستخدام process/system/people evidence للوصول للسبب القابل للمعالجة','نعتبر اسم الشكوى Root Cause','نرفع التعويض'],c:1},
    {q:'أي CAPA أقوى؟',a:['تدريب الموظفين','Corrective + preventive actions محددة بمالك وموعد وmetric ثم effectiveness check','اجتماع للفريق','إغلاق التذاكر القديمة'],c:1},
    {q:'ما الفرق بين insight وobservation؟',a:['لا فرق','Observation يصف ما حدث؛ insight يفسر pattern/need مدعومًا بالأدلة ويوجه قرارًا','Insight رقم فقط','Observation دائمًا أهم'],c:1}
  ]},
  {id:'analytics',title:'Excel / Analytics Gate',pass:80,questions:[
    {q:'عندك 80 ألف feedback row وتريدين complaint drivers حسب channel والشهر. البداية العملية الأقوى في Excel؟',a:['نسخ كل صف يدويًا','Clean/structure data ثم PivotTable أو Power Query حسب الحاجة وتحليل categories/channels/time','Chart قبل تنظيف البيانات','قراءة أول 100 صف فقط'],c:1},
    {q:'XLOOKUP مفيد هنا أساسًا لـ:',a:['تصميم survey','ربط customer/case IDs بجدول آخر لإضافة attributes عند وجود مفتاح مناسب','حساب NPS مباشرة','إنشاء persona تلقائيًا'],c:1},
    {q:'Dashboard تنفيذي جيد يجب أن:',a:['يعرض كل الأعمدة','يربط KPI بالtarget/trend/driver/action ويبرز ما يحتاج قرارًا','يستخدم أكبر عدد من charts','يخفي النتائج السلبية'],c:1}
  ]},
  {id:'powerbi',title:'Power BI Dashboard Mission',pass:75,mission:'ابني Dashboard تجريبي يحتوي NPS وCSAT وCES + trend زمني + segment/channel filter + Top 5 complaint drivers + صفحة Action Summary. اكتبي هنا ما بنيتِه وما الـinsight الذي اكتشفته.',min:120},
  {id:'blueprint',title:'Service Design / Blueprint Mission',pass:75,mission:'اختاري رحلة حقيقية مثل onboarding أو complaint resolution. ارسمِي Customer Actions + Frontstage + Backstage + Systems + handoffs + failure points ثم Future-State improvement. وثّقي هنا المشكلة والتغيير والmetric الذي سيقيس نجاحه.',min:120},
  {id:'pdpl',title:'Saudi PDPL Scenario',pass:80,questions:[
    {q:'فريق CX يريد تصدير أسماء وأرقام العملاء وتعليقاتهم كاملة إلى ملف مشترك فقط “لأنها قد تفيد لاحقًا”. أفضل تصرف؟',a:['نوافق لأنها بيانات CX','نراجع purpose/access/minimization ونستخدم فقط البيانات اللازمة وبصلاحيات مناسبة وفق السياسات والـPDPL','نرسلها بالبريد الشخصي','نحذف كل feedback'],c:1},
    {q:'عند عرض dashboard للإدارة، أي ممارسة أقوى؟',a:['إظهار PII لكل شخص حتى لو غير مطلوب','استخدام aggregated/de-identified views عندما تكفي للغرض وتقييد الوصول للتفاصيل الحساسة','نشر الملف برابط عام','نسخ البيانات إلى أدوات غير معتمدة'],c:1},
    {q:'Purpose Limitation تعني عمليًا:',a:['استخدام البيانات لأي مشروع داخلي','جمع/استخدام البيانات للغرض المحدد والمشروع وعدم توسيع الاستخدام بلا أساس مناسب','الاحتفاظ بها للأبد','عدم قياس CX'],c:1}
  ]},
  {id:'evidence',title:'Evidence Vault',pass:80,evidence:[
    ['Customer Journey Map','صفّي Journey Map أنشأتِها: المشكلة، research/evidence، pain points، والـfuture-state.'],
    ['VoC / Survey Analysis','صفّي dataset أو survey حللتِه: sample، method، themes/drivers، والـinsight.'],
    ['CX Dashboard','صفّي dashboard بنيتِه: KPIs، filters، trend، والقرار الذي يدعمه.'],
    ['RCA / Improvement Case','صفّي مشكلة، root cause، action/CAPA، والـbefore/after metric إن توفر.'],
    ['Service Blueprint / Proposal','صفّي blueprint أو improvement proposal: frontstage/backstage/systems/handoffs والنتيجة المتوقعة.']
  ]},
  {id:'interview',title:'Interview Boss',pass:75,questions:[
    {q:'“NPS dropped 12 points this quarter. Walk me through your investigation.” أقوى إجابة؟',a:['أقترح حملة loyalty مباشرة','أتحقق من methodology/sample ثم segment by journey/channel/customer type، أربط comments/behavior/operations، أحدد drivers وأختبر root causes ثم action + measurement','ألوم الفريق','أغير survey'],c:1},
    {q:'“Tell me about a journey you improved.” أفضل structure؟',a:['اسم المشروع فقط','Context/problem → customer evidence → map/root cause → cross-functional action → measurable outcome/learning','أذكر الأدوات فقط','أقول إني أحب العملاء'],c:1},
    {q:'Stakeholder يرفض تغييرًا رغم وضوح pain point. ماذا تفعلين؟',a:['أتجاوزه','أربط customer evidence بالbusiness impact، أفهم قيوده، أقترح experiment صغير بowner/metric وأبني alignment','أرسل شكوى عنه','أغير الـinsight'],c:1},
    {q:'كيف تثبتين أن CX initiative نجحت؟',a:['لأن العملاء أعجبهم التصميم','Baseline + target + customer metric + operational/business metric + time window + control of major confounders قدر الإمكان','عدد الاجتماعات','عدد slides'],c:1}
  ]}
];

const CX_KEY='rose_cx_specialist_v1';
let cxState={passed:{},answers:{},evidence:{}};
try{cxState=Object.assign(cxState,JSON.parse(localStorage.getItem(CX_KEY)||'{}'));}catch(e){}
function saveCX(){localStorage.setItem(CX_KEY,JSON.stringify(cxState));}
function cxEsc(s){return String(s||'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));}
function cxPct(){return Math.round(CX_GATES.filter(g=>cxState.passed[g.id]).length/CX_GATES.length*100);}

function cxCreate(){
  if(document.getElementById('cxLevelOverlay'))return;
  const el=document.createElement('div');el.id='cxLevelOverlay';el.className='cx-level-overlay';
  el.innerHTML=`<div class="cx-shell">
    <div class="cx-top"><button class="cx-close" aria-label="إغلاق">×</button><div class="cx-world"><small>WORLD 05 · LEVEL 01</small><b>CUSTOMER EXPERIENCE</b></div><div class="cx-xp"><b id="cxXp">0%</b><br>READY</div></div>
    <section class="cx-hero"><div class="cx-orb"><span>CX</span></div><small style="font-size:6px;letter-spacing:2px;color:#ff9dce;font-weight:900">LEVEL 01</small><h2>Customer Experience Specialist</h2><p>افهمي التجربة End-to-End · اسمعي صوت العميل · قيسي NPS/CSAT/CES · اكتشفي الـRoot Cause · صممي Journey أفضل · وحوّلي الـInsight إلى تحسين قابل للقياس.</p><div class="cx-status"><div class="cx-stat"><small>GATES</small><b>11</b></div><div class="cx-stat"><small>EVIDENCE</small><b>4 / 5</b></div><div class="cx-stat"><small>FINAL</small><b>75%+</b></div></div></section>
    <nav class="cx-tabs"><button class="cx-tab active" data-cxtab="brief">MISSION</button><button class="cx-tab" data-cxtab="skills">SKILL TREE</button><button class="cx-tab" data-cxtab="learn">LEARN</button><button class="cx-tab" data-cxtab="certs">CREDENTIALS</button><button class="cx-tab" data-cxtab="region">WESTERN REGION</button><button class="cx-tab" data-cxtab="gates">BOSS GATES</button></nav>
    <div class="cx-panel active" data-cxpanel="brief"></div><div class="cx-panel" data-cxpanel="skills"></div><div class="cx-panel" data-cxpanel="learn"></div><div class="cx-panel" data-cxpanel="certs"></div><div class="cx-panel" data-cxpanel="region"></div><div class="cx-panel" data-cxpanel="gates"></div>
  </div>`;
  document.body.appendChild(el);
  el.querySelector('.cx-close').onclick=closeCX;
  el.querySelectorAll('.cx-tab').forEach(b=>b.onclick=()=>cxTab(b.dataset.cxtab));
  renderCX();
}
function openCX(){cxCreate();document.getElementById('cxLevelOverlay').classList.add('open');document.body.classList.add('level-open');document.body.style.overflow='hidden';renderCX();if(navigator.vibrate)navigator.vibrate([20,30,20]);}
function closeCX(){const el=document.getElementById('cxLevelOverlay');if(el)el.classList.remove('open');document.body.classList.remove('level-open');document.body.style.overflow='';}
function cxTab(id){document.querySelectorAll('.cx-tab').forEach(x=>x.classList.toggle('active',x.dataset.cxtab===id));document.querySelectorAll('.cx-panel').forEach(x=>x.classList.toggle('active',x.dataset.cxpanel===id));}
function renderCX(){
  const ov=document.getElementById('cxLevelOverlay');if(!ov)return;
  ov.querySelector('#cxXp').textContent=cxPct()+'%';
  ov.querySelector('[data-cxpanel="brief"]').innerHTML=`<div class="cx-section"><div class="cx-section-head"><h3>YOUR ROLE</h3><span>WHAT THE JOB REALLY IS</span></div><div class="cx-card"><h4>مو Customer Service باسم أفخم</h4><p>Customer Experience Specialist يفهم تجربة العميل كاملة عبر الرحلة والقنوات، يقيسها، يجمع Voice of Customer، يحدد pain points وroot causes، ثم يعمل مع Operations / IT / Product / Marketing وغيرها لتحويل الـinsight إلى تحسين له owner وmetric.</p></div><div class="cx-card"><h4>CORE LOOP</h4><div class="cx-meta"><span class="cx-pill">LISTEN</span><span class="cx-pill">MEASURE</span><span class="cx-pill">MAP</span><span class="cx-pill">ANALYZE</span><span class="cx-pill">DESIGN</span><span class="cx-pill">IMPROVE</span><span class="cx-pill">PROVE IMPACT</span></div></div></div><div class="cx-section"><div class="cx-section-head"><h3>START ORDER</h3><span>DON'T COLLECT RANDOM CERTIFICATES</span></div><div class="cx-card"><p><b>01</b> CX + Journey + VoC fundamentals → <b>02</b> Excel + survey/feedback analysis → <b>03</b> Qualtrics/CRM literacy → <b>04</b> Power BI dashboard → <b>05</b> Service Blueprint + RCA/CAPA → <b>06</b> PDPL → <b>07</b> build evidence → <b>08</b> Boss Gates → <b>09</b> apply.</p></div></div><div class="cx-next"><small>NEXT LEVEL AFTER YOU WIN</small><b>Senior CX Specialist</b></div>`;
  ov.querySelector('[data-cxpanel="skills"]').innerHTML=`<div class="cx-section"><div class="cx-section-head"><h3>FULL SKILL TREE</h3><span>${CXDATA.skills.length} DOMAINS</span></div><div class="cx-skill-grid">${CXDATA.skills.map(s=>`<div class="cx-skill"><div class="cx-skill-top"><b>${s[0]}</b><span class="cx-badge">${s[1]}</span></div><ul>${s[2].map(x=>`<li>${x}</li>`).join('')}</ul></div>`).join('')}</div></div>`;
  ov.querySelector('[data-cxpanel="learn"]').innerHTML=`<div class="cx-section"><div class="cx-section-head"><h3>LEARNING QUESTS</h3><span>OFFICIAL / HIGH-VALUE</span></div>${CXDATA.learning.map((x,i)=>`<a class="cx-card cx-link-card" href="${x.url}" target="_blank" rel="noopener"><span class="cx-link-icon">${String(i+1).padStart(2,'0')}</span><div><h4>${x.title}</h4><p>${x.desc}</p><div class="cx-meta"><span class="cx-pill ${x.type==='FREE'?'free':'paid'}">${x.type}</span></div></div><span class="arrow">›</span></a>`).join('')}</div>`;
  ov.querySelector('[data-cxpanel="certs"]').innerHTML=`<div class="cx-section"><div class="cx-section-head"><h3>CREDENTIAL VAULT</h3><span>RIGHT CERT · RIGHT TIME</span></div><div class="cx-card"><h4>RULE</h4><p>Level 01 لا يشترط CCXP أو Six Sigma أو Forrester. المهارة + evidence أهم. الشهادات المتقدمة تظهر هنا كـFuture Boss أو employer-sponsored power-up بدل ما نخدع المستخدم أنها mandatory.</p></div>${CXDATA.credentials.map(x=>`<a class="cx-card cx-link-card" href="${x.url}" target="_blank" rel="noopener"><span class="cx-link-icon">${x.code}</span><div><h4>${x.title}</h4><p>${x.desc}</p><div class="cx-meta"><span class="cx-pill boss">${x.tag}</span><span class="cx-pill">${x.when}</span></div></div><span class="arrow">›</span></a>`).join('')}</div>`;
  ov.querySelector('[data-cxpanel="region"]').innerHTML=`<div class="cx-section"><div class="cx-section-head"><h3>JEDDAH / MAKKAH MODIFIER</h3><span>WESTERN REGION</span></div><div class="cx-card cx-region"><h4>WHY THIS MATTERS</h4><p>الغربية فيها CX-heavy sectors مثل Healthcare, Education, Insurance, Real Estate, Tourism/Hospitality, Aviation and Digital Services. لذلك نرفع أولوية journey/VoC/data/service-quality skills بدل الاكتفاء بخبرة خدمة العملاء.</p><div class="cx-tier s"><span>TIER S</span><p>Journey Mapping · VoC · NPS/CSAT/CES · Excel · Power BI · Feedback Analysis · Reporting · Stakeholder Management · Arabic/English · Complaints/RCA · Continuous Improvement</p></div><div class="cx-tier a"><span>TIER A</span><p>Qualtrics/Medallia · CRM · Survey Design · Service Blueprinting · Design Thinking · Dashboards · Closed-loop Feedback · Digital CX · Service Quality · SLA</p></div><div class="cx-tier b"><span>TIER B</span><p>SQL · Tableau · Sentiment/Text Analytics · AI for CX · Process Mining · GA4/Behavioral Analytics · Jira/Confluence · Figma/Miro</p></div></div><div class="cx-card cx-region"><h4>Saudi PDPL — KSA CORE</h4><p>أي CX role يتعامل مع surveys, CRM, phone/email, complaints and feedback يحتاج awareness حقيقي في purpose limitation, minimization, access, retention and confidentiality. لا نطلب شهادة PDPL كشرط؛ نختبر القرار المهني داخل Gate مستقل.</p><a class="cx-save" style="display:inline-block;text-decoration:none" href="https://dgp.sdaia.gov.sa/wps/portal/pdp/knowledgecenter" target="_blank" rel="noopener">OPEN SDAIA KNOWLEDGE CENTER</a></div></div>`;
  renderCXGates();
}
function renderCXGates(){
  const p=document.querySelector('[data-cxpanel="gates"]');if(!p)return;
  const passed=CX_GATES.filter(g=>cxState.passed[g.id]).length,pct=cxPct();
  p.innerHTML=`<div class="cx-section"><div class="cx-section-head"><h3>READINESS BOSS RUN</h3><span>${passed} / ${CX_GATES.length} CLEARED</span></div><div class="cx-progress"><i style="width:${pct}%"></i></div>${CX_GATES.map((g,i)=>cxGateHTML(g,i)).join('')}<div class="cx-result"><div class="trophy">${passed===CX_GATES.length?'🏆':'⚔️'}</div><h3>${passed===CX_GATES.length?'LEVEL PASSED · READY TO APPLY':'NOT READY YET'}</h3><p>${passed===CX_GATES.length?'أثبتِّ Journey + VoC + Metrics + Analytics + Service Design + PDPL + Evidence + Interview readiness. هذا يعني Ready to Apply — وليس ضمان توظيف.':'أكملي البوابات غير المجتازة. اللعبة تعطيك فجوات محددة بدل Checkbox شكلي.'}</p><b>${pct}% READINESS</b></div><div class="cx-next"><small>AFTER LEVEL 01</small><b>Senior CX Specialist</b></div></div>`;
  bindCXGates();
}
function cxGateHTML(g,i){
  const ok=!!cxState.passed[g.id];
  let body='';
  if(g.questions){const ans=cxState.answers[g.id]||{};body=g.questions.map((q,qi)=>`<div class="cx-question">${qi+1}. ${q.q}</div><div class="cx-options">${q.a.map((a,ai)=>`<button class="cx-option ${ans[qi]===ai?(ai===q.c?'correct':'wrong'):''}" data-cxq="${g.id}" data-qi="${qi}" data-ai="${ai}">${a}</button>`).join('')}</div>`).join('')+`<div class="cx-mission">PASS ${g.pass}%+ · أجيبي كل الأسئلة. يمكنك تغيير الإجابة ثم إعادة التقييم.</div>`;}
  if(g.mission){const val=cxState.evidence[g.id]||'';body=`<div class="cx-mission">${g.mission}</div><textarea class="cx-evidence" data-cxmission="${g.id}" placeholder="وثّقي الـartifact والـinsight هنا...">${cxEsc(val)}</textarea><button class="cx-save" data-cxsave="${g.id}">SAVE MISSION</button><div class="cx-mission">PASS requires a documented artifact description (${g.min}+ characters). احتفظي بالملف الحقيقي للـportfolio/interview.</div>`;}
  if(g.evidence){body=`<div class="cx-mission">Evidence ما يعني بيانات عملاء سرية. استخدمي artifacts منقحة / dummy data / portfolio projects. PASS = 4 من 5 موثقة.</div>${g.evidence.map((e,ei)=>`<div class="cx-question">${ei+1}. ${e[0]}</div><p style="font-size:6.5px;color:#ad99b6;margin:0">${e[1]}</p><textarea class="cx-evidence" data-cxevidence="${ei}" placeholder="Situation → Evidence → Action → Result / Insight">${cxEsc((cxState.evidence.vault||{})[ei]||'')}</textarea>`).join('')}<button class="cx-save" data-cxvaultsave="1">SAVE EVIDENCE VAULT</button>`;}
  return `<div class="cx-gate ${ok?'passed':''}" data-gate="${g.id}"><div class="cx-gate-head"><span class="cx-gate-no">${String(i+1).padStart(2,'0')}</span><div class="cx-gate-title"><b>${g.title}</b><small>PASS ${g.id==='evidence'?'4 / 5':g.pass+'%+'}</small></div><span class="cx-pass">${ok?'✓ CLEARED':'LOCKED'}</span></div>${body}</div>`;
}
function bindCXGates(){
  document.querySelectorAll('[data-cxq]').forEach(b=>b.onclick=()=>{const id=b.dataset.cxq,qi=+b.dataset.qi,ai=+b.dataset.ai;cxState.answers[id]=cxState.answers[id]||{};cxState.answers[id][qi]=ai;const g=CX_GATES.find(x=>x.id===id);const answered=Object.keys(cxState.answers[id]).length;const score=Math.round(g.questions.filter((q,i)=>cxState.answers[id][i]===q.c).length/g.questions.length*100);cxState.passed[id]=answered===g.questions.length&&score>=g.pass;saveCX();renderCXGates();document.querySelector(`[data-gate="${id}"]`)?.scrollIntoView({block:'center'});});
  document.querySelectorAll('[data-cxsave]').forEach(b=>b.onclick=()=>{const id=b.dataset.cxsave,ta=document.querySelector(`[data-cxmission="${id}"]`),g=CX_GATES.find(x=>x.id===id);cxState.evidence[id]=(ta?.value||'').trim();cxState.passed[id]=cxState.evidence[id].length>=g.min;saveCX();renderCXGates();document.querySelector(`[data-gate="${id}"]`)?.scrollIntoView({block:'center'});});
  const vb=document.querySelector('[data-cxvaultsave]');if(vb)vb.onclick=()=>{cxState.evidence.vault=cxState.evidence.vault||{};document.querySelectorAll('[data-cxevidence]').forEach(t=>cxState.evidence.vault[t.dataset.cxevidence]=(t.value||'').trim());const count=Object.values(cxState.evidence.vault).filter(x=>x.length>=80).length;cxState.passed.evidence=count>=4;saveCX();renderCXGates();document.querySelector('[data-gate="evidence"]')?.scrollIntoView({block:'center'});};
  const xp=document.getElementById('cxXp');if(xp)xp.textContent=cxPct()+'%';
}

(function initCXLevel(){
  const btn=document.querySelector('#cx .level.l1 button');const node=document.querySelector('#cx .level.l1');
  if(node){node.classList.remove('bridge');node.classList.add('available');}
  if(btn)btn.addEventListener('click',openCX);
})();
