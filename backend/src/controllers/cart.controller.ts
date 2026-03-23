import { Request, Response } from "express";
import asyncHandler from "../helpers/asyncHandler";

export const getCart = asyncHandler(async (req: Request, res: Response) => {
    
});
export const addCart = asyncHandler(async (req: Request, res: Response) => {});
export const updateCart = asyncHandler(
  async (req: Request, res: Response) => {},
);
export const removeItemCart = asyncHandler(
  async (req: Request, res: Response) => {},
);
export const clearCart = asyncHandler(
  async (req: Request, res: Response) => {},
);
