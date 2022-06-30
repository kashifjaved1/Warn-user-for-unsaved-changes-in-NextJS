import { useState, useEffect } from 'react';
import Counter from '../Components/Counter';
import Helloworld from '../Components/HW';
import { connect } from 'react-redux';
import { dataChanged } from '../store/actions/counterActions';

const Home = (props) => {
    let [oldValue, setOldValue] = useState(1);
    let [newValue, setNewValue] = useState(1);
    let activeTab = 1;
    const [isClicked, setIsClicked] = useState(false);

    const handleTabClick = (newV, oldV) => {
        console.log("newV: ", newV);
        console.log("oldV: ", oldV);
        setOldValue(oldV);
        setNewValue(newV);
        setIsClicked(props.isDataChanged);
    }

    useEffect(() => {
        window.addEventListener("blur", () => {
            document.title = "";
        });
    })

    console.log("isDataChanged: " + props.isDataChanged + ", isClicked: " + isClicked);

    useEffect(() => {
        console.log("isDataChanged: ", props.isDataChanged + ", " + isClicked);
        if (props.isDataChanged === true && isClicked === true) {
            if (confirm('Are you sure you want move away, you unsaved changes will be lost?')) {
                activeTab = newValue;
                props.dataChanged(false);
                setIsClicked(false);
            }
            else {
                activeTab = oldValue;
                setIsClicked(false);
                // props.dataChanged(false);
            }
        }
    }, [isClicked]);

    if (props.isDataChanged === false) {
        activeTab = newValue;
    }

    return (
        <>
            <ul class="nav nav-tabs">
                <li id="1" className='' onClick={() => handleTabClick(1, 2)}><a>Counter</a></li>
                <li id="2" className='' onClick={() => handleTabClick(2, 1)}><a>Hello World</a></li>
            </ul>
            {activeTab === 1 ? <Counter /> : <Helloworld />}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        isDataChanged: state.counter.isDataChanged,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dataChanged: (value) => dispatch(dataChanged(value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);