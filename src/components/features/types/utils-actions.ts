import { z } from "zod"

export const UtilsActionsEnumSchema = z.enum(["DELETE", "AC", "CALCULATE"])
export type UtilsActionsEnum = z.infer<typeof UtilsActionsEnumSchema>
