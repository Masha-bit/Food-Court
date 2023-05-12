// import '../globals.css'

import Nav from "../Nav"
import foodDes from "react-icons/app/Menu/components/foodDes"


export const metadata = {
  title: `${foodDes.foodPlates.name} Food Details`,
  description: `${foodDes.foodPlates.description}`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet"/>
    <body>
       <Nav/>
        {children}
        
    </body>
    </html>
  )
}
