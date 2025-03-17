// Main Application JavaScript

import { ModuleManager } from './modules/moduleManager.js';
import { UIController } from './ui/uiController.js';
import { AnimationController } from './animations/animationController.js';
import { QuizManager } from './quiz/quizManager.js';

class GitLookApp {
    constructor() {
        // Initialize controllers
        this.moduleManager = new ModuleManager();
        this.uiController = new UIController();
        this.animationController = new AnimationController();
        this.quizManager = new QuizManager();
        
        // Setup event listeners
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        // Start learning button
        const startButton = document.getElementById('start-learning');
        if (startButton) {
            startButton.addEventListener('click', () => this.startLearning());
        }
        
        // Module navigation events
        document.addEventListener('navigate-module', (event) => {
            const direction = event.detail.direction;
            if (direction === 'next') {
                this.moduleManager.nextModule();
                this.loadModule(this.moduleManager.currentModuleIndex);
            } else if (direction === 'prev') {
                this.moduleManager.previousModule();
                this.loadModule(this.moduleManager.currentModuleIndex);
            }
        });
        
        // Quiz feedback event
        document.addEventListener('quiz-feedback', (event) => {
            this.uiController.showFeedback(event.detail.isCorrect, event.detail.explanation);
        });
    }
    
    startLearning() {
        // Hide welcome screen
        const welcomeScreen = document.querySelector('.welcome-screen');
        if (welcomeScreen) {
            welcomeScreen.style.display = 'none';
        }
        
        // Load first module
        this.loadModule(0);
    }
    
    loadModule(moduleIndex) {
        // Get module data
        const moduleData = this.moduleManager.getModule(moduleIndex);
        if (!moduleData) return;
        
        // Render module content
        this.uiController.renderModule(moduleData);
        
        // Setup quiz for this module
        if (moduleData.quiz) {
            this.quizManager.setupQuiz(moduleData.quiz);
        }
        
        // Setup animations for this module
        if (moduleData.animations) {
            this.animationController.setupAnimations(moduleData.animations);
        }
        
        // Update progress
        this.uiController.updateProgress(moduleIndex, this.moduleManager.getTotalModules());
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const app = new GitLookApp();
});