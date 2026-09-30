// WORLD 03 · LEVEL 01 — Complaints & Escalations Specialist
// Same game UI system as Team Leader / Quality Analyst, with complaint-specific missions and gates.

const CE={
  skills:[
    ['Complaint Intake','CORE',['Complaint vs Inquiry vs Feedback vs Dispute','Acknowledgement','Reference Number','Initial Triage']],
    ['Complaint Classification','CORE',['Category / Subcategory','Severity','Priority','Impact','Urgency','Duplicate Cases']],
    ['End-to-End Case Ownership','CORE',['Receive','Investigate','Update','Resolve','Confirm','Close','Reopen When Justified']],
    ['Case Investigation','CORE',['Fact Finding','Timeline Reconstruction','Evidence Gathering','Policy Review','Transaction / Order Review']],
    ['Evidence Assessment','CORE',['CRM Notes','Emails','Calls','Chats','Attachments','System Logs','Conflicting Evidence']],
    ['Case Management','CORE',['Case Status','Queues','Aging','Ownership','Dependencies','Follow-ups','Case History']],
    ['De-escalation','CORE',['Angry / Distressed Customers','Emotional Regulation','Verbal De-escalation','Call Control']],
    ['Active Listening','CORE',['Clarifying','Paraphrasing','Probing Questions','Acknowledgement']],
    ['Empathy + Objectivity','CORE',['Validate Feelings','Do Not Admit Liability Without Basis','Evidence-led Judgment']],
    ['Conflict Resolution','CORE',['Negotiation','Mediation Basics','Boundary Setting','Fair Outcomes']],
    ['Service Recovery','CORE',['Apology','Correction','Replacement','Refund','Compensation Within Authority']],
    ['Fair Resolution','CORE',['Customer Need','Evidence','Policy','Regulation','Business Risk']],
    ['Escalation Management','CORE',['L1 / L2 / L3','Functional Escalation','Hierarchical Escalation','Regulatory Escalation']],
    ['Escalation Matrix','CORE',['When','To Whom','Why','Required Evidence','Approval Limits']],
    ['Sensitive Cases','CORE',['Legal Threat','Regulatory Threat','Executive Complaint','Reputation / Social','Vulnerable Customer']],
    ['SLA / TAT Management','CORE',['Response SLA','Resolution SLA','Due Dates','Aging','Breach Prevention']],
    ['Queue Prioritization','CORE',['Risk','Regulatory Deadline','Oldest Cases','Customer Harm','Business Impact']],
    ['Written Complaint Responses','CORE',['Arabic Final Response','English Final Response','Findings','Decision','Rationale','Next Steps']],
    ['Professional Writing','CORE',['Clear','Concise','Defensible','Empathetic','Non-accusatory']],
    ['Documentation & Audit Trail','CORE',['Case Notes','Timestamps','Actions','Decisions','Evidence','Who / What / When / Why']],
    ['Root Cause Analysis','CORE',['5 Whys','Fishbone / Ishikawa','Pareto','Cause vs Symptom']],
    ['Systemic vs One-off Issues','CORE',['Pattern Recognition','Process Failure','Isolated Incident']],
    ['CAPA','CORE',['Corrective Action','Preventive Action','Owner','Due Date','Effectiveness Check']],
    ['Complaint Analytics','WORKING KNOWLEDGE',['Volume','Categories','Drivers','Trends','Repeat Complaints','Aging']],
    ['Complaint KPIs','CORE',['Resolution Time','SLA Compliance','Reopen Rate','FCR','Repeat Rate','Escalation Rate']],
    ['CX Metrics','WORKING KNOWLEDGE',['CSAT','NPS Basics','CES','Complaint Satisfaction']],
    ['Reporting','CORE',['Weekly / Monthly Complaint Report','Trend Report','Management Summary']],
    ['Microsoft Excel','CORE',['PivotTables','XLOOKUP','COUNTIFS','SUMIFS','IF / IFS','Charts','Cleaning','Conditional Formatting']],
    ['Power BI','POWER-UP',['Complaint Dashboard','Drivers','SLA Breaches','Aging','Trends']],
    ['CRM / Ticketing','CORE',['Dynamics 365','Salesforce Service Cloud','Zendesk or Equivalent']],
    ['Knowledge Management','CORE',['SOPs','Knowledge Base','Response Templates','Policy Updates']],
    ['Stakeholder Management','CORE',['Operations','Finance','Sales','Legal','Compliance','QA','IT','Management']],
    ['Customer Advocacy','CORE',['Voice of Customer','Fair Treatment','Policy / Business Balance']],
    ['Risk Awareness','CORE',['Financial','Regulatory','Legal','Reputational','Customer Harm']],
    ['Saudi PDPL Awareness','REQUIRED KSA',['Privacy','Confidentiality','Recordings','CRM Data','Complaint Evidence']],
    ['Business English','CORE',['Formal Emails','Complaint Letters','Investigation Summaries','Meetings']],
    ['Resilience','CORE',['High-pressure Cases','Emotional Customers','Workload Prioritization']]
  ],
  learning:[
    {type:'FREE',title:'ICMI — How to De-Escalate a Challenging Caller',desc:'Active listening, validation, empathy and techniques for preventing a difficult contact from escalating.',url:'https://www.icmi.com/resources/2022/deescalate-challenging-calls'},
    {type:'FREE',title:'ICMI — Free Customer Service Training Tools',desc:'Free practice resources for customer contacts, coaching and service conversations.',url:'https://www.icmi.com/training/call-center-customer-service-training-tools'},
    {type:'FREE',title:'ASQ — Root Cause Analysis Resources',desc:'Official RCA foundation: problem definition, cause vs symptom and structured investigation.',url:'https://asq.org/quality-resources/root-cause-analysis'},
    {type:'FREE',title:'ASQ — Root Cause Analysis Tools',desc:'5 Whys, Fishbone / Ishikawa, Pareto and other practical tools used to investigate recurring complaints.',url:'https://asq.org/quality-resources/root-cause-analysis/tools'},
    {type:'FREE',title:'Microsoft Learn — Work with Cases in Dynamics 365 Customer Service',desc:'Case creation, resolution lifecycle, queues, hierarchy, merging and workload management.',url:'https://learn.microsoft.com/en-us/training/paths/work-with-cases-in-dynamics-365-for-customer-service/'},
    {type:'FREE',title:'Microsoft Learn — Explore Case Management in Dynamics 365 Contact Center',desc:'Case lifecycle, routing, automation, analytics and omnichannel case management.',url:'https://learn.microsoft.com/en-us/training/modules/explore-case-management/'},
    {type:'FREE',title:'OpenLearn — Effective Communication in the Workplace',desc:'Professional workplace communication. Useful for complaint writing, stakeholder updates and difficult conversations.',url:'https://www.open.edu/openlearn/money-business/effective-communication-the-workplace/'},
    {type:'FREE',title:'SDAIA — Personal Data Protection Law (PDPL)',desc:'Required Saudi knowledge when complaint files include customer identity, recordings, CRM notes, documents or transactions.',url:'https://dgp.sdaia.gov.sa'},
    {type:'PAID',title:'ICMI — Managing Difficult Customer Contacts',desc:'Role-specific practice in listening, empathy, apology, call control, negotiation, saying no and de-escalation.',url:'https://www.icmi.com/training/courses/managing-difficult-customer-contacts'},
    {type:'PREMIUM',title:'BSI — ISO 10002 Complaints Handling',desc:'Role-specific methodology for a consistent complaints management process and continual improvement. ISO 10002 is the standard; training providers issue their own course credentials.',url:'https://www.bsigroup.com/ar-AE/products-and-services/standards/iso-10002-customer-satisfaction-and-complaints-handling/'},
    {type:'PAID',title:'ASQ — Root Cause Analysis Specialized Credential',desc:'Problem definition, data, causal analysis, corrective action, CAPA and verification of effectiveness.',url:'https://asq.org/training/SPSCRCA2026ASQ-root-cause-analysis-specialized-credential'},
    {type:'PAID',title:'Microsoft Customer Service with AI Professional Certificate',desc:'Structured path covering complaint resolution, conflict, SLA, CRM, customer insights, dashboards and service improvement.',url:'https://www.coursera.org/professional-certificates/microsoft-customer-service-with-ai'},
    {type:'PAID',title:'Microsoft / Coursera — Problem & Conflict Resolution',desc:'Complaint handling, conflict resolution, service recovery, RCA and service improvement.',url:'https://www.coursera.org/learn/problem-and-conflict-resolution'}
  ],
  credentials:[
    {code:'ISO',title:'ISO 10002 Complaints Handling Training',tag:'TOP ROLE-SPECIFIC',when:'NOW / TRAINING',desc:'أفضل معرفة متخصصة للدور: complaint handling process, governance and improvement. ISO 10002 معيار وليس professional certification تصدرها ISO للأفراد.',url:'https://www.iso.org/standard/71580.html'},
    {code:'RCA',title:'ASQ Root Cause Analysis Specialized Credential',tag:'HIGH-VALUE',when:'NOW / POWER-UP',desc:'Credential عملية للتحقيق في أسباب الشكاوى المتكررة وتحويل findings إلى corrective / preventive actions والتحقق من الفعالية.',url:'https://asq.org/training/SPSCRCA2026ASQ-root-cause-analysis-specialized-credential'},
    {code:'CSSYB',title:'ASQ Certified Six Sigma Yellow Belt',tag:'POWER-UP',when:'PROCESS IMPROVEMENT',desc:'ليست شرطًا للدور. مفيدة كأساس structured problem solving وprocess improvement إذا كان المسار سيتوسع إلى Quality / Operational Excellence.',url:'https://www.asq.org/cert/six-sigma-yellow-belt'},
    {code:'D365',title:'Dynamics 365 Customer Service Case Management',tag:'TOOL SKILL',when:'IF RELEVANT',desc:'مهارة منصة وليست شرطًا عالميًا. تعلمي CRM / case management platform التي تستخدمها جهة العمل.',url:'https://learn.microsoft.com/en-us/training/paths/work-with-cases-in-dynamics-365-for-customer-service/'},
    {code:'MO-211',title:'Microsoft Office Specialist: Excel Expert',tag:'OPTIONAL',when:'REPORTING',desc:'إثبات رسمي لمستوى Excel المتقدم. القدرة العملية على تحليل complaint logs أهم من الشهادة نفسها.',url:'https://learn.microsoft.com/en-us/credentials/certifications/exams/mo-211/'},
    {code:'PL-300',title:'Microsoft Certified: Power BI Data Analyst Associate',tag:'FUTURE',when:'COMPLAINT ANALYTICS',desc:'Power-up عند الانتقال من handling complaints إلى تحليل drivers, aging, SLA breaches وmanagement dashboards.',url:'https://learn.microsoft.com/en-us/credentials/certifications/data-analyst-associate/'},
    {code:'COPC',title:'COPC® Customer Experience Operations',tag:'PREMIUM / FUTURE',when:'SENIOR / MANAGER / CX',desc:'قوي للمراحل الأعلى في complaint governance وCX operations، وليس شرطًا لدخول Specialist.',url:'https://www.copc.com/class-listing/copc-best-practices-for-cx-operations/'},
    {code:'CSSGB',title:'ASQ Certified Six Sigma Green Belt',tag:'FUTURE',when:'SENIOR / IMPROVEMENT',desc:'مناسب لاحقًا عندما يصبح لديك evidence حقيقي في process improvement وRCA / DMAIC.',url:'https://www.asq.org/cert/six-sigma-green-belt'},
    {code:'CCXP',title:'Certified Customer Experience Professional (CCXP)',tag:'FUTURE CX',when:'MULTI-COMPETENCY CX',desc:'ليست شهادة Complaints Specialist. تُفتح عندما تصبح الخبرة أوسع عبر عدة CX competencies وتتحقق أهلية CXPA.',url:'https://cxpaglobal.org/get-certified/get-started'},
    {code:'CGSP',title:'Certified Guest Service Professional (CGSP)',tag:'MAKKAH / HOSPITALITY',when:'HOSPITALITY MODULE',desc:'Power-up مفيد لمسار الفنادق والضيافة في مكة، خصوصًا service recovery وguest service. ليس requirement عامًا للشكاوى.',url:'https://info.ahlei.org/guestservicegold/'}
  ],
  industry:[
    {code:'SAMA',title:'Financial Services Module',tag:'INDUSTRY',when:'BANKING / FINTECH',desc:'Fair treatment, disclosure, complaint reference numbers, documented channels, escalation, privacy, complaint KPIs and regulatory timelines.',url:'https://www.rulebook.sama.gov.sa/en/financial-consumer-protection-principles-and-rules'},
    {code:'CST',title:'Telecom Module',tag:'INDUSTRY',when:'TELECOM',desc:'Telecom complaint channels, processing periods, escalation to CST, root-cause review, satisfaction measurement and complaint records.',url:'https://www.cst.gov.sa/en/services/Telecom-Complaints-Escalation'},
    {code:'INS',title:'Insurance / Healthcare Module',tag:'INDUSTRY',when:'INSURANCE / HEALTH',desc:'Complaint references, required documents/evidence, complaint handling and regulatory escalation for insurance / health contexts.',url:'https://www.ia.gov.sa/ar/Pages/service-details.aspx/Complaint-against-an-insurance-company'},
    {code:'HOSP',title:'Makkah Hospitality Module',tag:'WESTERN REGION',when:'HOTELS / TOURISM',desc:'Service recovery, cross-department coordination, guest complaint tracking, response times and confidentiality.',url:'https://info.ahlei.org/guestservicegold/'}
  ]
};

