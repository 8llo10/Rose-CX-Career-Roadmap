// WORLD 04 · LEVEL 01 — Real-Time Analyst (RTA)
// WFM control-room level: live queue decisions, intraday recovery, adherence, Excel/WFM math, incidents, evidence and interview boss.

const RTA={
  skills:[
    ['Contact Center Fundamentals','CORE',['Inbound / Outbound','Voice / Chat / Email / Messaging','Back-office','Queue / SLA / Routing']],
    ['Queue Management','CORE',['Queue Depth','Oldest Contact','Backlog','Waiting Contacts','Queue Health']],
    ['ACD Fundamentals','CORE',['Agent States','Queues','Routing','Skills','Priorities','Call Distribution']],
    ['Real-Time Monitoring','CORE',['Live Dashboards','Thresholds','Alerts','Interval Monitoring']],
    ['Plan vs Actual','CORE',['Forecast vs Actual Volume','AHT','Workload','Staffing']],
    ['Service Level','CORE',['SL Target','Interval SL','Missed Intervals','Recovery']],
    ['ASA','CORE',['Average Speed of Answer','Staffing Impact','Queue Pressure']],
    ['AHT','CORE',['Talk','Hold','ACW','Workload Impact']],
    ['Abandonment','CORE',['Abandon Rate','Caller Tolerance','Queue Pressure']],
    ['Occupancy','CORE',['Workload vs Staffed Time','High / Low Occupancy Risk']],
    ['Schedule Adherence','CORE',['Scheduled State','Actual State','Out of Adherence']],
    ['Attendance','CORE',['Absence','Late','No-show','Unplanned Leave']],
    ['Shrinkage','CORE',['Planned','Unplanned','Breaks','Meetings','Coaching','Training','Absence']],
    ['Staffing Position','CORE',['Required','Scheduled','Available','Actual Staff']],
    ['Understaffing','CORE',['Gap Detection','Recovery Actions','Risk Prioritization']],
    ['Overstaffing','CORE',['Excess Capacity','Offline Work','Training / Coaching Opportunities']],
    ['Intraday Management','CORE',['Demand Changes','Staffing Changes','Interval Decisions','Recovery']],
    ['Intraday Reforecasting','CORE',['Run-rate','Actuals','Rest-of-day Forecast','Variance']],
    ['Schedule Adjustments','CORE',['Breaks','Lunches','Meetings','Training','Offline Activities']],
    ['Re-skilling','CORE',['Move Skills','Queue Support','Cross-skilled Agents']],
    ['Resource Reallocation','CORE',['Channel','Queue','LOB Redistribution']],
    ['Overtime / VTO Basics','WORKING KNOWLEDGE',['OT','Voluntary Time Off','Approval / Cost Awareness']],
    ['Exception Management','CORE',['Planned','Unplanned Known','Unplanned Unknown','Documentation']],
    ['Escalation Matrix','CORE',['Trigger','Severity','Owner','Action','Escalation']],
    ['Incident Management','CORE',['System Outage','Telephony Issue','CRM Issue','Demand Spike']],
    ['Business Continuity','CORE',['BCP','Failover','Alternate Routing','Emergency Staffing']],
    ['Omnichannel WFM','CORE',['Voice','Chat','Email','Deferred Work']],
    ['Chat Concurrency','WORKING KNOWLEDGE',['Concurrent Chats','Capacity Impact','Channel Trade-offs']],
    ['Forecasting Fundamentals','WORKING KNOWLEDGE',['Historical Volume','AHT','Trends','Seasonality']],
    ['Forecast Accuracy','WORKING KNOWLEDGE',['Variance','Bias','Accuracy','Plan vs Actual']],
    ['Scheduling Fundamentals','WORKING KNOWLEDGE',['Demand Curve','Coverage','Shift','Break Placement']],
    ['Staffing Mathematics','WORKING KNOWLEDGE',['Workload','Staffing Requirement','Shrinkage-adjusted HC']],
    ['Erlang C','NEXT LEVEL',['Staffing ↔ Service Level','Wait Time','Probability of Delay']],
    ['Multi-Skill Planning','POWER-UP',['Multi-skilled Agents','Skill Groups','Pooling']],
    ['Reporting','CORE',['Hourly','Intraday','Daily','Weekly']],
    ['Variance Analysis','CORE',['Volume Variance','AHT Variance','Staffing Variance','Adherence Variance']],
    ['Root Cause Analysis','CORE',['Volume','AHT','Staffing','Adherence','System','Process']],
    ['Action Log','CORE',['What Happened','Action','Owner','Time','Result']],
    ['Shift Handover','CORE',['Open Risks','Staffing','Incidents','Expected Events']],
    ['Microsoft Excel','CORE++',['Tables','PivotTables','XLOOKUP','INDEX/MATCH','IF/IFS','SUMIFS','COUNTIFS','AVERAGEIFS','SUMPRODUCT','Date/Time','Conditional Formatting','Charts','Dynamic Arrays']],
    ['Google Sheets','CORE',['Formulas','Pivots','Filters','Collaboration']],
    ['Power Query','POWER-UP',['Clean Exports','Merge Data','Repeatable Transformations']],
    ['Power BI','POWER-UP',['Operational Dashboards','Trends','Variance Views']],
    ['SQL','POWER-UP',['SELECT','WHERE','GROUP BY','JOIN','Operational Data']],
    ['VBA / Automation','FUTURE POWER-UP',['Report Automation','Repeated Tasks']],
    ['Data Visualization','CORE',['Charts','Heatmaps','Variance Views','Exception Views']],
    ['WFM Platforms','CORE',['NICE','Genesys','Verint','Calabrio']],
    ['CCaaS / Telephony','WORKING KNOWLEDGE',['Five9','Amazon Connect','Talkdesk','Cisco','Avaya Concepts']],
    ['Stakeholder Communication','CORE',['Operations','Team Leaders','WFM Planner','IT']],
    ['Real-Time Escalation Writing','CORE',['Metric','Impact','Action','Recommendation','Timestamp']],
    ['Decision Making Under Pressure','CORE',['Fast Evidence-led Decisions','Trade-offs','Escalation']],
    ['Pattern Recognition','CORE',['Noise vs Trend','Repeated Intervals','Emerging Risk']],
    ['Prioritization','CORE',['Multiple Queues','Multiple Incidents','Customer / Business Impact']],
    ['Attention to Detail','CORE',['Agent State Errors','Small Staffing Gaps','Interval Accuracy']],
    ['Business English','CORE',['Reports','Escalations','Handover','Meetings']],
    ['Professional Arabic','CORE',['Operational Updates','Escalations','Management Communication']],
    ['Continuous Improvement','CORE',['Recurring Issues','Action Review','Lessons Learned']],
    ['AI-enabled WFM','FUTURE-PROOF',['Automated Forecasting','Adherence Alerts','Intraday Automation']]
  ],
  learning:[
    {type:'FREE',title:'SWPP — Study Materials + Knowledge Assessment',desc:'WFM fundamentals and self-assessment from the Society of Workforce Planning Professionals.',url:'https://swpp.org/certification/study-materials/'},
    {type:'FREE',title:'SWPP — Managing Daily Performance',desc:'Direct RTA material: forecast vs actual, staffing position, schedule exceptions, intraday decisions and reforecasting.',url:'https://swpp.org/newsletter/managing-daily-performance/'},
    {type:'FREE',title:'WFM eLearning — WFM Fundamentals + RTA Tests',desc:'Practice-oriented WFM fundamentals and RTA / platform knowledge checks.',url:'https://www.wfmelearning.com/'},
    {type:'FREE',title:'ICMI — Modern Workforce Management Best Practices',desc:'Forecasting, scheduling, intraday management and omnichannel WFM concepts.',url:'https://www.icmi.com/resources/whitepapers/best-practices-for-modern-workforce-management'},
    {type:'FREE',title:'ICMI — Why Most Real-Time Teams Fail',desc:'Real-time execution discipline, ownership and the intraday control layer.',url:'https://www.icmi.com/resources/2026/why-most-real-time-teams-fail'},
    {type:'FREE',title:'NICE CXone — Workforce Management Documentation',desc:'Official product documentation for forecasting, scheduling, intraday management and real-time adherence.',url:'https://help.nicecxone.com/Content/workforcemanagement/welcometoworkforcemanagement.htm'},
    {type:'FREE',title:'Genesys — Real-Time Adherence View',desc:'Official view of real-time adherence concepts and how WFM teams inspect scheduled vs actual states.',url:'https://help.mypurecloud.com/articles/navigate-real-time-adherence-view/'},
    {type:'FREE',title:'Microsoft — Excel Help & Learning',desc:'Official Excel learning for formulas, PivotTables, lookup functions, charts and analysis.',url:'https://support.microsoft.com/en-us/excel/'},
    {type:'FREE',title:'Microsoft Learn — Prepare and Visualize Data with Power BI',desc:'Free path for cleaning, transforming and visualizing operational data in Power BI.',url:'https://learn.microsoft.com/en-us/training/paths/prepare-visualize-data-power-bi/'},
    {type:'FREE',title:'Microsoft Learn — Query with Transact-SQL',desc:'Free SQL foundation for later WFM Analyst / Senior WFM analytics.',url:'https://learn.microsoft.com/en-us/training/paths/get-started-querying-with-transact-sql/'},
    {type:'PAID',title:'ICMI — Workforce Management Principles',desc:'Starter paid course covering forecasting, staffing, shrinkage, scheduling, real-time management and reporting.',url:'https://www.icmi.com/training/courses/workforce-management-principles'},
    {type:'PREMIUM',title:'COPC® — Mastering Workforce Management',desc:'Full WFM program spanning forecasting, capacity, requirements, scheduling, real-time management and efficiency.',url:'https://www.copc.com/class-listing/copc-mastering-workforce-management-wfm/'},
    {type:'PREMIUM',title:'ICMI — Workforce Management Bootcamp',desc:'Deep WFM training path covering the end-to-end discipline and preparation for ICMI WFM professional assessment.',url:'https://www.icmi.com/training/courses/workforce-management-bootcamp'},
    {type:'PAID',title:'ICMI — Advanced Workforce Management',desc:'Later-stage training for difficult forecasts, non-phone workload, forecast accuracy, schedule efficiency and Operations partnership.',url:'https://www.icmi.com/training/courses/advanced-workforce-management'}
  ],
  credentials:[
    {code:'SWPP',title:'SWPP Associate — Managing Daily Staffing & Service',tag:'TOP PICK · RTA',when:'NOW',desc:'أقرب credential مباشرة لعمل الـRTA: intraday staffing/service management مع assessment ومشروع ضمن مسار SWPP Associate.',url:'https://members.swpp.org/store/viewproduct.aspx?id=24639330'},
    {code:'COPC',title:'COPC® Workforce Management',tag:'TOP PICK · SAUDI / GLOBAL',when:'NOW / PREMIUM',desc:'Credential / training قوي في WFM end-to-end ويغطي real-time management مع forecasting, capacity, requirements and scheduling.',url:'https://www.copc.com/class-listing/copc-mastering-workforce-management-wfm/'},
    {code:'ICMI',title:'ICMI Workforce Management Professional',tag:'HIGH-VALUE',when:'NOW / PREMIUM',desc:'مسار WFM شامل. مناسب إذا كانت الميزانية تسمح وتريدين credential متخصصًا بدل دورات عامة.',url:'https://www.icmi.com/training/courses/workforce-management-bootcamp'},
    {code:'GEN',title:'Genesys Cloud CX: Workforce Management',tag:'PLATFORM',when:'IF COMPANY USES GENESYS',desc:'Vendor-specific. خذيه فقط إذا جهة العمل تستخدم Genesys أو تستهدفين وظائف تطلبها.',url:'https://www.credly.com/org/genesys/badge/genesys-cloud-cx-workforce-management-certification'},
    {code:'MO-211',title:'Microsoft Office Specialist: Excel Expert',tag:'OPTIONAL PROOF',when:'REPORTING / EXCEL',desc:'إثبات رسمي لمستوى Excel المتقدم؛ الاختبار العملي والقدرة على بناء WFM workbook أهم من مجرد الشهادة.',url:'https://learn.microsoft.com/en-us/credentials/certifications/exams/mo-211/'},
    {code:'PL-300',title:'Microsoft Certified: Power BI Data Analyst Associate',tag:'POWER-UP',when:'WFM ANALYTICS',desc:'ليست شرط RTA، لكنها قوية عند الانتقال إلى WFM Analyst وصناعة dashboards وتحليلات للإدارة.',url:'https://learn.microsoft.com/en-us/credentials/certifications/data-analyst-associate/'},
    {code:'S&S',title:'SWPP Associate — Staffing & Scheduling',tag:'NEXT LEVEL',when:'WFM ANALYST / SCHEDULER',desc:'أفضل توقيت لها في Level 02 عندما يصبح التركيز على staffing, scheduling and optimization.',url:'https://swpp.org/certification/'},
    {code:'CWPP',title:'Certified Workforce Planning Professional (CWPP)',tag:'FUTURE BOSS',when:'AFTER BROADER WFM EXPERIENCE',desc:'Credential أوسع يغطي planning/strategy, staffing/scheduling, daily staffing/service and a project. لا نحرقه في أول Level.',url:'https://swpp.org/certification/'},
    {code:'VENDOR',title:'NICE / Verint / Calabrio Platform Training',tag:'CONDITIONAL',when:'ONLY IF USED',desc:'Platform literacy أولًا ثم تخصصي في منصة الشركة. لا تجمعي شهادات كل vendors.',url:'https://help.nicecxone.com/Content/workforcemanagement/welcometoworkforcemanagement.htm'}
  ],
  modules:[
    {code:'KSA',title:'Saudi Workforce Compliance',tag:'REQUIRED KNOWLEDGE',when:'SAUDI OPERATIONS',desc:'Working hours, shifts, breaks, Ramadan scheduling, overtime and weekly-rest rules يجب فهمها عند بناء أو تعديل coverage. تحققي دائمًا من النسخة الرسمية الحالية.',url:'https://www.hrsd.gov.sa/%D8%B4%D8%B1%D9%88%D8%B7-%D8%A7%D9%84%D8%B9%D9%85%D9%84-%D9%88%D8%B8%D8%B1%D9%88%D9%81%D9%87'},
    {code:'PDPL',title:'Saudi PDPL Awareness',tag:'REQUIRED KNOWLEDGE',when:'EMPLOYEE / CUSTOMER DATA',desc:'RTA/WFM يتعامل مع attendance, agent states and performance reports؛ افهمي privacy, access and data-handling obligations.',url:'https://dgp.sdaia.gov.sa/wps/portal/pdp/knowledgecenter'},
    {code:'WEST',title:'Makkah / Jeddah Peak & Seasonal Operations',tag:'WESTERN REGION POWER-UP',when:'HAJJ / UMRAH / RAMADAN / TRAVEL',desc:'تدربي على demand spikes, multilingual demand, 24×7 coverage, campaign/holiday peaks and rapid intraday recovery. هذا Regional Power-up وليس requirement عالميًا.',url:'https://swpp.org/newsletter/managing-daily-performance/'}
  ]
};

