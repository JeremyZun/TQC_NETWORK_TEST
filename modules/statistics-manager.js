// statistics-manager.js
export class StatisticsManager {
    constructor(quizCore) {
        this.quizCore = quizCore;
        this.storageKey = 'quizStatistics';
    }

    // 記錄測驗結果
    recordQuizResult(results) {
        const stats = this.getStatistics();
        const quizRecord = {
            id: Date.now(),
            date: new Date().toISOString(),
            mode: this.quizCore.currentMode,
            totalQuestions: results.totalQuestions,
            correctCount: results.correctCount,
            incorrectCount: results.incorrectCount,
            unansweredCount: results.unansweredCount,
            scorePercent: results.scorePercent,
            timeSpent: results.timeSpent,
            questionRange: document.getElementById('questionRange')?.value || 'all'
        };

        stats.quizHistory.unshift(quizRecord);
        
        // 只保留最近50次記錄
        if (stats.quizHistory.length > 50) {
            stats.quizHistory = stats.quizHistory.slice(0, 50);
        }

        // 更新總體統計
        this.updateOverallStats(stats, quizRecord);
        this.saveStatistics(stats);
    }

    // 更新總體統計
    updateOverallStats(stats, quizRecord) {
        stats.totalQuizzes++;
        stats.totalQuestionsAnswered += (quizRecord.correctCount + quizRecord.incorrectCount);
        stats.totalCorrectAnswers += quizRecord.correctCount;
        
        // 更新模式特定統計
        if (!stats.modeStats[quizRecord.mode]) {
            stats.modeStats[quizRecord.mode] = {
                total: 0,
                totalScore: 0,
                bestScore: 0,
                averageTime: 0
            };
        }
        
        const modeStat = stats.modeStats[quizRecord.mode];
        modeStat.total++;
        modeStat.totalScore += quizRecord.scorePercent;
        
        if (quizRecord.scorePercent > modeStat.bestScore) {
            modeStat.bestScore = quizRecord.scorePercent;
        }
    }

    // 獲取統計數據
    getStatistics() {
        const defaultStats = {
            quizHistory: [],
            totalQuizzes: 0,
            totalQuestionsAnswered: 0,
            totalCorrectAnswers: 0,
            modeStats: {
                practice: { total: 0, totalScore: 0, bestScore: 0, averageTime: 0 },
                exam: { total: 0, totalScore: 0, bestScore: 0, averageTime: 0 },
                timed: { total: 0, totalScore: 0, bestScore: 0, averageTime: 0 },
                marathon: { total: 0, totalScore: 0, bestScore: 0, averageTime: 0 }
            }
        };

        try {
            const stored = localStorage.getItem(this.storageKey);
            return stored ? { ...defaultStats, ...JSON.parse(stored) } : defaultStats;
        } catch {
            return defaultStats;
        }
    }

    // 保存統計數據
    saveStatistics(stats) {
        localStorage.setItem(this.storageKey, JSON.stringify(stats));
    }

    // 重置統計數據
    resetStatistics() {
        localStorage.removeItem(this.storageKey);
    }

    // 獲取學習進度
    getLearningProgress() {
        const stats = this.getStatistics();
        const totalQuestions = questionBank.length;
        const answeredQuestions = new Set();

        // 從歷史記錄中找出所有回答過的題目
        stats.quizHistory.forEach(record => {
            // 這裡需要實際的題目ID，需要修改記錄邏輯來包含題目ID
        });

        return {
            totalQuestions,
            answeredCount: answeredQuestions.size,
            masteryLevel: Math.round((answeredQuestions.size / totalQuestions) * 100)
        };
    }

    // 獲取弱點分析
    getWeaknessAnalysis() {
        const incorrectQuestions = this.quizCore.storageManager.getIncorrectQuestions();
        const questionStats = {};

        // 分析錯題分佈
        incorrectQuestions.forEach(questionId => {
            const question = questionBank.find(q => q.id === questionId);
            if (question) {
                const category = this.categorizeQuestion(question);
                questionStats[category] = (questionStats[category] || 0) + 1;
            }
        });

        return questionStats;
    }

    // 題目分類（根據題目內容）
    categorizeQuestion(question) {
        const text = question.question.toLowerCase();
        if (text.includes('電子商務') || text.includes('b2b') || text.includes('b2c') || text.includes('c2c')) {
            return '電子商務';
        } else if (text.includes('網路') || text.includes('internet') || text.includes('isp')) {
            return '網路基礎';
        } else if (text.includes('服務') || text.includes('ftp') || text.includes('telnet') || text.includes('irc')) {
            return '網路服務';
        } else if (text.includes('應用') || text.includes('gps') || text.includes('gis')) {
            return '網路應用';
        } else {
            return '其他';
        }
    }
}