import FormLogin from '@/components/molecules/login/FormLogin/FormLogin'
const SectionLogin = () => {
  return (
    <section className="flex justify-center items-center w-full bg-purple-700">
      <div className="flex flex-col gap-2 w-[50%] max-sm:w-[80%]">
        <FormLogin />
      </div>
    </section>
  )
}

export default SectionLogin