const rtaQueue=[
  {metrics:[['SL','58%','danger'],['ASA','91s','danger'],['VOL vs FCST','+24%','danger'],['AHT','+4%','warn'],['STAFF','-7','danger'],['ADH','94%','good']],q:'10:30 — Voice queue ينهار. ما أول قرار RTA مهني؟',a:['ألغي كل breaks لبقية اليوم فورًا','أعمل triage للـvolume/AHT/staffing/adherence ثم أبدأ actions المسموحة حسب impact وأصعّد gap الذي لا يمكن تغطيته','أنتظر interval آخر حتى أتأكد','أطلب من Agents تقصير المكالمات'],c:1},
  {metrics:[['SL','86%','good'],['ASA','18s','good'],['VOL vs FCST','-16%','good'],['AHT','-2%','good'],['STAFF','+9','warn'],['ADH','96%','good']],q:'12:00 — لديك overstaffing واضح. أفضل استخدام للـcapacity؟',a:['نترك الجميع Available مهما كان','نبحث عن offline work / training / coaching / backlog أو VTO وفق policy مع حماية الفترات القادمة','نرسل 9 موظفين للبيت بدون موافقة','نخفض forecast حتى يطابق الواقع'],c:1},
  {metrics:[['CHAT SL','69%','danger'],['CONCURRENCY','2.0','warn'],['CHAT VOL','+31%','danger'],['VOICE SL','83%','good'],['STAFF','PLAN','good'],['BACKLOG','HIGH','danger']],q:'14:15 — Chat فقط متأثر بينما Voice مستقر. ماذا تفحصين قبل نقل موارد؟',a:['أنقل كل Voice agents فورًا','أفحص skills, chat concurrency, eligible cross-skilled agents, channel priority وتأثير النقل على Voice ثم أعمل reallocation محسوب','أغلق chat','أرفع AHT target'],c:1},
  {metrics:[['SL','72%','danger'],['VOL vs FCST','+2%','good'],['AHT','+19%','danger'],['STAFF','PLAN','good'],['ADH','97%','good'],['OUTAGE','NONE','good']],q:'16:00 — Volume وstaffing طبيعيان لكن SL منخفض. أقوى hypothesis أولي؟',a:['Forecast volume فاشل حتمًا','AHT/handle-time driver ارتفع؛ أبحث عن سبب العملية/النظام/نوع contacts قبل طلب staffing إضافي','Adherence سيئ','نحتاج VTO'],c:1},
  {metrics:[['SL','64%','danger'],['VOL','PLAN','good'],['AHT','PLAN','good'],['REQ STAFF','42','warn'],['ACTUAL','34','danger'],['ABSENCE','8','danger']],q:'18:30 — السبب الأساسي ظاهر في الشاشة. ما الـRTA update الأقوى؟',a:['SLA سيئ اليوم','18:30: actual staffing 34 vs required 42 بسبب 8 unplanned absences; SL 64%. نفذنا break moves / re-skill المتاح ونحتاج decision على OT/coverage حسب escalation matrix','الموظفين غايبين وهذا سبب المشكلة','ننتظر نهاية اليوم'],c:1}
];

