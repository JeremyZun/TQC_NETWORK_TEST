// 本地儲存管理
export class StorageManager {
    getFavoriteQuestions() {
        return JSON.parse(localStorage.getItem('favoriteQuestions') || '[]');
    }
    
    setFavoriteQuestions(favorites) {
        localStorage.setItem('favoriteQuestions', JSON.stringify(favorites));
    }
    
    getIncorrectQuestions() {
        return JSON.parse(localStorage.getItem('incorrectQuestions') || '[]');
    }
    
    setIncorrectQuestions(incorrectQuestions) {
        localStorage.setItem('incorrectQuestions', JSON.stringify(incorrectQuestions));
    }
    
    recordIncorrectQuestions(quizCore) {
        const incorrectQuestions = [];
        
        quizCore.userAnswers.forEach((answer, index) => {
            if (!quizCore.questionManager.checkAnswerCorrectness(index)) {
                incorrectQuestions.push(quizCore.selectedQuestions[index].id);
            }
        });
        
        this.setIncorrectQuestions(incorrectQuestions);
    }
    
    isQuestionFavorited(questionId) {
        const favorites = this.getFavoriteQuestions();
        return favorites.includes(questionId);
    }
    
    toggleFavorite(questionId) {
        let favorites = this.getFavoriteQuestions();
        const index = favorites.indexOf(questionId);
        
        if (index > -1) {
            favorites.splice(index, 1);
        } else {
            favorites.push(questionId);
        }
        
        this.setFavoriteQuestions(favorites);
        return index === -1; // 返回是否新增收藏
    }
}