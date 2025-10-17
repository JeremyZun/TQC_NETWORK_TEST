// 界面管理
export class UIManager {
    constructor(quizCore) {
        this.quizCore = quizCore;
    }
    
    initializeEventListeners() {
        // 模式切換
        document.getElementById('practiceModeBtn').addEventListener('click', () => 
            this.quizCore.modeManager.switchMode('practice'));
        document.getElementById('examModeBtn').addEventListener('click', () => 
            this.quizCore.modeManager.switchMode('exam'));
        
        // 開始測驗
        document.getElementById('startBtn').addEventListener('click', () => this.quizCore.startQuiz());
        
        // 導航按鈕
        document.getElementById('prevBtn').addEventListener('click', () => this.quizCore.previousQuestion());
        document.getElementById('nextBtn').addEventListener('click', () => this.quizCore.nextQuestion());
        document.getElementById('submitBtn').addEventListener('click', () => this.quizCore.submitQuiz());
        
        // 解答顯示/隱藏
        document.getElementById('toggleAnswerBtn').addEventListener('click', () => 
            this.quizCore.questionManager.toggleAnswer());
        
        // 結果畫面按鈕
        document.getElementById('reviewBtn').addEventListener('click', () => 
            this.quizCore.questionManager.reviewIncorrect());
        document.getElementById('retryExamBtn').addEventListener('click', () => this.quizCore.retryExam());
        document.getElementById('restartBtn').addEventListener('click', () => this.quizCore.restartQuiz());

        document.getElementById('favoriteQuizBtn')?.addEventListener('click', () => 
            this.quizCore.questionManager.startFavoriteQuiz());
        document.getElementById('incorrectQuizBtn')?.addEventListener('click', () => 
            this.quizCore.questionManager.startIncorrectQuiz());
    }
    
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }
    
    updateProgress() {
        const progress = (this.quizCore.currentQuestionIndex + 1) / this.quizCore.selectedQuestions.length * 100;
        document.querySelector('.progress-fill').style.width = `${progress}%`;
    }
    
    updateResultDisplay(results) {
        document.getElementById('scorePercent').textContent = `${results.scorePercent}%`;
        document.getElementById('scoreText').textContent = results.correctCount;
        document.getElementById('totalQuestions').textContent = results.totalQuestions;
        document.getElementById('correctCount').textContent = results.correctCount;
        document.getElementById('incorrectCount').textContent = results.incorrectCount;
        document.getElementById('unansweredCount').textContent = results.unansweredCount;
        
        const minutes = Math.floor(results.timeSpent / 60);
        const seconds = results.timeSpent % 60;
        document.getElementById('timeSpent').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        const scoreCircle = document.querySelector('.score-circle');
        scoreCircle.style.background = `conic-gradient(#2ecc71 ${results.scorePercent}%, #ecf0f1 ${results.scorePercent}%)`;
    }
    
    updateResultButtons() {
        const retryBtn = document.getElementById('retryExamBtn');
        const reviewBtn = document.getElementById('reviewBtn');
        
        if (this.quizCore.currentMode === 'exam') {
            retryBtn.style.display = 'block';
            reviewBtn.style.display = 'block';
        } else {
            retryBtn.style.display = 'none';
            reviewBtn.style.display = 'block';
        }
    }
    
    showConfirmDialog(unansweredCount, confirmCallback) {
        const dialog = document.createElement('div');
        dialog.className = 'confirm-dialog';
        dialog.innerHTML = `
            <div class="confirm-content">
                <h3>確認交卷</h3>
                <p>您還有 <strong>${unansweredCount}</strong> 題尚未作答，確定要交卷嗎？</p>
                <div class="confirm-actions">
                    <button id="cancelSubmit" class="btn-secondary">繼續作答</button>
                    <button id="confirmSubmit" class="btn-primary">確定交卷</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(dialog);
        
        document.getElementById('cancelSubmit').addEventListener('click', () => {
            document.body.removeChild(dialog);
        });
        
        document.getElementById('confirmSubmit').addEventListener('click', () => {
            document.body.removeChild(dialog);
            confirmCallback();
        });
    }
    
    createQuestionNavigation() {
        const quizHeader = document.querySelector('.quiz-header');
        let navIndicator = document.getElementById('questionNavIndicator');
        
        if (navIndicator) navIndicator.remove();
        
        navIndicator = document.createElement('div');
        navIndicator.id = 'questionNavIndicator';
        navIndicator.className = 'question-nav-indicator';
        
        if (document.getElementById('quizScreen').classList.contains('active')) {
            quizHeader.appendChild(navIndicator);
        }
        
        this.quizCore.selectedQuestions.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = 'nav-dot';
            
            const userAnswer = this.quizCore.userAnswers[index];
            if (userAnswer === null) {
                dot.classList.add('unanswered');
            } else {
                const isCorrect = this.quizCore.questionManager.checkAnswerCorrectness(index);
                dot.classList.add(isCorrect ? 'correct' : 'incorrect');
            }
            
            if (index === this.quizCore.currentQuestionIndex) {
                dot.classList.add('current');
            }
            
            dot.addEventListener('click', () => {
                this.quizCore.currentQuestionIndex = index;
                this.quizCore.questionManager.displayQuestion();
            });
            
            dot.title = `第 ${index + 1} 題`;
            navIndicator.appendChild(dot);
        });
    }
    
    showToast(message) {
        const existingToast = document.querySelector('.toast');
        if (existingToast) existingToast.remove();
        
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #2c3e50;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 6px;
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            if (toast.parentNode) toast.parentNode.removeChild(toast);
        }, 3000);
    }
}