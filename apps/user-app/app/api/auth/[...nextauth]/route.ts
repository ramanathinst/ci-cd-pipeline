import NextAuth from "next-auth"
import { authOptions } from "../../../lib/auth"

const handler = NextAuth(authOptions)



// this is kamana with new feature
export { handler as GET, handler as POST }