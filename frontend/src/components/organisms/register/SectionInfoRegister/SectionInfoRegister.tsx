import InfoRegister from '@/components/molecules/register/infoRegister/InfoRegister'

const SectionInfoRegister = () => {
  return (
    <section className="flex  justify-center items-center w-full bg-purple-900 max-sm:hidden">
      <div className="flex flex-col gap-2">
        <InfoRegister />
      </div>
    </section>
  )
}

export default SectionInfoRegister
