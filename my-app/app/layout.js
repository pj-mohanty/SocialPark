// import { ClerkProvider } from "@clerk/nextjs";
// import "./globals.css";
// import { Inter } from "next/font/google";

// // import LeftSideBar from "@components/layout/LeftSideBar";
// // import MainContainer from "@components/layout/MainContainer";
// // import RightSideBar from "@components/layout/RightSideBar";
// // import BottomBar from "@components/layout/BottomBar";

// export const metadata = {
//   title: "SOCIAL PARK",
//   description: "Next 14 Social Media App",
// };

// const inter = Inter({ subsets: ["latin"] });

// export default function RootLayout({ children }) {
//   return (
//     <ClerkProvider>
//       <html lang="en">
//         <body className={`${inter.className} bg-purple-2 text-light-1`}>
//           {/* <main className="flex flex-row"> */}
//             {/* <LeftSideBar />
//             <MainContainer> */}
//               {children}
//             {/* </MainContainer>
//             <RightSideBar />
//           </main>
//           <BottomBar /> */}
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }

import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import './globals.css'

export default function RootLayout({ children }, { children: React, ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  )
}