const ceInvestigation=[
  {q:'عميل يقول إن المبلغ خُصم مرتين. CRM فيه شكوى قديمة، النظام المالي يظهر عمليتين، والـAgent السابق كتب “تم الحل” بدون دليل. أول خطوة صحيحة؟',a:['أعتذر وأعد العميل برد المبلغ فورًا','أعيد بناء timeline وأجمع transaction evidence وأحدد ownership/status قبل إصدار قرار','أغلقها لأن الشكوى مكررة','أصعّدها للإدارة العليا مباشرة'],c:1},
  {q:'العميل قدّم رواية تختلف عن ملاحظات الـCRM. كيف تتعاملين؟',a:['نصدق العميل دائمًا','نصدق الموظف دائمًا','نحافظ على الحياد، نجمع evidence من القنوات والسجلات ونوثق التناقض قبل القرار','نطلب من العميل إلغاء الشكوى'],c:2},
  {q:'أي Case File هو الأقوى دفاعًا عن القرار؟',a:['ملخص من سطر واحد','Timeline + evidence sources + policy/regulation + findings + decision rationale + actions + timestamps','تسجيل المكالمة فقط','اسم الموظف الذي أخطأ فقط'],c:1},
  {q:'شكوى مشابهة تكررت من عدة عملاء خلال أسبوع. ماذا يتغير في طريقة التحقيق؟',a:['لا شيء؛ كل حالة منفصلة تمامًا','نحل الحالات الفردية ونرفع pattern للتحليل كاحتمال systemic issue / process failure','نغلق الحالات الجديدة كduplicate','نوقف استقبال الشكاوى'],c:1},
  {q:'متى تكون إعادة فتح complaint مبررة؟',a:['كلما طلب العميل ذلك بدون سبب','عند وجود evidence جديد أو خلل في التحقيق/القرار أو سبب إجرائي موثق يسمح بذلك','بعد مرور شهر دائمًا','لا تُفتح أي شكوى بعد الإغلاق'],c:1}
];

