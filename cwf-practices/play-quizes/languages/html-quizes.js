// Data store for all quiz questions
const quizData = {
// Topic ID 1: Introduction to HTML
    "1": [
        {
            question: "What's the full form of HTML?",
            options: ["Hypertext Markup Language", ". High-Level Text Management", "Hyper Transfer Markup Link", "HyperText Marketing Language"],
            answer: "Hypertext Markup Language"
        },
        {
            question: "........ tag starts and ends the page.",
            options: ["header", "body", "html", "title"],
            answer: "html"
        },
        {
            question: "Which tag contains info about the page ?",
            options: ["header", "body", "html", "head"],
            answer: "head"
        },
    {
            question: "Which tag contains what you actually see in the page ?",
            options: ["header", "body", "html", "head"],
            answer: "body"
        },
    {
            question: "&lt;!DOCTYPE HTML>"+"<br>"+
  "&lt;html>"+"<br>"+
  "&lt;body>"+"<br>"+
  "&lt;p>"+"HELLO WORLD!"+"&lt;/p>"+"<br>"+
  "&lt;/body>"+"<br>"+
  "&lt;/html>"+"<br>"+"<br>"+
  "What is the output of the code?",
            options: ["hello", "hello world", "HELLO WORLD", "HELLO WORLD!"],
            answer: "HELLO WORLD!"
        },
        {
            question: "What does the &lt;br&gt; tag stand for?",
            options: ["Bold text", "Break rule", "Line break", "Block reference"],
            answer: "Line break"
        },
        {
            question: "Which character is used to indicate an end tag?",
            options: ["#", "@", "/", "$"],
            answer: "/"
        },
        {
            question: "Which element is used for the largest heading?",
            options: ["&lt;h1&gt;", "&lt;h6&gt;", "&lt;head&gt;", "&lt;header&gt;"],
            answer: "&lt;h1&gt;"
        },
        {
            question: "HTML is primarily used for:",
            options: ["Styling web pages", "Adding interactivity", "Structuring web content", "Server-side processing"],
            answer: "Structuring web content"
        },
        {
            question: "Which HTML version introduced the use of the &lt;!DOCTYPE html&gt; declaration?",
            options: ["HTML 4.01", "XHTML", "HTML5", "HTML 2.0"],
            answer: "HTML5"
        }
    ],
    
    // Topic ID 2: Code Editor
    "2": [
        {
            question: "Which of the following is NOT a dedicated code editor?",
            options: ["Visual Studio Code", "Sublime Text", "Microsoft Word", "Atom"],
            answer: "Microsoft Word"
        },
        {
            question: "What is an IDE (Integrated Development Environment)?",
            options: ["A type of debugging tool", "A software suite that consolidates development tools", "A browser's inspection tool", "A version control system"],
            answer: "A software suite that consolidates development tools"
        },
        {
            question: "What is syntax highlighting?",
            options: ["A way to mark errors", "A feature that displays text, especially source code, in different colors and fonts according to the category of terms.", "A tool for code minification", "A method for code deployment"],
            answer: "A feature that displays text, especially source code, in different colors and fonts according to the category of terms."
        },
        {
            question: "Which code editor is developed by Microsoft and is popular for web development?",
            options: ["Sublime Text", "Notepad++", "Visual Studio Code", "Vim"],
            answer: "Visual Studio Code"
        },
        {
            question: "What is code autocompletion?",
            options: ["Automatically compiling code", "A feature that suggests and completes code snippets as you type.", "A tool for fixing code style", "A feature that optimizes code performance"],
            answer: "A feature that suggests and completes code snippets as you type."
        },
        {
            question: "What is version control, and why is it important in development?",
            options: ["A system that limits code editing access", "A type of database storage", "System that records changes to a file or set of files over time, making collaboration easier.", "A tool for code obfuscation"],
            answer: "System that records changes to a file or set of files over time, making collaboration easier."
        },
        {
            question: "Which feature allows developers to run and test code within the editor without switching to a browser?",
            options: ["Integrated Terminal/Live Server", "Minimap", "Source Control Panel", "Extensions Gallery"],
            answer: "Integrated Terminal/Live Server"
        },
        {
            question: "What is the primary purpose of a text editor in programming?",
            options: ["To render web pages", "To manage databases", "To create and modify plain text files containing source code.", "To execute compiled programs"],
            answer: "To create and modify plain text files containing source code."
        },
        {
            question: "Atom is an open-source code editor developed by which company?",
            options: ["Google", "Microsoft", "Mozilla", "GitHub"],
            answer: "GitHub"
        },
        {
            question: "What file extension is typically used for JavaScript files?",
            options: [".html", ".css", ".js", ".json"],
            answer: ".js"
        }
    ],

    // Topic ID 3: Tags
    "3": [
        {
            question: "In HTML, tags are typically enclosed in which type of brackets?",
            options: ["[] (Square brackets)", "{} (Curly braces)", "<> (Angle brackets)", "() (Parentheses)"],
            answer: "<> (Angle brackets)"
        },
        {
            question: "Which tag is an example of an empty tag (has no closing tag)?",
            options: ["&lt;p&gt;", "&lt;div&gt;", "&lt;br&gt;", "&lt;span&gt;"],
            answer: "&lt;br&gt;"
        },
        {
            question: "What is the difference between block-level and inline elements?",
            options: ["Block-level elements are always invisible; inline elements are not.", "Block-level elements start on a new line; inline elements do not.", "Block-level elements can only contain text; inline elements can contain other elements.", "There is no difference in modern HTML5."],
            answer: "Block-level elements start on a new line; inline elements do not."
        },
        {
            question: "Which of these tags is typically used for short phrases or parts of a sentence?",
            options: ["&lt;div&gt;", "&lt;section&gt;", "&lt;p&gt;", "&lt;span&gt;"],
            answer: "&lt;span&gt;"
        },
        {
            question: "What is a nested tag?",
            options: ["A tag that closes itself", "A tag that uses only one attribute", "A tag placed inside another tag.", "A tag used for navigation"],
            answer: "A tag placed inside another tag."
        },
        {
            question: "The &lt;div&gt; tag is an example of a:",
            options: ["Inline element", "Void element", "Block-level element", "Text-formatting tag"],
            answer: "Block-level element"
        },
        {
            question: "The &lt;a&gt; tag is an example of an:",
            options: ["Block-level element", "Container element", "Inline element", "Table element"],
            answer: "Inline element"
        },
        {
            question: "How do you define a self-closing (void) tag in HTML5?",
            options: ["Use both the opening and closing tag", "Add a 'void' attribute", "Use the opening tag only, e.g., <img src=\"...\">", "Enclose it in square brackets"],
            answer: "Use the opening tag only, e.g., <img src=\"...\">"
        },
        {
            question: "Which pair of tags is used for an HTML table row and its data cell, respectively?",
            options: ["&lt;table&gt; and &lt;cell&gt;", "&lt;row&gt; and &lt;data&gt;", "&lt;tr&gt; and &lt;td&gt;", "&lt;th&gt; and &lt;tc&gt;"],
            answer: "&lt;tr&gt; and &lt;td&gt;"
        },
        {
            question: "The primary content of a web page should be placed inside which tag?",
            options: ["&lt;head&gt;", "&lt;html&gt;", "&lt;body&gt;", "&lt;meta&gt;"],
            answer: "&lt;body&gt;"
        }
    ],
    
    // Topic ID 4: Structure
    "4": [
        {
            question: "Which of the following elements is the root element of an HTML page?",
            options: ["&lt;head>", "&lt;body>", "&lt;html>", "&lt;title>"],
            answer: "&lt;html>"
        },
        {
            question: "Where is the title of the HTML page defined?",
            options: ["&lt;header>", "&lt;body>", "&lt;meta>", "&lt;title>"],
            answer: "&lt;title>"
        },
        {
            question: "Which element is used to set the character encoding for the document?",
            options: ["&lt;encoding&gt;", "&lt;charset&gt;", "&lt;meta charset=\"UTF-8\"&gt;", "&lt;script&gt;"],
            answer: "&lt;meta charset=\"UTF-8\"&gt;"
        },
        {
            question: "What does the 'viewport' meta tag control?",
            options: ["The zoom level for large screens.", "How the page is displayed on mobile devices.", "The character set encoding.", "The document's author information."],
            answer: "How the page is displayed on mobile devices."
        },
        {
            question: "Where is the &lt;link&gt; tag typically placed to link an external CSS file?",
            options: ["Inside the &lt;body&gt; element.", "At the very end of the document.", "Inside the &lt;head&gt; element.", "Only inside a &lt;style&gt; block."],
            answer: "Inside the &lt;head&gt; element."
        },
        {
            question: "The 'lang' attribute on the &lt;html&gt; tag specifies:",
            options: ["The scripting language.", "The language of the document.", "The document's structure.", "The style sheet language."],
            answer: "The language of the document."
        },
        {
            question: "Which tag defines self-contained content, like a blog post?",
            options: ["&lt;section&gt;", "&lt;aside&gt;", "&lt;article&gt;", "&lt;header&gt;"],
            answer: "&lt;article&gt;"
        },
        {
            question: "Which tag represents the main content area of the document?",
            options: ["&lt;body&gt;", "&lt;section&gt;", "&lt;main&gt;", "&lt;article&gt;"],
            answer: "&lt;main&gt;"
        },
        {
            question: "What is the recommended way to declare the document type in HTML5?",
            options: ["&lt;!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01//EN\" \"http://www.w3.org/TR/html4/strict.dtd\"&gt;", "&lt;!DOCTYPE html&gt;", "&lt;!DOCTYPE root&gt;", "&lt;!DOCTYPE HTML5&gt;"],
            answer: "&lt;!DOCTYPE html&gt;"
        },
        {
            question: "Which tag is used to define navigation links?",
            options: ["&lt;section&gt;", "&lt;nav&gt;", "&lt;link&gt;", "&lt;list&gt;"],
            answer: "&lt;nav&gt;"
        }
    ],

    // Topic ID 5: Attributes
    "5": [
        {
            question: "Where are HTML attributes generally specified?",
            options: ["In the closing tag", "In the opening tag", "Outside the tags", "In the &lt;style&gt; block"],
            answer: "In the opening tag"
        },
        {
            question: "Which attribute is used to provide extra information about an element, shown as a tooltip?",
            options: ["data", "id", "title", "name"],
            answer: "title"
        },
        {
            question: "Which attribute is used to uniquely identify an HTML element?",
            options: ["class", "name", "src", "id"],
            answer: "id"
        },
        {
            question: "The 'class' attribute is used to:",
            options: ["Give an element a unique identifier.", "Set the inline style.", "Apply the same styles or behavior to multiple elements.", "Specify the element type."],
            answer: "Apply the same styles or behavior to multiple elements."
        },
        {
            question: "What is a boolean attribute?",
            options: ["An attribute that accepts true/false values", "An attribute used only for inputs", "An attribute that does not require a value (e.g., disabled).", "An attribute that must be unique"],
            answer: "An attribute that does not require a value (e.g., disabled)."
        },
        {
            question: "Which attribute is required for the &lt;img&gt; tag to specify the image source?",
            options: ["alt", "link", "src", "href"],
            answer: "src"
        },
        {
            question: "What does the 'data-*' attribute prefix allow?",
            options: ["Creating new HTML elements.", "Storing custom data privately to the page or application.", "Linking external scripts.", "Defining external data sources."],
            answer: "Storing custom data privately to the page or application."
        },
        {
            question: "Which attribute specifies where to send the form data upon submission?",
            options: ["method", "action", "enctype", "target"],
            answer: "action"
        },
        {
            question: "The 'type' attribute is most commonly used with which HTML element?",
            options: ["&lt;p&gt;", "&lt;div&gt;", "&lt;form&gt;", "&lt;input&gt;"],
            answer: "&lt;input&gt;"
        },
        {
            question: "What value must the 'rel' attribute have for an external stylesheet link?",
            options: ["hyperlink", "stylesheet", "style", "external"],
            answer: "stylesheet"
        }
    ],

    // Topic ID 6: Headings & Paragraphs
    "6": [
        {
            question: "What is the largest HTML heading element?",
            options: ["&lt;h1&gt;", "&lt;h6&gt;", "&lt;head&gt;", "&lt;header&gt;"],
            answer: "&lt;h1&gt;"
        },
        {
            question: "Which tag is used to define a paragraph?",
            options: ["&lt;para&gt;", "&lt;p&gt;", "&lt;pg&gt;", "&lt;text&gt;"],
            answer: "&lt;p&gt;"
        },
        {
            question: "Which heading level typically represents the main topic of a section?",
            options: ["&lt;h1&gt;", "&lt;h3&gt;", "&lt;h2&gt;", "&lt;h6&gt;"],
            answer: "&lt;h2&gt;"
        },
        {
            question: "What is the correct hierarchy for headings?",
            options: ["Start with &lt;h6&gt; and proceed up to &lt;h1&gt;", "Any order is fine as long as they are distinct", "Start with &lt;h1&gt; and proceed down to &lt;h6&gt;", "Headings can only be used once per page"],
            answer: "Start with &lt;h1&gt; and proceed down to &lt;h6&gt;"
        },
        {
            question: "The &lt;hgroup&gt; element is used to:",
            options: ["Style a group of headings", "Group a set of one or more &lt;h1&gt; to &lt;h6&gt; elements.", "Create a collapsible heading section", "Define a header for a table"],
            answer: "Group a set of one or more &lt;h1&gt; to &lt;h6&gt; elements."
        },
        {
            question: "How many levels of headings are available in HTML?",
            options: ["5", "6 (h1 to h6)", "4", "7"],
            answer: "6 (h1 to h6)"
        },
        {
            question: "What is the default display behavior of a paragraph element (&lt;p&gt;)?",
            options: ["Inline (flows with surrounding text)", "Block-level (takes up the full width and starts a new line)", "Inline-block (behaves like both)", "Flex container"],
            answer: "Block-level (takes up the full width and starts a new line)"
        },
        {
            question: "Which element is used for marking up a long quotation?",
            options: ["&lt;q&gt;", "&lt;cite&gt;", "&lt;quotation&gt;", "&lt;blockquote&gt;"],
            answer: "&lt;blockquote&gt;"
        },
        {
            question: "Which element provides a thematic break or separator?",
            options: ["&lt;br&gt;", "&lt;hr&gt;", "&lt;separator&gt;", "&lt;line&gt;"],
            answer: "&lt;hr&gt;"
        },
        {
            question: "What tag should be used to display preformatted text, preserving spaces and line breaks?",
            options: ["&lt;p&gt;", "&lt;text&gt;", "&lt;pre&gt;", "&lt;code&gt;"],
            answer: "&lt;pre&gt;"
        }
    ],

    // Topic ID 7: HTML Styles
    "7": [
        {
            question: "Which attribute is used to add inline styles to an HTML element?",
            options: ["css", "style", "design", "class"],
            answer: "style"
        },
        {
            question: "The property 'color: blue;' inside a style attribute sets the color of what?",
            options: ["The element's background", "The element's border", "The element's text", "The entire page"],
            answer: "The element's text"
        },
        {
            question: "What does CSS stand for?",
            options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Syntax", "Colorful Style System"],
            answer: "Cascading Style Sheets"
        },
        {
            question: "Which HTML element is used to define internal CSS (within the document)?",
            options: ["&lt;css&gt;", "&lt;script&gt;", "&lt;style&gt;", "&lt;link&gt;"],
            answer: "&lt;style&gt;"
        },
        {
            question: "How do you include an external CSS file in an HTML document?",
            options: ["Using the &lt;script&gt; tag in the &lt;body&gt;", "Using the &lt;style&gt; tag in the &lt;head&gt;", "Using the &lt;link&gt; tag in the &lt;head&gt;", "Using the @import rule in the HTML body"],
            answer: "Using the &lt;link&gt; tag in the &lt;head&gt;"
        },
        {
            question: "What is the highest priority for styling an element?",
            options: ["External Stylesheet", "Internal Stylesheet", "Inline style (style attribute)", "Browser Default Styles"],
            answer: "Inline style (style attribute)"
        },
        {
            question: "Which CSS property is used to change the background color of an element?",
            options: ["text-color", "bgcolor", "background-color", "color-bg"],
            answer: "background-color"
        },
        {
            question: "What is the correct HTML for referring to an external style sheet named \"mystyle.css\"?",
            options: ["&lt;style src=\"mystyle.css\"&gt;", "&lt;stylesheet&gt;mystyle.css&lt;/stylesheet&gt;", "&lt;link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\"&gt;", "&lt;link src=\"mystyle.css\" type=\"stylesheet\"&gt;"],
            answer: "&lt;link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\"&gt;"
        },
        {
            question: "Which CSS property controls the text size?",
            options: ["text-style", "font-size", "text-size", "size"],
            answer: "font-size"
        },
        {
            question: "To set the font family of a paragraph, you would use which CSS property?",
            options: ["font-style", "text-font", "font-family", "font-type"],
            answer: "font-family"
        }
    ],

    // Topic ID 8: Text Formation
    "8": [
        {
            question: "Which HTML tag is used to make text bold (semantically important)?",
            options: ["&lt;b&gt;", "&lt;i&gt;", "&lt;strong&gt;", "&lt;em&gt;"],
            answer: "&lt;strong&gt;"
        },
        {
            question: "Which tag creates a line break?",
            options: ["&lt;lb&gt;", "&lt;br&gt;", "&lt;break&gt;", "&lt;hr&gt;"],
            answer: "&lt;br&gt;"
        },
        {
            question: "Which element is used for emphasis (typically rendered as *italics*)?",
            options: ["&lt;i&gt;", "&lt;em&gt;", "&lt;italic&gt;", "&lt;light&gt;"],
            answer: "&lt;em&gt;"
        },
        {
            question: "Which tag is used to mark text as no longer accurate or relevant?",
            options: ["&lt;mark&gt;", "&lt;delete&gt;", "&lt;del&gt;", "&lt;s&gt;"],
            answer: "&lt;del&gt;"
        },
        {
            question: "What is the semantic meaning of the &lt;mark&gt; tag?",
            options: ["To represent important text", "To highlight text for reference or notation purposes.", "To create a button", "To define a form input"],
            answer: "To highlight text for reference or notation purposes."
        },
        {
            question: "Which tag is used to display text smaller than the surrounding text?",
            options: ["&lt;tiny&gt;", "&lt;sub&gt;", "&lt;small&gt;", "&lt;light&gt;"],
            answer: "&lt;small&gt;"
        },
        {
            question: "What tag displays text as a subscript (e.g., in a chemical formula)?",
            options: ["&lt;subscript&gt;", "&lt;sup&gt;", "&lt;low&gt;", "&lt;sub&gt;"],
            answer: "&lt;sub&gt;"
        },
        {
            question: "What tag displays text as a superscript (e.g., in math equations)?",
            options: ["&lt;sup&gt;", "&lt;sub&gt;", "&lt;super&gt;", "&lt;high&gt;"],
            answer: "&lt;sup&gt;"
        },
        {
            question: "Which element is used to define an abbreviation or acronym?",
            options: ["&lt;acro&gt;", "&lt;abbrev&gt;", "&lt;abbr&gt;", "&lt;short&gt;"],
            answer: "&lt;abbr&gt;"
        },
        {
            question: "The &lt;cite&gt; element is used to define:",
            options: ["A short quotation", "The source of a quotation", "The title of a work (e.g., a book, song, film).", "A common noun"],
            answer: "The title of a work (e.g., a book, song, film)."
        }
    ],

    // Topic ID 9: Comments
    "9": [
        {
            question: "What is the correct way to write an HTML comment?",
            options: ["// Comment", "&lt;!-- Comment --&gt;", "/* Comment */", "# Comment"],
            answer: "&lt;!-- Comment --&gt;"
        },
        {
            question: "What is the purpose of an HTML comment?",
            options: ["To execute code only when conditions are met", "To define variables", "To add notes that are ignored by the browser", "To link external scripts"],
            answer: "To add notes that are ignored by the browser"
        },
        {
            question: "Why should you avoid putting sensitive information in HTML comments?",
            options: ["It can slow down the page load.", "Comments are viewable by anyone using \"View Source\".", "Comments are automatically deleted by the server.", "It causes a parsing error."],
            answer: "Comments are viewable by anyone using \"View Source\"."
        },
        {
            question: "HTML comments are processed by the browser but:",
            options: ["Displayed on the web page.", "Used for search engine ranking.", "Not displayed on the web page.", "Only visible in print view."],
            answer: "Not displayed on the web page."
        },
        {
            question: "Which symbol marks the end of an HTML comment?",
            options: ["--", "/>", "--&gt;", "!>"],
            answer: "--&gt;"
        },
        {
            question: "What is a good use case for an HTML comment?",
            options: ["Defining page keywords for SEO.", "Storing user preferences.", "Temporarily disabling a section of code.", "Creating hidden links."],
            answer: "Temporarily disabling a section of code."
        },
        {
            question: "A comment block can span:",
            options: ["Only one line.", "Up to two lines.", "Multiple lines.", "Up to 80 characters."],
            answer: "Multiple lines."
        },
        {
            question: "Does the browser execute any code found inside an HTML comment?",
            options: ["Yes, if it's JavaScript.", "Yes, if it's CSS.", "No", "Only in development mode."],
            answer: "No"
        },
        {
            question: "What is the keyboard shortcut for commenting a line in many code editors?",
            options: ["Shift + /", "Ctrl + / (or Cmd + /)", "Alt + C", "Ctrl + Shift + C"],
            answer: "Ctrl + / (or Cmd + /)"
        },
        {
            question: "Which of the following is an invalid HTML comment?",
            options: ["&lt;!-- A comment --&gt;", "&lt;!--Comment--&gt;", "&lt;!--Comment--!&gt;", "&lt;!-- Comment: --&gt;"],
            answer: "&lt;!--Comment--!&gt;"
        }
    ],

    // Topic ID 10: Div & Classes
    "10": [
        {
            question: "The &lt;div&gt; element is a standard block-level element often used as a:",
            options: ["Text formatter", "Container for other HTML elements", "Inline image holder", "Form input field"],
            answer: "Container for other HTML elements"
        },
        {
            question: "The 'class' attribute is used in HTML to:",
            options: ["Give an element a unique identifier", "Define an element's style directly", "Apply the same styling to multiple elements", "Create a link to another page"],
            answer: "Apply the same styling to multiple elements"
        },
        {
            question: "What is the primary difference between 'id' and 'class' attributes?",
            options: ["'id' is for styling; 'class' is for behavior.", "'id' can only be used on &lt;div&gt;; 'class' can be used on any element.", "'id' must be unique; 'class' can be reused.", "'id' is for external links; 'class' is for internal links."],
            answer: "'id' must be unique; 'class' can be reused."
        },
        {
            question: "Which CSS selector targets all elements with the class 'highlight'?",
            options: ["#highlight", "element.highlight", ".highlight", "*highlight"],
            answer: ".highlight"
        },
        {
            question: "Which CSS selector targets an element with the ID 'main-header'?",
            options: [".main-header", "#main-header", "id(main-header)", "main-header"],
            answer: "#main-header"
        },
        {
            question: "What is a general-purpose inline container element?",
            options: ["&lt;div&gt;", "&lt;section&gt;", "&lt;span&gt;", "&lt;p&gt;"],
            answer: "&lt;span&gt;"
        },
        {
            question: "Can an HTML element have multiple classes?",
            options: ["No, only one class per element.", "Yes, separated by commas.", "Yes, separated by spaces.", "Only if they are from different stylesheets."],
            answer: "Yes, separated by spaces."
        },
        {
            question: "What is the main advantage of using a &lt;div&gt; and 'class' instead of applying inline styles?",
            options: ["Faster page load times.", "The code is easier to write.", "Better separation of content and presentation.", "It allows for more colors."],
            answer: "Better separation of content and presentation."
        },
        {
            question: "In modern HTML5, which semantic tag is often used instead of a generic &lt;div id=\"header\"&gt;?",
            options: ["&lt;head&gt;", "&lt;top&gt;", "&lt;h1&gt;", "&lt;header&gt;"],
            answer: "&lt;header&gt;"
        },
        {
            question: "The &lt;div&gt; tag is often used in combination with CSS for:",
            options: ["Defining script behavior.", "Layout and styling.", "Adding external dependencies.", "Creating form fields."],
            answer: "Layout and styling."
        }
    ],

    // Topic ID 11: Colors
    "11": [
        {
            question: "Which color model uses three values for Red, Green, and Blue?",
            options: ["HEX", "CMYK", "RGB", "HSL"],
            answer: "RGB"
        },
        {
            question: "What is the common hexadecimal color code for pure white?",
            options: ["#000000", "#FFFFFF", "#FF0000", "#00FF00"],
            answer: "#FFFFFF"
        },
        {
            question: "How is the alpha (transparency) value added to an RGB color?",
            options: ["By using `rgb-a()`", "By using `rgba()`", "By using `opacity` attribute", "It is not possible in CSS"],
            answer: "By using `rgba()`"
        },
        {
            question: "What is the HEX code for pure red?",
            options: ["#00FF00", "#0000FF", "#FF0000", "#F0F0F0"],
            answer: "#FF0000"
        },
        {
            question: "What is the RGB value for pure blue?",
            options: ["rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 255)", "rgb(255, 255, 0)"],
            answer: "rgb(0, 0, 255)"
        },
        {
            question: "What does HSL stand for?",
            options: ["High Saturation Level", "Hue, Saturation, Lightness", "Horizontal Style Line", "HTML Style Logic"],
            answer: "Hue, Saturation, Lightness"
        },
        {
            question: "The hexadecimal color #9900CC represents:",
            options: ["A shade of green", "A shade of purple/violet", "A shade of orange", "A shade of gray"],
            answer: "A shade of purple/violet"
        },
        {
            question: "In a hexadecimal color code, what does the first pair of characters represent?",
            options: ["The amount of Blue", "The amount of Green", "The amount of Red", "The transparency"],
            answer: "The amount of Red"
        },
        {
            question: "What value range does the alpha channel (A) in `rgba()` typically use?",
            options: ["0 to 255", "1 to 10", "0.0 (fully transparent) to 1.0 (fully opaque)", "-1 to 1"],
            answer: "0.0 (fully transparent) to 1.0 (fully opaque)"
        },
        {
            question: "Which of the following is a valid, shortened hexadecimal color code?",
            options: ["#336699", "#369", "#306090", "#369FF"],
            answer: "#369"
        }
    ],
    
    // Topic ID 12: Links
    "12": [
        {
            question: "What attribute is used to specify the destination URL of a link?",
            options: ["src", "link", "href", "target"],
            answer: "href"
        },
        {
            question: "Which attribute opens a linked document in a new browser window or tab?",
            options: ["new", "target='_blank'", "rel", "open='new'"],
            answer: "target='_blank'"
        },
        {
            question: "What is a hyperlink?",
            options: ["A special type of heading", "A reference to data that the user can follow by clicking or tapping.", "A command to download a file.", "A way to highlight text."],
            answer: "A reference to data that the user can follow by clicking or tapping."
        },
        {
            question: "What does the 'rel' attribute often indicate for a link?",
            options: ["The link speed", "The relationship between the current document and the linked document.", "The reliability of the link", "The rendering type"],
            answer: "The relationship between the current document and the linked document."
        },
        {
            question: "How do you create an email link?",
            options: ["Using &lt;a link=\"email:\"&gt;", "Using &lt;a type=\"email\"&gt;", "Using &lt;a href=\"mailto:example@domain.com\"&gt;", "Using &lt;email&gt; tag"],
            answer: "Using &lt;a href=\"mailto:example@domain.com\"&gt;"
        },
        {
            question: "What is an anchor tag used for?",
            options: ["Defining the page header.", "Creating a section for navigation.", "Creating a link to another web page or a specific section of the current page.", "Marking important text."],
            answer: "Creating a link to another web page or a specific section of the current page."
        },
        {
            question: "To link to a specific section (ID) on the *same* page, what format is used in the 'href' attribute?",
            options: ["?section-id", "/section-id", "#section-id", "link-section-id"],
            answer: "#section-id"
        },
        {
            question: "What is the default color of a link that has not been visited?",
            options: ["Red", "Blue", "Purple", "Black"],
            answer: "Blue"
        },
        {
            question: "What is the purpose of the 'download' attribute on an &lt;a&gt; tag?",
            options: ["To pre-fetch the link content.", "Forces the linked resource to be downloaded instead of navigated to.", "To specify a fallback URL.", "To set the maximum file size."],
            answer: "Forces the linked resource to be downloaded instead of navigated to."
        },
        {
            question: "What is the value of the 'target' attribute that opens the link in the parent frame?",
            options: ["_self", "_top", "_parent", "_blank"],
            answer: "_parent"
        }
    ],

    // Topic ID 13: Lists
    "13": [
        {
            question: "Which tag is used to create an ordered list (numbered list)?",
            options: ["&lt;ul&gt;", "&lt;li&gt;", "&lt;dl&gt;", "&lt;ol&gt;"],
            answer: "&lt;ol&gt;"
        },
        {
            question: "What does the &lt;li&gt; tag represent?",
            options: ["List identifier", "List item", "Link index", "List of images"],
            answer: "List item"
        },
        {
            question: "Which tag defines a description list?",
            options: ["&lt;ol&gt;", "&lt;dl&gt;", "&lt;ul&gt;", "&lt;dt&gt;"],
            answer: "&lt;dl&gt;"
        },
        {
            question: "What is the difference between &lt;dt&gt; and &lt;dd&gt; in a description list?",
            options: ["&lt;dt&gt; is the title, &lt;dd&gt; is the URL.", "&lt;dt&gt; is the date, &lt;dd&gt; is the time.", "&lt;dt&gt; is the term, &lt;dd&gt; is the description.", "&lt;dt&gt; is the row, &lt;dd&gt; is the column."],
            answer: "&lt;dt&gt; is the term, &lt;dd&gt; is the description."
        },
        {
            question: "Which CSS property is used to change the bullet style of an unordered list?",
            options: ["list-style", "marker-type", "bullet-style", "list-style-type"],
            answer: "list-style-type"
        },
        {
            question: "What is the default marker for an unordered list?",
            options: ["Square", "Roman numeral", "Disc (solid circle)", "Decimal number"],
            answer: "Disc (solid circle)"
        },
        {
            question: "How can you make an ordered list start counting from 5 instead of 1?",
            options: ["Using the `number=\"5\"` attribute", "Using the `start=\"5\"` attribute on the &lt;ol&gt; tag.", "Using a &lt;start&gt; tag", "This is only possible with CSS"],
            answer: "Using the `start=\"5\"` attribute on the &lt;ol&gt; tag."
        },
        {
            question: "To remove the default list markers (bullets or numbers) and padding, you would typically use:",
            options: ["JavaScript", "An external library", "CSS", "The 'void' attribute"],
            answer: "CSS"
        },
        {
            question: "Can a list item (&lt;li&gt;) contain another list?",
            options: ["No, only text or links.", "Yes, lists can be nested.", "Only unordered lists can be nested.", "Only ordered lists can be nested."],
            answer: "Yes, lists can be nested."
        },
        {
            question: "Which tag is required inside both &lt;ol&gt; and &lt;ul&gt;?",
            options: ["&lt;list&gt;", "&lt;item&gt;", "&lt;li&gt;", "&lt;section&gt;"],
            answer: "&lt;li&gt;"
        }
    ],

    // Topic ID 14: Tables
    "14": [
        {
            question: "Which tag is used to define a row in an HTML table?",
            options: ["&lt;td&gt;", "&lt;tr&gt;", "&lt;tc&gt;", "&lt;th&gt;"],
            answer: "&lt;tr&gt;"
        },
        {
            question: "Which attribute is used to merge two or more columns in a table?",
            options: ["rowspan", "cellspan", "colspan", "merge-cols"],
            answer: "colspan"
        },
        {
            question: "What element is used for the column headers within a table?",
            options: ["&lt;td&gt;", "&lt;h&gt;", "&lt;header&gt;", "&lt;th&gt;"],
            answer: "&lt;th&gt;"
        },
        {
            question: "Which tag defines the main container for the table?",
            options: ["&lt;div&gt;", "&lt;table&gt;", "&lt;section&gt;", "&lt;tbody&gt;"],
            answer: "&lt;table&gt;"
        },
        {
            question: "What is the correct way to merge two rows in a table?",
            options: ["Using the 'colspan' attribute.", "Using the 'merge-rows' attribute.", "Using the 'rowspan' attribute on a &lt;td&gt; or &lt;th&gt; tag.", "It is not possible in HTML."],
            answer: "Using the 'rowspan' attribute on a &lt;td&gt; or &lt;th&gt; tag."
        },
        {
            question: "What tag groups the header content of an HTML table?",
            options: ["&lt;tfoot&gt;", "&lt;thead&gt;", "&lt;header&gt;", "&lt;top&gt;"],
            answer: "&lt;thead&gt;"
        },
        {
            question: "Which tag groups the main body content of a table?",
            options: ["&lt;tmid&gt;", "&lt;tbody&gt;", "&lt;main&gt;", "&lt;data&gt;"],
            answer: "&lt;tbody&gt;"
        },
        {
            question: "The 'cellpadding' attribute is deprecated; what is used instead in CSS?",
            options: ["margin", "spacing", "padding on &lt;th&gt; and &lt;td&gt;", "cell-padding property"],
            answer: "padding on &lt;th&gt; and &lt;td&gt;"
        },
        {
            question: "The &lt;caption&gt; element defines:",
            options: ["A title or caption for the table.", "A footnote for the table.", "The table's width and height.", "The data source."],
            answer: "A title or caption for the table."
        },
        {
            question: "Which tag is used to define a standard data cell?",
            options: ["&lt;tc&gt;", "&lt;td&gt;", "&lt;tr&gt;", "&lt;th&gt;"],
            answer: "&lt;td&gt;"
        }
    ],

    // Topic ID 15: Images
    "15": [
        {
            question: "Which attribute specifies the path to the image file?",
            options: ["link", "path", "src", "href"],
            answer: "src"
        },
        {
            question: "What is the purpose of the 'alt' attribute in the &lt;img&gt; tag?",
            options: ["To set the image's alignment", "To define the image's title", "To provide alternative text for screen readers or broken images", "To set the image's height and width"],
            answer: "To provide alternative text for screen readers or broken images"
        },
        {
            question: "What attribute allows you to specify the width and height of an image?",
            options: ["size", "dimensions", "width and height", "scale"],
            answer: "width and height"
        },
        {
            question: "The &lt;img&gt; tag is a:",
            options: ["Block-level element", "Container element", "Void (self-closing) and inline element.", "Header element"],
            answer: "Void (self-closing) and inline element."
        },
        {
            question: "What is the best practice for setting image dimensions to ensure good performance?",
            options: ["Set only width in CSS.", "Set only height in CSS.", "Setting both width and height attributes in HTML.", "Let the browser determine the dimensions."],
            answer: "Setting both width and height attributes in HTML."
        },
        {
            question: "Which element is used to map specific, clickable areas on an image?",
            options: ["&lt;link&gt;", "&lt;map&gt;", "&lt;area&gt;", "&lt;imagemap&gt;"],
            answer: "&lt;map&gt;"
        },
        {
            question: "What is the purpose of the &lt;figure&gt; and &lt;figcaption&gt; elements?",
            options: ["To create an interactive chart.", "To group an image with its caption.", "To define an image gallery.", "To set the image's alignment."],
            answer: "To group an image with its caption."
        },
        {
            question: "What image format supports animation?",
            options: ["JPEG", "PNG", "SVG", "GIF"],
            answer: "GIF"
        },
        {
            question: "What does the `loading=\"lazy\"` attribute on an image do?",
            options: ["Loads the image first.", "Instructs the browser to defer loading of the image until it reaches a calculated distance from the viewport.", "Resizes the image immediately.", "Adds a loading animation."],
            answer: "Instructs the browser to defer loading of the image until it reaches a calculated distance from the viewport."
        },
        {
            question: "Which attribute is used to provide different image sources for different screen sizes?",
            options: ["size-src", "media", "srcset", "img-set"],
            answer: "srcset"
        }
    ],

    // Topic ID 16: Audio-Video
    "16": [
        {
            question: "What attribute must be present in the &lt;video&gt; tag to show the playback controls (play, pause, volume)?",
            options: ["show-controls", "controls", "playback", "ui"],
            answer: "controls"
        },
        {
            question: "To ensure an audio file automatically restarts when it finishes, which attribute should be used?",
            options: ["replay", "repeat", "loop", "autoplay"],
            answer: "loop"
        },
        {
            question: "Which tag is used to embed an audio file?",
            options: ["&lt;media&gt;", "&lt;sound&gt;", "&lt;audio&gt;", "&lt;src&gt;"],
            answer: "&lt;audio&gt;"
        },
        {
            question: "What attribute specifies the location of the media file?",
            options: ["link", "path", "href", "src"],
            answer: "src"
        },
        {
            question: "What is the purpose of the 'preload' attribute?",
            options: ["To start playing the media instantly.", "To suggest to the browser whether to pre-load the media file.", "To specify a custom loading icon.", "To compress the media file."],
            answer: "To suggest to the browser whether to pre-load the media file."
        },
        {
            question: "What attribute tells the browser to start playing the media immediately upon loading?",
            options: ["start", "begin", "autoplay", "init"],
            answer: "autoplay"
        },
        {
            question: "Which element allows you to specify multiple media sources for a single &lt;video&gt; or &lt;audio&gt; element?",
            options: ["&lt;link&gt;", "&lt;track&gt;", "&lt;source&gt;", "&lt;path&gt;"],
            answer: "&lt;source&gt;"
        },
        {
            question: "What is the recommended video format that works across most modern browsers?",
            options: ["AVI", "MOV", "MP4 (H.264)", "WMV"],
            answer: "MP4 (H.264)"
        },
        {
            question: "Which attribute is used to mute the video's audio by default?",
            options: ["silent", "mute", "muted", "volume=\"0\""],
            answer: "muted"
        },
        {
            question: "What attribute links a track file (like subtitles or captions) to a video?",
            options: ["&lt;link&gt;", "&lt;caption&gt;", "&lt;track&gt;", "&lt;subtitle&gt;"],
            answer: "&lt;track&gt;"
        }
    ],

    // Topic ID 17: Input Types
    "17": [
        {
            question: "What is the HTML5 input type for selecting a date?",
            options: ["type='time'", "type='calendar'", "type='date'", "type='datetime'"],
            answer: "type='date'"
        },
        {
            question: "Which input type is used for a checkbox?",
            options: ["type='radio'", "type='toggle'", "type='check'", "type='checkbox'"],
            answer: "type='checkbox'"
        },
        {
            question: "Which input type is best suited for a password field?",
            options: ["type='text'", "type='secret'", "type='password'", "type='private'"],
            answer: "type='password'"
        },
        {
            question: "What input type creates a button that resets all form values to their initial state?",
            options: ["type='clear'", "type='reset'", "type='cancel'", "type='undo'"],
            answer: "type='reset'"
        },
        {
            question: "Which attribute is used to define the placeholder text in an input field?",
            options: ["label", "hint", "placeholder", "default-text"],
            answer: "placeholder"
        },
        {
            question: "Which input type creates a color picker interface?",
            options: ["type='color'", "type='palette'", "type='hex'", "type='rgb'"],
            answer: "type='color'"
        },
        {
            question: "What input type is used to allow users to upload a file?",
            options: ["type='upload'", "type='resource'", "type='file'", "type='document'"],
            answer: "type='file'"
        },
        {
            question: "Which attribute makes an input field mandatory?",
            options: ["mandatory", "must-fill", "required", "needs-data"],
            answer: "required"
        },
        {
            question: "What is the correct input type for collecting a user's telephone number?",
            options: ["type='phone'", "type='tel'", "type='number'", "type='contact'"],
            answer: "type='tel'"
        },
        {
            question: "What HTML element is used to select an option from a drop-down list?",
            options: ["&lt;datalist&gt;", "&lt;options&gt;", "&lt;select&gt;", "&lt;input type=\"dropdown\"&gt;"],
            answer: "&lt;select&gt;"
        }
    ],

    // Topic ID 18: Forms
    "18": [
        {
            question: "Which attribute is used to group related form elements?",
            options: ["<group>", "<section>", "<fieldset>", "<input type='group'>"],
            answer: "<fieldset>"
        },
        {
            question: "What is the default HTTP method when submitting a form without specifying the 'method' attribute?",
            options: ["POST", "GET", "HEAD", "PUT"],
            answer: "GET"
        },
        {
            question: "What is the &lt;label&gt; element primarily used for?",
            options: ["Styling form titles.", "Associating descriptive text with a form control.", "Creating a button.", "Defining a group of options."],
            answer: "Associating descriptive text with a form control."
        },
        {
            question: "Which attribute is used to prevent the user from modifying an input field's value?",
            options: ["disabled", "locked", "readonly", "static"],
            answer: "readonly"
        },
        {
            question: "What is the purpose of the 'name' attribute on form controls?",
            options: ["To apply CSS styles.", "To define the label text.", "To provide a key/value pair when submitting the form data.", "To uniquely identify the element for JavaScript."],
            answer: "To provide a key/value pair when submitting the form data."
        },
        {
            question: "The `method=\"POST\"` is typically used when:",
            options: ["Retrieving data from a server.", "Submitting sensitive data or data that changes server state.", "Submitting simple search queries.", "Linking to another page."],
            answer: "Submitting sensitive data or data that changes server state."
        },
        {
            question: "Which element defines a caption for a &lt;fieldset&gt; element?",
            options: ["&lt;caption&gt;", "&lt;header&gt;", "&lt;label&gt;", "&lt;legend&gt;"],
            answer: "&lt;legend&gt;"
        },
        {
            question: "What is the default value of the `enctype` attribute for a form?",
            options: ["multipart/form-data", "text/plain", "application/json", "application/x-www-form-urlencoded"],
            answer: "application/x-www-form-urlencoded"
        },
        {
            question: "Which input type submits the form data to the server?",
            options: ["type='button'", "type='link'", "type='submit'", "type='send'"],
            answer: "type='submit'"
        },
        {
            question: "What HTML element is used for multi-line text input?",
            options: ["&lt;input type=\"textarea\"&gt;", "&lt;textarea&gt;", "&lt;text&gt;", "&lt;textinput&gt;"],
            answer: "&lt;textarea&gt;"
        }
    ],

    // Topic ID 19: Emojis
    "19": [
        {
            question: "How are HTML entities for emojis generally written?",
            options: ["Using the &lt;emoji&gt; tag", "Using CSS content properties", "As decimal or hexadecimal references (e.g., &amp;#128512;)", "Using JavaScript functions"],
            answer: "As decimal or hexadecimal references (e.g., &amp;#128512;)"
        },
        {
            question: "What is one way to insert an emoji directly into HTML content?",
            options: ["Copy-pasting the character itself", "Using a special &lt;emoji&gt; tag", "By linking an external emoji library", "Only via CSS"],
            answer: "Copy-pasting the character itself"
        },
        {
            question: "What encoding standard supports the vast majority of emojis?",
            options: ["ASCII", "ISO-8859-1", "UTF-8", "Latin-1"],
            answer: "UTF-8"
        },
        {
            question: "How are emojis typically treated by web browsers?",
            options: ["As images", "As SVGs", "As characters (text).", "As proprietary objects"],
            answer: "As characters (text)."
        },
        {
            question: "Emojis can be inserted into HTML content using their:",
            options: ["Proprietary names", "Unicode values.", "Image URLs", "CSS class names"],
            answer: "Unicode values."
        },
        {
            question: "Why might an emoji look different on different operating systems or browsers?",
            options: ["They are rendered by JavaScript.", "Each platform uses its own emoji font.", "They are affected by the HTML &lt;style&gt; tag.", "The browser caches them differently."],
            answer: "Each platform uses its own emoji font."
        },
        {
            question: "What is an HTML entity equivalent for the Unicode character &#128516; (Grinning Squinting Face)?",
            options: ["&lt;emoji-128516&gt;", "&amp;#128516;", "&amp;#x1F604;", "Only the character itself is valid"],
            answer: "&amp;#x1F604;"
        },
        {
            question: "What is the purpose of the 'variation selector' characters in Unicode for emojis?",
            options: ["To change the emoji's color.", "To create new emoji combinations.", "To specify whether a character should be rendered as text or as a colored emoji.", "To define a fallback image."],
            answer: "To specify whether a character should be rendered as text or as a colored emoji."
        },
        {
            question: "What is a common way to ensure visual consistency of emojis across all platforms?",
            options: ["Using only text representations.", "Using an emoji library (e.g., Twemoji).", "Setting a universal font-family.", "Disabling emojis via CSS."],
            answer: "Using an emoji library (e.g., Twemoji)."
        },
        {
            question: "The recommended way to declare character encoding in modern HTML is:",
            options: ["&lt;meta encoding=\"UTF-8\"&gt;", "&lt;meta name=\"charset\" content=\"UTF-8\"&gt;", "&lt;meta charset=\"UTF-8\"&gt;", "&lt;charset&gt;UTF-8&lt;/charset&gt;"],
            answer: "&lt;meta charset=\"UTF-8\"&gt;"
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const topicList = document.getElementById('topic-list');
    const quizArea = document.getElementById('quiz-area');
    const submitButton = document.getElementById('submit-quiz');
    const resetButton = document.getElementById('reset-score'); 
    const resultsArea = document.getElementById('results-area');

    let currentTopicId = null;
    let totalQuizScore;
    
    // Calculate total possible questions across all provided topics
    function calculateTotalPossibleQuestions() {
        let total = 0;
        for (const topicId in quizData) {
            total += quizData[topicId].length;
        }
        return total;
    }
    const TOTAL_POSSIBLE_QUESTIONS = calculateTotalPossibleQuestions();

    // --- CUMULATIVE SCORE PERSISTENCE FUNCTIONS ---
    
    // Function to save the current score object to localStorage
    function saveScore() {
        const scoreToSave = {
            correct: totalQuizScore.correct,
            wrong: totalQuizScore.wrong,
            skipped: totalQuizScore.skipped,
            totalQuestions: totalQuizScore.totalQuestions,
            // Convert Set to Array before saving
            completedTopics: Array.from(totalQuizScore.completedTopics) 
        };
        try {
            localStorage.setItem('htmlQuizScore', JSON.stringify(scoreToSave));
        } catch (e) {
            console.error("Could not save score to local storage:", e);
        }
    }

    // Function to load score from localStorage or initialize it
    function initTotalQuizScore() {
        let savedScore = null;
        try {
            savedScore = localStorage.getItem('htmlQuizScore');
        } catch (e) {
            console.error("Could not read score from local storage:", e);
        }

        if (savedScore) {
            // Load from localStorage
            try {
                const parsedScore = JSON.parse(savedScore);
                totalQuizScore = {
                    correct: parsedScore.correct || 0,
                    wrong: parsedScore.wrong || 0,
                    skipped: parsedScore.skipped || 0,
                    totalQuestions: TOTAL_POSSIBLE_QUESTIONS,
                    // completedTopics must be converted back to a Set
                    completedTopics: new Set(parsedScore.completedTopics || []) 
                };
            } catch (e) {
                 console.error("Error parsing saved score, initializing new score.", e);
                 // Fallback to new score if parsing fails
                 totalQuizScore = initializeNewScore();
            }
        } else {
            // Initialize new score
            totalQuizScore = initializeNewScore();
        }

        // Always display loaded/initialized score
        displayCumulativeScore();

        // Ensure reset button visibility is correct on load
        const totalAnswered = totalQuizScore.correct + totalQuizScore.wrong + totalQuizScore.skipped;
        resetButton.style.display = (totalAnswered > 0) ? 'inline-block' : 'none';
        
        // Update sidebar links to reflect completed status
        updateSidebarCompletionStatus();
    }
    
    // Helper function for clean initialization
    function initializeNewScore() {
        // Remove existing cumulative display if any
        document.querySelector('#cumulative-score-display')?.remove();
        return {
            correct: 0,
            wrong: 0,
            skipped: 0,
            totalQuestions: TOTAL_POSSIBLE_QUESTIONS,
            completedTopics: new Set()
        };
    }
    
    // --- Function to Display Cumulative Score ---
    function displayCumulativeScore() {
        const totalAnswered = totalQuizScore.correct + totalQuizScore.wrong + totalQuizScore.skipped;
        
        // Remove previous display instance if it exists outside resultsArea
        document.querySelector('#cumulative-score-display')?.remove();

        if (totalAnswered > 0) {
            const completionPercentage = ((totalAnswered / totalQuizScore.totalQuestions) * 100).toFixed(1);

            let totalHtml = `
                <div id="cumulative-score-display" style="border-top: 2px solid var(--accent-color); margin-top: 20px; padding-top: 10px;">
                    <h3>Cumulative Progress:</h3>
                    <p style="margin-top: 5px; font-size: 1.1em; font-weight: bold;">
                        ${totalAnswered} / ${totalQuizScore.totalQuestions} Questions Completed (${completionPercentage}%)
                    </p>
                    <ul style="list-style-type: none; padding-left: 0; font-size: 0.95em;">
                        <li style="color: var(--success-bg);">✅ Correct: ${totalQuizScore.correct}</li>
                        <li style="color: var(--error-bg);">❌ Wrong: ${totalQuizScore.wrong}</li>
                        <li style="color: var(--warning-bg);">⏩ Skipped: ${totalQuizScore.skipped}</li>
                    </ul>
                </div>
            `;
            // Append the display right after the results area
            resultsArea.insertAdjacentHTML('afterend', totalHtml);
            
            // Show reset button once score is accumulating
            resetButton.style.display = 'inline-block'; 
        } else {
             // Hide reset button if score is 0
             resetButton.style.display = 'none';
        }
    }

    // --- Function to Update Sidebar Visuals ---
    function updateSidebarCompletionStatus() {
        topicList.querySelectorAll('a').forEach(link => {
            const topicId = link.getAttribute('data-topic');
            if (totalQuizScore.completedTopics.has(topicId)) {
                link.classList.add('completed');
            } else {
                link.classList.remove('completed');
            }
        });
    }

    // --- Function to Reset Cumulative Score ---
    function resetScore() {
        if (confirm("Are you sure you want to reset the cumulative score? This action cannot be undone and will make all topics playable again.")) {
            try {
                localStorage.removeItem('htmlQuizScore'); // Clear storage
            } catch (e) {
                console.error("Failed to clear local storage:", e);
            }
            
            initTotalQuizScore(); // Re-initialize data model and display (will load a fresh score now)
            updateSidebarCompletionStatus(); // Update sidebar links
            
            quizArea.innerHTML = `<p>Quiz scores have been reset. Select a topic from the sidebar to load a quiz!</p>`;
            resultsArea.innerHTML = '';
            
            // Hide submit button
            submitButton.style.display = 'none';

            // Remove active class in sidebar
            topicList.querySelectorAll('a').forEach(a => a.classList.remove('active'));
        }
    }

    // Initialize score tracker on page load
    initTotalQuizScore();

    // Attach event listener to the reset button
    resetButton.addEventListener('click', resetScore);

    // --- 1. Handle Topic Selection from Sidebar ---
    topicList.addEventListener('click', (event) => {
        event.preventDefault(); 
        const link = event.target.closest('a');

        if (link) {
            currentTopicId = link.getAttribute('data-topic');
            
            // Highlight the active topic
            topicList.querySelectorAll('a').forEach(a => a.classList.remove('active'));
            link.classList.add('active');

            if (quizData[currentTopicId] && quizData[currentTopicId].length > 0) {
                
                // CHECK IF TOPIC IS ALREADY COMPLETED (Persistence Check)
                if (totalQuizScore.completedTopics.has(currentTopicId)) {
                    // Show a message and hide the submit button
                    quizArea.innerHTML = `<p style="color: var(--warning-bg); font-weight: bold;">Topic ${currentTopicId} has already been scored and saved! Please select another topic or use the \"Reset Total Score\" button to restart all quizzes.</p>`;
                    submitButton.style.display = 'none';
                    resultsArea.innerHTML = ''; // Clear topic results
                    displayCumulativeScore(); // Ensure cumulative score is visible
                    return; 
                }

                // If not completed, load the quiz
                loadQuiz(currentTopicId);
                submitButton.style.display = 'block'; 
                resultsArea.innerHTML = ''; 
                displayCumulativeScore(); 
            } else {
                quizArea.innerHTML = `<p>No quiz questions available for this topic yet. Try Topics 1, 4, 12, or 18.</p>`;
                submitButton.style.display = 'none';
                resultsArea.innerHTML = ''; 
            }
        }
    });

    // --- 2. Function to Load Quiz Questions ---
    function loadQuiz(topicId) {
        const questions = quizData[topicId];
        // Fetch the topic name from the link text for a better title
        const topicLink = document.querySelector(`a[data-topic=\"${topicId}\"]`);
        const topicName = topicLink ? topicLink.textContent : `Topic ${topicId}`;

        let html = `<h2>Quiz: ${topicName}</h2>`;

        questions.forEach((q, index) => {
            html += `<div class=\"question-card\" data-index=\"${index}\">`;
            html += `<p><strong>${index + 1}. ${q.question}</strong></p>`;
            q.options.forEach((option, optIndex) => {
                const radioName = `q${topicId}-${index}`;
                const optionId = `opt-${topicId}-${index}-${optIndex}`;
                // Use a label wrapping the input for better hit area
                html += `
                    <label for=\"${optionId}\" class=\"option-label\">
                        <input type=\"radio\" id=\"${optionId}\" name=\"${radioName}\" value=\"${option}\">
                        <span class=\"option-text\">${option}</span>
                    </label>
                `;
            });
            html += `</div>`;
        });

        quizArea.innerHTML = html;
        submitButton.textContent = 'Submit Answers';
    }

    // --- 3. Quiz Submission, Tracking, and Feedback ---
    submitButton.addEventListener('click', () => {
        // If the topic is already scored, prevent submission
        if (!currentTopicId || totalQuizScore.completedTopics.has(currentTopicId)) {
            return; 
        }

        const questions = quizData[currentTopicId];
        let correctCount = 0;
        let wrongCount = 0;
        let skippedCount = 0;
        
        questions.forEach((q, index) => {
            const radioName = `q${currentTopicId}-${index}`;
            const questionCard = document.querySelector(`.question-card[data-index=\"${index}\"]`);
            
            questionCard.classList.remove('correct', 'incorrect', 'skipped');

            const selectedOption = document.querySelector(`input[name=\"${radioName}\"]:checked`);
            
            // Disable all radio buttons in the current question card
            document.querySelectorAll(`input[name=\"${radioName}\"]`).forEach(input => {
                input.disabled = true;
            });

            if (selectedOption) {
                if (selectedOption.value === q.answer) {
                    correctCount++;
                    questionCard.classList.add('correct');
                } else {
                    wrongCount++;
                    questionCard.classList.add('incorrect');
                    
                    questionCard.innerHTML += `<p class=\"correct-answer-hint\">Correct Answer: <strong>${q.answer}</strong></p>`;
                }
            } else {
                skippedCount++;
                questionCard.classList.add('skipped'); 
                questionCard.innerHTML += `<p class=\"correct-answer-hint\">Skipped. Correct Answer: <strong>${q.answer}</strong></p>`;
            }
        });

        // --- UPDATE CUMULATIVE SCORE & LOCK TOPIC ---
        totalQuizScore.correct += correctCount;
        totalQuizScore.wrong += wrongCount;
        totalQuizScore.skipped += skippedCount;
        totalQuizScore.completedTopics.add(currentTopicId); // Lock this topic
        
        saveScore(); // NEW: Save the updated score to localStorage
        
        // --- Display Topic Results ---
        resultsArea.innerHTML = `
            <h3>Topic ${currentTopicId} Results:</h3>
            <ul style=\"list-style-type: none; padding-left: 0;\">
                <li style=\"color: var(--success-bg);\">✅ **Correct**: ${correctCount}</li>
                <li style=\"color: var(--error-bg);\">❌ **Wrong**: ${wrongCount}</li>
                <li style=\"color: var(--warning-bg);\">⏩ **Skipped**: ${skippedCount}</li>
                <li style=\"font-weight: bold; margin-top: 10px;\">Topic Questions: ${questions.length}</li>
            </ul>
        `;
        
        submitButton.textContent = 'Topic Scored!';
        submitButton.style.display = 'none';

        // Display the updated cumulative score and update sidebar completion status
        displayCumulativeScore();
        updateSidebarCompletionStatus();
    });
});