import { z } from "zod"

export const utilsSchema = z.enum(["DEL", "AC"])
export type Utils = z.infer<typeof utilsSchema>
