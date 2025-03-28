import ProfileCard from "./ProfileCard"

function App() {

  return (
    <>
     <section className="hero is-dark">
      <div className="hero-body">
        <p className="title">Personal Digital Assistants</p>
        </div>
     </section>
     
     <div className="conteiner">
      <section className="section">
      <div className="columns">
        <div className="column is-4">
          <ProfileCard 
          title="Alexa"
          handle="@alexa24"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3J4n7VBkga8JKnlg5pCnjW1D_84LMeMQayQ&s"
          />
        </div>
        <div className="column is-4">
          <ProfileCard />
        </div>
        <div className="column is-4">
          <ProfileCard />
        </div>
      </div>
      </section>
     </div>
    </>
  )
}

export default App