import MainButton from "../components/MainButton"

const Index = () => {
  return (
    <section className="flex flex-col items-center justify-center h-full w-full my-10 gap-11">
      <article className="flex flex-col items-center max-h-fit gap-8">
        <h2 className="text-white text-xl font-bold">Bienvenido a nuestra herramienta de presupuestos personalizados</h2>
        <p className="text-white font-semibold text-md">Ahorra tiempo con nuestra herramienta de presupuesto intuitiva</p>
      </article>
      <article className="flex flex-row items-center h-full gap-8">
        <MainButton title="Registrarse" route="register"/>
        <MainButton title="Iniciar Sesion" route="login"/></article> 
    </section>
  )
}

export default Index