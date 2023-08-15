import express from 'express';
import * as coffeeController from '../controllers/coffee_controller';

export const router = express.Router();

//This file sets up a route mapping: the path /coffee will call the getCoffee function from the coffeeController
router.get('/coffee', coffeeController.getCoffee);