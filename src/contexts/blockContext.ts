import { atom } from "jotai";
import { BlockName } from "../types/BlockName";

export const blockAtom = atom<BlockName>('Total sales');