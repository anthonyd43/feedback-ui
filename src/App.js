import Header from "./Components/Header"
import FeedbackData from "./data/FeedbackData"
import FeedbackList from "./Components/FeedbackList"
import { useState } from "react"

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  )
}

export default App
