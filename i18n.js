// =====================================================
// SIGNIFY: all the app's words in 11 languages.
// Every page loads this file. To fix a translation, edit it here.
// (First draft: ask a native speaker to check each language!)
// =====================================================

const I18N_LANGS = [
  { code: "en", name: "English",  english: "English"   },
  { code: "hi", name: "हिन्दी",    english: "Hindi"     },
  { code: "bn", name: "বাংলা",     english: "Bengali"   },
  { code: "mr", name: "मराठी",    english: "Marathi"   },
  { code: "te", name: "తెలుగు",    english: "Telugu"    },
  { code: "ta", name: "தமிழ்",     english: "Tamil"     },
  { code: "gu", name: "ગુજરાતી",   english: "Gujarati"  },
  { code: "kn", name: "ಕನ್ನಡ",     english: "Kannada"   },
  { code: "or", name: "ଓଡ଼ିଆ",     english: "Odia"      },
  { code: "ml", name: "മലയാളം",   english: "Malayalam" },
  { code: "pa", name: "ਪੰਜਾਬੀ",    english: "Punjabi"   },
];

const I18N = {
en: {
  home: "Home", close_lesson: "Close lesson", choose_lang: "Choose your language", language: "Language",
  streak: "{n} day streak", profile: "Your profile", namaste: "Namaste!", namaste_name: "Namaste, {name}!",
  ready: "Ready to learn a few signs today?", nudge_first: "Let's learn your first sign!", nudge_next: "Next up: {stop}. Keep going!",
  chapter1: "Chapter 1", stops_finished: "Stops finished", to_go: "{n} to go", chapter_done: "Chapter complete!",
  chapter_name: "Everyday words", learn_isl: "Learn ISL", next_stop: "Next stop:", finished_chapter: "You finished the chapter!",
  start: "Start", continue: "Continue", sotd: "Sign of the day", play_sotd: "Play the sign of the day",
  my_progress: "My progress", level1: "Level 1 · Beginner", level2: "Level 2 · Explorer",
  signs_of: "{a} of {b} signs", stops_of: "{a} of {b} stops", this_week: "This week",
  translator: "Translator", ten_langs: "10 Indian languages",
  ask_title: "Ask Signify", ask_sub: "Ask anything about sign language or deaf culture.",
  ask_hi: "Hi! I'm your Signify helper. Ask me a question, or try one of these:",
  chip1: "How do I sign \"thank you\"?", chip2: "Is ISL the same as ASL?", chip3: "What is deaf culture?",
  ask_ph: "Type your question...", your_question: "Your question", send: "Send", thinking: "Thinking...",
  err_generic: "Something went wrong. Try again.", err_connect: "Couldn't connect. Check your internet and try again.",
  recent: "Recently learned", recent_sub: "Tap a sign to watch it again", recent_none_sub: "Your first signs will show up here.",
  recent_none: "No signs yet. Your first lesson takes about 5 minutes.", start_first: "Start your first lesson",
  review_all: "Review all {n} signs",
  stop_food: "Food", stop_quiz: "Quiz", stop_family: "Family", stop_needs: "Needs", stop_help: "Help",
  stop_feelings: "Feelings", stop_final: "Final test", stops_done: "{a} of {b} stops done", dock_start: "START",
  new_sign: "New sign", practice: "Practice", speed: "Playback speed", mirror: "Mirror", means: "This sign means",
  tip: "Tip:", in_stop: "Signs in this stop", how_practise: "How to practise",
  step1_html: "Watch it once at <strong>0.5×</strong>", step2_html: "Turn on <strong>Mirror</strong> and copy along",
  step3: "Try it at full speed without looking", watch_again: "Watch again", got_it: "Got it",
  what_mean: "What does this sign mean?", stop_complete: "Stop complete!", back_ocean: "Back to the ocean",
  learned: "Learned", now: "Now", next: "Next",
  m_hi: "Hi! Let's learn a sign", m_watch: "Watch closely, then copy the sign!", m_which: "Which word is this?",
  m_yay: "Yay! You got it!", m_close: "So close! We'll try it again", m_done: "You did it!",
  cheer1: "Hi there!", cheer2: "You're doing great!", cheer3: "Keep going!", cheer4: "High five!",
  mascot_btn: "Say hi to the mascot", correct: "Correct!", not_quite: "Not quite. It's {word}",
  you_learned: "You learned {list}! Try signing them with {name} today.",
  you_learned_anon: "You learned {list}! Try signing them with someone today.",
  great_job: "Great job, you remembered all your signs!", coming_soon: "Coming soon",
  not_ready: "This stop isn't ready yet. Check back later!", and: "and", lesson_progress: "Lesson progress",
  dict_title: "Sign dictionary", dict_sub: "Pick your language, then tap a word to see its sign.",
  your_lang: "Your language", all: "All", search: "Search signs…", english_label: "English", hindi_label: "Hindi",
  same_sign: "The sign is the same in every language. Only the word changes.",
  practise_lesson: "Practise in a lesson", no_results: "No signs found. Try another word.", topic: "Topic",
},
hi: {
  home: "होम", close_lesson: "पाठ बंद करें", choose_lang: "अपनी भाषा चुनें", language: "भाषा",
  streak: "{n} दिन लगातार", profile: "आपकी प्रोफ़ाइल", namaste: "नमस्ते!", namaste_name: "नमस्ते, {name}!",
  ready: "आज कुछ संकेत सीखने के लिए तैयार हैं?", nudge_first: "चलिए, अपना पहला संकेत सीखें!", nudge_next: "अगला: {stop}। लगे रहिए!",
  chapter1: "अध्याय 1", stops_finished: "पूरे हुए पड़ाव", to_go: "{n} बाकी", chapter_done: "अध्याय पूरा!",
  chapter_name: "रोज़मर्रा के शब्द", learn_isl: "ISL सीखें", next_stop: "अगला पड़ाव:", finished_chapter: "आपने अध्याय पूरा कर लिया!",
  start: "शुरू करें", continue: "जारी रखें", sotd: "आज का संकेत", play_sotd: "आज का संकेत चलाएँ",
  my_progress: "मेरी प्रगति", level1: "स्तर 1 · शुरुआती", level2: "स्तर 2 · खोजी",
  signs_of: "{b} में से {a} संकेत", stops_of: "{b} में से {a} पड़ाव", this_week: "इस हफ़्ते",
  translator: "अनुवादक", ten_langs: "10 भारतीय भाषाएँ",
  ask_title: "Signify से पूछें", ask_sub: "सांकेतिक भाषा या बधिर संस्कृति के बारे में कुछ भी पूछें।",
  ask_hi: "नमस्ते! मैं आपका Signify सहायक हूँ। मुझसे सवाल पूछें, या इनमें से कोई आज़माएँ:",
  chip1: "\"धन्यवाद\" का संकेत कैसे करें?", chip2: "क्या ISL और ASL एक ही हैं?", chip3: "बधिर संस्कृति क्या है?",
  ask_ph: "अपना सवाल लिखें...", your_question: "आपका सवाल", send: "भेजें", thinking: "सोच रहा हूँ...",
  err_generic: "कुछ गड़बड़ हो गई। फिर से कोशिश करें।", err_connect: "जुड़ नहीं पाए। अपना इंटरनेट जाँचें और फिर कोशिश करें।",
  recent: "हाल ही में सीखे", recent_sub: "दोबारा देखने के लिए किसी संकेत पर टैप करें", recent_none_sub: "आपके पहले संकेत यहाँ दिखेंगे।",
  recent_none: "अभी कोई संकेत नहीं। आपका पहला पाठ लगभग 5 मिनट का है।", start_first: "अपना पहला पाठ शुरू करें",
  review_all: "सभी {n} संकेत दोहराएँ",
  stop_food: "भोजन", stop_quiz: "क्विज़", stop_family: "परिवार", stop_needs: "ज़रूरतें", stop_help: "मदद",
  stop_feelings: "भावनाएँ", stop_final: "अंतिम परीक्षा", stops_done: "{b} में से {a} पड़ाव पूरे", dock_start: "शुरू",
  new_sign: "नया संकेत", practice: "अभ्यास", speed: "चलाने की गति", mirror: "दर्पण", means: "इस संकेत का अर्थ है",
  tip: "सुझाव:", in_stop: "इस पड़ाव के संकेत", how_practise: "अभ्यास कैसे करें",
  step1_html: "पहले इसे <strong>0.5×</strong> पर देखें", step2_html: "<strong>दर्पण</strong> चालू करें और साथ-साथ करें",
  step3: "बिना देखे पूरी गति पर करके देखें", watch_again: "फिर से देखें", got_it: "समझ गया",
  what_mean: "इस संकेत का क्या अर्थ है?", stop_complete: "पड़ाव पूरा!", back_ocean: "समुद्र पर वापस",
  learned: "सीख लिया", now: "अभी", next: "अगला",
  m_hi: "नमस्ते! चलिए एक संकेत सीखें", m_watch: "ध्यान से देखें, फिर संकेत दोहराएँ!", m_which: "यह कौन-सा शब्द है?",
  m_yay: "वाह! आपने सही किया!", m_close: "बहुत करीब! हम इसे फिर करेंगे", m_done: "आपने कर दिखाया!",
  cheer1: "नमस्ते!", cheer2: "आप बहुत अच्छा कर रहे हैं!", cheer3: "लगे रहिए!", cheer4: "हाई फ़ाइव!",
  mascot_btn: "शुभंकर को नमस्ते कहें", correct: "सही!", not_quite: "पूरा सही नहीं। यह {word} है",
  you_learned: "आपने {list} सीख लिया! आज इन्हें {name} के साथ संकेत करके देखें।",
  you_learned_anon: "आपने {list} सीख लिया! आज इन्हें किसी के साथ संकेत करके देखें।",
  great_job: "शाबाश, आपको सारे संकेत याद रहे!", coming_soon: "जल्द आ रहा है",
  not_ready: "यह पड़ाव अभी तैयार नहीं है। बाद में देखें!", and: "और", lesson_progress: "पाठ की प्रगति",
  dict_title: "संकेत शब्दकोश", dict_sub: "अपनी भाषा चुनें, फिर संकेत देखने के लिए किसी शब्द पर टैप करें।",
  your_lang: "आपकी भाषा", all: "सभी", search: "संकेत खोजें…", english_label: "अंग्रेज़ी", hindi_label: "हिन्दी",
  same_sign: "संकेत हर भाषा में एक जैसा है। सिर्फ़ शब्द बदलता है।",
  practise_lesson: "पाठ में अभ्यास करें", no_results: "कोई संकेत नहीं मिला। कोई और शब्द आज़माएँ।", topic: "विषय",
},
bn: {
  home: "হোম", close_lesson: "পাঠ বন্ধ করুন", choose_lang: "আপনার ভাষা বেছে নিন", language: "ভাষা",
  streak: "টানা {n} দিন", profile: "আপনার প্রোফাইল", namaste: "নমস্কার!", namaste_name: "নমস্কার, {name}!",
  ready: "আজ কয়েকটি সংকেত শিখতে প্রস্তুত?", nudge_first: "চলুন, প্রথম সংকেতটি শিখি!", nudge_next: "এরপর: {stop}। চালিয়ে যান!",
  chapter1: "অধ্যায় 1", stops_finished: "শেষ হওয়া স্টপ", to_go: "আর {n}টি বাকি", chapter_done: "অধ্যায় শেষ!",
  chapter_name: "প্রতিদিনের শব্দ", learn_isl: "ISL শিখুন", next_stop: "পরের স্টপ:", finished_chapter: "আপনি অধ্যায়টি শেষ করেছেন!",
  start: "শুরু করুন", continue: "চালিয়ে যান", sotd: "আজকের সংকেত", play_sotd: "আজকের সংকেত চালান",
  my_progress: "আমার অগ্রগতি", level1: "স্তর 1 · নতুন শিক্ষার্থী", level2: "স্তর 2 · অভিযাত্রী",
  signs_of: "{b}টির মধ্যে {a}টি সংকেত", stops_of: "{b}টির মধ্যে {a}টি স্টপ", this_week: "এই সপ্তাহ",
  translator: "অনুবাদক", ten_langs: "10টি ভারতীয় ভাষা",
  ask_title: "Signify-কে জিজ্ঞাসা করুন", ask_sub: "সাংকেতিক ভাষা বা বধির সংস্কৃতি নিয়ে যা খুশি জিজ্ঞাসা করুন।",
  ask_hi: "নমস্কার! আমি আপনার Signify সহায়ক। আমাকে প্রশ্ন করুন, অথবা এগুলোর একটি চেষ্টা করুন:",
  chip1: "\"ধন্যবাদ\" কীভাবে সংকেত করব?", chip2: "ISL আর ASL কি একই?", chip3: "বধির সংস্কৃতি কী?",
  ask_ph: "আপনার প্রশ্ন লিখুন...", your_question: "আপনার প্রশ্ন", send: "পাঠান", thinking: "ভাবছি...",
  err_generic: "কিছু ভুল হয়েছে। আবার চেষ্টা করুন।", err_connect: "সংযোগ করা যায়নি। ইন্টারনেট দেখে আবার চেষ্টা করুন।",
  recent: "সম্প্রতি শেখা", recent_sub: "আবার দেখতে একটি সংকেতে ট্যাপ করুন", recent_none_sub: "আপনার প্রথম সংকেতগুলো এখানে দেখা যাবে।",
  recent_none: "এখনও কোনো সংকেত নেই। প্রথম পাঠে প্রায় 5 মিনিট লাগে।", start_first: "প্রথম পাঠ শুরু করুন",
  review_all: "সব {n}টি সংকেত আবার দেখুন",
  stop_food: "খাবার", stop_quiz: "কুইজ", stop_family: "পরিবার", stop_needs: "প্রয়োজন", stop_help: "সাহায্য",
  stop_feelings: "অনুভূতি", stop_final: "চূড়ান্ত পরীক্ষা", stops_done: "{b}টির মধ্যে {a}টি স্টপ শেষ", dock_start: "শুরু",
  new_sign: "নতুন সংকেত", practice: "অনুশীলন", speed: "চালানোর গতি", mirror: "আয়না", means: "এই সংকেতের মানে",
  tip: "পরামর্শ:", in_stop: "এই স্টপের সংকেত", how_practise: "কীভাবে অনুশীলন করবেন",
  step1_html: "প্রথমে <strong>0.5×</strong> গতিতে একবার দেখুন", step2_html: "<strong>আয়না</strong> চালু করে সঙ্গে সঙ্গে করুন",
  step3: "না দেখে পুরো গতিতে করে দেখুন", watch_again: "আবার দেখুন", got_it: "বুঝেছি",
  what_mean: "এই সংকেতের মানে কী?", stop_complete: "স্টপ শেষ!", back_ocean: "সমুদ্রে ফিরে যান",
  learned: "শেখা হয়েছে", now: "এখন", next: "পরে",
  m_hi: "নমস্কার! চলুন একটি সংকেত শিখি", m_watch: "মন দিয়ে দেখুন, তারপর সংকেতটি করুন!", m_which: "এটা কোন শব্দ?",
  m_yay: "দারুণ! ঠিক হয়েছে!", m_close: "প্রায় হয়ে গিয়েছিল! আবার চেষ্টা করব", m_done: "আপনি পেরেছেন!",
  cheer1: "নমস্কার!", cheer2: "আপনি দারুণ করছেন!", cheer3: "চালিয়ে যান!", cheer4: "হাই ফাইভ!",
  mascot_btn: "মাসকটকে হাই বলুন", correct: "ঠিক!", not_quite: "হয়নি। এটা {word}",
  you_learned: "আপনি {list} শিখেছেন! আজ {name}-এর সঙ্গে এগুলো সংকেত করে দেখুন।",
  you_learned_anon: "আপনি {list} শিখেছেন! আজ কারও সঙ্গে এগুলো সংকেত করে দেখুন।",
  great_job: "দারুণ, সব সংকেত মনে রেখেছেন!", coming_soon: "শীঘ্রই আসছে",
  not_ready: "এই স্টপটি এখনও তৈরি নয়। পরে আবার দেখুন!", and: "আর", lesson_progress: "পাঠের অগ্রগতি",
  dict_title: "সংকেত অভিধান", dict_sub: "আপনার ভাষা বেছে নিন, তারপর সংকেত দেখতে একটি শব্দে ট্যাপ করুন।",
  your_lang: "আপনার ভাষা", all: "সব", search: "সংকেত খুঁজুন…", english_label: "ইংরেজি", hindi_label: "হিন্দি",
  same_sign: "সংকেত সব ভাষায় একই। শুধু শব্দটা বদলায়।",
  practise_lesson: "পাঠে অনুশীলন করুন", no_results: "কোনো সংকেত পাওয়া যায়নি। অন্য শব্দ চেষ্টা করুন।", topic: "বিষয়",
},
mr: {
  home: "होम", close_lesson: "धडा बंद करा", choose_lang: "तुमची भाषा निवडा", language: "भाषा",
  streak: "सलग {n} दिवस", profile: "तुमचे प्रोफाइल", namaste: "नमस्कार!", namaste_name: "नमस्कार, {name}!",
  ready: "आज काही संकेत शिकायला तयार आहात?", nudge_first: "चला, तुमचा पहिला संकेत शिकूया!", nudge_next: "पुढे: {stop}. असेच चालू ठेवा!",
  chapter1: "प्रकरण 1", stops_finished: "पूर्ण झालेले थांबे", to_go: "अजून {n}", chapter_done: "प्रकरण पूर्ण!",
  chapter_name: "रोजचे शब्द", learn_isl: "ISL शिका", next_stop: "पुढचा थांबा:", finished_chapter: "तुम्ही प्रकरण पूर्ण केले!",
  start: "सुरू करा", continue: "पुढे चला", sotd: "आजचा संकेत", play_sotd: "आजचा संकेत चालवा",
  my_progress: "माझी प्रगती", level1: "स्तर 1 · नवशिका", level2: "स्तर 2 · शोधक",
  signs_of: "{b} पैकी {a} संकेत", stops_of: "{b} पैकी {a} थांबे", this_week: "या आठवड्यात",
  translator: "अनुवादक", ten_langs: "10 भारतीय भाषा",
  ask_title: "Signify ला विचारा", ask_sub: "सांकेतिक भाषा किंवा कर्णबधिर संस्कृतीबद्दल काहीही विचारा.",
  ask_hi: "नमस्कार! मी तुमचा Signify मदतनीस आहे. मला प्रश्न विचारा, किंवा यापैकी एक वापरून पाहा:",
  chip1: "\"धन्यवाद\" चा संकेत कसा करायचा?", chip2: "ISL आणि ASL एकच आहेत का?", chip3: "कर्णबधिर संस्कृती म्हणजे काय?",
  ask_ph: "तुमचा प्रश्न लिहा...", your_question: "तुमचा प्रश्न", send: "पाठवा", thinking: "विचार करत आहे...",
  err_generic: "काहीतरी चुकले. पुन्हा प्रयत्न करा.", err_connect: "जोडता आले नाही. इंटरनेट तपासा आणि पुन्हा प्रयत्न करा.",
  recent: "नुकतेच शिकलेले", recent_sub: "पुन्हा पाहण्यासाठी संकेतावर टॅप करा", recent_none_sub: "तुमचे पहिले संकेत इथे दिसतील.",
  recent_none: "अजून एकही संकेत नाही. तुमचा पहिला धडा सुमारे 5 मिनिटांचा आहे.", start_first: "तुमचा पहिला धडा सुरू करा",
  review_all: "सगळे {n} संकेत पुन्हा पाहा",
  stop_food: "अन्न", stop_quiz: "प्रश्नमंजुषा", stop_family: "कुटुंब", stop_needs: "गरजा", stop_help: "मदत",
  stop_feelings: "भावना", stop_final: "अंतिम परीक्षा", stops_done: "{b} पैकी {a} थांबे पूर्ण", dock_start: "सुरू",
  new_sign: "नवीन संकेत", practice: "सराव", speed: "वेग", mirror: "आरसा", means: "या संकेताचा अर्थ",
  tip: "टीप:", in_stop: "या थांब्यातील संकेत", how_practise: "सराव कसा करायचा",
  step1_html: "आधी एकदा <strong>0.5×</strong> वेगाने पाहा", step2_html: "<strong>आरसा</strong> चालू करा आणि सोबत करा",
  step3: "न पाहता पूर्ण वेगाने करून पाहा", watch_again: "पुन्हा पाहा", got_it: "समजले",
  what_mean: "या संकेताचा अर्थ काय?", stop_complete: "थांबा पूर्ण!", back_ocean: "समुद्राकडे परत",
  learned: "शिकलो", now: "आता", next: "पुढे",
  m_hi: "नमस्कार! चला एक संकेत शिकूया", m_watch: "नीट पाहा, मग संकेत करून पाहा!", m_which: "हा कोणता शब्द आहे?",
  m_yay: "व्वा! बरोबर!", m_close: "जवळपास! आपण पुन्हा प्रयत्न करू", m_done: "तुम्ही करून दाखवले!",
  cheer1: "नमस्कार!", cheer2: "तुम्ही छान करत आहात!", cheer3: "असेच चालू ठेवा!", cheer4: "हाय फाइव्ह!",
  mascot_btn: "मॅस्कॉटला नमस्कार करा", correct: "बरोबर!", not_quite: "थोडक्यात चुकले. हा {word} आहे",
  you_learned: "तुम्ही {list} शिकलात! आज {name} सोबत हे संकेत करून पाहा.",
  you_learned_anon: "तुम्ही {list} शिकलात! आज कोणासोबत तरी हे संकेत करून पाहा.",
  great_job: "शाबास, तुम्हाला सगळे संकेत आठवले!", coming_soon: "लवकरच येत आहे",
  not_ready: "हा थांबा अजून तयार नाही. नंतर पाहा!", and: "आणि", lesson_progress: "धड्याची प्रगती",
  dict_title: "संकेत शब्दकोश", dict_sub: "तुमची भाषा निवडा, मग संकेत पाहण्यासाठी शब्दावर टॅप करा.",
  your_lang: "तुमची भाषा", all: "सगळे", search: "संकेत शोधा…", english_label: "इंग्रजी", hindi_label: "हिंदी",
  same_sign: "संकेत प्रत्येक भाषेत सारखाच असतो. फक्त शब्द बदलतो.",
  practise_lesson: "धड्यात सराव करा", no_results: "एकही संकेत सापडला नाही. दुसरा शब्द वापरून पाहा.", topic: "विषय",
},
te: {
  home: "హోమ్", close_lesson: "పాఠం మూసివేయండి", choose_lang: "మీ భాషను ఎంచుకోండి", language: "భాష",
  streak: "వరుసగా {n} రోజులు", profile: "మీ ప్రొఫైల్", namaste: "నమస్తే!", namaste_name: "నమస్తే, {name}!",
  ready: "ఈరోజు కొన్ని సంజ్ఞలు నేర్చుకోవడానికి సిద్ధమా?", nudge_first: "రండి, మీ మొదటి సంజ్ఞ నేర్చుకుందాం!", nudge_next: "తర్వాత: {stop}. ఇలాగే కొనసాగించండి!",
  chapter1: "అధ్యాయం 1", stops_finished: "పూర్తైన మజిలీలు", to_go: "ఇంకా {n}", chapter_done: "అధ్యాయం పూర్తైంది!",
  chapter_name: "రోజువారీ పదాలు", learn_isl: "ISL నేర్చుకోండి", next_stop: "తర్వాతి మజిలీ:", finished_chapter: "మీరు అధ్యాయం పూర్తి చేశారు!",
  start: "ప్రారంభించండి", continue: "కొనసాగించండి", sotd: "నేటి సంజ్ఞ", play_sotd: "నేటి సంజ్ఞను ప్లే చేయండి",
  my_progress: "నా పురోగతి", level1: "స్థాయి 1 · ప్రారంభకులు", level2: "స్థాయి 2 · అన్వేషకులు",
  signs_of: "{b} లో {a} సంజ్ఞలు", stops_of: "{b} లో {a} మజిలీలు", this_week: "ఈ వారం",
  translator: "అనువాదకం", ten_langs: "10 భారతీయ భాషలు",
  ask_title: "Signify ని అడగండి", ask_sub: "సంజ్ఞా భాష లేదా బధిరుల సంస్కృతి గురించి ఏదైనా అడగండి.",
  ask_hi: "నమస్తే! నేను మీ Signify సహాయకుడిని. నన్ను ఒక ప్రశ్న అడగండి, లేదా వీటిలో ఒకటి ప్రయత్నించండి:",
  chip1: "\"ధన్యవాదాలు\" సంజ్ఞ ఎలా చేయాలి?", chip2: "ISL మరియు ASL ఒకటేనా?", chip3: "బధిరుల సంస్కృతి అంటే ఏమిటి?",
  ask_ph: "మీ ప్రశ్న టైప్ చేయండి...", your_question: "మీ ప్రశ్న", send: "పంపండి", thinking: "ఆలోచిస్తున్నాను...",
  err_generic: "ఏదో తప్పు జరిగింది. మళ్లీ ప్రయత్నించండి.", err_connect: "కనెక్ట్ కాలేదు. మీ ఇంటర్నెట్ చూసి మళ్లీ ప్రయత్నించండి.",
  recent: "ఇటీవల నేర్చుకున్నవి", recent_sub: "మళ్లీ చూడటానికి ఒక సంజ్ఞపై నొక్కండి", recent_none_sub: "మీ మొదటి సంజ్ఞలు ఇక్కడ కనిపిస్తాయి.",
  recent_none: "ఇంకా సంజ్ఞలు లేవు. మీ మొదటి పాఠానికి సుమారు 5 నిమిషాలు పడుతుంది.", start_first: "మీ మొదటి పాఠం ప్రారంభించండి",
  review_all: "మొత్తం {n} సంజ్ఞలను మళ్లీ చూడండి",
  stop_food: "ఆహారం", stop_quiz: "క్విజ్", stop_family: "కుటుంబం", stop_needs: "అవసరాలు", stop_help: "సహాయం",
  stop_feelings: "భావాలు", stop_final: "చివరి పరీక్ష", stops_done: "{b} లో {a} మజిలీలు పూర్తి", dock_start: "ప్రారంభం",
  new_sign: "కొత్త సంజ్ఞ", practice: "అభ్యాసం", speed: "ప్లే వేగం", mirror: "అద్దం", means: "ఈ సంజ్ఞ అర్థం",
  tip: "చిట్కా:", in_stop: "ఈ మజిలీలోని సంజ్ఞలు", how_practise: "ఎలా అభ్యాసం చేయాలి",
  step1_html: "ముందు ఒకసారి <strong>0.5×</strong> వేగంతో చూడండి", step2_html: "<strong>అద్దం</strong> ఆన్ చేసి కలిసి చేయండి",
  step3: "చూడకుండా పూర్తి వేగంతో ప్రయత్నించండి", watch_again: "మళ్లీ చూడండి", got_it: "అర్థమైంది",
  what_mean: "ఈ సంజ్ఞ అర్థం ఏమిటి?", stop_complete: "మజిలీ పూర్తైంది!", back_ocean: "సముద్రానికి తిరిగి",
  learned: "నేర్చుకున్నారు", now: "ఇప్పుడు", next: "తర్వాత",
  m_hi: "నమస్తే! ఒక సంజ్ఞ నేర్చుకుందాం", m_watch: "జాగ్రత్తగా చూసి, సంజ్ఞను అనుకరించండి!", m_which: "ఇది ఏ పదం?",
  m_yay: "భలే! సరిగ్గా చెప్పారు!", m_close: "దాదాపు! మళ్లీ ప్రయత్నిద్దాం", m_done: "మీరు సాధించారు!",
  cheer1: "నమస్తే!", cheer2: "మీరు చాలా బాగా చేస్తున్నారు!", cheer3: "ఇలాగే కొనసాగించండి!", cheer4: "హై ఫైవ్!",
  mascot_btn: "మస్కట్‌కి హాయ్ చెప్పండి", correct: "సరైనది!", not_quite: "కాదు. ఇది {word}",
  you_learned: "మీరు {list} నేర్చుకున్నారు! ఈరోజు {name} తో వీటిని సంజ్ఞ చేసి చూడండి.",
  you_learned_anon: "మీరు {list} నేర్చుకున్నారు! ఈరోజు ఎవరితోనైనా వీటిని సంజ్ఞ చేసి చూడండి.",
  great_job: "శభాష్, మీకు అన్ని సంజ్ఞలు గుర్తున్నాయి!", coming_soon: "త్వరలో వస్తుంది",
  not_ready: "ఈ మజిలీ ఇంకా సిద్ధంగా లేదు. తర్వాత చూడండి!", and: "మరియు", lesson_progress: "పాఠం పురోగతి",
  dict_title: "సంజ్ఞ నిఘంటువు", dict_sub: "మీ భాషను ఎంచుకుని, సంజ్ఞ చూడటానికి ఒక పదంపై నొక్కండి.",
  your_lang: "మీ భాష", all: "అన్నీ", search: "సంజ్ఞలు వెతకండి…", english_label: "ఇంగ్లీష్", hindi_label: "హిందీ",
  same_sign: "సంజ్ఞ అన్ని భాషల్లో ఒకటే. పదం మాత్రమే మారుతుంది.",
  practise_lesson: "పాఠంలో అభ్యాసం చేయండి", no_results: "సంజ్ఞలు దొరకలేదు. వేరే పదం ప్రయత్నించండి.", topic: "అంశం",
},
ta: {
  home: "முகப்பு", close_lesson: "பாடத்தை மூடு", choose_lang: "உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்", language: "மொழி",
  streak: "தொடர்ந்து {n} நாள்", profile: "உங்கள் சுயவிவரம்", namaste: "வணக்கம்!", namaste_name: "வணக்கம், {name}!",
  ready: "இன்று சில சைகைகள் கற்கத் தயாரா?", nudge_first: "வாருங்கள், உங்கள் முதல் சைகையைக் கற்போம்!", nudge_next: "அடுத்து: {stop}. தொடருங்கள்!",
  chapter1: "அத்தியாயம் 1", stops_finished: "முடித்த நிறுத்தங்கள்", to_go: "இன்னும் {n}", chapter_done: "அத்தியாயம் முடிந்தது!",
  chapter_name: "அன்றாடச் சொற்கள்", learn_isl: "ISL கற்கவும்", next_stop: "அடுத்த நிறுத்தம்:", finished_chapter: "நீங்கள் அத்தியாயத்தை முடித்துவிட்டீர்கள்!",
  start: "தொடங்கு", continue: "தொடர்க", sotd: "இன்றைய சைகை", play_sotd: "இன்றைய சைகையை இயக்கு",
  my_progress: "என் முன்னேற்றம்", level1: "நிலை 1 · தொடக்கநிலை", level2: "நிலை 2 · ஆய்வாளர்",
  signs_of: "{b} இல் {a} சைகைகள்", stops_of: "{b} இல் {a} நிறுத்தங்கள்", this_week: "இந்த வாரம்",
  translator: "மொழிபெயர்ப்பாளர்", ten_langs: "10 இந்திய மொழிகள்",
  ask_title: "Signify-யிடம் கேளுங்கள்", ask_sub: "சைகை மொழி அல்லது காதுகேளாதோர் கலாச்சாரம் பற்றி எதையும் கேளுங்கள்.",
  ask_hi: "வணக்கம்! நான் உங்கள் Signify உதவியாளர். என்னிடம் ஒரு கேள்வி கேளுங்கள், அல்லது இவற்றில் ஒன்றை முயற்சிக்கவும்:",
  chip1: "\"நன்றி\" என்பதை எப்படி சைகை செய்வது?", chip2: "ISL-ம் ASL-ம் ஒன்றா?", chip3: "காதுகேளாதோர் கலாச்சாரம் என்றால் என்ன?",
  ask_ph: "உங்கள் கேள்வியை எழுதுங்கள்...", your_question: "உங்கள் கேள்வி", send: "அனுப்பு", thinking: "யோசிக்கிறேன்...",
  err_generic: "ஏதோ தவறு நடந்தது. மீண்டும் முயற்சிக்கவும்.", err_connect: "இணைக்க முடியவில்லை. இணையத்தைச் சரிபார்த்து மீண்டும் முயற்சிக்கவும்.",
  recent: "சமீபத்தில் கற்றவை", recent_sub: "மீண்டும் பார்க்க ஒரு சைகையைத் தட்டவும்", recent_none_sub: "உங்கள் முதல் சைகைகள் இங்கே தோன்றும்.",
  recent_none: "இன்னும் சைகைகள் இல்லை. உங்கள் முதல் பாடம் சுமார் 5 நிமிடங்கள்.", start_first: "உங்கள் முதல் பாடத்தைத் தொடங்குங்கள்",
  review_all: "அனைத்து {n} சைகைகளையும் மீண்டும் பார்",
  stop_food: "உணவு", stop_quiz: "வினாடி வினா", stop_family: "குடும்பம்", stop_needs: "தேவைகள்", stop_help: "உதவி",
  stop_feelings: "உணர்வுகள்", stop_final: "இறுதித் தேர்வு", stops_done: "{b} இல் {a} நிறுத்தங்கள் முடிந்தன", dock_start: "தொடங்கு",
  new_sign: "புதிய சைகை", practice: "பயிற்சி", speed: "இயக்க வேகம்", mirror: "கண்ணாடி", means: "இந்தச் சைகையின் பொருள்",
  tip: "குறிப்பு:", in_stop: "இந்த நிறுத்தத்தின் சைகைகள்", how_practise: "எப்படிப் பயிற்சி செய்வது",
  step1_html: "முதலில் <strong>0.5×</strong> வேகத்தில் ஒருமுறை பாருங்கள்", step2_html: "<strong>கண்ணாடி</strong>யை இயக்கி கூடவே செய்யுங்கள்",
  step3: "பார்க்காமல் முழு வேகத்தில் முயற்சி செய்யுங்கள்", watch_again: "மீண்டும் பார்", got_it: "புரிந்தது",
  what_mean: "இந்தச் சைகையின் பொருள் என்ன?", stop_complete: "நிறுத்தம் முடிந்தது!", back_ocean: "கடலுக்குத் திரும்பு",
  learned: "கற்றது", now: "இப்போது", next: "அடுத்து",
  m_hi: "வணக்கம்! ஒரு சைகையைக் கற்போம்", m_watch: "கவனமாகப் பாருங்கள், பிறகு சைகையைச் செய்யுங்கள்!", m_which: "இது எந்தச் சொல்?",
  m_yay: "அருமை! சரியாகச் சொன்னீர்கள்!", m_close: "கிட்டத்தட்ட! மீண்டும் முயற்சிப்போம்", m_done: "நீங்கள் சாதித்துவிட்டீர்கள்!",
  cheer1: "வணக்கம்!", cheer2: "நீங்கள் அருமையாகச் செய்கிறீர்கள்!", cheer3: "தொடருங்கள்!", cheer4: "ஹை ஃபைவ்!",
  mascot_btn: "சின்னத்துக்கு வணக்கம் சொல்லுங்கள்", correct: "சரி!", not_quite: "இல்லை. இது {word}",
  you_learned: "நீங்கள் {list} கற்றுக்கொண்டீர்கள்! இன்று {name} உடன் இவற்றைச் சைகை செய்து பாருங்கள்.",
  you_learned_anon: "நீங்கள் {list} கற்றுக்கொண்டீர்கள்! இன்று யாருடனாவது இவற்றைச் சைகை செய்து பாருங்கள்.",
  great_job: "அருமை, எல்லாச் சைகைகளையும் நினைவில் வைத்தீர்கள்!", coming_soon: "விரைவில் வருகிறது",
  not_ready: "இந்த நிறுத்தம் இன்னும் தயாராகவில்லை. பிறகு பாருங்கள்!", and: "மற்றும்", lesson_progress: "பாட முன்னேற்றம்",
  dict_title: "சைகை அகராதி", dict_sub: "உங்கள் மொழியைத் தேர்ந்தெடுத்து, சைகையைப் பார்க்க ஒரு சொல்லைத் தட்டவும்.",
  your_lang: "உங்கள் மொழி", all: "அனைத்தும்", search: "சைகைகளைத் தேடு…", english_label: "ஆங்கிலம்", hindi_label: "இந்தி",
  same_sign: "சைகை எல்லா மொழிகளிலும் ஒன்றே. சொல் மட்டுமே மாறும்.",
  practise_lesson: "பாடத்தில் பயிற்சி செய்", no_results: "சைகைகள் கிடைக்கவில்லை. வேறு சொல்லை முயற்சிக்கவும்.", topic: "தலைப்பு",
},
gu: {
  home: "હોમ", close_lesson: "પાઠ બંધ કરો", choose_lang: "તમારી ભાષા પસંદ કરો", language: "ભાષા",
  streak: "સતત {n} દિવસ", profile: "તમારી પ્રોફાઇલ", namaste: "નમસ્તે!", namaste_name: "નમસ્તે, {name}!",
  ready: "આજે થોડા સંકેતો શીખવા તૈયાર છો?", nudge_first: "ચાલો, તમારો પહેલો સંકેત શીખીએ!", nudge_next: "હવે પછી: {stop}. ચાલુ રાખો!",
  chapter1: "પ્રકરણ 1", stops_finished: "પૂરા થયેલા પડાવ", to_go: "હજુ {n} બાકી", chapter_done: "પ્રકરણ પૂર્ણ!",
  chapter_name: "રોજિંદા શબ્દો", learn_isl: "ISL શીખો", next_stop: "આગલો પડાવ:", finished_chapter: "તમે પ્રકરણ પૂરું કર્યું!",
  start: "શરૂ કરો", continue: "આગળ વધો", sotd: "આજનો સંકેત", play_sotd: "આજનો સંકેત ચલાવો",
  my_progress: "મારી પ્રગતિ", level1: "સ્તર 1 · શરૂઆત", level2: "સ્તર 2 · શોધક",
  signs_of: "{b} માંથી {a} સંકેતો", stops_of: "{b} માંથી {a} પડાવ", this_week: "આ અઠવાડિયે",
  translator: "અનુવાદક", ten_langs: "10 ભારતીય ભાષાઓ",
  ask_title: "Signify ને પૂછો", ask_sub: "સાંકેતિક ભાષા કે બધિર સંસ્કૃતિ વિશે કંઈ પણ પૂછો.",
  ask_hi: "નમસ્તે! હું તમારો Signify મદદનીશ છું. મને પ્રશ્ન પૂછો, અથવા આમાંથી કોઈ અજમાવો:",
  chip1: "\"આભાર\" નો સંકેત કેવી રીતે કરવો?", chip2: "શું ISL અને ASL એક જ છે?", chip3: "બધિર સંસ્કૃતિ એટલે શું?",
  ask_ph: "તમારો પ્રશ્ન લખો...", your_question: "તમારો પ્રશ્ન", send: "મોકલો", thinking: "વિચારું છું...",
  err_generic: "કંઈક ખોટું થયું. ફરી પ્રયત્ન કરો.", err_connect: "જોડાઈ શકાયું નહીં. ઇન્ટરનેટ તપાસીને ફરી પ્રયત્ન કરો.",
  recent: "તાજેતરમાં શીખેલા", recent_sub: "ફરી જોવા માટે સંકેત પર ટૅપ કરો", recent_none_sub: "તમારા પહેલા સંકેતો અહીં દેખાશે.",
  recent_none: "હજુ કોઈ સંકેત નથી. તમારો પહેલો પાઠ લગભગ 5 મિનિટનો છે.", start_first: "તમારો પહેલો પાઠ શરૂ કરો",
  review_all: "બધા {n} સંકેતો ફરી જુઓ",
  stop_food: "ખોરાક", stop_quiz: "ક્વિઝ", stop_family: "પરિવાર", stop_needs: "જરૂરિયાતો", stop_help: "મદદ",
  stop_feelings: "લાગણીઓ", stop_final: "અંતિમ કસોટી", stops_done: "{b} માંથી {a} પડાવ પૂરા", dock_start: "શરૂ",
  new_sign: "નવો સંકેત", practice: "અભ્યાસ", speed: "ઝડપ", mirror: "અરીસો", means: "આ સંકેતનો અર્થ",
  tip: "ટીપ:", in_stop: "આ પડાવના સંકેતો", how_practise: "અભ્યાસ કેવી રીતે કરવો",
  step1_html: "પહેલા એક વાર <strong>0.5×</strong> ઝડપે જુઓ", step2_html: "<strong>અરીસો</strong> ચાલુ કરો અને સાથે કરો",
  step3: "જોયા વિના પૂરી ઝડપે કરી જુઓ", watch_again: "ફરી જુઓ", got_it: "સમજાઈ ગયું",
  what_mean: "આ સંકેતનો અર્થ શું છે?", stop_complete: "પડાવ પૂરો!", back_ocean: "દરિયા પર પાછા",
  learned: "શીખ્યા", now: "હવે", next: "પછી",
  m_hi: "નમસ્તે! ચાલો એક સંકેત શીખીએ", m_watch: "ધ્યાનથી જુઓ, પછી સંકેત કરો!", m_which: "આ કયો શબ્દ છે?",
  m_yay: "વાહ! સાચું!", m_close: "લગભગ! ફરી પ્રયત્ન કરીશું", m_done: "તમે કરી બતાવ્યું!",
  cheer1: "નમસ્તે!", cheer2: "તમે સરસ કરો છો!", cheer3: "ચાલુ રાખો!", cheer4: "હાઈ ફાઈવ!",
  mascot_btn: "માસ્કોટને હાય કહો", correct: "સાચું!", not_quite: "ના. આ {word} છે",
  you_learned: "તમે {list} શીખ્યા! આજે {name} સાથે આ સંકેતો કરી જુઓ.",
  you_learned_anon: "તમે {list} શીખ્યા! આજે કોઈની સાથે આ સંકેતો કરી જુઓ.",
  great_job: "શાબાશ, તમને બધા સંકેતો યાદ રહ્યા!", coming_soon: "ટૂંક સમયમાં",
  not_ready: "આ પડાવ હજુ તૈયાર નથી. પછી જુઓ!", and: "અને", lesson_progress: "પાઠની પ્રગતિ",
  dict_title: "સંકેત શબ્દકોશ", dict_sub: "તમારી ભાષા પસંદ કરો, પછી સંકેત જોવા શબ્દ પર ટૅપ કરો.",
  your_lang: "તમારી ભાષા", all: "બધા", search: "સંકેતો શોધો…", english_label: "અંગ્રેજી", hindi_label: "હિન્દી",
  same_sign: "સંકેત દરેક ભાષામાં સરખો છે. ફક્ત શબ્દ બદલાય છે.",
  practise_lesson: "પાઠમાં અભ્યાસ કરો", no_results: "કોઈ સંકેત મળ્યો નહીં. બીજો શબ્દ અજમાવો.", topic: "વિષય",
},
kn: {
  home: "ಮುಖಪುಟ", close_lesson: "ಪಾಠ ಮುಚ್ಚಿ", choose_lang: "ನಿಮ್ಮ ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ", language: "ಭಾಷೆ",
  streak: "ಸತತ {n} ದಿನ", profile: "ನಿಮ್ಮ ಪ್ರೊಫೈಲ್", namaste: "ನಮಸ್ಕಾರ!", namaste_name: "ನಮಸ್ಕಾರ, {name}!",
  ready: "ಇಂದು ಕೆಲವು ಸಂಜ್ಞೆಗಳನ್ನು ಕಲಿಯಲು ಸಿದ್ಧರಿದ್ದೀರಾ?", nudge_first: "ಬನ್ನಿ, ನಿಮ್ಮ ಮೊದಲ ಸಂಜ್ಞೆ ಕಲಿಯೋಣ!", nudge_next: "ಮುಂದೆ: {stop}. ಹೀಗೆ ಮುಂದುವರಿಸಿ!",
  chapter1: "ಅಧ್ಯಾಯ 1", stops_finished: "ಮುಗಿದ ನಿಲ್ದಾಣಗಳು", to_go: "ಇನ್ನೂ {n}", chapter_done: "ಅಧ್ಯಾಯ ಮುಗಿಯಿತು!",
  chapter_name: "ದಿನನಿತ್ಯದ ಪದಗಳು", learn_isl: "ISL ಕಲಿಯಿರಿ", next_stop: "ಮುಂದಿನ ನಿಲ್ದಾಣ:", finished_chapter: "ನೀವು ಅಧ್ಯಾಯ ಮುಗಿಸಿದ್ದೀರಿ!",
  start: "ಪ್ರಾರಂಭಿಸಿ", continue: "ಮುಂದುವರಿಸಿ", sotd: "ಇಂದಿನ ಸಂಜ್ಞೆ", play_sotd: "ಇಂದಿನ ಸಂಜ್ಞೆ ಪ್ಲೇ ಮಾಡಿ",
  my_progress: "ನನ್ನ ಪ್ರಗತಿ", level1: "ಹಂತ 1 · ಆರಂಭಿಕ", level2: "ಹಂತ 2 · ಅನ್ವೇಷಕ",
  signs_of: "{b} ರಲ್ಲಿ {a} ಸಂಜ್ಞೆಗಳು", stops_of: "{b} ರಲ್ಲಿ {a} ನಿಲ್ದಾಣಗಳು", this_week: "ಈ ವಾರ",
  translator: "ಅನುವಾದಕ", ten_langs: "10 ಭಾರತೀಯ ಭಾಷೆಗಳು",
  ask_title: "Signify ಅನ್ನು ಕೇಳಿ", ask_sub: "ಸಂಜ್ಞಾ ಭಾಷೆ ಅಥವಾ ಕಿವುಡರ ಸಂಸ್ಕೃತಿಯ ಬಗ್ಗೆ ಏನು ಬೇಕಾದರೂ ಕೇಳಿ.",
  ask_hi: "ನಮಸ್ಕಾರ! ನಾನು ನಿಮ್ಮ Signify ಸಹಾಯಕ. ನನಗೆ ಪ್ರಶ್ನೆ ಕೇಳಿ, ಅಥವಾ ಇವುಗಳಲ್ಲಿ ಒಂದನ್ನು ಪ್ರಯತ್ನಿಸಿ:",
  chip1: "\"ಧನ್ಯವಾದ\" ಸಂಜ್ಞೆ ಹೇಗೆ ಮಾಡುವುದು?", chip2: "ISL ಮತ್ತು ASL ಒಂದೇನಾ?", chip3: "ಕಿವುಡರ ಸಂಸ್ಕೃತಿ ಎಂದರೇನು?",
  ask_ph: "ನಿಮ್ಮ ಪ್ರಶ್ನೆ ಬರೆಯಿರಿ...", your_question: "ನಿಮ್ಮ ಪ್ರಶ್ನೆ", send: "ಕಳುಹಿಸಿ", thinking: "ಯೋಚಿಸುತ್ತಿದ್ದೇನೆ...",
  err_generic: "ಏನೋ ತಪ್ಪಾಗಿದೆ. ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.", err_connect: "ಸಂಪರ್ಕಿಸಲು ಆಗಲಿಲ್ಲ. ಇಂಟರ್ನೆಟ್ ಪರಿಶೀಲಿಸಿ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
  recent: "ಇತ್ತೀಚೆಗೆ ಕಲಿತವು", recent_sub: "ಮತ್ತೆ ನೋಡಲು ಸಂಜ್ಞೆಯ ಮೇಲೆ ಟ್ಯಾಪ್ ಮಾಡಿ", recent_none_sub: "ನಿಮ್ಮ ಮೊದಲ ಸಂಜ್ಞೆಗಳು ಇಲ್ಲಿ ಕಾಣಿಸುತ್ತವೆ.",
  recent_none: "ಇನ್ನೂ ಸಂಜ್ಞೆಗಳಿಲ್ಲ. ನಿಮ್ಮ ಮೊದಲ ಪಾಠ ಸುಮಾರು 5 ನಿಮಿಷ.", start_first: "ನಿಮ್ಮ ಮೊದಲ ಪಾಠ ಪ್ರಾರಂಭಿಸಿ",
  review_all: "ಎಲ್ಲಾ {n} ಸಂಜ್ಞೆಗಳನ್ನು ಮತ್ತೆ ನೋಡಿ",
  stop_food: "ಆಹಾರ", stop_quiz: "ರಸಪ್ರಶ್ನೆ", stop_family: "ಕುಟುಂಬ", stop_needs: "ಅಗತ್ಯಗಳು", stop_help: "ಸಹಾಯ",
  stop_feelings: "ಭಾವನೆಗಳು", stop_final: "ಅಂತಿಮ ಪರೀಕ್ಷೆ", stops_done: "{b} ರಲ್ಲಿ {a} ನಿಲ್ದಾಣಗಳು ಮುಗಿದಿವೆ", dock_start: "ಆರಂಭ",
  new_sign: "ಹೊಸ ಸಂಜ್ಞೆ", practice: "ಅಭ್ಯಾಸ", speed: "ವೇಗ", mirror: "ಕನ್ನಡಿ", means: "ಈ ಸಂಜ್ಞೆಯ ಅರ್ಥ",
  tip: "ಸಲಹೆ:", in_stop: "ಈ ನಿಲ್ದಾಣದ ಸಂಜ್ಞೆಗಳು", how_practise: "ಅಭ್ಯಾಸ ಮಾಡುವುದು ಹೇಗೆ",
  step1_html: "ಮೊದಲು ಒಮ್ಮೆ <strong>0.5×</strong> ವೇಗದಲ್ಲಿ ನೋಡಿ", step2_html: "<strong>ಕನ್ನಡಿ</strong> ಆನ್ ಮಾಡಿ ಜೊತೆಗೆ ಮಾಡಿ",
  step3: "ನೋಡದೆ ಪೂರ್ಣ ವೇಗದಲ್ಲಿ ಪ್ರಯತ್ನಿಸಿ", watch_again: "ಮತ್ತೆ ನೋಡಿ", got_it: "ಅರ್ಥವಾಯಿತು",
  what_mean: "ಈ ಸಂಜ್ಞೆಯ ಅರ್ಥವೇನು?", stop_complete: "ನಿಲ್ದಾಣ ಮುಗಿಯಿತು!", back_ocean: "ಸಮುದ್ರಕ್ಕೆ ಹಿಂತಿರುಗಿ",
  learned: "ಕಲಿತಿದ್ದೀರಿ", now: "ಈಗ", next: "ಮುಂದೆ",
  m_hi: "ನಮಸ್ಕಾರ! ಒಂದು ಸಂಜ್ಞೆ ಕಲಿಯೋಣ", m_watch: "ಗಮನವಿಟ್ಟು ನೋಡಿ, ನಂತರ ಸಂಜ್ಞೆ ಮಾಡಿ!", m_which: "ಇದು ಯಾವ ಪದ?",
  m_yay: "ಅದ್ಭುತ! ಸರಿಯಾಗಿದೆ!", m_close: "ಬಹುತೇಕ! ಮತ್ತೆ ಪ್ರಯತ್ನಿಸೋಣ", m_done: "ನೀವು ಸಾಧಿಸಿದಿರಿ!",
  cheer1: "ನಮಸ್ಕಾರ!", cheer2: "ನೀವು ತುಂಬಾ ಚೆನ್ನಾಗಿ ಮಾಡುತ್ತಿದ್ದೀರಿ!", cheer3: "ಹೀಗೆ ಮುಂದುವರಿಸಿ!", cheer4: "ಹೈ ಫೈವ್!",
  mascot_btn: "ಮ್ಯಾಸ್ಕಾಟ್‌ಗೆ ಹಾಯ್ ಹೇಳಿ", correct: "ಸರಿ!", not_quite: "ಅಲ್ಲ. ಇದು {word}",
  you_learned: "ನೀವು {list} ಕಲಿತಿರಿ! ಇಂದು {name} ಜೊತೆ ಇವುಗಳನ್ನು ಸಂಜ್ಞೆ ಮಾಡಿ ನೋಡಿ.",
  you_learned_anon: "ನೀವು {list} ಕಲಿತಿರಿ! ಇಂದು ಯಾರಾದರೂ ಜೊತೆ ಇವುಗಳನ್ನು ಸಂಜ್ಞೆ ಮಾಡಿ ನೋಡಿ.",
  great_job: "ಶಭಾಶ್, ನಿಮಗೆ ಎಲ್ಲಾ ಸಂಜ್ಞೆಗಳು ನೆನಪಿವೆ!", coming_soon: "ಶೀಘ್ರದಲ್ಲೇ",
  not_ready: "ಈ ನಿಲ್ದಾಣ ಇನ್ನೂ ಸಿದ್ಧವಾಗಿಲ್ಲ. ನಂತರ ನೋಡಿ!", and: "ಮತ್ತು", lesson_progress: "ಪಾಠದ ಪ್ರಗತಿ",
  dict_title: "ಸಂಜ್ಞೆ ನಿಘಂಟು", dict_sub: "ನಿಮ್ಮ ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ, ನಂತರ ಸಂಜ್ಞೆ ನೋಡಲು ಪದದ ಮೇಲೆ ಟ್ಯಾಪ್ ಮಾಡಿ.",
  your_lang: "ನಿಮ್ಮ ಭಾಷೆ", all: "ಎಲ್ಲಾ", search: "ಸಂಜ್ಞೆಗಳನ್ನು ಹುಡುಕಿ…", english_label: "ಇಂಗ್ಲಿಷ್", hindi_label: "ಹಿಂದಿ",
  same_sign: "ಸಂಜ್ಞೆ ಎಲ್ಲಾ ಭಾಷೆಗಳಲ್ಲೂ ಒಂದೇ. ಪದ ಮಾತ್ರ ಬದಲಾಗುತ್ತದೆ.",
  practise_lesson: "ಪಾಠದಲ್ಲಿ ಅಭ್ಯಾಸ ಮಾಡಿ", no_results: "ಯಾವುದೇ ಸಂಜ್ಞೆ ಸಿಗಲಿಲ್ಲ. ಬೇರೆ ಪದ ಪ್ರಯತ್ನಿಸಿ.", topic: "ವಿಷಯ",
},
or: {
  home: "ମୂଳ ପୃଷ୍ଠା", close_lesson: "ପାଠ ବନ୍ଦ କରନ୍ତୁ", choose_lang: "ଆପଣଙ୍କ ଭାଷା ବାଛନ୍ତୁ", language: "ଭାଷା",
  streak: "ଲଗାତାର {n} ଦିନ", profile: "ଆପଣଙ୍କ ପ୍ରୋଫାଇଲ୍", namaste: "ନମସ୍କାର!", namaste_name: "ନମସ୍କାର, {name}!",
  ready: "ଆଜି କିଛି ସଙ୍କେତ ଶିଖିବାକୁ ପ୍ରସ୍ତୁତ କି?", nudge_first: "ଆସନ୍ତୁ, ଆପଣଙ୍କ ପ୍ରଥମ ସଙ୍କେତ ଶିଖିବା!", nudge_next: "ପରେ: {stop}। ଏମିତି ଜାରି ରଖନ୍ତୁ!",
  chapter1: "ଅଧ୍ୟାୟ 1", stops_finished: "ସମ୍ପୂର୍ଣ୍ଣ ହୋଇଥିବା ଷ୍ଟପ୍", to_go: "ଆଉ {n}ଟି ବାକି", chapter_done: "ଅଧ୍ୟାୟ ସମ୍ପୂର୍ଣ୍ଣ!",
  chapter_name: "ଦୈନନ୍ଦିନ ଶବ୍ଦ", learn_isl: "ISL ଶିଖନ୍ତୁ", next_stop: "ପରବର୍ତ୍ତୀ ଷ୍ଟପ୍:", finished_chapter: "ଆପଣ ଅଧ୍ୟାୟ ସମ୍ପୂର୍ଣ୍ଣ କଲେ!",
  start: "ଆରମ୍ଭ କରନ୍ତୁ", continue: "ଜାରି ରଖନ୍ତୁ", sotd: "ଆଜିର ସଙ୍କେତ", play_sotd: "ଆଜିର ସଙ୍କେତ ଚଲାନ୍ତୁ",
  my_progress: "ମୋ ପ୍ରଗତି", level1: "ସ୍ତର 1 · ଆରମ୍ଭକାରୀ", level2: "ସ୍ତର 2 · ଅନ୍ୱେଷକ",
  signs_of: "{b}ରୁ {a}ଟି ସଙ୍କେତ", stops_of: "{b}ରୁ {a}ଟି ଷ୍ଟପ୍", this_week: "ଏହି ସପ୍ତାହ",
  translator: "ଅନୁବାଦକ", ten_langs: "10ଟି ଭାରତୀୟ ଭାଷା",
  ask_title: "Signifyକୁ ପଚାରନ୍ତୁ", ask_sub: "ସଙ୍କେତ ଭାଷା ବା ବଧିର ସଂସ୍କୃତି ବିଷୟରେ ଯାହା ବି ପଚାରନ୍ତୁ।",
  ask_hi: "ନମସ୍କାର! ମୁଁ ଆପଣଙ୍କ Signify ସହାୟକ। ମୋତେ ପ୍ରଶ୍ନ ପଚାରନ୍ତୁ, କିମ୍ବା ଏଥିରୁ ଗୋଟିଏ ଚେଷ୍ଟା କରନ୍ତୁ:",
  chip1: "\"ଧନ୍ୟବାଦ\"ର ସଙ୍କେତ କିପରି କରିବି?", chip2: "ISL ଆଉ ASL କ'ଣ ସମାନ?", chip3: "ବଧିର ସଂସ୍କୃତି କ'ଣ?",
  ask_ph: "ଆପଣଙ୍କ ପ୍ରଶ୍ନ ଲେଖନ୍ତୁ...", your_question: "ଆପଣଙ୍କ ପ୍ରଶ୍ନ", send: "ପଠାନ୍ତୁ", thinking: "ଭାବୁଛି...",
  err_generic: "କିଛି ଭୁଲ ହେଲା। ପୁଣି ଚେଷ୍ଟା କରନ୍ତୁ।", err_connect: "ସଂଯୋଗ ହେଲା ନାହିଁ। ଇଣ୍ଟରନେଟ୍ ଯାଞ୍ଚ କରି ପୁଣି ଚେଷ୍ଟା କରନ୍ତୁ।",
  recent: "ନିକଟରେ ଶିଖିଥିବା", recent_sub: "ପୁଣି ଦେଖିବାକୁ ଏକ ସଙ୍କେତରେ ଟ୍ୟାପ୍ କରନ୍ତୁ", recent_none_sub: "ଆପଣଙ୍କ ପ୍ରଥମ ସଙ୍କେତ ଏଠାରେ ଦେଖାଯିବ।",
  recent_none: "ଏପର୍ଯ୍ୟନ୍ତ କୌଣସି ସଙ୍କେତ ନାହିଁ। ପ୍ରଥମ ପାଠ ପ୍ରାୟ 5 ମିନିଟ୍।", start_first: "ଆପଣଙ୍କ ପ୍ରଥମ ପାଠ ଆରମ୍ଭ କରନ୍ତୁ",
  review_all: "ସବୁ {n}ଟି ସଙ୍କେତ ପୁଣି ଦେଖନ୍ତୁ",
  stop_food: "ଖାଦ୍ୟ", stop_quiz: "କୁଇଜ୍", stop_family: "ପରିବାର", stop_needs: "ଆବଶ୍ୟକତା", stop_help: "ସାହାଯ୍ୟ",
  stop_feelings: "ଭାବନା", stop_final: "ଅନ୍ତିମ ପରୀକ୍ଷା", stops_done: "{b}ରୁ {a}ଟି ଷ୍ଟପ୍ ସମ୍ପୂର୍ଣ୍ଣ", dock_start: "ଆରମ୍ଭ",
  new_sign: "ନୂଆ ସଙ୍କେତ", practice: "ଅଭ୍ୟାସ", speed: "ଗତି", mirror: "ଦର୍ପଣ", means: "ଏହି ସଙ୍କେତର ଅର୍ଥ",
  tip: "ପରାମର୍ଶ:", in_stop: "ଏହି ଷ୍ଟପ୍‌ର ସଙ୍କେତ", how_practise: "କିପରି ଅଭ୍ୟାସ କରିବେ",
  step1_html: "ପ୍ରଥମେ ଥରେ <strong>0.5×</strong> ଗତିରେ ଦେଖନ୍ତୁ", step2_html: "<strong>ଦର୍ପଣ</strong> ଚାଲୁ କରି ସାଙ୍ଗରେ କରନ୍ତୁ",
  step3: "ନ ଦେଖି ପୂର୍ଣ୍ଣ ଗତିରେ କରି ଦେଖନ୍ତୁ", watch_again: "ପୁଣି ଦେଖନ୍ତୁ", got_it: "ବୁଝିଗଲି",
  what_mean: "ଏହି ସଙ୍କେତର ଅର୍ଥ କ'ଣ?", stop_complete: "ଷ୍ଟପ୍ ସମ୍ପୂର୍ଣ୍ଣ!", back_ocean: "ସମୁଦ୍ରକୁ ଫେରନ୍ତୁ",
  learned: "ଶିଖିଲେ", now: "ବର୍ତ୍ତମାନ", next: "ପରେ",
  m_hi: "ନମସ୍କାର! ଆସନ୍ତୁ ଏକ ସଙ୍କେତ ଶିଖିବା", m_watch: "ଧ୍ୟାନରେ ଦେଖନ୍ତୁ, ତା'ପରେ ସଙ୍କେତ କରନ୍ତୁ!", m_which: "ଏହା କେଉଁ ଶବ୍ଦ?",
  m_yay: "ବାଃ! ଠିକ୍ ହେଲା!", m_close: "ପ୍ରାୟ! ପୁଣି ଚେଷ୍ଟା କରିବା", m_done: "ଆପଣ କରି ଦେଖାଇଲେ!",
  cheer1: "ନମସ୍କାର!", cheer2: "ଆପଣ ବହୁତ ଭଲ କରୁଛନ୍ତି!", cheer3: "ଜାରି ରଖନ୍ତୁ!", cheer4: "ହାଇ ଫାଇଭ୍!",
  mascot_btn: "ମାସ୍କଟ୍‌କୁ ହାଏ କୁହନ୍ତୁ", correct: "ଠିକ୍!", not_quite: "ନୁହେଁ। ଏହା {word}",
  you_learned: "ଆପଣ {list} ଶିଖିଲେ! ଆଜି {name}ଙ୍କ ସହ ଏଗୁଡ଼ିକ ସଙ୍କେତ କରି ଦେଖନ୍ତୁ।",
  you_learned_anon: "ଆପଣ {list} ଶିଖିଲେ! ଆଜି କାହା ସହ ଏଗୁଡ଼ିକ ସଙ୍କେତ କରି ଦେଖନ୍ତୁ।",
  great_job: "ବାହାବା, ଆପଣଙ୍କୁ ସବୁ ସଙ୍କେତ ମନେ ଅଛି!", coming_soon: "ଶୀଘ୍ର ଆସୁଛି",
  not_ready: "ଏହି ଷ୍ଟପ୍ ଏପର୍ଯ୍ୟନ୍ତ ପ୍ରସ୍ତୁତ ନୁହେଁ। ପରେ ଦେଖନ୍ତୁ!", and: "ଓ", lesson_progress: "ପାଠର ପ୍ରଗତି",
  dict_title: "ସଙ୍କେତ ଅଭିଧାନ", dict_sub: "ଆପଣଙ୍କ ଭାଷା ବାଛନ୍ତୁ, ତା'ପରେ ସଙ୍କେତ ଦେଖିବାକୁ ଏକ ଶବ୍ଦରେ ଟ୍ୟାପ୍ କରନ୍ତୁ।",
  your_lang: "ଆପଣଙ୍କ ଭାଷା", all: "ସବୁ", search: "ସଙ୍କେତ ଖୋଜନ୍ତୁ…", english_label: "ଇଂରାଜୀ", hindi_label: "ହିନ୍ଦୀ",
  same_sign: "ସଙ୍କେତ ସବୁ ଭାଷାରେ ସମାନ। କେବଳ ଶବ୍ଦ ବଦଳେ।",
  practise_lesson: "ପାଠରେ ଅଭ୍ୟାସ କରନ୍ତୁ", no_results: "କୌଣସି ସଙ୍କେତ ମିଳିଲା ନାହିଁ। ଅନ୍ୟ ଶବ୍ଦ ଚେଷ୍ଟା କରନ୍ତୁ।", topic: "ବିଷୟ",
},
ml: {
  home: "ഹോം", close_lesson: "പാഠം അടയ്ക്കുക", choose_lang: "നിങ്ങളുടെ ഭാഷ തിരഞ്ഞെടുക്കുക", language: "ഭാഷ",
  streak: "തുടർച്ചയായി {n} ദിവസം", profile: "നിങ്ങളുടെ പ്രൊഫൈൽ", namaste: "നമസ്കാരം!", namaste_name: "നമസ്കാരം, {name}!",
  ready: "ഇന്ന് കുറച്ച് ആംഗ്യങ്ങൾ പഠിക്കാൻ തയ്യാറാണോ?", nudge_first: "വരൂ, നിങ്ങളുടെ ആദ്യ ആംഗ്യം പഠിക്കാം!", nudge_next: "അടുത്തത്: {stop}. തുടരൂ!",
  chapter1: "അധ്യായം 1", stops_finished: "പൂർത്തിയാക്കിയ സ്റ്റോപ്പുകൾ", to_go: "ഇനി {n}", chapter_done: "അധ്യായം പൂർത്തിയായി!",
  chapter_name: "ദൈനംദിന വാക്കുകൾ", learn_isl: "ISL പഠിക്കാം", next_stop: "അടുത്ത സ്റ്റോപ്പ്:", finished_chapter: "നിങ്ങൾ അധ്യായം പൂർത്തിയാക്കി!",
  start: "തുടങ്ങാം", continue: "തുടരുക", sotd: "ഇന്നത്തെ ആംഗ്യം", play_sotd: "ഇന്നത്തെ ആംഗ്യം പ്ലേ ചെയ്യുക",
  my_progress: "എന്റെ പുരോഗതി", level1: "ലെവൽ 1 · തുടക്കക്കാരൻ", level2: "ലെവൽ 2 · പര്യവേക്ഷകൻ",
  signs_of: "{b}-ൽ {a} ആംഗ്യങ്ങൾ", stops_of: "{b}-ൽ {a} സ്റ്റോപ്പുകൾ", this_week: "ഈ ആഴ്ച",
  translator: "വിവർത്തകൻ", ten_langs: "10 ഇന്ത്യൻ ഭാഷകൾ",
  ask_title: "Signify-യോട് ചോദിക്കൂ", ask_sub: "ആംഗ്യഭാഷയെക്കുറിച്ചോ ബധിര സംസ്കാരത്തെക്കുറിച്ചോ എന്തും ചോദിക്കൂ.",
  ask_hi: "നമസ്കാരം! ഞാൻ നിങ്ങളുടെ Signify സഹായിയാണ്. എന്നോട് ഒരു ചോദ്യം ചോദിക്കൂ, അല്ലെങ്കിൽ ഇവയിൽ ഒന്ന് പരീക്ഷിക്കൂ:",
  chip1: "\"നന്ദി\" എങ്ങനെ ആംഗ്യം കാണിക്കാം?", chip2: "ISL-ഉം ASL-ഉം ഒന്നാണോ?", chip3: "ബധിര സംസ്കാരം എന്താണ്?",
  ask_ph: "നിങ്ങളുടെ ചോദ്യം എഴുതുക...", your_question: "നിങ്ങളുടെ ചോദ്യം", send: "അയയ്ക്കുക", thinking: "ആലോചിക്കുന്നു...",
  err_generic: "എന്തോ പിശക് സംഭവിച്ചു. വീണ്ടും ശ്രമിക്കുക.", err_connect: "കണക്റ്റ് ചെയ്യാനായില്ല. ഇന്റർനെറ്റ് പരിശോധിച്ച് വീണ്ടും ശ്രമിക്കുക.",
  recent: "അടുത്തിടെ പഠിച്ചവ", recent_sub: "വീണ്ടും കാണാൻ ഒരു ആംഗ്യത്തിൽ ടാപ്പ് ചെയ്യുക", recent_none_sub: "നിങ്ങളുടെ ആദ്യ ആംഗ്യങ്ങൾ ഇവിടെ കാണാം.",
  recent_none: "ഇതുവരെ ആംഗ്യങ്ങളൊന്നുമില്ല. ആദ്യ പാഠം ഏകദേശം 5 മിനിറ്റാണ്.", start_first: "ആദ്യ പാഠം തുടങ്ങുക",
  review_all: "എല്ലാ {n} ആംഗ്യങ്ങളും വീണ്ടും കാണുക",
  stop_food: "ഭക്ഷണം", stop_quiz: "ക്വിസ്", stop_family: "കുടുംബം", stop_needs: "ആവശ്യങ്ങൾ", stop_help: "സഹായം",
  stop_feelings: "വികാരങ്ങൾ", stop_final: "അവസാന പരീക്ഷ", stops_done: "{b}-ൽ {a} സ്റ്റോപ്പുകൾ പൂർത്തിയായി", dock_start: "തുടങ്ങാം",
  new_sign: "പുതിയ ആംഗ്യം", practice: "പരിശീലനം", speed: "വേഗത", mirror: "കണ്ണാടി", means: "ഈ ആംഗ്യത്തിന്റെ അർത്ഥം",
  tip: "നുറുങ്ങ്:", in_stop: "ഈ സ്റ്റോപ്പിലെ ആംഗ്യങ്ങൾ", how_practise: "എങ്ങനെ പരിശീലിക്കാം",
  step1_html: "ആദ്യം ഒരിക്കൽ <strong>0.5×</strong> വേഗതയിൽ കാണുക", step2_html: "<strong>കണ്ണാടി</strong> ഓണാക്കി കൂടെ ചെയ്യുക",
  step3: "നോക്കാതെ മുഴുവൻ വേഗതയിൽ ശ്രമിക്കുക", watch_again: "വീണ്ടും കാണുക", got_it: "മനസ്സിലായി",
  what_mean: "ഈ ആംഗ്യത്തിന്റെ അർത്ഥം എന്താണ്?", stop_complete: "സ്റ്റോപ്പ് പൂർത്തിയായി!", back_ocean: "കടലിലേക്ക് മടങ്ങുക",
  learned: "പഠിച്ചു", now: "ഇപ്പോൾ", next: "അടുത്തത്",
  m_hi: "നമസ്കാരം! നമുക്ക് ഒരു ആംഗ്യം പഠിക്കാം", m_watch: "ശ്രദ്ധിച്ച് കാണുക, എന്നിട്ട് ആംഗ്യം ചെയ്യുക!", m_which: "ഇത് ഏത് വാക്കാണ്?",
  m_yay: "കൊള്ളാം! ശരിയാണ്!", m_close: "ഏതാണ്ട്! നമുക്ക് വീണ്ടും ശ്രമിക്കാം", m_done: "നിങ്ങൾ ചെയ്തു!",
  cheer1: "നമസ്കാരം!", cheer2: "നിങ്ങൾ നന്നായി ചെയ്യുന്നു!", cheer3: "തുടരൂ!", cheer4: "ഹൈ ഫൈവ്!",
  mascot_btn: "മാസ്കോട്ടിനോട് ഹായ് പറയൂ", correct: "ശരി!", not_quite: "അല്ല. ഇത് {word} ആണ്",
  you_learned: "നിങ്ങൾ {list} പഠിച്ചു! ഇന്ന് {name}-നൊപ്പം ഇവ ആംഗ്യം കാണിച്ചു നോക്കൂ.",
  you_learned_anon: "നിങ്ങൾ {list} പഠിച്ചു! ഇന്ന് ആരുടെയെങ്കിലും കൂടെ ഇവ ആംഗ്യം കാണിച്ചു നോക്കൂ.",
  great_job: "മിടുക്ക്, എല്ലാ ആംഗ്യങ്ങളും ഓർമ്മയുണ്ട്!", coming_soon: "ഉടൻ വരുന്നു",
  not_ready: "ഈ സ്റ്റോപ്പ് ഇതുവരെ തയ്യാറായിട്ടില്ല. പിന്നീട് നോക്കൂ!", and: "ഒപ്പം", lesson_progress: "പാഠത്തിന്റെ പുരോഗതി",
  dict_title: "ആംഗ്യ നിഘണ്ടു", dict_sub: "നിങ്ങളുടെ ഭാഷ തിരഞ്ഞെടുക്കുക, ആംഗ്യം കാണാൻ ഒരു വാക്കിൽ ടാപ്പ് ചെയ്യുക.",
  your_lang: "നിങ്ങളുടെ ഭാഷ", all: "എല്ലാം", search: "ആംഗ്യങ്ങൾ തിരയുക…", english_label: "ഇംഗ്ലീഷ്", hindi_label: "ഹിന്ദി",
  same_sign: "ആംഗ്യം എല്ലാ ഭാഷകളിലും ഒന്നുതന്നെ. വാക്ക് മാത്രം മാറുന്നു.",
  practise_lesson: "പാഠത്തിൽ പരിശീലിക്കുക", no_results: "ആംഗ്യങ്ങളൊന്നും കണ്ടെത്തിയില്ല. മറ്റൊരു വാക്ക് ശ്രമിക്കുക.", topic: "വിഷയം",
},
pa: {
  home: "ਹੋਮ", close_lesson: "ਪਾਠ ਬੰਦ ਕਰੋ", choose_lang: "ਆਪਣੀ ਭਾਸ਼ਾ ਚੁਣੋ", language: "ਭਾਸ਼ਾ",
  streak: "ਲਗਾਤਾਰ {n} ਦਿਨ", profile: "ਤੁਹਾਡੀ ਪ੍ਰੋਫਾਈਲ", namaste: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ!", namaste_name: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ, {name}!",
  ready: "ਕੀ ਅੱਜ ਕੁਝ ਸੰਕੇਤ ਸਿੱਖਣ ਲਈ ਤਿਆਰ ਹੋ?", nudge_first: "ਆਓ, ਆਪਣਾ ਪਹਿਲਾ ਸੰਕੇਤ ਸਿੱਖੀਏ!", nudge_next: "ਅੱਗੇ: {stop}। ਲੱਗੇ ਰਹੋ!",
  chapter1: "ਅਧਿਆਇ 1", stops_finished: "ਪੂਰੇ ਹੋਏ ਪੜਾਅ", to_go: "{n} ਬਾਕੀ", chapter_done: "ਅਧਿਆਇ ਪੂਰਾ!",
  chapter_name: "ਰੋਜ਼ਾਨਾ ਦੇ ਸ਼ਬਦ", learn_isl: "ISL ਸਿੱਖੋ", next_stop: "ਅਗਲਾ ਪੜਾਅ:", finished_chapter: "ਤੁਸੀਂ ਅਧਿਆਇ ਪੂਰਾ ਕਰ ਲਿਆ!",
  start: "ਸ਼ੁਰੂ ਕਰੋ", continue: "ਜਾਰੀ ਰੱਖੋ", sotd: "ਅੱਜ ਦਾ ਸੰਕੇਤ", play_sotd: "ਅੱਜ ਦਾ ਸੰਕੇਤ ਚਲਾਓ",
  my_progress: "ਮੇਰੀ ਤਰੱਕੀ", level1: "ਪੱਧਰ 1 · ਸ਼ੁਰੂਆਤੀ", level2: "ਪੱਧਰ 2 · ਖੋਜੀ",
  signs_of: "{b} ਵਿੱਚੋਂ {a} ਸੰਕੇਤ", stops_of: "{b} ਵਿੱਚੋਂ {a} ਪੜਾਅ", this_week: "ਇਸ ਹਫ਼ਤੇ",
  translator: "ਅਨੁਵਾਦਕ", ten_langs: "10 ਭਾਰਤੀ ਭਾਸ਼ਾਵਾਂ",
  ask_title: "Signify ਨੂੰ ਪੁੱਛੋ", ask_sub: "ਸੰਕੇਤਕ ਭਾਸ਼ਾ ਜਾਂ ਬੋਲ਼ੇ ਭਾਈਚਾਰੇ ਦੇ ਸੱਭਿਆਚਾਰ ਬਾਰੇ ਕੁਝ ਵੀ ਪੁੱਛੋ।",
  ask_hi: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਤੁਹਾਡਾ Signify ਸਹਾਇਕ ਹਾਂ। ਮੈਨੂੰ ਸਵਾਲ ਪੁੱਛੋ, ਜਾਂ ਇਹਨਾਂ ਵਿੱਚੋਂ ਕੋਈ ਅਜ਼ਮਾਓ:",
  chip1: "\"ਧੰਨਵਾਦ\" ਦਾ ਸੰਕੇਤ ਕਿਵੇਂ ਕਰੀਏ?", chip2: "ਕੀ ISL ਅਤੇ ASL ਇੱਕੋ ਹਨ?", chip3: "ਬੋਲ਼ਾ ਸੱਭਿਆਚਾਰ ਕੀ ਹੈ?",
  ask_ph: "ਆਪਣਾ ਸਵਾਲ ਲਿਖੋ...", your_question: "ਤੁਹਾਡਾ ਸਵਾਲ", send: "ਭੇਜੋ", thinking: "ਸੋਚ ਰਿਹਾ ਹਾਂ...",
  err_generic: "ਕੁਝ ਗਲਤ ਹੋ ਗਿਆ। ਫਿਰ ਕੋਸ਼ਿਸ਼ ਕਰੋ।", err_connect: "ਜੁੜ ਨਹੀਂ ਸਕੇ। ਇੰਟਰਨੈੱਟ ਜਾਂਚ ਕੇ ਫਿਰ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
  recent: "ਹਾਲ ਹੀ ਵਿੱਚ ਸਿੱਖੇ", recent_sub: "ਦੁਬਾਰਾ ਦੇਖਣ ਲਈ ਸੰਕੇਤ 'ਤੇ ਟੈਪ ਕਰੋ", recent_none_sub: "ਤੁਹਾਡੇ ਪਹਿਲੇ ਸੰਕੇਤ ਇੱਥੇ ਦਿਖਣਗੇ।",
  recent_none: "ਹਾਲੇ ਕੋਈ ਸੰਕੇਤ ਨਹੀਂ। ਤੁਹਾਡਾ ਪਹਿਲਾ ਪਾਠ ਲਗਭਗ 5 ਮਿੰਟ ਦਾ ਹੈ।", start_first: "ਆਪਣਾ ਪਹਿਲਾ ਪਾਠ ਸ਼ੁਰੂ ਕਰੋ",
  review_all: "ਸਾਰੇ {n} ਸੰਕੇਤ ਦੁਬਾਰਾ ਦੇਖੋ",
  stop_food: "ਭੋਜਨ", stop_quiz: "ਕੁਇਜ਼", stop_family: "ਪਰਿਵਾਰ", stop_needs: "ਲੋੜਾਂ", stop_help: "ਮਦਦ",
  stop_feelings: "ਭਾਵਨਾਵਾਂ", stop_final: "ਆਖਰੀ ਪ੍ਰੀਖਿਆ", stops_done: "{b} ਵਿੱਚੋਂ {a} ਪੜਾਅ ਪੂਰੇ", dock_start: "ਸ਼ੁਰੂ",
  new_sign: "ਨਵਾਂ ਸੰਕੇਤ", practice: "ਅਭਿਆਸ", speed: "ਰਫ਼ਤਾਰ", mirror: "ਸ਼ੀਸ਼ਾ", means: "ਇਸ ਸੰਕੇਤ ਦਾ ਅਰਥ",
  tip: "ਸੁਝਾਅ:", in_stop: "ਇਸ ਪੜਾਅ ਦੇ ਸੰਕੇਤ", how_practise: "ਅਭਿਆਸ ਕਿਵੇਂ ਕਰੀਏ",
  step1_html: "ਪਹਿਲਾਂ ਇੱਕ ਵਾਰ <strong>0.5×</strong> ਰਫ਼ਤਾਰ 'ਤੇ ਦੇਖੋ", step2_html: "<strong>ਸ਼ੀਸ਼ਾ</strong> ਚਾਲੂ ਕਰੋ ਅਤੇ ਨਾਲ-ਨਾਲ ਕਰੋ",
  step3: "ਬਿਨਾਂ ਦੇਖੇ ਪੂਰੀ ਰਫ਼ਤਾਰ 'ਤੇ ਕਰਕੇ ਦੇਖੋ", watch_again: "ਫਿਰ ਦੇਖੋ", got_it: "ਸਮਝ ਗਿਆ",
  what_mean: "ਇਸ ਸੰਕੇਤ ਦਾ ਕੀ ਅਰਥ ਹੈ?", stop_complete: "ਪੜਾਅ ਪੂਰਾ!", back_ocean: "ਸਮੁੰਦਰ 'ਤੇ ਵਾਪਸ",
  learned: "ਸਿੱਖ ਲਿਆ", now: "ਹੁਣ", next: "ਅੱਗੇ",
  m_hi: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ਆਓ ਇੱਕ ਸੰਕੇਤ ਸਿੱਖੀਏ", m_watch: "ਧਿਆਨ ਨਾਲ ਦੇਖੋ, ਫਿਰ ਸੰਕੇਤ ਕਰੋ!", m_which: "ਇਹ ਕਿਹੜਾ ਸ਼ਬਦ ਹੈ?",
  m_yay: "ਵਾਹ! ਸਹੀ!", m_close: "ਬਹੁਤ ਨੇੜੇ! ਫਿਰ ਕੋਸ਼ਿਸ਼ ਕਰਾਂਗੇ", m_done: "ਤੁਸੀਂ ਕਰ ਵਿਖਾਇਆ!",
  cheer1: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ!", cheer2: "ਤੁਸੀਂ ਬਹੁਤ ਵਧੀਆ ਕਰ ਰਹੇ ਹੋ!", cheer3: "ਲੱਗੇ ਰਹੋ!", cheer4: "ਹਾਈ ਫਾਈਵ!",
  mascot_btn: "ਮਾਸਕੌਟ ਨੂੰ ਹਾਏ ਕਹੋ", correct: "ਸਹੀ!", not_quite: "ਨਹੀਂ। ਇਹ {word} ਹੈ",
  you_learned: "ਤੁਸੀਂ {list} ਸਿੱਖ ਲਏ! ਅੱਜ {name} ਨਾਲ ਇਹਨਾਂ ਦਾ ਸੰਕੇਤ ਕਰਕੇ ਦੇਖੋ।",
  you_learned_anon: "ਤੁਸੀਂ {list} ਸਿੱਖ ਲਏ! ਅੱਜ ਕਿਸੇ ਨਾਲ ਇਹਨਾਂ ਦਾ ਸੰਕੇਤ ਕਰਕੇ ਦੇਖੋ।",
  great_job: "ਸ਼ਾਬਾਸ਼, ਤੁਹਾਨੂੰ ਸਾਰੇ ਸੰਕੇਤ ਯਾਦ ਰਹੇ!", coming_soon: "ਜਲਦੀ ਆ ਰਿਹਾ ਹੈ",
  not_ready: "ਇਹ ਪੜਾਅ ਹਾਲੇ ਤਿਆਰ ਨਹੀਂ। ਬਾਅਦ ਵਿੱਚ ਦੇਖੋ!", and: "ਅਤੇ", lesson_progress: "ਪਾਠ ਦੀ ਤਰੱਕੀ",
  dict_title: "ਸੰਕੇਤ ਸ਼ਬਦਕੋਸ਼", dict_sub: "ਆਪਣੀ ਭਾਸ਼ਾ ਚੁਣੋ, ਫਿਰ ਸੰਕੇਤ ਦੇਖਣ ਲਈ ਸ਼ਬਦ 'ਤੇ ਟੈਪ ਕਰੋ।",
  your_lang: "ਤੁਹਾਡੀ ਭਾਸ਼ਾ", all: "ਸਾਰੇ", search: "ਸੰਕੇਤ ਲੱਭੋ…", english_label: "ਅੰਗਰੇਜ਼ੀ", hindi_label: "ਹਿੰਦੀ",
  same_sign: "ਸੰਕੇਤ ਹਰ ਭਾਸ਼ਾ ਵਿੱਚ ਇੱਕੋ ਹੈ। ਸਿਰਫ਼ ਸ਼ਬਦ ਬਦਲਦਾ ਹੈ।",
  practise_lesson: "ਪਾਠ ਵਿੱਚ ਅਭਿਆਸ ਕਰੋ", no_results: "ਕੋਈ ਸੰਕੇਤ ਨਹੀਂ ਮਿਲਿਆ। ਕੋਈ ਹੋਰ ਸ਼ਬਦ ਅਜ਼ਮਾਓ।", topic: "ਵਿਸ਼ਾ",
},
};

