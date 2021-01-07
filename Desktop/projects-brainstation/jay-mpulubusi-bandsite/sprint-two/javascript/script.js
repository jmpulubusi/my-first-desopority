// const addComment = document.getElementById('addComment');
// const commentBtn = document.getElementById('commentBtn');
// const commentSection = document.getElementById('commentSection');
// const addName = document.getElementById('addName');
// const newName = document.createElement('h3')
// const newComment = document.createElement('p');
// const commentContent = document.createTextNode(addComment.value);
// const nameContent = document.createTextNode(addName.value);
// newComment.appendChild(commentContent);
// newCommentSection.appendChild(newName);
// newCommentSection.appendChild(newComment);
// newName.appendChild(nameContent);
let timeStamp = new Date()
let time = document.createElement('span')
time.innerHTML = timeStamp;


const commentObject = [
   { name: 'Micheal Lyons',comment: "They BLEW the ROOF off at their last show, once everyone starte figuring out they were going. This is still simply the great",
    timeOf: timeStamp},
   
    { nameOne:'Gary Wong', commentOne:'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!',
   timeOfOne: timeStamp}, 
    
    {nameTwo:'Theodore Duncan', commentTwo:'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!',
    timeOfTwo: timeStamp}, 
]
const filteredNames = commentObject.map((item) => {
    return item.name
})
const filteredComments = commentObject.map((item) => {
    return item.comment
})

const filteredNamesOne = commentObject.map((item) => {
    return item.nameOne
})

const filteredCommentsOne = commentObject.map((item) => {
    return item.commentOne
})


const filteredNamesTwo = commentObject.map((item) => {
    return item.nameTwo
})

const filteredCommentsTwo = commentObject.map((item) => {
    return item.commentTwo
})



const newCommentSection= document.getElementById('newCommentSection')

let defaultCommentName = document.createElement('h3');
defaultCommentName.innerText = filteredNames;
newCommentSection.appendChild(defaultCommentName);

defaultCommentName.appendChild(time);

let defaultComment = document.createElement('p');
defaultComment.innerText = filteredComments;
newCommentSection.appendChild(defaultComment);

let newCommentSectionOne = document.createElement('div')
newCommentSection.appendChild(newCommentSectionOne)

let defaultCommentNameOne = document.createElement('h3')
defaultCommentNameOne.innerText = filteredNamesOne
newCommentSectionOne.appendChild(defaultCommentNameOne)

let defaultCommentOne = document.createElement('p');
defaultCommentOne.innerText = filteredCommentsOne;
newCommentSectionOne.appendChild(defaultCommentOne);

defaultCommentNameOne.appendChild(time);

let newCommentSectionTwo = document.createElement('div')
newCommentSection.appendChild(newCommentSectionTwo)

let defaultCommentNameTwo = document.createElement('h3')
defaultCommentNameTwo.innerText = filteredNamesTwo
newCommentSectionTwo.appendChild(defaultCommentNameTwo)

let defaultCommentTwo = document.createElement('p');
defaultCommentTwo.innerText = filteredCommentsTwo;
newCommentSection.appendChild(defaultCommentOne);

defaultCommentNameTwo.appendChild(time);

const form = document.getElementById('commentForm')


function displayComment(name = "", comment, timeStamp){
    commentObject[name] = comment;
    commentObject.timeStamp =timeStamp;
    return name,timeStamp;
};
