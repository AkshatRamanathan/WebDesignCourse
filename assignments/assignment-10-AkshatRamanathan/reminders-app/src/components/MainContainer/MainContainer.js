import './MainContainer.scss';
function MainContainer(props) {
    return (
        <section id="mainContainer">
            {props.children}
        </section>
    );
}

export default MainContainer;