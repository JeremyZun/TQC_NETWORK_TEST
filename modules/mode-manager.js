// 模式管理
export class ModeManager {
    constructor(quizCore) {
        this.quizCore = quizCore;
    }
    
    switchMode(mode) {
        if (this.quizCore.currentMode === mode) return;
        
        this.quizCore.currentMode = mode;
        this.quizCore.resetQuizState();
        
        document.getElementById('practiceModeBtn').classList.toggle('active', mode === 'practice');
        document.getElementById('examModeBtn').classList.toggle('active', mode === 'exam');
        
        this.updateModeDisplay();
        document.body.className = `${mode}-mode`;
        this.quizCore.showStartScreen();
    }
    
    updateModeDisplay() {
        const modeTitle = document.getElementById('modeTitle');
        const modeDescription = document.getElementById('modeDescription');
        const questionRange = document.getElementById('questionRange');
        const rangeLabel = document.querySelector('.options label');
        
        if (this.quizCore.currentMode === 'practice') {
            modeTitle.textContent = '練習模式';
            modeDescription.textContent = '在練習模式中，您可以逐題練習並查看解答與解析。';
            questionRange.style.display = 'block';
            rangeLabel.style.display = 'block';
        } else {
            modeTitle.textContent = '模擬考模式';
            modeDescription.textContent = '在模擬考模式中，您將在20分鐘內完成20道隨機題目，選項順序會被打亂。';
            questionRange.style.display = 'none';
            rangeLabel.style.display = 'none';
        }
    }
}