const rtaRecovery=[
  {q:'Forecast لباقي اليوم ارتفع 18% وناقص 12 Agent. رتبي التفكير الصحيح.',a:['OT أولًا دائمًا','Quantify gap by interval → check available levers/skills/breaks/offline work → protect critical queues → request approved coverage/OT if still needed → log and monitor result','Cancel all training for month','Lower SLA target'],c:1},
  {q:'أي action غالبًا الأقل خطورة كخطوة intraday مبكرة إذا كانت policy تسمح؟',a:['تحريك break محدود داخل نافذة آمنة بعد فحص coverage','إلغاء كل breaks','إجبار Agents على overtime','تغيير routing بدون فهم skills'],c:0},
  {q:'متى تعملين intraday reforecast؟',a:['فقط نهاية الشهر','عندما actual volume/AHT/run-rate يبتعد ماديًا عن plan ويؤثر على توقع بقية اليوم','كل دقيقة بدون سبب','فقط إذا طلب المدير'],c:1},
  {q:'بعد recovery action تحسن SL من 61% إلى 78%. ماذا بعد؟',a:['نغلق الموضوع فورًا','نستمر monitoring ونوثق action/time/result ونفحص sustainability والفترات القادمة','نعلن نجاح كامل','نلغي forecast'],c:1},
  {q:'أي قرار يوضح فهم trade-off؟',a:['نقل 10 Agents من Email إلى Voice بدون فحص backlog','نقل عدد محدود من cross-skilled agents بعد مقارنة Voice risk مقابل Email aging ثم تحديد review time لإرجاعهم','إيقاف Email ليوم كامل','رفع concurrency للجميع بدون حد'],c:1}
];

