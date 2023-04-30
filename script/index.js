const addButton = document.getElementById('add-button');
const addFormInput = document.getElementById('add-form-input');
const ulList = document.querySelector('#book-list > ul');
const hideBox = document.getElementById('hide');
const searchInput = document.getElementById('searchBar');
const liElements = document.getElementsByTagName ('li')

//add book function
const handleAddBook = () => {
    const { value } = addFormInput
    if (value.trim()) {
        const li = document.createElement ('li')
    const bookName = document.createElement('span');
    const deleteButton = document.createElement('span');

    bookName.innerText = value;
    deleteButton.innerText = 'delete'

    bookName.classList.add('name');
    deleteButton.classList.add('delete');
    li.appendChild(bookName);
    li.appendChild(deleteButton);
    ulList.appendChild(li);
    addFormInput.value = '';

    }
}
    
addButton.addEventListener('click', handleAddBook) //1 eventi tesak, 2rd functione
//-------------------------------------------

const handelDeleteBook = event => {
    const { target } = event;
    if (target.className === 'delete') {
        const li = target.parentElement;
        console.log(li);
        ulList.removeChild(li);
    }
}

ulList.addEventListener('click', handelDeleteBook);
//------------------------------------------

// hide book fuctional
const handleHideBooks = event => {
    const { target } = event;
    ulList.style.display = target.checked ? 'none' : 'block';
    // if (target.checked) {
    //     ulList.style.display = 'none'
    // } else {
    //     ulList.style.display = 'block'
    // }
}


hideBox.addEventListener('input',handleHideBooks);
//--------------------

// const handleSearch = (searchInput) => {
//     const { value } = searchInput;
//     ulList[li].
//     console.log(value);
//     // for vercnel amen span stugel HOMEWORK SEARCH
// };

const handleSearch = () => {
    const query = searchInput.value.trim().toLowerCase();
    for (let i = 0; i < liElements.length; i++) {
      const li = liElements[i];
      const bookName = li.querySelector('.name').innerText.toLowerCase();
      if (bookName.includes(query)) {
        li.style.display = 'block';
      } else {
        li.style.display = 'none';
      }
    }
  };

  /////////////TAPAK


searchInput.addEventListener('keyup', handleSearch)
