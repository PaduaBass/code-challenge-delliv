import Footer from '@/components/molecules/footer/Footer'
import SectionInfoRegister from '@/components/organisms/register/SectionInfoRegister/SectionInfoRegister'
import SectionRegister from '@/components/organisms/register/SectionRegister/SectionRegister'

const Register = () => {
  return (
    <main className="grid grid-cols-2 bg-purple-600 justify-center h-screen w-screen max-sm:grid-cols-1">
      <SectionInfoRegister />
      <SectionRegister />
      <Footer />
    </main>
  )
}

export default Register
