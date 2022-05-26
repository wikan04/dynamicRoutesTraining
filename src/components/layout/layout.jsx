import Header from '../headers/navbar'
import Footer from '../footers/footer'

function layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default layout
