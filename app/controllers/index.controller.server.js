// index.controller.server.js YUN KI JUNG - 301189435 - Oct 01, 2022


import fs from 'fs';
import { UserDisplayName } from "../utils/index.js";


export function displayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home', displayName: UserDisplayName(req) } );
};

export function displayAboutPage(req, res, next) {
    res.render('index', { title: 'About', page: 'about', displayName: UserDisplayName(req) } );
};

export function displayProjectsPage(req, res, next) {
    res.render('index', { title: 'Projects', page: 'projects', displayName: UserDisplayName(req) } );
};

export function displayServicesPage(req, res, next) {
    res.render('index', { title: 'Services', page: 'services', displayName: UserDisplayName(req) } );
};

export function displayContactPage(req, res, next) {
    res.render('index', { title: 'Contact', page: 'contact', displayName: UserDisplayName(req) } );
};

export function submitInfo(req, res, next){
    console.log(req.body);
    res.render('index', { title: 'Home', page: 'home', displayName: UserDisplayName(req) })
}

export function displayResume(req, res, next) {
    var data =fs.readFileSync('./public/content/resume.pdf');
    res.contentType("application/pdf");
    res.send(data);
};


