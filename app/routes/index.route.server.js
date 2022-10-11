// index.route.server.js YUN KI JUNG - 301189435 - Oct 01, 2022

import { Router } from "express";
import { displayAboutPage, 
    displayContactPage, 
    displayHomePage, 
    displayProjectsPage, 
    displayResume, 
    displayServicesPage, 
    submitInfo} from "../controllers/index.controller.server.js";

const router = Router();

router.get('/', displayHomePage);
router.get('/home', displayHomePage);
router.get('/about', displayAboutPage);
router.get('/projects', displayProjectsPage);
router.get('/services', displayServicesPage);
router.get('/contact', displayContactPage);

router.post('/submit', submitInfo);

router.get('/resume', displayResume);

export default router;
