const questions = [
  {
    q: "เราคบกันเมื่อไหร่ และ ที่ไหน",
    c: ["1.29/10/68-ที่โรงหนัง", "2.29/11/68-ที่สวนรถไฟ", "3.29/09/68-ที่สวนรถไฟ"],
    correct: 1,
  },
  {
    q: "สิ่งที่อยากทำมากที่สุดตอนอยู่ด้วยกัน",
    c: ["1.จุ้บๆ", "2.ต่อยกัน", "3.รัดคอ"],
    correct: 0,
  },
  {
    q: "เกมที่เราเล่นด้วยกันครั้งแรก",
    c: ["1.Minecraft", "2.Roblox", "3.Goose Goose Duck"],
    correct: 0,
  },
  {
    q: "อนาคตเรามีแพลนทำอะไรด้วยกัน",
    c: ["1.ไปดูหนัง", "2.ไม่ทำอะไร/นอนเล่น", "3.ไปดูแมนยู/ไปดิสนีย์ และ ทุกๆที่ที่อยากไป"],
    correct: 2,
  },
  {
    q: "รักอีกฝ่ายมากแค่ไหน",
    c: ["1.ก็รัก", "2.รักมากมาย", "3.รักมากที่สุดในโลก ไม่เคยรักใครขนาดนี้มาก่อน"],
    correct: 2,
  }
];

let index = 0;
let score = 0;

const questionText = document.getElementById("questionText");
const choicesBox = document.getElementById("choices");
const answerHint = document.getElementById("answerHint");
const gameCard = document.getElementById("gameCard");

function renderQuestion() {
  const q = questions[index];
  questionText.textContent = `${index + 1}. ${q.q}`;
  answerHint.textContent = "";
  choicesBox.innerHTML = "";

  q.c.forEach((choice, i) => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = choice;
    btn.onclick = () => selectAnswer(i);
    choicesBox.appendChild(btn);
  });
}

function selectAnswer(selected) {
  const q = questions[index];

  if (selected === q.correct) {
    score++;
    answerHint.textContent = " ตอบได้ตรงใจ";
  } else {
    answerHint.textContent = " ไม่เป็นไรนะ";
  }

  answerHint.textContent += " — " + q.explain;

  index++;

  setTimeout(() => {
    if (index < questions.length) {
      renderQuestion();
    } else {
      showResult();
    }
  }, 1200);
}

function showResult() {
  gameCard.innerHTML = `
    <h2>เล่นจบแล้ว </h2>
    <p class="subtle">คุณได้</p>
    <h6>${score} / ${questions.length} คะแนน</h6>
    <p class="subtle">${resultMessage()}</p>
  `;
}

function resultMessage() {
  if (score === 5) return "เข้ากันได้ดีมาก เหมือนเกิดมาเพื่อกันเลย ";
  if (score >= 3) return "หวานกำลังดี น่ารักมาก ";
  return "ความรักไม่ได้วัดที่คะแนน แต่หัวใจ ";
}

renderQuestion();