const rtaAdherence=[
  {agents:[['A01','Break 10:00','Available 10:08'],['A02','Available','Available'],['A03','Lunch 10:00','Lunch']],q:'من يحتاج investigation كـOut-of-Adherence محتمل؟',a:['A01 فقط','A02 فقط','A03 فقط','الجميع'],c:0},
  {agents:[['A11','Available','ACW 00:11'],['A12','Training','Training'],['A13','Available','Offline 00:17']],q:'أي حالة أوضح exception تحتاج تحقق سريع؟',a:['A12','A13','لا أحد','A11 وA12 فقط'],c:1},
  {agents:[['A21','Meeting','Available'],['A22','Available','Available'],['A23','Break','Break']],q:'A21 رجع للـqueue لأن SL انهار بعد موافقة Operations. كيف تسجلينها؟',a:['Non-adherence سلبي تلقائيًا','Approved intraday schedule exception / adjustment مع timestamp وسبب','غياب','نحذف schedule الأصلي'],c:1},
  {agents:[['A31','Available','Available'],['A32','Available','Not Ready 00:22'],['A33','Coaching','Coaching']],q:'ما التصرف الأفضل مع A32؟',a:['نعتبره مخالفة فورًا','نراجع reason code / system state / approved exception ثم نطبق process قبل التصعيد','نغير حالته يدويًا بدون توثيق','نتجاهله'],c:1},
  {agents:[['A41','Lunch','Lunch'],['A42','Available','Available'],['A43','Available','Available']],q:'Adherence 98% لكن SLA 63%. ماذا تستنتجين؟',a:['Adherence ليس root cause بالضرورة؛ افحص volume/AHT/staffing/skills/incidents','Adherence dashboard خطأ','نعاقب الفريق','نلغي lunch'],c:0}
];

const rtaExcel=[
  {q:'عندك Agent ID في A2 وتريدين جلب Team من جدول مرجعي. أفضل function حديثة؟',a:['XLOOKUP','COUNTIFS','SUMPRODUCT','TEXTJOIN'],c:0},
  {q:'تريدين حساب عدد intervals التي SL فيها أقل من 80% وVolume أعلى من Forecast. الأنسب؟',a:['COUNTIFS','AVERAGE','LEFT','CONCAT'],c:0},
  {q:'عندك exports يومية متكررة بنفس structure وتحتاج تنظيف ودمج قابل للتحديث. أقوى Power-up؟',a:['Manual copy/paste','Power Query','Word','Screenshot'],c:1},
  {q:'أفضل أداة سريعة لتلخيص SL وVolume وAHT حسب Queue وInterval؟',a:['PivotTable','Find & Replace','Spell Check','Page Layout'],c:0},
  {q:'إذا Required Staff في B2 وActual Staff في C2، Staffing Gap بصيغة موجبة للنقص يمكن أن يكون:',a:['=MAX(B2-C2,0)','=B2+C2','=C2/B2','=COUNT(B2:C2)'],c:0}
];

const rtaMath=[
  {q:'Required Staff = 40 وActual Staff = 34. ما staffing gap؟',a:['4','6','34','74'],c:1},
  {q:'إذا 90 Agent scheduled و81 منهم في الحالة الصحيحة في وقت القياس، adherence المبسط = ؟',a:['81%','90%','111%','9%'],c:1},
  {q:'Base requirement = 80 productive FTE وshrinkage = 20%. كم scheduled HC تقريبي لتغطية requirement؟',a:['64','80','96','100'],c:3},
  {q:'Forecast volume = 1,000 وActual = 1,180. variance مقابل forecast = ؟',a:['+18%','-18%','+180%','+8%'],c:0},
  {q:'AHT ارتفع 10% مع نفس volume. ماذا يحدث غالبًا للworkload المطلوب؟',a:['ينخفض','يرتفع تقريبًا مع الزيادة إذا بقيت العوامل الأخرى ثابتة','لا يتغير أبدًا','يصبح صفرًا'],c:1}
];

