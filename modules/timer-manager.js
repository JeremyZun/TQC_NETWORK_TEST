// 計時器管理
export class TimerManager {
    constructor(quizCore) {
        this.quizCore = quizCore;
        this.timerInterval = null;
        this.timeRemaining = 0;
    }
    
    startTimer() {
        if (this.quizCore.currentMode === 'exam') {
            this.timeRemaining = 20 * 60; // 20分鐘
        } else {
            this.timeRemaining = 999 * 60;
        }
        
        this.timerInterval = setInterval(() => {
            this.timeRemaining--;
            
            if (this.quizCore.currentMode === 'exam') {
                const minutes = Math.floor(this.timeRemaining / 60);
                const seconds = this.timeRemaining % 60;
                const timerElement = document.getElementById('timer');
                timerElement.textContent = `剩餘時間: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                
                if (this.timeRemaining <= 300) {
                    timerElement.classList.add('timer-warning');
                }
                
                if (this.timeRemaining <= 0) {
                    this.autoSubmitQuiz();
                }
            }
        }, 1000);
    }
    
    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }
    
    autoSubmitQuiz() {
        this.stopTimer();
        alert('時間到！系統將自動交卷。');
        this.quizCore.finalSubmit();
    }
}