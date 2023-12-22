import Footer from '@/components/molecules/footer/Footer'
import SectionInfoLogin from '@/components/organisms/login/SectionInfoLogin/SectionInfoLogin'
import SectionLogin from '@/components/organisms/login/SectionLogin/SectionLogin'

const Login = () => {
  return (
    <main className="grid grid-cols-2 max-sm:grid-cols-1 h-screen w-screen">
      <SectionInfoLogin />
      <SectionLogin />
      <Footer />
    </main>
  )
}

export default Login