const rtaIncident=[
  {q:'CRM outage بدأ 09:42 والـAHT يرتفع والـqueue يتراكم. أول package تصعيد قوي؟',a:['“النظام خربان”','Start time + affected queues/users + symptoms + KPI impact + workaround + IT ticket/owner + next update time','انتظار ساعة','إرسال screenshot فقط'],c:1},
  {q:'Telephony issue يؤثر على Queue واحدة فقط. ماذا تفعلين؟',a:['أعلن BCP لكل الشركة','أتحقق من scope/routing/skills، أوثق impact، أبلغ owner المناسب وأستخدم alternate routing/failover إذا معتمد','أغلق كل queues','أغير forecast'],c:1},
  {q:'بعد outage انتهى، ما الذي يجب ألا يضيع؟',a:['Action log + recovery timeline + residual backlog + handover + lesson/RCA trigger','اسم الموظف الذي لاحظه','لون dashboard','عدد الرسائل في القروب'],c:0},
  {q:'Demand spike بسبب حملة Marketing غير مخطط لها. ما التصرف المهني؟',a:['لوم Marketing فقط','Stabilize service الآن ثم log event وشارك impact مع Planning/Operations لتحسين event calendar والforecast inputs','خفض SL target','تجاهل الحملة'],c:1},
  {q:'في handover للوردية التالية، أي محتوى أهم؟',a:['تحية فقط','Open risks + staffing position + incidents + backlog + actions already taken + expected events + owners','كل تفاصيل اليوم بلا ترتيب','CSAT الشهري فقط'],c:1}
];

const rtaInterview=[
  {q:'Interview Boss: “SLA has been below target for 3 intervals. Walk me through your investigation.” أقوى جواب؟',a:['أطلب OT مباشرة','أقارن actual vs forecast volume/AHT، required vs actual staffing، adherence/shrinkage، skills/routing/incidents ثم أحدد action وأراقب result','ألوم agents','أغير SLA'],c:1},
  {q:'“Tell me about a time you made a real-time decision under pressure.” أفضل structure؟',a:['قصة عامة','Situation → live metrics/evidence → options/trade-off → action → measured result → lesson','أذكر أني سريعة فقط','أقول ما صار لي موقف'],c:1},
  {q:'“What is the difference between RTA and WFM Scheduler?”',a:['لا فرق','RTA يدير intraday execution وreal-time adherence/service؛ Scheduler يركز أعمق على staffing/scheduling models and future coverage','RTA أعلى من WFM Manager','Scheduler يراقب المكالمات فقط'],c:1},
  {q:'“Adherence is excellent but SLA is poor. What does that tell you?”',a:['Adherence useless','It removes one likely cause but does not prove root cause; inspect demand, AHT, staffing requirement, skills and incidents','Agents need warning','Forecast is always wrong'],c:1},
  {q:'“Why should Operations trust your escalation?”',a:['لأن منصبي RTA','لأنها timestamped, quantified, evidence-led, فيها impact/actions/owner/recommendation وليست alarm بلا context','لأني أرسل كثير','لأن dashboard ملون'],c:1}
];

const rtaEvidenceNames=['Live Queue Decision Log','Intraday Recovery Plan','Adherence / Exception Analysis','Excel or WFM Dashboard','Incident + Shift Handover'];
const rtaStoreKey='rose_rta_level_v1';
let rtaState={queue:null,recovery:null,adherence:null,excel:null,math:null,incident:null,interview:null,evidence:{}};
try{const saved=JSON.parse(localStorage.getItem(rtaStoreKey)||'null');if(saved)rtaState={...rtaState,...saved,evidence:saved.evidence||{}}}catch(e){}
const saveRTA=()=>localStorage.setItem(rtaStoreKey,JSON.stringify(rtaState));

function rtaCourseCard(x){return `<article class="quest-card ${x.type==='FREE'?'free':x.type==='PREMIUM'?'premium':''}"><div class="quest-top"><h5>${x.title}</h5><span class="quest-badge">${x.type}</span></div><p>${x.desc}</p><a class="quest-link" href="${x.url}" target="_blank" rel="noopener">OPEN OFFICIAL / COURSE PAGE ↗</a></article>`}
function rtaCredCard(x,region=false){return `<article class="quest-card ${region?'rta-region':''}"><div class="credential"><div class="cred-icon">${x.code}</div><div><div class="quest-top"><h5>${x.title}</h5><span class="quest-badge">${x.tag}</span></div><p>${x.desc}</p><div class="cred-meta"><span>${x.when}</span></div><a class="quest-link" href="${x.url}" target="_blank" rel="noopener">OFFICIAL SOURCE ↗</a></div></div></article>`}

function createRTALevel(){
  if(document.getElementById('rtaAnalystLevel'))return;
  const d=document.createElement('div');d.className='level-drawer';d.id='rtaAnalystLevel';
  d.innerHTML=`<div class="level-shell"><header class="level-head"><div class="level-head-row"><button class="tl-close" aria-label="Close">×</button><div class="tl-title"><span class="tl-kicker">WORLD 04 · LEVEL 01</span><h2>Real-Time Analyst — RTA</h2></div><div class="tl-score"><div><b id="rtaScore">0%</b><small>READINESS</small></div></div></div><div class="tl-status"><span class="tl-status-pill" id="rtaStatus">⚔ IN TRAINING</span><div class="tl-progress"><i id="rtaBar"></i></div></div></header><nav class="level-tabs"><button class="level-tab active" data-tab="brief">BRIEFING</button><button class="level-tab" data-tab="skills">SKILLS</button><button class="level-tab" data-tab="learn">LEARN</button><button class="level-tab" data-tab="certs">CREDENTIALS</button><button class="level-tab" data-tab="gates">GATES</button></nav><main class="level-content"><section class="tl-panel active" data-panel="brief" id="rtaBrief"></section><section class="tl-panel" data-panel="skills" id="rtaSkills"></section><section class="tl-panel" data-panel="learn" id="rtaLearn"></section><section class="tl-panel" data-panel="certs" id="rtaCerts"></section><section class="tl-panel" data-panel="gates" id="rtaGates"></section></main></div>`;
  document.body.appendChild(d);renderRTAStatic();renderRTAGates();updateRTAReadiness();
  d.querySelector('.tl-close').onclick=closeRTALevel;d.querySelectorAll('.level-tab').forEach(b=>b.onclick=()=>switchRTATab(b.dataset.tab));
}

