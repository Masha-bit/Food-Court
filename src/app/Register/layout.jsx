// import Button from '../Button'
import '../globals.css'



export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">        
      <body className='bg-slate-100 block h-screen'>
        <div className='h-[100%] w-[100%] relative'>
        <Nav/>
        {children}
        </div>
      </body>
    </html>
  )
}
