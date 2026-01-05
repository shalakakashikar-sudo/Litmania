import { Category, LiteraryDevice } from './types';

export const LITERARY_DEVICES: LiteraryDevice[] = [
  {
    id: "simile",
    name: "Simile",
    pronunciation: "SI-muh-lee",
    category: Category.Comparison,
    accentColor: "indigo",
    shortDefinition: "A comparison using 'like' or 'as' to show similarity.",
    longDefinition: "A simile is a figure of speech that directly compares two different things to highlight a specific shared quality. By using explicit connectors such as 'like' or 'as', it creates a bridge between a familiar concept and an unfamiliar one, making the description more vivid and accessible without claiming the two things are identical.",
    imageUrl: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=800",
    examples: [
      {
        text: "Continuous as the stars that shine and twinkle on the milky way.",
        source: "William Wordsworth",
        type: "Literature",
        explanation: "The poet compares the infinite appearance of daffodils to the stars to convey a sense of vastness and celestial beauty."
      },
      {
        text: "The soldier stood as firm as a mountain.",
        source: "Traditional Style",
        type: "Classic",
        explanation: "This uses the geological stability of a mountain to describe human resolve and physical strength."
      },
      {
        text: "The water was clear like crystal.",
        source: "Everyday Usage",
        type: "Everyday",
        explanation: "Crystal's transparency is a common 'vehicle' for describing clean, pure water."
      },
      {
        text: "My love is like a red, red rose.",
        source: "Robert Burns",
        type: "Literature",
        explanation: "The delicacy and color of a rose are used to describe the beauty and freshness of romantic love."
      }
    ],
    nuances: [
      "Similes are explicit; they tell the reader exactly what is being compared, leaving less room for ambiguity than metaphors.",
      "The 'Tenor' is the subject being described, and the 'Vehicle' is the image used to describe it.",
      "A 'Homeric Simile' (or Epic Simile) is an extended comparison that lasts for many lines of verse."
    ],
    proTips: [
      "Avoid clichés like 'quiet as a mouse'. Try 'quiet as a forgotten grave' for more impact.",
      "Check if removing 'like/as' makes it a stronger Metaphor. If it does, decide which tone fits your piece better.",
      "Don't just use it for sight; use it for sound: 'Her voice was like the rasp of a file on bone'."
    ],
    quiz: [
      {
        question: "Which word is the most common 'connector' in a simile?",
        options: ["Is", "Like", "Was", "Become"],
        correctAnswer: 1,
        explanation: "Similes use 'like' or 'as' to make a direct, explicit comparison."
      },
      {
        question: "In the phrase 'My love is like a red, red rose', what is the 'Vehicle'?",
        options: ["Love", "The poet", "The rose", "The color red"],
        correctAnswer: 2,
        explanation: "The Vehicle is the image or object used to describe the subject (Tenor)."
      },
      {
        question: "Which of these is a simile?",
        options: ["Life is a roller coaster.", "The sun was a golden coin.", "He fought like a lion.", "The sky cried."],
        correctAnswer: 2,
        explanation: "'He fought like a lion' uses 'like' to compare his bravery to a lion."
      },
      {
        question: "What is an 'Epic Simile'?",
        options: ["A very short simile.", "A simile about a hero.", "An extended simile lasting many lines.", "A simile that rhymes."],
        correctAnswer: 2,
        explanation: "Epic similes are elaborate, lengthy comparisons common in Homeric poetry."
      },
      {
        question: "Similes are generally considered more ______ than metaphors.",
        options: ["Implicit", "Explicit", "Confusing", "Scientific"],
        correctAnswer: 1,
        explanation: "They are explicit because they use connecting words to point out the comparison."
      }
    ]
  },
  {
    id: "metaphor",
    name: "Metaphor",
    pronunciation: "MET-uh-for",
    category: Category.Comparison,
    accentColor: "rose",
    shortDefinition: "Stating one thing IS another to transfer qualities.",
    longDefinition: "A metaphor is a powerful linguistic device that asserts a total identity between two unrelated things. It doesn't just suggest a similarity; it claims one thing *is* the other. This creates a deep transfer of emotional, physical, and symbolic traits, forcing the reader to view the subject through the lens of the image.",
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "All the world's a stage.", source: "Shakespeare", type: "Literature", explanation: "Life is equated to a theatrical performance where we merely play roles." },
      { text: "Time is a thief.", source: "Proverb", type: "Classic", explanation: "Attributes the action of stealing to time, emphasizing how it takes away moments and youth." },
      { text: "The classroom was a zoo.", source: "Everyday Usage", type: "Everyday", explanation: "Transfers the chaos and noise of a zoo directly to the setting." },
      { text: "Hope is the thing with feathers.", source: "Emily Dickinson", type: "Literature", explanation: "Equates hope with a bird to describe its resilience and lightness." }
    ],
    nuances: [
      "Immersive Reality: Metaphors demand the reader accept a temporary new reality, creating a visceral connection.",
      "Dead Metaphors: Phrases like 'the foot of the bed' that are so common we no longer see them as comparisons.",
      "Implicit Metaphor: Comparing two things without naming one of them, like saying 'He barked' to imply he is a dog."
    ],
    proTips: [
      "Avoid Mixed Metaphors: Don't say 'We'll cross that bridge when we get to the end of the tunnel'. It confuses the imagery.",
      "Use for Abstract Concepts: Use a concrete object to explain a feeling (e.g., 'Grief is a heavy stone').",
      "Active Verbs: You can create metaphors with verbs, not just nouns: 'The news *shattered* his world'."
    ],
    quiz: [
      { question: "How does a metaphor differ from a simile?", options: ["It is longer.", "It uses 'like' or 'as'.", "It makes a direct identity claim (IS).", "It only uses animals."], correctAnswer: 2, explanation: "Metaphors state one thing is another, while similes use 'like' or 'as'." },
      { question: "What is a 'Dead Metaphor'?", options: ["A metaphor in a horror story.", "A metaphor that no longer feels like a comparison.", "A metaphor that doesn't rhyme.", "A metaphor about death."], correctAnswer: 1, explanation: "Dead metaphors are so common (e.g., 'table leg') that we forget they were once comparisons." },
      { question: "Which is a 'Mixed Metaphor'?", options: ["Life is a highway.", "He's a sitting duck in a sea of trouble.", "She's a shining star.", "The world is an oyster."], correctAnswer: 1, explanation: "It mixes 'sitting duck' (land/hunting) with 'sea' (water), clashing the images." },
      { question: "In 'Hope is the thing with feathers', Dickinson uses a:", options: ["Simile", "Metaphor", "Hyperbole", "Oxymoron"], correctAnswer: 1, explanation: "She directly states hope *is* the thing with feathers." },
      { question: "Metaphors transfer ______ from one object to another.", options: ["Words", "Qualities and symbols", "Ink", "Rhymes"], correctAnswer: 1, explanation: "The purpose is to transfer the feeling and meaning of the vehicle to the tenor." }
    ]
  },
  {
    id: "personification",
    name: "Personification",
    pronunciation: "per-son-uh-fi-KAY-shun",
    category: Category.Comparison,
    accentColor: "amber",
    shortDefinition: "Giving human traits to objects or ideas.",
    longDefinition: "Personification is a specific type of metaphor where human qualities—emotions, desires, sensations, or gestures—are attributed to inanimate objects, animals, or abstract ideas. This device 'animates' the world, allowing writers to create empathy for non-human entities and making descriptions more relatable.",
    imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8a9b746f5?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "The wind whistled a lonely tune.", source: "Atmospheric", type: "Literature", explanation: "Whistling is a human act, suggesting the wind has a mood or intention." },
      /* Corrected 'glass thereof' to 'lack thereof' below */
      { text: "Justice is blind.", source: "Legal Proverb", type: "Classic", explanation: "Gives the abstract concept of 'Justice' the human sense of sight (or lack thereof) to imply impartiality." },
      { text: "The camera loves her.", source: "Common Phrase", type: "Everyday", explanation: "An inanimate machine is given the human emotion of 'love'." },
      { text: "Death reached out its cold hand.", source: "Classic Poetry", type: "Literature", explanation: "Death is treated as a physical being with hands and the ability to reach." }
    ],
    nuances: [
      "Pathetic Fallacy: A sub-type where the weather or environment specifically reflects a character's internal emotions.",
      "Empathy Generator: It forces the reader to consider the 'feelings' of the setting.",
      "Visual Imagery: Often used to describe motion (e.g., 'The leaves danced in the breeze')."
    ],
    proTips: [
      "Vary your verbs: Instead of 'The sun was out', try 'The sun glared down' or 'The sun peeked through'.",
      "Abstract Ideas: Personify concepts like 'Time', 'Fear', or 'Greed' to make them feel like villains or heroes.",
      "Consistency: If you personify a storm as an 'angry giant', keep the giant imagery throughout the paragraph."
    ],
    quiz: [
      { question: "Which is an example of personification?", options: ["The car was fast.", "The car grumbled to life.", "The car is like a beast.", "The car is blue."], correctAnswer: 1, explanation: "Grumbling is a human-like vocal expression of discontent." },
      { question: "What is 'Pathetic Fallacy'?", options: ["A false metaphor.", "Weather reflecting a character's mood.", "A logical error.", "Personifying an animal."], correctAnswer: 1, explanation: "It's a specific personification where nature mimics human feelings." },
      { question: "Why do writers use personification?", options: ["To save space.", "To create empathy for objects/settings.", "To rhyme.", "To be literal."], correctAnswer: 1, explanation: "It makes non-human things feel more alive and relatable." },
      { question: "In 'Justice is blind', what is being personified?", options: ["A person named Justice.", "A statue.", "The abstract idea of Justice.", "Blindness."], correctAnswer: 2, explanation: "The concept of fair law is given a human sensory trait." },
      { question: "Personification is a form of:", options: ["Simile", "Metaphor", "Hyperbole", "Onomatopoeia"], correctAnswer: 1, explanation: "It is a metaphor where the comparison is specifically to a human." }
    ]
  },
  {
    id: "onomatopoeia",
    name: "Onomatopoeia",
    pronunciation: "on-uh-mat-uh-PEE-uh",
    category: Category.Sound,
    accentColor: "orange",
    shortDefinition: "Words that phonetically imitate sounds.",
    longDefinition: "Onomatopoeia refers to words whose pronunciation actually mimics the audio of the sound they describe. While most words have an arbitrary relationship between sound and meaning, onomatopoeic words 'hack' the ear, bringing the reader directly into the sensory environment of the text.",
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "The burning wood crackled and hissed.", source: "Camping", type: "Everyday", explanation: "The words 'crackle' and 'hiss' physically sound like the audio produced by fire." },
      { text: "Over the cobbles he clattered and clashed.", source: "The Highwayman", type: "Literature", explanation: "The hard 'C' and 'T' sounds mimic the metallic striking of horseshoes on stone." },
      { text: "The bees buzzed in the garden.", source: "Nature", type: "Everyday", explanation: "The 'Z' sound creates a literal vibrating hum in the throat." },
      { text: "Splash! The stone hit the water.", source: "Common", type: "Everyday", explanation: "Mimics the sudden impact of liquid." }
    ],
    nuances: [
      "Cultural Variation: These words are not universal; a French dog says 'ouaf ouaf' while an English one says 'woof woof'.",
      "Visual Onomatopoeia: Sometimes the appearance of the word mimics the sound (e.g., zig-zag).",
      "Subtle Usage: High-level literature uses subtle sounds like 'murmur' or 'rustle' rather than 'BANG'."
    ],
    proTips: [
      "Internal Sound: Use it to create 'texture' in your sentences. A 'rustling' silk dress sounds different than a 'stiff' one.",
      "Pacing: Harder sounds (CLANG, BOOM) speed up action; softer ones (whisper, sigh) slow it down.",
      "Combine with Alliteration: 'The silken, sad, uncertain rustling of each purple curtain' (Poe) uses both for maximum audio effect."
    ],
    quiz: [
      { question: "What makes a word onomatopoeic?", options: ["It is a noun.", "Its sound mimics its meaning.", "It is very long.", "It rhymes with itself."], correctAnswer: 1, explanation: "The pronunciation imitates the actual sound (e.g., 'pop')." },
      { question: "Which word is onomatopoeia?", options: ["Jump", "Whisper", "Think", "Silent"], correctAnswer: 1, explanation: "'Whisper' mimics the soft, breathy sound of low speech." },
      { question: "Is onomatopoeia the same in all languages?", options: ["Yes, sounds are universal.", "No, they are culturally shaped.", "Only for animal sounds.", "Only in poetry."], correctAnswer: 1, explanation: "Different languages interpret natural sounds through their own phonetic rules." },
      { question: "Which is an example of 'subtle' onomatopoeia?", options: ["POW!", "KABOOM!", "Murmur", "Crash"], correctAnswer: 2, explanation: "'Murmur' is a quiet, sophisticated mimicry of low sound." },
      { question: "How does onomatopoeia help a reader?", options: ["It explains history.", "It creates an audio experience (auditory imagery).", "It teaches grammar.", "It shortens sentences."], correctAnswer: 1, explanation: "It engages the reader's sense of hearing through the text." }
    ]
  },
  {
    id: "hyperbole",
    name: "Hyperbole",
    pronunciation: "hy-PER-buh-lee",
    category: Category.Emphasis,
    accentColor: "emerald",
    shortDefinition: "Exaggeration used for emphasis or effect.",
    longDefinition: "Hyperbole is a figure of speech that uses deliberate, extreme exaggeration to create a strong impression or to add emphasis to a point. It is not intended to be taken literally but is used to convey a magnitude of feeling or to inject humor into a description.",
    imageUrl: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "I've told you a million times!", source: "Common Usage", type: "Everyday", explanation: "Mathematically impossible, but expresses extreme frustration." },
      { text: "His brain is the size of a planet.", source: "Douglas Adams", type: "Literature", explanation: "Exaggerates intelligence to a cosmic scale for comedic effect." },
      { text: "I'm so hungry I could eat a horse.", source: "Idiom", type: "Everyday", explanation: "A classic exaggeration of appetite." },
      { text: "The waves were mountains high.", source: "Maritime Tale", type: "Literature", explanation: "Uses geological scale to describe the terrifying size of waves." }
    ],
    nuances: [
      "Emotional Truth: Hyperbole works because it describes how something *feels*, even if it's not how it *is*.",
      "Comedy Engine: It is the primary tool for situational comedy and caricature.",
      "Understatement Contrast: It is the direct opposite of Meiosis or Litotes."
    ],
    proTips: [
      "Don't over-rely on it: If every sentence is an exaggeration, the reader will stop trusting your narrative voice.",
      "Context is key: In a technical manual, hyperbole is a mistake; in a tall tale, it's a requirement.",
      "Specificity: Use specific exaggerated numbers or images (e.g., 'A thousand years of waiting') rather than just 'a long time'."
    ],
    quiz: [
      { question: "Hyperbole is intended to be taken:", options: ["Literally", "Mathematically", "Figuratively (not literally)", "Scientifically"], correctAnswer: 2, explanation: "It is a stylistic exaggeration, not a factual claim." },
      { question: "Which is hyperbole?", options: ["He is very tall.", "He is taller than a giraffe.", "He is six feet tall.", "He is tall enough."], correctAnswer: 1, explanation: "Comparing a human's height to a giraffe's is an extreme exaggeration." },
      { question: "What is the main purpose of hyperbole?", options: ["To lie to the reader.", "To provide exact measurements.", "To emphasize a feeling or point.", "To rhyme."], correctAnswer: 2, explanation: "It stresses the importance or emotional weight of a statement." },
      { question: "Hyperbole is the opposite of:", options: ["Simile", "Understatement", "Metaphor", "Alliteration"], correctAnswer: 1, explanation: "Understatement minimizes, while hyperbole maximizes." },
      { question: "'I have a ton of homework' is hyperbole unless:", options: ["You have one page.", "Your papers actually weigh 2000 pounds.", "You are a teacher.", "It is Friday."], correctAnswer: 1, explanation: "If it literally weighs a ton, it's a fact; otherwise, it's hyperbole." }
    ]
  },
  {
    id: "alliteration",
    name: "Alliteration",
    pronunciation: "uh-lit-uh-RAY-shun",
    category: Category.Sound,
    accentColor: "sky",
    shortDefinition: "Repetition of initial consonant sounds in a sequence.",
    longDefinition: "Alliteration is the repetition of the same initial consonant sound in a series of words within a phrase or line of verse. It is a fundamental tool for creating musicality, binding concepts together, and making language more memorable through sonic patterns.",
    imageUrl: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "Peter Piper picked a peck of pickled peppers.", source: "Tongue Twister", type: "Classic", explanation: "Repeats the explosive 'P' sound for rhythmic difficulty." },
      { text: "The fair breeze blew, the white foam flew.", source: "Samuel Taylor Coleridge", type: "Literature", explanation: "The 'F' and 'B' sounds create a sense of movement and lightness." },
      { text: "Bed, Bath & Beyond.", source: "Corporate Branding", type: "Everyday", explanation: "Alliteration makes brand names much easier for consumers to remember." },
      { text: "From forth the fatal loins of these two foes.", source: "Shakespeare", type: "Literature", explanation: "The 'F' sound adds a sense of inevitability and doom to the lines." }
    ],
    nuances: [
      "Sound vs. Letter: It is the sound that matters. 'Cyber City' is alliterative (S sound), but 'Cake City' is not.",
      "Sibilance: A specific type of alliteration using the 'S' sound to create a hissing or soothing effect.",
      "Plosive Alliteration: Using 'B', 'P', 'D', 'T' sounds to create a forceful, percussive rhythm."
    ],
    proTips: [
      "Don't force it: Excessive alliteration can sound silly or like a tongue twister unless that's your goal.",
      "Highlight Keywords: Use it to connect two related words in a sentence to make the idea 'stick'.",
      "Titles: It is perfect for headlines and book titles (e.g., 'Sense and Sensibility')."
    ],
    quiz: [
      { question: "Alliteration is the repetition of ______ sounds.", options: ["Ending", "Vowel", "Initial consonant", "Middle"], correctAnswer: 2, explanation: "It focuses on the sound at the start of words." },
      { question: "Which is alliterative?", options: ["Quick cat", "Big brown bear", "Red apple", "Soft pillow"], correctAnswer: 1, explanation: "The 'B' sound repeats in 'Big', 'brown', and 'bear'." },
      { question: "Is 'Kite City' alliteration?", options: ["No, letters are different.", "Yes, because the 'K' sound repeats.", "Only in poems.", "No, it's a rhyme."], correctAnswer: 1, explanation: "Alliteration is based on the phonetic sound, not the spelling." },
      { question: "What is 'Sibilance'?", options: ["Repeating 'B' sounds.", "Repeating 'S' sounds.", "Repeating vowel sounds.", "Repeating words."], correctAnswer: 1, explanation: "Sibilance is specific alliteration using 'S' or 'Sh' sounds." },
      { question: "Why is alliteration used in branding?", options: ["It's cheaper.", "It makes names more memorable.", "It is required by law.", "It shortens words."], correctAnswer: 1, explanation: "Sonic patterns are easily stored in human memory." }
    ]
  },
  {
    id: "oxymoron",
    name: "Oxymoron",
    pronunciation: "ok-see-MOR-on",
    category: Category.Indirect,
    accentColor: "purple",
    shortDefinition: "Combining two contradictory terms for effect.",
    longDefinition: "An oxymoron is a figure of speech in which two seemingly contradictory or opposite terms appear side-by-side. This 'collision' of words creates a paradox that forces the reader to pause and consider a deeper, more complex truth that simple words cannot express.",
    imageUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "Parting is such sweet sorrow.", source: "Shakespeare", type: "Literature", explanation: "Combines the pleasure of love with the pain of leaving." },
      { text: "The silence was deafening.", source: "Description", type: "Everyday", explanation: "Describes a silence so intense it feels as overwhelming as a loud noise." },
      { text: "Jumbo shrimp.", source: "Common Phrase", type: "Everyday", explanation: "A classic example involving size contradictions." },
      { text: "Living dead.", source: "Pop Culture", type: "Everyday", explanation: "Combines two mutually exclusive states of being." }
    ],
    nuances: [
      "Compressed Paradox: An oxymoron is essentially a paradox shrunk down into two words.",
      "Emotional Duality: Often used to describe feelings that aren't black and white (e.g., 'cruel kindness').",
      "Irony Link: Oxymorons frequently create a sense of irony or wit."
    ],
    proTips: [
      "Avoid Clichés: Phrases like 'jumbo shrimp' have lost their impact. Try creating new ones like 'frozen fire'.",
      "Show Complexity: Use them when a situation has two sides, like 'organized chaos' in a busy office.",
      "Placement: Placing an oxymoron at the end of a sentence can leave a lasting, thoughtful impression."
    ],
    quiz: [
      { question: "An oxymoron combines ______ terms.", options: ["Synonymous", "Rhyming", "Contradictory", "Scientific"], correctAnswer: 2, explanation: "It uses opposites (e.g., 'dark light')." },
      { question: "Which is an oxymoron?", options: ["Bright sun", "Cold ice", "Original copy", "Fast car"], correctAnswer: 2, explanation: "A 'copy' is by definition not 'original', making it a contradiction." },
      { question: "What is the effect of an oxymoron?", options: ["It confuses the reader.", "It highlights a complex truth.", "It makes text shorter.", "It fixes grammar."], correctAnswer: 1, explanation: "It makes the reader think about how two opposites can exist together." },
      { question: "How does it differ from a Paradox?", options: ["It is longer.", "It is a two-word phrase; Paradox is a statement.", "It is always false.", "It only uses nouns."], correctAnswer: 1, explanation: "Oxymorons are short and direct; paradoxes are full ideas." },
      { question: "In 'sweet sorrow', what is being described?", options: ["A type of candy.", "The complexity of love.", "A funeral.", "A mistake."], correctAnswer: 1, explanation: "It captures the mixed emotions of being in love but having to leave." }
    ]
  },
  {
    id: "irony",
    name: "Irony",
    pronunciation: "EYE-ruh-nee",
    category: Category.Indirect,
    accentColor: "teal",
    shortDefinition: "A contrast between expectation and reality.",
    longDefinition: "Irony is a sophisticated literary device where the surface meaning or event is different from—and often opposite to—the underlying reality. It relies on the gap between what is said and what is meant, or what is expected to happen and what actually occurs.",
    imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "A pilot who is afraid of heights.", source: "Situational Irony", type: "Everyday", explanation: "Expectation of a pilot's comfort with height is reversed." },
      { text: "What a beautiful day! (during a hurricane)", source: "Verbal Irony", type: "Everyday", explanation: "The words mean the exact opposite of the reality." },
      { text: "The audience knows the killer is in the closet, but the hero does not.", source: "Dramatic Irony", type: "Literature", explanation: "Suspense is created by the audience's superior knowledge." },
      { text: "A fire station burning down.", source: "Situational Irony", type: "Everyday", explanation: "The institution meant to stop fire is destroyed by it." }
    ],
    nuances: [
      "Verbal Irony vs. Sarcasm: Sarcasm is verbal irony used specifically to mock or poke fun at someone.",
      "Dramatic Irony creates Suspense: It's the engine of horror and tragedy.",
      "Cosmic Irony: When fate or the universe seems to be mocking a character's plans."
    ],
    proTips: [
      "It's not just 'Bad Luck': Rain on a picnic is just a misfortune. Rain on a drought-celebration is ironic.",
      "Show, Don't Tell: Let the reader discover the irony rather than explaining it.",
      "Plot Twists: Most great story twists are built on situational irony."
    ],
    quiz: [
      { question: "What is 'Dramatic Irony'?", options: ["Loud acting.", "The audience knows more than the character.", "A hissing ending.", "Sarcasm."], correctAnswer: 1, explanation: "The tension comes from the gap in knowledge between audience and character." },
      { question: "A fire station burning down is an example of:", options: ["Verbal Irony", "Situational Irony", "Dramatic Irony", "Sarcasm"], correctAnswer: 1, explanation: "The outcome is the opposite of the building's specific purpose." },
      { question: "Is sarcasm a form of irony?", options: ["No, it's just mean.", "Yes, it is verbal irony with a mocking intent.", "Only in movies.", "Yes, it is dramatic irony."], correctAnswer: 1, explanation: "Sarcasm uses the 'say one thing, mean another' logic of verbal irony." },
      { question: "Which is ironic?", options: ["A tall man wearing a hat.", "A traffic jam on the way to buy a car.", "A tow truck being towed.", "Winning the lottery and spending it."], correctAnswer: 2, explanation: "A tow truck is meant to tow others, not be the one in need of towing." },
      { question: "Irony relies on the difference between ______ and ______.", options: ["Pace and Rhythm", "Expectation and Reality", "Noun and Verb", "Past and Future"], correctAnswer: 1, explanation: "The core of irony is the subversion of what we expect to happen." }
    ]
  },
  {
    id: "synecdoche",
    name: "Synecdoche",
    pronunciation: "si-NEK-duh-kee",
    category: Category.Indirect,
    accentColor: "red",
    shortDefinition: "Using a part of something to represent the whole.",
    longDefinition: "Synecdoche is a specific type of figurative language where a physical part of an object or person is used to stand in for the entire entity. It is a powerful way to focus the reader's attention on the most functional or relevant aspect of the subject in a given context.",
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "Nice wheels!", source: "Slang", type: "Everyday", explanation: "'Wheels' (a part) refers to the entire car." },
      { text: "All hands on deck.", source: "Nautical Command", type: "Classic", explanation: "'Hands' (part of the body) refers to the sailors (the whole people)." },
      { text: "I have four mouths to feed.", source: "Economic Phrase", type: "Everyday", explanation: "'Mouths' refers to the people who need food." },
      { text: "The Pentagon issued a report.", source: "News", type: "Everyday", explanation: "The building (the place) represents the officials working inside." }
    ],
    nuances: [
      "Part-for-Whole: The most common form (e.g., 'check out my new threads' for clothes).",
      "Whole-for-Part: Using a general term for a specific part (e.g., 'The police' for one officer).",
      "Functionality: Usually, the part chosen represents the primary action of the whole (e.g., 'hands' for labor)."
    ],
    proTips: [
      "Synecdoche vs. Metonymy: In Synecdoche, the part is physically attached to the whole. In Metonymy, it's just closely associated (e.g., 'The Crown' for the King).",
      "Avoid Dehumanization: Be careful; referring to workers as 'hands' can make them sound like objects rather than people.",
      "Zoom Lens: Think of it as a camera zooming in on the most important detail."
    ],
    quiz: [
      { question: "Synecdoche uses a ______ to represent the ______.", options: ["Symbol, Meaning", "Part, Whole", "Noun, Verb", "Past, Future"], correctAnswer: 1, explanation: "It focuses on a physical piece of the subject." },
      { question: "In 'All hands on deck', what is the 'Part'?", options: ["The ship", "The ocean", "The hands", "The deck"], correctAnswer: 2, explanation: "Hands are the part representing the sailors." },
      { question: "Which is synecdoche?", options: ["The White House issued a statement.", "I need a head count.", "He is like a rock.", "Time is money."], correctAnswer: 1, explanation: "'Head' (part) represents the person (whole)." },
      { question: "How does it differ from Metonymy?", options: ["It uses associations.", "The part must be physically attached.", "It is only for animals.", "It is longer."], correctAnswer: 1, explanation: "Synecdoche requires a physical connection (part of the object)." },
      { question: "Using 'wheels' for a car highlights its:", options: ["Price", "Color", "Function of movement", "Owner"], correctAnswer: 2, explanation: "The wheels are the part that performs the core task of the car." }
    ]
  },
  {
    id: "metonymy",
    name: "Metonymy",
    pronunciation: "muh-TON-uh-mee",
    category: Category.Indirect,
    accentColor: "blue",
    shortDefinition: "Substituting an associated concept for the subject.",
    longDefinition: "Metonymy is a figure of speech that replaces the name of a thing with the name of something else with which it is closely associated. Unlike synecdoche, the replacement is not a physical part of the whole, but rather a concept, object, or location that is conceptually linked.",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "The pen is mightier than the sword.", source: "Edward Bulwer-Lytton", type: "Literature", explanation: "Pen = Written ideas; Sword = Military force." },
      { text: "Friends, Romans, countrymen, lend me your ears.", source: "Shakespeare", type: "Literature", explanation: "Ears = Attention/Listening." },
      { text: "The White House announced new taxes.", source: "Journalism", type: "Everyday", explanation: "The building represents the President and their administration." },
      { text: "He drank the whole bottle.", source: "Common Phrase", type: "Everyday", explanation: "The container represents the liquid inside." }
    ],
    nuances: [
      "Conceptual Link: It relies on the reader's cultural knowledge of associations.",
      "Institutional Shorthand: Very common in news and politics ('Hollywood', 'Wall Street', 'Silicon Valley').",
      "Abstract to Concrete: Often replaces a complex power structure with a physical object (e.g., 'The Bench' for the legal system)."
    ],
    proTips: [
      "Don't confuse with Synecdoche: If it's a piece of the object, it's Synecdoche. If it's an 'accessory' or 'neighbor', it's Metonymy.",
      "Check for 'Containment': Using the container for the thing contained is a classic metonymy.",
      "Branding: It is a way to create powerful symbols for complex entities."
    ],
    quiz: [
      { question: "Metonymy relies on ______ rather than physical parts.", options: ["Rhymes", "Associations", "Contradictions", "Syllables"], correctAnswer: 1, explanation: "It uses things that are conceptually linked (e.g., Crown/King)." },
      { question: "In 'The Oval Office is busy', what does the office represent?", options: ["The desk.", "The President and staff.", "The building materials.", "A circle."], correctAnswer: 1, explanation: "The room is associated with the authority that works within it." },
      { question: "Which is metonymy?", options: ["Nice wheels!", "He is a real Einstein.", "I'll give you a hand.", "The Crown issued an order."], correctAnswer: 3, explanation: "The Crown is an associated object representing the Monarch." },
      { question: "How does it differ from Synecdoche?", options: ["It uses 'like' or 'as'.", "It is always literal.", "It uses associated items, not physical parts.", "It is only for poetry."], correctAnswer: 2, explanation: "Associated items (like 'The Law' for police) are metonymy." },
      { question: "'Lend me your ears' means:", options: ["Give me your body parts.", "Give me your attention.", "Let me borrow your hearing aid.", "I need a snack."], correctAnswer: 1, explanation: "Ears are the organ associated with the act of listening." }
    ]
  },
  {
    id: "paradox",
    name: "Paradox",
    pronunciation: "PA-ruh-doks",
    category: Category.Indirect,
    accentColor: "indigo",
    shortDefinition: "A self-contradictory statement that reveals a truth.",
    longDefinition: "A paradox is a statement that appears to contradict itself or defy common sense, but upon closer examination, reveals a surprising or deep truth. It challenges the reader's logic and forces them to reconcile two opposing ideas to find a hidden meaning.",
    imageUrl: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "The more you know, the more you realize you know nothing.", source: "Socrates", type: "Classic", explanation: "Knowledge reveals the vastness of what remains unknown." },
      { text: "I must be cruel to be kind.", source: "Shakespeare", type: "Literature", explanation: "Describes a situation where short-term pain is necessary for long-term health." },
      { text: "Deep down, he's actually very shallow.", source: "Witty Observation", type: "Everyday", explanation: "Contradicts the idea of 'inner depth' to describe superficiality." },
      { text: "I can resist everything except temptation.", source: "Oscar Wilde", type: "Classic", explanation: "An ironic paradox about the nature of self-control." }
    ],
    nuances: [
      "Cognitive Dissonance: It intentionally makes the reader's brain 'itch' until the truth is discovered.",
      "Wisdom Tool: Found frequently in religious and philosophical texts (e.g., 'He who loses his life shall find it').",
      "Logical vs. Literary: Mathematical paradoxes (like the Liar Paradox) focus on errors; literary paradoxes focus on complex human truths."
    ],
    proTips: [
      "Opening Hook: Use a paradox at the start of an essay to immediately engage the reader's critical thinking.",
      "Character Flaws: Use paradoxes to describe complex characters (e.g., 'He was a coward who fought like a hero').",
      "Check for Truth: If it's just a contradiction with no deeper meaning, it's just a mistake, not a paradox."
    ],
    quiz: [
      { question: "A paradox is a statement that ______ itself.", options: ["Repeats", "Contradicts", "Rhymes with", "Shortens"], correctAnswer: 1, explanation: "It seems false but contains a truth." },
      { question: "What is the goal of a literary paradox?", options: ["To lie.", "To reveal a deep or complex truth.", "To save space.", "To make the reader laugh."], correctAnswer: 1, explanation: "It forces the reader to look beneath the surface contradiction." },
      { question: "Which is a paradox?", options: ["Life is hard.", "The beginning of the end.", "Youth is wasted on the young.", "He is very old."], correctAnswer: 2, explanation: "It sounds like a contradiction but captures a truth about time and experience." },
      { question: "How does a paradox differ from an oxymoron?", options: ["It is shorter.", "It is a full statement; oxymoron is two words.", "It is always true.", "It is only used in science."], correctAnswer: 1, explanation: "Paradoxes are ideas; oxymorons are word-pairs." },
      { question: "In 'I must be cruel to be kind', what is the truth?", options: ["Kindness is bad.", "Harshness is sometimes necessary for someone's benefit.", "The speaker is a villain.", "There is no truth."], correctAnswer: 1, explanation: "It refers to 'tough love' or necessary interventions." }
    ]
  },
  {
    id: "allusion",
    name: "Allusion",
    pronunciation: "uh-LOO-zhun",
    category: Category.Indirect,
    accentColor: "amber",
    shortDefinition: "An indirect reference to a famous person, place, or work.",
    longDefinition: "An allusion is a brief and indirect reference to a person, place, thing, or idea of historical, cultural, literary, or political significance. It does not describe in detail the person or thing to which it refers; instead, it relies on the reader's background knowledge to grasp the connection.",
    imageUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "He's a real Einstein.", source: "Common Usage", type: "Everyday", explanation: "Refers to Albert Einstein to imply someone is a genius." },
      { text: "This place is like a Garden of Eden.", source: "Biblical Allusion", type: "Classic", explanation: "Refers to the paradise in Genesis to describe a beautiful setting." },
      { text: "Don't be such a Scrooge.", source: "Charles Dickens", type: "Literature", explanation: "Refers to Ebenezer Scrooge to imply someone is miserly or grumpy." },
      { text: "He has an Achilles' heel.", source: "Greek Mythology", type: "Classic", explanation: "Refers to the mythological hero to describe a single, fatal weakness." }
    ],
    nuances: [
      "Cultural Capital: It functions as a 'secret handshake' between writer and reader.",
      "Economy of Language: It packs a huge amount of context into a single name or phrase.",
      "Source Diversity: Most allusions come from the Bible, Shakespeare, or Greek/Roman mythology."
    ],
    proTips: [
      "Know your Audience: If your readers don't know the reference, the allusion will fail to convey meaning.",
      "Don't over-explain: The power of an allusion is its subtleness. If you explain it, you lose the effect.",
      "Modern Allusions: You can allude to pop culture (movies, songs) as well as classic literature."
    ],
    quiz: [
      { question: "An allusion is a ______ reference.", options: ["Detailed", "Indirect and brief", "Scientific", "Fictional"], correctAnswer: 1, explanation: "It mentions something without explaining it fully." },
      { question: "To understand an allusion, a reader needs:", options: ["A dictionary.", "Background/Cultural knowledge.", "A map.", "A calculator."], correctAnswer: 1, explanation: "The connection happens in the reader's mind based on what they already know." },
      { question: "Which is an allusion?", options: ["He is very strong.", "He is like Hercules.", "He lifted the heavy car.", "He is a strong man."], correctAnswer: 1, explanation: "It references a specific mythological figure." },
      { question: "Most common sources for allusions are:", options: ["Science journals.", "The Bible, Shakespeare, and Mythology.", "Newspapers.", "Comic books."], correctAnswer: 1, explanation: "These works form the foundation of Western cultural literacy." },
      { question: "If I call a task 'Herculean', I am saying it is:", options: ["Easy.", "Impossible.", "Extremely difficult/Requires great strength.", "Funny."], correctAnswer: 2, explanation: "It references the 12 labors of Hercules." }
    ]
  },
  {
    id: "assonance",
    name: "Assonance",
    pronunciation: "A-suh-nince",
    category: Category.Sound,
    accentColor: "fuchsia",
    shortDefinition: "Repetition of similar vowel sounds in nearby words.",
    longDefinition: "Assonance is a sound device where identical or similar vowel sounds are repeated in the stressed syllables of nearby words. Unlike rhyme, the consonants around the vowels usually differ, creating a subtle internal melody and a cohesive mood without being as obvious as an end-rhyme.",
    imageUrl: "https://images.unsplash.com/photo-1520121401995-928cd50d4e27?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "The lanky lady licked the lollipop.", source: "Consonantal/Vowel Mix", type: "Everyday", explanation: "Repeats the short 'A' sound in 'lanky' and 'lady'." },
      { text: "Hear the mellow wedding bells.", source: "Edgar Allan Poe", type: "Literature", explanation: "The short 'E' sound creates a rhythmic, melodic effect." },
      { text: "Try to light the fire.", source: "Common Usage", type: "Everyday", explanation: "The long 'I' sound binds the sentence together sonically." },
      { text: "The rain in Spain stays mainly in the plain.", source: "My Fair Lady", type: "Classic", explanation: "An extreme example of repeating the long 'A' sound." }
    ],
    nuances: [
      "Vowel Moods: Long vowels (O, A) often slow down a poem and sound serious or sad. Short vowels (I, E) feel faster and lighter.",
      "Internal Rhyme: It is often referred to as 'vowel rhyme'.",
      "Subtlety: It is much harder for the ear to catch than alliteration, making it more sophisticated in modern poetry."
    ],
    proTips: [
      "Read Aloud: You often can't see assonance; you have to hear it. The spelling might be different (e.g., 'high' and 'sky').",
      "Mood Setting: Use 'O' sounds to create a gloomy, hollow atmosphere.",
      "Avoid Overuse: If you repeat vowels too much, it can sound like a tongue twister."
    ],
    quiz: [
      { question: "Assonance is the repetition of ______ sounds.", options: ["Consonant", "Vowel", "Starting", "Ending"], correctAnswer: 1, explanation: "It focuses specifically on vowel repetition." },
      { question: "Which phrase contains assonance?", options: ["Big bad wolf", "The crumbling thunder", "Go and mow the lawn", "Fast and furious"], correctAnswer: 2, explanation: "The long 'O' sound repeats in 'Go', 'mow', and 'lawn'." },
      { question: "How does assonance differ from rhyme?", options: ["It is louder.", "It only repeats vowels, not the whole ending sound.", "It is only at the start of words.", "It is only for songs."], correctAnswer: 1, explanation: "Rhyme requires vowels AND consonants to match; assonance only needs vowels." },
      { question: "Long vowel sounds in assonance typically ______ the pace.", options: ["Speed up", "Slow down", "Stop", "Don't affect"], correctAnswer: 1, explanation: "Long vowels take more time to articulate." },
      { question: "In 'Try to light the fire', what sound is repeating?", options: ["Short A", "Long I", "Short E", "Hard C"], correctAnswer: 1, explanation: "The long 'I' sound is in 'try', 'light', and 'fire'." }
    ]
  },
  {
    id: "consonance",
    name: "Consonance",
    pronunciation: "KON-suh-nince",
    category: Category.Sound,
    accentColor: "cyan",
    shortDefinition: "Repetition of consonant sounds within or at the end of words.",
    longDefinition: "Consonance is a sound device characterized by the repetition of the same consonant sound in a short sequence of words. Unlike alliteration, which is restricted to the initial sounds, consonance can occur anywhere—beginning, middle, or end—but is most often found at the end of words.",
    imageUrl: "https://images.unsplash.com/photo-1518117648329-847039239537?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "Pitter-patter of little feet.", source: "Common Usage", type: "Everyday", explanation: "Repeats the 'T' and 'R' sounds across multiple words." },
      { text: "The ship has sailed to the far shores.", source: "Poetic", type: "Literature", explanation: "Repeats the 'S' and 'H' sounds." },
      { text: "He struck some good luck.", source: "Common Phrase", type: "Everyday", explanation: "The 'CK' sound at the ends of words creates a sharp, percussive rhythm." },
      { text: "All's well that ends well.", source: "Shakespeare", type: "Literature", explanation: "The liquid 'L' sound creates a smooth, flowy finish." }
    ],
    nuances: [
      "Slant Rhyme: Consonance is the foundation of 'slant' or 'half' rhyme (e.g., 'milk' and 'walk').",
      "Percussive Effect: Hard consonants (K, T, P) can make a sentence feel punchy or aggressive.",
      "Symmetry: It provides a sense of structure to a line without the predictability of a full rhyme."
    ],
    proTips: [
      "Endings: Focus on the final sounds of words to create 'near rhymes' in your poetry.",
      "Mixing: Use consonance with assonance (vowel repetition) to create complex, rich sound patterns.",
      "Atmosphere: Use soft 'L' and 'M' sounds for peace, and hard 'D' and 'G' sounds for tension."
    ],
    quiz: [
      { question: "Consonance is the repetition of ______ sounds.", options: ["Vowel", "Consonant", "Sentence", "Paragraph"], correctAnswer: 1, explanation: "It focuses on consonants anywhere in the words." },
      { question: "How is it different from alliteration?", options: ["It uses vowels.", "It can happen anywhere in the word, not just the start.", "It is only for children.", "It is a lie."], correctAnswer: 1, explanation: "Alliteration is only for the *initial* sound." },
      { question: "Which phrase shows consonance?", options: ["Green grass", "Big bad wolf", "Toss the glass, boss", "A long way home"], correctAnswer: 2, explanation: "The 'SS' sound repeats at the ends of 'toss', 'glass', and 'boss'." },
      { question: "Consonance is the basis for what type of rhyme?", options: ["Perfect rhyme.", "Internal rhyme.", "Slant or half rhyme.", "End rhyme."], correctAnswer: 2, explanation: "Slant rhyme repeats consonants but changes vowels (e.g., 'cat' and 'cot')." },
      { question: "In 'He struck some good luck', what sound repeats?", options: ["S", "CK", "L", "G"], correctAnswer: 1, explanation: "The hard 'CK' sound is at the end of both words." }
    ]
  },
  {
    id: "euphemism",
    name: "Euphemism",
    pronunciation: "YOO-fuh-mi-zum",
    category: Category.Indirect,
    accentColor: "stone",
    shortDefinition: "A polite word used to replace a harsh or blunt one.",
    longDefinition: "A euphemism is a mild or indirect word or expression substituted for one considered to be too harsh, blunt, or unpleasant when referring to something embarrassing or frightening. It acts as a verbal 'shock absorber', softening the impact of reality.",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "He passed away (instead of 'died').", source: "Common Usage", type: "Everyday", explanation: "Softens the finality and pain of death." },
      { text: "The company is downsizing (instead of 'firing people').", source: "Corporate Speak", type: "Everyday", explanation: "Uses professional-sounding language to hide a negative event." },
      { text: "I'm between jobs right now.", source: "Social Interaction", type: "Everyday", explanation: "A more hopeful way to say 'unemployed'." },
      { text: "Collateral damage (instead of 'civilian deaths').", source: "Military Term", type: "Classic", explanation: "Sanitizes the horror of war with abstract language." }
    ],
    nuances: [
      "Cultural Sensitivity: Euphemisms vary by culture; what is polite in one might be confusing in another.",
      "Doublespeak: When used by governments or corporations to intentionally mislead, it is called 'doublespeak'.",
      "Taboo: They are most common for subjects like death, sex, bodily functions, and money."
    ],
    proTips: [
      "Character Voice: Use euphemisms for characters who are polite, shy, or trying to hide something.",
      "Comedy: You can create humor by using extreme euphemisms for minor things (e.g., 'Involuntary beverage spill' for spilling a drink).",
      "The 'Blunt' Option: Sometimes, using the blunt word is more powerful because it breaks the polite facade."
    ],
    quiz: [
      { question: "A euphemism is used to make a harsh word sound ______.", options: ["Louder", "Softer or more polite", "Scientific", "Foreign"], correctAnswer: 1, explanation: "It masks the unpleasantness of the original term." },
      { question: "Which is a euphemism for 'lying'?", options: ["Telling the truth.", "Being economical with the truth.", "Shouting.", "Whispering."], correctAnswer: 1, explanation: "It suggests the person is just being careful with facts rather than being dishonest." },
      { question: "Why do organizations use euphemisms like 'downsizing'?", options: ["To be funny.", "To sound professional and hide bad news.", "To save paper.", "To rhyme."], correctAnswer: 1, explanation: "It makes a difficult reality sound like a strategic plan." },
      { question: "The opposite of a euphemism is a ______.", options: ["Simile", "Dysphemism", "Metaphor", "Allusion"], correctAnswer: 1, explanation: "Dysphemisms use intentionally harsh or offensive words." },
      { question: "'Passed away' is a euphemism for death because it implies ______.", options: ["Running", "A journey or transition", "Silence", "Sleeping"], correctAnswer: 1, explanation: "It suggests moving on rather than ceasing to exist." }
    ]
  },
  {
    id: "pun",
    name: "Pun",
    pronunciation: "PUN",
    category: Category.Indirect,
    accentColor: "violet",
    shortDefinition: "A joke exploiting the different meanings of a word.",
    longDefinition: "A pun is a form of wordplay that exploits multiple meanings of a term, or of similar-sounding words (homophones), for an intended humorous or rhetorical effect. Often called the 'lowest form of wit', they actually require a high level of linguistic awareness to recognize and create.",
    imageUrl: "https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "The baker was loafing around.", source: "Common Pun", type: "Everyday", explanation: "Plays on 'loaf' (bread) and 'loafing' (lazy)." },
      { text: "I wondered why the baseball was getting bigger. Then it hit me.", source: "Classic Joke", type: "Everyday", explanation: "Plays on 'hit' (physical impact) and 'hit' (sudden realization)." },
      { text: "Being a florist is a blooming business.", source: "Small Business", type: "Everyday", explanation: "Plays on 'blooming' (flowers) and 'blooming' (successful)." },
      { text: "Ask for me tomorrow, and you shall find me a grave man.", source: "Shakespeare (Romeo & Juliet)", type: "Literature", explanation: "Mercutio is dying; 'grave' means serious but also a place for the dead." }
    ],
    nuances: [
      "Homophonic Pun: Uses words that sound the same but mean different things (e.g., 'tail' and 'tale').",
      "Polysemic Pun: Uses a single word that has two related meanings.",
      "Groaner: A pun that is so obvious or forced it makes the listener moan rather than laugh."
    ],
    proTips: [
      "Don't over-explain: A pun only works if the reader makes the connection instantly.",
      "Context is King: The sentence must logically make sense for both meanings of the word for the pun to be 'perfect'.",
      "Use in Dialogue: Puns are a great way to show a character's wit or playfulness."
    ],
    quiz: [
      { question: "A pun is based on words that ______.", options: ["Rhyme perfectly.", "Have multiple meanings or sound alike.", "Are very long.", "Are scientific."], correctAnswer: 1, explanation: "Wordplay relies on linguistic ambiguity." },
      { question: "'The cyclist was two-tired' is a pun on:", options: ["The number of wheels.", "Being exhausted (too tired).", "Both of these.", "The price of the bike."], correctAnswer: 2, explanation: "It links the physical bike (two tires) to the cyclist's feeling (too tired)." },
      { question: "What is a 'Homophonic' pun?", options: ["A pun about music.", "A pun using words that sound the same but have different meanings.", "A pun that doesn't work.", "A long pun."], correctAnswer: 1, explanation: "Like 'night' and 'knight'." },
      { question: "Mercutio's 'grave man' pun is significant because:", options: ["It's funny.", "He is actually dying (going to a grave).", "He is a serious person.", "He likes cemeteries."], correctAnswer: 1, explanation: "It adds a tragic, witty layer to his final moments." },
      { question: "If you have to explain a pun, it ______.", options: ["Becomes a metaphor.", "Is a success.", "Has failed in its effect.", "Is a poem."], correctAnswer: 2, explanation: "The humor/wit of a pun must be immediate." }
    ]
  },
  {
    id: "cacophony",
    name: "Cacophony",
    pronunciation: "kuh-KOF-uh-nee",
    category: Category.Sound,
    accentColor: "slate",
    shortDefinition: "The use of harsh, discordant, or unmelodious sounds.",
    longDefinition: "Cacophony is a harsh, discordant mixture of sounds. In literature, it is a deliberate choice to use words with sharp, hissing, or explosive consonants (k, t, g, d, p, b) to create a sense of disorder, violence, or difficulty, often reflecting the chaotic theme of the piece.",
    imageUrl: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "Beware the Jabberwock, my son! The jaws that bite, the claws that catch!", source: "Lewis Carroll", type: "Literature", explanation: "The hard 'J', 'B', 'K', and 'T' sounds create a jagged, dangerous audio landscape." },
      { text: "The clash and clang of the iron machines.", source: "Industrial Revolution", type: "Everyday", explanation: "Mimics the unmusical, harsh noise of a factory." },
      { text: "Grate on their scrannel pipes of wretched straw.", source: "John Milton", type: "Literature", explanation: "The word 'scrannel' itself is harsh and difficult to pronounce." },
      { text: "Knock-kneed, coughing like hags.", source: "Wilfred Owen", type: "Literature", explanation: "Harsh sounds replicate the physical misery and horror of war." }
    ],
    nuances: [
      "Plosives: Sounds like P, B, T, D, K, G that require stopping the airflow, creating a jerky rhythm.",
      "Physicality: Cacophony often makes the reader's mouth and throat work harder, mimicking physical struggle.",
      "Opposite: Its direct opposite is Euphony (sweet, harmonious sounds)."
    ],
    proTips: [
      "Match the Theme: Use cacophony for scenes of battle, arguments, or mechanical failure.",
      "Slow the Reader: If you want a reader to slow down and feel the weight of a difficult moment, use clashing sounds.",
      "Dissonance: In modern prose, use it to describe an ugly or uncomfortable setting."
    ],
    quiz: [
      { question: "Cacophony uses ______ sounds.", options: ["Soft and melodic", "Harsh and clashing", "No", "Silent"], correctAnswer: 1, explanation: "It utilizes discordant consonants to create tension." },
      { question: "Which letters are typically 'cacophonous'?", options: ["L, M, N", "S, F, H", "K, T, G, P, B", "O, A, E"], correctAnswer: 2, explanation: "These are 'plosives'—sounds that break the flow of air." },
      { question: "A writer would use cacophony to describe:", options: ["A baby sleeping.", "A peaceful meadow.", "A battlefield or a factory.", "A fluffy cloud."], correctAnswer: 2, explanation: "The harsh sounds mirror the chaotic or mechanical environment." },
      { question: "What is the opposite of cacophony?", options: ["Alliteration", "Euphony", "Assonance", "Simile"], correctAnswer: 1, explanation: "Euphony refers to pleasant, harmonious sounds." },
      { question: "Cacophony physically forces the reader to:", options: ["Read faster.", "Enunciate clearly and slow down.", "Skip words.", "Whisper."], correctAnswer: 1, explanation: "The difficult sound combinations prevent smooth, fast reading." }
    ]
  },
  {
    id: "euphony",
    name: "Euphony",
    pronunciation: "YOO-fuh-nee",
    category: Category.Sound,
    accentColor: "rose",
    shortDefinition: "The use of sweet, melodic, and harmonious sounds.",
    longDefinition: "Euphony is the quality of being pleasing to the ear, especially through a harmonious combination of words. It relies on soft consonants (l, m, n, r, f, v, s, th, wh) and long, open vowel sounds to create a tranquil, luxurious, or comforting atmosphere in the reader's mind.",
    imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8a9b746f5?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "Season of mists and mellow fruitfulness.", source: "John Keats", type: "Literature", explanation: "The soft 'S', 'M', and 'L' sounds create a relaxed, autumnal mood." },
      { text: "The lullaby of the flowing stream.", source: "Nature Writing", type: "Everyday", explanation: "The liquid 'L' sounds mimic the gentle movement of water." },
      { text: "Cellar door.", source: "J.R.R. Tolkien / Phonaesthetics", type: "Classic", explanation: "Often cited by linguists as one of the most beautiful-sounding phrases in English." },
      { text: "The mild-eyed melancholy Lotos-eaters.", source: "Lord Tennyson", type: "Literature", explanation: "Soft consonants create a hypnotic, sleepy rhythm." }
    ],
    nuances: [
      "Liquids and Nasals: Consonants like L, R, M, and N are the building blocks of euphony because they 'flow' or 'hum'.",
      "Vowel Length: Long vowels (O, A) allow the voice to linger, adding to the melodic effect.",
      "Emotional Impact: Used for romantic, peaceful, or divine subjects."
    ],
    proTips: [
      "Silky Smooth: Read your work aloud; if it feels silky and easy on the tongue, you've achieved euphony.",
      "Contrast: Break a euphonic passage with one harsh, cacophonous word to create a 'shock' or transition.",
      "Avoid the Hiss: While 'S' is a soft sound, too many can sound like a snake (sibilance); balance it with 'M' or 'L'."
    ],
    quiz: [
      { question: "Euphony is characterized by ______ sounds.", options: ["Harsh", "Discordant", "Pleasing and melodic", "Loud"], correctAnswer: 2, explanation: "It aims for sonic harmony." },
      { question: "Which consonants contribute most to euphony?", options: ["K, T, G", "L, M, N, R, V", "P, B, D", "X, Z, Q"], correctAnswer: 1, explanation: "These are 'liquid' and 'nasal' sounds that flow easily." },
      { question: "The phrase 'Cellar Door' is famous in linguistics for its:", options: ["Meaning.", "Rhyme.", "Euphonic beauty.", "History."], correctAnswer: 2, explanation: "Many authors consider it the most beautiful sounding phrase regardless of meaning." },
      { question: "A writer would use euphony to describe:", options: ["An explosion.", "A car crash.", "A gentle sunset or a mother's voice.", "A busy construction site."], correctAnswer: 2, explanation: "The sounds match the peaceful or loving subject matter." },
      { question: "What is the opposite of euphony?", options: ["Alliteration", "Cacophony", "Simile", "Metaphor"], correctAnswer: 1, explanation: "Cacophony is the use of harsh, clashing sounds." }
    ]
  },
  {
    id: "antithesis",
    name: "Antithesis",
    pronunciation: "an-TITH-uh-sis",
    category: Category.Structural,
    accentColor: "zinc",
    shortDefinition: "Contrast of ideas using a parallel structural arrangement.",
    longDefinition: "Antithesis involves the placement of two starkly contrasting ideas next to each other in a balanced or parallel grammatical structure. This 'see-saw' effect emphasizes the magnitude of the difference between the two concepts and makes the statement highly memorable.",
    imageUrl: "https://images.unsplash.com/photo-1493246507139-91e8bef99c17?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "That's one small step for man, one giant leap for mankind.", source: "Neil Armstrong", type: "Everyday", explanation: "Contrasts 'small step' vs 'giant leap' using parallel phrases." },
      { text: "To err is human; to forgive, divine.", source: "Alexander Pope", type: "Classic", explanation: "Contrasts human weakness with divine perfection in two balanced clauses." },
      { text: "It was the best of times, it was the worst of times.", source: "Charles Dickens", type: "Literature", explanation: "The parallel structure highlights the extreme duality of the era." },
      { text: "Better to reign in Hell than serve in Heaven.", source: "John Milton", type: "Literature", explanation: "Weights the concepts of 'reign' and 'serve' against 'Hell' and 'Heaven'." }
    ],
    nuances: [
      "Grammatical Balance: Both halves of the statement usually have similar word counts or rhythms.",
      "Duality: It forces the reader to consider two opposing truths at the same time.",
      "Rhetorical Power: It is the backbone of great speeches and political slogans."
    ],
    proTips: [
      "The 'But' Test: Often uses conjunctions like 'but' or 'yet' to pivot between the two opposites.",
      "Use for Choice: Great for presenting a moral or practical choice to a character.",
      "Opening Hooks: Antithetical statements make for legendary opening lines in novels."
    ],
    quiz: [
      { question: "Antithesis requires both ______ and ______.", options: ["Rhyme and Reason", "Contrast and Parallel Structure", "Speed and Volume", "Noun and Verb"], correctAnswer: 1, explanation: "It needs opposing ideas AND a balanced sentence structure." },
      { question: "In 'To err is human; to forgive, divine', what is contrasted?", options: ["Mistakes and Forgiveness.", "Men and Women.", "Heaven and Earth.", "Speech and Silence."], correctAnswer: 0, explanation: "It weighs the human act of making mistakes against the divine act of forgiving them." },
      { question: "Which is antithesis?", options: ["Life is a highway.", "He is as strong as a bull.", "Give me liberty or give me death.", "I came, I saw, I conquered."], correctAnswer: 2, explanation: "It contrasts Liberty with Death in two parallel 'Give me' structures." },
      { question: "What is the primary effect of antithesis?", options: ["To confuse.", "To create a sense of balance and emphasize a contrast.", "To rhyme.", "To shorten a sentence."], correctAnswer: 1, explanation: "The symmetry makes the contrast much more powerful." },
      { question: "Neil Armstrong's 'small step' quote is significant for its:", options: ["Hyperbole.", "Antithesis.", "Simile.", "Onomatopoeia."], correctAnswer: 1, explanation: "It balances the smallness of the action against the greatness of the impact." }
    ]
  },
  {
    id: "meiosis",
    name: "Meiosis",
    pronunciation: "my-OH-sis",
    category: Category.Emphasis,
    accentColor: "emerald",
    shortDefinition: "A witty understatement that belittles something.",
    longDefinition: "Meiosis is a form of understatement that intentionally belittles or downplays the significance of something, often to achieve a witty or dismissive effect. It is the direct opposite of hyperbole and is frequently used in British humor and social satire.",
    imageUrl: "https://images.unsplash.com/photo-1512418490979-92798ccc13a0?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "Calling the Atlantic Ocean 'the pond'.", source: "Colloquialism", type: "Everyday", explanation: "Drastically minimizes one of the world's largest oceans to a small pool." },
      { text: "It's just a flesh wound (after losing a limb).", source: "Monty Python", type: "Classic", explanation: "A legendary example of minimizing a catastrophic injury." },
      { text: "He's no Einstein.", source: "Common Phrase", type: "Everyday", explanation: "A subtle way to say someone is not very smart." },
      { text: "A bit of a scuffle (referring to a major war).", source: "Historical Stoicism", type: "Everyday", explanation: "Understates the scale of violence." }
    ],
    nuances: [
      /* Corrected 'glass of care' to 'lack of care' below */
      "Stoicism: Can be used to show a character's toughness or lack of care.",
      "Insult: Often used as a 'veiled' insult to make someone seem unimportant.",
      "Britishism: It is a core component of 'The Stiff Upper Lip' cultural trope."
    ],
    proTips: [
      "Dry Humor: Use it for characters who are bored, unimpressed, or extremely brave.",
      "Litotes Overlap: Meiosis often uses double negatives (e.g., 'not a bad little house' for a mansion).",
      "Context: The gap between the real size and the description creates the humor."
    ],
    quiz: [
      { question: "Meiosis is a form of ______.", options: ["Exaggeration", "Understatement", "Comparison", "Rhyme"], correctAnswer: 1, explanation: "It makes something big seem small." },
      { question: "Which is an example of Meiosis?", options: ["I'm so hungry I could die.", "I've got a little bit of work (meaning 100 hours).", "The sun is hot.", "You are a genius."], correctAnswer: 1, explanation: "It minimizes a large burden." },
      { question: "Meiosis is the opposite of ______.", options: ["Simile", "Metaphor", "Hyperbole", "Irony"], correctAnswer: 2, explanation: "Hyperbole maximizes; Meiosis minimizes." },
      { question: "Why would a character use meiosis for a wound?", options: ["Because they don't know it's there.", "To show they are tough or brave.", "To be literal.", "They forgot the word."], correctAnswer: 1, explanation: "Understating pain is a sign of stoic character." },
      { question: "The word 'Meiosis' comes from Greek for ______.", options: ["To make larger.", "To make smaller.", "To speak truly.", "To laugh."], correctAnswer: 1, explanation: "It refers to the act of lessening or diminishing." }
    ]
  },
  {
    id: "spoonerism",
    name: "Spoonerism",
    pronunciation: "SPOO-ner-i-zum",
    category: Category.Sound,
    accentColor: "amber",
    shortDefinition: "The accidental swapping of initial sounds between words.",
    longDefinition: "A spoonerism is a verbal error in which a speaker accidentally (or intentionally for humor) transposes the initial sounds or letters of two or more words. Named after Reverend William Archibald Spooner, who was famous for these slips, it often results in nonsensical and humorous phrases.",
    imageUrl: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "A blushing crow (instead of 'crushing blow').", source: "Rev. Spooner", type: "Classic", explanation: "The 'Bl' and 'Cr' sounds are swapped, changing the meaning entirely." },
      { text: "Our queer old dean (instead of 'dear old queen').", source: "Apocryphal", type: "Everyday", explanation: "Transposes 'Q' and 'D' sounds." },
      { text: "You have hissed all my mystery lectures (instead of 'missed all my history').", source: "Rev. Spooner", type: "Classic", explanation: "A complex swap of 'H'/'M' and 'S' sounds." },
      { text: "A well-boiled icicle (instead of 'well-oiled bicycle').", source: "Classic Spoonerism", type: "Everyday", explanation: "Changes a mechanical object into a frozen food item." }
    ],
    nuances: [
      "Slip of the Tongue: It is a 'metathesis' error at the word level.",
      "Cognitive Link: It usually happens when the brain 'buffers' the next word's starting sound too early.",
      "Intentional Humor: Modern comedians use it to create 'double entendres' or silly characters."
    ],
    proTips: [
      "Character Flaws: Use spoonerisms for characters who are flustered, nervous, or trying too hard to sound important.",
      "Comedy Scripts: Great for physical/vocal comedy in plays.",
      "Mnemonic Device: Swapping sounds can actually help students remember the 'correct' version of a phrase."
    ],
    quiz: [
      { question: "What is swapped in a Spoonerism?", options: ["The end of words.", "Initial sounds or letters.", "Vowels only.", "The meanings."], correctAnswer: 1, explanation: "It swaps the 'heads' of words." },
      { question: "Who is the device named after?", options: ["A kitchen tool.", "Reverend William Spooner.", "A famous poet.", "A King."], correctAnswer: 1, explanation: "Rev. Spooner was an Oxford don known for these vocal slips." },
      { question: "Which is a spoonerism?", options: ["Fast and furious.", "Running like the wind.", "Beddy bye (Bye-bye).", "Tease my ears (Ease my tears)."], correctAnswer: 3, explanation: "The 'T' and 'E' sounds are swapped." },
      { question: "Spoonerisms are most commonly used for ______.", options: ["Serious drama.", "Tragedy.", "Humor and comedy.", "Science."], correctAnswer: 2, explanation: "The resulting nonsense is almost always funny." },
      { question: "A 'well-boiled icicle' is a spoonerism for:", options: ["Cold soup.", "Well-oiled bicycle.", "Tall mountain.", "Hot sun."], correctAnswer: 1, explanation: "The 'B' and 'I' sounds from 'boiled icicle' swap with 'oiled bicycle' logic." }
    ]
  },
  {
    id: "allegory",
    name: "Allegory",
    pronunciation: "A-luh-gor-ee",
    category: Category.Indirect,
    accentColor: "teal",
    shortDefinition: "A narrative where characters and events are symbolic.",
    longDefinition: "An allegory is a complete narrative—be it a story, poem, or picture—that can be interpreted to reveal a hidden meaning, typically a moral or political one. Unlike a simple metaphor, which is usually a phrase, an allegory is an extended work where every character, place, and event represents an abstract quality or a real-world historical event.",
    imageUrl: "https://images.unsplash.com/photo-1544476915-ed1370594142?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "Animal Farm.", source: "George Orwell", type: "Literature", explanation: "The farm animals and their revolution represent the leaders and events of the Russian Revolution." },
      { text: "The Tortoise and the Hare.", source: "Aesop's Fables", type: "Classic", explanation: "A simple story where animals represent the abstract qualities of 'persistence' and 'arrogance'." },
      { text: "Inside Out (Film).", source: "Pixar", type: "Everyday", explanation: "The characters (Joy, Sadness, etc.) literally embody the abstract emotions of the human mind." },
      { text: "The Lion, the Witch and the Wardrobe.", source: "C.S. Lewis", type: "Classic", explanation: "Functions as a religious allegory where Aslan represents a divine figure." }
    ],
    nuances: [
      "Dual Narrative: An allegory always functions on two levels: the literal story and the symbolic meaning.",
      "Personification Allegory: Where abstract ideas (like Virtue or Vice) appear as literal characters.",
      "Political Satire: Allegory allows writers to criticize governments without being arrested or censored directly."
    ],
    proTips: [
      "Consistency is Key: In an allegory, the symbol must stay consistent. If the Pig represents a Dictator, he cannot suddenly become a Saint.",
      "Moral Compass: Use allegory when you want to teach a lesson or critique a social system 'at a distance'.",
      "Subtlety vs. Obviousness: Some allegories are very clear (names like 'Faith' or 'Greed'), while others require deep research."
    ],
    quiz: [
      { question: "An allegory is basically an ______ metaphor.", options: ["Short", "Extended (narrative length)", "Invisible", "Rhyming"], correctAnswer: 1, explanation: "It extends a comparison across a whole story." },
      { question: "In 'Animal Farm', what do the animals represent?", options: ["Farmer's children.", "Actual farm animals.", "Political figures and social classes.", "Scientific theories."], correctAnswer: 2, explanation: "It is a critique of the Russian Revolution." },
      { question: "What are the 'two layers' of an allegory?", options: ["Past and Future.", "Literal and Symbolic.", "Beginning and End.", "Noun and Verb."], correctAnswer: 1, explanation: "You must read the story AND decode the secret meaning." },
      { question: "Why do writers use allegory for politics?", options: ["To save money.", "To safely criticize power without naming names.", "To make the story longer.", "They forgot real names."], correctAnswer: 1, explanation: "It provides a 'shield' for the author's critique." },
      { question: "Is a fable an allegory?", options: ["No.", "Yes, usually a moral allegory.", "Only if it has humans.", "Only if it's a movie."], correctAnswer: 1, explanation: "Fables use animals to represent human virtues or vices." }
    ]
  },
  {
    id: "motif",
    name: "Motif",
    pronunciation: "moh-TEEF",
    category: Category.Structural,
    accentColor: "indigo",
    shortDefinition: "A recurring element that reinforces a story's theme.",
    longDefinition: "A motif is a symbolic image, sound, action, or other figure that has a symbolic significance and contributes toward the development of a theme. While a theme is an abstract idea (e.g., 'Isolation'), a motif is the concrete, recurring *thing* (e.g., 'Broken mirrors') that points to that theme.",
    imageUrl: "https://images.unsplash.com/photo-1494253109108-2e30c049369b?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "The Green Light.", source: "The Great Gatsby", type: "Literature", explanation: "Recurringly appears to represent Gatsby's unreachable dreams and hope." },
      { text: "A Mockingbird.", source: "To Kill a Mockingbird", type: "Classic", explanation: "Appears multiple times to reinforce the theme of destroyed innocence." },
      { text: "Shattered glass / Cracked mirrors.", source: "Visual Motif", type: "Everyday", explanation: "Repeatedly shown in a film to reinforce a character's fractured mental state." },
      { text: "Blood.", source: "Macbeth", type: "Classic", explanation: "Recurringly mentioned to symbolize the permanent stain of guilt." }
    ],
    nuances: [
      "Repetition is Mandatory: A symbol only becomes a motif if it appears multiple times.",
      "Sensory: Motifs can be sounds (a specific bird call) or smells (the scent of lilies).",
      "Reinforcement: Its purpose is to 'hammer' the abstract theme into the reader's subconscious."
    ],
    proTips: [
      "Motif vs. Theme: Theme = Message (What the story is about). Motif = Object (What we see over and over).",
      "Weather as Motif: Rain can be a motif for sadness, or a recurring storm can represent a coming change.",
      "Subtlety: The best motifs don't announce themselves; the reader simply starts to notice the pattern."
    ],
    quiz: [
      { question: "What defines a motif?", options: ["It happens once.", "It rhymes.", "It is a recurring element.", "It is a character name."], correctAnswer: 2, explanation: "Repetition is the core characteristic." },
      { question: "How is a Motif different from a Theme?", options: ["Theme is concrete; Motif is abstract.", "Motif is concrete (thing); Theme is abstract (idea).", "They are the same.", "Motif is only for music."], correctAnswer: 1, explanation: "Motifs point TO the theme." },
      { question: "In Macbeth, 'Blood' is a motif for:", options: ["Anger.", "War.", "Permanent guilt.", "Health."], correctAnswer: 2, explanation: "It represents the inability to 'wash away' their crimes." },
      { question: "If a blue bird appears every time a character falls in love, the bird is:", options: ["A coincidence.", "A motif.", "The protagonist.", "A metaphor."], correctAnswer: 1, explanation: "The bird's recurring appearance reinforces the concept of love." },
      { question: "Motifs help to build ______ and ______.", options: ["Pace and Speed.", "Atmosphere and Meaning.", "Noun and Verb.", "Volume and Height."], correctAnswer: 1, explanation: "They add depth to the setting and clarity to the message." }
    ]
  },
  {
    id: "juxtaposition",
    name: "Juxtaposition",
    pronunciation: "juk-stuh-puh-ZISH-un",
    category: Category.Structural,
    accentColor: "emerald",
    shortDefinition: "Placing two opposing things side-by-side for contrast.",
    longDefinition: "Juxtaposition is a literary technique in which two or more ideas, places, characters, and their actions are placed side by side in a narrative or a poem, for the purpose of developing comparisons and contrasts. It is used to highlight subtle differences or surprising similarities between two subjects.",
    imageUrl: "https://images.unsplash.com/photo-1506466010722-395aa2bef877?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "A beggar sitting next to a luxury car.", source: "Visual Juxtaposition", type: "Everyday", explanation: "The proximity highlights the extreme gap between wealth and poverty." },
      { text: "A delicate flower growing in a battlefield.", source: "Classic Imagery", type: "Literature", explanation: "Contrasts the fragility of life with the violence of war." },
      { text: "It was the best of times, it was the worst of times.", source: "Charles Dickens", type: "Classic", explanation: "Juxtaposes two opposite social states to describe an era's complexity." },
      { text: "A child holding a weapon.", source: "Social Commentary", type: "Everyday", explanation: "Juxtaposes innocence with destructive force." }
    ],
    nuances: [
      "Proximity is Key: The items must be close enough for the reader's eye to move back and forth between them.",
      "Character Foil: When two characters with opposite traits are juxtaposed, they are called 'foils'.",
      "Irony Creator: Juxtaposition is often the tool that creates situational irony."
    ],
    proTips: [
      "Show, Don't Tell: Instead of saying 'He was poor while others were rich', show him eating a crust of bread while a banquet happens next door.",
      "Pacing Juxtaposition: Contrast a slow, quiet scene with a fast, chaotic action scene to increase the tension.",
      "Color Contrast: Use colors to juxtapose (e.g., a bright red dress in a grey, rainy city)."
    ],
    quiz: [
      { question: "Juxtaposition involves ______.", options: ["Separation.", "Proximity and contrast.", "Rhyme.", "Speeding up time."], correctAnswer: 1, explanation: "It works by placing things close to each other." },
      { question: "What is a 'Character Foil'?", options: ["A villain.", "A sidekick.", "A character who juxtaposes the protagonist's traits.", "A hero."], correctAnswer: 2, explanation: "Foils highlight traits through contrast." },
      { question: "A flower in a battlefield is juxtaposition because it contrasts:", options: ["Colors.", "Scent and Noise.", "Life/Fragility and Death/Violence.", "History and Future."], correctAnswer: 2, explanation: "The setting and the object are thematic opposites." },
      { question: "Which is a visual juxtaposition?", options: ["A tall man next to a short child.", "A dog barking.", "A blue car.", "A long story."], correctAnswer: 0, explanation: "The physical proximity makes the size difference obvious." },
      { question: "The goal of juxtaposition is to:", options: ["Confuse the reader.", "Highlight differences or similarities through proximity.", "Make text shorter.", "Fix grammar errors."], correctAnswer: 1, explanation: "It forces a comparative thought in the reader's mind." }
    ]
  },
  {
    id: "imagery",
    name: "Imagery",
    pronunciation: "I-muhj-ree",
    category: Category.Comparison,
    accentColor: "sky",
    shortDefinition: "Language that appeals to the five physical senses.",
    longDefinition: "Imagery is the use of vivid and descriptive language that appeals to the reader's five senses (sight, sound, smell, taste, and touch). It is more than just 'mental pictures'; it is a sensory immersion that makes the setting and events feel tangible and real to the reader.",
    imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "The golden sunlight filtered through the emerald leaves.", source: "Visual Imagery", type: "Literature", explanation: "Appeals to the sense of sight (color and light)." },
      { text: "The air smelled of damp pine and woodsmoke.", source: "Olfactory Imagery", type: "Everyday", explanation: "Appeals to the sense of smell." },
      { text: "The velvet smoothness of the silk was cool against her skin.", source: "Tactile Imagery", type: "Everyday", explanation: "Appeals to the sense of touch (texture and temperature)." },
      { text: "The sharp, acidic tang of the lemon made his mouth pucker.", source: "Gustatory Imagery", type: "Everyday", explanation: "Appeals to the sense of taste." }
    ],
    nuances: [
      "Kinesthetic Imagery: Pertains to the movement or physical tension of the body (e.g., 'muscles straining').",
      "Organic Imagery: Pertains to internal sensations like hunger, thirst, or fatigue.",
      "Show, Don't Tell: Imagery is the primary vehicle for 'showing' the reader the world rather than 'telling' them facts."
    ],
    proTips: [
      "Rule of Two: In every scene, try to engage at least two different senses to create a deeper immersion.",
      "Specifics over Adjectives: Instead of 'The beautiful forest', use 'The moss-carpeted woods where squirrels chattered'.",
      "Verbs as Images: Choose verbs that imply an image: 'The mist *choked* the valley' vs 'The mist *covered* the valley'."
    ],
    quiz: [
      { question: "Imagery appeals to ______.", options: ["Logic.", "Grammar.", "The five senses.", "History."], correctAnswer: 2, explanation: "It is sensory-based language." },
      { question: "What is 'Olfactory' imagery?", options: ["Sight.", "Sound.", "Smell.", "Taste."], correctAnswer: 2, explanation: "It refers specifically to the sense of smell." },
      { question: "Which is 'Tactile' imagery?", options: ["The red bird.", "The loud boom.", "The rough bark of the oak.", "The sweet apple."], correctAnswer: 2, explanation: "It refers to the sense of touch." },
      { question: "Organic imagery refers to:", options: ["Nature.", "Internal feelings (hunger, fatigue).", "Vegetables.", "Rocks."], correctAnswer: 1, explanation: "It describes physical feelings inside the body." },
      { question: "The goal of imagery is to help the reader ______ the story.", options: ["Ignore.", "Summarize.", "Visualize and experience.", "Categorize."], correctAnswer: 2, explanation: "It creates a multi-sensory mental world." }
    ]
  },
  {
    id: "anastrophe",
    name: "Anastrophe",
    pronunciation: "uh-NAS-truh-fee",
    category: Category.Structural,
    accentColor: "cyan",
    shortDefinition: "The inversion of normal word order in a sentence.",
    longDefinition: "Anastrophe is a literary technique in which the normal order of words (usually Subject-Verb-Object) is reversed for emphasis or to create a particular rhythm or tone. It often gives the language an archaic, formal, or magical quality.",
    imageUrl: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "Strong with the force, you are.", source: "Yoda (Star Wars)", type: "Everyday", explanation: "The most famous modern example of inverted syntax." },
      { text: "Deep into that darkness peering.", source: "Edgar Allan Poe", type: "Literature", explanation: "Inverts the order to place emphasis on 'Deep' and 'Darkness'." },
      { text: "Ready are you?", source: "Star Wars", type: "Everyday", explanation: "Swaps the subject and the adjective." },
      { text: "Sure I am of this.", source: "Winston Churchill", type: "Classic", explanation: "Emphasizes the certainty of the statement by placing 'Sure' first." }
    ],
    nuances: [
      "Yoda-Speak: In modern pop culture, anastrophe is synonymous with the character Yoda.",
      "Poetic Meter: Poets often use anastrophe to ensure a word lands on a specific beat or to complete a rhyme.",
      "Formality: Inversion naturally sounds more formal or 'Old World' than standard speech."
    ],
    proTips: [
      "Use for Impact: Move the most important word to the beginning of the sentence.",
      "Archaic Tone: Use anastrophe to make a character sound ancient, wise, or from a fantasy world.",
      "Caution: Overusing it can make your writing difficult to read or sound pretentious."
    ],
    quiz: [
      { question: "Anastrophe is the ______ of standard word order.", options: ["Removal.", "Inversion (reversal).", "Shortening.", "Rhyming."], correctAnswer: 1, explanation: "It flips the expected order of words." },
      { question: "Which character is famous for anastrophe?", options: ["Batman.", "Yoda.", "Iron Man.", "Harry Potter."], correctAnswer: 1, explanation: "Yoda's speech pattern is almost entirely anastrophic." },
      { question: "Why do poets use anastrophe?", options: ["They forget grammar.", "To maintain rhyme or meter.", "To be confusing.", "To save ink."], correctAnswer: 1, explanation: "It allows words to land on specific rhythmic beats." },
      { question: "What tone does anastrophe often create?", options: ["Funny and casual.", "Formal, archaic, or epic.", "Angry.", "Scientific."], correctAnswer: 1, explanation: "Inversion sounds more weightier and historic." },
      { question: "In 'Deep into that darkness peering', what word is emphasized?", options: ["Peering.", "Into.", "Deep.", "That."], correctAnswer: 2, explanation: "By starting with 'Deep', the poet stresses the magnitude of the dark." }
    ]
  },
  {
    id: "aphorism",
    name: "Aphorism",
    pronunciation: "A-fuh-ri-zum",
    category: Category.Emphasis,
    accentColor: "rose",
    shortDefinition: "A concise statement of a general truth or moral principle.",
    longDefinition: "An aphorism is a brief, pithy statement that expresses a general truth or a moral principle. It is meant to be highly memorable, often using rhyme or parallel structure to ensure the wisdom 'sticks' in the reader's mind. It is essentially a 'truth bomb'.",
    imageUrl: "https://images.unsplash.com/photo-1528459061998-5645ad99e39e?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "A journey of a thousand miles starts with a single step.", source: "Lao Tzu", type: "Classic", explanation: "A universal truth about patience and beginning big tasks." },
      { text: "If it ain't broke, don't fix it.", source: "Folk Wisdom", type: "Everyday", explanation: "A practical aphorism about not interfering with working systems." },
      { text: "Power tends to corrupt, and absolute power corrupts absolutely.", source: "Lord Acton", type: "Everyday", explanation: "A political aphorism that has become a fundamental truth of history." },
      { text: "A penny saved is a penny earned.", source: "Ben Franklin", type: "Classic", explanation: "A financial aphorism that emphasizes the value of thrift." }
    ],
    nuances: [
      "Sticky Logic: Aphorisms usually have a 'catchy' rhythm that makes them easy to quote.",
      "Authority: They sound like universal laws rather than personal opinions.",
      "Proverb Link: Aphorisms and proverbs are very similar, but aphorisms are usually attributed to a specific author."
    ],
    proTips: [
      "Be Pithy: The shorter, the better. Remove every unnecessary word.",
      "Parallelism: Use balanced phrases (e.g., 'Easy come, easy go') to make them more memorable.",
      "Dialogue: Give your wise or elderly characters aphorisms to establish their authority immediately."
    ],
    quiz: [
      { question: "An aphorism is a statement of ______.", options: ["Fact.", "General Truth.", "Opinion.", "Question."], correctAnswer: 1, explanation: "It expresses a broad, moral, or practical truth." },
      { question: "What is a key feature of an aphorism?", options: ["It is very long.", "It is brief and memorable.", "It doesn't make sense.", "It is only for children."], correctAnswer: 1, explanation: "Brevity (being pithy) is essential." },
      { question: "Which is an aphorism?", options: ["The sun is yellow.", "I am going home.", "Actions speak louder than words.", "A tall tree."], correctAnswer: 2, explanation: "It expresses a moral principle about behavior." },
      { question: "Who was famous for writing aphorisms?", options: ["Ben Franklin.", "Shakespeare.", "Both of these.", "Neither."], correctAnswer: 2, explanation: "Both used pithy statements extensively." },
      { question: "Aphorisms are often used to ______.", options: ["Confuse.", "Provide authoritative wisdom.", "Count words.", "Fix typos."], correctAnswer: 1, explanation: "They sound like 'The Law'." }
    ]
  },
  {
    id: "archaism",
    name: "Archaism",
    pronunciation: "AR-kay-i-zum",
    category: Category.Structural,
    accentColor: "slate",
    shortDefinition: "The intentional use of obsolete or old-fashioned language.",
    longDefinition: "Archaism is the deliberate use of words, phrases, or grammatical structures that are no longer in common use. It is used to create a historical, religious, or legendary atmosphere, effectively transporting the reader back in time through the vocabulary.",
    imageUrl: "https://images.unsplash.com/photo-1544642899-f0d6e5f6ed6a?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "To thine own self be true.", source: "Shakespeare", type: "Classic", explanation: "'Thine' is an archaic form of 'your' used to add gravity and period-flavor." },
      { text: "Whither goest thou?", source: "Biblical Style", type: "Classic", explanation: "Uses old forms of 'where' and 'go' to sound religious or ancient." },
      { text: "Hark! The herald angels sing.", source: "Christmas Carol", type: "Classic", explanation: "'Hark' is an archaic word for 'listen'." },
      { text: "Ye Olde Shoppe.", source: "Marketing", type: "Everyday", explanation: "A modern use of archaisms to 'fake' a historical heritage." }
    ],
    nuances: [
      "Solemnity: Archaic language naturally sounds more serious or sacred (e.g., the language of the King James Bible).",
      "Anachronism Danger: If you use an archaism in a modern setting without reason, it becomes a 'mistake' or an 'anachronism'.",
      "The 'Old English' Fallacy: People often use 'Ye' thinking it's old, but 'Y' was originally a symbol for 'Th', so it was actually pronounced 'The'."
    ],
    proTips: [
      "Fantasy Writing: Use archaisms like 'forsooth' or 'nay' to distinguish different cultures in a fantasy world.",
      "Sprinkle, Don't Pour: Use them sparingly. If the reader can't understand the words, they will stop reading.",
      "Character Background: Use archaic speech to show a character is very old or from an isolated, traditional community."
    ],
    quiz: [
      { question: "Archaism is the use of ______ language.", options: ["Slang.", "Modern.", "Obsolete/Old-fashioned.", "Scientific."], correctAnswer: 2, explanation: "It uses words from a past era." },
      { question: "Which word is archaic?", options: ["Computer.", "Thou.", "Like.", "Fast."], correctAnswer: 1, explanation: "'Thou' is an old-fashioned way to say 'you'." },
      { question: "Why do writers use archaisms?", options: ["They are lazy.", "To create a historical or legendary mood.", "To save space.", "To rhyme."], correctAnswer: 1, explanation: "Vocabulary can 'time travel' the reader." },
      { question: "What is 'Anachronism'?", options: ["A clock.", "A word out of its proper time period.", "A type of rhyme.", "A short story."], correctAnswer: 1, explanation: "It's the mistake of using modern words in historical settings (or vice versa)." },
      { question: "'Hark!' is an archaic way to say:", options: ["Look.", "Run.", "Listen.", "Jump."], correctAnswer: 2, explanation: "It was a common command for attention." }
    ]
  },
  {
    id: "circumlocution",
    name: "Circumlocution",
    pronunciation: "sur-kum-loh-KYOO-shun",
    category: Category.Indirect,
    accentColor: "purple",
    shortDefinition: "Using more words than necessary to express an idea.",
    longDefinition: "Circumlocution is the use of many words where fewer would do, especially in a deliberate attempt to be vague or evasive. Literally meaning 'talking around', it is used to avoid social taboos, hide the truth, or make a character sound pompous and overly formal.",
    imageUrl: "https://images.unsplash.com/photo-1465225310220-7e15434d29e3?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "He-Who-Must-Not-Be-Named.", source: "Harry Potter", type: "Literature", explanation: "Circumlocution used to avoid a fearful name (Voldemort)." },
      { text: "The vehicle of four-wheeled transportation.", source: "Pompous Speech", type: "Everyday", explanation: "An unnecessarily long way to say 'car'." },
      { text: "Being economical with the truth.", source: "Politics", type: "Everyday", explanation: "A famous circumlocution for 'lying'." },
      { text: "Our feathered friends of the sky.", source: "Nature Writing", type: "Everyday", explanation: "A flowery way to say 'birds'." }
    ],
    nuances: [
      "Evasiveness: Frequently used in legal or political settings to avoid admitting fault.",
      "Euphemism Link: Most euphemisms are types of circumlocution.",
      "Bureaucratic Language: Often used to make simple processes sound complex and important."
    ],
    proTips: [
      "Characterization: Use circumlocution to make a character seem arrogant, slippery, or extremely nervous.",
      "Avoid in Prose: Generally, you want to be direct. Only use circumlocution if the *character* is meant to be annoying or indirect.",
      "Naming Taboos: It's great for world-building (e.g., 'The Great Deep' for the ocean)."
    ],
    quiz: [
      { question: "Circumlocution literally means ______.", options: ["Talking fast.", "Talking around.", "Talking loud.", "Talking in circles."], correctAnswer: 1, explanation: "Circum = Around, Locution = Talk." },
      { question: "Why do politicians use circumlocution?", options: ["To be funny.", "To be evasive or hide the truth.", "To save time.", "To rhyme."], correctAnswer: 1, explanation: "More words can make a simple lie harder to spot." },
      { question: "Which is circumlocution for 'car'?", options: ["Auto.", "Vehicle of four-wheeled transportation.", "Wheels.", "Sedan."], correctAnswer: 1, explanation: "It uses many extra words for a simple noun." },
      { question: "In Harry Potter, why is Voldemort called 'He-Who-Must-Not-Be-Named'?", options: ["They forgot his name.", "Fear-based circumlocution.", "It's a nickname.", "It's a rhyme."], correctAnswer: 1, explanation: "It's a way to discuss him without using the 'forbidden' name." },
      { question: "Circumlocution is often found in ______.", options: ["Action movies.", "Legal or bureaucratic writing.", "Children's books.", "Posters."], correctAnswer: 1, explanation: "Official language often 'talks around' simple facts." }
    ]
  },
  {
    id: "dysphemism",
    name: "Dysphemism",
    pronunciation: "DIS-fuh-mi-zum",
    category: Category.Indirect,
    accentColor: "red",
    shortDefinition: "Using a harsh or offensive term instead of a neutral one.",
    longDefinition: "The direct opposite of euphemism, dysphemism is the use of a disparaging, offensive, or derogatory term instead of a neutral or positive one. It is used to shock, to show contempt, to mock, or to reinforce a cynical and tough world-view.",
    imageUrl: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "Snail mail (for 'the postal service').", source: "Common Slang", type: "Everyday", explanation: "Implicitly mocks the speed of the service." },
      { text: "Croaked (for 'died').", source: "Slang", type: "Everyday", explanation: "Uses an undignified sound to describe a serious event." },
      { text: "Grease monkey (for 'mechanic').", source: "Workplace Slang", type: "Everyday", explanation: "Reduces a skilled professional to the dirt of their job." },
      { text: "Shrink (for 'psychiatrist').", source: "Colloquialism", type: "Everyday", explanation: "Shortens and trivializes a complex medical profession." }
    ],
    nuances: [
      "Cynicism: Dysphemism lowers the 'tone' of a conversation immediately.",
      "Dehumanization: By using harsh words, you can make a subject seem less like a human and more like an object.",
      "In-Group Bonding: Sometimes used between friends to show a 'tough' affection or shared cynicism."
    ],
    proTips: [
      "Villain Speech: Villains often use dysphemisms to show their lack of empathy for others.",
      "Dark Humor: It is a core element of 'black comedy' (e.g., 'kick the bucket').",
      "Contrast: If a character uses euphemisms and another uses dysphemisms, it immediately shows their clashing personalities."
    ],
    quiz: [
      { question: "Dysphemism is the opposite of ______.", options: ["Metaphor.", "Simile.", "Euphemism.", "Alliteration."], correctAnswer: 2, explanation: "Euphemism is polite; dysphemism is harsh." },
      { question: "Using 'Snail mail' is a dysphemism because:", options: ["Snails are slow.", "It mocks the postal service.", "It's about animals.", "It's a rhyme."], correctAnswer: 1, explanation: "It frames the service in a negative, insulting way." },
      { question: "Why would a writer use dysphemism?", options: ["To be polite.", "To show a character's cynicism or contempt.", "To save paper.", "To fix grammar."], correctAnswer: 1, explanation: "It establishes a harsh or mocking tone." },
      { question: "Which is a dysphemism for 'food'?", options: ["Meal.", "Slop.", "Cuisine.", "Dish."], correctAnswer: 1, explanation: "'Slop' implies the food is of terrible quality, like pig feed." },
      { question: "Dysphemism is often used to ______ the subject.", options: ["Praise.", "Dehumanize or belittle.", "Celebrate.", "Simplify."], correctAnswer: 1, explanation: "It strips away dignity or professional respect." }
    ]
  },
  {
    id: "ellipsis",
    name: "Ellipsis",
    pronunciation: "ee-LIP-sis",
    category: Category.Structural,
    accentColor: "stone",
    shortDefinition: "The omission of words that are understood from context.",
    longDefinition: "Ellipsis is a linguistic and literary device where words are omitted from a sentence because they can be easily understood from the surrounding context. Visually, it is often represented by three dots (...) to show a thought trailing off or a gap in a quote.",
    imageUrl: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "To be continued...", source: "Media Trope", type: "Everyday", explanation: "The rest of the thought is omitted to create suspense." },
      { text: "Some people prefer coffee; others, tea.", source: "Grammar", type: "Everyday", explanation: "The word 'prefer' is omitted from the second clause but understood." },
      { text: "If only I knew... but it's too late now.", source: "Dialogue", type: "Everyday", explanation: "The dots represent a thought trailing off or a pause for emotion." },
      { text: "I went to the store, and she to the mall.", source: "Grammar", type: "Everyday", explanation: "The verb 'went' is elided in the second half." }
    ],
    nuances: [
      "Grammatical Ellipsis: Omitting redundant words to make a sentence punchier.",
      "Rhetorical Ellipsis: Using '...' to create suspense, hesitation, or a cliffhanger.",
      "Economy: It is the primary tool for avoiding repetitive language."
    ],
    proTips: [
      "Don't overdo the dots: In professional writing, too many '...' make a character sound weak or the author sound lazy.",
      "Gap in Quotes: Use '...' when quoting someone but skipping irrelevant parts. Be careful not to change their meaning!",
      "Dialogue Pauses: Use ellipsis to show a character is struggling for words or is overwhelmed by emotion."
    ],
    quiz: [
      { question: "Visually, an ellipsis is shown as ______.", options: ["!!!", "???", "...", "---"], correctAnswer: 2, explanation: "Three dots are the standard mark." },
      { question: "What is the purpose of grammatical ellipsis?", options: ["To confuse.", "To avoid repeating words that are already understood.", "To rhyme.", "To add detail."], correctAnswer: 1, explanation: "It makes sentences more efficient (e.g., 'He went, I didn't')." },
      { question: "Ending a story with '...' creates ______.", options: ["Finality.", "Suspense/Cliffhanger.", "Boredom.", "Confusion."], correctAnswer: 1, explanation: "It suggests the action continues beyond the text." },
      { question: "Which is an ellipsis?", options: ["I like red, she likes blue.", "I like red, she blue.", "She likes red.", "Red is nice."], correctAnswer: 1, explanation: "The verb 'likes' is omitted in the second part." },
      { question: "In dialogue, ellipsis can represent ______.", options: ["Shouting.", "A pause or hesitation.", "Speed.", "Anger."], correctAnswer: 1, explanation: "It shows a break in the flow of speech." }
    ]
  },
  {
    id: "epigram",
    name: "Epigram",
    pronunciation: "E-puh-gram",
    category: Category.Structural,
    accentColor: "violet",
    shortDefinition: "A brief, interesting, and often satirical statement.",
    longDefinition: "An epigram is a very short, witty poem or a clever, pithy statement. It often features a surprising twist or a satirical 'sting' at the end. While similar to aphorisms, epigrams are more focused on being clever and entertaining than providing deep moral guidance.",
    imageUrl: "https://images.unsplash.com/photo-1524143878510-e3b8d6312402?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "I can resist everything except temptation.", source: "Oscar Wilde", type: "Classic", explanation: "A perfect epigram featuring a logical twist." },
      { text: "If we don't end war, war will end us.", source: "H.G. Wells", type: "Literature", explanation: "Uses balanced structure to deliver a sharp warning." },
      { text: "Experience is the name everyone gives to their mistakes.", source: "Oscar Wilde", type: "Literature", explanation: "Satirizes the way humans justify their failures." },
      { text: "Little strokes fell great oaks.", source: "Ben Franklin", type: "Everyday", explanation: "A rhyming, memorable epigram about persistence." }
    ],
    nuances: [
      "Satirical Sting: Many epigrams mock human nature or specific institutions.",
      "Rhetorical Balance: Like antithesis, they often use parallel structures to land the punchline.",
      "Quotable: They are designed to be shared and remembered (the 'Twitter' of the 19th century)."
    ],
    proTips: [
      "Master of the Genre: Study Oscar Wilde if you want to write perfect epigrams.",
      "The Twist: The best epigrams lead the reader in one direction and then flip the logic in the last few words.",
      "Character Intelligence: Use epigrams to show a character is highly educated, cynical, or witty."
    ],
    quiz: [
      { question: "An epigram is ______.", options: ["A long letter.", "A brief, witty statement.", "A diagram.", "A rhyme."], correctAnswer: 1, explanation: "Cleverness and brevity are key." },
      { question: "Who is the 'King of Epigrams'?", options: ["Batman.", "Oscar Wilde.", "Homer.", "Albert Einstein."], correctAnswer: 1, explanation: "His one-liners define the genre." },
      { question: "What does an epigram often have at the end?", options: ["A picture.", "A question.", "A witty twist or sting.", "A map."], correctAnswer: 2, explanation: "The 'punchline' provides the wit." },
      { question: "Epigrams are designed to be ______.", options: ["Boring.", "Highly quotable and memorable.", "Secret.", "Technical."], correctAnswer: 1, explanation: "They are 'catchy' intellectual ideas." },
      { question: "'Experience is the name for mistakes' is an epigram because:", options: ["It's true.", "It's funny.", "It is a pithy, clever redefinition.", "It rhymes."], correctAnswer: 2, explanation: "It redefines a common word with a witty insight." }
    ]
  },
  {
    id: "idiom",
    name: "Idiom",
    pronunciation: "I-dee-um",
    category: Category.Comparison,
    accentColor: "amber",
    shortDefinition: "A phrase with a figurative meaning that differs from the literal words.",
    longDefinition: "An idiom is an expression or phrase whose meaning cannot be understood from the literal definitions of its individual words. Its meaning is culturally specific and must be learned as a whole 'chunk' of language.",
    imageUrl: "https://images.unsplash.com/photo-1484186139897-d5fc6b908812?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "Break a leg.", source: "Theater Tradition", type: "Everyday", explanation: "Means 'Good luck', having nothing to do with physical injury." },
      { text: "Piece of cake.", source: "Slang", type: "Everyday", explanation: "Means something is very easy to accomplish." },
      { text: "Bite the bullet.", source: "Historical / Military", type: "Classic", explanation: "Means to endure a painful or difficult situation with courage." },
      { text: "Spill the beans.", source: "Slang", type: "Everyday", explanation: "Means to reveal a secret." }
    ],
    nuances: [
      "Cultural Logic: Idioms often come from ancient traditions or forgotten historical events (e.g., biting bullets during surgery).",
      "Translation Barrier: Literal translations of idioms almost always fail to convey the correct meaning.",
      "Vivid Imagery: Even though they aren't literal, they often use strong mental images (like 'spilling beans') to convey feelings."
    ],
    proTips: [
      "Characterization: Different regions have different idioms. Use 'Southern' idioms to ground a character in the US South.",
      "Don't over-rely on them: Using too many idioms can make your writing feel like a collection of clichés.",
      "Literally True? For fun, you can have a character take an idiom literally (e.g., an alien looking for actual beans after someone says 'spill the beans')."
    ],
    quiz: [
      { question: "An idiom's meaning is ______.", options: ["Literal.", "Figurative/Cultural.", "Scientific.", "Math-based."], correctAnswer: 1, explanation: "The words themselves don't tell you the meaning." },
      { question: "'Break a leg' means:", options: ["Go to the doctor.", "Good Luck.", "Run fast.", "Jump high."], correctAnswer: 1, explanation: "It is a standard well-wish in theater." },
      { question: "Why are idioms hard for language learners?", options: ["They are too long.", "The literal meaning is different from the intended meaning.", "They don't have verbs.", "They are only in English."], correctAnswer: 1, explanation: "You have to learn them as individual 'memes' of language." },
      { question: "'Bite the bullet' comes from:", options: ["Eating too fast.", "Historical surgery without anesthesia.", "Shooting practice.", "A cartoon."], correctAnswer: 1, explanation: "Soldiers would bite a bullet to endure pain." },
      { question: "Which is an idiom?", options: ["The car is red.", "Under the weather.", "I am tired.", "She is tall."], correctAnswer: 1, explanation: "It means 'feeling sick', not literally standing under rain." }
    ]
  },
  {
    id: "invective",
    name: "Invective",
    pronunciation: "in-VEK-tiv",
    category: Category.Emphasis,
    accentColor: "zinc",
    shortDefinition: "Insulting, abusive, or highly critical language.",
    longDefinition: "Invective is speech or writing that attacks, insults, or denounces a person, topic, or institution. It is characterized by high emotion and strong negative vocabulary, ranging from simple name-calling to complex, creative verbal dismantling.",
    imageUrl: "https://images.unsplash.com/photo-1481819613568-3701cbc70156?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "You are a sad, strange little man, and you have my pity.", source: "Toy Story", type: "Everyday", explanation: "A concise, effective invective that dismantles the character's ego." },
      { text: "You common cry of curs!", source: "Shakespeare", type: "Literature", explanation: "Calling a crowd of people 'dogs' to show extreme contempt." },
      { text: "You're a mean one, Mr. Grinch.", source: "Dr. Seuss", type: "Classic", explanation: "Creative, descriptive invective aimed at a fictional character." },
      { text: "A knave, a rascal, an eater of broken meats!", source: "Shakespeare", type: "Literature", explanation: "A rhythmic string of insults common in Elizabethan drama." }
    ],
    nuances: [
      "Creativity: Effective invective is an 'art of insult' that goes beyond simple swearing.",
      "Tone: It immediately establishes a tone of intense anger or bitter irony.",
      "Motivation: In literature, invective usually reveals the deep-seated motivations and frustrations of the speaker."
    ],
    proTips: [
      "Vocabulary is Power: The more specific and rare the words you use, the more 'intelligent' and cutting the invective sounds.",
      "Rhythm: Pounding, repetitive rhythms (anaphora) can make an invective rant sound like a drumbeat of rage.",
      "Don't overdo it: If every character screams insults, the reader will lose interest."
    ],
    quiz: [
      { question: "Invective is used to ______.", options: ["Praise.", "Insult or attack.", "Teach.", "Quiet."], correctAnswer: 1, explanation: "It is highly critical and emotional language." },
      { question: "Which author is famous for creative invective?", options: ["Shakespeare.", "Mr. Rogers.", "Bambi.", "Yoda."], correctAnswer: 0, explanation: "His characters delivered some of the most complex insults in history." },
      { question: "What is the key to 'effective' invective?", options: ["Loudness.", "Creativity and specific vocabulary.", "Shortness.", "Rhyme."], correctAnswer: 1, explanation: "A well-crafted insult is more 'cutting' than a simple bad word." },
      { question: "Invective shows the speaker's ______.", options: ["Love.", "Intense anger or contempt.", "Fear.", "Happiness."], correctAnswer: 1, explanation: "It is a release of strong negative emotion." },
      { question: "Calling someone a 'Knave' is:", options: ["A compliment.", "Invective (insult).", "A name.", "A fact."], correctAnswer: 1, explanation: "It is an archaic term for a dishonest person." }
    ]
  },
  {
    id: "malapropism",
    name: "Malapropism",
    pronunciation: "MA-luh-prop-i-zum",
    category: Category.Sound,
    accentColor: "sky",
    shortDefinition: "The mistaken use of a word in place of a similar-sounding one.",
    longDefinition: "A malapropism is the unintentional use of a word that sounds like the intended one but has an entirely different—and usually nonsensical—meaning. It is a classic comedy device used to show a character's ignorance or their attempt to sound smarter than they actually are.",
    imageUrl: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "He is the pineapple of politeness.", source: "Mrs. Malaprop", type: "Classic", explanation: "She meant 'pinnacle' (the peak) but used a fruit instead." },
      { text: "Alcoholics Unanimous.", source: "Verbal Slip", type: "Everyday", explanation: "Meant 'Anonymous'." },
      { text: "Positive altitude.", source: "Verbal Slip", type: "Everyday", explanation: "Meant 'Attitude'." },
      { text: "The police are here to illuminate the suspects.", source: "Comedy Script", type: "Literature", explanation: "Meant 'eliminate'." }
    ],
    nuances: [
      "Phonetic Similarity: The two words must sound almost identical for the 'mistake' to be believable.",
      "Character Ego: It usually happens when a character is trying to use 'big words' to impress others.",
      "Origins: Named after Mrs. Malaprop from Sheridan's 1775 play 'The Rivals'."
    ],
    proTips: [
      "Comedy Sidekicks: Use malapropisms for 'comic relief' characters who aren't as smart as they think they are.",
      "Subtlety: The funniest malapropisms are those where the wrong word actually makes a weird kind of sense.",
      "Confidence: The character should deliver the malapropism with absolute confidence for it to be funny."
    ],
    quiz: [
      { question: "Malapropism involves using a ______.", options: ["Right word.", "Similar-sounding wrong word.", "Rhyme.", "Noun."], correctAnswer: 1, explanation: "It substitutes one sound for a similar one (e.g., 'specific' vs 'pacific')." },
      { question: "'He is the pineapple of politeness' meant to say:", options: ["Pinnacle.", "Orange.", "Problem.", "Friend."], correctAnswer: 0, explanation: "Pinnacle means the highest point." },
      { question: "What is the usual effect of a malapropism?", options: ["Fear.", "Comedy.", "Clarity.", "Silence."], correctAnswer: 1, explanation: "The confusion created is almost always humorous." },
      { question: "The device is named after:", options: ["Mrs. Malaprop.", "A fruit.", "A prop.", "A map."], correctAnswer: 0, explanation: "She was a character who constantly confused her vocabulary." },
      { question: "It makes a character seem ______.", options: ["Genius.", "Trying too hard to sound smart.", "Scary.", "Silence."], correctAnswer: 1, explanation: "It highlights their lack of actual knowledge." }
    ]
  },
  {
    id: "portmanteau",
    name: "Portmanteau",
    pronunciation: "port-MAN-toh",
    category: Category.Structural,
    accentColor: "rose",
    shortDefinition: "Blending parts of two or more words to create a new one.",
    longDefinition: "A portmanteau is a linguistic device in which parts of multiple words are combined into a new word that carries the meanings of both parents. Named after a French suitcase with two compartments, it represents the evolution of language to name new concepts.",
    imageUrl: "https://images.unsplash.com/photo-1473679408190-0693dd22fe6a?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "Brunch.", source: "Everyday", type: "Everyday", explanation: "Breakfast + Lunch." },
      { text: "Smog.", source: "Everyday", type: "Everyday", explanation: "Smoke + Fog." },
      { text: "Podcast.", source: "Technology", type: "Everyday", explanation: "iPod + Broadcast." },
      { text: "Chillax.", source: "Slang", type: "Everyday", explanation: "Chill + Relax." }
    ],
    nuances: [
      "Neologism: Portmanteaus are a common source of 'neologisms' (new words).",
      "Marketing: Brands love portmanteaus (e.g., 'Pinterest' = Pin + Interest).",
      "Ship Names: In pop culture, combining celebrity names (e.g., 'Bennifer') is a portmanteau."
    ],
    proTips: [
      "World-Building: Invent new portmanteaus for futuristic technology or magical creatures (e.g., 'Liger' for Lion/Tiger).",
      "Efficiency: Use them to describe a hybrid state of being (e.g., 'frenemy').",
      "The Seam: The best portmanteaus have a 'natural' seam where the sounds overlap (like 'sm' in smoke/fog)."
    ],
    quiz: [
      { question: "A portmanteau is a ______ of two words.", options: ["Rhyme.", "Blend.", "Separation.", "List."], correctAnswer: 1, explanation: "It fuses them together." },
      { question: "'Brunch' is a portmanteau of:", options: ["Bread + Lunch.", "Breakfast + Lunch.", "Brother + Lunch.", "Break + Lunch."], correctAnswer: 1, explanation: "It combines the two distinct meals into one word." },
      { question: "'Smog' combines:", options: ["Smoke + Fog.", "Smile + Dog.", "Small + Log.", "Smart + Frog."], correctAnswer: 1, explanation: "It describes air that is both smoky and foggy." },
      { question: "The word comes from a ______ word for 'suitcase'.", options: ["Spanish.", "French.", "German.", "Latin."], correctAnswer: 1, explanation: "A 'porte-manteau' was a bag with two parts." },
      { question: "Which is a portmanteau?", options: ["Motel (Motor + Hotel).", "Red car.", "Fast runner.", "Blue sky."], correctAnswer: 0, explanation: "It combines motor and hotel into a single term." }
    ]
  },
  {
    id: "satire",
    name: "Satire",
    pronunciation: "SA-ty-er",
    category: Category.Indirect,
    accentColor: "slate",
    shortDefinition: "The use of humor, irony, or ridicule to expose and criticize stupidity.",
    longDefinition: "Satire is a literary genre and device that uses wit, irony, and exaggeration to mock and criticize human vices, foolishness, or corruption. Unlike simple comedy, satire has a moral purpose: it seeks to improve humanity or society by holding up a mirror to its ugliness.",
    imageUrl: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "Animal Farm.", source: "George Orwell", type: "Literature", explanation: "Satirizes the corruption of the Russian Revolution using farm animals." },
      { text: "The Onion.", source: "Modern Media", type: "Everyday", explanation: "Uses 'fake' news stories to satirize real-world political and social issues." },
      { text: "The Simpsons.", source: "Television", type: "Everyday", explanation: "Satirizes the stereotypical American family and social structures." },
      { text: "A Modest Proposal.", source: "Jonathan Swift", type: "Literature", explanation: "A classic satire suggesting that the poor sell their children as food to mock British indifference to the Irish famine." }
    ],
    nuances: [
      "Horatian Satire: Playful, lighthearted mockery aimed at general human folly.",
      "Juvenalian Satire: Bitter, angry, and biting satire aimed at social evil or political corruption.",
      "Target: Satire usually 'punches up' at those in power rather than 'down' at the weak."
    ],
    proTips: [
      "Straight Face: The best satire is delivered with a 'deadpan' tone, pretending to be serious while describing something insane.",
      "Exaggeration: Push a current trend to its extreme logical conclusion to show how ridiculous it is.",
      "Social Reform: Always ask: 'What am I trying to fix with this joke?'"
    ],
    quiz: [
      { question: "Satire uses humor to ______.", options: ["Make friends.", "Criticize and reform society.", "Sell products.", "Bore the reader."], correctAnswer: 1, explanation: "It has a moral or political goal." },
      { question: "Which is a 'fake' news site famous for satire?", options: ["CNN.", "The Onion.", "Facebook.", "Wikipedia."], correctAnswer: 1, explanation: "It uses ridiculous headlines to mock real issues." },
      { question: "What is the difference between comedy and satire?", options: ["Comedy is longer.", "Satire has a critical or moral purpose; comedy is just for laughs.", "Comedy is only in books.", "There is no difference."], correctAnswer: 1, explanation: "Satire wants to 'improve' or 'shame' its target." },
      { question: "Satire usually targets ______.", options: ["Animals.", "Power, corruption, and stupidity.", "The weather.", "Trees."], correctAnswer: 1, explanation: "It is a weapon against institutional folly." },
      { question: "In 'Animal Farm', Orwell satirizes:", options: ["Farming.", "The Russian Revolution.", "Zoos.", "Cooking."], correctAnswer: 1, explanation: "He uses the farm as a microcosm for the Soviet Union." }
    ]
  },
  {
    id: "synesthesia",
    name: "Synesthesia",
    pronunciation: "sin-es-THEE-zhuh",
    category: Category.Comparison,
    accentColor: "teal",
    shortDefinition: "Describing one sensory experience in terms of another.",
    longDefinition: "Synesthesia is a figurative device that 'cross-wires' the senses. It involves describing one sensory experience (like sight) using the vocabulary of another (like sound or taste). This creates a surreal, dreamlike effect that can make a description much more vivid and original.",
    imageUrl: "https://images.unsplash.com/photo-1501446529957-6226bd447c46?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "The loud wallpaper was giving me a headache.", source: "Description", type: "Everyday", explanation: "Describes a visual pattern (sight) using an auditory term (loud)." },
      { text: "She wore a cool blue dress.", source: "Common Usage", type: "Everyday", explanation: "Describes a color (sight) using a temperature/touch term (cool)." },
      { text: "Taste the rainbow.", source: "Skittles Slogan", type: "Everyday", explanation: "Describes a visual spectrum using the sense of taste." },
      { text: "The music felt like velvet.", source: "Poetic", type: "Everyday", explanation: "Describes sound using a tactile texture term." }
    ],
    nuances: [
      "Cognitive Condition: Some people literally have a condition called synesthesia where they see colors when they hear music.",
      "Originality: It is a great way to avoid cliché descriptions (e.g., 'loud colors' vs 'bright colors').",
      "Atmosphere: It creates a psychedelic or highly emotional mood in poetry."
    ],
    proTips: [
      "Formula: Take a noun for Sense A (e.g., 'Silence') and an adjective for Sense B (e.g., 'Sharp'). 'The sharp silence'.",
      "Show Immersion: Use it to describe scenes where a character is overwhelmed, dizzy, or in a dream.",
      "Subtlety: Many common adjectives are synesthetic (e.g., 'sweet voice', 'bitter cold')."
    ],
    quiz: [
      { question: "Synesthesia involves ______ the senses.", options: ["Removing.", "Mixing/Cross-wiring.", "Ignoring.", "Rhyming."], correctAnswer: 1, explanation: "It describes one sense with terms from another." },
      { question: "'The loud wallpaper' mixes ______ and ______.", options: ["Sight and Taste.", "Sight and Sound.", "Touch and Smell.", "Sound and Taste."], correctAnswer: 1, explanation: "Loud (sound) describes wallpaper (sight)." },
      { question: "Why do poets use synesthesia?", options: ["They are confused.", "To create fresh, vivid, and dreamlike imagery.", "To save ink.", "To fix typos."], correctAnswer: 1, explanation: "It provides a more immersive sensory experience." },
      { question: "Which is synesthesia?", options: ["The red apple.", "The velvet voice.", "The cold ice.", "The fast car."], correctAnswer: 1, explanation: "'Velvet' (touch) describes a 'voice' (sound)." },
      { question: "Describing music as 'sweet' is an example of:", options: ["Simile.", "Synesthesia.", "Metaphor.", "Alliteration."], correctAnswer: 1, explanation: "It connects sound to the sense of taste." }
    ]
  },
  {
    id: "tautology",
    name: "Tautology",
    pronunciation: "taw-TOL-uh-jee",
    category: Category.Emphasis,
    accentColor: "indigo",
    shortDefinition: "Saying the same thing twice using different words.",
    longDefinition: "A tautology is a repetitive use of phrases or words that have similar meanings. In logic, it is a statement that is true by necessity and its own form. In writing, it is often seen as a flaw (redundancy), but can be used for emphasis or to characterize a nervous speaker.",
    imageUrl: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "Free gift.", source: "Marketing", type: "Everyday", explanation: "Redundant because a 'gift' is by definition 'free'." },
      { text: "Frozen ice.", source: "Common Usage", type: "Everyday", explanation: "Ice is frozen water; the adjective adds no new information." },
      { text: "I saw it with my own eyes.", source: "Emphasis", type: "Everyday", explanation: "One can only see with their eyes; 'own' and 'eyes' are redundant but add emphasis." },
      { text: "New innovation.", source: "Business Speak", type: "Everyday", explanation: "An 'innovation' is something new; 'new' is repetitive." }
    ],
    nuances: [
      "Flaw vs. Style: In formal writing, tautology is usually a sign of poor editing. In poetry, it can emphasize certainty.",
      "Logical Tautology: A statement like 'It will rain or it won't' which is 100% true but provides zero information.",
      "ATM Machine: A common real-world tautology (Automated Teller Machine Machine)."
    ],
    proTips: [
      "Editing: Always check your adjectives. If the adjective is already part of the noun's definition (like 'hot fire'), remove it.",
      "Characterization: Give tautologies to characters who are rambling, uneducated, or trying to fill dead air.",
      "Marketing: Brands use 'Free Gift' because even though it's redundant, the word 'Free' is a powerful psychological trigger."
    ],
    quiz: [
      { question: "A tautology is a ______ statement.", options: ["Contradictory.", "Redundant/Repetitive.", "False.", "Rhyming."], correctAnswer: 1, explanation: "It repeats meaning without adding information." },
      { question: "'Frozen ice' is a tautology because:", options: ["Ice is cold.", "Ice is already defined as being frozen.", "It rhymes.", "It's a metaphor."], correctAnswer: 1, explanation: "The adjective 'frozen' is redundant." },
      { question: "In formal writing, tautology is usually considered a ______.", options: ["Sign of genius.", "Stylistic flaw (mistake).", "Requirement.", "Poem."], correctAnswer: 1, explanation: "Good editing removes unnecessary repetition." },
      { question: "Which is a tautology?", options: ["New innovation.", "Fast car.", "Blue sky.", "Old man."], correctAnswer: 0, explanation: "Innovation means something new; 'new' is extra." },
      { question: "When is tautology useful?", options: ["In science reports.", "For emphasis or character dialogue.", "To save space.", "Never."], correctAnswer: 1, explanation: "It can show a character's nervous speech or hammer a point home." }
    ]
  },
  {
    id: "zoomorphism",
    name: "Zoomorphism",
    pronunciation: "zoo-uh-MOR-fi-zum",
    category: Category.Comparison,
    accentColor: "emerald",
    shortDefinition: "Attributing animal traits to humans or non-animals.",
    longDefinition: "Zoomorphism is a derivative of metaphor that involves attributing animal characteristics, motions, or behaviors to humans, gods, or other objects. It is the direct opposite of personification and is used to connect human behavior to the primal, wild world.",
    imageUrl: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "He barked his orders at the team.", source: "Description", type: "Everyday", explanation: "Attributes the aggressive, vocal trait of a dog to a human leader." },
      { text: "She's a real busy bee today.", source: "Common Phrase", type: "Everyday", explanation: "Connects human productivity to the frantic movement of an insect." },
      { text: "He wolfed down his dinner.", source: "Common Usage", type: "Everyday", explanation: "Describes the speed and greed of eating using an animal behavior." },
      { text: "The thief slithered through the window.", source: "Poetic Description", type: "Everyday", explanation: "Gives a human the silent, sneaky motion of a snake." }
    ],
    nuances: [
      "Dehumanization: Can be used to make a character seem less civilized or more instinct-driven.",
      "Spirit Animal: Often used in mythology to show a human's deep connection to a specific beast.",
      "Verb Focus: Many zoomorphisms are verbs (e.g., chirping, grunting, snarling)."
    ],
    proTips: [
      "Personality Shorthand: Instead of 'He was angry', use 'He snarled'. It immediately suggests a predatory or dangerous nature.",
      "Contrast: Juxtapose a 'lion-like' hero with a 'hyena-like' villain to establish their moral positions visually.",
      "Check: Don't confuse it with Anthropomorphism (Animals acting human)."
    ],
    quiz: [
      { question: "Zoomorphism is the opposite of ______.", options: ["Simile.", "Metaphor.", "Personification.", "Irony."], correctAnswer: 2, explanation: "Personification makes things human; zoomorphism makes things animal." },
      { question: "'He barked orders' implies the character is ______.", options: ["A dog.", "Aggressive and loud.", "Happy.", "Quiet."], correctAnswer: 1, explanation: "It transfers the dog's aggression to the human." },
      { question: "Which is zoomorphism?", options: ["The sun smiled.", "The man roared with rage.", "The dog wore pants.", "The car is fast."], correctAnswer: 1, explanation: "A man (human) is given the trait of a lion (roar)." },
      { question: "Zoomorphism connects humans to their ______ side.", options: ["Logical.", "Animal/Primal.", "Scientific.", "Technological."], correctAnswer: 1, explanation: "It strips away civilized masks to show instinct." },
      { question: "Describing a sneaky person as 'slithering' is:", options: ["Personification.", "Zoomorphism.", "Alliteration.", "Pun."], correctAnswer: 1, explanation: "It gives them the traits of a snake." }
    ]
  },
  {
    id: "apostrophe",
    name: "Apostrophe",
    pronunciation: "uh-POS-truh-fee",
    category: Category.Indirect,
    accentColor: "purple",
    shortDefinition: "Addressing a person or thing that is not present.",
    longDefinition: "In literature, an apostrophe is a figure of speech in which the speaker directly addresses someone or something that is not present or cannot respond—such as a person who is dead, an abstract quality, or an inanimate object. It is used to convey intense emotion or to elevate the tone of the piece.",
    imageUrl: "https://images.unsplash.com/photo-1516410529446-2c777cb7366d?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "Twinkle, twinkle, little star...", source: "Nursery Rhyme", type: "Classic", explanation: "The speaker addresses a celestial object as if it could hear and understand." },
      { text: "O Death, where is thy sting?", source: "The Bible", type: "Classic", explanation: "Directly addresses the abstract concept of death as if it were a person." },
      { text: "Blue Moon, you saw me standing alone.", source: "Song Lyric", type: "Everyday", explanation: "Addresses the moon as a witness to personal events." },
      { text: "Car, please just start for once!", source: "Frustration", type: "Everyday", explanation: "A modern apostrophe directed at a broken machine." }
    ],
    nuances: [
      "The 'O' Marker: Historically, many apostrophes begin with 'O' (e.g., 'O Romeo').",
      "Soliloquy: Often used in plays when a character is alone on stage speaking to a concept like 'fate'.",
      "Personification Link: It implicitly personifies the object by treating it as an audience."
    ],
    proTips: [
      "Intensity: Use apostrophe when a character is so overwhelmed by emotion that they feel the need to shout at the universe.",
      "Elevated Tone: It makes writing sound more epic or poetic.",
      "Modern Use: Use it for comedic effect when a character argues with an inanimate object (like a computer or a toaster)."
    ],
    quiz: [
      { question: "Apostrophe involves addressing ______.", options: ["A crowd.", "Something that cannot respond (absent/dead/object).", "The reader.", "A teacher."], correctAnswer: 1, explanation: "It is a one-way 'conversation' with the non-human or absent." },
      { question: "Which is an apostrophe?", options: ["Look at the sun.", "Sun, you are so bright today!", "The sun is like fire.", "The sun is a star."], correctAnswer: 1, explanation: "It directly speaks TO the sun." },
      { question: "Apostrophe is often used to show ______.", options: ["Boredom.", "Intense emotion.", "Logic.", "Silence."], correctAnswer: 1, explanation: "It reveals a character's internal pressure or passion." },
      { question: "Talking to a dead relative is:", options: ["A metaphor.", "An apostrophe.", "A simile.", "A pun."], correctAnswer: 1, explanation: "Addressing someone who is absent/dead is the classic form." },
      { question: "It often starts with the word:", options: ["Why.", "The.", "O.", "And."], correctAnswer: 2, explanation: "The 'O' (vocative) is a traditional signal for addressing something." }
    ]
  },
  {
    id: "litotes",
    name: "Litotes",
    pronunciation: "LY-tuh-teez",
    category: Category.Emphasis,
    accentColor: "cyan",
    shortDefinition: "Understatement through the use of double negatives.",
    longDefinition: "Litotes is a form of understatement that uses a double negative (or a negation of the opposite) to emphasize a positive point. It is often ironic, modest, or diplomatic, allowing a speaker to agree with something without sounding overly enthusiastic.",
    imageUrl: "https://images.unsplash.com/photo-1528459061998-5645ad99e39e?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "He is no fool.", source: "Description", type: "Everyday", explanation: "Implicitly means he is actually quite smart." },
      { text: "The weather was not unpleasant.", source: "Diplomacy", type: "Everyday", explanation: "A subtle way to say the weather was good." },
      { text: "I'm not unhappy with the results.", source: "Corporate", type: "Everyday", explanation: "Means 'I am satisfied', but in a cautious way." },
      { text: "It's not rocket science.", source: "Idiom", type: "Everyday", explanation: "Means it's quite simple." }
    ],
    nuances: [
      "Double Negatives: Two negatives (e.g., 'not' and 'un-') cancel out to create a positive.",
      "Modesty: Used to accept a compliment without sounding arrogant (e.g., 'It wasn't my worst performance').",
      "Irony: Often used for biting sarcasm (e.g., 'He's not a genius' about someone doing something stupid)."
    ],
    proTips: [
      "Formula: 'Not' + (Negative word). 'Not bad', 'Not unattractive', 'Not incorrect'.",
      "British Humor: Like meiosis, it's very common in dry, understated humor.",
      "Emphasis: Ironically, by downplaying the point, it often draws more attention to it."
    ],
    quiz: [
      { question: "Litotes uses ______ to make a point.", options: ["Loud words.", "Double negatives.", "Rhymes.", "Animals."], correctAnswer: 1, explanation: "It negates an opposite to prove a positive." },
      { question: "What does 'He is no fool' actually mean?", options: ["He is stupid.", "He is smart.", "He is sleeping.", "He is a child."], correctAnswer: 1, explanation: "It's a modest way of praising his intelligence." },
      { question: "Which is litotes?", options: ["That's the best idea ever!", "That's not a bad idea.", "That's a bad idea.", "I love that idea."], correctAnswer: 1, explanation: "'Not a bad' = 'A good'." },
      { question: "Litotes is a form of ______.", options: ["Exaggeration.", "Understatement.", "Metaphor.", "Alliteration."], correctAnswer: 1, explanation: "It deliberately minimizes the intensity of a statement." },
      { question: "Why use litotes in diplomacy?", options: ["To be rude.", "To be cautious and polite.", "To save time.", "To rhyme."], correctAnswer: 1, explanation: "It allows for agreement without committing to strong praise." }
    ]
  },
  {
    id: "asyndeton",
    name: "Asyndeton",
    pronunciation: "uh-SIN-duh-ton",
    category: Category.Structural,
    accentColor: "stone",
    shortDefinition: "The omission of conjunctions between parts of a sentence.",
    longDefinition: "Asyndeton is a stylistic device that intentionally eliminates conjunctions (like 'and', 'or', 'but') between phrases and in a sentence while maintaining grammatical accuracy. This speeds up the rhythm of the text, creating a sense of urgency, intensity, or a list that seems infinite.",
    imageUrl: "https://images.unsplash.com/photo-1508919892863-ed1bf6cc721b?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "I came, I saw, I conquered.", source: "Julius Caesar", type: "Classic", explanation: "The lack of 'and' creates a sense of speed and inevitable power." },
      { text: "He's gone, lost, forgotten.", source: "Drama", type: "Literature", explanation: "The abrupt ending of each word adds a sense of finality." },
      { text: "Duty, Honor, Country.", source: "Military Motto", type: "Classic", explanation: "Presents each value as an independent, solid pillar of character." },
      { text: "Reduce, Reuse, Recycle.", source: "Environmental Slogan", type: "Everyday", explanation: "Makes the phrase much catchier and punchier." }
    ],
    nuances: [
      "Pacing: It significantly speeds up the reading experience.",
      "Stream of Consciousness: Often used to simulate a character's panicked or rushed thoughts.",
      "Infinite List: It implies that the list could go on forever (e.g., 'He bought apples, bread, milk...')."
    ],
    proTips: [
      "Action Scenes: Use asyndeton to describe fast-paced action where there is no time for 'ands'.",
      "Weight: It makes each item in a list feel like a separate, weighty fact rather than just 'another thing'.",
      "Opposite: Its direct opposite is Polysyndeton (adding many conjunctions)."
    ],
    quiz: [
      { question: "Asyndeton is the removal of ______.", options: ["Verbs.", "Conjunctions (and/or).", "Adjectives.", "Nouns."], correctAnswer: 1, explanation: "It relies on commas only." },
      { question: "What is the effect on pacing?", options: ["Speeds up.", "Slows down.", "Stops.", "No effect."], correctAnswer: 0, explanation: "The lack of linking words makes the reader jump quickly between items." },
      { question: "Which is asyndeton?", options: ["I like red and blue and green.", "I like red, blue, green.", "Red and blue are nice.", "The red car."], correctAnswer: 1, explanation: "It omits the 'and' between colors." },
      { question: "Caesar's 'I came, I saw, I conquered' is famous for its ______.", options: ["Hyperbole.", "Asyndeton.", "Simile.", "Irony."], correctAnswer: 1, explanation: "The speed of the phrase reflects the speed of his victory." },
      { question: "Asyndeton makes a list feel ______.", options: ["Finished.", "Endless or rushed.", "Boring.", "Scientific."], correctAnswer: 1, explanation: "It implies there is no time to stop and link things properly." }
    ]
  },
  {
    id: "polysyndeton",
    name: "Polysyndeton",
    pronunciation: "pah-lee-SIN-duh-ton",
    category: Category.Structural,
    accentColor: "violet",
    shortDefinition: "Using many conjunctions in close succession.",
    longDefinition: "Polysyndeton is a stylistic device in which several coordinating conjunctions (mostly 'and' or 'or') are used in succession in order to achieve an artistic effect. It is the direct opposite of asyndeton and is used to slow down the rhythm, add weight to each item, or create a sense of being overwhelmed.",
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "And the rain fell and the wind blew and the lightning flashed.", source: "Novel Description", type: "Literature", explanation: "Makes each part of the storm feel distinct and overwhelming." },
      { text: "Lions and tigers and bears, oh my!", source: "The Wizard of Oz", type: "Classic", explanation: "Adds a sense of mounting anxiety and dread to each animal." },
      { text: "I'm tired and hungry and cold and lonely.", source: "Dialogue", type: "Everyday", explanation: "Hammers home the magnitude of the character's misery." },
      { text: "Neither rain nor snow nor gloom of night.", source: "Postal Creed", type: "Everyday", explanation: "The repetition of 'nor' adds a sense of unstoppable determination." }
    ],
    nuances: [
      "Pacing: It significantly slows down the reader, forcing them to pause at every 'and'.",
      "Weight: It makes each item in a list feel equally important and heavy.",
      "Biblical Tone: Many ancient texts use polysyndeton to sound epic or eternal."
    ],
    proTips: [
      "Emotional Overwhelm: Use it when a character feels buried under a mountain of tasks or problems.",
      "Childlike Voice: Children often speak in polysyndeton ('And then we went here and then we did this...'), making it great for young narrators.",
      "Emphasis: If you want one specific item in a list to feel special, put it at the end of a long polysyndetic chain."
    ],
    quiz: [
      { question: "Polysyndeton is the use of ______ conjunctions.", options: ["No.", "Many (repeated).", "Short.", "Nonsense."], correctAnswer: 1, explanation: "It repeats 'and' or 'or' frequently." },
      { question: "How does it affect pacing?", options: ["Speeds up.", "Slows down.", "Stops.", "No effect."], correctAnswer: 1, explanation: "Every conjunction acts as a speed-bump." },
      { question: "Which is polysyndeton?", options: ["Red, blue, green.", "Red and blue and green.", "The red car.", "A blue sky."], correctAnswer: 1, explanation: "The repetition of 'and' creates the device." },
      { question: "The goal of polysyndeton is often to ______.", options: ["Be concise.", "Add weight or create a sense of being overwhelmed.", "Rhyme.", "Be scientific."], correctAnswer: 1, explanation: "It makes the list feel 'heavier' or more significant." },
      { question: "The opposite of polysyndeton is ______.", options: ["Anaphora.", "Asyndeton.", "Metaphor.", "Simile."], correctAnswer: 1, explanation: "Asyndeton removes conjunctions entirely." }
    ]
  },
  {
    id: "zeugma",
    name: "Zeugma",
    pronunciation: "ZOOG-muh",
    category: Category.Structural,
    accentColor: "red",
    shortDefinition: "One word (usually a verb) governing two others in different ways.",
    longDefinition: "Zeugma is a figure of speech in which a single word—usually a verb or an adjective—is grammatically linked to two other words, but it applies to them in different senses (one literal and one figurative). It is a highly clever and witty device that catches the reader by surprise.",
    imageUrl: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "He lost his coat and his temper.", source: "Charles Dickens", type: "Literature", explanation: "'Lost' applies literally to the coat and figuratively to the temper." },
      { text: "She broke his car and his heart.", source: "Pop Lyric", type: "Everyday", explanation: "'Broke' applies to a physical machine and an emotional state." },
      { text: "He took his hat and his leave.", source: "Formal Description", type: "Classic", explanation: "'Took' applies to a physical object and the act of exiting (taking leave)." },
      { text: "You are free to execute your laws and your citizens.", source: "The Hitchhiker's Guide", type: "Literature", explanation: "Satirically uses 'execute' for both enforcement and killing." }
    ],
    nuances: [
      "Mismatch: The power of zeugma comes from the 'clash' between the two meanings of the shared word.",
      "Wit: It is almost always used to show the author's cleverness or for comedic irony.",
      "Efficiency: It is a linguistic 'shortcut' that packs two sentences into one."
    ],
    proTips: [
      "The 'Verb' Selection: Look for verbs that have both a physical and emotional meaning (e.g., 'catch', 'throw', 'loose', 'open').",
      "Surprise: Place the literal item first and the figurative one second for the best 'punchline' effect.",
      "Economy: Use zeugma to keep your prose sharp and avoid repeating the same verb twice."
    ],
    quiz: [
      { question: "Zeugma uses ______ word to govern ______ others.", options: ["One, Two (in different ways).", "Two, One.", "Zero, Many.", "One, Ten."], correctAnswer: 0, explanation: "One word 'pulls' two meanings simultaneously." },
      { question: "In 'He lost his coat and his temper', what is the zeugma word?", options: ["Coat.", "Temper.", "Lost.", "His."], correctAnswer: 2, explanation: "Lost is the verb applying to both items." },
      { question: "Zeugma is usually used for ______.", options: ["Boredom.", "Wit and cleverness.", "Scientific data.", "Geography."], correctAnswer: 1, explanation: "It is a stylistic 'magic trick' with language." },
      { question: "Which is a zeugma?", options: ["She ate an apple.", "She ate an apple and a pear.", "She opened the door and her heart.", "She is tall."], correctAnswer: 2, explanation: "'Opened' is literal for the door and figurative for the heart." },
      { question: "Zeugma catches the reader ______.", options: ["Sleeping.", "By surprise.", "By rhyme.", "Scientifically."], correctAnswer: 1, explanation: "The sudden shift in meaning for the verb is jarring and clever." }
    ]
  },
  {
    id: "enjambment",
    name: "Enjambment",
    pronunciation: "en-JAM-ment",
    category: Category.Structural,
    accentColor: "sky",
    shortDefinition: "The continuation of a sentence past the end of a poetic line.",
    longDefinition: "In poetry, enjambment is the running-over of a sentence or phrase from one poetic line to the next without terminal punctuation. It creates momentum, pulls the reader forward, and can be used to hide a surprising word at the start of the next line.",
    imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "So much depends / upon / a red wheel / barrow.", source: "William Carlos Williams", type: "Literature", explanation: "The extreme enjambment forces the reader to focus on every single word as an object." },
      { text: "I think that I shall never see / A poem lovely as a tree.", source: "Joyce Kilmer", type: "Classic", explanation: "The thought continues past the line break to complete the image." },
      { text: "April is the cruellest month, breeding / Lilacs out of the dead land.", source: "T.S. Eliot", type: "Literature", explanation: "The break after 'breeding' creates a brief moment of tension before 'Lilacs'." },
      { text: "The woods are lovely, dark and deep, / But I have promises to keep.", source: "Robert Frost", type: "Classic", explanation: "The thought flows naturally across the line to provide a reason for moving on." }
    ],
    nuances: [
      "Flow: Enjambment mimics natural speech better than end-stopped lines.",
      "Internal Rhyme Potential: It allows rhymes to be hidden within the flow of a sentence.",
      "Tension: By breaking a sentence in the 'wrong' place, a poet can create micro-suspense."
    ],
    proTips: [
      "Look for Punctuation: If there's no comma, period, or dash at the end of the line, it's enjambed.",
      "Increase Speed: Use enjambment to make your poem feel faster and more urgent.",
      "Opposite: Its opposite is an 'End-Stopped' line, which ends in a firm piece of punctuation."
    ],
    quiz: [
      { question: "Enjambment is found in ______.", options: ["Prose.", "Poetry.", "Legal documents.", "Dictionaries."], correctAnswer: 1, explanation: "It is specifically about the relationship between lines of verse." },
      /* Corrected 'glass of punctuation' to 'lack of punctuation' below */
      { question: "What indicates enjambment?", options: ["A period at the end.", "A rhyme.", "A lack of punctuation at the end of a line.", "Capital letters."], correctAnswer: 2, explanation: "The thought must flow past the line-break." },
      { question: "What is the primary effect of enjambment?", options: ["Stopping the reader.", "Creating flow and momentum.", "Rhyming.", "Ignoring grammar."], correctAnswer: 1, explanation: "It pulls the eye down to the next line." },
      { question: "The opposite of an enjambed line is a ______ line.", options: ["Short.", "Rhyming.", "End-stopped.", "Fast."], correctAnswer: 2, explanation: "End-stopped lines have a firm pause at the end." },
      { question: "Why would a poet break a line in the middle of a thought?", options: ["To confuse.", "To create suspense or hide a surprise.", "They ran out of room.", "By accident."], correctAnswer: 1, explanation: "The 'wait' for the next line adds weight to the next word." }
    ]
  },
  {
    id: "internal-rhyme",
    name: "Internal Rhyme",
    pronunciation: "in-TUR-nuhl RYM",
    category: Category.Sound,
    accentColor: "fuchsia",
    shortDefinition: "A rhyme that occurs within a single line of verse.",
    longDefinition: "Internal rhyme is a poetic device in which a word in the middle of a line rhymes with a word at the end of the same line, or with a word in the middle of the next line. It adds a sophisticated layer of musicality and complexity to a poem, making it feel tighter and more melodic.",
    imageUrl: "https://images.unsplash.com/photo-1518117648329-847039239537?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "Once upon a midnight dreary, while I pondered weak and weary.", source: "Edgar Allan Poe", type: "Literature", explanation: "'Dreary' and 'Weary' rhyme within the same line of 'The Raven'." },
      { text: "Double, double toil and trouble.", source: "Shakespeare", type: "Classic", explanation: "'Double' and 'Trouble' create an internal echo within the witch's chant." },
      { text: "The grain in Spain stays mainly in the plain.", source: "Popular Song", type: "Everyday", explanation: "Uses internal rhymes ('Spain', 'mainly', 'plain') for educational catchiness." },
      { text: "I'm a poet and I didn't even know it.", source: "Common Joke", type: "Everyday", explanation: "'Poet' and 'know it' rhyme internally." }
    ],
    nuances: [
      "Hidden Music: It makes a poem sound more 'perfectly built' than one with only end-rhymes.",
      "Speed: Internal rhymes tend to speed up the pace of a line, as the ear catches the echo more quickly.",
      "Complexity: It is a hallmark of sophisticated songwriting, especially in hip-hop and rap."
    ],
    proTips: [
      "The 'Poe' Method: Use internal rhyme to create a haunting, obsessive mood through repetition.",
      "Lyricism: In song lyrics, use it to make a line 'pop' and become more memorable for the audience.",
      "Don't Overdo: If you have internal rhymes in every single line, it can start to sound like a nursery rhyme."
    ],
    quiz: [
      { question: "Internal rhyme occurs ______.", options: ["Only at the end of lines.", "Within a single line of verse.", "Between different stanzas.", "In the title."], correctAnswer: 1, explanation: "It rhymes words inside the same line." },
      { question: "Which phrase contains an internal rhyme?", options: ["Red car, blue car.", "Big bad wolf.", "The sun was fun today.", "I'm a poet and I know it."], correctAnswer: 3, explanation: "'Poet' and 'know it' rhyme within the sentence." },
      { question: "What is the effect of internal rhyme on pacing?", options: ["Slows it down.", "Speeds it up.", "Stops it.", "No effect."], correctAnswer: 1, explanation: "The quick echo propels the reader forward." },
      { question: "Which genre uses internal rhyme most extensively today?", options: ["Science fiction.", "Hip-hop and Rap.", "Legal writing.", "Instruction manuals."], correctAnswer: 1, explanation: "Flow and intricate rhyming are central to rap." },
      { question: "In 'Poe's Raven', 'dreary' rhymes with ______ in the same line.", options: ["Midnight.", "While.", "Weary.", "Pondered."], correctAnswer: 2, explanation: "'Dreary' and 'weary' are the rhyming pair." }
    ]
  },
  {
    id: "epistrophe",
    name: "Epistrophe",
    pronunciation: "uh-PIS-truh-fee",
    category: Category.Structural,
    accentColor: "indigo",
    shortDefinition: "Repetition of a word or phrase at the end of successive clauses.",
    longDefinition: "Epistrophe is a rhetorical device that involves the repetition of the same word or phrase at the end of successive sentences or clauses. It is the direct opposite of anaphora and is used to hammer a point home, creating a sense of finality, inevitability, and rhetorical power.",
    imageUrl: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "Of the people, by the people, for the people.", source: "Abraham Lincoln", type: "Classic", explanation: "Repeats 'the people' at the end of each phrase to emphasize democracy." },
      { text: "See no evil, hear no evil, speak no evil.", source: "Three Wise Monkeys", type: "Everyday", explanation: "Repeats 'evil' to hammer home the central concept." },
      { text: "Truth, the whole truth, and nothing but the truth.", source: "Legal Oath", type: "Everyday", explanation: "Uses epistrophe to emphasize the absolute nature of the requirement." },
      { text: "When I was a child, I spake as a child, I understood as a child.", source: "Biblical", type: "Classic", explanation: "Repeats 'child' to stress the stage of life being discussed." }
    ],
    nuances: [
      "Finality: Since the repeated word is the last thing the reader hears, it sticks in their mind as the most important.",
      "Rhythm: It creates a 'bell-ringing' effect, where the same sound punctuates every thought.",
      "Opposite: Its counterpart is Anaphora (repetition at the beginning)."
    ],
    proTips: [
      "Closing Arguments: Use epistrophe when you want to finish an argument with absolute authority.",
      /* Corrected 'much glass powerful' to 'much less powerful' below */
      "The 'Hammers' Effect: Choose a very strong, impactful word to repeat. Repeating 'it' or 'the' is much less powerful than repeating 'justice' or 'freedom'.",
      "Combine with Anaphora: Using both together (repetition at start and end) is called Symploce."
    ],
    quiz: [
      { question: "Epistrophe involves repetition at the ______ of sentences.", options: ["Beginning.", "End.", "Middle.", "Title."], correctAnswer: 1, explanation: "It punctuates the conclusion of phrases." },
      { question: "Which is an example of epistrophe?", options: ["I like red, I like blue.", "See no evil, hear no evil.", "Red car, blue car.", "Go home."], correctAnswer: 1, explanation: "It repeats 'evil' at the end of each clause." },
      { question: "What tone does epistrophe often create?", options: ["Uncertainty.", "Finality and emphasis.", "Happiness.", "Speed."], correctAnswer: 1, explanation: "The conclusion feels inevitable and solid." },
      { question: "Lincoln's 'by the people, for the people' is:", options: ["Anaphora.", "Epistrophe.", "Metaphor.", "Alliteration."], correctAnswer: 1, explanation: "The repetition is at the end of the phrases." },
      { question: "Why is epistrophe powerful in speeches?", options: ["It is funny.", "It makes the central word unforgettable.", "It is short.", "It is scientific."], correctAnswer: 1, explanation: "Repeating the key word at the end 'hammers' it into the audience's mind." }
    ]
  },
  {
    id: "anadiplosis",
    name: "Anadiplosis",
    pronunciation: "a-nuh-duh-PLOH-sis",
    category: Category.Structural,
    accentColor: "emerald",
    shortDefinition: "Repeating the last word of a clause at the start of the next.",
    longDefinition: "Anadiplosis is a rhetorical device where the last word or phrase of a sentence is repeated at the beginning of the next sentence. This creates a 'chain link' effect, showing logical progression, cause-and-effect, and building intensity as the thought moves forward.",
    imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "Fear leads to anger. Anger leads to hate. Hate leads to suffering.", source: "Yoda (Star Wars)", type: "Everyday", explanation: "A perfect chain showing how one emotion inevitably leads to the next." },
      { text: "Strength leads to peace. Peace leads to prosperity.", source: "Political Motto", type: "Everyday", explanation: "Shows a logical progression of national goals." },
      { text: "Beg for mercy. Mercy is what you need.", source: "Dramatic Dialogue", type: "Literature", explanation: "Pivots the focus of the scene onto the concept of mercy." },
      { text: "When we win, we win big.", source: "Common Usage", type: "Everyday", explanation: "Simple repetition to emphasize the magnitude of victory." }
    ],
    nuances: [
      "Logic Chain: It is the primary tool for showing that Step A leads to Step B, which leads to Step C.",
      "Emphasis: Repeating the word ensures the reader doesn't lose the thread of the argument.",
      "Climactic Effect: Often used to build up to a grand conclusion (gradatio)."
    ],
    proTips: [
      "Building a Ladder: Think of anadiplosis as building a ladder for the reader to climb. Each repeated word is a rung.",
      "Cause and Effect: Use it in persuasive writing to show the consequences of an action.",
      "Consistency: The repeated word should have the same meaning in both places for the 'link' to be strong."
    ],
    quiz: [
      { question: "Anadiplosis creates a ______ effect.", options: ["Circular.", "Chain link.", "Broken.", "Silent."], correctAnswer: 1, explanation: "It connects the end of one thought to the start of the next." },
      { question: "'Fear leads to anger. Anger leads to hate' uses it to show:", options: ["Rhyme.", "Logical progression/Cause and effect.", "Metaphor.", "Simile."], correctAnswer: 1, explanation: "It demonstrates how one thing causes another." },
      { question: "Where does the repetition occur in anadiplosis?", options: ["Start and End of the same sentence.", "End of one and Start of the next.", "Beginning of both.", "End of both."], correctAnswer: 1, explanation: "It is the 'bridge' between two clauses." },
      { question: "It makes a conclusion feel ______.", options: ["Accidental.", "Inevitable or logically sound.", "Wrong.", "Silly."], correctAnswer: 1, explanation: "The steps leading there are made very clear." },
      { question: "Which is anadiplosis?", options: ["I like red, I like blue.", "I like red. Red is a color.", "Red is nice.", "I like red and blue."], correctAnswer: 1, explanation: "Red ends the first and starts the second." }
    ]
  },
  {
    id: "anthropomorphism",
    name: "Anthropomorphism",
    pronunciation: "an-thruh-puh-MOR-fi-zum",
    category: Category.Comparison,
    accentColor: "amber",
    shortDefinition: "Animals literally acting as human characters.",
    longDefinition: "Anthropomorphism is the literal attribution of human traits, emotions, and behaviors to non-human entities, specifically animals. Unlike personification, which is usually a figurative description ('the wind sighed'), anthropomorphism involves animals becoming full characters who talk, wear clothes, have jobs, and exhibit human psychology.",
    imageUrl: "https://images.unsplash.com/photo-1541411194564-99d2112e4438?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "Mickey Mouse.", source: "Walt Disney", type: "Everyday", explanation: "A mouse that wears gloves, drives a car, and has a social life." },
      { text: "Animal Farm.", source: "George Orwell", type: "Literature", explanation: "The pigs literally run a government and walk on two legs." },
      { text: "Winnie the Pooh.", source: "A.A. Milne", type: "Classic", explanation: "A bear who has complex thoughts, friends, and an addiction to honey." },
      { text: "Bugs Bunny.", source: "Looney Tunes", type: "Everyday", explanation: "A rabbit who uses logic and wit to outsmart humans." }
    ],
    nuances: [
      "Literal vs. Figurative: If the animal *literally* acts like a person, it is anthropomorphism. If it is only *described* as being like a person, it's personification.",
      "Fables: Most fables use anthropomorphism to make moral lessons more digestible and universal.",
      "Satire Tool: Allows authors to criticize human society safely by using animals as proxies."
    ],
    proTips: [
      "The 'Pants' Test: If the animal is wearing clothes and driving a car, you are probably looking at anthropomorphism.",
      "Gods as Animals: In many mythologies, gods appear as anthropomorphized animals (e.g., Anubis in Egypt).",
      "Empathy: Use it to make non-human characters relatable to human readers."
    ],
    quiz: [
      { question: "Anthropomorphism is ______ human traits to animals.", options: ["Removing.", "Literally attributing.", "Comparing.", "Rhyming."], correctAnswer: 1, explanation: "It makes them act like real human characters." },
      { question: "Which is an example?", options: ["The dog barked.", "The dog told me to have a nice day.", "The dog is like a man.", "The dog is furry."], correctAnswer: 1, explanation: "A talking dog is an anthropomorphized character." },
      { question: "How is it different from personification?", options: ["It is only for plants.", "It involves literal behavior, not just figurative description.", "It is only for the weather.", "It is a lie."], correctAnswer: 1, explanation: "Anthro = character, Personification = description." },
      { question: "Which book uses anthropomorphism for political satire?", options: ["Animal Farm.", "The Great Gatsby.", "Romeo and Juliet.", "The Bible."], correctAnswer: 0, explanation: "The pigs and horses represent political classes." },
      { question: "Mickey Mouse wearing gloves is an example of:", options: ["Simile.", "Anthropomorphism.", "Zoomorphism.", "Irony."], correctAnswer: 1, explanation: "Wearing human clothing is a literal human trait." }
    ]
  },
  {
    id: "chiasmus",
    name: "Chiasmus",
    pronunciation: "ky-AZ-muhs",
    category: Category.Structural,
    accentColor: "rose",
    shortDefinition: "Reversing the word order of two parallel clauses (AB-BA).",
    longDefinition: "Chiasmus is a rhetorical device in which two or more clauses are balanced against each other by the reversal of their structures. Named after the Greek letter 'Chi' (X), it creates a 'mirrored' or 'crossed' effect that sounds profound, balanced, and highly memorable.",
    imageUrl: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "Ask not what your country can do for you; ask what you can do for your country.", source: "John F. Kennedy", type: "Classic", explanation: "Country/You (A-B) -> You/Country (B-A)." },
      { text: "Eat to live, not live to eat.", source: "Molière", type: "Classic", explanation: "Eat/Live (A-B) -> Live/Eat (B-A)." },
      { text: "I said what I meant, and I meant what I said.", source: "Dr. Seuss", type: "Classic", explanation: "Said/Meant (A-B) -> Meant/Said (B-A)." },
      { text: "When the going gets tough, the tough get going.", source: "Common Phrase", type: "Everyday", explanation: "Going/Tough (A-B) -> Tough/Going (B-A)." }
    ],
    nuances: [
      "Symmetry: It provides a sense of intellectual 'closure' or completeness to an idea.",
      "The 'X' Shape: If you draw lines between the corresponding words, they form an X.",
      "Memorability: Because of its clever structure, the brain finds it very easy to store and recall."
    ],
    proTips: [
      "Wisdom Quotes: If you want a character to sound incredibly wise or authoritative, give them a chiastic statement.",
      "Contrast: Use chiasmus to show a reversal of fortune or a change in perspective (e.g., 'The first shall be last, and the last shall be first').",
      "Balance: Ensure that both halves of the chiasmus have a similar rhythm or 'weight'."
    ],
    quiz: [
      { question: "Chiasmus follows which structural pattern?", options: ["A-B-A-B.", "A-B-B-A.", "A-A-B-B.", "A-B-C-D."], correctAnswer: 1, explanation: "It reverses the structure in the second half." },
      { question: "The word comes from the Greek letter ______.", options: ["Alpha.", "Beta.", "Chi (X).", "Omega."], correctAnswer: 2, explanation: "The 'X' represents the crossing structure of the words." },
      { question: "Which is a chiasmus?", options: ["I love cake and I love pie.", "Nice wheels.", "You can take the boy out of the country, but you can't take the country out of the boy.", "The sun is hot."], correctAnswer: 2, explanation: "Boy/Country -> Country/Boy." },
      { question: "What tone does chiasmus often convey?", options: ["Confusion.", "Balanced wisdom or finality.", "Anger.", "Speed."], correctAnswer: 1, explanation: "The symmetry makes the idea sound well-considered and true." },
      { question: "'Eat to live, not live to eat' is chiasmus because:", options: ["It uses 'to'.", "It flips the order of 'eat' and 'live'.", "It is about food.", "It rhymes."], correctAnswer: 1, explanation: "The second half mirrors and reverses the first." }
    ]
  },
  {
    id: "epithet",
    name: "Epithet",
    pronunciation: "E-puh-thet",
    category: Category.Emphasis,
    accentColor: "blue",
    shortDefinition: "A descriptive title or phrase used to characterize a person.",
    longDefinition: "An epithet is a descriptive literary device that describes a place, a thing, or a person in such a way that it helps in making their characteristics more prominent than they actually are. Often, these epithets become part of the person's name or are used as a fixed title for a hero.",
    imageUrl: "https://images.unsplash.com/photo-1545167622-3a6ac756aff4?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "Grey-eyed Athena.", source: "Homer (The Odyssey)", type: "Classic", explanation: "A fixed description used every time the goddess is mentioned." },
      { text: "The Great Emancipator.", source: "History", type: "Everyday", explanation: "An epithet for Abraham Lincoln emphasizing his role in ending slavery." },
      { text: "Richard the Lionheart.", source: "History", type: "Classic", explanation: "An epithet describing the King's extreme bravery." },
      { text: "The King of Pop.", source: "Music History", type: "Everyday", explanation: "An epithet for Michael Jackson defining his status in music." }
    ],
    nuances: [
      "Fixed Epithet: Common in epic poetry, where a specific adjective is permanently attached to a noun (e.g., 'Swift-footed Achilles').",
      "Transferred Epithet: When an adjective describes a noun other than the one it actually belongs to (e.g., 'a weary road'—the road isn't weary, the person walking on it is).",
      "Personal Brand: In modern times, epithets function like personal branding."
    ],
    proTips: [
      "World-Building: Give your legendary characters 'Heroic Epithets' to make them feel historical and weightier.",
      "Character Traits: Use epithets to emphasize a character's defining flaw or virtue (e.g., 'Ivan the Terrible').",
      "Avoid Repetition: Use an epithet as a pronoun to avoid repeating the character's name too often."
    ],
    quiz: [
      { question: "An epithet is a ______ used to describe someone.", options: ["Long poem.", "Descriptive title or phrase.", "Scientific name.", "Secret."], correctAnswer: 1, explanation: "It highlights a defining characteristic." },
      { question: "Which is an epithet?", options: ["John is tall.", "Alexander the Great.", "A big tree.", "The blue car."], correctAnswer: 1, explanation: "'The Great' is the descriptive title attached to the name." },
      { question: "In 'Grey-eyed Athena', the phrase 'Grey-eyed' is a ______ epithet.", options: ["Transferred.", "Fixed.", "Broken.", "Silent."], correctAnswer: 1, explanation: "It is a permanent descriptor in epic poetry." },
      { question: "What is a 'Transferred Epithet'?", options: ["An adjective describing an unrelated noun (e.g., 'happy day').", "A title.", "A nickname.", "A mistake."], correctAnswer: 0, explanation: "The emotion of the person is transferred to the setting." },
      { question: "Epithets are most common in ______.", options: ["Text messages.", "Epic Poetry and History.", "Instruction manuals.", "Menus."], correctAnswer: 1, explanation: "They help characterize heroes and leaders across history." }
    ]
  },
  {
    id: "kenning",
    name: "Kenning",
    pronunciation: "KEN-ing",
    category: Category.Comparison,
    accentColor: "teal",
    shortDefinition: "A metaphorical compound name for something.",
    longDefinition: "A kenning is a stylistic device defined as a two-word metaphorical name for something, such as 'whale-road' for the sea. It was a hallmark of Old English and Old Norse poetry, functioning as a mini-riddle that characterizes the object through its actions or associations.",
    imageUrl: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "Whale-road (for 'the sea').", source: "Beowulf", type: "Classic", explanation: "Describes the ocean as a path for whales." },
      { text: "Sky-candle (for 'the sun').", source: "Old English Poetry", type: "Classic", explanation: "Describes the sun as a light source for the heavens." },
      { text: "Ankle-biter (for 'a small child').", source: "Modern Slang", type: "Everyday", explanation: "A modern kenning describing height and behavior." },
      { text: "Fender-bender (for 'a minor car crash').", source: "Common Usage", type: "Everyday", explanation: "Describes the event through the part of the car affected." }
    ],
    nuances: [
      "Mini-Riddle: The reader must 'decode' the two words to understand what is being discussed.",
      "Compound Words: Usually hyphenated or joined (e.g., 'battle-sweat' for blood).",
      "Cultural Flavor: Kennings provide an immediate sense of ancient, heroic, or Nordic atmosphere."
    ],
    proTips: [
      "Avoid Plain Names: If you are writing fantasy or historical fiction, replace common nouns with kennings (e.g., 'steel-song' for a battle).",
      "Metaphorical Formula: Take an object and its relationship to something else (e.g., 'Ship of the Desert' for a camel).",
      "Creativity: Invent new kennings to describe modern technology (e.g., 'Pocket-brain' for a smartphone)."
    ],
    quiz: [
      { question: "A kenning is a metaphorical ______ word.", options: ["Action.", "Compound (two-word).", "Silent.", "Scientific."], correctAnswer: 1, explanation: "It joins two words to describe one thing." },
      { question: "In Old English, 'Whale-road' meant:", options: ["A freeway.", "The sea.", "A ship.", "A fish."], correctAnswer: 1, explanation: "It is the 'road' that whales travel on." },
      { question: "Kennings function like a ______.", options: ["Joke.", "Mini-riddle.", "Fact.", "Instruction."], correctAnswer: 1, explanation: "The reader must figure out the hidden meaning of the pair." },
      { question: "Which is a modern kenning?", options: ["Red apple.", "Ankle-biter (child).", "Fast car.", "Blue sky."], correctAnswer: 1, explanation: "It metaphorically describes a child through their height." },
      { question: "In 'Sky-candle', the 'candle' part describes the sun's ______.", options: ["Heat.", "Brightness/Light.", "Size.", "Shape."], correctAnswer: 1, explanation: "It is the light source of the sky." }
    ]
  },
  {
    id: "bathos",
    name: "Bathos",
    pronunciation: "BAY-thos",
    category: Category.Indirect,
    accentColor: "purple",
    shortDefinition: "An abrupt transition from the sublime to the ridiculous.",
    longDefinition: "Bathos is an unintended or deliberate transition by a writer from a high, sublime, or noble style to a commonplace or ridiculous one. Often called an 'anticlimax', it is used for comedic effect or to expose the silliness of a character's overly dramatic behavior.",
    imageUrl: "https://images.unsplash.com/photo-1517030330234-94c4fa948ebc?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "He lost his kingdom, his power, and his pen.", source: "Alexander Pope (Satire)", type: "Classic", explanation: "Ends a list of grand losses with a trivial one, undercutting the drama." },
      { text: "The ballet was beautiful, moving, and far too long.", source: "Review", type: "Everyday", explanation: "Ends praise with a mundane complaint." },
      { text: "She fought for God, for country, and for pie.", source: "Satire", type: "Literature", explanation: "Juxtaposes high ideals with a low, everyday desire." },
      { text: "The mountain labored and brought forth a mouse.", source: "Aesop", type: "Classic", explanation: "Describes a huge build-up resulting in a tiny, pathetic outcome." }
    ],
    nuances: [
      "Anticlimax: It is the 'let-down' of a story.",
      "Satirical Power: It is a lethal weapon for mocking pompous or self-important people.",
      "Unintended Bathos: Sometimes a writer tries to be serious but fails so badly it becomes funny (this is bad writing!)."
    ],
    proTips: [
      "Rule of Three: Place two grand items followed by one trivial one (e.g., 'Life, Liberty, and a decent WiFi connection').",
      "Undercutting Drama: Use bathos to show a character is not as profound as they think they are.",
      "Comedy: It is a reliable way to get a laugh by subverting expectations of seriousness."
    ],
    quiz: [
      { question: "Bathos is a drop from ______ to ______.", options: ["Low to High.", "Sublime (high) to Ridiculous (low).", "Past to Future.", "English to French."], correctAnswer: 1, explanation: "It is the 'anticlimax'." },
      { question: "What is the usual goal of deliberate bathos?", options: ["To make the reader cry.", "Comedy or Satire.", "To fix grammar.", "To be scientific."], correctAnswer: 1, explanation: "It mocks overly serious or dramatic styles." },
      { question: "In 'He lost his kingdom and his pen', what creates bathos?", options: ["The kingdom.", "The loss.", "The trivial item 'pen' after 'kingdom'.", "The word 'and'."], correctAnswer: 2, explanation: "The mismatch between the importance of the two items." },
      { question: "What is 'Unintended Bathos'?", options: ["A joke.", "A writer trying to be serious but failing and sounding silly.", "A rhyme.", "A fact."], correctAnswer: 1, explanation: "Bad writing that accidentally becomes funny." },
      { question: "The opposite of bathos (anticlimax) is ______.", options: ["Alliteration.", "Climax.", "Simile.", "Metaphor."], correctAnswer: 1, explanation: "Climax builds up; bathos drops down." }
    ]
  },
  {
    id: "anaphora",
    name: "Anaphora",
    pronunciation: "uh-NAF-uh-ruh",
    category: Category.Structural,
    accentColor: "indigo",
    shortDefinition: "Repetition of a word or phrase at the beginning of successive clauses.",
    longDefinition: "Anaphora is a rhetorical device that consists of repeating a sequence of words at the beginnings of neighboring clauses, thereby lending them emphasis. It is one of the oldest rhetorical devices, used to build rhythm, intensity, and a sense of mounting importance.",
    imageUrl: "https://images.unsplash.com/photo-1513001900722-370f803f498d?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "I have a dream... I have a dream... I have a dream...", source: "Martin Luther King Jr.", type: "Classic", explanation: "Repeats the phrase to hammer home his central vision." },
      { text: "We shall fight on the beaches, we shall fight on the landing grounds...", source: "Winston Churchill", type: "Classic", explanation: "Repetition creates a sense of unstoppable determination." },
      { text: "Every day, every night, in every way, I am getting better.", source: "Self-Help", type: "Everyday", explanation: "Repeats 'every' to show consistency." },
      { text: "Go big or go home.", source: "Sports Slogan", type: "Everyday", explanation: "Uses anaphora to create a simple, forceful choice." }
    ],
    nuances: [
      "Momentum: It acts as a 'hook' that pulls the audience through a long list of ideas.",
      "Emotional Intensity: It shows that the speaker is passionate and focused on a single theme.",
      "Opposite: Its counterpart is Epistrophe (repetition at the end)."
    ],
    proTips: [
      "The Power of Three: Anaphora usually feels most 'right' when the phrase is repeated three times.",
      "Grand Vision: Use anaphora when you want to describe a grand future or a deep tragedy.",
      "Vary the length: Follow a series of long anaphoric sentences with one very short one for maximum impact."
    ],
    quiz: [
      { question: "Anaphora involves repetition at the ______ of clauses.", options: ["Beginning.", "End.", "Middle.", "Title."], correctAnswer: 0, explanation: "It leads the sentence with the repeated phrase." },
      { question: "Example of anaphora:", options: ["I like red, you like blue.", "It was the best of times, it was the worst of times.", "Happy days are here.", "Run fast."], correctAnswer: 1, explanation: "It repeats 'It was the' at the start of both clauses." },
      { question: "Where is anaphora most commonly used?", options: ["Recipes.", "Legal oaths.", "Great Speeches and Poetry.", "Technical manuals."], correctAnswer: 2, explanation: "It is a persuasive and musical device." },
      { question: "What is the primary effect of anaphora?", options: ["Confusing the reader.", "Building rhythm and intensity.", "Shortening text.", "Ignoring grammar."], correctAnswer: 1, explanation: "It creates a mounting emotional 'pulse'." },
      { question: "The opposite of anaphora is ______.", options: ["Epistrophe.", "Metaphor.", "Simile.", "Pun."], correctAnswer: 0, explanation: "Epistrophe is repetition at the end." }
    ]
  },
  {
    id: "parallelism",
    name: "Parallelism",
    pronunciation: "PA-ruh-le-li-zum",
    category: Category.Structural,
    accentColor: "emerald",
    shortDefinition: "The use of successive verbal constructions that correspond in structure.",
    longDefinition: "Parallelism is the use of components in a sentence that are grammatically the same; or similar in their construction, sound, meaning, or meter. It adds balance, rhythm, and clarity to sentences, making them much easier for the brain to process and remember.",
    imageUrl: "https://images.unsplash.com/photo-1493246507139-91e8bef99c17?auto=format&fit=crop&q=80&w=800",
    examples: [
      { text: "Easy come, easy go.", source: "Common Phrase", type: "Everyday", explanation: "Balances the structure of two adjective-verb pairs perfectly." },
      { text: "Flying is fast, comfortable, and safe.", source: "Travel List", type: "Everyday", explanation: "Uses three parallel adjectives to describe the action." },
      { text: "What you see is what you get.", source: "Common Phrase", type: "Everyday", explanation: "Two balanced clauses create a sense of directness and truth." },
      { text: "To read is to learn; to learn is to grow.", source: "Educational Motto", type: "Everyday", explanation: "Uses balanced infinitive phrases ('to...') to show progression." }
    ],
    nuances: [
      "Symmetry: It provides a 'skeleton' of logic to a complex thought.",
      "Grammar Rule: Breaking parallelism (e.g., 'I like swimming, hiking, and to run') is a common grammatical error.",
      "Rhetorical Style: It is the foundation of all oratorical devices like anaphora and chiasmus."
    ],
    proTips: [
      "Editing: If you have a list in a sentence, ensure every item starts with the same type of word (e.g., all verbs or all nouns).",
      "Clarity: Use parallelism when you are explaining complex instructions or multi-part arguments.",
      "Memorability: Patterns are 'sticky'. If you want someone to remember your advice, put it in a parallel structure."
    ],
    quiz: [
      { question: "Parallelism requires components to be ______.", options: ["Grammatically similar.", "Different.", "Rhyming.", "Opposite."], correctAnswer: 0, explanation: "The structure must match (e.g., all -ing words)." },
      { question: "Which shows parallelism?", options: ["I like to read, singing, and dogs.", "I like reading, singing, and dancing.", "Read and singing.", "Fun books."], correctAnswer: 1, explanation: "All three items are in the same '-ing' form." },
      { question: "What is the primary effect of parallelism?", options: ["Confusion.", "Rhythm, balance, and clarity.", "Anger.", "Suspense."], correctAnswer: 1, explanation: "It makes sentences feel 'ordered' and logical." },
      { question: "'Easy come, easy go' is parallel because it:", options: ["Rhymes.", "Balances the structure of both halves.", "Is short.", "Is slang."], correctAnswer: 1, explanation: "It mirrors the word types in both phrases." },
      { question: "Breaking parallelism is usually a ______.", options: ["Genius move.", "Grammatical error.", "Requirement.", "Poem."], correctAnswer: 1, explanation: "It makes sentences sound clunky and hard to follow." }
    ]
  }
];