function renderRTAStatic(){
  document.getElementById('rtaBrief').innerHTML=`<div class="mission-hero"><span class="rank">TARGET ROLE · WFM CONTROL ROOM</span><h3>Real-Time Analyst — RTA</h3><p>أول مستوى تشغيلي داخل Workforce Management: تراقبين الـqueues والـagents لحظة بلحظة، تقارنين Actual vs Forecast، تكتشفين خطر الـSLA وتنفذين intraday actions محسوبة بدل ردود الفعل العشوائية.</p><div class="market-chip">● DIRECT PIVOT · CONTACT CENTER EXPERIENCE IS RELEVANT</div></div><div class="section-label"><h4>RTA ≠ WFM كله</h4><span>LEVEL BOUNDARY</span></div><div class="rta-console"><div class="rta-console-head"><h5>Career Control Route</h5><span class="rta-live">LIVE PATH</span></div><div class="rta-route"><span>RTA</span><i>›</i><span>WFM Analyst / Scheduler</span><i>›</i><span>Planner / Senior WFM</span><i>›</i><span>Supervisor</span><i>›</i><span>Manager</span></div><div class="rta-signal">RTA يركز على real-time execution. Level 02 يدخل أعمق في Forecasting + Erlang C + Capacity Planning + Scheduling Optimization + Multi-skill + What-if Modeling.</div></div><div class="section-label"><h4>Win condition</h4><span>8 CONTROL-ROOM GATES · ALL MUST PASS</span></div><div class="gate-grid"><div class="gate-card"><b>80%</b><h5>Live Queue Control</h5><p>Read live metrics and choose the right intervention.</p></div><div class="gate-card"><b>80%</b><h5>Intraday Recovery</h5><p>Recover service without reckless actions.</p></div><div class="gate-card"><b>80%</b><h5>Adherence Hunt</h5><p>Scheduled vs actual states and exceptions.</p></div><div class="gate-card"><b>80%</b><h5>Excel Command</h5><p>Formulas, pivots, lookups and staffing gaps.</p></div><div class="gate-card"><b>80%</b><h5>WFM Math</h5><p>Variance, shrinkage, staffing and adherence.</p></div><div class="gate-card"><b>80%</b><h5>Incident Room</h5><p>Outage, impact, escalation and handover.</p></div><div class="gate-card"><b>4/5</b><h5>Evidence Vault</h5><p>Prove decisions, analysis and operational work.</p></div><div class="gate-card"><b>75%</b><h5>Interview Boss</h5><p>Defend RTA judgment under pressure.</p></div></div><div class="rta-next-level"><span>NEXT LEVEL · LOCKED</span><h5>WFM Analyst / Scheduler</h5><p>يفتح بعد بناء أساس RTA. هناك تبدأ forecasting, Erlang C, capacity, scheduling optimization and what-if modeling بعمق.</p></div>`;
  document.getElementById('rtaSkills').innerHTML=`<div class="mission-hero"><span class="rank">SKILL TREE</span><h3>Real-Time Operations Capability Map</h3><p>مو checklist للحفظ. ركزي أولًا على CORE ثم WORKING KNOWLEDGE. الـPOWER-UPS تبني الطريق لـWFM Analyst ولا تمنعك من التقديم على RTA.</p></div><div class="section-label"><h4>Required capabilities</h4><span>${RTA.skills.length} DOMAINS</span></div><div class="skill-tree">${RTA.skills.map(s=>`<article class="skill-card"><div class="skill-card-top"><h5>${s[0]}</h5><span class="skill-tier">${s[1]}</span></div><div class="skill-items">${s[2].map(x=>`<span>${x}</span>`).join('')}</div></article>`).join('')}</div>`;
  document.getElementById('rtaLearn').innerHTML=`<div class="mission-hero"><span class="rank">QUEST LOG</span><h3>Learning Path</h3><p>ابدئي بـSWPP + Excel + platform literacy. لا تدفعين في أكثر من WFM program بنفس الوقت؛ اختاري paid path واحد حسب الميزانية والهدف.</p></div><div class="section-label"><h4>Free missions</h4><span>START HERE</span></div><div class="quest-list">${RTA.learning.filter(x=>x.type==='FREE').map(rtaCourseCard).join('')}</div><div class="section-label"><h4>Paid / premium missions</h4><span>CHOOSE ONE PATH</span></div><div class="quest-list">${RTA.learning.filter(x=>x.type!=='FREE').map(rtaCourseCard).join('')}</div>`;
  document.getElementById('rtaCerts').innerHTML=`<div class="mission-hero"><span class="rank">POWER-UPS</span><h3>WFM Credentials & Saudi Modules</h3><p>ما فيه شهادة واحدة شرط عالمي للـRTA. الأولوية للمهارة العملية + Excel + real-time judgment، ثم credential متخصص أو منصة الشركة.</p></div><div class="section-label"><h4>Credential vault</h4><span>PRIORITIZED</span></div><div class="quest-list">${RTA.credentials.map(x=>rtaCredCard(x)).join('')}</div><div class="section-label"><h4>Saudi / Western Region modules</h4><span>LOCAL POWER-UPS</span></div><div class="quest-list">${RTA.modules.map(x=>rtaCredCard(x,true)).join('')}</div><div class="section-label"><h4>Platform rule</h4><span>DO NOT COLLECT VENDORS</span></div><div class="rta-platforms"><div class="rta-platform"><b>NICE</b><small>Learn if used</small></div><div class="rta-platform"><b>Genesys</b><small>Learn if used</small></div><div class="rta-platform"><b>Verint</b><small>Learn if used</small></div><div class="rta-platform"><b>Calabrio</b><small>Learn if used</small></div></div><div class="source-note">Platform literacy → identify employer stack → specialize there. لا تجمعي vendor certificates لمجرد العدد.</div>`;
}

