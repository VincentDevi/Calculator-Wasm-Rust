import { z } from "zod"

export const OperationEnumSchema = z.enum(["ADDITION", "SUBSTRACTION", "MULTIPLICATION", "DIVISION", "PERCENTAGE"])
export type OperationEnum = z.infer<typeof OperationEnumSchema>
