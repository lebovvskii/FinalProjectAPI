const express = require('express');
const userRouter = require('./routes/user.routes');
const taskRouter = require('./routes/task.routes');
const taskCategoriesRouter = require('./routes/task-categories.routes');
const userRolesRouter = require('./routes/user-role.routes');
const teamRouter = require('./routes/team.routes');
const pomodoroRouter = require('./routes/pomodoro-cycles.routes');
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use('/api', userRouter);
app.use('/api', taskRouter);
app.use('/api', taskCategoriesRouter);
app.use('/api', userRolesRouter);
app.use('/api', teamRouter);
app.use('/api', pomodoroRouter);

app.listen(PORT, () => console.log('Сервер запушен', PORT));