const ceDeescalation=[
  {q:'عميل غاضب يقول “أنتم سرقتوني وبفضحكم”. ما أول رد مهني؟',a:['هذا أسلوب غير مقبول وسأنهي المكالمة','أتفهم أن الموقف مزعج، خليني أراجع معك ما حدث خطوة بخطوة وأوضح لك ما أقدر أعمله الآن','أكيد الخطأ من الشركة وسنعوضك','اهدأ أولًا ثم نتكلم'],c:1},
  {q:'العميل يكرر نفس النقطة ويرفع صوته. أفضل تقنية؟',a:['مقاطعته لإكمال الإجراء','Acknowledgement + paraphrase للمشكلة + سؤال محدد ينقل الحوار إلى evidence / next step','رفع الصوت مثله','تحويله فورًا لأي مدير'],c:1},
  {q:'العميل يطلب تعويضًا خارج صلاحيتك. ماذا تقولين؟',a:['مستحيل وما أقدر أسوي شيء','أوضح حدود الصلاحية بدون وعود، وأحدد مسار escalation/approval والمدة المتوقعة للمتابعة','أوافق ثم أطلب الموافقة لاحقًا','أتجاهل طلب التعويض'],c:1},
  {q:'أي عبارة تحقق empathy بدون admission of liability؟',a:['نحن مخطئون 100% وسندفع','أتفهم أثر التجربة عليك، وسأتحقق من الوقائع والسياسة حتى أعطيك قرارًا واضحًا','هذه مشكلتك','الموظف السابق هو السبب'],c:1},
  {q:'متى يصبح إنهاء/إيقاف التواصل المباشر منطقيًا؟',a:['عند أول اعتراض','عند وجود تهديد/إساءة أو risk حسب policy وبعد اتباع خطوات التحذير والتصعيد الموثقة','إذا كانت الشكوى طويلة','إذا لم يوافق العميل على القرار'],c:1}
];

