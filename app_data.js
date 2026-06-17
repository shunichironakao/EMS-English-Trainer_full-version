// 自動生成: 救急英語 10症候別×8フェーズ 学習データ (動画台本の救急隊員セリフ由来)
const PHASES = [{"n": 1, "name": "初期接触", "en": "Initial Contact"}, {"n": 2, "name": "主訴聴取", "en": "Chief Complaint"}, {"n": 3, "name": "病歴聴取", "en": "History of Present Illness"}, {"n": 4, "name": "既往歴など聴取", "en": "Past History"}, {"n": 5, "name": "身体評価", "en": "Physical Assessment"}, {"n": 6, "name": "指示", "en": "Instructions"}, {"n": 7, "name": "安心づけ", "en": "Reassurance"}, {"n": 8, "name": "搬送", "en": "Transport"}];
const EXPRESSIONS = [
 {
  "id": "01_Chest_Pain__1",
  "symptom": "01_Chest_Pain",
  "symptom_ja": "胸痛",
  "order": 1,
  "phase": 1,
  "tag": "挨拶",
  "adopted": false,
  "prompt_ja": "こんにちは、救急隊員です。",
  "target": "Hello, I'm a paramedic.",
  "patient": "My chest really hurts.",
  "patient_ja": "胸がとても痛いです。",
  "acceptable": [
   "Hello, I'm a paramedic."
  ],
  "keywords": [
   "hello",
   "paramedic"
  ],
  "freq": 0
 },
 {
  "id": "01_Chest_Pain__2",
  "symptom": "01_Chest_Pain",
  "symptom_ja": "胸痛",
  "order": 2,
  "phase": 2,
  "tag": "主訴",
  "adopted": true,
  "prompt_ja": "どうしましたか？",
  "target": "What happened?",
  "patient": "I was watching TV and my chest suddenly got tight.",
  "patient_ja": "テレビを見ていたら急に胸が締めつけられて。",
  "acceptable": [
   "What happened?"
  ],
  "keywords": [
   "what",
   "happened"
  ],
  "freq": 13
 },
 {
  "id": "01_Chest_Pain__3",
  "symptom": "01_Chest_Pain",
  "symptom_ja": "胸痛",
  "order": 3,
  "phase": 2,
  "tag": "バイタル",
  "adopted": true,
  "prompt_ja": "相棒がバイタルを測ります。",
  "target": "My partner will get your vitals.",
  "patient": "Okay.",
  "patient_ja": "はい。",
  "acceptable": [
   "My partner will get your vitals."
  ],
  "keywords": [
   "partner",
   "get",
   "vitals"
  ],
  "freq": 0
 },
 {
  "id": "01_Chest_Pain__4",
  "symptom": "01_Chest_Pain",
  "symptom_ja": "胸痛",
  "order": 4,
  "phase": 3,
  "tag": "発症",
  "adopted": true,
  "prompt_ja": "どのくらい前ですか？",
  "target": "How long ago?",
  "patient": "About thirty minutes ago.",
  "patient_ja": "30分くらい前です。",
  "acceptable": [
   "How long ago?"
  ],
  "keywords": [
   "how",
   "long",
   "ago"
  ],
  "freq": 2
 },
 {
  "id": "01_Chest_Pain__5",
  "symptom": "01_Chest_Pain",
  "symptom_ja": "胸痛",
  "order": 5,
  "phase": 3,
  "tag": "部位",
  "adopted": true,
  "prompt_ja": "痛みはどこですか？",
  "target": "Where is the pain?",
  "patient": "Right here, in the center of my chest.",
  "patient_ja": "ここ、胸の真ん中です。",
  "acceptable": [
   "Where is the pain?"
  ],
  "keywords": [
   "where",
   "pain"
  ],
  "freq": 4
 },
 {
  "id": "01_Chest_Pain__6",
  "symptom": "01_Chest_Pain",
  "symptom_ja": "胸痛",
  "order": 6,
  "phase": 3,
  "tag": "程度",
  "adopted": true,
  "prompt_ja": "痛みはどのくらい？(0〜10)",
  "target": "How bad is the pain, zero to ten?",
  "patient": "About eight.",
  "patient_ja": "8くらいです。",
  "acceptable": [
   "How bad is the pain, zero to ten?"
  ],
  "keywords": [
   "how",
   "bad",
   "pain",
   "zero",
   "ten"
  ],
  "freq": 3
 },
 {
  "id": "01_Chest_Pain__7",
  "symptom": "01_Chest_Pain",
  "symptom_ja": "胸痛",
  "order": 7,
  "phase": 3,
  "tag": "性状",
  "adopted": true,
  "prompt_ja": "鋭い・鈍い・圧迫感・灼熱感、どれですか？",
  "target": "Is it sharp, dull, pressure, or burning?",
  "patient": "Like pressure — something heavy on my chest.",
  "patient_ja": "重いものに押される圧迫感です。",
  "acceptable": [
   "Is it sharp, dull, pressure, or burning?"
  ],
  "keywords": [
   "sharp",
   "dull",
   "pressure",
   "burning"
  ],
  "freq": 0
 },
 {
  "id": "01_Chest_Pain__8",
  "symptom": "01_Chest_Pain",
  "symptom_ja": "胸痛",
  "order": 8,
  "phase": 3,
  "tag": "放散",
  "adopted": true,
  "prompt_ja": "どこかに広がりますか？",
  "target": "Does it go anywhere?",
  "patient": "Yes, to my left arm and jaw.",
  "patient_ja": "はい、左腕とあごに。",
  "acceptable": [
   "Does it go anywhere?"
  ],
  "keywords": [
   "anywhere"
  ],
  "freq": 2
 },
 {
  "id": "01_Chest_Pain__9",
  "symptom": "01_Chest_Pain",
  "symptom_ja": "胸痛",
  "order": 9,
  "phase": 3,
  "tag": "随伴症状",
  "adopted": true,
  "prompt_ja": "吐き気や息切れはありますか？",
  "target": "Any nausea or shortness of breath?",
  "patient": "Yes, some nausea and short of breath.",
  "patient_ja": "はい、少し吐き気と息苦しさが。",
  "acceptable": [
   "Any nausea or shortness of breath?"
  ],
  "keywords": [
   "nausea",
   "shortness",
   "breath"
  ],
  "freq": 0
 },
 {
  "id": "01_Chest_Pain__10",
  "symptom": "01_Chest_Pain",
  "symptom_ja": "胸痛",
  "order": 10,
  "phase": 4,
  "tag": "既往歴",
  "adopted": true,
  "prompt_ja": "持病はありますか？",
  "target": "What medical problems do you have?",
  "patient": "High blood pressure.",
  "patient_ja": "高血圧です。",
  "acceptable": [
   "What medical problems do you have?"
  ],
  "keywords": [
   "what",
   "medical",
   "problems"
  ],
  "freq": 0
 },
 {
  "id": "01_Chest_Pain__11",
  "symptom": "01_Chest_Pain",
  "symptom_ja": "胸痛",
  "order": 11,
  "phase": 4,
  "tag": "既往エピソード",
  "adopted": true,
  "prompt_ja": "以前にもありましたか？",
  "target": "Have you had this before?",
  "patient": "No, never like this.",
  "patient_ja": "いいえ、こんなのは初めてです。",
  "acceptable": [
   "Have you had this before?"
  ],
  "keywords": [
   "before"
  ],
  "freq": 4
 },
 {
  "id": "01_Chest_Pain__12",
  "symptom": "01_Chest_Pain",
  "symptom_ja": "胸痛",
  "order": 12,
  "phase": 4,
  "tag": "心疾患既往",
  "adopted": true,
  "prompt_ja": "心臓の問題はありますか？",
  "target": "Do you have any heart problems?",
  "patient": "I have high blood pressure.",
  "patient_ja": "高血圧があります。",
  "acceptable": [
   "Do you have any heart problems?"
  ],
  "keywords": [
   "heart",
   "problems"
  ],
  "freq": 4
 },
 {
  "id": "01_Chest_Pain__13",
  "symptom": "01_Chest_Pain",
  "symptom_ja": "胸痛",
  "order": 13,
  "phase": 4,
  "tag": "抗凝固薬",
  "adopted": true,
  "prompt_ja": "抗凝固薬は飲んでいますか？",
  "target": "Any blood thinners?",
  "patient": "No.",
  "patient_ja": "いいえ。",
  "acceptable": [
   "Any blood thinners?"
  ],
  "keywords": [
   "blood",
   "thinners"
  ],
  "freq": 2
 },
 {
  "id": "01_Chest_Pain__14",
  "symptom": "01_Chest_Pain",
  "symptom_ja": "胸痛",
  "order": 14,
  "phase": 4,
  "tag": "アレルギー",
  "adopted": true,
  "prompt_ja": "アレルギーは？",
  "target": "Any allergies?",
  "patient": "No allergies.",
  "patient_ja": "ありません。",
  "acceptable": [
   "Any allergies?"
  ],
  "keywords": [
   "allergies"
  ],
  "freq": 104
 },
 {
  "id": "01_Chest_Pain__15",
  "symptom": "01_Chest_Pain",
  "symptom_ja": "胸痛",
  "order": 15,
  "phase": 4,
  "tag": "内服薬",
  "adopted": true,
  "prompt_ja": "どんな薬を飲んでいますか？",
  "target": "What medications do you take?",
  "patient": "Just one for blood pressure.",
  "patient_ja": "血圧の薬だけです。",
  "acceptable": [
   "What medications do you take?"
  ],
  "keywords": [
   "what",
   "medications",
   "take"
  ],
  "freq": 23
 },
 {
  "id": "01_Chest_Pain__16",
  "symptom": "01_Chest_Pain",
  "symptom_ja": "胸痛",
  "order": 16,
  "phase": 4,
  "tag": "最終飲食",
  "adopted": true,
  "prompt_ja": "最後に食べたのはいつ？",
  "target": "When did you last eat?",
  "patient": "This morning.",
  "patient_ja": "今朝です。",
  "acceptable": [
   "When did you last eat?"
  ],
  "keywords": [
   "when",
   "last",
   "eat"
  ],
  "freq": 21
 },
 {
  "id": "01_Chest_Pain__17",
  "symptom": "01_Chest_Pain",
  "symptom_ja": "胸痛",
  "order": 17,
  "phase": 5,
  "tag": "処置(EKG)",
  "adopted": true,
  "prompt_ja": "心電図で心臓を確認します。",
  "target": "Let me check your heart with an EKG.",
  "patient": "Okay.",
  "patient_ja": "わかりました。",
  "acceptable": [
   "Let me check your heart with an EKG."
  ],
  "keywords": [
   "let",
   "check",
   "heart",
   "with",
   "ekg"
  ],
  "freq": 0
 },
 {
  "id": "01_Chest_Pain__18",
  "symptom": "01_Chest_Pain",
  "symptom_ja": "胸痛",
  "order": 18,
  "phase": 5,
  "tag": "身体評価",
  "adopted": true,
  "prompt_ja": "呼吸音を聴きます。",
  "target": "Let me listen to your breathing.",
  "patient": "(takes a deep breath)",
  "patient_ja": "（深呼吸する）",
  "acceptable": [
   "Let me listen to your breathing."
  ],
  "keywords": [
   "let",
   "listen",
   "breathing"
  ],
  "freq": 2
 },
 {
  "id": "01_Chest_Pain__19",
  "symptom": "01_Chest_Pain",
  "symptom_ja": "胸痛",
  "order": 19,
  "phase": 6,
  "tag": "処置(酸素)",
  "adopted": false,
  "prompt_ja": "酸素を投与します。",
  "target": "I'm going to give you some oxygen.",
  "patient": "Alright.",
  "patient_ja": "はい。",
  "acceptable": [
   "I'm going to give you some oxygen."
  ],
  "keywords": [
   "going",
   "give",
   "oxygen"
  ],
  "freq": 2
 },
 {
  "id": "01_Chest_Pain__20",
  "symptom": "01_Chest_Pain",
  "symptom_ja": "胸痛",
  "order": 20,
  "phase": 7,
  "tag": "安心づけ",
  "adopted": true,
  "prompt_ja": "しっかり対応します、ご安心ください。",
  "target": "We're going to take good care of you.",
  "patient": "Thank you.",
  "patient_ja": "ありがとうございます。",
  "acceptable": [
   "We're going to take good care of you."
  ],
  "keywords": [
   "going",
   "take",
   "good",
   "care"
  ],
  "freq": 6
 },
 {
  "id": "01_Chest_Pain__21",
  "symptom": "01_Chest_Pain",
  "symptom_ja": "胸痛",
  "order": 21,
  "phase": 8,
  "tag": "搬送先",
  "adopted": true,
  "prompt_ja": "病院へ搬送します。",
  "target": "We're taking you to the hospital.",
  "patient": "Okay, thank you.",
  "patient_ja": "はい、お願いします。",
  "acceptable": [
   "We're taking you to the hospital."
  ],
  "keywords": [
   "taking",
   "hospital"
  ],
  "freq": 2
 },
 {
  "id": "02_Respiratory_Distress__1",
  "symptom": "02_Respiratory_Distress",
  "symptom_ja": "呼吸困難",
  "order": 1,
  "phase": 1,
  "tag": "意識/主訴",
  "adopted": true,
  "prompt_ja": "救急隊員です。息がしづらいですか？",
  "target": "Hi, I'm a paramedic. Are you having trouble breathing?",
  "patient": "Yes… I can't catch my breath.",
  "patient_ja": "はい…息が吸えなくて。",
  "acceptable": [
   "Hi, I'm a paramedic. Are you having trouble breathing?"
  ],
  "keywords": [
   "paramedic",
   "having",
   "trouble",
   "breathing"
  ],
  "freq": 0
 },
 {
  "id": "02_Respiratory_Distress__2",
  "symptom": "02_Respiratory_Distress",
  "symptom_ja": "呼吸困難",
  "order": 2,
  "phase": 2,
  "tag": "主訴聴取",
  "adopted": true,
  "prompt_ja": "どうされましたか？",
  "target": "Can you tell me what's going on?",
  "patient": "I can't catch my breath.",
  "patient_ja": "息が苦しいです。",
  "acceptable": [
   "Can you tell me what's going on?"
  ],
  "keywords": [
   "tell",
   "what",
   "going"
  ],
  "freq": 3
 },
 {
  "id": "02_Respiratory_Distress__3",
  "symptom": "02_Respiratory_Distress",
  "symptom_ja": "呼吸困難",
  "order": 3,
  "phase": 2,
  "tag": "バイタル",
  "adopted": true,
  "prompt_ja": "相棒がバイタルを測ります。",
  "target": "My partner will get your vitals.",
  "patient": "Okay.",
  "patient_ja": "はい。",
  "acceptable": [
   "My partner will get your vitals."
  ],
  "keywords": [
   "partner",
   "get",
   "vitals"
  ],
  "freq": 0
 },
 {
  "id": "02_Respiratory_Distress__4",
  "symptom": "02_Respiratory_Distress",
  "symptom_ja": "呼吸困難",
  "order": 4,
  "phase": 3,
  "tag": "発症",
  "adopted": true,
  "prompt_ja": "いつから始まりましたか？",
  "target": "How long ago did it start?",
  "patient": "About an hour ago.",
  "patient_ja": "1時間くらい前です。",
  "acceptable": [
   "How long ago did it start?"
  ],
  "keywords": [
   "how",
   "long",
   "ago",
   "start"
  ],
  "freq": 0
 },
 {
  "id": "02_Respiratory_Distress__5",
  "symptom": "02_Respiratory_Distress",
  "symptom_ja": "呼吸困難",
  "order": 5,
  "phase": 3,
  "tag": "程度",
  "adopted": true,
  "prompt_ja": "息苦しさはどのくらい？(0〜10)",
  "target": "How bad is your breathing, zero to ten?",
  "patient": "Maybe seven.",
  "patient_ja": "7くらいです。",
  "acceptable": [
   "How bad is your breathing, zero to ten?"
  ],
  "keywords": [
   "how",
   "bad",
   "breathing",
   "zero",
   "ten"
  ],
  "freq": 0
 },
 {
  "id": "02_Respiratory_Distress__6",
  "symptom": "02_Respiratory_Distress",
  "symptom_ja": "呼吸困難",
  "order": 6,
  "phase": 3,
  "tag": "随伴症状",
  "adopted": true,
  "prompt_ja": "胸の痛みは？",
  "target": "Any chest pain?",
  "patient": "No, just tightness.",
  "patient_ja": "いいえ、締めつけ感だけです。",
  "acceptable": [
   "Any chest pain?"
  ],
  "keywords": [
   "chest",
   "pain"
  ],
  "freq": 6
 },
 {
  "id": "02_Respiratory_Distress__7",
  "symptom": "02_Respiratory_Distress",
  "symptom_ja": "呼吸困難",
  "order": 7,
  "phase": 4,
  "tag": "既往歴",
  "adopted": true,
  "prompt_ja": "持病はありますか？",
  "target": "What medical problems do you have?",
  "patient": "I have asthma, since I was a child.",
  "patient_ja": "喘息があります、子どもの頃から。",
  "acceptable": [
   "What medical problems do you have?"
  ],
  "keywords": [
   "what",
   "medical",
   "problems"
  ],
  "freq": 0
 },
 {
  "id": "02_Respiratory_Distress__8",
  "symptom": "02_Respiratory_Distress",
  "symptom_ja": "呼吸困難",
  "order": 8,
  "phase": 4,
  "tag": "処置/既往",
  "adopted": true,
  "prompt_ja": "吸入器は使いましたか？",
  "target": "Did you use your inhaler?",
  "patient": "Yes, twice, but it didn't help much.",
  "patient_ja": "はい、2回。でもあまり効きませんでした。",
  "acceptable": [
   "Did you use your inhaler?"
  ],
  "keywords": [
   "use",
   "inhaler"
  ],
  "freq": 2
 },
 {
  "id": "02_Respiratory_Distress__9",
  "symptom": "02_Respiratory_Distress",
  "symptom_ja": "呼吸困難",
  "order": 9,
  "phase": 4,
  "tag": "アレルギー",
  "adopted": true,
  "prompt_ja": "アレルギーは？",
  "target": "Any allergies?",
  "patient": "Pollen, and some cats.",
  "patient_ja": "花粉と猫です。",
  "acceptable": [
   "Any allergies?"
  ],
  "keywords": [
   "allergies"
  ],
  "freq": 104
 },
 {
  "id": "02_Respiratory_Distress__10",
  "symptom": "02_Respiratory_Distress",
  "symptom_ja": "呼吸困難",
  "order": 10,
  "phase": 4,
  "tag": "内服薬",
  "adopted": true,
  "prompt_ja": "どんな薬を飲んでいますか？",
  "target": "What medications do you take?",
  "patient": "An inhaler, and one for allergies.",
  "patient_ja": "吸入器とアレルギーの薬です。",
  "acceptable": [
   "What medications do you take?"
  ],
  "keywords": [
   "what",
   "medications",
   "take"
  ],
  "freq": 23
 },
 {
  "id": "02_Respiratory_Distress__11",
  "symptom": "02_Respiratory_Distress",
  "symptom_ja": "呼吸困難",
  "order": 11,
  "phase": 5,
  "tag": "身体評価",
  "adopted": true,
  "prompt_ja": "呼吸の音を聴きます。",
  "target": "Let me listen to your breathing.",
  "patient": "Okay.",
  "patient_ja": "はい。",
  "acceptable": [
   "Let me listen to your breathing."
  ],
  "keywords": [
   "let",
   "listen",
   "breathing"
  ],
  "freq": 2
 },
 {
  "id": "02_Respiratory_Distress__12",
  "symptom": "02_Respiratory_Distress",
  "symptom_ja": "呼吸困難",
  "order": 12,
  "phase": 5,
  "tag": "身体評価/指示",
  "adopted": true,
  "prompt_ja": "ゆっくり深呼吸してください。",
  "target": "Try to take slow, deep breaths.",
  "patient": "I'll try.",
  "patient_ja": "やってみます。",
  "acceptable": [
   "Try to take slow, deep breaths."
  ],
  "keywords": [
   "try",
   "take",
   "slow",
   "deep",
   "breaths"
  ],
  "freq": 0
 },
 {
  "id": "02_Respiratory_Distress__13",
  "symptom": "02_Respiratory_Distress",
  "symptom_ja": "呼吸困難",
  "order": 13,
  "phase": 6,
  "tag": "処置(酸素)",
  "adopted": false,
  "prompt_ja": "酸素を投与します。",
  "target": "I'm going to give you some oxygen.",
  "patient": "Thank you.",
  "patient_ja": "ありがとうございます。",
  "acceptable": [
   "I'm going to give you some oxygen."
  ],
  "keywords": [
   "going",
   "give",
   "oxygen"
  ],
  "freq": 2
 },
 {
  "id": "02_Respiratory_Distress__14",
  "symptom": "02_Respiratory_Distress",
  "symptom_ja": "呼吸困難",
  "order": 14,
  "phase": 7,
  "tag": "安心づけ",
  "adopted": true,
  "prompt_ja": "しっかり対応します、ご安心ください。",
  "target": "We're going to take good care of you.",
  "patient": "Thank you.",
  "patient_ja": "ありがとうございます。",
  "acceptable": [
   "We're going to take good care of you."
  ],
  "keywords": [
   "going",
   "take",
   "good",
   "care"
  ],
  "freq": 6
 },
 {
  "id": "02_Respiratory_Distress__15",
  "symptom": "02_Respiratory_Distress",
  "symptom_ja": "呼吸困難",
  "order": 15,
  "phase": 8,
  "tag": "搬送先",
  "adopted": true,
  "prompt_ja": "病院へ搬送します。",
  "target": "We're taking you to the hospital.",
  "patient": "Okay, thank you.",
  "patient_ja": "はい、お願いします。",
  "acceptable": [
   "We're taking you to the hospital."
  ],
  "keywords": [
   "taking",
   "hospital"
  ],
  "freq": 2
 },
 {
  "id": "03_Dizziness__1",
  "symptom": "03_Dizziness",
  "symptom_ja": "めまい",
  "order": 1,
  "phase": 1,
  "tag": "主訴",
  "adopted": true,
  "prompt_ja": "救急隊員です。今日はどうされましたか？",
  "target": "Hello, I'm a paramedic. What's going on today?",
  "patient": "I felt dizzy and almost fell.",
  "patient_ja": "めまいがして転びそうになりました。",
  "acceptable": [
   "Hello, I'm a paramedic. What's going on today?"
  ],
  "keywords": [
   "hello",
   "paramedic",
   "what",
   "going",
   "today"
  ],
  "freq": 0
 },
 {
  "id": "03_Dizziness__2",
  "symptom": "03_Dizziness",
  "symptom_ja": "めまい",
  "order": 2,
  "phase": 2,
  "tag": "主訴聴取",
  "adopted": true,
  "prompt_ja": "どうされましたか？",
  "target": "Can you tell me what's going on?",
  "patient": "I feel dizzy.",
  "patient_ja": "めまいがします。",
  "acceptable": [
   "Can you tell me what's going on?"
  ],
  "keywords": [
   "tell",
   "what",
   "going"
  ],
  "freq": 3
 },
 {
  "id": "03_Dizziness__3",
  "symptom": "03_Dizziness",
  "symptom_ja": "めまい",
  "order": 3,
  "phase": 2,
  "tag": "バイタル",
  "adopted": true,
  "prompt_ja": "相棒がバイタルを測ります。",
  "target": "My partner will get your vitals.",
  "patient": "Okay.",
  "patient_ja": "はい。",
  "acceptable": [
   "My partner will get your vitals."
  ],
  "keywords": [
   "partner",
   "get",
   "vitals"
  ],
  "freq": 0
 },
 {
  "id": "03_Dizziness__4",
  "symptom": "03_Dizziness",
  "symptom_ja": "めまい",
  "order": 4,
  "phase": 3,
  "tag": "発症",
  "adopted": true,
  "prompt_ja": "めまいはいつ始まりましたか？",
  "target": "When did this dizziness start?",
  "patient": "When I stood up, a few minutes ago.",
  "patient_ja": "数分前、立ち上がった時です。",
  "acceptable": [
   "When did this dizziness start?"
  ],
  "keywords": [
   "when",
   "dizziness",
   "start"
  ],
  "freq": 8
 },
 {
  "id": "03_Dizziness__5",
  "symptom": "03_Dizziness",
  "symptom_ja": "めまい",
  "order": 5,
  "phase": 3,
  "tag": "性状",
  "adopted": true,
  "prompt_ja": "周りが回る感じは？",
  "target": "Do you feel the room spinning?",
  "patient": "Lightheaded, like I might pass out.",
  "patient_ja": "ふらっとして、気が遠くなりそうです。",
  "acceptable": [
   "Do you feel the room spinning?"
  ],
  "keywords": [
   "feel",
   "room",
   "spinning"
  ],
  "freq": 0
 },
 {
  "id": "03_Dizziness__6",
  "symptom": "03_Dizziness",
  "symptom_ja": "めまい",
  "order": 6,
  "phase": 3,
  "tag": "程度",
  "adopted": true,
  "prompt_ja": "めまいはどのくらい？(0〜10)",
  "target": "How bad is the dizziness, zero to ten?",
  "patient": "About six.",
  "patient_ja": "6くらいです。",
  "acceptable": [
   "How bad is the dizziness, zero to ten?"
  ],
  "keywords": [
   "how",
   "bad",
   "dizziness",
   "zero",
   "ten"
  ],
  "freq": 0
 },
 {
  "id": "03_Dizziness__7",
  "symptom": "03_Dizziness",
  "symptom_ja": "めまい",
  "order": 7,
  "phase": 3,
  "tag": "状況/外傷",
  "adopted": true,
  "prompt_ja": "今日、転んだり頭を打ちましたか？",
  "target": "Did you fall or hit your head today?",
  "patient": "No, I held on to the chair.",
  "patient_ja": "いいえ、椅子につかまりました。",
  "acceptable": [
   "Did you fall or hit your head today?"
  ],
  "keywords": [
   "fall",
   "hit",
   "head",
   "today"
  ],
  "freq": 0
 },
 {
  "id": "03_Dizziness__8",
  "symptom": "03_Dizziness",
  "symptom_ja": "めまい",
  "order": 8,
  "phase": 3,
  "tag": "随伴症状",
  "adopted": true,
  "prompt_ja": "吐き気や嘔吐は？",
  "target": "Any nausea or vomiting?",
  "patient": "A little nausea.",
  "patient_ja": "少し吐き気が。",
  "acceptable": [
   "Any nausea or vomiting?"
  ],
  "keywords": [
   "nausea",
   "vomiting"
  ],
  "freq": 27
 },
 {
  "id": "03_Dizziness__9",
  "symptom": "03_Dizziness",
  "symptom_ja": "めまい",
  "order": 9,
  "phase": 4,
  "tag": "既往歴",
  "adopted": true,
  "prompt_ja": "持病はありますか？",
  "target": "What medical problems do you have?",
  "patient": "High blood pressure.",
  "patient_ja": "高血圧です。",
  "acceptable": [
   "What medical problems do you have?"
  ],
  "keywords": [
   "what",
   "medical",
   "problems"
  ],
  "freq": 0
 },
 {
  "id": "03_Dizziness__10",
  "symptom": "03_Dizziness",
  "symptom_ja": "めまい",
  "order": 10,
  "phase": 4,
  "tag": "内服薬",
  "adopted": true,
  "prompt_ja": "良いですね、正常です。お薬は飲んでいますか？",
  "target": "Good — that looks normal. Do you take any medications?",
  "patient": "A water pill for blood pressure.",
  "patient_ja": "血圧の利尿薬です。",
  "acceptable": [
   "Good — that looks normal. Do you take any medications?"
  ],
  "keywords": [
   "good",
   "looks",
   "normal",
   "take",
   "medications"
  ],
  "freq": 0
 },
 {
  "id": "03_Dizziness__11",
  "symptom": "03_Dizziness",
  "symptom_ja": "めまい",
  "order": 11,
  "phase": 4,
  "tag": "アレルギー",
  "adopted": true,
  "prompt_ja": "アレルギーは？",
  "target": "Any allergies?",
  "patient": "None.",
  "patient_ja": "ありません。",
  "acceptable": [
   "Any allergies?"
  ],
  "keywords": [
   "allergies"
  ],
  "freq": 104
 },
 {
  "id": "03_Dizziness__12",
  "symptom": "03_Dizziness",
  "symptom_ja": "めまい",
  "order": 12,
  "phase": 5,
  "tag": "身体評価(脳卒中)",
  "adopted": true,
  "prompt_ja": "笑ってみてください。",
  "target": "Can you give me a big smile?",
  "patient": "(smiles)",
  "patient_ja": "（笑顔）",
  "acceptable": [
   "Can you give me a big smile?"
  ],
  "keywords": [
   "give",
   "big",
   "smile"
  ],
  "freq": 0
 },
 {
  "id": "03_Dizziness__13",
  "symptom": "03_Dizziness",
  "symptom_ja": "めまい",
  "order": 13,
  "phase": 5,
  "tag": "身体評価",
  "adopted": true,
  "prompt_ja": "私の手を握って。両腕を上げて。",
  "target": "Squeeze my hands. Now raise both arms.",
  "patient": "(squeezes and raises arms)",
  "patient_ja": "（手を握り、両腕を上げる）",
  "acceptable": [
   "Squeeze my hands. Now raise both arms."
  ],
  "keywords": [
   "squeeze",
   "hands",
   "now",
   "raise",
   "both",
   "arms"
  ],
  "freq": 0
 },
 {
  "id": "03_Dizziness__14",
  "symptom": "03_Dizziness",
  "symptom_ja": "めまい",
  "order": 14,
  "phase": 6,
  "tag": "指示",
  "adopted": true,
  "prompt_ja": "そのまま動かないでください。",
  "target": "Please stay still.",
  "patient": "Okay.",
  "patient_ja": "はい。",
  "acceptable": [
   "Please stay still."
  ],
  "keywords": [
   "please",
   "stay",
   "still"
  ],
  "freq": 4
 },
 {
  "id": "03_Dizziness__15",
  "symptom": "03_Dizziness",
  "symptom_ja": "めまい",
  "order": 15,
  "phase": 7,
  "tag": "安心づけ",
  "adopted": true,
  "prompt_ja": "しっかり対応します、ご安心ください。",
  "target": "We're going to take good care of you.",
  "patient": "Thank you.",
  "patient_ja": "ありがとうございます。",
  "acceptable": [
   "We're going to take good care of you."
  ],
  "keywords": [
   "going",
   "take",
   "good",
   "care"
  ],
  "freq": 6
 },
 {
  "id": "03_Dizziness__16",
  "symptom": "03_Dizziness",
  "symptom_ja": "めまい",
  "order": 16,
  "phase": 8,
  "tag": "処置(EKG)/搬送",
  "adopted": true,
  "prompt_ja": "心臓を確認し、病院へ搬送します。",
  "target": "We'll check your heart. Then take you to the hospital.",
  "patient": "Alright, thank you.",
  "patient_ja": "はい、ありがとうございます。",
  "acceptable": [
   "We'll check your heart. Then take you to the hospital."
  ],
  "keywords": [
   "check",
   "heart",
   "then",
   "take",
   "hospital"
  ],
  "freq": 0
 },
 {
  "id": "04_Headache__1",
  "symptom": "04_Headache",
  "symptom_ja": "頭痛",
  "order": 1,
  "phase": 1,
  "tag": "挨拶",
  "adopted": false,
  "prompt_ja": "救急隊員です。",
  "target": "Hi, I'm a paramedic.",
  "patient": "My head hurts badly.",
  "patient_ja": "頭がひどく痛みます。",
  "acceptable": [
   "Hi, I'm a paramedic."
  ],
  "keywords": [
   "paramedic"
  ],
  "freq": 0
 },
 {
  "id": "04_Headache__2",
  "symptom": "04_Headache",
  "symptom_ja": "頭痛",
  "order": 2,
  "phase": 2,
  "tag": "主訴",
  "adopted": true,
  "prompt_ja": "どうしましたか？",
  "target": "What happened?",
  "patient": "I slipped and hit my head, then the headache started.",
  "patient_ja": "滑って頭を打って、その後頭痛が始まりました。",
  "acceptable": [
   "What happened?"
  ],
  "keywords": [
   "what",
   "happened"
  ],
  "freq": 13
 },
 {
  "id": "04_Headache__3",
  "symptom": "04_Headache",
  "symptom_ja": "頭痛",
  "order": 3,
  "phase": 2,
  "tag": "バイタル",
  "adopted": true,
  "prompt_ja": "相棒がバイタルを測ります。",
  "target": "My partner will get your vitals.",
  "patient": "Okay.",
  "patient_ja": "はい。",
  "acceptable": [
   "My partner will get your vitals."
  ],
  "keywords": [
   "partner",
   "get",
   "vitals"
  ],
  "freq": 0
 },
 {
  "id": "04_Headache__4",
  "symptom": "04_Headache",
  "symptom_ja": "頭痛",
  "order": 4,
  "phase": 3,
  "tag": "発症",
  "adopted": true,
  "prompt_ja": "いつ起きましたか？",
  "target": "When did this happen?",
  "patient": "About twenty minutes ago.",
  "patient_ja": "20分くらい前です。",
  "acceptable": [
   "When did this happen?"
  ],
  "keywords": [
   "when",
   "happen"
  ],
  "freq": 4
 },
 {
  "id": "04_Headache__5",
  "symptom": "04_Headache",
  "symptom_ja": "頭痛",
  "order": 5,
  "phase": 3,
  "tag": "程度",
  "adopted": true,
  "prompt_ja": "頭痛はどのくらい？(0〜10)",
  "target": "How bad is the headache, zero to ten?",
  "patient": "Nine. It's the worst I've ever had.",
  "patient_ja": "9。これまでで一番ひどいです。",
  "acceptable": [
   "How bad is the headache, zero to ten?"
  ],
  "keywords": [
   "how",
   "bad",
   "headache",
   "zero",
   "ten"
  ],
  "freq": 0
 },
 {
  "id": "04_Headache__6",
  "symptom": "04_Headache",
  "symptom_ja": "頭痛",
  "order": 6,
  "phase": 3,
  "tag": "随伴/外傷",
  "adopted": true,
  "prompt_ja": "その後気を失いましたか？",
  "target": "Did you pass out afterward?",
  "patient": "Maybe for a few seconds.",
  "patient_ja": "数秒間、たぶん。",
  "acceptable": [
   "Did you pass out afterward?"
  ],
  "keywords": [
   "pass",
   "out",
   "afterward"
  ],
  "freq": 0
 },
 {
  "id": "04_Headache__7",
  "symptom": "04_Headache",
  "symptom_ja": "頭痛",
  "order": 7,
  "phase": 3,
  "tag": "随伴症状",
  "adopted": true,
  "prompt_ja": "吐き気・嘔吐・見え方の変化は？",
  "target": "Any nausea, vomiting, or vision changes?",
  "patient": "I vomited once, and my vision is blurry.",
  "patient_ja": "一度吐いて、視界がぼやけます。",
  "acceptable": [
   "Any nausea, vomiting, or vision changes?"
  ],
  "keywords": [
   "nausea",
   "vomiting",
   "vision",
   "changes"
  ],
  "freq": 0
 },
 {
  "id": "04_Headache__8",
  "symptom": "04_Headache",
  "symptom_ja": "頭痛",
  "order": 8,
  "phase": 4,
  "tag": "既往歴",
  "adopted": true,
  "prompt_ja": "持病はありますか？",
  "target": "What medical problems do you have?",
  "patient": "None.",
  "patient_ja": "ありません。",
  "acceptable": [
   "What medical problems do you have?"
  ],
  "keywords": [
   "what",
   "medical",
   "problems"
  ],
  "freq": 0
 },
 {
  "id": "04_Headache__9",
  "symptom": "04_Headache",
  "symptom_ja": "頭痛",
  "order": 9,
  "phase": 4,
  "tag": "抗凝固薬",
  "adopted": true,
  "prompt_ja": "抗凝固薬は飲んでいますか？",
  "target": "Do you take any blood thinners?",
  "patient": "Yes, warfarin.",
  "patient_ja": "はい、ワルファリンです。",
  "acceptable": [
   "Do you take any blood thinners?"
  ],
  "keywords": [
   "take",
   "blood",
   "thinners"
  ],
  "freq": 5
 },
 {
  "id": "04_Headache__10",
  "symptom": "04_Headache",
  "symptom_ja": "頭痛",
  "order": 10,
  "phase": 4,
  "tag": "アレルギー",
  "adopted": true,
  "prompt_ja": "アレルギーは？",
  "target": "Any allergies?",
  "patient": "No.",
  "patient_ja": "いいえ。",
  "acceptable": [
   "Any allergies?"
  ],
  "keywords": [
   "allergies"
  ],
  "freq": 104
 },
 {
  "id": "04_Headache__11",
  "symptom": "04_Headache",
  "symptom_ja": "頭痛",
  "order": 11,
  "phase": 5,
  "tag": "身体評価(脳卒中)",
  "adopted": true,
  "prompt_ja": "笑ってみてください。",
  "target": "Can you give me a big smile?",
  "patient": "(smiles)",
  "patient_ja": "（笑顔）",
  "acceptable": [
   "Can you give me a big smile?"
  ],
  "keywords": [
   "give",
   "big",
   "smile"
  ],
  "freq": 0
 },
 {
  "id": "04_Headache__12",
  "symptom": "04_Headache",
  "symptom_ja": "頭痛",
  "order": 12,
  "phase": 5,
  "tag": "身体評価",
  "adopted": true,
  "prompt_ja": "両腕を上げてください。",
  "target": "Raise both your arms.",
  "patient": "(the right arm drifts down)",
  "patient_ja": "（右腕が下がる）",
  "acceptable": [
   "Raise both your arms."
  ],
  "keywords": [
   "raise",
   "both",
   "arms"
  ],
  "freq": 0
 },
 {
  "id": "04_Headache__13",
  "symptom": "04_Headache",
  "symptom_ja": "頭痛",
  "order": 13,
  "phase": 6,
  "tag": "指示",
  "adopted": true,
  "prompt_ja": "そのまま動かないでください。",
  "target": "Please stay still.",
  "patient": "Okay.",
  "patient_ja": "はい。",
  "acceptable": [
   "Please stay still."
  ],
  "keywords": [
   "please",
   "stay",
   "still"
  ],
  "freq": 4
 },
 {
  "id": "04_Headache__14",
  "symptom": "04_Headache",
  "symptom_ja": "頭痛",
  "order": 14,
  "phase": 7,
  "tag": "処置/配慮",
  "adopted": true,
  "prompt_ja": "なるべく揺れないように搬送します。",
  "target": "We'll give you a smooth, gentle ride.",
  "patient": "Thank you.",
  "patient_ja": "ありがとうございます。",
  "acceptable": [
   "We'll give you a smooth, gentle ride."
  ],
  "keywords": [
   "give",
   "smooth",
   "gentle",
   "ride"
  ],
  "freq": 0
 },
 {
  "id": "04_Headache__15",
  "symptom": "04_Headache",
  "symptom_ja": "頭痛",
  "order": 15,
  "phase": 8,
  "tag": "搬送先",
  "adopted": true,
  "prompt_ja": "病院へ搬送します。",
  "target": "We're taking you to the hospital.",
  "patient": "Okay, thank you.",
  "patient_ja": "はい、お願いします。",
  "acceptable": [
   "We're taking you to the hospital."
  ],
  "keywords": [
   "taking",
   "hospital"
  ],
  "freq": 2
 },
 {
  "id": "05_Back_Pain__1",
  "symptom": "05_Back_Pain",
  "symptom_ja": "背部痛",
  "order": 1,
  "phase": 1,
  "tag": "意識/主訴",
  "adopted": true,
  "prompt_ja": "救急隊員です。どうしましたか？",
  "target": "Hello, I'm a paramedic. What happened?",
  "patient": "I lifted something heavy and my back gave out.",
  "patient_ja": "重い物を持ち上げたら腰が抜けました。",
  "acceptable": [
   "Hello, I'm a paramedic. What happened?"
  ],
  "keywords": [
   "hello",
   "paramedic",
   "what",
   "happened"
  ],
  "freq": 0
 },
 {
  "id": "05_Back_Pain__2",
  "symptom": "05_Back_Pain",
  "symptom_ja": "背部痛",
  "order": 2,
  "phase": 2,
  "tag": "主訴聴取",
  "adopted": true,
  "prompt_ja": "どうされましたか？",
  "target": "Can you tell me what's going on?",
  "patient": "My back hurts.",
  "patient_ja": "背中が痛みます。",
  "acceptable": [
   "Can you tell me what's going on?"
  ],
  "keywords": [
   "tell",
   "what",
   "going"
  ],
  "freq": 3
 },
 {
  "id": "05_Back_Pain__3",
  "symptom": "05_Back_Pain",
  "symptom_ja": "背部痛",
  "order": 3,
  "phase": 2,
  "tag": "バイタル",
  "adopted": true,
  "prompt_ja": "相棒がバイタルを測ります。",
  "target": "My partner will get your vitals.",
  "patient": "Okay.",
  "patient_ja": "はい。",
  "acceptable": [
   "My partner will get your vitals."
  ],
  "keywords": [
   "partner",
   "get",
   "vitals"
  ],
  "freq": 0
 },
 {
  "id": "05_Back_Pain__4",
  "symptom": "05_Back_Pain",
  "symptom_ja": "背部痛",
  "order": 4,
  "phase": 3,
  "tag": "発症",
  "adopted": true,
  "prompt_ja": "背中の痛みはいつ始まりましたか？",
  "target": "When did your back pain start?",
  "patient": "About an hour ago.",
  "patient_ja": "1時間くらい前です。",
  "acceptable": [
   "When did your back pain start?"
  ],
  "keywords": [
   "when",
   "back",
   "pain",
   "start"
  ],
  "freq": 5
 },
 {
  "id": "05_Back_Pain__5",
  "symptom": "05_Back_Pain",
  "symptom_ja": "背部痛",
  "order": 5,
  "phase": 3,
  "tag": "部位",
  "adopted": true,
  "prompt_ja": "痛むところを指さしてください。",
  "target": "Can you point to where it hurts?",
  "patient": "Right here, in my lower back.",
  "patient_ja": "ここ、腰の下の方です。",
  "acceptable": [
   "Can you point to where it hurts?"
  ],
  "keywords": [
   "point",
   "where",
   "hurts"
  ],
  "freq": 0
 },
 {
  "id": "05_Back_Pain__6",
  "symptom": "05_Back_Pain",
  "symptom_ja": "背部痛",
  "order": 6,
  "phase": 3,
  "tag": "程度",
  "adopted": true,
  "prompt_ja": "痛みはどのくらい？(0〜10)",
  "target": "How bad is the pain, zero to ten?",
  "patient": "About seven.",
  "patient_ja": "7くらいです。",
  "acceptable": [
   "How bad is the pain, zero to ten?"
  ],
  "keywords": [
   "how",
   "bad",
   "pain",
   "zero",
   "ten"
  ],
  "freq": 3
 },
 {
  "id": "05_Back_Pain__7",
  "symptom": "05_Back_Pain",
  "symptom_ja": "背部痛",
  "order": 7,
  "phase": 3,
  "tag": "放散",
  "adopted": true,
  "prompt_ja": "脚に広がりますか？",
  "target": "Does it spread to your legs?",
  "patient": "A little into my right leg.",
  "patient_ja": "少し右脚に。",
  "acceptable": [
   "Does it spread to your legs?"
  ],
  "keywords": [
   "spread",
   "legs"
  ],
  "freq": 0
 },
 {
  "id": "05_Back_Pain__8",
  "symptom": "05_Back_Pain",
  "symptom_ja": "背部痛",
  "order": 8,
  "phase": 3,
  "tag": "随伴/神経",
  "adopted": true,
  "prompt_ja": "脚のしびれや力の入りにくさは？",
  "target": "Any numbness or weakness in your legs?",
  "patient": "My right foot feels a bit numb.",
  "patient_ja": "右足が少ししびれます。",
  "acceptable": [
   "Any numbness or weakness in your legs?"
  ],
  "keywords": [
   "numbness",
   "weakness",
   "legs"
  ],
  "freq": 1
 },
 {
  "id": "05_Back_Pain__9",
  "symptom": "05_Back_Pain",
  "symptom_ja": "背部痛",
  "order": 9,
  "phase": 3,
  "tag": "Red-flag",
  "adopted": true,
  "prompt_ja": "排尿・排便の障害は？",
  "target": "Any bladder or bowel problems?",
  "patient": "No.",
  "patient_ja": "いいえ。",
  "acceptable": [
   "Any bladder or bowel problems?"
  ],
  "keywords": [
   "bladder",
   "bowel",
   "problems"
  ],
  "freq": 1
 },
 {
  "id": "05_Back_Pain__10",
  "symptom": "05_Back_Pain",
  "symptom_ja": "背部痛",
  "order": 10,
  "phase": 4,
  "tag": "既往歴",
  "adopted": true,
  "prompt_ja": "持病はありますか？",
  "target": "What medical problems do you have?",
  "patient": "None.",
  "patient_ja": "ありません。",
  "acceptable": [
   "What medical problems do you have?"
  ],
  "keywords": [
   "what",
   "medical",
   "problems"
  ],
  "freq": 0
 },
 {
  "id": "05_Back_Pain__11",
  "symptom": "05_Back_Pain",
  "symptom_ja": "背部痛",
  "order": 11,
  "phase": 4,
  "tag": "アレルギー/内服薬",
  "adopted": true,
  "prompt_ja": "アレルギーや内服薬は？",
  "target": "Any allergies or medications?",
  "patient": "No allergies, just a vitamin.",
  "patient_ja": "アレルギーなし、ビタミンだけです。",
  "acceptable": [
   "Any allergies or medications?"
  ],
  "keywords": [
   "allergies",
   "medications"
  ],
  "freq": 0
 },
 {
  "id": "05_Back_Pain__12",
  "symptom": "05_Back_Pain",
  "symptom_ja": "背部痛",
  "order": 12,
  "phase": 5,
  "tag": "身体評価",
  "adopted": true,
  "prompt_ja": "押すと痛いですか？",
  "target": "Does it hurt when I press here?",
  "patient": "It hurts right there.",
  "patient_ja": "そこが痛いです。",
  "acceptable": [
   "Does it hurt when I press here?"
  ],
  "keywords": [
   "hurt",
   "when",
   "press",
   "here"
  ],
  "freq": 1
 },
 {
  "id": "05_Back_Pain__13",
  "symptom": "05_Back_Pain",
  "symptom_ja": "背部痛",
  "order": 13,
  "phase": 5,
  "tag": "身体評価",
  "adopted": true,
  "prompt_ja": "呼吸音を聴きます。",
  "target": "Let me listen to your breathing.",
  "patient": "(takes a deep breath)",
  "patient_ja": "（深呼吸する）",
  "acceptable": [
   "Let me listen to your breathing."
  ],
  "keywords": [
   "let",
   "listen",
   "breathing"
  ],
  "freq": 2
 },
 {
  "id": "05_Back_Pain__14",
  "symptom": "05_Back_Pain",
  "symptom_ja": "背部痛",
  "order": 14,
  "phase": 5,
  "tag": "身体評価",
  "adopted": true,
  "prompt_ja": "腹部を触診します。",
  "target": "I'm going to gently feel your stomach.",
  "patient": "Okay.",
  "patient_ja": "はい。",
  "acceptable": [
   "I'm going to gently feel your stomach."
  ],
  "keywords": [
   "going",
   "gently",
   "feel",
   "stomach"
  ],
  "freq": 0
 },
 {
  "id": "05_Back_Pain__15",
  "symptom": "05_Back_Pain",
  "symptom_ja": "背部痛",
  "order": 15,
  "phase": 6,
  "tag": "指示",
  "adopted": true,
  "prompt_ja": "そのまま動かないでください。",
  "target": "Please stay still.",
  "patient": "Okay.",
  "patient_ja": "はい。",
  "acceptable": [
   "Please stay still."
  ],
  "keywords": [
   "please",
   "stay",
   "still"
  ],
  "freq": 4
 },
 {
  "id": "05_Back_Pain__16",
  "symptom": "05_Back_Pain",
  "symptom_ja": "背部痛",
  "order": 16,
  "phase": 7,
  "tag": "安心づけ",
  "adopted": true,
  "prompt_ja": "しっかり対応します、ご安心ください。",
  "target": "We're going to take good care of you.",
  "patient": "Thank you.",
  "patient_ja": "ありがとうございます。",
  "acceptable": [
   "We're going to take good care of you."
  ],
  "keywords": [
   "going",
   "take",
   "good",
   "care"
  ],
  "freq": 6
 },
 {
  "id": "05_Back_Pain__17",
  "symptom": "05_Back_Pain",
  "symptom_ja": "背部痛",
  "order": 17,
  "phase": 8,
  "tag": "処置/搬送",
  "adopted": true,
  "prompt_ja": "病院へ搬送します。",
  "target": "We'll take you to the hospital.",
  "patient": "Thank you.",
  "patient_ja": "ありがとうございます。",
  "acceptable": [
   "We'll take you to the hospital."
  ],
  "keywords": [
   "take",
   "hospital"
  ],
  "freq": 0
 },
 {
  "id": "06_Altered_Consciousness__1",
  "symptom": "06_Altered_Consciousness",
  "symptom_ja": "意識障害",
  "order": 1,
  "phase": 1,
  "tag": "意識",
  "adopted": true,
  "prompt_ja": "聞こえますか？目を開けてください。",
  "target": "Can you hear me? Open your eyes.",
  "patient": "(no clear response)",
  "patient_ja": "（はっきりした反応なし）",
  "acceptable": [
   "Can you hear me? Open your eyes."
  ],
  "keywords": [
   "hear",
   "open",
   "eyes"
  ],
  "freq": 0
 },
 {
  "id": "06_Altered_Consciousness__2",
  "symptom": "06_Altered_Consciousness",
  "symptom_ja": "意識障害",
  "order": 2,
  "phase": 1,
  "tag": "意識/baseline",
  "adopted": true,
  "prompt_ja": "普段ははっきり話せますか？",
  "target": "Is she usually alert and talking?",
  "patient": "Yes, normally she's sharp and talks fine.",
  "patient_ja": "はい、普段はしっかりしています。",
  "acceptable": [
   "Is she usually alert and talking?"
  ],
  "keywords": [
   "she",
   "usually",
   "alert",
   "talking"
  ],
  "freq": 0
 },
 {
  "id": "06_Altered_Consciousness__3",
  "symptom": "06_Altered_Consciousness",
  "symptom_ja": "意識障害",
  "order": 3,
  "phase": 2,
  "tag": "主訴聴取",
  "adopted": true,
  "prompt_ja": "どうされましたか？",
  "target": "Can you tell me what's going on?",
  "patient": "She seems confused.",
  "patient_ja": "様子がおかしいんです。",
  "acceptable": [
   "Can you tell me what's going on?"
  ],
  "keywords": [
   "tell",
   "what",
   "going"
  ],
  "freq": 3
 },
 {
  "id": "06_Altered_Consciousness__4",
  "symptom": "06_Altered_Consciousness",
  "symptom_ja": "意識障害",
  "order": 4,
  "phase": 2,
  "tag": "バイタル",
  "adopted": true,
  "prompt_ja": "バイタルを確認します。",
  "target": "Let me check her vitals.",
  "patient": "Okay.",
  "patient_ja": "はい。",
  "acceptable": [
   "Let me check her vitals."
  ],
  "keywords": [
   "let",
   "check",
   "her",
   "vitals"
  ],
  "freq": 1
 },
 {
  "id": "06_Altered_Consciousness__5",
  "symptom": "06_Altered_Consciousness",
  "symptom_ja": "意識障害",
  "order": 5,
  "phase": 3,
  "tag": "状況",
  "adopted": true,
  "prompt_ja": "今日はどうされましたか？",
  "target": "What happened today?",
  "patient": "I'm her daughter. She's been confused since this morning.",
  "patient_ja": "娘です。今朝から様子がおかしくて。",
  "acceptable": [
   "What happened today?"
  ],
  "keywords": [
   "what",
   "happened",
   "today"
  ],
  "freq": 25
 },
 {
  "id": "06_Altered_Consciousness__6",
  "symptom": "06_Altered_Consciousness",
  "symptom_ja": "意識障害",
  "order": 6,
  "phase": 3,
  "tag": "状況/外傷",
  "adopted": true,
  "prompt_ja": "最近の転倒やけがは？",
  "target": "Any recent falls or injuries?",
  "patient": "No falls.",
  "patient_ja": "転倒はありません。",
  "acceptable": [
   "Any recent falls or injuries?"
  ],
  "keywords": [
   "recent",
   "falls",
   "injuries"
  ],
  "freq": 0
 },
 {
  "id": "06_Altered_Consciousness__7",
  "symptom": "06_Altered_Consciousness",
  "symptom_ja": "意識障害",
  "order": 7,
  "phase": 4,
  "tag": "既往歴",
  "adopted": true,
  "prompt_ja": "持病はありますか？",
  "target": "Does she have any medical problems?",
  "patient": "Diabetes and high blood pressure.",
  "patient_ja": "糖尿病と高血圧です。",
  "acceptable": [
   "Does she have any medical problems?"
  ],
  "keywords": [
   "she",
   "medical",
   "problems"
  ],
  "freq": 0
 },
 {
  "id": "06_Altered_Consciousness__8",
  "symptom": "06_Altered_Consciousness",
  "symptom_ja": "意識障害",
  "order": 8,
  "phase": 4,
  "tag": "アレルギー/内服薬",
  "adopted": true,
  "prompt_ja": "アレルギーは？どんな薬を飲んでいますか？",
  "target": "Any allergies? What medications does she take?",
  "patient": "No allergies. Pills for diabetes and blood pressure.",
  "patient_ja": "アレルギーなし。糖尿病と血圧の薬です。",
  "acceptable": [
   "Any allergies? What medications does she take?"
  ],
  "keywords": [
   "allergies",
   "what",
   "medications",
   "she",
   "take"
  ],
  "freq": 0
 },
 {
  "id": "06_Altered_Consciousness__9",
  "symptom": "06_Altered_Consciousness",
  "symptom_ja": "意識障害",
  "order": 9,
  "phase": 5,
  "tag": "処置(酸素/血糖)",
  "adopted": false,
  "prompt_ja": "酸素と血糖を確認します。",
  "target": "We'll give oxygen and check blood sugar.",
  "patient": "Please help her.",
  "patient_ja": "助けてください。",
  "acceptable": [
   "We'll give oxygen and check blood sugar."
  ],
  "keywords": [
   "give",
   "oxygen",
   "check",
   "blood",
   "sugar"
  ],
  "freq": 0
 },
 {
  "id": "06_Altered_Consciousness__10",
  "symptom": "06_Altered_Consciousness",
  "symptom_ja": "意識障害",
  "order": 10,
  "phase": 5,
  "tag": "身体評価",
  "adopted": true,
  "prompt_ja": "呼吸音を聴きます。",
  "target": "Let me listen to her breathing.",
  "patient": "(she breathes slowly)",
  "patient_ja": "（ゆっくり呼吸する）",
  "acceptable": [
   "Let me listen to her breathing."
  ],
  "keywords": [
   "let",
   "listen",
   "her",
   "breathing"
  ],
  "freq": 0
 },
 {
  "id": "06_Altered_Consciousness__11",
  "symptom": "06_Altered_Consciousness",
  "symptom_ja": "意識障害",
  "order": 11,
  "phase": 6,
  "tag": "指示",
  "adopted": true,
  "prompt_ja": "そのまま動かないでください。",
  "target": "Please stay still.",
  "patient": "Okay.",
  "patient_ja": "はい。",
  "acceptable": [
   "Please stay still."
  ],
  "keywords": [
   "please",
   "stay",
   "still"
  ],
  "freq": 4
 },
 {
  "id": "06_Altered_Consciousness__12",
  "symptom": "06_Altered_Consciousness",
  "symptom_ja": "意識障害",
  "order": 12,
  "phase": 7,
  "tag": "安心づけ",
  "adopted": true,
  "prompt_ja": "しっかり対応します、ご安心ください。",
  "target": "We're going to take good care of you.",
  "patient": "Thank you.",
  "patient_ja": "ありがとうございます。",
  "acceptable": [
   "We're going to take good care of you."
  ],
  "keywords": [
   "going",
   "take",
   "good",
   "care"
  ],
  "freq": 6
 },
 {
  "id": "06_Altered_Consciousness__13",
  "symptom": "06_Altered_Consciousness",
  "symptom_ja": "意識障害",
  "order": 13,
  "phase": 8,
  "tag": "処置(EKG)/搬送",
  "adopted": true,
  "prompt_ja": "病院へ搬送します。",
  "target": "We'll take her to the hospital.",
  "patient": "Thank you.",
  "patient_ja": "ありがとうございます。",
  "acceptable": [
   "We'll take her to the hospital."
  ],
  "keywords": [
   "take",
   "her",
   "hospital"
  ],
  "freq": 0
 },
 {
  "id": "07_Abdominal_Pain__1",
  "symptom": "07_Abdominal_Pain",
  "symptom_ja": "腹痛",
  "order": 1,
  "phase": 1,
  "tag": "意識/主訴",
  "adopted": true,
  "prompt_ja": "救急隊員です。今日はどうされましたか？",
  "target": "Hi, I'm a paramedic. What's going on today?",
  "patient": "My stomach really hurts.",
  "patient_ja": "お腹がとても痛いです。",
  "acceptable": [
   "Hi, I'm a paramedic. What's going on today?"
  ],
  "keywords": [
   "paramedic",
   "what",
   "going",
   "today"
  ],
  "freq": 0
 },
 {
  "id": "07_Abdominal_Pain__2",
  "symptom": "07_Abdominal_Pain",
  "symptom_ja": "腹痛",
  "order": 2,
  "phase": 2,
  "tag": "主訴聴取",
  "adopted": true,
  "prompt_ja": "どうされましたか？",
  "target": "Can you tell me what's going on?",
  "patient": "My stomach hurts.",
  "patient_ja": "お腹が痛いです。",
  "acceptable": [
   "Can you tell me what's going on?"
  ],
  "keywords": [
   "tell",
   "what",
   "going"
  ],
  "freq": 3
 },
 {
  "id": "07_Abdominal_Pain__3",
  "symptom": "07_Abdominal_Pain",
  "symptom_ja": "腹痛",
  "order": 3,
  "phase": 2,
  "tag": "バイタル",
  "adopted": true,
  "prompt_ja": "バイタルを確認します。",
  "target": "Let me check your vitals.",
  "patient": "Okay.",
  "patient_ja": "はい。",
  "acceptable": [
   "Let me check your vitals."
  ],
  "keywords": [
   "let",
   "check",
   "vitals"
  ],
  "freq": 4
 },
 {
  "id": "07_Abdominal_Pain__4",
  "symptom": "07_Abdominal_Pain",
  "symptom_ja": "腹痛",
  "order": 4,
  "phase": 3,
  "tag": "発症",
  "adopted": true,
  "prompt_ja": "腹痛はいつ始まりましたか？",
  "target": "When did your stomach pain start?",
  "patient": "Since last night.",
  "patient_ja": "昨夜からです。",
  "acceptable": [
   "When did your stomach pain start?"
  ],
  "keywords": [
   "when",
   "stomach",
   "pain",
   "start"
  ],
  "freq": 9
 },
 {
  "id": "07_Abdominal_Pain__5",
  "symptom": "07_Abdominal_Pain",
  "symptom_ja": "腹痛",
  "order": 5,
  "phase": 3,
  "tag": "部位",
  "adopted": true,
  "prompt_ja": "痛むところを指さしてください。",
  "target": "Can you point to where it hurts?",
  "patient": "All around my belly button.",
  "patient_ja": "おへその周り全体です。",
  "acceptable": [
   "Can you point to where it hurts?"
  ],
  "keywords": [
   "point",
   "where",
   "hurts"
  ],
  "freq": 0
 },
 {
  "id": "07_Abdominal_Pain__6",
  "symptom": "07_Abdominal_Pain",
  "symptom_ja": "腹痛",
  "order": 6,
  "phase": 3,
  "tag": "程度",
  "adopted": true,
  "prompt_ja": "痛みはどのくらい？(0〜10)",
  "target": "How bad is the pain, zero to ten?",
  "patient": "About six.",
  "patient_ja": "6くらいです。",
  "acceptable": [
   "How bad is the pain, zero to ten?"
  ],
  "keywords": [
   "how",
   "bad",
   "pain",
   "zero",
   "ten"
  ],
  "freq": 3
 },
 {
  "id": "07_Abdominal_Pain__7",
  "symptom": "07_Abdominal_Pain",
  "symptom_ja": "腹痛",
  "order": 7,
  "phase": 3,
  "tag": "随伴症状",
  "adopted": true,
  "prompt_ja": "吐き気や嘔吐は？",
  "target": "Any nausea or vomiting?",
  "patient": "Yes, I vomited twice and have diarrhea.",
  "patient_ja": "はい、2回吐いて下痢もあります。",
  "acceptable": [
   "Any nausea or vomiting?"
  ],
  "keywords": [
   "nausea",
   "vomiting"
  ],
  "freq": 27
 },
 {
  "id": "07_Abdominal_Pain__8",
  "symptom": "07_Abdominal_Pain",
  "symptom_ja": "腹痛",
  "order": 8,
  "phase": 3,
  "tag": "Red-flag",
  "adopted": true,
  "prompt_ja": "吐物や便に血は？",
  "target": "Any blood in your vomit or stool?",
  "patient": "No blood.",
  "patient_ja": "血はありません。",
  "acceptable": [
   "Any blood in your vomit or stool?"
  ],
  "keywords": [
   "blood",
   "vomit",
   "stool"
  ],
  "freq": 0
 },
 {
  "id": "07_Abdominal_Pain__9",
  "symptom": "07_Abdominal_Pain",
  "symptom_ja": "腹痛",
  "order": 9,
  "phase": 3,
  "tag": "随伴症状",
  "adopted": true,
  "prompt_ja": "熱はありますか？",
  "target": "Any fever?",
  "patient": "Yes, since this morning.",
  "patient_ja": "はい、今朝から。",
  "acceptable": [
   "Any fever?"
  ],
  "keywords": [
   "fever"
  ],
  "freq": 16
 },
 {
  "id": "07_Abdominal_Pain__10",
  "symptom": "07_Abdominal_Pain",
  "symptom_ja": "腹痛",
  "order": 10,
  "phase": 4,
  "tag": "既往歴",
  "adopted": true,
  "prompt_ja": "持病はありますか？",
  "target": "What medical problems do you have?",
  "patient": "None.",
  "patient_ja": "ありません。",
  "acceptable": [
   "What medical problems do you have?"
  ],
  "keywords": [
   "what",
   "medical",
   "problems"
  ],
  "freq": 0
 },
 {
  "id": "07_Abdominal_Pain__11",
  "symptom": "07_Abdominal_Pain",
  "symptom_ja": "腹痛",
  "order": 11,
  "phase": 4,
  "tag": "最終飲食",
  "adopted": true,
  "prompt_ja": "最後に飲食したのはいつ？",
  "target": "When did you last eat or drink?",
  "patient": "I can't keep anything down.",
  "patient_ja": "何も口にできていません。",
  "acceptable": [
   "When did you last eat or drink?"
  ],
  "keywords": [
   "when",
   "last",
   "eat",
   "drink"
  ],
  "freq": 7
 },
 {
  "id": "07_Abdominal_Pain__12",
  "symptom": "07_Abdominal_Pain",
  "symptom_ja": "腹痛",
  "order": 12,
  "phase": 4,
  "tag": "アレルギー/内服薬",
  "adopted": true,
  "prompt_ja": "アレルギーや内服薬は？",
  "target": "Any allergies or medications?",
  "patient": "No allergies, no medications.",
  "patient_ja": "どちらもありません。",
  "acceptable": [
   "Any allergies or medications?"
  ],
  "keywords": [
   "allergies",
   "medications"
  ],
  "freq": 0
 },
 {
  "id": "07_Abdominal_Pain__13",
  "symptom": "07_Abdominal_Pain",
  "symptom_ja": "腹痛",
  "order": 13,
  "phase": 5,
  "tag": "身体評価",
  "adopted": true,
  "prompt_ja": "お腹を触診します。",
  "target": "I'm going to gently feel your stomach.",
  "patient": "Okay.",
  "patient_ja": "はい。",
  "acceptable": [
   "I'm going to gently feel your stomach."
  ],
  "keywords": [
   "going",
   "gently",
   "feel",
   "stomach"
  ],
  "freq": 0
 },
 {
  "id": "07_Abdominal_Pain__14",
  "symptom": "07_Abdominal_Pain",
  "symptom_ja": "腹痛",
  "order": 14,
  "phase": 6,
  "tag": "指示",
  "adopted": true,
  "prompt_ja": "そのまま動かないでください。",
  "target": "Please stay still.",
  "patient": "Okay.",
  "patient_ja": "はい。",
  "acceptable": [
   "Please stay still."
  ],
  "keywords": [
   "please",
   "stay",
   "still"
  ],
  "freq": 4
 },
 {
  "id": "07_Abdominal_Pain__15",
  "symptom": "07_Abdominal_Pain",
  "symptom_ja": "腹痛",
  "order": 15,
  "phase": 7,
  "tag": "安心づけ",
  "adopted": true,
  "prompt_ja": "しっかり対応します、ご安心ください。",
  "target": "We're going to take good care of you.",
  "patient": "Thank you.",
  "patient_ja": "ありがとうございます。",
  "acceptable": [
   "We're going to take good care of you."
  ],
  "keywords": [
   "going",
   "take",
   "good",
   "care"
  ],
  "freq": 6
 },
 {
  "id": "07_Abdominal_Pain__16",
  "symptom": "07_Abdominal_Pain",
  "symptom_ja": "腹痛",
  "order": 16,
  "phase": 8,
  "tag": "搬送先",
  "adopted": true,
  "prompt_ja": "病院へ搬送します。",
  "target": "We're taking you to the hospital.",
  "patient": "Okay, thank you.",
  "patient_ja": "はい、お願いします。",
  "acceptable": [
   "We're taking you to the hospital."
  ],
  "keywords": [
   "taking",
   "hospital"
  ],
  "freq": 2
 },
 {
  "id": "08_Nausea_Vomiting__1",
  "symptom": "08_Nausea_Vomiting",
  "symptom_ja": "悪心・嘔吐",
  "order": 1,
  "phase": 1,
  "tag": "意識/主訴",
  "adopted": true,
  "prompt_ja": "救急隊員です。具合はいかがですか？",
  "target": "Hello, I'm a paramedic. How are you feeling?",
  "patient": "I keep throwing up.",
  "patient_ja": "何度も吐いてしまいます。",
  "acceptable": [
   "Hello, I'm a paramedic. How are you feeling?"
  ],
  "keywords": [
   "hello",
   "paramedic",
   "how",
   "feeling"
  ],
  "freq": 0
 },
 {
  "id": "08_Nausea_Vomiting__2",
  "symptom": "08_Nausea_Vomiting",
  "symptom_ja": "悪心・嘔吐",
  "order": 2,
  "phase": 2,
  "tag": "主訴聴取",
  "adopted": true,
  "prompt_ja": "どうされましたか？",
  "target": "Can you tell me what's going on?",
  "patient": "I keep throwing up.",
  "patient_ja": "何度も吐いてしまいます。",
  "acceptable": [
   "Can you tell me what's going on?"
  ],
  "keywords": [
   "tell",
   "what",
   "going"
  ],
  "freq": 3
 },
 {
  "id": "08_Nausea_Vomiting__3",
  "symptom": "08_Nausea_Vomiting",
  "symptom_ja": "悪心・嘔吐",
  "order": 3,
  "phase": 2,
  "tag": "バイタル",
  "adopted": true,
  "prompt_ja": "バイタルを確認します。",
  "target": "Let me check your vitals.",
  "patient": "Okay.",
  "patient_ja": "はい。",
  "acceptable": [
   "Let me check your vitals."
  ],
  "keywords": [
   "let",
   "check",
   "vitals"
  ],
  "freq": 4
 },
 {
  "id": "08_Nausea_Vomiting__4",
  "symptom": "08_Nausea_Vomiting",
  "symptom_ja": "悪心・嘔吐",
  "order": 4,
  "phase": 3,
  "tag": "発症",
  "adopted": true,
  "prompt_ja": "吐き気はいつ始まりましたか？",
  "target": "When did your nausea start?",
  "patient": "A few hours ago, after drinking.",
  "patient_ja": "飲んだ後、数時間前からです。",
  "acceptable": [
   "When did your nausea start?"
  ],
  "keywords": [
   "when",
   "nausea",
   "start"
  ],
  "freq": 5
 },
 {
  "id": "08_Nausea_Vomiting__5",
  "symptom": "08_Nausea_Vomiting",
  "symptom_ja": "悪心・嘔吐",
  "order": 5,
  "phase": 3,
  "tag": "随伴/評価",
  "adopted": true,
  "prompt_ja": "何回吐きましたか？",
  "target": "How many times have you vomited?",
  "patient": "About five times.",
  "patient_ja": "5回くらいです。",
  "acceptable": [
   "How many times have you vomited?"
  ],
  "keywords": [
   "how",
   "many",
   "times",
   "vomited"
  ],
  "freq": 12
 },
 {
  "id": "08_Nausea_Vomiting__6",
  "symptom": "08_Nausea_Vomiting",
  "symptom_ja": "悪心・嘔吐",
  "order": 6,
  "phase": 3,
  "tag": "Red-flag",
  "adopted": true,
  "prompt_ja": "吐物に血は混じっていましたか？",
  "target": "Any blood in your vomit?",
  "patient": "No blood.",
  "patient_ja": "血はありません。",
  "acceptable": [
   "Any blood in your vomit?"
  ],
  "keywords": [
   "blood",
   "vomit"
  ],
  "freq": 0
 },
 {
  "id": "08_Nausea_Vomiting__7",
  "symptom": "08_Nausea_Vomiting",
  "symptom_ja": "悪心・嘔吐",
  "order": 7,
  "phase": 3,
  "tag": "随伴症状",
  "adopted": true,
  "prompt_ja": "腹痛や胸の痛みは？",
  "target": "Any stomach pain or chest pain?",
  "patient": "Just my stomach feels upset.",
  "patient_ja": "胃がむかむかするだけです。",
  "acceptable": [
   "Any stomach pain or chest pain?"
  ],
  "keywords": [
   "stomach",
   "pain",
   "chest",
   "pain"
  ],
  "freq": 0
 },
 {
  "id": "08_Nausea_Vomiting__8",
  "symptom": "08_Nausea_Vomiting",
  "symptom_ja": "悪心・嘔吐",
  "order": 8,
  "phase": 3,
  "tag": "増悪寛解",
  "adopted": true,
  "prompt_ja": "楽になる・悪化することはありますか？",
  "target": "Does anything make the nausea better or worse?",
  "patient": "Lying still helps a little.",
  "patient_ja": "じっとしていると少し楽です。",
  "acceptable": [
   "Does anything make the nausea better or worse?"
  ],
  "keywords": [
   "anything",
   "make",
   "nausea",
   "better",
   "worse"
  ],
  "freq": 0
 },
 {
  "id": "08_Nausea_Vomiting__9",
  "symptom": "08_Nausea_Vomiting",
  "symptom_ja": "悪心・嘔吐",
  "order": 9,
  "phase": 3,
  "tag": "状況/外傷",
  "adopted": true,
  "prompt_ja": "頭を打ちましたか？",
  "target": "Did you hit your head?",
  "patient": "No.",
  "patient_ja": "いいえ。",
  "acceptable": [
   "Did you hit your head?"
  ],
  "keywords": [
   "hit",
   "head"
  ],
  "freq": 4
 },
 {
  "id": "08_Nausea_Vomiting__10",
  "symptom": "08_Nausea_Vomiting",
  "symptom_ja": "悪心・嘔吐",
  "order": 10,
  "phase": 4,
  "tag": "既往歴",
  "adopted": true,
  "prompt_ja": "持病はありますか？",
  "target": "What medical problems do you have?",
  "patient": "None.",
  "patient_ja": "ありません。",
  "acceptable": [
   "What medical problems do you have?"
  ],
  "keywords": [
   "what",
   "medical",
   "problems"
  ],
  "freq": 0
 },
 {
  "id": "08_Nausea_Vomiting__11",
  "symptom": "08_Nausea_Vomiting",
  "symptom_ja": "悪心・嘔吐",
  "order": 11,
  "phase": 4,
  "tag": "アレルギー/内服薬",
  "adopted": true,
  "prompt_ja": "アレルギーや内服薬は？",
  "target": "Any allergies or medications?",
  "patient": "None.",
  "patient_ja": "ありません。",
  "acceptable": [
   "Any allergies or medications?"
  ],
  "keywords": [
   "allergies",
   "medications"
  ],
  "freq": 0
 },
 {
  "id": "08_Nausea_Vomiting__12",
  "symptom": "08_Nausea_Vomiting",
  "symptom_ja": "悪心・嘔吐",
  "order": 12,
  "phase": 5,
  "tag": "身体評価",
  "adopted": true,
  "prompt_ja": "両腕を上げてください。",
  "target": "Raise both your arms.",
  "patient": "(raises both arms)",
  "patient_ja": "（両腕を上げる）",
  "acceptable": [
   "Raise both your arms."
  ],
  "keywords": [
   "raise",
   "both",
   "arms"
  ],
  "freq": 0
 },
 {
  "id": "08_Nausea_Vomiting__13",
  "symptom": "08_Nausea_Vomiting",
  "symptom_ja": "悪心・嘔吐",
  "order": 13,
  "phase": 5,
  "tag": "身体評価",
  "adopted": true,
  "prompt_ja": "腹部を触診します。",
  "target": "I'm going to gently feel your stomach.",
  "patient": "Okay.",
  "patient_ja": "はい。",
  "acceptable": [
   "I'm going to gently feel your stomach."
  ],
  "keywords": [
   "going",
   "gently",
   "feel",
   "stomach"
  ],
  "freq": 0
 },
 {
  "id": "08_Nausea_Vomiting__14",
  "symptom": "08_Nausea_Vomiting",
  "symptom_ja": "悪心・嘔吐",
  "order": 14,
  "phase": 6,
  "tag": "指示",
  "adopted": true,
  "prompt_ja": "そのまま動かないでください。",
  "target": "Please stay still.",
  "patient": "Okay.",
  "patient_ja": "はい。",
  "acceptable": [
   "Please stay still."
  ],
  "keywords": [
   "please",
   "stay",
   "still"
  ],
  "freq": 4
 },
 {
  "id": "08_Nausea_Vomiting__15",
  "symptom": "08_Nausea_Vomiting",
  "symptom_ja": "悪心・嘔吐",
  "order": 15,
  "phase": 7,
  "tag": "安心づけ",
  "adopted": true,
  "prompt_ja": "しっかり対応します、ご安心ください。",
  "target": "We're going to take good care of you.",
  "patient": "Thank you.",
  "patient_ja": "ありがとうございます。",
  "acceptable": [
   "We're going to take good care of you."
  ],
  "keywords": [
   "going",
   "take",
   "good",
   "care"
  ],
  "freq": 6
 },
 {
  "id": "08_Nausea_Vomiting__16",
  "symptom": "08_Nausea_Vomiting",
  "symptom_ja": "悪心・嘔吐",
  "order": 16,
  "phase": 8,
  "tag": "搬送先",
  "adopted": true,
  "prompt_ja": "これから病院へ搬送します。",
  "target": "We'll take you to the hospital now.",
  "patient": "Thank you.",
  "patient_ja": "ありがとうございます。",
  "acceptable": [
   "We'll take you to the hospital now."
  ],
  "keywords": [
   "take",
   "hospital",
   "now"
  ],
  "freq": 0
 },
 {
  "id": "09_Weakness__1",
  "symptom": "09_Weakness",
  "symptom_ja": "脱力",
  "order": 1,
  "phase": 1,
  "tag": "主訴",
  "adopted": true,
  "prompt_ja": "救急隊員です。どうされましたか？",
  "target": "Hello, I'm a paramedic. What's going on?",
  "patient": "My right side feels weak.",
  "patient_ja": "右半身に力が入りません。",
  "acceptable": [
   "Hello, I'm a paramedic. What's going on?"
  ],
  "keywords": [
   "hello",
   "paramedic",
   "what",
   "going"
  ],
  "freq": 0
 },
 {
  "id": "09_Weakness__2",
  "symptom": "09_Weakness",
  "symptom_ja": "脱力",
  "order": 2,
  "phase": 2,
  "tag": "主訴聴取",
  "adopted": true,
  "prompt_ja": "どうされましたか？",
  "target": "Can you tell me what's going on?",
  "patient": "My right side feels weak.",
  "patient_ja": "右半身に力が入りません。",
  "acceptable": [
   "Can you tell me what's going on?"
  ],
  "keywords": [
   "tell",
   "what",
   "going"
  ],
  "freq": 3
 },
 {
  "id": "09_Weakness__3",
  "symptom": "09_Weakness",
  "symptom_ja": "脱力",
  "order": 3,
  "phase": 2,
  "tag": "バイタル",
  "adopted": true,
  "prompt_ja": "バイタルを確認します。",
  "target": "Let me check your vitals.",
  "patient": "Okay.",
  "patient_ja": "はい。",
  "acceptable": [
   "Let me check your vitals."
  ],
  "keywords": [
   "let",
   "check",
   "vitals"
  ],
  "freq": 4
 },
 {
  "id": "09_Weakness__4",
  "symptom": "09_Weakness",
  "symptom_ja": "脱力",
  "order": 4,
  "phase": 3,
  "tag": "発症",
  "adopted": true,
  "prompt_ja": "脱力はいつ始まりましたか？",
  "target": "When did this weakness start?",
  "patient": "About forty minutes ago, suddenly.",
  "patient_ja": "40分くらい前、突然です。",
  "acceptable": [
   "When did this weakness start?"
  ],
  "keywords": [
   "when",
   "weakness",
   "start"
  ],
  "freq": 6
 },
 {
  "id": "09_Weakness__5",
  "symptom": "09_Weakness",
  "symptom_ja": "脱力",
  "order": 5,
  "phase": 3,
  "tag": "発症(last known well)",
  "adopted": true,
  "prompt_ja": "最後に全く普通だったのはいつ？",
  "target": "When were you last completely normal?",
  "patient": "Right before it started, around forty minutes ago.",
  "patient_ja": "始まる直前、40分ほど前です。",
  "acceptable": [
   "When were you last completely normal?"
  ],
  "keywords": [
   "when",
   "last",
   "completely",
   "normal"
  ],
  "freq": 0
 },
 {
  "id": "09_Weakness__6",
  "symptom": "09_Weakness",
  "symptom_ja": "脱力",
  "order": 6,
  "phase": 3,
  "tag": "随伴症状",
  "adopted": true,
  "prompt_ja": "頭痛や見え方の変化は？",
  "target": "Any headache or vision changes?",
  "patient": "A slight headache.",
  "patient_ja": "少し頭痛が。",
  "acceptable": [
   "Any headache or vision changes?"
  ],
  "keywords": [
   "headache",
   "vision",
   "changes"
  ],
  "freq": 0
 },
 {
  "id": "09_Weakness__7",
  "symptom": "09_Weakness",
  "symptom_ja": "脱力",
  "order": 7,
  "phase": 4,
  "tag": "既往歴",
  "adopted": true,
  "prompt_ja": "持病はありますか？",
  "target": "What medical problems do you have?",
  "patient": "Atrial fibrillation.",
  "patient_ja": "心房細動です。",
  "acceptable": [
   "What medical problems do you have?"
  ],
  "keywords": [
   "what",
   "medical",
   "problems"
  ],
  "freq": 0
 },
 {
  "id": "09_Weakness__8",
  "symptom": "09_Weakness",
  "symptom_ja": "脱力",
  "order": 8,
  "phase": 4,
  "tag": "抗凝固薬",
  "adopted": true,
  "prompt_ja": "抗凝固薬は飲んでいますか？",
  "target": "Do you take any blood thinners?",
  "patient": "Yes, for an irregular heartbeat.",
  "patient_ja": "はい、不整脈のために。",
  "acceptable": [
   "Do you take any blood thinners?"
  ],
  "keywords": [
   "take",
   "blood",
   "thinners"
  ],
  "freq": 5
 },
 {
  "id": "09_Weakness__9",
  "symptom": "09_Weakness",
  "symptom_ja": "脱力",
  "order": 9,
  "phase": 4,
  "tag": "アレルギー",
  "adopted": true,
  "prompt_ja": "アレルギーは？",
  "target": "Any allergies?",
  "patient": "None.",
  "patient_ja": "ありません。",
  "acceptable": [
   "Any allergies?"
  ],
  "keywords": [
   "allergies"
  ],
  "freq": 104
 },
 {
  "id": "09_Weakness__10",
  "symptom": "09_Weakness",
  "symptom_ja": "脱力",
  "order": 10,
  "phase": 5,
  "tag": "身体評価(脳卒中)",
  "adopted": true,
  "prompt_ja": "笑ってみてください。",
  "target": "Can you give me a big smile?",
  "patient": "(the right side of the mouth droops)",
  "patient_ja": "（口の右側が下がる）",
  "acceptable": [
   "Can you give me a big smile?"
  ],
  "keywords": [
   "give",
   "big",
   "smile"
  ],
  "freq": 0
 },
 {
  "id": "09_Weakness__11",
  "symptom": "09_Weakness",
  "symptom_ja": "脱力",
  "order": 11,
  "phase": 5,
  "tag": "身体評価",
  "adopted": true,
  "prompt_ja": "両腕を上げて保ってください。",
  "target": "Raise both arms and hold them.",
  "patient": "(the right arm drifts down)",
  "patient_ja": "（右腕が下がる）",
  "acceptable": [
   "Raise both arms and hold them."
  ],
  "keywords": [
   "raise",
   "both",
   "arms",
   "hold",
   "them"
  ],
  "freq": 0
 },
 {
  "id": "09_Weakness__12",
  "symptom": "09_Weakness",
  "symptom_ja": "脱力",
  "order": 12,
  "phase": 6,
  "tag": "指示",
  "adopted": true,
  "prompt_ja": "そのまま動かないでください。",
  "target": "Please stay still.",
  "patient": "Okay.",
  "patient_ja": "はい。",
  "acceptable": [
   "Please stay still."
  ],
  "keywords": [
   "please",
   "stay",
   "still"
  ],
  "freq": 4
 },
 {
  "id": "09_Weakness__13",
  "symptom": "09_Weakness",
  "symptom_ja": "脱力",
  "order": 13,
  "phase": 7,
  "tag": "安心づけ",
  "adopted": true,
  "prompt_ja": "しっかり対応します、ご安心ください。",
  "target": "We're going to take good care of you.",
  "patient": "Thank you.",
  "patient_ja": "ありがとうございます。",
  "acceptable": [
   "We're going to take good care of you."
  ],
  "keywords": [
   "going",
   "take",
   "good",
   "care"
  ],
  "freq": 6
 },
 {
  "id": "09_Weakness__14",
  "symptom": "09_Weakness",
  "symptom_ja": "脱力",
  "order": 14,
  "phase": 8,
  "tag": "搬送先",
  "adopted": true,
  "prompt_ja": "脳卒中センターへ搬送します。",
  "target": "We're taking you to the stroke center now.",
  "patient": "Please hurry.",
  "patient_ja": "急いでください。",
  "acceptable": [
   "We're taking you to the stroke center now."
  ],
  "keywords": [
   "taking",
   "stroke",
   "center",
   "now"
  ],
  "freq": 0
 },
 {
  "id": "10_General_Fatigue__1",
  "symptom": "10_General_Fatigue",
  "symptom_ja": "全身倦怠感",
  "order": 1,
  "phase": 1,
  "tag": "意識/主訴",
  "adopted": true,
  "prompt_ja": "救急隊員です。具合はいかがですか？",
  "target": "Hello, I'm a paramedic. How are you feeling?",
  "patient": "I've been so tired I can barely stand.",
  "patient_ja": "とても疲れて立っていられません。",
  "acceptable": [
   "Hello, I'm a paramedic. How are you feeling?"
  ],
  "keywords": [
   "hello",
   "paramedic",
   "how",
   "feeling"
  ],
  "freq": 0
 },
 {
  "id": "10_General_Fatigue__2",
  "symptom": "10_General_Fatigue",
  "symptom_ja": "全身倦怠感",
  "order": 2,
  "phase": 2,
  "tag": "主訴聴取",
  "adopted": true,
  "prompt_ja": "どうされましたか？",
  "target": "Can you tell me what's going on?",
  "patient": "I'm so tired.",
  "patient_ja": "とても疲れています。",
  "acceptable": [
   "Can you tell me what's going on?"
  ],
  "keywords": [
   "tell",
   "what",
   "going"
  ],
  "freq": 3
 },
 {
  "id": "10_General_Fatigue__3",
  "symptom": "10_General_Fatigue",
  "symptom_ja": "全身倦怠感",
  "order": 3,
  "phase": 2,
  "tag": "バイタル",
  "adopted": true,
  "prompt_ja": "バイタルを確認します。",
  "target": "Let me check your vitals.",
  "patient": "Okay.",
  "patient_ja": "はい。",
  "acceptable": [
   "Let me check your vitals."
  ],
  "keywords": [
   "let",
   "check",
   "vitals"
  ],
  "freq": 4
 },
 {
  "id": "10_General_Fatigue__4",
  "symptom": "10_General_Fatigue",
  "symptom_ja": "全身倦怠感",
  "order": 4,
  "phase": 3,
  "tag": "発症",
  "adopted": true,
  "prompt_ja": "倦怠感はいつ始まりましたか？",
  "target": "When did this fatigue start?",
  "patient": "It's been getting worse over a few weeks.",
  "patient_ja": "数週間かけてだんだん悪くなっています。",
  "acceptable": [
   "When did this fatigue start?"
  ],
  "keywords": [
   "when",
   "fatigue",
   "start"
  ],
  "freq": 4
 },
 {
  "id": "10_General_Fatigue__5",
  "symptom": "10_General_Fatigue",
  "symptom_ja": "全身倦怠感",
  "order": 5,
  "phase": 3,
  "tag": "随伴症状",
  "adopted": true,
  "prompt_ja": "胸痛や息切れは？",
  "target": "Any chest pain or shortness of breath?",
  "patient": "I get short of breath climbing stairs.",
  "patient_ja": "階段で息切れします。",
  "acceptable": [
   "Any chest pain or shortness of breath?"
  ],
  "keywords": [
   "chest",
   "pain",
   "shortness",
   "breath"
  ],
  "freq": 8
 },
 {
  "id": "10_General_Fatigue__6",
  "symptom": "10_General_Fatigue",
  "symptom_ja": "全身倦怠感",
  "order": 6,
  "phase": 3,
  "tag": "随伴症状",
  "adopted": true,
  "prompt_ja": "体重減少や寝汗は？",
  "target": "Any weight loss or night sweats?",
  "patient": "I've lost some weight recently.",
  "patient_ja": "最近少し体重が減りました。",
  "acceptable": [
   "Any weight loss or night sweats?"
  ],
  "keywords": [
   "weight",
   "loss",
   "night",
   "sweats"
  ],
  "freq": 0
 },
 {
  "id": "10_General_Fatigue__7",
  "symptom": "10_General_Fatigue",
  "symptom_ja": "全身倦怠感",
  "order": 7,
  "phase": 3,
  "tag": "Red-flag",
  "adopted": true,
  "prompt_ja": "異常な出血はありますか？",
  "target": "Any unusual bleeding?",
  "patient": "My periods have been very heavy.",
  "patient_ja": "月経がとても重いです。",
  "acceptable": [
   "Any unusual bleeding?"
  ],
  "keywords": [
   "unusual",
   "bleeding"
  ],
  "freq": 0
 },
 {
  "id": "10_General_Fatigue__8",
  "symptom": "10_General_Fatigue",
  "symptom_ja": "全身倦怠感",
  "order": 8,
  "phase": 4,
  "tag": "既往歴",
  "adopted": true,
  "prompt_ja": "持病はありますか？",
  "target": "Do you have any medical problems?",
  "patient": "I sometimes have heavy periods.",
  "patient_ja": "月経が重いことがあります。",
  "acceptable": [
   "Do you have any medical problems?"
  ],
  "keywords": [
   "medical",
   "problems"
  ],
  "freq": 0
 },
 {
  "id": "10_General_Fatigue__9",
  "symptom": "10_General_Fatigue",
  "symptom_ja": "全身倦怠感",
  "order": 9,
  "phase": 4,
  "tag": "アレルギー/内服薬",
  "adopted": true,
  "prompt_ja": "アレルギーや内服薬は？",
  "target": "Any allergies or medications?",
  "patient": "No allergies, just iron sometimes.",
  "patient_ja": "アレルギーなし、たまに鉄剤を。",
  "acceptable": [
   "Any allergies or medications?"
  ],
  "keywords": [
   "allergies",
   "medications"
  ],
  "freq": 0
 },
 {
  "id": "10_General_Fatigue__10",
  "symptom": "10_General_Fatigue",
  "symptom_ja": "全身倦怠感",
  "order": 10,
  "phase": 5,
  "tag": "身体評価",
  "adopted": true,
  "prompt_ja": "心臓と血圧を確認します。",
  "target": "We'll check your heart and blood pressure.",
  "patient": "Okay.",
  "patient_ja": "はい。",
  "acceptable": [
   "We'll check your heart and blood pressure."
  ],
  "keywords": [
   "check",
   "heart",
   "blood",
   "pressure"
  ],
  "freq": 0
 },
 {
  "id": "10_General_Fatigue__11",
  "symptom": "10_General_Fatigue",
  "symptom_ja": "全身倦怠感",
  "order": 11,
  "phase": 5,
  "tag": "身体評価",
  "adopted": true,
  "prompt_ja": "両腕を上げてください。",
  "target": "Raise both your arms.",
  "patient": "(raises both arms)",
  "patient_ja": "（両腕を上げる）",
  "acceptable": [
   "Raise both your arms."
  ],
  "keywords": [
   "raise",
   "both",
   "arms"
  ],
  "freq": 0
 },
 {
  "id": "10_General_Fatigue__12",
  "symptom": "10_General_Fatigue",
  "symptom_ja": "全身倦怠感",
  "order": 12,
  "phase": 5,
  "tag": "身体評価",
  "adopted": true,
  "prompt_ja": "腹部を触診します。",
  "target": "I'm going to gently feel your stomach.",
  "patient": "Okay.",
  "patient_ja": "はい。",
  "acceptable": [
   "I'm going to gently feel your stomach."
  ],
  "keywords": [
   "going",
   "gently",
   "feel",
   "stomach"
  ],
  "freq": 0
 },
 {
  "id": "10_General_Fatigue__13",
  "symptom": "10_General_Fatigue",
  "symptom_ja": "全身倦怠感",
  "order": 13,
  "phase": 6,
  "tag": "指示",
  "adopted": true,
  "prompt_ja": "そのまま動かないでください。",
  "target": "Please stay still.",
  "patient": "Okay.",
  "patient_ja": "はい。",
  "acceptable": [
   "Please stay still."
  ],
  "keywords": [
   "please",
   "stay",
   "still"
  ],
  "freq": 4
 },
 {
  "id": "10_General_Fatigue__14",
  "symptom": "10_General_Fatigue",
  "symptom_ja": "全身倦怠感",
  "order": 14,
  "phase": 7,
  "tag": "安心づけ",
  "adopted": true,
  "prompt_ja": "しっかり対応します、ご安心ください。",
  "target": "We're going to take good care of you.",
  "patient": "Thank you.",
  "patient_ja": "ありがとうございます。",
  "acceptable": [
   "We're going to take good care of you."
  ],
  "keywords": [
   "going",
   "take",
   "good",
   "care"
  ],
  "freq": 6
 },
 {
  "id": "10_General_Fatigue__15",
  "symptom": "10_General_Fatigue",
  "symptom_ja": "全身倦怠感",
  "order": 15,
  "phase": 8,
  "tag": "搬送先",
  "adopted": true,
  "prompt_ja": "病院へ搬送します。",
  "target": "We're taking you to the hospital.",
  "patient": "Thank you.",
  "patient_ja": "ありがとうございます。",
  "acceptable": [
   "We're taking you to the hospital."
  ],
  "keywords": [
   "taking",
   "hospital"
  ],
  "freq": 2
 }
];
