// UI Controller - Handles all UI rendering and interactions

export class UIController {
    constructor() {
        this.contentArea = document.getElementById('content-area');
    }
    
    renderModule(moduleData) {
        // Create module container
        const moduleContainer = document.createElement('div');
        moduleContainer.className = 'module-container active';
        moduleContainer.id = `module-${moduleData.id}`;
        
        // Create module header
        const moduleHeader = document.createElement('div');
        moduleHeader.className = 'module-header';
        moduleHeader.innerHTML = `
            <h2>${moduleData.title}</h2>
            <p>${moduleData.description}</p>
        `;
        
        // Create module content
        const moduleContent = document.createElement('div');
        moduleContent.className = 'module-content';
        moduleContent.innerHTML = moduleData.content;
        
        // Create quiz container
        const quizContainer = document.createElement('div');
        quizContainer.className = 'quiz-container';
        quizContainer.id = moduleData.quiz.id;
        
        // Add quiz title as a heading element instead of using innerHTML
        const quizTitle = document.createElement('h3');
        quizTitle.textContent = moduleData.quiz.title;
        quizContainer.appendChild(quizTitle);
        
        // Create animation containers
        const animationsContainer = document.createElement('div');
        animationsContainer.className = 'animations-container';
        
        moduleData.animations.forEach(animation => {
            const animationContainer = document.createElement('div');
            animationContainer.className = 'animation-container';
            animationContainer.id = animation.id;
            animationContainer.innerHTML = `
                <h3>${animation.title}</h3>
                <p>${animation.description}</p>
                <div class="animation-canvas" id="${animation.id}-canvas"></div>
            `;
            animationsContainer.appendChild(animationContainer);
        });
        
        // Create navigation
        const navigation = document.createElement('div');
        navigation.className = 'module-navigation';
        navigation.innerHTML = `
            <button id="prev-module" class="btn secondary-btn">Previous Module</button>
            <button id="next-module" class="btn primary-btn">Next Module</button>
        `;
        
        // Create progress bar
        const progressContainer = document.createElement('div');
        progressContainer.className = 'progress-container';
        progressContainer.innerHTML = `<div class="progress-bar" id="module-progress"></div>`;
        
        // Append all elements
        moduleContainer.appendChild(moduleHeader);
        moduleContainer.appendChild(moduleContent);
        moduleContainer.appendChild(animationsContainer);
        moduleContainer.appendChild(quizContainer);
        moduleContainer.appendChild(progressContainer);
        moduleContainer.appendChild(navigation);
        
        // Clear content area and append new module
        this.contentArea.innerHTML = '';
        this.contentArea.appendChild(moduleContainer);
        
        // Setup navigation event listeners
        this.setupNavigationListeners();
    }
    
    setupNavigationListeners() {
        const prevButton = document.getElementById('prev-module');
        const nextButton = document.getElementById('next-module');
        
        if (prevButton) {
            prevButton.addEventListener('click', () => {
                // This will be handled by the app controller
                document.dispatchEvent(new CustomEvent('navigate-module', { detail: { direction: 'prev' } }));
            });
        }
        
        if (nextButton) {
            nextButton.addEventListener('click', () => {
                // This will be handled by the app controller
                document.dispatchEvent(new CustomEvent('navigate-module', { detail: { direction: 'next' } }));
            });
        }
    }
    
    updateProgress(currentIndex, totalModules) {
        const progressBar = document.getElementById('module-progress');
        if (progressBar) {
            const progressPercentage = ((currentIndex + 1) / totalModules) * 100;
            progressBar.style.width = `${progressPercentage}%`;
        }
    }
    
    showFeedback(isCorrect, explanation) {
        const feedbackElement = document.createElement('div');
        feedbackElement.className = `feedback ${isCorrect ? 'success' : 'error'}`;
        feedbackElement.innerHTML = `
            <p><strong>${isCorrect ? 'Correct!' : 'Incorrect!'}</strong></p>
            <p>${explanation}</p>
        `;
        
        // Find the active quiz container
        const quizContainer = document.querySelector('.quiz-container');
        if (quizContainer) {
            // Remove any existing feedback
            const existingFeedback = quizContainer.querySelector('.feedback');
            if (existingFeedback) {
                existingFeedback.remove();
            }
            
            // Add new feedback
            quizContainer.appendChild(feedbackElement);
        }
    }
}