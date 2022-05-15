var question = document.querySelector('#question');
var choices = Array.from(document.querySelectorAll('.choice-text'));
var progressText = document.querySelector('#progress-text');
var scoreText = document.querySelector('#score');


var questionss = [
    {
        question: 'Which of these is not a semantic HTML element?',
        choice1: '<article',
        choice2: '<nav>',
        choice3: '<link>',
        choice4: '<section>',
        answer: 3,
    },
    {
        question: 'What is CSS an abbreviation for?',
        choice1: 'Cascading Style Sheet',
        choice2: 'Create Script Style',
        choice3: 'Cool Stuff Sheet',
        choice4: 'Crazy Stylistic Stuff',
        answer: 1,
    },
    {
        question: 'Which of the following commands is used to create and move to a new git branch?',
        choice1: '$git merge',
        choice2: '$git push origin main',
        choice3: '$git branch',
        choice4: '$git checkout -b <branch-name>',
        answer: 4,
    },
    {
        question: 'Where should you link style sheets in an HTML document?',
        choice1: 'In the <footer>',
        choice2: 'In the <head>',
        choice3: 'At the bottom of the <body>',
        choice4: 'It matters not',
        answer: 2,
    },
    {
        question: 'Real talk: cutest avenger:',
        choice1: 'Cap',
        choice2: 'Spidey',
        choice3: 'Hulk',
        choice4: 'Joker',
        answer: 1
    }
]
