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
