// import { UserButton } from "@clerk/nextjs";

// export default function Home(){
//     return (
//         <div className="h-screen">
//             {/* <UserButton afterSignOutUrl="/"/> */}
//             <UserButton redirectTo="/" />
//         </div>
//     )
// }
import { UserButton } from "@clerk/nextjs";

export default function Home() {
    return (
        <div className="h-screen">
            <UserButton />
        </div>
    );
}
