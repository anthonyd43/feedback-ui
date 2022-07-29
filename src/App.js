import { v4 as uuidv4 } from "uuid"
import Header from "./Components/Header"
import FeedbackData from "./data/FeedbackData"
import FeedbackList from "./Components/FeedbackList"
import FeedbackStats from "./Components/FeedbackStats"
import FeedbackForm from "./Components/FeedbackForm"
import { useState } from "react"

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList
          feedback={feedback}
          // Prop Drilling
          handleDelete={deleteFeedback}
        />
      </div>
    </>
  )
}

export default App
