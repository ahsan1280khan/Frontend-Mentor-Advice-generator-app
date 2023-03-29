const diceicon = document.querySelector('.diceicon');
const advice = document.querySelector('.advice');
const advicenumber = document.querySelector('.advicenumber');

const myAdvice = [
    "Follow your dreams, but remember to have a plan.",
    "Don't be afraid to take risks, but be smart about it.",
    "Focus on what you can control, and don't worry about the rest.",
    "Take care of your physical and mental health, it's the foundation of everything.",
    "Be kind to others, and don't forget to be kind to yourself too.",
    "Learn from your mistakes, and use them as opportunities for growth.",
    "Always keep learning, and never stop seeking knowledge and new experiences.",
    "Be true to yourself, and stay authentic in everything you do.",
    "Surround yourself with positive people who inspire and support you.",
    "Believe in yourself, and don't let anyone else's doubts hold you back."
  ];

  function generateAdvice() {
    const randomIndex = Math.floor(Math.random() * myAdvice.length)
    const advice = myAdvice[randomIndex]
    return {Massage: advice, Index: randomIndex}
    
  }

  diceicon.addEventListener('click', ()=> {

    const generatedAdvice = generateAdvice();
    const newrandom = generatedAdvice.Index + 1  * 87;
    advice.innerHTML = ` " ${generatedAdvice.Massage} "` ;
    advicenumber.innerHTML = ` ADVICE # ${newrandom} ` ;

  });

 