// =====================================================
// HOW IT WORKS (you shouldn't need to change anything below)
// =====================================================

// The chosen language, saved in the browser (default: English)
const LANG = (function () {
  let l = null;
  try { l = localStorage.getItem("signify-lang"); } catch (e) {}
  return I18N[l] ? l : "en";
})();

// t("key") gives the text in the chosen language; t("key", {n: 3}) fills in {n}
function t(key, vars) {
  let s = (I18N[LANG] && I18N[LANG][key]) || I18N.en[key] || key;
  if (vars) Object.keys(vars).forEach((k) => { s = s.split("{" + k + "}").join(vars[k]); });
  return s;
}

// River stop names ("Food", "Quiz"...) in the chosen language
function tStop(label) {
  const keys = { "Food": "stop_food", "Quiz": "stop_quiz", "Family": "stop_family", "Needs": "stop_needs",
                 "Help": "stop_help", "Feelings": "stop_feelings", "Final test": "stop_final" };
  return keys[label] ? t(keys[label]) : label;
}

// "A, B and C" in the chosen language
function tList(items) {
  if (items.length < 2) return items.join("");
  return items.slice(0, -1).join(", ") + " " + t("and") + " " + items[items.length - 1];
}

// The English name of the chosen language (for the chat helper)
function langEnglishName() {
  const l = I18N_LANGS.find((x) => x.code === LANG);
  return l ? l.english : "English";
}

