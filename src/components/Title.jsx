

const Title = ({ text, subtitle }) => {
  return (
    <>
      <div className="border-b border-base-300 pb-5">
        <h2 className="text-4xl font-medium tracking-wider capitalize">
          {text}
        </h2>
        <h3 className="text-2xl font-medium tracking-wider uppercase text-cyan-700">{subtitle}</h3>
      </div>
    </>
  )
}

export default Title
