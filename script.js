const customName = document.getElementById('customName');
const randomize = document.getElementById('randomize');
const story = document.getElementById('story');

const nouns = ['cat', 'dog', 'elephant', 'monkey', 'giraffe'];
const verbs = ['ran', 'jumped', 'swam', 'flew', 'danced'];
const adjectives = ['silly', 'funny', 'happy', 'sad', 'excited'];
const adverbs = ['quickly', 'slowly', 'carefully', 'happily', 'noisily'];

randomize.addEventListener('click', () => {
    const name = customName.value || 'You';
    const noun = randomValueFromArray(nouns);
    const verb = randomValueFromArray(verbs);
    const adjective = randomValueFromArray(adjectives);
    const adverb = randomValueFromArray(adverbs);

    story.innerHTML = `Once upon a time, there was a ${adjective} ${noun} named ${name}. One day, ${name} ${adverb} ${verb} to the park. At the park, ${name} saw a group of children playing. ${name} joined the children and they all had a lot of fun.`;
});

function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}