function setLang(code, url) {
  try { localStorage.setItem("signify-lang", code); } catch (e) {}
  if (url) location.href = url; else location.reload();
}

// Fonts for scripts that the app's own fonts don't cover
const I18N_FONTS = {
  bn: "Noto Sans Bengali", te: "Noto Sans Telugu", ta: "Noto Sans Tamil", gu: "Noto Sans Gujarati",
  kn: "Noto Sans Kannada", or: "Noto Sans Oriya", ml: "Noto Sans Malayalam", pa: "Noto Sans Gurmukhi",
};

(function setUpFontsAndStyles() {
  document.documentElement.lang = LANG;
  const font = I18N_FONTS[LANG];
  if (font) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=" + font.replace(/ /g, "+") + ":wght@400;600;700;800&display=swap";
    document.head.appendChild(link);
  }
  const style = document.createElement("style");
  style.textContent =
    (font ? 'body, body * { font-family: "' + font + '", "Hind", sans-serif !important; }' : "") + `
    .lang-btn { display: inline-flex; align-items: center; gap: 6px; min-height: 44px; padding: 0 14px;
      border-radius: 99px; border: 2px solid #DCE3F2; background: #fff; color: #28264A; cursor: pointer;
      font: inherit; font-weight: 600; font-size: 0.95rem; box-shadow: 0 3px 0 #DCE3F2; flex-shrink: 0; }
    .lang-btn:active { transform: translateY(2px); box-shadow: 0 1px 0 #DCE3F2; }
    .lang-btn svg { flex-shrink: 0; }
    .lang-backdrop { position: fixed; inset: 0; z-index: 1000; background: rgba(26, 23, 54, 0.5);
      display: flex; align-items: center; justify-content: center; padding: 16px; }
    .lang-menu { width: 100%; max-width: 440px; max-height: 90vh; overflow: auto; background: #fff; color: #28264A;
      border-radius: 28px; padding: 22px; box-shadow: 0 30px 60px -20px rgba(26, 23, 54, 0.6); }
    .lang-menu h2 { margin: 0; font-size: 1.5rem; line-height: 1.2; }
    .lang-menu .lang-sub { margin: 2px 0 14px; color: #6A6989; }
    .lang-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }
    .lang-grid button { min-height: 52px; border-radius: 16px; border: 2px solid #DCE3F2; background: #fff;
      color: #28264A; font-size: 1.1rem; font-weight: 600; cursor: pointer; box-shadow: 0 3px 0 #DCE3F2;
      font-family: "Hind", "Noto Sans Bengali", "Noto Sans Telugu", "Noto Sans Tamil", "Noto Sans Gujarati",
        "Noto Sans Kannada", "Noto Sans Oriya", "Noto Sans Malayalam", "Noto Sans Gurmukhi", sans-serif !important; }
    .lang-grid button[aria-pressed="true"] { background: #8B7CF6; border-color: #6A5AD9; color: #fff; box-shadow: 0 3px 0 #6A5AD9; }
    .lang-btn:focus-visible, .lang-grid button:focus-visible { outline: 3px solid #FFC24B; outline-offset: 3px; }
    @media (max-width: 600px) { .lang-btn .lang-btn-name { display: none; } .lang-btn { padding: 0 11px; } }
  `;
  document.head.appendChild(style);
})();