const ceEscalation=[
  {q:'لديك 4 حالات: شكوى عادية عمرها يوم، شكوى regulatory deadline اليوم، شكوى VIP بلا risk، وشكوى قديمة منخفضة الأثر. ما الأولوية الأولى؟',a:['VIP دائمًا','الحالة ذات regulatory deadline / أعلى risk أولًا ثم بقية الحالات حسب SLA/impact/aging','الأقدم دائمًا','الأسهل لإغلاق أكبر عدد'],c:1},
  {q:'Case سيكسر Resolution SLA خلال ساعتين بسبب انتظار إدارة داخلية. ماذا تفعلين؟',a:['أنتظر حتى يردوا','أعمل proactive escalation حسب matrix، أوثق dependency، أحدّث العميل حسب policy وأحمي الـSLA قدر الإمكان','أغلق case مؤقتًا','أغير due date يدويًا بدون سبب'],c:1},
  {q:'عميل يهدد برفع شكوى للجهة المنظمة. القرار الصحيح؟',a:['نعده بنتيجة لصالحه','نحدد regulatory risk، نطبق escalation matrix والسياسة، نحافظ على evidence والتوثيق ولا نعطي وعودًا غير معتمدة','نحذف الملاحظات الحساسة','نطلب منه عدم التصعيد'],c:1},
  {q:'ما الفرق بين Functional وHierarchical escalation؟',a:['لا فرق','Functional يذهب للجهة صاحبة الخبرة/العملية، Hierarchical يصعد لمستوى إداري أعلى بسبب authority/risk/decision','Functional للعميل فقط','Hierarchical للـIT فقط'],c:1},
  {q:'أفضل Escalation Note يحتوي:',a:['اسم العميل فقط','Issue + impact/risk + evidence + actions tried + exact ask/decision needed + SLA/deadline','نسخة من كل الـCRM بدون ملخص','رأي شخصي في العميل'],c:1}
];

const ceWriting=[
  {q:'أي Final Response عربي هو الأكثر مهنية؟',a:['تم رفض شكواك لأن النظام صحيح وشكرًا','نشكر تواصلك. بعد مراجعة السجلات بتاريخ (…) تبين (…) وبناءً على السياسة (…) تم اتخاذ (…). إذا احتجت توضيحًا إضافيًا فهذه هي الخطوة التالية (…)','الموظف أخطأ ونعتذر جدًا وسنعاقبه','للأسف لا نستطيع المساعدة'],c:1},
  {q:'Which English closing is strongest for a defensible complaint response?',a:['Case closed.','Based on the evidence reviewed and the applicable policy, our decision is … The next available step is …','We are probably right.','Please do not contact us again.'],c:1},
  {q:'ماذا يجب أن تتجنب Final Response؟',a:['Findings وrationale','وعود غير معتمدة، لوم شخصي، لغة دفاعية أو اعتراف قانوني غير مستند إلى تحقيق','Next steps','Reference number'],c:1},
  {q:'إذا كان القرار ضد طلب العميل، ما الذي يحافظ على الجودة؟',a:['رفض مختصر فقط','Empathy + clear findings + evidence/policy rationale + what was done + available next step / escalation route','إخفاء سبب الرفض','نسخ policy كاملة بدون شرح'],c:1},
  {q:'Case Notes الجيدة يجب أن تكون:',a:['عاطفية وتفصيلية جدًا','موضوعية، مؤرخة، قابلة للتتبع، توضح action/decision/evidence بدون افتراضات غير مثبتة','مختصرة لدرجة “تم الحل”','مكتوبة بعد أسبوع من الذاكرة'],c:1}
];

