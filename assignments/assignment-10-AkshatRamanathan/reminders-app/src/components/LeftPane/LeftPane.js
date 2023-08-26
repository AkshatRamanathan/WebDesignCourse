import './LeftPane.scss';
function LeftPane({ toggleModal }) {
    return (
        <section id="panel">
            <span className="material-icons" id="add-reminder" onClick={toggleModal}>add</span>
        </section>
    );
}

export default LeftPane;