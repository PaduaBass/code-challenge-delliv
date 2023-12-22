import InfoLogin from '@/components/molecules/login/InfoLogin/InfoLogin'

const SectionInfoLogin = () => {
  return (
    <section className="flex justify-center items-center w-full bg-purple-900 max-sm:hidden">
      <div className="flex flex-col gap-2">
        <InfoLogin />
      </div>
    </section>
  )
}

export default SectionInfoLogin
