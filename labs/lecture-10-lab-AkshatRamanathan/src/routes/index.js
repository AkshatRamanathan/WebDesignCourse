import courseRouter from './course-route.js';
const registerRoutes = (app) => {
    app.use('/courses', courseRouter);
}
export default registerRoutes;