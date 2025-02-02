import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
  /* res.send("home controller"); */
  res.render("pages/page");
};

export const dogs = (req: Request, res: Response) => {
  res.send("dogs");
};

export const fishes = (req: Request, res: Response) => {
  res.send("fishes");
  /* throw new Error("Function not implemented."); */
};

export const cats = (req: Request, res: Response) => {
  res.send("cats");
};