const GLOBE_SVG = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3z"/></svg>';

// The pop-up where people pick a language
function openLangMenu(onPick) {
  const backdrop = document.createElement("div");
  backdrop.className = "lang-backdrop";
  backdrop.innerHTML =
    '<div class="lang-menu" role="dialog" aria-modal="true" aria-labelledby="lang-menu-title">' +
    '<h2 id="lang-menu-title"></h2><p class="lang-sub"></p><div class="lang-grid"></div></div>';
  backdrop.querySelector("h2").textContent = t("choose_lang");
  backdrop.querySelector(".lang-sub").textContent = LANG === "en" ? "भाषा चुनें · ভাষা বেছে নিন · மொழியைத் தேர்ந்தெடுக்கவும்" : "Choose your language";
  const grid = backdrop.querySelector(".lang-grid");
  I18N_LANGS.forEach((l) => {
    const b = document.createElement("button");
    b.type = "button";
    b.lang = l.code;
    b.textContent = l.name;
    b.setAttribute("aria-pressed", String(l.code === LANG));
    b.addEventListener("click", () => { close(); (onPick || setLang)(l.code); });
    grid.appendChild(b);
  });
  function close() { backdrop.remove(); document.removeEventListener("keydown", onKey); }
  function onKey(e) { if (e.key === "Escape") { close(); if (!hasChosenLang()) setLang("en"); } }
  backdrop.addEventListener("click", (e) => { if (e.target === backdrop) { close(); if (!hasChosenLang()) setLang("en"); } });
  document.addEventListener("keydown", onKey);
  document.body.appendChild(backdrop);
  const current = grid.querySelector('[aria-pressed="true"]');
  if (current) current.focus();
}

