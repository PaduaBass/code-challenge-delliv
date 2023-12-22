import FormRegister from '@/components/molecules/register/FormRegister/FormRegister'
const SectionRegister = () => {
  return (
    <section className="flex justify-center items-center w-full bg-purple-700">
      <div className="flex flex-col gap-2 w-[50%] max-sm:w-[80%]">
        <FormRegister />
      </div>
    </section>
  )
}

export default SectionRegister