const ceRCA=[
  {q:'40% من الشكاوى هذا الشهر عن تأخر refund. ما أول خطوة RCA صحيحة؟',a:['ندرب Agents مباشرة','نحدد problem statement ونحلل timeline/process/system/ownership والبيانات قبل اختيار action','نرسل اعتذار جماعي','نخفض SLA المستهدف'],c:1},
  {q:'Pareto يبين أن 67% من complaints تأتي من سبب واحد. ماذا تفعلين؟',a:['نبدأ بأصغر سبب','نركز RCA على أكبر contributor مع التحقق من البيانات ثم نقيس أثر corrective action','نغير ألوان التقرير','نغلق complaints الأقدم'],c:1},
  {q:'أي CAPA أقوى؟',a:['“انتبهوا أكثر”','Root cause محدد + corrective/preventive action + owner + due date + success measure + effectiveness review','تدريب عام بلا قياس','إغلاق الشكوى'],c:1},
  {q:'تم إصلاح complaint فردية لكن السبب الجذري في النظام ما زال موجودًا. الحالة تعتبر:',a:['مغلقة بالكامل من منظور improvement','Customer recovery تم، لكن systemic corrective action ما زال مطلوبًا لمنع recurrence','لا تحتاج شيء','خطأ عميل'],c:1},
  {q:'بعد تنفيذ CAPA انخفض repeat complaint rate من 14% إلى 6%. ما الخطوة الصحيحة؟',a:['نفترض النجاح للأبد','نوثق before/after ونتحقق من الاستدامة والفترة والعوامل الأخرى قبل إغلاق action','نوقف القياس','نغيّر KPI'],c:1}
];

const ceInterview=[
  {q:'Boss: “Walk me through how you investigate a complex complaint.” أقوى جواب:',a:['أسمع العميل وأقرر','Intake/classify → timeline/evidence → policy/regulation → stakeholder checks → findings → fair decision → documented response → follow-up/RCA if systemic','أصعد كل شيء للمدير','أركز على سرعة الإغلاق فقط'],c:1},
  {q:'“Tell me about a time you handled an angry customer.” أفضل structure:',a:['أقول إن العميل كان صعبًا','Situation + risk/emotion + listening/de-escalation + investigation/action + clear outcome + what I learned','أذكر أني حولته للمدير','أشرح تعريف empathy'],c:1},
  {q:'“What if policy conflicts with what the customer wants?”',a:['أكسر السياسة لإرضائه','أفهم الحاجة، أتحقق من policy/regulation/authority، أبحث عن fair permitted recovery وأشرح rationale/next step بوضوح','أرفض بدون شرح','أعده باستثناء'],c:1},
  {q:'“How do you prevent complaints from recurring?”',a:['أغلقها بسرعة','Complaint data/trends → RCA → CAPA → owner/deadline → verify effectiveness → feed learning to operations/QA/training','أرسل survey فقط','ألوم الموظف'],c:1},
  {q:'“Which complaint KPIs do you monitor?”',a:['عدد الشكاوى فقط','SLA compliance, response/resolution time, aging, reopen/repeat rate, escalation rate, complaint satisfaction + drivers/trends','AHT فقط','NPS فقط'],c:1}
];

const ceEvidenceNames=['Complaint Investigation Case File','De-escalation / Service Recovery Evidence','SLA / Escalation Decision Evidence','Written Response + Documentation Evidence','RCA / CAPA + Complaint Analytics Evidence'];
const ceStoreKey='rose-cx-complaints-specialist-v1';
let ceState=JSON.parse(localStorage.getItem(ceStoreKey)||'{"investigation":null,"deescalation":null,"escalation":null,"writing":null,"rca":null,"interview":null,"evidence":{}}');
const saveCE=()=>localStorage.setItem(ceStoreKey,JSON.stringify(ceState));

function ceCourseCard(x){return `<article class="quest-card ${x.type==='FREE'?'free':x.type==='PREMIUM'?'premium':''}"><div class="quest-top"><h5>${x.title}</h5><span class="quest-badge">${x.type}</span></div><p>${x.desc}</p><a class="quest-link" href="${x.url}" target="_blank" rel="noopener">OPEN OFFICIAL / COURSE PAGE ↗</a></article>`}
function ceCredCard(x){return `<article class="quest-card"><div class="credential"><div class="cred-icon">${x.code}</div><div><div class="quest-top"><h5>${x.title}</h5><span class="quest-badge">${x.tag}</span></div><p>${x.desc}</p><div class="cred-meta"><span>${x.when}</span></div><a class="quest-link" href="${x.url}" target="_blank" rel="noopener">OFFICIAL SOURCE ↗</a></div></div></article>`}

