import { ValidationChain } from "express-validator";
import { Request, Response, NextFunction, RequestHandler } from "express";

declare global {
    function useValidate(...validations: ValidationChain[]): RequestHandler;
}