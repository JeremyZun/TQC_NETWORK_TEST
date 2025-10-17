// 核心測驗邏輯
import { UIManager } from './ui-manager.js';
import { QuestionManager } from './question-manager.js';
import { ModeManager } from './mode-manager.js';
import { StorageManager } from './storage-manager.js';
import { TimerManager } from './timer-manager.js';

export class QuizCore {
    constructor() {
        this.currentMode = 'practice';
        this.currentQuestionIndex = 0;
        this.selectedQuestions = [];
        this.userAnswers = [];
        this.startTime = null;
        this.isReviewMode = false;
        this.shuffledQuestions = [];
        
        // 初始化管理器
        this.uiManager = new UIManager(this);
        this.questionManager = new QuestionManager(this);
        this.modeManager = new ModeManager(this);
        this.storageManager = new StorageManager();
        this.timerManager = new TimerManager(this);
        
        this.initializeEventListeners();
        this.showStartScreen();
    }
    
    initializeEventListeners() {
        this.uiManager.initializeEventListeners();
    }
    
    // 重置測驗狀態
    resetQuizState() {
        this.currentQuestionIndex = 0;
        this.selectedQuestions = [];
        this.userAnswers = [];
        this.shuffledQuestions = [];
        this.isReviewMode = false;
        this.timerManager.stopTimer();
        
        // 重置界面元素到初始狀態
        this.resetUIElements();
    }
    
    // 重置界面元素
    resetUIElements() {
        // 重置進度條
        const progressFill = document.querySelector('.progress-fill');
        if (progressFill) {
            progressFill.style.width = '0%';
        }
        
        // 重置計時器顯示
        const timerElement = document.getElementById('timer');
        if (timerElement) {
            timerElement.textContent = '剩餘時間: 20:00';
            timerElement.classList.remove('timer-warning');
        }
        
        // 重置題目計數器
        const questionCounter = document.getElementById('questionCounter');
        if (questionCounter) {
            questionCounter.textContent = '第 1 題 / 共 0 題';
        }
        
        // 移除導航指示器
        const navIndicator = document.getElementById('questionNavIndicator');
        if (navIndicator) {
            navIndicator.remove();
        }
        
        // 重置選項容器
        const optionsContainer = document.getElementById('optionsContainer');
        if (optionsContainer) {
            optionsContainer.innerHTML = '';
        }
        
        // 重置解答區域
        this.questionManager.resetAnswerSection();
        
        // 移除題目跳轉選單
        const jumpContainer = document.querySelector('.question-jump-container');
        if (jumpContainer) {
            jumpContainer.remove();
        }
        
        // 移除收藏按鈕
        const favoriteBtn = document.querySelector('.favorite-btn');
        if (favoriteBtn) {
            favoriteBtn.remove();
        }
    }
    
    // 畫面導航方法
    showStartScreen() {
        this.uiManager.showScreen('startScreen');
        this.modeManager.updateModeDisplay();
    }
    
    showQuizScreen() {
        this.uiManager.showScreen('quizScreen');
        this.questionManager.displayQuestion();
        this.uiManager.updateProgress();
        this.uiManager.createQuestionNavigation();
        
        // 新增：將焦點設置到題目區域
        setTimeout(() => {
            const questionContainer = document.querySelector('.question-container');
            if (questionContainer) {
                questionContainer.focus();
            }
        }, 100);
        
        if (this.currentMode === 'exam') {
            this.timerManager.startTimer();
        }
    }
    
    showResultScreen() {
        this.uiManager.showScreen('resultScreen');
        this.calculateResults();
        this.uiManager.updateResultButtons();
    }
    
    // 測驗流程方法
    startQuiz() {
        const range = document.getElementById('questionRange').value;
        this.questionManager.prepareQuestions(range);
        this.startTime = new Date();
        this.showQuizScreen();
    }
    
    submitQuiz() {
        const unansweredCount = this.userAnswers.filter(answer => answer === null).length;
        
        if (unansweredCount > 0 && this.currentMode === 'exam') {
            this.uiManager.showConfirmDialog(unansweredCount, () => this.finalSubmit());
        } else {
            this.finalSubmit();
        }
    }
    
    finalSubmit() {
        this.timerManager.stopTimer();
        const endTime = new Date();
        this.timeSpent = Math.floor((endTime - this.startTime) / 1000);
        
        // 記錄錯題
        if (this.currentMode === 'exam') {
            this.storageManager.recordIncorrectQuestions(this);
        }
        
        this.showResultScreen();
    }
    
    // 結果計算
    calculateResults() {
        let correctCount = 0;
        let incorrectCount = 0;
        let unansweredCount = 0;
        
        this.userAnswers.forEach((answer, index) => {
            if (answer === null) {
                unansweredCount++;
            } else {
                const isCorrect = this.questionManager.checkAnswerCorrectness(index);
                console.log(`題目 ${index + 1}: 用戶答案=${answer}, 正確=${isCorrect}`); // 調試用
                if (isCorrect) {
                    correctCount++;
                } else {
                    incorrectCount++;
                }
            }
        });
        
        const scorePercent = Math.round((correctCount / this.selectedQuestions.length) * 100);
        
        this.uiManager.updateResultDisplay({
            scorePercent,
            correctCount,
            incorrectCount,
            unansweredCount,
            totalQuestions: this.selectedQuestions.length,
            timeSpent: this.timeSpent
        });
    }
    
    // 導航方法
    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.questionManager.displayQuestion();
            // 新增：確保底部可見
            this.uiManager.ensureBottomSectionVisible();
        }
    }
    
    nextQuestion() {
        if (this.currentQuestionIndex < this.selectedQuestions.length - 1) {
            this.currentQuestionIndex++;
            this.questionManager.displayQuestion();
            // 新增：確保底部可見
            this.uiManager.ensureBottomSectionVisible();
        }
    }
    
    // 工具方法
    restartQuiz() {
        this.isReviewMode = false;
        this.showStartScreen();
    }
    
    retryExam() {
        this.isReviewMode = false;
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.startQuiz();
    }
}