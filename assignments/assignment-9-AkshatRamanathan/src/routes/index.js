import reminderRouter from './reminder-route.js';
const registerRoutes = (app) => {
    app.use('/reminder', reminderRouter);
}
export default registerRoutes;