function switchRTATab(tab){const d=document.getElementById('rtaAnalystLevel');d.querySelectorAll('.level-tab').forEach(x=>x.classList.toggle('active',x.dataset.tab===tab));d.querySelectorAll('.tl-panel').forEach(x=>x.classList.toggle('active',x.dataset.panel===tab));d.querySelector('.level-content').scrollTop=0}
function openRTALevel(){createRTALevel();document.getElementById('rtaAnalystLevel').classList.add('open');document.body.classList.add('level-open');document.body.style.overflow='hidden';if(navigator.vibrate)navigator.vibrate([20,30,20])}
function closeRTALevel(){document.getElementById('rtaAnalystLevel').classList.remove('open');document.body.classList.remove('level-open');document.body.style.overflow=''}
function rtaEvidenceComplete(i){const x=rtaState.evidence[i];return x&&['s','a','r'].every(k=>(x[k]||'').trim().length>=20)}
function rtaEvidenceCount(){return rtaEvidenceNames.filter((_,i)=>rtaEvidenceComplete(i)).length}
function rtaReadiness(){const ev=rtaEvidenceCount()/5*100;return Math.round(Math.min(rtaState.queue||0,100)*.15+Math.min(rtaState.recovery||0,100)*.14+Math.min(rtaState.adherence||0,100)*.12+Math.min(rtaState.excel||0,100)*.12+Math.min(rtaState.math||0,100)*.12+Math.min(rtaState.incident||0,100)*.13+ev*.10+Math.min(rtaState.interview||0,100)*.12)}
function rtaAllPassed(){return (rtaState.queue||0)>=80&&(rtaState.recovery||0)>=80&&(rtaState.adherence||0)>=80&&(rtaState.excel||0)>=80&&(rtaState.math||0)>=80&&(rtaState.incident||0)>=80&&rtaEvidenceCount()>=4&&(rtaState.interview||0)>=75}
function rtaReadyBanner(){const pass=rtaAllPassed();return `<div class="ready-banner ${pass?'':'locked'}"><div class="boss-crown">${pass?'♛':'◇'}</div><h4>${pass?'LEVEL PASSED · READY FOR RTA':'CONTROL ROOM LOCKED'}</h4><p>${pass?'اجتزت معيار الجاهزية الداخلي لـReal-Time Analyst. هذا يعني Ready to Apply وليس ضمان توظيف؛ أدوات الشركة، المقابلة ومتطلبات القطاع تبقى مستقلة.':'اجتز كل Control-Room Gate بالحد الأدنى المطلوب لفتح READY FOR RTA.'}</p></div>`}
function updateRTAReadiness(){const score=rtaReadiness(),el=document.getElementById('rtaScore');if(!el)return;el.textContent=score+'%';document.getElementById('rtaBar').style.width=score+'%';const s=document.getElementById('rtaStatus');if(rtaAllPassed())s.textContent='🏆 READY TO APPLY';else if(score>=70)s.textContent='◐ ALMOST READY';else s.textContent='⚔ IN TRAINING';saveRTA()}

function renderRTAGates(){
  const eCount=rtaEvidenceCount();
  const gate=(name,key,pass,desc)=>`<article class="gate-card ${pass?'pass':''}"><b>${key==='evidence'?eCount+'/5':rtaState[key]===null||rtaState[key]===undefined?'—':rtaState[key]+'%'}</b><h5>${name}</h5><p>${desc}</p><button class="gate-start" data-rta-gate="${key}">${key==='evidence'?'BUILD EVIDENCE':'START / RETRY'}</button></article>`;
  document.getElementById('rtaGates').innerHTML=`<div class="mission-hero"><span class="rank">WFM CONTROL ROOM</span><h3>Readiness Gates</h3><p>ما يكفي تعرفين معنى SLA وAHT. لازم تقرئين الشاشة، تشخصين السبب، تختارين action، تحسبين gap، توثقين القرار وتدافعين عنه.</p></div><div class="gate-grid">${gate('Live Queue Control','queue',(rtaState.queue||0)>=80,'Five live intervals: metrics → diagnosis → action.')}${gate('Intraday Recovery','recovery',(rtaState.recovery||0)>=80,'Under/overstaffing, reforecast and recovery levers.')}${gate('Adherence Hunt','adherence',(rtaState.adherence||0)>=80,'Scheduled vs actual states and approved exceptions.')}${gate('Excel Command Center','excel',(rtaState.excel||0)>=80,'Lookups, COUNTIFS, PivotTables and staffing gaps.')}${gate('WFM Math','math',(rtaState.math||0)>=80,'Staffing, shrinkage, adherence and variance.')}${gate('Incident Room','incident',(rtaState.incident||0)>=80,'Outages, impact package, BCP and handover.')}${gate('Evidence Vault','evidence',eCount>=4,'Prove operational work in 4 of 5 categories.')}${gate('Interview Boss','interview',(rtaState.interview||0)>=75,'RTA judgment, trade-offs and communication.')}</div>${rtaReadyBanner()}`;
  document.querySelectorAll('[data-rta-gate]').forEach(b=>b.onclick=()=>openRTAGate(b.dataset.rtaGate));updateRTAReadiness();
}

function rtaMissionTip(key){const tips={queue:'NEXT MISSION: راجعي Plan vs Actual + SL/ASA/AHT + staffing position ثم أعيدي Live Queue Control.',recovery:'NEXT MISSION: اكتبي playbook فيه levers مرتبة: breaks/offline work → re-skill → coverage/OT approvals → monitor result.',adherence:'NEXT MISSION: تدربي على Scheduled vs Actual states وفرق non-adherence عن approved schedule exception.',excel:'NEXT MISSION: ابنِ workbook فيه XLOOKUP + COUNTIFS + PivotTable + staffing gap + conditional formatting.',math:'NEXT MISSION: راجعي shrinkage-adjusted HC, forecast variance, adherence and staffing gap calculations.',incident:'NEXT MISSION: اكتبي outage update من 7 عناصر: start time, scope, symptom, KPI impact, workaround, owner, next update.',interview:'NEXT MISSION: جاوبي بصوت عالٍ باستخدام Situation → Metrics → Options → Action → Result → Lesson.'};return tips[key]||'راجعي Skill Tree ثم أعيدي المهمة.'}

