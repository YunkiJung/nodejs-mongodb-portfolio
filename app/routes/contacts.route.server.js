/*
contacts.route.server.js YUN KI JUNG - 301189435 - Oct 21, 2022
*/

import { Router } from "express";
import { DisplayContactsAddPage, DisplayContactsEditPage, DisplayContactsList, ProcessContactsAddPage, ProcessContactsDelete, ProcessContactsEditPage } from "../controllers/contacts.controller.server.js";

import { AuthGuard } from "../utils/index.js";

const router = Router();

router.get('/contact-list', DisplayContactsList);
router.get('/contact-add', AuthGuard,  DisplayContactsAddPage);
router.post('/contact-add', AuthGuard, ProcessContactsAddPage);
router.post('/contact-edit/:id', AuthGuard, ProcessContactsEditPage);
router.get('/contact-edit/:id', AuthGuard, DisplayContactsEditPage);
router.get('/contact-delete/:id', AuthGuard, ProcessContactsDelete);

export default router;