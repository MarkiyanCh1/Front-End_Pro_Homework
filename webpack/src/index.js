import "./styles/index.scss"
import $ from 'jquery';


const entries = {
    name: 'Mark',
    age: 24,
};

const finalObj = {
    ...entries,
    language: 'JS',
    framework: 'React',
};

$('.jquery-title').text('Hello from jquery');

console.log(finalObj);