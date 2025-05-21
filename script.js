const programmingWords = [
  "algorithm", "array", "api", "argument", "async", "attribute", "backend", "binary", "boolean", "bug",
  "build", "cache", "callback", "class", "client", "closure", "code", "compile", "component", "condition",
  "constant", "constructor", "console", "continue", "control", "cron", "css", "database", "debug", "declare",
  "default", "define", "deploy", "dependency", "destructor", "devops", "directive", "dom", "download", "dynamic",
  "else", "emulator", "encode", "encryption", "enum", "environment", "error", "event", "exception", "execute",
  "export", "expression", "extends", "false", "fetch", "field", "file", "filter", "finally", "float",
  "for", "foreach", "fork", "framework", "function", "git", "global", "hash", "heap", "hook",
  "html", "http", "if", "import", "index", "inheritance", "input", "insert", "instance", "integer",
  "interface", "interpreter", "iterator", "java", "javascript", "json", "key", "keyword", "kotlin", "lambda",
  "library", "link", "linux", "list", "load", "local", "loop", "main", "map", "memory",
  "method", "middleware", "module", "mutable", "namespace", "node", "null", "object", "operator", "output",
  "override", "package", "parameter", "parse", "patch", "php", "pointer", "polling", "port", "post",
  "print", "private", "process", "promise", "property", "protocol", "proxy", "public", "push", "python",
  "query", "queue", "random", "react", "recursion", "refactor", "regex", "register", "release", "render",
  "repository", "request", "require", "response", "return", "route", "ruby", "runtime", "sanitize", "save",
  "schedule", "scope", "script", "sdk", "search", "select", "serialize", "server", "service", "session",
  "set", "shell", "singleton", "socket", "software", "sort", "source", "sql", "stack", "state",
  "static", "storage", "stream", "string", "struct", "style", "submit", "super", "switch", "synchronize",
  "syntax", "system", "tag", "task", "template", "terminal", "test", "thread", "throw", "token",
  "tool", "transpile", "true", "try", "type", "typescript", "ui", "undefined", "uninstall", "unit",
  "update", "upload", "url", "use", "user", "util", "utility", "validate", "var", "variable",
  "vector", "version", "view", "virtual", "void", "wait", "warn", "web", "webpack", "while",
  "window", "with", "worker", "wrapper", "write", "xml", "yaml", "yield", "zip", "access",
  "acl", "active", "adapter", "admin", "agent", "aggregate", "alias", "allocate", "annotation", "anonymous",
  "ansi", "append", "architecture", "arity", "ascii", "assert", "asyncio", "atomic", "audit", "authentication",
  "authorization", "autosave", "avatar", "backend", "benchmark", "bitwise", "blob", "branch", "broadcast", "buffer",
  "bus", "byte", "caching", "callback", "cascade", "chain", "checkpoint", "cipher", "circular", "cli",
  "cluster", "coalesce", "commit", "compress", "concatenate", "concurrent", "configure", "connect", "console", "constraint",
  "consume", "context", "contract", "convention", "convert", "coroutine", "crash", "cryptography", "cursor", "data",
  "deadlock", "decode", "defer", "delegate", "delta", "deserialize", "diff", "directive", "dispatch", "dns",
  "docker", "document", "dynamic", "eject", "elevate", "entry", "enum", "ephemeral", "epoch", "eventloop",
  "failover", "fallback", "firewall", "flag", "flush", "fork", "fragment", "frontend", "garbage", "generate"
];
const simpleWords = [
  "apple", "book", "cat", "dog", "egg", "fish", "go", "hat", "ice", "jam",
  "kite", "lamp", "man", "nose", "open", "pen", "queen", "red", "sun", "top",
  "up", "van", "wet", "yes", "zoo", "ball", "car", "day", "ear", "fun",
  "gift", "hill", "ink", "jar", "key", "love", "mom", "net", "old", "pig",
  "quiz", "run", "sit", "toy", "use", "view", "win", "xray", "yell", "zero",
  "ant", "bag", "cook", "door", "eat", "farm", "game", "hand", "ice", "job",
  "kid", "leg", "moon", "name", "owl", "pet", "rain", "sea", "tree", "unit",
  "vote", "walk", "box", "yard", "zip", "ask", "bake", "cold", "duck", "elf",
  "fast", "good", "hot", "iron", "jump", "kind", "line", "mud", "nice", "oil",
  "path", "queen", "rope", "stop", "tall", "ugly", "vast", "warm", "xmas", "young",
  "able", "back", "call", "deep", "each", "face", "gold", "hard", "idea", "join",
  "keep", "long", "milk", "new", "open", "play", "rest", "ship", "time", "under",
  "very", "wash", "year", "zebra", "air", "blue", "cake", "dark", "even", "feel",
  "give", "hope", "iron", "jack", "king", "land", "made", "near", "once", "part",
  "quiz", "road", "shop", "talk", "unit", "vote", "wake", "xray", "yarn", "zone",
  "art", "bed", "city", "dry", "end", "frog", "green", "hat", "ice", "jam",
  "kick", "laugh", "man", "nose", "old", "pop", "quiet", "ride", "star", "top",
  "use", "voice", "wave", "yes", "zip", "act", "bank", "coat", "draw", "egg",
  "farm", "gift", "heat", "in", "joke", "kind", "leaf", "mouse", "nail", "open",
  "paint", "queen", "rope", "smile", "toys", "under", "vase", "walk", "xray", "young",
  "zoo", "about", "before", "clean", "dance", "every", "funny", "glass", "happy", "inside",
  "jelly", "kitten", "lemon", "magic", "never", "outside", "party", "quiet", "ready", "small",
  "tiger", "until", "visit", "water", "extra", "yellow", "again", "because", "climb", "drive", "early",
  "family", "garden", "house", "idea", "jungle", "kitchen", "listen", "music", "night", "orange",
  "people", "quick", "rabbit", "school", "today", "under", "voice", "window", "xylophone", "yesterday",
  "zipper", "answer", "bounce", "candy", "doctor", "elephant", "friend", "grape", "hello", "important",
  "jacket", "kangaroo", "letter", "morning", "number", "ocean", "pencil", "quietly", "rainbow", "snow",
  "table", "umbrella", "vacation", "wagon", "xenon", "yard", "zucchini", "animal", "bread", "circle",
  "desert", "engine", "feather", "giant", "honey", "island", "jewel", "koala", "library", "monkey",
  "needle", "octopus", "pirate", "quilt", "rocket", "sugar", "turtle", "uncle", "valley", "whale"
];

const textContainer = document.getElementById('text-container');
const timerElement = document.getElementById('timer');
const tryAgainButton = document.getElementById('try-again');
const finalScoreElement = document.getElementById('final-score');

// Shuffle the words Array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Combine shuffled words into one long string with spaces
function generateLongText() {
    const shuffledWords = shuffleArray([...programmingWords]);
    return shuffledWords.join(' ');
}

let longText = generateLongText();

textContainer.textContent = longText;
