const Suggestions = [
  "React",
  "React Native",
  "Biotech",
  "Biology",
  "Computer Science",
  "Data Science",
  "Electrical Engineering",
  "Aerospace Engineering",
  "Oceans",
  "Earth",
  "Chemistry",
  "Physics",
  "Elon Musk",
  "Google",
  "music making",
  "ai",
  "photography",
  "digital marketing",
  "web design",
  "data analysis",
  "creative writing",
  "accounting",
  "language learning",
  "yoga instructor",
  "machine learning",
  "culinary arts",
  "guitar lessons",
  "Microsoft Excel",
  "financial planning",
  "public speaking",
  "e-commerce",
  "Java programming",
  "data visualization",
  "graphic design",
  "fitness training",
  "mobile app development",
  "game design",
  "blockchain technology",
  "interior design",
  "video editing",
  "cybersecurity",
  "fashion design",
  "psychology",
  "business management",
  "animation",
  "self-defense",
  "art history",
  "french language",
  "singing lessons",
  "SQL programming",
  "personal finance",
  "marketing strategy",
  "entrepreneurship",
  "UX/UI design",
  "environmental science",
  "leadership skills",
  "computer science",
  "real estate investing",
  "public relations",
  "mechanical engineering",
  "biology",
  "philosophy",
  "hiking",
  "cooking classes",
  "creative thinking",
  "film production",
  "robotics",
  "gardening",
  "sociology",
  "geology",
  "web development",
  "video production",
  "AI ethics",
  "cryptocurrency",
  "product management",
  "calligraphy",
  "health and wellness",
  "piano lessons",
  "Python programming",
  "astronomy",
  "music theory",
  "project management",
  "child psychology",
  "kitchen skills",
  "public health",
  "business analytics",
  "dance classes",
  "history of art",
  "Spanish language",
  "sustainable living",
  "communication skills",
  "mobile photography",
  "game development",
  "nutrition",
  "physics",
  "interpersonal relationships",
  "chemistry",
  "business ethics",
  "martial arts",
  "environmental conservation",
  "network security",
  "fashion styling",
  "machine vision",
  "vocal coaching",
  "statistics",
  "sales training",
  "UX research",
  "writing fiction",
  "financial modeling",
  "public speaking anxiety",
  "design thinking",
  "climate change",
  "human anatomy",
  "business communication",
  "branding",
  "baking",
  "music production",
  "data engineering",
  "psychiatry",
  "fitness nutrition",
  "creative problem-solving",
  "photography composition",
  "web development frameworks",
  "AI for healthcare",
  "graphic design software",
  "language interpretation",
  "yoga for stress relief",
  "data science tools",
  "culinary techniques",
  "guitar chords",
  "Excel formulas",
  "investment strategies",
  "presentation skills",
  "robotic process automation",
  "organic gardening",
  "sociological theories",
  "earth science",
  "front-end development",
  "video editing software",
  "cybersecurity fundamentals",
  "fashion design trends",
  "cognitive psychology",
  "business leadership",
  "animation software",
  "self-defense techniques",
  "art history movements",
  "french cuisine",
  "singing techniques",
  "SQL database management",
  "personal finance planning",
  "marketing campaign",
  "startup entrepreneurship",
  "UX/UI design principles",
  "environmental sustainability",
  "leadership development",
  "computer programming",
  "real estate investment strategies",
  "public relations management",
  "mechanical engineering principles",
  "biology basics",
  "philosophical concepts",
  "hiking trails",
  "cooking techniques",
  "creative thinking exercises",
  "film production process",
  "robotics programming",
  "gardening tips",
  "sociological research",
  "geological phenomena",
  "web development tools",
  "video production equipment",
  "AI algorithms",
  "cryptocurrency trends",
  "product management frameworks",
  "calligraphy styles",
  "health and fitness tips",
  "piano playing techniques",
  "Python coding practices",
  "astronomical phenomena",
  "music theory fundamentals",
  "project management methodologies",
  "child psychology principles",
  "kitchen organization",
  "public health policies",
  "business analytics tools",
  "dance styles",
  "art history periods",
  "Spanish language proficiency",
  "sustainable living practices",
  "communication strategies",
  "mobile photography tips",
  "game development process",
  "nutrition guidelines",
  "physics theories",
  "interpersonal skills",
  "chemical reactions",
  "business ethics principles",
  "martial arts disciplines",
  "environmental conservation efforts",
  "network security protocols",
  "fashion styling techniques",
  "machine vision applications",
  "vocal coaching methods",
  "statistical analysis",
  "sales techniques",
  "UX research methodologies",
  "fiction writing techniques",
  "financial modeling principles",
  "public speaking confidence",
  "design thinking processes",
  "climate change effects",
  "human anatomy studies",
  "business communication strategies",
  "branding principles",
  "baking recipes",
  "music production software",
  "data engineering tools",
  "psychiatric disorders",
  "fitness nutrition guidelines",
  "creative problem-solving approaches",
  "photography composition techniques",
  "web development languages",
  "AI applications in healthcare",
  "graphic design principles",
  "language interpretation techniques",
  "yoga for mental well-being",
  "data science techniques",
  "culinary artistry",
  "guitar playing techniques",
  "Excel data analysis",
  "investment portfolio management",
  "presentation skills development",
  "robotic process automation tools",
  "organic gardening practices",
  "sociological studies",
  "earth science concepts",
  "front-end development frameworks",
  "video editing techniques",
  "cybersecurity best practices",
  "fashion design principles",
  "cognitive psychology theories",
  "business leadership skills",
  "animation production process",
  "self-defense strategies",
  "art history movements and styles",
  "French language fluency",
  "vocal performance techniques",
  "SQL database administration",
  "personal finance management",
  "marketing strategy planning",
  "startup entrepreneurship strategies",
  "UX/UI design best practices",
  "environmental sustainability initiatives",
  "leadership development programs",
  "computer programming languages",
  "real estate investment insights",
  "public relations strategies",
  "mechanical engineering applications",
  "biology experiments",
  "philosophical discussions",
  "hiking destinations",
  "cooking recipes and tips",
  "creative thinking methods",
  "film production equipment",
  "robotics engineering",
  "gardening secrets",
  "sociological case studies",
  "geological research findings",
  "web development frameworks and libraries",
  "video production techniques",
  "AI in education",
  "cryptocurrency investments",
  "product management tools",
  "calligraphy artistry",
  "health and wellness practices",
  "piano playing skills",
  "Python coding projects",
  "astronomy discoveries",
  "music theory lessons",
  "project management software",
  "child psychology insights",
  "kitchen skills improvement",
  "public health awareness",
  "business analytics methodologies",
  "dance techniques and styles",
  "art history analysis",
  "Spanish language courses",
  "sustainable living tips",
  "communication skills enhancement",
  "mobile photography tricks",
  "game development strategies",
  "nutrition and diet tips",
  "physics principles",
  "interpersonal relationships advice",
  "chemical reactions explanations",
  "business ethics in practice",
  "martial arts training",
  "environmental conservation projects",
  "network security strategies",
  "fashion styling trends",
  "machine vision technologies",
  "vocal coaching lessons",
  "statistical analysis methods",
  "sales tactics and techniques",
  "UX research tools and practices",
  "fiction writing inspiration",
  "financial modeling examples",
  "public speaking tips and tricks",
  "design thinking principles",
  "climate change solutions",
  "human anatomy studies",
  "business communication strategies",
  "branding techniques",
  "baking ideas and recipes",
  "music production equipment",
  "data engineering best practices",
  "psychiatric disorders understanding",
  "fitness nutrition guidance",
  "creative problem-solving strategies",
  "photography composition ideas",
  "web development tutorials",
  "AI in finance",
  "graphic design inspiration",
  "language interpretation best practices",
  "yoga for physical health",
  "data science case studies",
  "culinary arts schools and programs",
  "guitar playing styles",
  "Excel data analysis techniques",
  "investment strategies and tips",
  "presentation skills improvement",
  "robotic process automation implementation",
  "organic gardening techniques",
  "sociological research methods",
  "earth science exploration",
  "front-end development tools",
  "video editing software reviews",
  "cybersecurity threats and solutions",
  "fashion design innovation",
  "cognitive psychology research",
  "business leadership development",
  "animation production tips",
  "self-defense techniques and practices",
  "art history periods and movements",
  "French language learning resources",
  "vocal performance improvement",
  "SQL database management skills",
  "personal finance and investment strategies",
  "marketing strategy development",
  "startup entrepreneurship guidance",
  "UX/UI design trends",
  "environmental sustainability practices",
  "leadership development resources",
  "computer programming best practices",
  "real estate investment opportunities",
  "public relations management techniques",
  "mechanical engineering applications",
  "biology research findings",
  "philosophical ideas and debates",
  "hiking destinations and trails",
  "cooking techniques and recipes",
  "creative thinking exercises and methods",
  "film production equipment reviews",
  "robotics engineering principles",
  "gardening secrets and tips",
  "sociological case studies and analysis",
  "geological research discoveries",
  "web development frameworks and libraries",
  "video production techniques and equipment",
  "AI applications in education and e-learning",
  "cryptocurrency investments and strategies",
  "product management tools and resources",
  "calligraphy artistry techniques",
  "health and wellness practices and tips",
  "piano playing skills improvement",
  "Python coding projects and exercises",
  "astronomy discoveries and phenomena",
  "music theory lessons and fundamentals",
  "project management software reviews",
  "child psychology insights and theories",
  "kitchen skills and organization tips",
  "public health awareness and policies",
  "business analytics methodologies and tools",
  "dance techniques and styles in dance",
  "art history analysis and interpretation",
  "Spanish language courses and lessons",
  "sustainable living tips and practices",
  "communication skills enhancement and strategies",
  "mobile photography tricks and techniques",
  "game development strategies and tips",
  "nutrition and diet tips and advice",
  "physics principles and concepts",
  "interpersonal relationships advice and guidance",
  "chemical reactions explanations and examples",
  "business ethics in practice and ethics",
  "martial arts training and disciplines",
  "environmental conservation projects and efforts",
  "network security strategies and best practices",
  "fashion styling trends and techniques",
  "machine vision technologies and applications",
  "vocal coaching lessons and practices",
  "statistical analysis methods and tools",
  "sales tactics and techniques in sales",
  "UX research tools and practices in UX research",
  "fiction writing inspiration and creativity",
  "financial modeling examples and principles",
  "public speaking tips and tricks in public speaking",
  "design thinking principles and approaches",
  "climate change solutions and impact",
  "human anatomy studies and knowledge",
  "business communication strategies and skills",
  "branding techniques and strategies in branding",
  "baking ideas and recipes for baking",
  "music production equipment and software",
  "data engineering best practices in data engineering",
  "psychiatric disorders understanding and awareness",
  "fitness nutrition guidance and tips",
  "creative problem-solving strategies and approaches",
  "photography composition ideas and techniques",
  "web development tutorials and resources",
  "AI in finance and financial applications",
  "graphic design inspiration and design concepts",
  "language interpretation best practices and techniques",
  "yoga for physical health and mental well-being",
  "data science case studies and data analysis",
  "culinary arts schools and culinary programs",
  "guitar playing styles and techniques",
  "Excel data analysis techniques and formulas",
  "investment strategies and investment advice",
  "presentation skills improvement and public speaking",
  "robotic process automation implementation and RPA",
  "organic gardening techniques and practices",
  "sociological research methods and sociological studies",
  "earth science exploration and earth science concepts",
  "front-end development tools and front-end development",
  "video editing software reviews and video production",
  "cybersecurity threats and solutions in cybersecurity",
  "fashion design innovation and fashion design trends",
  "cognitive psychology research and cognitive psychology",
  "business leadership development and leadership skills",
  "animation production tips and animation techniques",
  "self-defense techniques and self-defense strategies",
  "art history periods and movements in art history",
  "French language learning resources and language learning",
  "vocal performance improvement and vocal coaching",
  "SQL database management skills and SQL database",
  "personal finance and investment strategies in finance",
  "marketing strategy development and marketing strategy",
  "startup entrepreneurship guidance and startup strategies",
  "UX/UI design trends and UX/UI design principles",
  "environmental sustainability practices and initiatives",
  "leadership development resources and leadership programs",
  "computer programming best practices and programming",
  "real estate investment opportunities and real estate",
  "public relations management techniques and PR management",
  "mechanical engineering applications and mechanical engineering",
  "biology research findings and biology experiments",
  "philosophical ideas and debates in philosophy",
  "hiking destinations and hiking trails",
  "cooking techniques and cooking recipes",
  "creative thinking exercises and creative thinking methods",
  "film production equipment reviews and film production",
  "robotics engineering principles and robotics programming",
  "gardening secrets and gardening tips",
  "sociological case studies and sociological research",
];

function suggestCourse(searchTerm: string) {
  const results = Suggestions.filter((suggestion) =>
    suggestion.toLowerCase().startsWith(searchTerm.toLowerCase())
  ).slice(0, 10);
  return results;
}

export default suggestCourse;
