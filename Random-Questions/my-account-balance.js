// Adam wants to save money for his first car. He puts money in the SMI bank every day. He starts by putting in $1 on Monday, the first day. Every day from Tuesday to Sunday, he will put in $1 more than the day before. On every subsequent Monday, he will put in $1 more than the previous Monday. Given n, return the total amount of money he will have in the SMI bank at the end of the nth day. 

/** 
@username = Name of the user who is having account
@uptoNumOfDays = upto number of days he/she save money
*/
const mySavingAccBalance = (userName,uptoNumOfDays) => {
    let currentAmount = 0;
    let addAmount = 0;
    for(let day=1; day<=uptoNumOfDays; day++)
    {
        addAmount = addAmount + 1;
        if(day > 7) //it means from next Monday
        {
            let remainderVal = day % 7;
            if(remainderVal === 1) //it means this is Monday
            {
                addAmount = Math.round(day/7)+1;//previous Monday plus 1
            }
        }
        currentAmount += addAmount;
        console.log('added amount',addAmount);
    }
    return `${userName} your current balance is $${currentAmount}.00.`;
}

console.log(mySavingAccBalance('Adam',9));

//---------------------------------------------Rough Work--------------------------------------------------

//1,8,15,22,....

// Mon = 1
// Tue = 2
// Wed = 3
// Thu = 4
// Fri = 5
// Sat = 6
// Sun = 7
// Mon = 2
// Tue = 3
// -------------
// 30 + 3