// index.js

//   // Callbacks
// const handleClick = (ramen) => {
//   // Add code
// };

// const addSubmitListener = () => {
//   // Add code
// }

// const displayRamens = () => {
//  // Add code
// };

// const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here
// }

// main()

// Export functions for testing
// export {
//   displayRamens,
//   addSubmitListener,
//   handleClick,
//   main,
// };

fetch ('http://localhost:3000/ramens')
  .then (resp => resp.json())
  .then (data => {
    renderRamen(data)
    if (data.length > 0){
      handleClick(data[0])
    }
  })


function renderRamen(ramenArr){
  const ramenMenu = document.querySelector('#ramen-menu')
  // console.log(ramenMenu)
  ramenArr.forEach((ramenObj) => {
   // console.log(ramenObj)
    const img = document.createElement('img')
   // console.log(img)
    img.src = ramenObj.image
    img.addEventListener('click',() => handleClick(ramenObj))
    ramenMenu.appendChild(img)
    })
}

  function handleClick(ramenObj){
    const ramenDetail = document.querySelector('#ramen-detail')
    const img = document.querySelector('.detail-image')
    img.src = ramenObj.image

    const h2 = document.querySelector('.name') 
    h2.textContent = ramenObj.name

    const restaurant = document.querySelector('.restaurant')
    restaurant.textContent = ramenObj.restaurant

    const rating = document.querySelector('#rating-display')
    rating.textContent = ramenObj.rating

    const comment = document.querySelector('#comment-display')
    comment.textContent = ramenObj.comment
  }

  const form = document.querySelector('#new-ramen')
  form.addEventListener('submit', (e) => handleAddNewRamen(e))

  function handleAddNewRamen(e){
   e.preventDefault()

   // console.log(e.target)

    const newRamen = { 
      id: '',
      name : e.target.name.value,
      restaurant : e.target.restaurant.value,
      image : e.target.image.value,
      rating : e.target.rating.value,
      comment : document.querySelector('#new-comment').value,
    }
    renderRamen([newRamen])
  }

  const editForm = document.querySelector('#edit-ramen')
  editForm.addEventListener('submit', (e) => handleEditRamen(e))

  function handleEditRamen(e) {
    e.preventDefault();
    const newRating = e.target.rating.value;
    const newComment = document.querySelector('#updated-comment').value;
    // console.log(newComment)

    const ratingDisplay = document.querySelector('#rating-display');
    const commentDisplay = document.querySelector('#comment-display');

    ratingDisplay.textContent = newRating;
    commentDisplay.innerHTML = newComment;
  }