function hasChosenLang() {
  try { return !!localStorage.getItem("signify-lang"); } catch (e) { return true; }
}

// Swap in the right words for everything marked with data-i18n
let i18nApplied = false;
function applyI18n() {
  if (i18nApplied) return;
  i18nApplied = true;
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });
  document.querySelectorAll("[data-i18n-title]").forEach((el) => { el.title = t(el.dataset.i18nTitle); });

  // The language button, wherever a page has a spot for it
  document.querySelectorAll("[data-lang-slot]").forEach((slot) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "lang-btn";
    btn.setAttribute("aria-label", t("choose_lang"));
    const current = I18N_LANGS.find((l) => l.code === LANG);
    btn.innerHTML = GLOBE_SVG + '<span class="lang-btn-name"></span>';
    btn.querySelector(".lang-btn-name").textContent = current.name;
    btn.addEventListener("click", () => openLangMenu());
    slot.appendChild(btn);
  });

  // First visit: ask which language (only on pages that say so)
  if (document.body.hasAttribute("data-lang-ask") && !hasChosenLang()) openLangMenu();
}
document.addEventListener("DOMContentLoaded", () => {
  applyI18n();
  // The river's "START" sign on the dock (made by river.js)
  const dock = document.querySelector(".dock-sign");
  if (dock && dock.lastChild && dock.lastChild.nodeType === 3) dock.lastChild.textContent = t("dock_start");
});