function openRTAGate(key){
  if(key==='evidence')return openRTAEvidence();
  const sets={queue:['LIVE QUEUE CONTROL',rtaQueue,80],recovery:['INTRADAY RECOVERY',rtaRecovery,80],adherence:['ADHERENCE HUNT',rtaAdherence,80],excel:['EXCEL COMMAND CENTER',rtaExcel,80],math:['WFM MATH',rtaMath,80],incident:['INCIDENT ROOM',rtaIncident,80],interview:['INTERVIEW BOSS',rtaInterview,75]};
  const [title,qs,pass]=sets[key];const overlay=document.createElement('div');overlay.className='challenge-overlay';
  overlay.innerHTML=`<div class="challenge-box"><div class="challenge-head"><div><span class="rank">${key==='interview'?'BOSS FIGHT':'CONTROL-ROOM GATE'}</span><h3>${title}</h3></div><button class="challenge-close">×</button></div><div class="challenge-body">${qs.map((x,i)=>`<article class="challenge-q"><b>${String(i+1).padStart(2,'0')}</b>${x.metrics?`<div class="rta-console"><div class="rta-console-head"><h5>INTERVAL ${String(i+1).padStart(2,'0')}</h5><span class="rta-live">LIVE</span></div><div class="rta-metrics">${x.metrics.map(m=>`<div class="rta-metric ${m[2]}"><small>${m[0]}</small><b>${m[1]}</b></div>`).join('')}</div></div>`:''}${x.agents?`<div class="rta-adherence-table">${x.agents.map(a=>`<div class="rta-agent"><b>${a[0]}</b><span>PLAN: ${a[1]}</span><strong>ACTUAL: ${a[2]}</strong></div>`).join('')}</div>`:''}<h5>${x.q}</h5><div class="challenge-options">${x.a.map((a,j)=>`<label><input type="radio" name="rta_${key}_${i}" value="${j}"><span>${a}</span></label>`).join('')}</div></article>`).join('')}<button class="challenge-submit">SUBMIT MISSION</button><div class="challenge-result"></div></div></div>`;
  document.body.appendChild(overlay);requestAnimationFrame(()=>overlay.classList.add('open'));const close=()=>{overlay.classList.remove('open');setTimeout(()=>overlay.remove(),180)};overlay.querySelector('.challenge-close').onclick=close;
  overlay.querySelector('.challenge-submit').onclick=()=>{let correct=0,answered=0;qs.forEach((x,i)=>{const pick=overlay.querySelector(`input[name="rta_${key}_${i}"]:checked`);if(pick){answered++;if(+pick.value===x.c)correct++}});const score=Math.round(correct/qs.length*100),ok=score>=pass;rtaState[key]=score;saveRTA();const result=overlay.querySelector('.challenge-result');result.innerHTML=`<div class="result-card ${ok?'pass':'fail'}"><b>${ok?'GATE CLEARED':'RETRY REQUIRED'} · ${score}%</b><p>${answered<qs.length?'بعض الأسئلة بدون إجابة. ':''}${ok?'تم اجتياز هذه البوابة.':`الحد المطلوب ${pass}%. ${rtaMissionTip(key)}`}</p></div>`;renderRTAGates();updateRTAReadiness();result.scrollIntoView({behavior:'smooth',block:'center'})};
}

function openRTAEvidence(){
  const overlay=document.createElement('div');overlay.className='challenge-overlay';
  overlay.innerHTML=`<div class="challenge-box"><div class="challenge-head"><div><span class="rank">EVIDENCE VAULT</span><h3>Prove the Control-Room Work</h3></div><button class="challenge-close">×</button></div><div class="challenge-body"><div class="source-note">استخدمي أمثلة حقيقية من خبرتك أو Portfolio simulation بدون بيانات موظفين/عملاء أو معلومات سرية. لكل Evidence: Situation → Action → Result. الحد الأدنى 20 حرفًا لكل جزء.</div>${rtaEvidenceNames.map((n,i)=>{const x=rtaState.evidence[i]||{};return `<article class="evidence-card ${rtaEvidenceComplete(i)?'done':''}"><div class="evidence-title"><b>${String(i+1).padStart(2,'0')}</b><h5>${n}</h5><span>${rtaEvidenceComplete(i)?'✓ STRUCTURE COMPLETE':'LOCKED'}</span></div><label>Situation<textarea data-rta-ev="${i}" data-field="s" placeholder="ما الـqueue / gap / incident أو السياق؟">${x.s||''}</textarea></label><label>Action<textarea data-rta-ev="${i}" data-field="a" placeholder="ما القرار الذي اتخذتِه ولماذا؟">${x.a||''}</textarea></label><label>Result<textarea data-rta-ev="${i}" data-field="r" placeholder="ما الذي تغير؟ KPI / coverage / risk / lesson؟">${x.r||''}</textarea></label></article>`}).join('')}<button class="challenge-submit">SAVE EVIDENCE</button><div class="challenge-result"><div class="result-card"><b>${rtaEvidenceCount()}/5 COMPLETE</b><p>PASS = 4/5. الموقع يتحقق من اكتمال structure فقط؛ صحة الادعاء يجب أن تكون قابلة للدفاع عنها في المقابلة.</p></div></div></div></div>`;
  document.body.appendChild(overlay);requestAnimationFrame(()=>overlay.classList.add('open'));const close=()=>{overlay.classList.remove('open');setTimeout(()=>overlay.remove(),180)};overlay.querySelector('.challenge-close').onclick=close;
  overlay.querySelector('.challenge-submit').onclick=()=>{overlay.querySelectorAll('textarea[data-rta-ev]').forEach(t=>{const i=t.dataset.rtaEv,f=t.dataset.field;rtaState.evidence[i]=rtaState.evidence[i]||{};rtaState.evidence[i][f]=t.value.trim()});saveRTA();close();renderRTAGates();updateRTAReadiness()};
}

createRTALevel();
const rtaLevel=document.querySelector('#wfm .level.l1');
if(rtaLevel){rtaLevel.classList.remove('bridge');rtaLevel.classList.add('available');const rtaNode=rtaLevel.querySelector('button');if(rtaNode)rtaNode.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();openRTALevel()})}
