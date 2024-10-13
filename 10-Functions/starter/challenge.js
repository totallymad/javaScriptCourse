
//CHALLENGE #1

/* const poll = {
    question: 'What is your favorite programming language?',
    options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        const answer = +prompt(`
                ${this.question}\n${this.options.join('\n')}\n(Write option number)
            `);
        if (answer >= 0 && answer <= 3) this.answers[answer]++
        else alert('Введите корректный номер');

        this.displayResults('string');
        this.displayResults('array');
    },

    displayResults(type = 'array') {
        if (type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`);
        } else if (type === 'array') {
            console.log(this.answers);
        }
    }
};


document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

const data1 = [5,2,3];
const data2 = [1,5,3,9,6,1];

// Используем call для вызова displayResults с конкретными массивами
poll.displayResults.call({ answers: data1 }, 'array');
poll.displayResults.call({ answers: data1 }, 'string');

poll.displayResults.call({ answers: data2 }, 'array');
poll.displayResults.call({ answers: data2 }, 'string');
 */

//CHALLENGE 2

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.body.addEventListener('click', () => {
        header.style.color = 'blue';
    })
})();
