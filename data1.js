const stages=[
{role:'Customer Service / Call Center Agent',window:'أنت هنا الآن',mission:'اخرجي من التنفيذ الفردي إلى ownership وقيادة غير رسمية.',gate:['3 إنجازات موثقة بأرقام','Coaching أو Buddying لموظفين','Escalations وRCA موثق','قراءة وتحليل KPIs لا مجرد تحقيقها','تقرير أو Dashboard بسيط','مشاركة في QA/Calibration أو Improvement'],next:'Team Leader / QA / WFM / CX Specialist'},
{role:'Team Leader / Senior QA / WFM',window:'6–18 شهر',mission:'امتلكي أداء فريق أو مجال تشغيلي كامل.',gate:['1:1 coaching وخطط أداء','SLA/CSAT/AHT/FCR/Adherence','Daily & weekly operations control','Quality calibration','Workforce basics','عرض النتائج للإدارة'],next:'Supervisor / Senior Specialist'},
{role:'Supervisor / CX Specialist',window:'12–30 شهر',mission:'انتقلي من إدارة أفراد إلى إدارة نظام تشغيل أو برنامج CX.',gate:['إدارة TLs أو ownership تخصصي','Forecasting/Staffing/Quality governance','VoC وJourney Mapping لمسار CX','Power BI/advanced reporting','مشروع تحسين بنتيجة قابلة للقياس','Stakeholder management'],next:'Operations Manager / CX Manager'},
{role:'Operations Manager / CX Manager',window:'2–4 سنوات',mission:'امتلكي نتائج متعددة الفرق/القنوات واربطِي التشغيل بالبزنس.',gate:['قيادة عدة فرق/مشرفين','Budget & cost awareness','Capacity planning','CX governance أو operations governance','CRM/IVR/automation project','Executive reporting وbusiness case'],next:'Contact Center Manager / Senior CX Manager'},
{role:'Contact Center Manager / Senior CX Manager',window:'3–5 سنوات',mission:'قودي مركز الخدمة أو برنامج CX كمنظومة.',gate:['Strategy & annual operating plan','COPC-style performance management','Omnichannel governance','Technology/vendor roadmap','Financial impact','قيادة Managers/Supervisors'],next:'Head of CX / Customer Operations'},
{role:'Head of CX / Customer Operations',window:'5–8 سنوات',mission:'قودي الاستراتيجية والحوكمة عبر وحدات وقنوات متعددة.',gate:['CX strategy & governance','VoC closed-loop program','Journey governance','Transformation portfolio','Retention/revenue/cost impact','Executive influence'],next:'Director of Customer Experience'},
{role:'Director of Customer Experience',window:'8–12+ سنة',mission:'قودي تحولًا مؤسسيًا واسعًا ونتائج على مستوى الشركة.',gate:['Enterprise CX transformation','Service design & journey portfolio','Commercial acumen','Executive/C-level stakeholder management','Operating model design','Board-level storytelling'],next:'VP CX / Chief Customer Officer'},
{role:'VP CX / Chief Customer Officer',window:'Executive',mission:'امتلكي استراتيجية العميل ونتائجها الاقتصادية والثقافية على مستوى المؤسسة.',gate:['Enterprise customer strategy','P&L/customer economics','Executive governance','Brand + digital + service alignment','Leadership succession','Customer-centric culture'],next:'Enterprise executive leadership'}];
const jobs=[
[
{title:'Contact Center Team Leader',fit:'APPLY NOW إذا لديك أمثلة قيادة غير رسمية',type:'apply',skills:['Coaching & feedback','Performance management','Escalation ownership','SLA / CSAT / AHT / FCR','Attendance & adherence','Excel/reporting','Shift & queue operations'],proof:'حضّري مثالين Coaching + مثال تصعيد + تقرير KPI. إذا لم يسبق لك قيادة أشخاص رسميًا، Acting TL/Buddy/SME يقوي الملف.'},
{title:'Quality Analyst / QA Specialist',fit:'APPLY NOW',type:'apply',skills:['Call monitoring','Quality scorecards','Calibration','Root Cause Analysis','Coaching feedback','Excel/reporting','Policy & compliance'],proof:'ابني Quality Scorecard تجريبي + Calibration notes + RCA لحالة متكررة.'},
{title:'WFM / Real-Time Analyst',fit:'STRETCH — ممتاز إذا تميلين للأرقام',type:'stretch',skills:['Excel advanced','Forecasting basics','Scheduling','Adherence','Occupancy','Shrinkage','Service level','Intraday management'],proof:'اعملي نموذج Forecast/Staffing بسيط وافهمي العلاقة بين workload وservice level.'},
{title:'Customer Experience Specialist',fit:'STRETCH — يحتاج تحويل خبرة الخدمة إلى CX',type:'stretch',skills:['NPS / CSAT / CES','Voice of Customer','Complaint trends','Journey mapping','Root cause & CAPA','Stakeholder management','Power BI / reporting'],proof:'اعملي Journey Map حقيقية + VoC themes + خطة تحسين مبنية على بيانات.'},
{title:'Complaints / Escalation Specialist',fit:'APPLY NOW إذا لديك خبرة حالات معقدة',type:'apply',skills:['Complaint handling','RCA','SLA/TAT tracking','Case documentation','Stakeholder follow-up','Customer recovery','Reporting'],proof:'وثقي حالات escalation مع السبب والإجراء والنتيجة بدون بيانات عملاء حساسة.'},
{title:'Call Center Supervisor',fit:'LATER غالبًا — لا تعتمدي على 4 سنوات وحدها',type:'later',skills:['Formal team leadership','Staffing schedules','QA governance','Performance management','Operational reporting','CRM/contact center systems','Cross-functional coordination'],proof:'إعلان سعودي حديث طلب 4 سنوات إجمالية منها سنتان إشرافيتان؛ استهدفي TL أولًا إذا لا توجد خبرة قيادة رسمية.'}
],
[
{title:'Contact Center Supervisor',fit:'APPLY NOW',type:'apply',skills:['Multi-team operations','Coaching TLs/agents','WFM scheduling','Quality monitoring','KPI governance','Escalation management','Operational reporting'],proof:'أثبتي أنك تديرين الأداء وليس المكالمات فقط.'},
{title:'Quality Supervisor',fit:'APPLY NOW لمسار QA',type:'apply',skills:['QA governance','Calibration governance','Scorecard design','RCA/CAPA','Coaching system','Audit readiness','Dashboards'],proof:'امتلكي نظام الجودة لا مجرد تقييم المكالمات.'},
{title:'WFM Supervisor',fit:'APPLY NOW لمسار WFM',type:'apply',skills:['Forecasting','Capacity planning','Scheduling','Shrinkage','Intraday management','Scenario planning','Analytics'],proof:'أثبتي forecast accuracy وstaffing decisions.'},
{title:'Senior CX Specialist',fit:'STRETCH',type:'stretch',skills:['VoC','Journey mapping','NPS/CSAT/CES','Service design','Insights','Stakeholder management','Improvement tracking'],proof:'أظهري closed-loop improvement وليس تقارير فقط.'}
],
[
{title:'Operations Manager',fit:'STRETCH / APPLY حسب حجم المسؤولية',type:'stretch',skills:['Leadership of supervisors','WFM','Quality','SLA','Cost & productivity','Stakeholders','Continuous improvement'],proof:'قدمي business outcomes عبر أكثر من فريق.'},
{title:'CX Manager',fit:'STRETCH',type:'stretch',skills:['CX strategy','VoC program','Journey governance','Metrics','Service design','Transformation','Executive reporting'],proof:'لا يكفي frontline experience؛ تحتاجين portfolio CX فعلي.'},
{title:'Contact Center Manager',fit:'LATER أو Stretch قوي',type:'later',skills:['Operations strategy','Budget','Capacity','COPC practices','Technology/vendors','Omnichannel','Management reporting'],proof:'السوق السعودي قد يطلب 5+ سنوات مع 2+ سنوات إشراف/إدارة.'}
],
[
{title:'Contact Center Manager',fit:'APPLY NOW عند اكتمال الخبرة',type:'apply',skills:['Strategic operations','Budget','COPC','Omnichannel','WFM & QA governance','Technology roadmap','Leadership'],proof:'قدمي annual plan + improvement portfolio + financial impact.'},
{title:'Senior CX Manager',fit:'APPLY NOW لمسار CX',type:'apply',skills:['CX strategy','VoC','Journey governance','CX analytics','Transformation','Change leadership','Executive influence'],proof:'اربطِي CX بالretention/revenue/cost.'}
],
[
{title:'Head of Contact Center / Customer Operations',fit:'STRETCH',type:'stretch',skills:['Multi-site strategy','Budget','Vendors','Tech roadmap','Leadership bench','Governance','Business continuity'],proof:'أظهري قيادة Managers وقرارات استثمارية.'},
{title:'Head of Customer Experience',fit:'STRETCH بعد عمق CX',type:'stretch',skills:['CX strategy','VoC closed loop','Journey governance','NPS/CSAT/CES','Culture','ROI','Executive influence'],proof:'أظهري strategy-to-execution عبر المؤسسة.'}
],
[
{title:'CX Director',fit:'NEXT',type:'apply',skills:['Enterprise transformation','Portfolio leadership','Service design','Customer analytics','Operating model','Executive influence','Commercial acumen'],proof:'أظهري تحولًا واسعًا بنتائج مالية/تشغيلية.'},
{title:'Director Customer Operations',fit:'NEXT',type:'apply',skills:['Large-scale operations','Cost/productivity','Digital channels','Automation','Governance','Vendor strategy','Leadership'],proof:'أظهري scale وbusiness impact.'}
],
[
{title:'VP Customer Experience',fit:'NEXT',type:'apply',skills:['Corporate strategy','Customer economics','P&L','Executive metrics','Transformation','Culture','Board communication'],proof:'أظهري enterprise-wide ownership.'},
{title:'Chief Customer Officer',fit:'STRETCH',type:'stretch',skills:['Enterprise customer strategy','P&L','Brand/service alignment','Executive governance','Culture','Innovation','Leadership succession'],proof:'المنصب يتطلب تأثيرًا مؤسسيًا لا إدارة مركز اتصال فقط.'}
],
[{title:'Chief Customer Officer / Enterprise CX Executive',fit:'EXECUTIVE',type:'apply',skills:['Customer strategy','Customer economics','Board influence','Culture','Portfolio governance','Innovation','Executive leadership'],proof:'استمري في بناء نتائج مؤسسية قابلة للقياس.'}]
];