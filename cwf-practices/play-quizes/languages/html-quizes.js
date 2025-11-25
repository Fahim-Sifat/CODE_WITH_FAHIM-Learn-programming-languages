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
        }
    ],
    
    // Topic ID 4: Structure
    "4": [
        {
            question: "Which of the following elements is the root element of an HTML page?",
            options: ["<head>", "<body>", "<html>", "<title>"],
            answer: "<html>"
        },
        {
            question: "Where is the title of the HTML page defined?",
            options: ["<header>", "<body>", "<meta>", "<title>"],
            answer: "<title>"
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
                    quizArea.innerHTML = `<p style="color: var(--warning-bg); font-weight: bold;">Topic ${currentTopicId} has already been scored and saved! Please select another topic or use the "Reset Total Score" button to restart all quizzes.</p>`;
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
        const topicLink = document.querySelector(`a[data-topic="${topicId}"]`);
        const topicName = topicLink ? topicLink.textContent : `Topic ${topicId}`;

        let html = `<h2>Quiz: ${topicName}</h2>`;

        questions.forEach((q, index) => {
            html += `<div class="question-card" data-index="${index}">`;
            html += `<p><strong>${index + 1}. ${q.question}</strong></p>`;
            q.options.forEach((option, optIndex) => {
                const radioName = `q${topicId}-${index}`;
                const optionId = `opt-${topicId}-${index}-${optIndex}`;
                // Use a label wrapping the input for better hit area
                html += `
                    <label for="${optionId}" class="option-label">
                        <input type="radio" id="${optionId}" name="${radioName}" value="${option}">
                        <span class="option-text">${option}</span>
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
            const questionCard = document.querySelector(`.question-card[data-index="${index}"]`);
            
            questionCard.classList.remove('correct', 'incorrect', 'skipped');

            const selectedOption = document.querySelector(`input[name="${radioName}"]:checked`);
            
            // Disable all radio buttons in the current question card
            document.querySelectorAll(`input[name="${radioName}"]`).forEach(input => {
                input.disabled = true;
            });

            if (selectedOption) {
                if (selectedOption.value === q.answer) {
                    correctCount++;
                    questionCard.classList.add('correct');
                } else {
                    wrongCount++;
                    questionCard.classList.add('incorrect');
                    
                    questionCard.innerHTML += `<p class="correct-answer-hint">Correct Answer: <strong>${q.answer}</strong></p>`;
                }
            } else {
                skippedCount++;
                questionCard.classList.add('skipped'); 
                questionCard.innerHTML += `<p class="correct-answer-hint">Skipped. Correct Answer: <strong>${q.answer}</strong></p>`;
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
            <ul style="list-style-type: none; padding-left: 0;">
                <li style="color: var(--success-bg);">✅ **Correct**: ${correctCount}</li>
                <li style="color: var(--error-bg);">❌ **Wrong**: ${wrongCount}</li>
                <li style="color: var(--warning-bg);">⏩ **Skipped**: ${skippedCount}</li>
                <li style="font-weight: bold; margin-top: 10px;">Topic Questions: ${questions.length}</li>
            </ul>
        `;
        
        submitButton.textContent = 'Topic Scored!';
        submitButton.style.display = 'none';

        // Display the updated cumulative score and update sidebar completion status
        displayCumulativeScore();
        updateSidebarCompletionStatus();
    });
});