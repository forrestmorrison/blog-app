import { useState } from "react"
import { Button, TextField } from "@mui/material"

const CreatePost = (props) => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleBodyChange = (e) => {
    setBody(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="create-post">
      <h4>title</h4>
      <form onSubmit={handleSubmit}>
        <TextField 
          sx={{
            width: "100%"
          }}
          onChange={handleTitleChange}
          value={title}
        />
        <h4>body</h4>
        <TextField 
          sx={{
            width: "100%"
          }}
          multiline
          rows={12}
          onChange={handleBodyChange}
          value={body}
        />
        <Button
          sx={{
            marginTop: "10px",
            fontWeight: "bold",
            backgroundColor: "#0275d8",
            color: "white",
            "&:hover": {
              color: "#0275d8"
            }
          }}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  )
}

export default CreatePost