function createCELevel(){
  if(document.getElementById('complaintsSpecialistLevel'))return;
  const d=document.createElement('div');d.className='level-drawer';d.id='complaintsSpecialistLevel';
  d.innerHTML=`<div class="level-shell"><header class="level-head"><div class="level-head-row"><button class="tl-close" aria-label="Close">×</button><div class="tl-title"><span class="tl-kicker">WORLD 03 · LEVEL 01</span><h2>Complaints & Escalations Specialist</h2></div><div class="tl-score"><div><b id="ceScore">0%</b><small>READINESS</small></div></div></div><div class="tl-status"><span class="tl-status-pill" id="ceStatus">⚔ IN TRAINING</span><div class="tl-progress"><i id="ceBar"></i></div></div></header><nav class="level-tabs"><button class="level-tab active" data-tab="brief">BRIEFING</button><button class="level-tab" data-tab="skills">SKILLS</button><button class="level-tab" data-tab="learn">LEARN</button><button class="level-tab" data-tab="certs">CREDENTIALS</button><button class="level-tab" data-tab="gates">GATES</button></nav><main class="level-content"><section class="tl-panel active" data-panel="brief" id="ceBrief"></section><section class="tl-panel" data-panel="skills" id="ceSkills"></section><section class="tl-panel" data-panel="learn" id="ceLearn"></section><section class="tl-panel" data-panel="certs" id="ceCerts"></section><section class="tl-panel" data-panel="gates" id="ceGates"></section></main></div>`;
  document.body.appendChild(d);
  renderCEStatic();renderCEGates();updateCEReadiness();
  d.querySelector('.tl-close').onclick=closeCELevel;
  d.querySelectorAll('.level-tab').forEach(b=>b.onclick=()=>switchCETab(b.dataset.tab));
}

function renderCEStatic(){
  document.getElementById('ceBrief').innerHTML=`<div class="mission-hero"><span class="rank">TARGET ROLE · CASE RESOLUTION</span><h3>Complaints & Escalations Specialist</h3><p>الانتقال من خدمة العميل إلى امتلاك الشكوى من البداية للنهاية: تحقيق محايد، evidence، SLA، de-escalation، قرار عادل، رد نهائي قابل للدفاع عنه، ثم RCA لمنع التكرار.</p><div class="market-chip">● DIRECT MOVE · 4Y CONTACT CENTER EXPERIENCE CAN BE RELEVANT</div></div><div class="section-label"><h4>Win condition</h4><span>7 COMPLAINT GATES · ALL MUST PASS</span></div><div class="gate-grid"><div class="gate-card"><b>80%</b><h5>Investigation Case</h5><p>Timeline, evidence, policy and case ownership.</p></div><div class="gate-card"><b>80%</b><h5>De-escalation</h5><p>Angry customer + service recovery judgment.</p></div><div class="gate-card"><b>80%</b><h5>SLA / Escalation</h5><p>Priority, risk, matrix and regulatory judgment.</p></div><div class="gate-card"><b>80%</b><h5>Final Response</h5><p>Arabic / English response and documentation.</p></div><div class="gate-card"><b>80%</b><h5>RCA + CAPA</h5><p>Recurring complaints → systemic improvement.</p></div><div class="gate-card"><b>4/5</b><h5>Evidence Vault</h5><p>Case file, writing, RCA and decision evidence.</p></div><div class="gate-card"><b>75%</b><h5>Interview Boss</h5><p>Complaint judgment + communication.</p></div></div><div class="section-label"><h4>Core framework</h4></div><div class="quest-card"><h5>ISO 10002:2018 · Complaints Handling</h5><p>Core knowledge for designing, operating and improving complaint handling. ISO 10002 is a standard; training providers may issue course credentials, but ISO itself does not make a learner an “ISO-certified Complaints Specialist”.</p><a class="quest-link" href="https://www.iso.org/standard/71580.html" target="_blank" rel="noopener">OFFICIAL ISO PAGE ↗</a></div><div class="section-label"><h4>Saudi rule</h4></div><div class="quest-card"><h5>Saudi PDPL Awareness · REQUIRED KNOWLEDGE</h5><p>Complaint files may contain identity, recordings, CRM notes, documents and transactions. Privacy/confidentiality awareness is mandatory knowledge. Sector regulations unlock as separate modules.</p></div><div class="source-note">Role benchmark: Saudi complaints / escalation roles + Western Region service roles. Framework references: ISO 10002, ICMI, ASQ, Microsoft and Saudi regulatory sources.</div>`;
  document.getElementById('ceSkills').innerHTML=`<div class="mission-hero"><span class="rank">SKILL TREE</span><h3>Complaint Resolution Capability Map</h3><p>هذه ليست checklist للحفظ. الـGates تختبر investigation, de-escalation, escalation judgment, writing, RCA والقدرة على الدفاع عن القرار.</p></div><div class="section-label"><h4>Required capabilities</h4><span>${CE.skills.length} DOMAINS</span></div><div class="skill-tree">${CE.skills.map(s=>`<article class="skill-card"><div class="skill-card-top"><h5>${s[0]}</h5><span class="skill-tier">${s[1]}</span></div><div class="skill-items">${s[2].map(x=>`<span>${x}</span>`).join('')}</div></article>`).join('')}</div>`;
  document.getElementById('ceLearn').innerHTML=`<div class="mission-hero"><span class="rank">QUEST LOG</span><h3>Learning Path</h3><p>ابدئي بالـfree missions لبناء investigation + de-escalation + case management + RCA. إذا ستدفعين، اختاري حسب gap بدل جمع الدورات.</p></div><div class="section-label"><h4>Free missions</h4><span>START HERE</span></div><div class="quest-list">${CE.learning.filter(x=>x.type==='FREE').map(ceCourseCard).join('')}</div><div class="section-label"><h4>Premium missions</h4><span>CHOOSE BY GAP</span></div><div class="quest-list">${CE.learning.filter(x=>x.type!=='FREE').map(ceCourseCard).join('')}</div>`;
  document.getElementById('ceCerts').innerHTML=`<div class="mission-hero"><span class="rank">POWER-UPS</span><h3>Credentials & Sector Modules</h3><p>لا توجد شهادة واحدة إلزامية للتقديم. نفرّق بين role-specific training، professional credentials، tools، future power-ups ومتطلبات القطاع.</p></div><div class="section-label"><h4>Credential vault</h4><span>PRIORITIZED</span></div><div class="quest-list">${CE.credentials.map(ceCredCard).join('')}</div><div class="section-label"><h4>Western Region / Saudi sector modules</h4><span>UNLOCK BY INDUSTRY</span></div><div class="quest-list">${CE.industry.map(ceCredCard).join('')}</div>`;
}

