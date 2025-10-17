// 主入口檔案
import { QuizCore } from './modules/quiz-core.js';

// 當頁面載入完成後初始化應用程式
document.addEventListener('DOMContentLoaded', () => {
    new QuizCore();
});