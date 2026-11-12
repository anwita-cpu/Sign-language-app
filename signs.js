// =====================================================
// SIGNIFY: all your signs and stops, in one place.
// Used by main.html (home) and lesson.html.
// To add a word: add it to `signs`, then to a stop in `lessons`.
// =====================================================

// ===== 1. YOUR SIGNS =====
const FOOD = "SgVLj-CHvZ4";    // ISLRTC: Food related
const PEOPLE = "vtFLWKxUX4A";  // ISLRTC: ISL Orientation Course, Part 1
const signs = {
  // Food
  water:      { en: "Water",      hi: "पानी",   emoji: "💧", video: FOOD, start: 40,  end: 49  },
  milk:       { en: "Milk",       hi: "दूध",    emoji: "🥛", video: FOOD, start: 70,  end: 81  },
  roti:       { en: "Roti",       hi: "रोटी",   emoji: "🫓", video: FOOD, start: 82,  end: 98  },
  vegetables: { en: "Vegetables", hi: "सब्ज़ी", emoji: "🥕", video: FOOD, start: 99,  end: 106 },
  rice:       { en: "Rice",       hi: "चावल",  emoji: "🍚", video: FOOD, start: 127, end: 132 },
  banana:     { en: "Banana",     hi: "केला",   emoji: "🍌", video: FOOD, start: 143, end: 153 },
  apple:      { en: "Apple",      hi: "सेब",    emoji: "🍎", video: FOOD, start: 160, end: 166 },
  // Family and people
  father:     { en: "Father",     hi: "पिता",   emoji: "👨", video: PEOPLE, start: 75,  end: 87  },
  mother:     { en: "Mother",     hi: "माँ",     emoji: "👩", video: PEOPLE, start: 93,  end: 99  },
  brother:    { en: "Brother",    hi: "भाई",    emoji: "👦", video: PEOPLE, start: 112, end: 118 },
  sister:     { en: "Sister",     hi: "बहन",    emoji: "👧", video: PEOPLE, start: 127, end: 133 },
  baby:       { en: "Baby",       hi: "शिशु",   emoji: "👶", video: PEOPLE, start: 143, end: 149 },
  child:      { en: "Child",      hi: "बच्चा",  emoji: "🧒", video: PEOPLE, start: 157, end: 160 },
  friend:     { en: "Friend",     hi: "दोस्त",  emoji: "🤝", video: PEOPLE, start: 185, end: 191 },
};

// ===== 2. WHAT EACH STOP TEACHES (matches the stops on river.html) =====
const lessons = {
  1: { type: "learn", words: ["water", "milk", "roti", "rice", "banana", "apple", "vegetables"] },   // Food
  2: { type: "quiz",  words: ["water", "milk", "roti", "rice", "banana", "apple", "vegetables"] },   // Food quiz
  3: { type: "learn", words: ["father", "mother", "brother", "sister", "baby", "child", "friend"] }, // Family
  4: { type: "quiz",  words: ["father", "mother", "brother", "sister", "baby", "child", "friend"] }, // Family quiz
  // 5: Needs, coming soon
  // 6: Help, coming soon
  // 7: Needs + Help quiz, coming soon
  // 8: Feelings, coming soon
  9: { type: "quiz",  words: ["water", "milk", "roti", "rice", "banana", "apple", "vegetables",
                              "father", "mother", "brother", "sister", "baby", "child", "friend"] }, // Final test
};

// ===== 3. THE STOPS ON THE RIVER (names shown on the home page) =====
const stops = ["Food", "Quiz", "Family", "Quiz", "Needs", "Help", "Quiz", "Feelings", "Final test"];