function switchCETab(tab){const d=document.getElementById('complaintsSpecialistLevel');d.querySelectorAll('.level-tab').forEach(x=>x.classList.toggle('active',x.dataset.tab===tab));d.querySelectorAll('.tl-panel').forEach(x=>x.classList.toggle('active',x.dataset.panel===tab));d.querySelector('.level-content').scrollTop=0;}
function openCELevel(){createCELevel();document.getElementById('complaintsSpecialistLevel').classList.add('open');document.body.classList.add('level-open');document.body.style.overflow='hidden';if(navigator.vibrate)navigator.vibrate([20,30,20]);}
function closeCELevel(){document.getElementById('complaintsSpecialistLevel').classList.remove('open');document.body.classList.remove('level-open');document.body.style.overflow='';}
function ceEvidenceComplete(i){const x=ceState.evidence[i];return x&&['s','a','r'].every(k=>(x[k]||'').trim().length>=20)}
function ceEvidenceCount(){return ceEvidenceNames.filter((_,i)=>ceEvidenceComplete(i)).length}
function ceReadiness(){const ev=ceEvidenceCount()/5*100;return Math.round(Math.min(ceState.investigation||0,100)*.18+Math.min(ceState.deescalation||0,100)*.14+Math.min(ceState.escalation||0,100)*.14+Math.min(ceState.writing||0,100)*.14+Math.min(ceState.rca||0,100)*.14+ev*.13+Math.min(ceState.interview||0,100)*.13)}
function ceAllPassed(){return (ceState.investigation||0)>=80&&(ceState.deescalation||0)>=80&&(ceState.escalation||0)>=80&&(ceState.writing||0)>=80&&(ceState.rca||0)>=80&&ceEvidenceCount()>=4&&(ceState.interview||0)>=75}
function ceReadyBanner(){const pass=ceAllPassed();return `<div class="ready-banner ${pass?'':'locked'}"><div class="boss-crown">${pass?'♛':'◇'}</div><h4>${pass?'LEVEL PASSED · READY TO APPLY':'BOSS LOCKED'}</h4><p>${pass?'اجتزت معيار الجاهزية الداخلي لـComplaints & Escalations Specialist. هذا لا يضمن التوظيف؛ متطلبات الشركة والقطاع والمقابلة النهائية تبقى مستقلة.':'اجتز كل Complaint Gate بالحد الأدنى المطلوب لفتح READY TO APPLY.'}</p></div>`}
function updateCEReadiness(){const score=ceReadiness();const scoreEl=document.getElementById('ceScore');if(!scoreEl)return;scoreEl.textContent=score+'%';document.getElementById('ceBar').style.width=score+'%';const s=document.getElementById('ceStatus');if(ceAllPassed())s.textContent='🏆 READY TO APPLY';else if(score>=70)s.textContent='◐ ALMOST READY';else s.textContent='⚔ IN TRAINING';saveCE();}

function renderCEGates(){
  const eCount=ceEvidenceCount();
  const gate=(name,key,pass,desc)=>`<article class="gate-card ${pass?'pass':''}"><b>${key==='evidence'?eCount+'/5':ceState[key]===null||ceState[key]===undefined?'—':ceState[key]+'%'}</b><h5>${name}</h5><p>${desc}</p><button class="gate-start" data-ce-gate="${key}">${key==='evidence'?'BUILD EVIDENCE':'START / RETRY'}</button></article>`;
  document.getElementById('ceGates').innerHTML=`<div class="mission-hero"><span class="rank">ESCALATION DUNGEON</span><h3>Readiness Gates</h3><p>هنا ما يكفي “أنا ممتازة مع العملاء”. لازم تحققي، تهدئي، تصعّدي صح، تكتبي قرارًا مهنيًا، تعملي RCA وتدافعي عن judgment أمام الـBoss.</p></div><div class="gate-grid">${gate('Investigation Case','investigation',(ceState.investigation||0)>=80,'Evidence, timeline, ownership and fair findings.')}${gate('De-escalation Arena','deescalation',(ceState.deescalation||0)>=80,'Angry customer + empathy without false promises.')}${gate('SLA / Escalation Tower','escalation',(ceState.escalation||0)>=80,'Priority, regulatory risk and escalation matrix.')}${gate('Final Response Forge','writing',(ceState.writing||0)>=80,'Arabic / English writing + defensible case notes.')}${gate('RCA + CAPA Lab','rca',(ceState.rca||0)>=80,'Recurring complaint → root cause → verified action.')}${gate('Evidence Vault','evidence',eCount>=4,'Portfolio / work evidence in 4 of 5 categories.')}${gate('Interview Boss','interview',(ceState.interview||0)>=75,'Complaint judgment, ownership and communication.')}</div>${ceReadyBanner()}`;
  document.querySelectorAll('[data-ce-gate]').forEach(b=>b.onclick=()=>openCEGate(b.dataset.ceGate));
  updateCEReadiness();
}

