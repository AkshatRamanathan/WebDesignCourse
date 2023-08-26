const boxClickHandler = (event) => {
    // event.preventDefault();
    const currentTarget = event.currentTarget;
    const id = currentTarget.id;
    alert(`Box with id ${id} is clicked with event phase ${event.eventPhase}`);
}

const boxes = document.querySelectorAll(".box");
boxes.forEach(box => {
    box.addEventListener('click', boxClickHandler, true);
    // box.addEventListener('click', boxClickHandler, false);
});