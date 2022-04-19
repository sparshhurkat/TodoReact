import './App.css';
import TodoList from "./component/TodoList"
import styles from "./styles";
import { Typography } from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  todos: {
    fontSize: "16px",
    paddingLeft: "0px",
    marginTop: "5px",
  },
});

const App=()=> {
  const classes = useStyles();
  return (
    <section>
    <Typography variant="h1" className={classes.todos}>
      todos
    </Typography>
    <TodoList />
    </section>
  );
}

export default App;
