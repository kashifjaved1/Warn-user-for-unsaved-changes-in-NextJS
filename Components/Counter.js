import styles from '../styles/Counter.module.css';
import { connect } from "react-redux";
import { increment, decrement, saveChanges, dataChanged } from '../store/actions/counterActions';
import { useEffect, useState } from 'react';

const Counter = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (props.isDataChanged === true) {
      window.addEventListener('beforeunload', function (e) {
        e.preventDefault();
        e.returnValue = '';
      });

      window.onbeforeunload = function () { return "Navigating away will lose the changes you've made to your code." };
    }
  });

  const handleClick = (symbol) => {
    if (symbol === '+') {
      // props.increment();
      setCount(count + 1);
      props.dataChanged(true);
    }
    else if (symbol === '-') {
      // props.decrement();
      count > 0 ? setCount(count - 1) : setCount(0);
      props.dataChanged(true);
    }
    else {
      console.log("saveButton Clicked");
      props.saveChanges(count);
      props.dataChanged(false);
    }
  }


  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            <input className={styles.counterBtn} type="button" value="+" onClick={() => handleClick("+")} /> Count: {props.count > 0 ? props.count : count} <input className={styles.counterBtn} type="button" value="-" onClick={() => handleClick("-")} />
          </h1>
          <input type="button" className={styles.saveBtn} value="Save" onClick={() => handleClick()} />
        </main>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
    // showWarning: state.counter.userWarning
    isDataChanged: state.counter.isDataChanged,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // increment: () => dispatch(increment()),
    // decrement: () => dispatch(decrement()),
    saveChanges: (count) => dispatch(saveChanges(count)),
    dataChanged: (value) => dispatch(dataChanged(value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);