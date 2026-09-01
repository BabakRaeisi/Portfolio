
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { X, Minus, Square } from 'lucide-react';


const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Array<{ command: string; output: string; timestamp: string }>>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);



  const commands = {
    help: () => `Available commands
    --------------------------------------
  Terminal Commands:
  help     - Show this help message
  clear    - Clear the terminal
  --------------------------------------
  About Me Commands:
  about    - Learn more about me
  contact  - Get my contact information
  --------------------------------------
  System Info Commands:
  whoami   - Display current user info
  date     - Show current date and time
  siteinfo - Display site info
  --------------------------------------
  Technical Commands:
  commits  - Show latest GitHub commits
  verHistory - View version history
    v2_1_0   - View version 2.1.0 history
    v1_0_0   - View version 1.0.0 history
  --------------------------------------
  Fun Commands:
  joke     - Get a random programming joke
  fox      - Fetch a random fox image`,
    
    about: () => `Hi! I'm a systems programmer passionate about building scalable, high-performance applications. 
I specialize in distributed systems, clean architecture, and performance optimization.
When I'm not coding, you can find me contributing to open source projects or writing technical blog posts.`,
    
    
    contact: () => `Contact Information:
  Email: jacobvillard@gmail.com
  GitHub: github.com/jacobvillard
  LinkedIn: linkedin.com/in/jacobvillard
  Location: Uk, available for remote work`,
    
    clear: () => { setHistory([]); return ''; },

    whoami: () => {
      const userAgent = navigator.userAgent;
      const platform =  navigator.platform || 'Unknown';
      const language = navigator.language;
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const screenRes = `${window.screen.width}x${window.screen.height}`;
      const onlineStatus = navigator.onLine ? 'Online' : 'Offline';

      return `Device Info:
  OS Platform: ${platform}
  Language: ${language}
  Timezone: ${timezone}
  Screen Resolution: ${screenRes}
  Online Status: ${onlineStatus}
  User Agent: ${userAgent}`;
    },
    
    date: () => new Date().toString(),

    verhistory: () => `Version History:
  v3.0.0 - You are Here.
  v2.1.0 - Improved User Experience (type 'v2_1_0' to view)
  v1.0.0 - Initial Release (type 'v1_0_0' to view)`,

    v2_1_0: () => {
      window.open('/siteHist/index.html', '_blank');
      return '🔗 Opening Version 2.1.1...';
    },

    v1_0_0: () => {
      window.open('/siteHist/oldSite/index.html', '_blank');
      return '🔗 Opening Version 1.0.0...';
    },

    commits: async () => {
      try {
        const res = await fetch(
            'https://api.github.com/repos/jacobvillard/jacobvillard.github.io/commits'
        );
        const data = await res.json();

        if (!Array.isArray(data)) throw new Error('Invalid response');

        return [
          '📜 Latest Commits:',
          ...data.slice(0, 5).map(
              (commit: any, i: number) =>
                  `${i + 1}. ${commit.commit.message} – ${commit.commit.author.name}`
          )
        ].join('\n');
      } catch (error) {
        return `❌ Failed to fetch commits: ${error}`;
      }
    },

    joke: async () => {
      try {
        const res = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
        const data = await res.json();
        return `🃏 Programming Joke:\n${data.joke}`;
      } catch (err) {
        return `❌ Failed to fetch joke: ${(err as Error).message}`;
      }
    },

    fox: async () => {
      try {
        const res = await fetch('https://randomfox.ca/floof/');
        const data = await res.json();
        return `🦊 Random Fox Image:\n${data.image}`;
      } catch (err) {
        return `❌ Failed to fetch fox image: ${(err as Error).message}`;
      }
    },

    siteinfo: () => `
Site Info:
Title: JacobVillard/Dev
Built With: React + Tailwind + TypeScript
Hosted On: GitHub Pages
Repo: https://github.com/jacobvillard/jacobvillard.github.io
Contact: jacobvillard@gmail.com
`,
    
    };

  const executeCommand = async (cmd: string) => {
    const command = cmd.trim().toLowerCase();
    const timestamp = new Date().toLocaleTimeString();

    if (command === '') return;

    let output: string;

    if (command in commands) {
      try {
        const result = commands[command as keyof typeof commands];
        output = typeof result === 'function' ? await result() : String(result);
      } catch (err) {
        output = `❌ Error running command: ${(err as Error).message}`;
      }
    } else {
      output = `Command not found: ${command}. Type 'help' for available commands.`;
    }


    if (command !== 'clear') {
      setHistory(prev => [...prev, { command: cmd, output, timestamp }]);
    }
    
    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);
    setInput('');
    setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  };

  const handleKeyDown = async (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      await executeCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Terminal Toggle Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-terminal-green hover:bg-terminal-green/80 text-black font-mono font-bold animate-glow"
        >
          <span className="mr-2">$</span>
          Terminal
        </Button>
      )}

      {/* Terminal Window */}
      {isOpen && (
          <div className={`terminal-window rounded-lg overflow-hidden shadow-2xl transition-all duration-300
  ${isFullScreen ? 'w-full h-[90vh]' : 'w-96 h-80'}
`}>
            {/* Terminal Header */}
            <div className="bg-muted/50 px-4 py-2 flex items-center justify-between border-b border-primary/20">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-terminal-green"></div>
              </div>
              <span className="font-mono text-sm text-muted-foreground">portfolio-terminal</span>
              <div className="flex items-center space-x-1">
                <Button
                    size="sm"
                    variant="ghost"
                    className="h-6 w-6 p-0"
                    onClick={() => setIsFullScreen(false)}
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <Button
                    size="sm"
                    variant="ghost"
                    className="h-6 w-6 p-0"
                    onClick={() => setIsFullScreen(true)}
                >
                  <Square className="h-3 w-3" />
                </Button>
                <Button size="sm" variant="ghost" className="h-6 w-6 p-0" onClick={() => setIsOpen(false)}>
                  <X className="h-3 w-3"/>
                </Button>
              </div>
            </div>

            {/* Terminal Content */}
            <div
                ref={scrollRef}
                className="p-4 overflow-y-auto font-mono text-sm"
                style={{maxHeight: isFullScreen ? 'calc(90vh - 2.5rem)' : 'calc(20rem - 2.5rem)'}}
            >
              {/* Welcome Message */}
              {history.length === 0 && (
                  <div className="text-terminal-green mb-4">
                    <p>Welcome to Portfolio Terminal v2.0.0</p>
                    <p>Type 'help' to see available commands.</p>
                    <p></p>
                  </div>
              )}

              {/* Command History */}
              {history.map((entry, index) => (
                  <div key={index} className="mb-2">
                    <div className="flex items-center">
                      <span className="text-terminal-green mr-2">$</span>
                      <span className="text-foreground">{entry.command}</span>
                    </div>
                    {entry.output && (
                        <div
                            className="text-terminal-cyan whitespace-pre-line ml-4 mb-2"
                            dangerouslySetInnerHTML={{
                              __html: entry.output.replace(
                                  /(https?:\/\/[^\s]+)/g,
                                  '<a href="$1" target="_blank" rel="noopener noreferrer" class="underline text-terminal-amber hover:text-terminal-green">$1</a>'
                              )
                            }}
                        />
                    )}
                  </div>
              ))}

              {/* Current Input */}
              <div className="flex items-center">
                <span className="text-terminal-green mr-2">$</span>
                <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="bg-transparent border-none outline-none text-foreground font-mono flex-1"
                    placeholder="Type a command..."
                />
                <span className="animate-blink border-r-2 border-terminal-green ml-1"></span>
              </div>

              {/*  Scroll anchor here */}
              <div ref={bottomRef}/>
            </div>
          </div>
      )}
    </div>
  );
};

export default Terminal;
