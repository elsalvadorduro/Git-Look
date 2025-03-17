// Quiz Manager - Handles quiz rendering and interaction

export class QuizManager {
    constructor() {
        // Track current quiz state
        this.currentQuiz = null;
        this.selectedAnswers = {};
    }
    
    setupQuiz(quizData) {
        this.currentQuiz = quizData;
        this.selectedAnswers = {};
        
        // Find quiz container
        const quizContainer = document.getElementById(quizData.id);
        if (!quizContainer) return;
        
        // Render questions
        quizData.questions.forEach(question => {
            this.renderQuestion(quizContainer, question);
        });
    }
    
    renderQuestion(container, questionData) {
        // Create question element
        const questionElement = document.createElement('div');
        questionElement.className = 'quiz-question-container';
        questionElement.id = `question-${questionData.id}`;
        
        // Add question text
        const questionText = document.createElement('div');
        questionText.className = 'quiz-question';
        questionText.textContent = questionData.question;
        questionElement.appendChild(questionText);
        
        // Add options
        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'quiz-options';
        
        questionData.options.forEach(option => {
            const optionElement = document.createElement('div');
            optionElement.className = 'quiz-option';
            optionElement.id = option.id;
            optionElement.textContent = option.text;
            
            // Add click event
            optionElement.addEventListener('click', () => {
                this.selectAnswer(questionData.id, option.id, questionData.correctAnswer, questionData.explanation);
            });
            
            optionsContainer.appendChild(optionElement);
        });
        
        questionElement.appendChild(optionsContainer);
        
        // Add feedback container
        const feedbackContainer = document.createElement('div');
        feedbackContainer.className = 'feedback';
        feedbackContainer.id = `feedback-${questionData.id}`;
        questionElement.appendChild(feedbackContainer);
        
        // Add to main container
        container.appendChild(questionElement);
    }
    
    selectAnswer(questionId, optionId, correctAnswerId, explanation) {
        // Update selected answer
        this.selectedAnswers[questionId] = optionId;
        
        // Get all options for this question
        const questionContainer = document.getElementById(`question-${questionId}`);
        const options = questionContainer.querySelectorAll('.quiz-option');
        
        // Reset all options
        options.forEach(option => {
            option.className = 'quiz-option';
        });
        
        // Mark selected option
        const selectedOption = document.getElementById(optionId);
        selectedOption.className = 'quiz-option selected';
        
        // Check if correct
        const isCorrect = optionId === correctAnswerId;
        
        // After a short delay, show the result
        setTimeout(() => {
            // Mark correct/incorrect
            if (isCorrect) {
                selectedOption.className = 'quiz-option correct';
            } else {
                selectedOption.className = 'quiz-option incorrect';
                const correctOption = document.getElementById(correctAnswerId);
                correctOption.className = 'quiz-option correct';
            }
            
            // Show feedback
            const feedbackEvent = new CustomEvent('quiz-feedback', {
                detail: {
                    isCorrect,
                    explanation
                }
            });
            document.dispatchEvent(feedbackEvent);
        }, 500);
    }
}