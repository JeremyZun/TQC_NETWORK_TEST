// 題目管理
export class QuestionManager {
    constructor(quizCore) {
        this.quizCore = quizCore;
    }
    
    prepareQuestions(range) {
        let filteredQuestions;
        
        if (this.quizCore.currentMode === 'exam') {
            filteredQuestions = this.getRandomQuestions(questionBank, 20);
        } else {
            filteredQuestions = this.filterQuestionsByRange(range);
        }
        
        this.quizCore.selectedQuestions = filteredQuestions;
        this.quizCore.shuffledQuestions = this.quizCore.selectedQuestions.map(question => {
            if (this.quizCore.currentMode === 'exam') {
                const shuffledOptions = this.shuffleOptions([...question.options]);
                const optionMapping = {};
                
                // 確保正確創建映射：打亂後選項ID -> 原始選項ID
                shuffledOptions.forEach((shuffledOption, index) => {
                    const originalOption = question.options[index];
                    optionMapping[shuffledOption.id] = originalOption.id;
                });
                
                return {
                    ...question,
                    shuffledOptions: shuffledOptions,
                    optionMapping: optionMapping
                };
            }
        });
        
        this.quizCore.userAnswers = new Array(this.quizCore.selectedQuestions.length).fill(null);
        this.quizCore.currentQuestionIndex = 0;
    }
    
