import appRouter from './app-route.js';
const registerRoutes =(app)=> {
    app.use('/Pac-Man',appRouter);
}
export default registerRoutes;