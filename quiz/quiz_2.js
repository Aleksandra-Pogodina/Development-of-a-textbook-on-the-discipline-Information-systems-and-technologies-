// Объект с правильными ответами
const correctAnswers = {
    q1: "B",
    q2: "C",
    q3: "B",
    q4: "A",
    q5: "C",
    q6: "B",
    q7: "B",
    q8: "B",
    q9: "B",
    q10: "B"
};

function checkAnswers() {
    let resultText = "";
    let correctCount = 0;

    // Перебираем все вопросы
    for (let i = 1; i <= 10; i++) {
        const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedOption) {
            const userAnswer = selectedOption.value;
            const correctAnswer = correctAnswers[`q${i}`];
            if (userAnswer === correctAnswer) {
                correctCount++;
            } else {
                resultText += `Вопрос ${i}: Неправильно! (Правильный ответ: ${correctAnswer})<br>`;
            }
        } else {
            resultText += `Вопрос ${i}: Не выбран ответ.<br>`;
        }
    }

    resultText += `<br>Всего правильных ответов: ${correctCount} из 10.`;
    document.getElementById("result").innerHTML = resultText;
}
