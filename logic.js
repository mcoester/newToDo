let savedNotes = [];
let index = 1;

const setHeadline = () =>{
    const headerInput = document.getElementById('headline');
    const title = document.getElementById('editableTitle');
    title.innerHTML = headerInput.value + ':';
    headerInput.value = '';
}

const headerButton = document.getElementById('headerButton');
headerButton.addEventListener('click', setHeadline);

const writeNote = () =>{
    const listElement = document.createElement('li');
    const listInputElement = document.getElementById('listInput');
    const userInput = document.getElementById('notes');
    const list = document.getElementById('toDo');

    savedNotes.push(userInput.value);
    listElement.innerHTML = '- ' + userInput.value;
    userInput.value = "";
    list.insertBefore(listElement, listInputElement);
}

const addButton = document.getElementById('addButton');
addButton.addEventListener('click', writeNote);

const save = () =>{
    let stringIndex = '' + index;
    localStorage.setItem(stringIndex, JSON.stringify(savedNotes));
} 

const saveButton = document.getElementById('saveButton');
saveButton.addEventListener('click', save);

const load = () =>{
    const listInputElement = document.getElementById('listInput');
    const list = document.getElementById('toDo');
    let stringIndex = '' + index;
    savedNotes = JSON.parse(localStorage.getItem(stringIndex));
    if(list.children.length === 1){
        for(let i = 0; i < savedNotes.length; i++){
            const listElement = document.createElement('li');
            listElement.innerHTML = '- ' + savedNotes[i];
            list.insertBefore(listElement, listInputElement);
        }
    }
}

const loadButton = document.getElementById('loadButton');
loadButton.addEventListener('click', load);

const clear = () =>{
    const list = document.getElementById('toDo');
    const listElementArray = list.children;
    const arrayLength = listElementArray.length;
    for(let i = 1; i < arrayLength; i++){
        list.removeChild(listElementArray[0]);
    }
    savedNotes = [];
}

const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', clear);