    displayQuestion() {
        if (this.quizCore.selectedQuestions.length === 0 || 
            this.quizCore.currentQuestionIndex >= this.quizCore.selectedQuestions.length) {
            console.error('題目索引超出範圍');
            return;
        }
        
        const questionData = this.quizCore.shuffledQuestions[this.quizCore.currentQuestionIndex];
        const originalQuestion = this.quizCore.selectedQuestions[this.quizCore.currentQuestionIndex];
        
        if (!questionData || !originalQuestion) {
            console.error('題目資料不存在');
            return;
        }
        
        const questionNumber = document.getElementById('questionNumber');
        const questionText = document.getElementById('questionText');
        const questionSource = document.getElementById('questionSource');
        const optionsContainer = document.getElementById('optionsContainer');
        const questionCounter = document.getElementById('questionCounter');
        
        if (this.quizCore.isReviewMode) {
            questionNumber.textContent = `錯題檢視 - 第 ${this.quizCore.currentQuestionIndex + 1} 題`;
        } else {
            questionNumber.textContent = `第 ${this.quizCore.currentQuestionIndex + 1} 題`;
        }
        
        questionText.textContent = originalQuestion.question;
        questionSource.textContent = originalQuestion.source;
        questionCounter.textContent = `第 ${this.quizCore.currentQuestionIndex + 1} 題 / 共 ${this.quizCore.selectedQuestions.length} 題`;
        
        optionsContainer.innerHTML = '';
        
        const optionsToShow = questionData.shuffledOptions;
        
        optionsToShow.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            
            // 添加鍵盤快捷鍵提示
            const shortcutKey = document.createElement('span');
            shortcutKey.className = 'shortcut-key';
            shortcutKey.textContent = (index + 1).toString();
            
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'answer';
            input.id = `option-${option.id}`;
            input.value = option.id;
            
            if (this.quizCore.userAnswers[this.quizCore.currentQuestionIndex] === option.id) {
                input.checked = true;
                optionElement.classList.add('selected');
            }
            
            if (this.quizCore.isReviewMode) {
                const userAnswer = this.quizCore.userAnswers[this.quizCore.currentQuestionIndex];
                let isCorrectAnswer = false;
                let isUserAnswer = false;
                
                if (this.quizCore.currentMode === 'exam' && questionData.optionMapping) {
                    const originalOptionId = questionData.optionMapping[option.id];
                    isCorrectAnswer = originalOptionId === originalQuestion.correctAnswer;
                    isUserAnswer = option.id === userAnswer;
                } else {
                    isCorrectAnswer = option.id === originalQuestion.correctAnswer;
                    isUserAnswer = option.id === userAnswer;
                }
                
                if (isCorrectAnswer) {
                    optionElement.classList.add('correct-answer');
                } else if (isUserAnswer && !isCorrectAnswer) {
                    optionElement.classList.add('incorrect-answer');
                }
                
                input.disabled = true;
            } else {
                input.addEventListener('change', () => {
                    this.selectAnswer(option.id);
                });
                
                optionElement.addEventListener('click', (e) => {
                    if (e.target !== input) {
                        input.checked = true;
                        this.selectAnswer(option.id);
                    }
                });
            }
            
            const label = document.createElement('label');
            label.htmlFor = `option-${option.id}`;
            label.textContent = `(${option.id}) ${option.text}`;
            
            optionElement.appendChild(shortcutKey);
            optionElement.appendChild(input);
            optionElement.appendChild(label);
            optionsContainer.appendChild(optionElement);
        });
        
        // 在檢視模式下自動顯示解答與解析
        if (this.quizCore.isReviewMode) {
            this.showAnswer();
            document.getElementById('toggleAnswerBtn').style.display = 'none';
            document.getElementById('answerSection').classList.remove('hidden');
        } else {
            document.getElementById('toggleAnswerBtn').style.display = 'block';
            if (this.quizCore.currentMode === 'exam') {
                document.getElementById('answerSection').classList.add('hidden');
            } else {
                document.getElementById('answerSection').classList.remove('hidden');
            }
        }
        
        this.updateNavigationButtons();
        this.quizCore.uiManager.createQuestionNavigation();
        this.addQuestionJumpMenu();
        this.addFavoriteButton();
    }
    
    selectAnswer(answer) {
        if (this.quizCore.currentQuestionIndex >= this.quizCore.userAnswers.length) return;
        
        this.quizCore.userAnswers[this.quizCore.currentQuestionIndex] = answer;
        
        document.querySelectorAll('.option').forEach(option => {
            option.classList.remove('selected');
        });
        
        const selectedInput = document.querySelector(`input[value="${answer}"]`);
        if (selectedInput) {
            selectedInput.checked = true;
            selectedInput.closest('.option').classList.add('selected');
            
            // 新增：自動聚焦到下一個按鈕
            setTimeout(() => {
                if (this.quizCore.currentQuestionIndex < this.quizCore.selectedQuestions.length - 1) {
                    document.getElementById('nextBtn').focus();
                }
            }, 300);
        }
        
        if (this.quizCore.currentMode === 'practice' && !this.quizCore.isReviewMode) {
            this.showImmediateFeedback(answer);
            this.showAnswer();
        }
        
        this.quizCore.uiManager.updateProgress();
        this.quizCore.uiManager.createQuestionNavigation();
    }
    
    showImmediateFeedback(selectedAnswer) {
        const questionData = this.quizCore.shuffledQuestions[this.quizCore.currentQuestionIndex];
        const originalQuestion = this.quizCore.selectedQuestions[this.quizCore.currentQuestionIndex];
        
        document.querySelectorAll('.option').forEach(option => {
            option.classList.remove('correct-answer', 'incorrect-answer', 'user-correct', 'user-incorrect');
        });
        
        document.querySelectorAll('.option').forEach(option => {
            const optionInput = option.querySelector('input');
            const optionId = optionInput.value;
            
            let isCorrectAnswer = false;
            
            if (this.quizCore.currentMode === 'exam' && questionData.optionMapping) {
                const originalOptionId = questionData.optionMapping[optionId];
                isCorrectAnswer = originalOptionId === originalQuestion.correctAnswer;
            } else {
                isCorrectAnswer = optionId === originalQuestion.correctAnswer;
            }
            
            const isUserAnswer = optionId === selectedAnswer;
            
            if (isCorrectAnswer) {
                option.classList.add('correct-answer');
                if (isUserAnswer) option.classList.add('user-correct');
            } else if (isUserAnswer && !isCorrectAnswer) {
                option.classList.add('incorrect-answer');
                option.classList.add('user-incorrect');
            }
        });
    }
    
    checkAnswerCorrectness(questionIndex) {
        const originalQuestion = this.quizCore.selectedQuestions[questionIndex];
        const questionData = this.quizCore.shuffledQuestions[questionIndex];
        const userAnswer = this.quizCore.userAnswers[questionIndex];
        
        if (userAnswer === null) return false;
        
        if (this.quizCore.currentMode === 'exam' && questionData.optionMapping) {
            // 修正：正確的映射方式
            // optionMapping 結構應該是 {shuffledId: originalId}
            const originalAnswerId = questionData.optionMapping[userAnswer];
            return originalAnswerId === originalQuestion.correctAnswer;
        } else {
            return userAnswer === originalQuestion.correctAnswer;
        }
    }
    
    toggleAnswer() {
        if (this.quizCore.selectedQuestions.length === 0 || this.quizCore.currentQuestionIndex >= this.quizCore.selectedQuestions.length) {
            console.error('無法顯示解答：沒有題目資料');
            return;
        }
        
        const answerContent = document.getElementById('answerContent');
        
        if (answerContent.classList.contains('hidden')) {
            this.showAnswer();
        } else {
            this.hideAnswer();
        }
    }
    
    showAnswer() {
        if (this.quizCore.currentQuestionIndex >= this.quizCore.selectedQuestions.length || 
            this.quizCore.currentQuestionIndex >= this.quizCore.shuffledQuestions.length) {
            console.error('題目索引超出範圍');
            return;
        }
        
        const questionData = this.quizCore.shuffledQuestions[this.quizCore.currentQuestionIndex];
        const originalQuestion = this.quizCore.selectedQuestions[this.quizCore.currentQuestionIndex];
        
        if (!questionData || !originalQuestion) {
            console.error('題目資料不存在');
            return;
        }
        
        const correctAnswer = document.getElementById('correctAnswer');
        const explanation = document.getElementById('explanation');
        const answerContent = document.getElementById('answerContent');
        const toggleButton = document.getElementById('toggleAnswerBtn');
        
        let correctAnswerText = '';
        
        // 處理打亂後的選項顯示
        if (this.quizCore.currentMode === 'exam' && questionData.optionMapping) {
            let correctShuffledId = null;
            for (const [shuffledId, originalId] of Object.entries(questionData.optionMapping)) {
                if (originalId === originalQuestion.correctAnswer) {
                    correctShuffledId = shuffledId;
                    break;
                }
            }
            
            if (correctShuffledId) {
                const correctOption = questionData.shuffledOptions.find(opt => opt.id === correctShuffledId);
                correctAnswerText = correctOption ? `(${correctOption.id}) ${correctOption.text}` : '找不到正確答案';
            } else {
                correctAnswerText = '找不到正確答案';
            }
        } else {
            const correctOption = originalQuestion.options.find(opt => opt.id === originalQuestion.correctAnswer);
            correctAnswerText = correctOption ? `(${correctOption.id}) ${correctOption.text}` : '找不到正確答案';
        }
        
        // 在檢視模式下顯示用戶的選擇
        if (this.quizCore.isReviewMode) {
            const userAnswer = this.quizCore.userAnswers[this.quizCore.currentQuestionIndex];
            if (userAnswer) {
                let userAnswerText = '';
                
                if (this.quizCore.currentMode === 'exam' && questionData.optionMapping) {
                    const userOption = questionData.shuffledOptions.find(opt => opt.id === userAnswer);
                    userAnswerText = userOption ? `(${userOption.id}) ${userOption.text}` : '找不到用戶答案';
                } else {
                    const userOption = originalQuestion.options.find(opt => opt.id === userAnswer);
                    userAnswerText = userOption ? `(${userOption.id}) ${userOption.text}` : '找不到用戶答案';
                }
                
                correctAnswerText = `您的選擇: ${userAnswerText} | 正確答案: ${correctAnswerText}`;
            } else {
                correctAnswerText = `您未作答 | 正確答案: ${correctAnswerText}`;
            }
        }
        
        correctAnswer.textContent = correctAnswerText;
        explanation.textContent = originalQuestion.explanation || '無解析內容';
        
        answerContent.classList.remove('hidden');
        toggleButton.textContent = '隱藏解答';
    }
    
    hideAnswer() {
        const answerContent = document.getElementById('answerContent');
        const toggleButton = document.getElementById('toggleAnswerBtn');
        
        answerContent.classList.add('hidden');
        toggleButton.textContent = '顯示解答';
    }
    
    resetAnswerSection() {
        this.hideAnswer();
        
        if (this.quizCore.currentMode === 'exam') {
            document.getElementById('answerSection').classList.add('hidden');
        } else {
            document.getElementById('answerSection').classList.remove('hidden');
        }
    }
    
    updateNavigationButtons() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const submitBtn = document.getElementById('submitBtn');
        
        prevBtn.disabled = this.quizCore.currentQuestionIndex === 0;
        nextBtn.disabled = this.quizCore.currentQuestionIndex === this.quizCore.selectedQuestions.length - 1;
        
        if (this.quizCore.currentMode === 'exam') {
            submitBtn.style.display = 'block';
        } else {
            submitBtn.style.display = 'none';
        }
    }
    
    addQuestionJumpMenu() {
        const quizHeader = document.querySelector('.quiz-header');
        
        const existingJump = document.querySelector('.question-jump-container');
        if (existingJump) existingJump.remove();
        
        const jumpContainer = document.createElement('div');
        jumpContainer.className = 'question-jump-container';
        
        const jumpSelect = document.createElement('select');
        jumpSelect.className = 'question-jump-select';
        jumpSelect.innerHTML = '<option value="">快速跳題...</option>';
        
        this.quizCore.selectedQuestions.forEach((_, index) => {
            const option = document.createElement('option');
            option.value = index;
            
            let status = '';
            const userAnswer = this.quizCore.userAnswers[index];
            if (userAnswer === null) {
                status = ' (未作答)';
            } else {
                const isCorrect = this.checkAnswerCorrectness(index);
                status = isCorrect ? ' (正確)' : ' (錯誤)';
            }
            
            option.textContent = `第 ${index + 1} 題${status}`;
            if (index === this.quizCore.currentQuestionIndex) {
                option.selected = true;
            }
            jumpSelect.appendChild(option);
        });
        
        jumpSelect.addEventListener('change', (e) => {
            if (e.target.value !== '') {
                this.quizCore.currentQuestionIndex = parseInt(e.target.value);
                this.displayQuestion();
            }
        });
        
        jumpContainer.appendChild(jumpSelect);
        quizHeader.appendChild(jumpContainer);
    }
    
    addFavoriteButton() {
        const questionHeader = document.querySelector('.question-header');
        
        const existingBtn = document.querySelector('.favorite-btn');
        if (existingBtn) existingBtn.remove();
        
        if (this.quizCore.isReviewMode) return;
        
        const favoriteBtn = document.createElement('button');
        favoriteBtn.className = 'favorite-btn';
        favoriteBtn.innerHTML = '♥';
        favoriteBtn.title = '收藏題目';
        
        const currentQuestion = this.quizCore.selectedQuestions[this.quizCore.currentQuestionIndex];
        if (this.quizCore.storageManager.isQuestionFavorited(currentQuestion.id)) {
            favoriteBtn.classList.add('favorited');
        }
        
        favoriteBtn.addEventListener('click', () => {
            const isAdded = this.quizCore.storageManager.toggleFavorite(currentQuestion.id);
            favoriteBtn.classList.toggle('favorited');
            this.quizCore.uiManager.showToast(isAdded ? '已加入收藏' : '已取消收藏');
        });
        
        questionHeader.appendChild(favoriteBtn);
    }
    
    startFavoriteQuiz() {
        const favoriteIds = this.quizCore.storageManager.getFavoriteQuestions();
        
        if (favoriteIds.length === 0) {
            alert('目前沒有收藏的題目！');
            return;
        }
        
        const favoriteQuestions = questionBank.filter(q => favoriteIds.includes(q.id));
        
        if (favoriteQuestions.length === 0) {
            alert('找不到收藏的題目，可能題庫已更新！');
            return;
        }
        
        this.quizCore.selectedQuestions = favoriteQuestions;
        this.quizCore.shuffledQuestions = this.quizCore.selectedQuestions.map(q => ({
            ...q,
            shuffledOptions: [...q.options],
            optionMapping: null
        }));
        this.quizCore.userAnswers = new Array(this.quizCore.selectedQuestions.length).fill(null);
        this.quizCore.currentQuestionIndex = 0;
        this.quizCore.isReviewMode = false;
        
        this.quizCore.showQuizScreen();
    }
    
    startIncorrectQuiz() {
        const incorrectIds = this.quizCore.storageManager.getIncorrectQuestions();
        
        if (incorrectIds.length === 0) {
            alert('目前沒有錯題記錄！');
            return;
        }
        
        const incorrectQuestions = questionBank.filter(q => incorrectIds.includes(q.id));
        
        if (incorrectQuestions.length === 0) {
            alert('找不到對應的錯題，可能題庫已更新！');
            return;
        }
        
        this.quizCore.selectedQuestions = incorrectQuestions;
        this.quizCore.shuffledQuestions = this.quizCore.selectedQuestions.map(q => ({
            ...q,
            shuffledOptions: [...q.options],
            optionMapping: null
        }));
        this.quizCore.userAnswers = new Array(this.quizCore.selectedQuestions.length).fill(null);
        this.quizCore.currentQuestionIndex = 0;
        this.quizCore.isReviewMode = false;
        
        this.quizCore.showQuizScreen();
    }
    
    reviewIncorrect() {
        const incorrectIndices = [];
        this.quizCore.userAnswers.forEach((answer, index) => {
            const originalQuestion = this.quizCore.selectedQuestions[index];
            const questionData = this.quizCore.shuffledQuestions[index];
            
            if (!originalQuestion || !questionData) {
                console.error('題目資料不存在，跳過索引:', index);
                return;
            }
            
            if (answer === null) {
                incorrectIndices.push(index);
            } else {
                let isCorrect = false;
                
                if (this.quizCore.currentMode === 'exam' && questionData.optionMapping) {
                    const originalAnswerId = questionData.optionMapping[answer];
                    isCorrect = originalAnswerId === originalQuestion.correctAnswer;
                } else {
                    isCorrect = answer === originalQuestion.correctAnswer;
                }
                
                if (!isCorrect) {
                    incorrectIndices.push(index);
                }
            }
        });
        
        if (incorrectIndices.length === 0) {
            alert('恭喜！您沒有答錯任何題目。');
            return;
        }
        
        const newSelectedQuestions = [];
        const newShuffledQuestions = [];
        const newUserAnswers = [];
        
        incorrectIndices.forEach(index => {
            if (this.quizCore.selectedQuestions[index] && this.quizCore.shuffledQuestions[index]) {
                newSelectedQuestions.push(this.quizCore.selectedQuestions[index]);
                newShuffledQuestions.push(this.quizCore.shuffledQuestions[index]);
                newUserAnswers.push(this.quizCore.userAnswers[index]);
            }
        });
        
        if (newSelectedQuestions.length === 0) {
            alert('無法載入錯題，請重新開始測驗。');
            return;
        }
        
        this.quizCore.modeManager.switchMode('practice');
        this.quizCore.selectedQuestions = newSelectedQuestions;
        this.quizCore.shuffledQuestions = newShuffledQuestions;
        this.quizCore.userAnswers = newUserAnswers;
        this.quizCore.currentQuestionIndex = 0;
        this.quizCore.isReviewMode = true;
        
        document.body.className = 'practice-mode';
        this.quizCore.showQuizScreen();
    }
    
    // 工具方法
    getRandomQuestions(questions, count) {
        if (questions.length <= count) {
            return [...questions];
        }
        
        const shuffled = [...questions].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count);
    }
    
    shuffleOptions(options) {
        const shuffled = [...options];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
    
    filterQuestionsByRange(range) {
        if (range === 'all') {
            return [...questionBank];
        }
        
        const [start, end] = range.split('-').map(Number);
        return questionBank.filter(q => q.id >= start && q.id <= end);
    }
}