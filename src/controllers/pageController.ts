import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
  res.send("home controller");
  /* res.render("pages/page"); */
};
export function fishes(arg0: string, fishes: any) {
  throw new Error("Function not implemented.");
}

export function cats(arg0: string, cats: any) {
  throw new Error("Function not implemented.");
}

export function dogs(arg0: string, dogs: any) {
  throw new Error("Function not implemented.");
}