// ===== 4. LANGUAGES (for the Translator) =====
const languages = [
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

// ===== 5. EACH SIGN'S WORD IN EVERY LANGUAGE (first draft: ask a native speaker to check!) =====
const translations = {
  water:      { bn: "জল",     mr: "पाणी",   te: "నీరు",       ta: "தண்ணீர்",    gu: "પાણી",    kn: "ನೀರು",      or: "ପାଣି",  ml: "വെള്ളം",    pa: "ਪਾਣੀ" },
  milk:       { bn: "দুধ",     mr: "दूध",    te: "పాలు",       ta: "பால்",       gu: "દૂધ",     kn: "ಹಾಲು",      or: "ଦୁଧ",   ml: "പാൽ",       pa: "ਦੁੱਧ" },
  roti:       { bn: "রুটি",    mr: "पोळी",   te: "రొట్టె",      ta: "ரொட்டி",     gu: "રોટલી",   kn: "ರೊಟ್ಟಿ",     or: "ରୁଟି",  ml: "റൊട്ടി",     pa: "ਰੋਟੀ" },
  rice:       { bn: "ভাত",     mr: "भात",    te: "అన్నం",      ta: "சாதம்",      gu: "ભાત",     kn: "ಅನ್ನ",      or: "ଭାତ",   ml: "ചോറ്",      pa: "ਚੌਲ" },
  vegetables: { bn: "সবজি",    mr: "भाजी",   te: "కూరగాయలు",   ta: "காய்கறி",    gu: "શાકભાજી", kn: "ತರಕಾರಿ",    or: "ପରିବା", ml: "പച്ചക്കറി",  pa: "ਸਬਜ਼ੀ" },
  banana:     { bn: "কলা",     mr: "केळं",    te: "అరటిపండు",   ta: "வாழைப்பழம்", gu: "કેળું",   kn: "ಬಾಳೆಹಣ್ಣು",  or: "କଦଳୀ",  ml: "പഴം",       pa: "ਕੇਲਾ" },
  apple:      { bn: "আপেল",    mr: "सफरचंद", te: "ఆపిల్",      ta: "ஆப்பிள்",    gu: "સફરજન",   kn: "ಸೇಬು",      or: "ସେଓ",   ml: "ആപ്പിൾ",    pa: "ਸੇਬ" },
  father:     { bn: "বাবা",    mr: "वडील",   te: "నాన్న",      ta: "அப்பா",      gu: "પિતા",    kn: "ಅಪ್ಪ",      or: "ବାପା",  ml: "അച്ഛൻ",     pa: "ਪਿਤਾ" },
  mother:     { bn: "মা",      mr: "आई",     te: "అమ్మ",       ta: "அம்மா",      gu: "માતા",    kn: "ಅಮ್ಮ",      or: "ମା",    ml: "അമ്മ",      pa: "ਮਾਂ" },
  brother:    { bn: "ভাই",     mr: "भाऊ",    te: "సోదరుడు",    ta: "சகோதரன்",    gu: "ભાઈ",     kn: "ಸಹೋದರ",     or: "ଭାଇ",   ml: "സഹോദരൻ",    pa: "ਭਰਾ" },
  sister:     { bn: "বোন",     mr: "बहीण",   te: "సోదరి",      ta: "சகோதரி",     gu: "બહેન",    kn: "ಸಹೋದರಿ",    or: "ଭଉଣୀ",  ml: "സഹോദരി",    pa: "ਭੈਣ" },
  baby:       { bn: "শিশু",    mr: "बाळ",    te: "శిశువు",     ta: "குழந்தை",    gu: "શિશુ",    kn: "ಶಿಶು",      or: "ଶିଶୁ",  ml: "കുഞ്ഞ്",    pa: "ਸ਼ਿਸ਼ੂ" },
  child:      { bn: "বাচ্চা",  mr: "मूल",    te: "పిల్ల",      ta: "பிள்ளை",     gu: "બાળક",    kn: "ಮಗು",       or: "ପିଲା",  ml: "കുട്ടി",     pa: "ਬੱਚਾ" },
  friend:     { bn: "বন্ধু",   mr: "मित्र",  te: "స్నేహితుడు", ta: "நண்பன்",     gu: "મિત્ર",   kn: "ಸ್ನೇಹಿತ",    or: "ବନ୍ଧୁ", ml: "സുഹൃത്ത്",  pa: "ਦੋਸਤ" },
};

// The word for a sign in any language (falls back to English)
function wordIn(key, code) {
  if (code === "en") return signs[key].en;
  if (code === "hi") return signs[key].hi;
  return (translations[key] && translations[key][code]) || signs[key].en;
}
