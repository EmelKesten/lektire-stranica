export const questions = [
    {
        "question": "Šta je narodna književnost?",
        "answers": [
            { "text": "Književnost nastala u narodu", "correct": true },
            { "text": "Pjesme o narodnim herojima", "correct": false },
            { "text": "Književni žanr o savremenim temama", "correct": false },
            { "text": "Moderni literarni pravac", "correct": false }
        ]
    },
    {
        "question": "Kako se prenosila narodna književnost?",
        "answers": [
            { "text": "Pisanjem na kamen", "correct": false },
            { "text": "Brodom", "correct": false },
            { "text": "S koljena na koljeno, usmenim putem", "correct": true },
            { "text": "Pomoću ptica", "correct": false }
        ]
    },
    {
        "question": "Šta je sevdalinka?",
        "answers": [
            { "text": "Pjesma jednog naroda", "correct": false },
            { "text": "Najpoznatija lirska ljubavna pjesma", "correct": true },
            { "text": "Haiku pjesma", "correct": false },
            { "text": "Domoljubna pjesma", "correct": false }
        ]
    },
    {
        "question": "Prepoznaj baladu iz navedenih naslova?",
        "answers": [
            { "text": "Hasanaginca", "correct": true },
            { "text": "Kadija", "correct": false },
            { "text": "Ah, Aljo", "correct": false },
            { "text": "Nasrudin Hodža", "correct": false }
        ]
    },
    {
        "question": "Kojoj vrsti pripada ep 'Smrt braće Morić'?",
        "answers": [
            { "text": "Japanski", "correct": false },
            { "text": "Historijski", "correct": true },
            { "text": "Narodni", "correct": false },
            { "text": "Kineski", "correct": false }
        ]
    },
    {
        "question": "Šta je tužbalica?",
        "answers": [
            { "text": "Optuživanje nekoga", "correct": false },
            { "text": "Tužba koju predajem na sudu", "correct": false },
            { "text": "Žal za voljenom osobom", "correct": true },
            { "text": "Vrsta ribe", "correct": false }
        ]
    },
    {
        "question": "Lik Fatime spominje se u kojem epu?",
        "answers": [
            { "text": "Božanstvena Komedija", "correct": false },
            { "text": "Ženidba Smail-agić Mehe", "correct": true },
            { "text": "Ilijada i Odiseja", "correct": false },
            { "text": "Smrt braće Morić", "correct": false }
        ]
    },
    {
        "question": "Stid odlikuje kojeg lika?",
        "answers": [
            { "text": "Hasanaginca", "correct": true },
            { "text": "Mehmed Morić", "correct": false },
            { "text": "Smail-aga Meho", "correct": false },
            { "text": "Ibrahim-aga Morić", "correct": false }
        ]
    },
    {
        "question": "Kojim stihom su pisane epske pjesme?",
        "answers": [
            { "text": "Peterac", "correct": false },
            { "text": "Epski deseterac", "correct": true },
            { "text": "Stalni epiteti", "correct": false },
            { "text": "Slavenska antiteza", "correct": false }
        ]
    },
    {
        "question": "Kako se zove pauza u epskim pjesmama?",
        "answers": [
            { "text": "Cenzura", "correct": false },
            { "text": "Štop", "correct": false },
            { "text": "Cezura", "correct": true },
            { "text": "Pauza", "correct": false }
        ]
    },
    {
        "question": "'Što se bjeli u gori zelenoj? Al’ su snjezi, al’ su labudovi?', prepoznaj stilsku figuru?",
        "answers": [
            { "text": "Antiteza boje", "correct": false },
            { "text": "Antiteza emocije", "correct": false },
            { "text": "Slavenska antiteza", "correct": true },
            { "text": "Antiteza ideje", "correct": false }
        ]
    },
    {
        "question": "Koja se stilska figura najčešće koristila?",
        "answers": [
            { "text": "Stalni epiteti", "correct": true },
            { "text": "Anafora", "correct": false },
            { "text": "Metafora", "correct": false },
            { "text": "Predikat", "correct": false }
        ]
    },
    {
        "question": "Kako su likovi u narodnoj književnosti bili opisani?",
        "answers": [
            { "text": "Veći junaci nego što jesu", "correct": true },
            { "text": "Bezosećajni", "correct": false },
            { "text": "Fantastična bića", "correct": false },
            { "text": "Junaci bez mana", "correct": false }
        ]
    },
    {
        "question": "Koji je lik iz narodne književnosti osijedio preko noći?",
        "answers": [
            { "text": "Hasanaginca", "correct": false },
            { "text": "Sveti Sava", "correct": false },
            { "text": "Budalina Tale", "correct": true },
            { "text": "Ibrahim-aga Morić", "correct": false }
        ]
    },
    {
        "question": "Koja pjesma prikazuje nesretnu/zabranjenu ljubav?",
        "answers": [
            { "text": "Banović Strahinja", "correct": false },
            { "text": "Smrt Omera i Merime", "correct": true },
            { "text": "Ženidba Smail-aga Ćeme", "correct": false },
            { "text": "Smrt braće Morić", "correct": false }
        ]
    },
    {
        "question": "Najpoznatiji lik iz narodne priče je?",
        "answers": [
            { "text": "Ibrahim-aga Moric", "correct": false },
            { "text": "Hasanaginca", "correct": false },
            { "text": "Nasrudin Hodža", "correct": true },
            { "text": "Mehmed Moric", "correct": false }
        ]
    }
]
function shuffleQuestionsAndAnswers(questions) {
    // Shuffle questions
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }

    // Shuffle answers within each question
    questions.forEach(question => {
        for (let i = question.answers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [question.answers[i], question.answers[j]] = [question.answers[j], question.answers[i]];
        }
    });

    return questions;
}

const getQuestions = () => {
    return shuffleQuestionsAndAnswers(questions);
}
export default getQuestions;