function openCEGate(key){
  if(key==='evidence')return openCEEvidence();
  const sets={investigation:['INVESTIGATION CASE',ceInvestigation,80],deescalation:['DE-ESCALATION ARENA',ceDeescalation,80],escalation:['SLA / ESCALATION TOWER',ceEscalation,80],writing:['FINAL RESPONSE FORGE',ceWriting,80],rca:['RCA + CAPA LAB',ceRCA,80],interview:['INTERVIEW BOSS',ceInterview,75]};
  const [title,qs,pass]=sets[key];
  const overlay=document.createElement('div');overlay.className='challenge-overlay';
  overlay.innerHTML=`<div class="challenge-box"><div class="challenge-head"><div><span class="rank">${key==='interview'?'BOSS FIGHT':'MISSION GATE'}</span><h3>${title}</h3></div><button class="challenge-close">×</button></div><div class="challenge-body">${qs.map((x,i)=>`<article class="challenge-q"><b>${String(i+1).padStart(2,'0')}</b><h5>${x.q}</h5><div class="challenge-options">${x.a.map((a,j)=>`<label><input type="radio" name="ce_${key}_${i}" value="${j}"><span>${a}</span></label>`).join('')}</div></article>`).join('')}<button class="challenge-submit">SUBMIT MISSION</button><div class="challenge-result"></div></div></div>`;
  document.body.appendChild(overlay);requestAnimationFrame(()=>overlay.classList.add('open'));
  const close=()=>{overlay.classList.remove('open');setTimeout(()=>overlay.remove(),180)};
  overlay.querySelector('.challenge-close').onclick=close;
  overlay.querySelector('.challenge-submit').onclick=()=>{
    let correct=0,answered=0;qs.forEach((x,i)=>{const picked=overlay.querySelector(`input[name="ce_${key}_${i}"]:checked`);if(picked){answered++;if(+picked.value===x.c)correct++;}});
    const result=overlay.querySelector('.challenge-result');if(answered<qs.length){result.innerHTML='<div class="result-card fail"><b>MISSION INCOMPLETE</b><p>جاوبي كل الأسئلة قبل التسليم.</p></div>';return;}
    const score=Math.round(correct/qs.length*100);ceState[key]=score;saveCE();const ok=score>=pass;
    result.innerHTML=`<div class="result-card ${ok?'pass':'fail'}"><b>${ok?'GATE CLEARED':'RETRY REQUIRED'} · ${score}%</b><p>${ok?'تم اجتياز هذه البوابة.':'الحد المطلوب '+pass+'%. راجعي الـSkill Tree والـLearning Missions ثم أعيدي المحاولة.'}</p></div>`;
    renderCEGates();updateCEReadiness();
  };
}

function openCEEvidence(){
  const overlay=document.createElement('div');overlay.className='challenge-overlay';
  overlay.innerHTML=`<div class="challenge-box"><div class="challenge-head"><div><span class="rank">EVIDENCE VAULT</span><h3>Prove the Work</h3></div><button class="challenge-close">×</button></div><div class="challenge-body"><div class="source-note">استخدمي أمثلة حقيقية من خبرتك أو Portfolio simulation بدون أي بيانات عملاء أو معلومات سرية. لكل Evidence: Situation → Action → Result. الحد الأدنى 20 حرفًا لكل جزء.</div>${ceEvidenceNames.map((n,i)=>{const x=ceState.evidence[i]||{};return `<article class="evidence-card ${ceEvidenceComplete(i)?'done':''}"><div class="evidence-title"><b>${String(i+1).padStart(2,'0')}</b><h5>${n}</h5><span>${ceEvidenceComplete(i)?'✓ STRUCTURE COMPLETE':'LOCKED'}</span></div><label>Situation<textarea data-ev="${i}" data-field="s" placeholder="ما المشكلة / السياق؟">${x.s||''}</textarea></label><label>Action<textarea data-ev="${i}" data-field="a" placeholder="ماذا فعلتِ أنتِ تحديدًا؟">${x.a||''}</textarea></label><label>Result<textarea data-ev="${i}" data-field="r" placeholder="ما النتيجة / القياس / القرار؟">${x.r||''}</textarea></label></article>`}).join('')}<button class="challenge-submit">SAVE EVIDENCE</button><div class="challenge-result"><div class="result-card"><b>${ceEvidenceCount()}/5 COMPLETE</b><p>PASS = 4/5. الموقع يتحقق من اكتمال structure فقط؛ صحة الادعاء يجب أن تكون قابلة للدفاع عنها في المقابلة.</p></div></div></div></div>`;
  document.body.appendChild(overlay);requestAnimationFrame(()=>overlay.classList.add('open'));
  const close=()=>{overlay.classList.remove('open');setTimeout(()=>overlay.remove(),180)};overlay.querySelector('.challenge-close').onclick=close;
  overlay.querySelector('.challenge-submit').onclick=()=>{overlay.querySelectorAll('textarea[data-ev]').forEach(t=>{const i=t.dataset.ev,f=t.dataset.field;ceState.evidence[i]=ceState.evidence[i]||{};ceState.evidence[i][f]=t.value.trim();});saveCE();close();renderCEGates();updateCEReadiness();};
}

createCELevel();
const ceNode=document.querySelector('#complaints .level.l1.available button');
if(ceNode)ceNode.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();openCELevel();});
