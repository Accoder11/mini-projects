const initialDeposit = document.querySelector("#money");
const selectedMonths = document.querySelector("#months");
const interestPerYear = document.querySelector("#interest");
const initialAmount = document.querySelector("#initial-amount");
const profitEarned = document.querySelector("#profit-earned");
const withInterest = document.querySelector("#with-interest");

//bar indicators

const initialBar = document.querySelector(".initial-bar");
const profitBar = document.querySelector(".profit-bar");
const interestBar = document.querySelector(".interest-bar");

//other number input
const inputMonths = document.querySelector("#input-months");
const otherOptions = document.querySelector("#others");


const calculate = () => {

    //INITIAL AMOUNT
    initialAmount.textContent = (Number(money.value));
    initialIndicator();

    //PROFIT EARNED
    const interest = interestPerYear.value / 12 * selectedMonths.value;

    profitEarned.textContent = initialDeposit.value * (interest/100);
    profitIndicator();

    //WIT INTEREST AMOUNT
    withInterest.textContent = (Number(initialDeposit.value) + (Number(profitEarned.textContent)));
    interestIndicator();
};

initialDeposit.addEventListener("input", calculate);
selectedMonths.addEventListener("input", calculate);
interestPerYear.addEventListener("input", calculate);

//BAR indicators

const initialIndicator = () => {
    const height1 = `${(initialAmount.textContent/initialAmount.textContent) * 100}px`;
    initialBar.classList.add("show-bar");
    initialBar.style.height = height1;
};

const profitIndicator = () => {
    const height2 = `${(profitEarned.textContent/initialAmount.textContent) * 100}px`;
    profitBar.classList.add("show-profit");
    profitBar.style.height = height2;
};

const interestIndicator = () => {

    const height3 = `${(withInterest.textContent/initialAmount.textContent) * 100}px`;
    interestBar.classList.add("show-interest");
    interestBar.style.height = height3;
};
