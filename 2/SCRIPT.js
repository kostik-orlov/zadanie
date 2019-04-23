let money = +prompt("Ваш бюджет на месяц?"),
        time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
        budget: money,
        timeData: "Введите дату в формате YYYY-MM-DD",
        expenses: {
                "в этом месяце потрачено": "хз"
        },
        optionalExpenses: {},
        income: [],
        saving: false
};

let i = 0;
do {
        let a = prompt("Введите обязательную статью расходов в этом месяце"),
                b = prompt("Во сколько обойдется?", '');
        i++;
        appData.expenses[a] = b;
        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
                a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
        }
}
while (i < 2)

appData.moneyPerDay = appData.budget / 30;

alert("ежедневный бюджет:" + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
        console.log("минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
        console.log("высокий уровень достатка");
} else {
        console.log("Произошла ошибка");
}