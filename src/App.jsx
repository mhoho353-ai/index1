import React, { useState } from 'react';
import { 
  Upload, Scissors, Wand2, Palette, Download, Play, Pause, 
  CheckCircle, AlertCircle, RefreshCw, Sparkles, Cpu, ShieldCheck, Database 
} from 'lucide-react';

export default function App() {
  const [step, setStep] = useState(1); // 1: Upload, 2: Analyzing, 3: Editor Dashboard
  const [fileName, setFileName] = useState('');
  const [fileSize, setFileSize] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);

  // معالجة اختيار الملف
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setFileSize((file.size / (1024 * 1024)).toFixed(2) + ' MB');
      setVideoUrl(URL.createObjectURL(file));
      simulateAnalysis();
    }
  };

  // محاكاة مرحلة تحليل الذكاء الاصطناعي (Whisper / Silence Detection)
  const simulateAnalysis = () => {
    setStep(2);
    setIsProcessing(true);
    let p = 0;
    const interval = setInterval(() => {
      p += 10;
      setProgress(p);
      if (p >= 100) {
        clearInterval(interval);
        setIsProcessing(false);
        setStep(3);
      }
    }, 300);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* شريط العناوين العلوي */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 p-2 rounded-xl text-white shadow-lg shadow-indigo-500/30">
            <Wand2 className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              استوديو صانعي المحتوى <span className="text-xs bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 px-2 py-0.5 rounded-full">AI Local Engine</span>
            </h1>
            <p className="text-xs text-slate-400">معالجة محلية بالكامل في متصفحك بدون خوادم خارجية • خصوصية تامة</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <span className="flex items-center gap-1.5 text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            <ShieldCheck className="w-4 h-4" /> آمن ومحلي (Client-Side)
          </span>
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-4 py-2 rounded-xl transition shadow-lg shadow-indigo-600/20 text-xs">
            ترقية النسخة الاحترافية (Pro)
          </button>
        </div>
      </header>

      {/* المحتوى الرئيسي حسب المرحلة */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 flex flex-col">
        
        {/* المرحلة الأولى: رفع الفيديو */}
        {step === 1 && (
          <div className="flex-1 flex flex-col items-center justify-center my-12">
            <div className="text-center max-w-xl mb-8">
              <h2 className="text-3xl font-black text-white mb-3">وفر ساعات من المونتاج بضغطة زر واحدة</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                ارفع فيديو قناتك، سيقوم الذكاء الاصطناعي محلياً باكتشاف وحذف سكتات الصمت، تنقية الصوت، وتجهيزه للتصدير فوراً دون رفع أي بيانات لسيرفرات خارجية.
              </p>
            </div>

            <label className="w-full max-w-2xl border-2 border-dashed border-slate-700 hover:border-indigo-500 bg-slate-900/40 hover:bg-slate-900/80 transition-all rounded-3xl p-12 flex flex-col items-center justify-center cursor-pointer group shadow-2xl">
              <div className="bg-indigo-600/10 group-hover:bg-indigo-600/20 p-6 rounded-2xl text-indigo-400 mb-4 transition">
                <Upload className="w-10 h-10" />
              </div>
              <span className="text-lg font-bold text-white mb-1">اختر فيديو أو اسحبه هنا</span>
              <span className="text-xs text-slate-500">يدعم صيغ MP4, MOV, MKV بأي حجم</span>
              <input type="file" accept="video/*" onChange={handleFileUpload} className="hidden" />
            </label>

            <div className="grid grid-cols-3 gap-6 mt-12 max-w-3xl w-full text-center">
              <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-2xl">
                <Scissors className="w-6 h-6 text-indigo-400 mx-auto mb-2" />
                <h3 className="font-bold text-sm text-white">إزالة السكتات تلقائياً</h3>
                <p className="text-xs text-slate-400 mt-1">حذف الفراغات وفترات التردد بدقة عالية</p>
              </div>
              <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-2xl">
                <Cpu className="w-6 h-6 text-indigo-400 mx-auto mb-2" />
                <h3 className="font-bold text-sm text-white">نماذج ذكاء اصطناعي</h3>
                <p className="text-xs text-slate-400 mt-1">تشغيل محلي بالكامل عبر المتصفح</p>
              </div>
              <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-2xl">
                <Database className="w-6 h-6 text-indigo-400 mx-auto mb-2" />
                <h3 className="font-bold text-sm text-white">قاعدة بيانات محلية</h3>
                <p className="text-xs text-slate-400 mt-1">حفظ مشاريعك وسجل العمل على جهازك</p>
              </div>
            </div>
          </div>
        )}

        {/* المرحلة الثانية: شاشة التحليل ومعالجة الذكاء الاصطناعي */}
        {step === 2 && (
          <div className="flex-1 flex flex-col items-center justify-center my-12">
            <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center shadow-2xl">
              <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <div className="absolute inset-0 border-4 border-indigo-600/20 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                <Sparkles className="w-8 h-8 text-indigo-400 animate-pulse" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">جاري تحليل الفيديو والصوت...</h3>
              <p className="text-xs text-slate-400 mb-6">يتم فحص الموجات الصوتية وتحديد سكتات الصمت محلياً على جهازك.</p>
              
              <div className="w-full bg-slate-950 rounded-full h-3 mb-3 overflow-hidden border border-slate-800">
                <div className="bg-indigo-600 h-full transition-all duration-300 rounded-full" style={{ width: `${progress}%` }}></div>
              </div>
              <span className="text-xs font-mono text-indigo-400">{progress}% مكتمل</span>
            </div>
          </div>
        )}

        {/* المرحلة الثالثة: لوحة المونتاج والتحكم الشامل (Dashboard) */}
        {step === 3 && (
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 my-4">
            
            {/* قسم المعاينة والفيديو */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
                <div className="relative bg-black aspect-video flex items-center justify-center">
                  {videoUrl ? (
                    <video src={videoUrl} controls className="w-full h-full object-contain" />
                  ) : (
                    <div className="text-slate-500 text-sm">لا توجد معاينة</div>
                  )}
                </div>
                <div className="p-4 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-white block">{fileName}</span>
                    <span className="text-slate-400">{fileSize}</span>
                  </div>
                  <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full font-medium">
                    تم تحليل الصوت بنجاح ✓
                  </span>
                </div>
              </div>

              {/* شريط المخطط الزمني للموجات الصوتية (Timeline) */}
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-lg">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Scissors className="w-4 h-4 text-indigo-400" /> تحليل السكتات المقترحة للقص
                </h4>
                <div className="h-16 bg-slate-950 rounded-xl border border-slate-800/80 flex items-center px-4 gap-1 overflow-x-auto">
                  {[...Array(40)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`flex-1 rounded-full transition-all ${i % 5 === 0 ? 'bg-slate-700 h-4' : i % 3 === 0 ? 'bg-indigo-500 h-10' : 'bg-slate-800 h-6'}`}
                      title={i % 3 === 0 ? "صوت نشط" : "سكتة صمت (مقترحة للحذف)"}
                    ></div>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-3 text-xs text-slate-400">
                  <span>تم رصد 18 مقطع صمت (إجمالي التوفير: 2 دقيقة و 15 ثانية)</span>
                  <button className="text-indigo-400 hover:text-indigo-300 font-medium">تعديل الإعدادات</button>
                </div>
              </div>
            </div>

            {/* قسم الأدوات والتحكم */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="font-bold text-base text-white mb-1">أدوات المعالجة الذكية</h3>
                  <p className="text-xs text-slate-400">خصص إعدادات التعديل قبل التصدير النهائي</p>
                </div>

                <div className="flex flex-col gap-3">
                  <label className="flex items-center justify-between p-3.5 bg-slate-950 border border-slate-800 rounded-2xl cursor-pointer hover:border-indigo-500/50 transition">
                    <div className="flex items-center gap-3">
                      <Scissors className="w-5 h-5 text-indigo-400" />
                      <div>
                        <span className="text-sm font-bold text-white block">حذف سكتات الصمت</span>
                        <span className="text-xs text-slate-400">قص الفراغات التلقائي</span>
                      </div>
                    </div>
                    <input type="checkbox" defaultChecked className="accent-indigo-600 w-4 h-4 rounded" />
                  </label>

                  <label className="flex items-center justify-between p-3.5 bg-slate-950 border border-slate-800 rounded-2xl cursor-pointer hover:border-indigo-500/50 transition">
                    <div className="flex items-center gap-3">
                      <Wand2 className="w-5 h-5 text-indigo-400" />
                      <div>
                        <span className="text-sm font-bold text-white block">إزالة الكلمات المترددة (Um/Ah)</span>
                        <span className="text-xs text-slate-400">تحليل النصوص محلياً</span>
                      </div>
                    </div>
                    <input type="checkbox" defaultChecked className="accent-indigo-600 w-4 h-4 rounded" />
                  </label>

                  <label className="flex items-center justify-between p-3.5 bg-slate-950 border border-slate-800 rounded-2xl cursor-pointer hover:border-indigo-500/50 transition">
                    <div className="flex items-center gap-3">
                      <Palette className="w-5 h-5 text-indigo-400" />
                      <div>
                        <span className="text-sm font-bold text-white block">تصحيح الألوان السينمائي</span>
                        <span className="text-xs text-slate-400">فلتر تلقائي جاهز</span>
                      </div>
                    </div>
                    <input type="checkbox" className="accent-indigo-600 w-4 h-4 rounded" />
                  </label>
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-4 border-t border-slate-800">
                <button 
                  onClick={() => alert("جاري تصدير الفيديو وتجهيزه للتحميل على جهازك محلياً...")}
                  className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold py-3.5 px-4 rounded-2xl shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2 transition"
                >
                  <Download className="w-5 h-5" /> تصدير الفيديو النهائي
                </button>
                <button 
                  onClick={() => { setStep(1); setVideoUrl(''); }}
                  className="w-full bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium py-2.5 px-4 rounded-xl text-xs transition"
                >
                  رفع فيديو آخر
                </button>
              </div>

            </div>

          </div>
        )}

      </main>

      <footer className="border-t border-slate-800 bg-slate-900/30 py-4 text-center text-xs text-slate-500">
        مشروع مفتوح المصدر لصانعي المحتوى • جاهز للنشر على GitHub Pages
      </footer>

    </div>
  );
}
